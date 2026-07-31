# Portfolio Site

Static resume/portfolio page for Alexander Hilberer. Plain HTML/CSS/JS, no build step - works opened directly (`index.html` via `file://`) and on GitHub Pages.

## Structure

```
index.html              # single page shell, sections, data-i18n-key/data-bind hooks
assets/css/             # base -> theme -> layout -> components (loaded in that order)
assets/js/
  i18n.js               # language switching, DOM text swap, persistence
  content.js             # renders projects/certifications/profile data into the DOM
  main.js                # init orchestrator
data/                    # content: profile, experience, projects, certifications
i18n/                    # translation dictionaries (de.js default, en.js)
assets/resume/           # your resume PDFs (not included, see below)
```

Content and layout are separated: `data/` and `i18n/` hold everything editable, `assets/js` only renders it.

## Add a project

Edit `data/projects.js`, add an object with `id`, `title`, `link`, `environment` ("onprem"/"azure"/"gcp" - drives the small icon under the title, see `assets/js/icons.js`), `tech[]`, `order`. Then add a matching `projects.<id>.description` entry to **both** `i18n/de.js` and `i18n/en.js`. No HTML/CSS changes needed.

## Add a job to Experience

Edit `data/experience.js`, add `{ id, company, startDate: "YYYY-MM", endDate: "YYYY-MM" | null, order }` (`endDate: null` renders as "Present"/"Heute"). `company` is a proper noun and stays in the data file; `role`, `location`, and `description` are language-dependent, so add a matching `experience.<id>.{role, location, description}` entry to **both** `i18n/de.js` and `i18n/en.js`.

## Add a certification

Edit `data/certifications.js`, add `{ id, code, name, issuer, issuerIcon: "azure" | "gcp", status: "active" | "retired", verifyUrl, order }`.

## Add a language

1. Copy `i18n/en.js` to `i18n/<lang>.js`, translate all values, keep every key path identical.
2. In `assets/js/i18n.js`, add the lang code to `SUPPORTED_LANGS`.
3. Add `<script src="i18n/<lang>.js" defer></script>` to `index.html` (before `assets/js/i18n.js`).

The language toggle button renders itself from `SUPPORTED_LANGS` - no markup changes needed there.

## Deploy

Push to GitHub, enable Pages on the default branch root (Settings -> Pages). No build step, no `.nojekyll` needed.
