# AEO (Answer Engine Optimization) · this repository

This portfolio is structured so search engines and AI crawlers can discover accurate facts about Gabriel Rodrigues Amador.

## Implemented

| Asset | URL / location |
| --- | --- |
| Canonical metadata | `src/lib/site.ts`, `src/app/layout.tsx` |
| Open Graph & Twitter | Root layout (`metadataBase`, images, titles) |
| JSON-LD | `Person`, `WebSite`, `ProfilePage` via `src/components/site-json-ld.tsx` |
| Sitemap | `/sitemap.xml` (`src/app/sitemap.ts`) |
| robots.txt | `/robots.txt` (`src/app/robots.ts`, allows major AI crawlers on `/`) |
| llms.txt | `/llms.txt` |
| Extended AI context | `/llms-full.txt` |
| humans.txt | `/humans.txt` |

## Environment

Set `NEXT_PUBLIC_SITE_URL` to your production domain so OG URLs, sitemap, and schema stay correct.

Optional: `GOOGLE_SITE_VERIFICATION` for Search Console.

## Validation

- [Google Rich Results Test](https://search.google.com/test/rich-results) · homepage URL
- [Schema Markup Validator](https://validator.schema.org/) · view page source, copy JSON-LD
- Share debugger: LinkedIn Post Inspector, X Card Validator

## Content notes

- Primary copy is **server-rendered** on `/` (GitHub About README, pinned repos, projects).
- Open Graph and Twitter cards use `public/og-image.png` (1200×630, `og:image:type` `image/png`). `og:logo` points at `public/profile.png`. LinkedIn, Facebook, Slack, WhatsApp, and X read these tags.
