import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const siteUrl = "https://hilberer.dev";
const sourceScripts = [
  "data/profile.js",
  "data/experience.js",
  "data/projects.js",
  "data/certifications.js",
  "i18n/de.js",
  "i18n/en.js",
  "assets/js/icons.js"
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeJson(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

function getValue(source, key) {
  return key.split(".").reduce(function (value, part) {
    return value == null ? undefined : value[part];
  }, source);
}

function flatten(source, prefix = "") {
  return Object.entries(source).flatMap(function ([key, value]) {
    const pathKey = prefix ? prefix + "." + key : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return flatten(value, pathKey);
    }
    return [[pathKey, value]];
  });
}

function formatDate(date) {
  const [year, month] = date.split("-");
  return month + "/" + year;
}

async function loadAppData() {
  const app = { data: {}, i18n: {} };
  const sandbox = { window: { APP: app }, APP: app };
  vm.createContext(sandbox);

  for (const relativePath of sourceScripts) {
    const source = await readFile(path.join(rootDir, relativePath), "utf8");
    vm.runInContext(source, sandbox, { filename: relativePath });
  }

  return sandbox.window.APP;
}

function renderProjects(app, locale) {
  const t = function (key) { return getValue(app.i18n[locale], key); };
  return app.data.projects
    .slice()
    .sort(function (left, right) { return left.order - right.order; })
    .map(function (project) {
      const highlights = project.highlights.map(function (highlight) {
        return "<li>" + escapeHtml(t("projects." + project.id + ".highlights." + highlight)) + "</li>";
      }).join("");
      const tech = project.tech.map(function (item) {
        return '<li class="tag">' + escapeHtml(item) + "</li>";
      }).join("");

      return [
        '<article class="project-entry">',
        '<h3 class="project-entry__title">' + escapeHtml(project.title) + "</h3>",
        '<span class="project-entry__environment"><span class="issuer-icon">' + app.icons.getIcon(project.environment) + "</span><span>" + escapeHtml(t("projects.environments." + project.environment)) + "</span></span>",
        '<p class="project-entry__description">' + escapeHtml(t("projects." + project.id + ".description")) + "</p>",
        '<ul class="project-entry__highlights">' + highlights + "</ul>",
        '<ul class="tag-list">' + tech + "</ul>",
        '<a class="project-entry__link" href="' + escapeHtml(project.link) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(t("projects.linkLabel")) + " -&gt;</a>",
        "</article>"
      ].join("");
    })
    .join("");
}

function renderExperience(app, locale) {
  const t = function (key) { return getValue(app.i18n[locale], key); };
  return app.data.experience
    .slice()
    .sort(function (left, right) { return left.order - right.order; })
    .map(function (job) {
      const endDate = job.endDate ? formatDate(job.endDate) : t("experience.present");
      return [
        '<li class="experience-item">',
        '<div class="experience-item__header"><span class="experience-item__role">' + escapeHtml(t("experience." + job.id + ".role")) + " - " + escapeHtml(job.company) + "</span></div>",
        '<div class="experience-item__meta"><span class="experience-item__dates"><span class="issuer-icon">' + app.icons.getIcon("calendar") + "</span><span>" + escapeHtml(formatDate(job.startDate) + " - " + endDate) + "</span></span>",
        '<span class="experience-item__location">' + escapeHtml(t("experience." + job.id + ".location")) + "</span></div>",
        '<p class="experience-item__description">' + escapeHtml(t("experience." + job.id + ".description")) + "</p>",
        "</li>"
      ].join("");
    })
    .join("");
}

function renderCertifications(app, locale, certifications) {
  const verifyLabel = getValue(app.i18n[locale], "certifications.verifyLabel");
  return certifications
    .slice()
    .sort(function (left, right) { return left.order - right.order; })
    .map(function (certification) {
      return [
        '<div class="card cert-card">',
        '<span class="cert-card__name">' + escapeHtml(certification.name) + "</span>",
        '<span class="cert-card__code">' + escapeHtml(certification.code) + "</span>",
        '<div class="cert-card__footer"><span class="cert-issuer"><span class="issuer-icon">' + app.icons.getIcon(certification.issuerIcon) + "</span><span>" + escapeHtml(certification.issuer) + "</span></span>",
        '<a class="cert-card__verify-link" href="' + escapeHtml(certification.verifyUrl) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(verifyLabel) + "</a></div>",
        "</div>"
      ].join("");
    })
    .join("");
}

function replaceElementText(html, key, value) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const expression = new RegExp("(<([a-zA-Z][\\w:-]*)[^>]*data-i18n-key=\\\"" + escapedKey + "\\\"[^>]*>)[^<]*(</\\2>)", "g");
  return html.replace(expression, "$1" + escapeHtml(value) + "$3");
}

function replaceAttribute(html, dataKey, attribute, value) {
  const escapedKey = dataKey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const expression = new RegExp("<([a-zA-Z][\\w:-]*)([^>]*data-i18n-key=\\\"" + escapedKey + "\\\"[^>]*)>", "g");
  return html.replace(expression, function (tag) {
    const attributeExpression = new RegExp("(" + attribute + "=\\\")[^\\\"]*(\\\")");
    return tag.replace(attributeExpression, "$1" + escapeHtml(value) + "$2");
  });
}

function replaceBindingText(html, key, value) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const expression = new RegExp("(<([a-zA-Z][\\w:-]*)[^>]*data-bind=\\\"" + escapedKey + "\\\"[^>]*>)[^<]*(</\\2>)", "g");
  return html.replace(expression, "$1" + escapeHtml(value) + "$3");
}

function replaceBindingHref(html, key, value) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const expression = new RegExp("<([a-zA-Z][\\w:-]*)([^>]*data-bind=\\\"" + escapedKey + "\\\"[^>]*)>", "g");
  return html.replace(expression, function (tag) {
    if (/href="[^"]*"/.test(tag)) {
      return tag.replace(/href="[^"]*"/, 'href="' + escapeHtml(value) + '"');
    }
    return tag.slice(0, -1) + ' href="' + escapeHtml(value) + '">';
  });
}

function replaceMount(html, id, content) {
  const expression = new RegExp(
    '(<([a-zA-Z][\\w:-]*)[^>]*id="' + id + '"[^>]*>)[\\s\\S]*?(</\\2>)'
  );
  return html.replace(expression, "$1" + content + "$3");
}

function replaceHrefById(html, id, value) {
  const expression = new RegExp('(<[a-zA-Z][\\w:-]*[^>]*id="' + id + '"[^>]*)(>)', "g");
  return html.replace(expression, function (match, start, end) {
    if (/href="[^"]*"/.test(start)) {
      return start.replace(/href="[^"]*"/, 'href="' + escapeHtml(value) + '"') + end;
    }
    return start + ' href="' + escapeHtml(value) + '"' + end;
  });
}

function renderLanguageToggle(locale, labels) {
  return '<div id="lang-toggle" class="lang-toggle" data-i18n-key="nav.langToggleAria" data-i18n-attr="aria-label" aria-label="' + escapeHtml(labels.nav.langToggleAria) + '">' +
    '<button type="button" class="lang-toggle__button' + (locale === "de" ? " is-active" : "") + '" data-lang="de" aria-pressed="' + String(locale === "de") + '">DE</button>' +
    '<button type="button" class="lang-toggle__button' + (locale === "en" ? " is-active" : "") + '" data-lang="en" aria-pressed="' + String(locale === "en") + '">EN</button>' +
    "</div>";
}

function buildMetadata(app, locale, pageUrl) {
  const labels = app.i18n[locale];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": siteUrl + "/#website",
        name: app.data.profile.name,
        url: siteUrl + "/",
        inLanguage: locale
      },
      {
        "@type": "Person",
        "@id": siteUrl + "/#alexander-hilberer",
        name: app.data.profile.name,
        jobTitle: "Data & AI Systems Engineer",
        url: siteUrl + "/",
        sameAs: [app.data.profile.githubUrl, app.data.profile.linkedinUrl],
        knowsAbout: ["Data Engineering", "MLOps", "Microsoft Fabric", "Artificial Intelligence"]
      }
    ]
  };

  return [
    '<meta name="description" content="' + escapeHtml(labels.meta.description) + '" data-i18n-key="meta.description" data-i18n-attr="content" />',
    '<meta name="robots" content="index, follow" />',
    '<link rel="canonical" href="' + pageUrl + '" />',
    '<link rel="alternate" hreflang="de" href="' + siteUrl + '/" />',
    '<link rel="alternate" hreflang="en" href="' + siteUrl + '/en/" />',
    '<link rel="alternate" hreflang="x-default" href="' + siteUrl + '/" />',
    '<meta property="og:type" content="website" />',
    '<meta property="og:url" content="' + pageUrl + '" />',
    '<meta property="og:title" content="' + escapeHtml(labels.meta.title) + '" data-i18n-key="meta.title" data-i18n-attr="content" />',
    '<meta property="og:description" content="' + escapeHtml(labels.meta.description) + '" data-i18n-key="meta.description" data-i18n-attr="content" />',
    '<script type="application/ld+json">' + escapeJson(structuredData) + "</script>"
  ].join("\n  ");
}

function rewriteEnglishAssets(html) {
  return html
    .replaceAll('href="favicon.svg"', 'href="../favicon.svg"')
    .replaceAll('href="assets/', 'href="../assets/')
    .replaceAll('src="assets/', 'src="../assets/')
    .replaceAll('src="data/', 'src="../data/')
    .replaceAll('src="i18n/', 'src="../i18n/');
}

function renderPage(template, app, locale) {
  const labels = app.i18n[locale];
  const assetPrefix = locale === "en" ? "../" : "";
  const pageUrl = locale === "en" ? siteUrl + "/en/" : siteUrl + "/";
  const profile = app.data.profile;
  const certifications = app.data.certifications;
  const primary = certifications.filter(function (cert) { return cert.status === "active" && cert.group !== "supporting"; });
  const supporting = certifications.filter(function (cert) { return cert.status === "active" && cert.group === "supporting"; });
  const retired = certifications.filter(function (cert) { return cert.status === "retired"; });

  let html = template.replace(/<html lang="[^"]*">/, '<html lang="' + locale + '">');
  html = html.replace(/<title>[\s\S]*?<\/title>/, "<title>" + escapeHtml(labels.meta.title) + "</title>");
  html = html.replace("<!-- build:metadata -->", buildMetadata(app, locale, pageUrl));

  for (const [key, value] of flatten(labels)) {
    if (typeof value !== "string") continue;
    html = replaceElementText(html, key, value);
  }
  for (const [key, value] of flatten(labels)) {
    if (typeof value !== "string") continue;
    html = replaceAttribute(html, key, "aria-label", value);
    html = replaceAttribute(html, key, "content", value);
  }

  html = replaceBindingText(html, "profile.name", profile.name);
  html = replaceBindingText(html, "profile.email", profile.email);
  html = replaceBindingHref(html, "profile.githubUrl", profile.githubUrl);
  html = replaceBindingHref(html, "profile.linkedinUrl", profile.linkedinUrl);
  html = replaceBindingHref(html, "profile.emailHref", "mailto:" + profile.email);
  html = replaceHrefById(html, "resume-download-link", assetPrefix + profile.resume[locale]);
  html = html.replace(/<div id="lang-toggle"[\s\S]*?<\/div>/, renderLanguageToggle(locale, labels));
  html = replaceMount(html, "projects-grid", renderProjects(app, locale));
  html = replaceMount(html, "experience-list", renderExperience(app, locale));
  html = replaceMount(html, "certifications-grid", renderCertifications(app, locale, primary));
  html = replaceMount(html, "supporting-certifications-grid", renderCertifications(app, locale, supporting));
  html = replaceMount(html, "retired-certifications-grid", renderCertifications(app, locale, retired));
  html = html.replace('<span id="year"></span>', '<span id="year">' + new Date().getFullYear() + "</span>");

  if (locale === "en") html = rewriteEnglishAssets(html);
  return html;
}

async function copyStaticFiles() {
  for (const item of ["assets", "data", "i18n", "favicon.svg"]) {
    await cp(path.join(rootDir, item), path.join(distDir, item), { recursive: true });
  }
}

async function build() {
  const [template, app] = await Promise.all([
    readFile(path.join(rootDir, "index.html"), "utf8"),
    loadAppData()
  ]);

  await rm(distDir, { recursive: true, force: true });
  await mkdir(path.join(distDir, "en"), { recursive: true });
  await copyStaticFiles();
  await writeFile(path.join(distDir, "index.html"), renderPage(template, app, "de"));
  await writeFile(path.join(distDir, "en", "index.html"), renderPage(template, app, "en"));
  await writeFile(path.join(distDir, "robots.txt"), "User-agent: *\nAllow: /\nSitemap: " + siteUrl + "/sitemap.xml\n");
  await writeFile(path.join(distDir, "sitemap.xml"), [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    "  <url><loc>" + siteUrl + "/</loc></url>",
    "  <url><loc>" + siteUrl + "/en/</loc></url>",
    "</urlset>"
  ].join("\n"));
}

build().catch(function (error) {
  console.error(error);
  process.exitCode = 1;
});
