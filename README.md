# GuruJal

Next.js rebuild of [gurujal.org](https://gurujal.org/) — a water conservation
initiative working on pond rejuvenation, eco-restoration, and water
stewardship across India.

The original site runs on WordPress + Elementor. This project replaces it
with a fast, static-first stack:

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 with brand tokens
- **Content:** MDX files in `/content`, parsed via `gray-matter`
- **Fonts:** Inter + Inter Tight (via `next/font`)
- **Hosting:** Vercel-friendly, runs anywhere Node 20+ runs

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project layout

```
src/
  app/                  # Next.js App Router routes
    layout.tsx          # Root layout (header, footer, fonts)
    page.tsx            # Homepage
    globals.css         # Tailwind + brand tokens
  components/           # Reusable components (site-header, site-footer, …)
  lib/                  # Helpers (nav config, MDX content loader)
  mdx-components.tsx    # Global MDX style overrides
content/                # MDX content (pages, posts, team, publications)
public/
  brand/                # Logos and brand assets
migration/              # WP export & conversion scripts (gitignored output)
```

## Brand

| Token                       | Value     | Use                                |
| --------------------------- | --------- | ---------------------------------- |
| `--color-brand-primary`     | `#1A5468` | Primary CTA, links                 |
| `--color-brand-primary-dark`| `#143F4F` | Primary CTA hover                  |
| `--color-brand-deep`        | `#1A3A4A` | Footer, dark sections              |
| `--color-brand-accent`      | `#33BFE2` | Highlights, hover accents          |
| `--color-brand-accent-dark` | `#1EA9CD` | Accent active                      |
| `--color-brand-soft`        | `#D0F0F7` | Section backgrounds                |
| `--color-brand-mist`        | `#EAF7FB` | Page wash                          |
| `--color-brand-ink`         | `#0F2530` | Primary body text                  |
| `--color-brand-muted`       | `#4A6878` | Secondary text                     |

Fonts: **Inter Tight** (display / headings) + **Inter** (body).

## Content migration

Original content lives in WordPress (`gurujal.org`). The plan:

1. Export pages, posts, custom post types, and media via the WordPress
   REST API (auth via app password).
2. Convert each post's rendered HTML to clean MDX.
3. Drop the MDX into `/content/<collection>/<slug>.mdx`.
4. Download referenced media to `/public/uploads/...` and rewrite URLs.

Scripts live in `/migration/` (TODO). Raw scrapes and exports stay
gitignored.

## Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start dev server on http://localhost:3000 |
| `npm run build` | Production build                         |
| `npm run start` | Serve the production build               |
| `npm run lint`  | ESLint                                   |
