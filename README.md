# SIL AI Website

Source for [ai.sil.org](https://ai.sil.org), built with [Docusaurus 2](https://docusaurus.io/) and hosted on [Vercel](https://vercel.com/).

## Getting access

- **Viewing** — the site is public at https://ai.sil.org.
- **Editing content** — ask an admin to add you to the [`sil-ai/ai-website`](https://github.com/sil-ai/ai-website) repo with **Write** access. That is all you need to publish changes.
- **Hosting settings** (domain, build config, deploy logs) — managed in the Vercel project, not GitHub. Ask an admin of the Vercel team to invite you.

## Where things live

| Path | What it is |
| --- | --- |
| `src/pages/` | Site pages (`.mdx`/`.md`/`.js`). The file path becomes the URL, e.g. `src/pages/projects/AERO.mdx` → `/projects/AERO` |
| `src/pages/projects/`, `research/`, `datasets/` | Project, research and dataset pages |
| `src/components/` | React components used by pages |
| `static/img/` | Images, served from `/img/...` |
| `docusaurus.config.js` | Site title, navbar, footer and other settings |

## Local development

Requires Node.js. The project uses npm (`package-lock.json`).

```
npm install
npm start
```

This starts a dev server at http://localhost:3000 that reloads as you edit.

To check that the production build works before opening a PR:

```
npm run build
npm run serve
```

## Making changes and deploying

There is no manual deploy step. Vercel builds the site from GitHub:

1. Create a branch, make your changes, and push it.
2. Open a pull request against `master`. Vercel posts a **preview URL** on the PR so you can check the result.
3. Once the PR is merged into `master`, Vercel deploys it to https://ai.sil.org automatically.

Don't use `npm run deploy` / `yarn deploy` — that pushes to GitHub Pages, which this site doesn't use.
