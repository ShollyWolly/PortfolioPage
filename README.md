# Portfolio Site

Static resume/portfolio page for Alexander Hilberer. Plain HTML/CSS/JS with a small Node.js build step that pre-renders the German and English pages for GitHub Pages.

## Structure

```
index.html              # single page shell, sections, data-i18n-key/data-bind hooks
assets/css/             # base -> theme -> layout -> components (loaded in that order)
assets/js/
  i18n.js               # language switching, DOM text swap, persistence
  content.js             # hydrates project/certification/profile data in the browser
  main.js                # init orchestrator
data/                    # content: profile, experience, projects, certifications
i18n/                    # translation dictionaries (de.js default, en.js)
assets/resume/           # your resume PDFs (not included, see below)
scripts/build.mjs        # renders / and /en/ into dist/
scripts/check-build.mjs  # verifies the generated pages
.github/workflows/       # builds and deploys the Pages artifact
```

Content and layout are separated: `data/` and `i18n/` hold everything editable. The build renders those values into HTML so crawlers receive the complete page without running JavaScript; the browser scripts keep language switching and navigation interactive.

## Add a project

Edit `data/projects.js`, add an object with `id`, `title`, `link`, `environment` ("onprem"/"azure"/"gcp" - drives the small icon under the title, see `assets/js/icons.js`), `highlights[]`, `tech[]`, and `order`. `highlights` contains the three keys used for the project's short technical points.

Then add matching `projects.<id>.description` and `projects.<id>.highlights.<key>` entries to **both** `i18n/de.js` and `i18n/en.js`. Every project uses the same layout, so no HTML/CSS changes are needed.

## Add a job to Experience

Edit `data/experience.js`, add `{ id, company, startDate: "YYYY-MM", endDate: "YYYY-MM" | null, order }` (`endDate: null` renders as "Present"/"Heute"). `company` is a proper noun and stays in the data file; `role`, `location`, and `description` are language-dependent, so add a matching `experience.<id>.{role, location, description}` entry to **both** `i18n/de.js` and `i18n/en.js`.

## Add a certification

Edit `data/certifications.js`, add `{ id, code, name, issuer, issuerIcon: "azure" | "gcp", status: "active" | "retired", group: "primary" | "supporting", verifyUrl, order }`. Active supporting credentials render in a collapsed secondary section; retired credentials render in their own collapsed, visually muted section.

## Add a language

The current build deliberately publishes German at `/` and English at `/en/`. Adding another language also requires extending `scripts/build.mjs` with its output path and SEO alternate link.

The language toggle button renders itself from `SUPPORTED_LANGS` - no markup changes needed there.

## Build locally

Use Node.js 22 or later:

```bash
npm ci
npm run build
npm run check
```

The deployable output is written to `dist/` and intentionally ignored by Git. Serve that directory locally to inspect the generated HTML; do not publish the repository root.

## Deploy

In GitHub, set **Settings → Pages → Source** to **GitHub Actions**. Pushing to `main` runs the workflow, validates the static pages, and deploys the `dist/` artifact. Pull requests run the build and validation but do not deploy.

Keep the custom domain configured in GitHub Pages settings. The action deploys the generated artifact, so the legacy root `CNAME` file is not used for the deployment.

## SEO output

The build produces:

- complete German content at `https://hilberer.dev/` and English content at `https://hilberer.dev/en/`;
- language-specific titles, descriptions, canonical URLs, Open Graph metadata, hreflang links, and Person/WebSite JSON-LD;
- `robots.txt` and `sitemap.xml`.
