# Methodist Church Nigeria — 67 Udo Umana

Astro static website for Methodist Church Nigeria, 67 Udo Umana Street, Uyo. The deployable application lives in `src/` and `public/`; obsolete static Framer exports and migration helpers have been removed.

## Requirements

- Node.js 18.20.8+, 20.3.0+, or 22+
- npm (the checked-in `package-lock.json` makes installs reproducible)

## Commands

```sh
npm ci          # install the exact locked dependency tree
npm run dev     # start the local development server
npm run build   # generate the production site in dist/
npm run preview # preview the production build
```

Vercel should use build command `npm run build` and output directory `dist`. `vercel.json` keeps extensionless URLs, disables trailing slashes, and applies immutable caching to static assets.

## Project structure

- `src/components/` — shared header, footer, heroes, cards, carousel, and grids
- `src/data/site.ts` — church identity, contact details, navigation, and shared images
- `src/data/activities.ts` — weekly activity schedule
- `src/data/fellowships.ts` — fellowship content, images, and routes
- `src/data/history.ts` — church history narratives and milestones
- `src/layouts/` — shared page shell and metadata
- `src/pages/` — all public routes
- `src/scripts/` — donation configuration and accessible giving dialog
- `src/styles/` — global design and responsive layout rules
- `public/` — static files copied directly into the production build

## Content updates

- Update service times and homepage copy in `src/pages/index.astro`.
- Update bank transfer details in `src/scripts/donation-config.js`.
- Update contact details, social links, and shared image URLs in `src/data/site.ts`.
- Update fellowship, activity, or history content in the corresponding `src/data/` module.

The site does not load Framer runtime scripts, generated Framer CSS, tracking, or analytics. The current source images remain hosted on Framer's image CDN; replace an image with a stable church-owned URL or a local file under `public/` when available.

## Routes

`/`, `/about`, `/about/udoumana-history`, `/activities`, `/fellowships`, all seven `/fellowships/*` detail routes, and `/404`.

Set a production `site` URL in `astro.config.mjs` once the final canonical domain is confirmed. Until then, canonical URLs use the deployment request origin.
