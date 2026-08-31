import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requiredPages = [
  ["dist/index.html", "de", "https://hilberer.dev/"],
  ["dist/en/index.html", "en", "https://hilberer.dev/en/"]
];

async function assertIncludes(file, content, expected) {
  if (!content.includes(expected)) {
    throw new Error(file + " is missing: " + expected);
  }
}

async function check() {
  for (const [relativePath, locale, canonical] of requiredPages) {
    const page = await readFile(path.join(rootDir, relativePath), "utf8");
    await assertIncludes(relativePath, page, '<html lang="' + locale + '">');
    await assertIncludes(relativePath, page, '<link rel="canonical" href="' + canonical + '" />');
    await assertIncludes(relativePath, page, 'name="description"');
    await assertIncludes(relativePath, page, 'application/ld+json');
    await assertIncludes(relativePath, page, locale === "de" ? "Saarland, Deutschland" : "Saarland, Germany");
    await assertIncludes(relativePath, page, 'class="project-entry"');
    await assertIncludes(relativePath, page, 'class="experience-item"');
    await assertIncludes(relativePath, page, 'cert-card');
    if (page.includes('id="projects-grid" class="projects-grid"></div>')) {
      throw new Error(relativePath + " contains an unrendered projects mount.");
    }
  }

  const sitemap = await readFile(path.join(rootDir, "dist/sitemap.xml"), "utf8");
  await assertIncludes("dist/sitemap.xml", sitemap, "https://hilberer.dev/");
  await assertIncludes("dist/sitemap.xml", sitemap, "https://hilberer.dev/en/");
}

check().catch(function (error) {
  console.error(error);
  process.exitCode = 1;
});
