# SIL AI Website

Source for [ai.sil.org](https://ai.sil.org), built with [Docusaurus 2](https://docusaurus.io/) and hosted on [Vercel](https://vercel.com/).

## Getting access

- **Viewing** — the site is public at https://ai.sil.org.
- **Editing content** — ask an admin to add you to the [`sil-ai/ai-website`](https://github.com/sil-ai/ai-website) repo with **Write** access. That is all you need to publish changes.
- **Hosting settings** (domain, build config, deploy logs) — managed in the Vercel project, not GitHub. Ask an admin of the Vercel team to invite you.

## Where things live

| Path | What it is |
| --- | --- |
| `src/pages/` | Site pages (`.mdx`/`.md`/`.js`), e.g. `ethics.mdx`, `contact.mdx`. The file path becomes the URL, e.g. `src/pages/projects/AERO.mdx` → `/projects/AERO` |
| `src/pages/projects/`, `src/pages/research/`, `src/pages/datasets/` | Project, research and dataset pages |
| `src/components/` | React components used by pages |
| `static/img/` | Images, served from `/img/...` |
| `docusaurus.config.js` | Site title, navbar, footer and other settings |
| `docs/`, `blog/` | Leftover Docusaurus template content. Still built at `/docs` and `/blog`, but not linked from the navbar |

A new page isn't linked anywhere until you add it to the navbar (or link to it from another page). The navbar links are in `docusaurus.config.js`.

## Local development

Requires Node.js 16.14 or newer. The project uses npm (`package-lock.json`).

```
npm install
npm start
```

This starts a dev server at http://localhost:3000 that reloads as you edit.

To check that the production build works before opening a PR (broken internal links make the build fail, which also fails the Vercel preview):

```
npm run build
npm run serve
```

## Making changes and deploying

There is no manual deploy step. Vercel builds the site from GitHub:

1. Create a branch, make your changes, and push it.
2. Open a pull request against `master`. The Vercel bot comments on the PR with a **preview URL** so you can check the result.
3. Once the PR is merged into `master`, Vercel deploys it to https://ai.sil.org automatically.

Don't use `npm run deploy` — it pushes to GitHub Pages, which this site doesn't use.
