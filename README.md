# Methodist Church Nigeria — 67 Udo Umana

Astro static-site migration of the church website. Astro is the deployment source; the root-level legacy `.html` files remain only as migration reference and are not used by the build.

## Requirements

- Node.js 18.20.8+, 20.3.0+, or 22+
- npm (the checked-in `package-lock.json` makes installs reproducible)

## Commands

```sh
npm ci          # install the exact locked dependency tree
npm run dev     # local development server
npm run build   # generate the production site in dist/
npm run preview # preview the production build
```

Vercel should use the standard Astro settings: build command `npm run build` and output directory `dist`. `vercel.json` keeps extensionless URLs, no trailing slash, and immutable caching for versioned/static assets.

## Content updates

- `src/data/site.ts` — church identity, contact details, social links, navigation, and shared image URLs
- `src/data/activities.ts` — weekly activity schedule
- `src/data/fellowships.ts` — all seven fellowship names, descriptions, points, images, slugs, and verified external CTA
- `src/data/history.ts` — the six Udo Umana history narratives and milestones
- `src/pages/index.astro` — home page service times and introductory copy
- `src/pages/about.astro` — About narrative and core values
- `src/styles/global.css` — design tokens, layout, responsive behavior, and component styling
- `src/components/` — shared Header, Footer, PageHero, and fellowship display components

The known Framer-hosted source images are centralized in the data modules. The site does **not** load Framer runtime scripts, tracking, analytics, or generated CSS. Before replacing an image, use a stable church-owned URL or add a local file under `public/` and update its data record.

## Editorial/deployment notes

- Giving, livestream, and dated-event URLs were not present in the legacy source, so no nonfunctional or invented links were added.
- The home page honestly directs visitors to official social channels for current announcements.
- The Youth Fellowship Facebook page is retained because it was explicitly present in the source.
- Set a production site URL in `astro.config.mjs` once the final canonical domain is confirmed; until then, canonicals are generated from the deployment request origin.

## Preserved routes

`/`, `/about`, `/about/udoumana-history`, `/activities`, `/fellowships`, all seven `/fellowships/*` details, and `/404`.
