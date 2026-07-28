# Cutting Edge Creations — Marketing Website

Next.js 15 (App Router) marketing frontend for **Cutting Edge Creations** commercial inflatables. Runs separately from the Company X-Ray cockpit (`:4350`).

- **Dev URL:** http://127.0.0.1:4351/
- **Live brand reference:** https://cuttingedgecreations.com/ (Shopify Paper theme)
- **Commerce:** Shopify Storefront API when configured; otherwise public `products.json` / collection JSON
- **SEO/PPC plan:** [seo/SEO-PPC-PLAN.md](./seo/SEO-PPC-PLAN.md)
- **Keywords:** [seo/keywords-2026-07-28.csv](./seo/keywords-2026-07-28.csv) · [seo/keyword-clusters.json](./seo/keyword-clusters.json)
- **Client email draft (DO NOT SEND):** [seo/CLIENT-EMAIL-DRAFT.md](./seo/CLIENT-EMAIL-DRAFT.md)

## Keyword Planner — fully parsed

Yes — the Google Keyword Planner dump was **fully parsed**:

| Fact | Value |
|---|---|
| Source file | `seo/keywords-2026-07-28.csv` |
| Rows | **2,354** keyword rows (+ header) |
| Cluster output | `seo/keyword-clusters.json` (`meta.rows_parsed: 2354`, `incomplete: false`) |
| Strategy | `seo/SEO-PPC-PLAN.md` |

Clusters drive IA and homepage messaging toward **commercial / for-sale** intent (bounce houses, water slides, obstacle courses, wholesale) and away from local rental “near me” queries. Branded + primary commercial clusters feed PPC soft-launch guidance in the plan.

## Brand match (Shopify Paper)

Inspected live theme CSS variables and type stack (theme `t/25`):

| Token | Shopify value | Marketing site |
|---|---|---|
| Body / headings | `"Source Sans Pro", sans-serif` | `Source_Sans_3` via `next/font` (Pro successor) |
| Nav | `Montserrat, sans-serif` | `Montserrat` via `next/font` |
| Base size | `15px` | `15px` |
| Background | `#ffffff` | `#ffffff` |
| Neutral / warm | `#f2e8d8` | `--bg-neutral` |
| Primary CTA | `#ff9f00` | `--primary` |
| Tertiary / links | `#2e86cd` | `--tertiary` |
| Ink | `#131415` | `--ink` |
| Logo | storefront desktop/mobile logos | `/media/brand/` |

Layout rhythm: light sticky header, uppercase Montserrat nav, orange primary buttons, warm neutral section bands — recognizably the same family as the Shopify storefront (not the earlier dark “industrial AI” art direction).

## Client media assets

Assets under `public/media/` were downloaded from the **client storefront** (cuttingedgecreations.com / Shopify CDN) for this engagement:

- `brand/` — desktop + mobile logos
- `hero/` — homepage / lifestyle product photography
- `categories/` — collection thumbs used as category heroes
- `products/` — curated commercial unit shots (~20)
- `manifest.json` — source URLs + handles for product mirrors

**Attribution:** Product and brand imagery belongs to Cutting Edge Creations / their storefront; mirrored locally only for this marketing scaffold. Prefer 15–40 high-quality shots — not a full catalog dump.

## Run locally

```bash
cd /Users/george/cutting-edge-company-xray/website
cp .env.example .env.local   # optional
npm install
npm run dev                  # http://127.0.0.1:4351/
```

```bash
npm run build
npm run typecheck
```

X-Ray remains:

```bash
cd /Users/george/cutting-edge-company-xray
npm run dev   # :4350
```

## Routes

| Path | Purpose |
|---|---|
| `/` | Brand-led homepage — real CEC hero, featured products, packages |
| `/commercial-bounce-houses` | Category lander (+ `?v=a\|b` offer test) |
| `/commercial-water-slides` | Water slide lander (+ variants) |
| `/inflatable-obstacle-courses` | Obstacle lander (+ variants) |
| `/wholesale` | Wholesale / fleet (+ variants) |
| `/packages` | Curated commercial starter packages |
| `/products` | Live catalog index (Shopify / public JSON) |
| `/request-a-quote` | Structured quote form |
| `/contact` | Sales contact |
| `/about` | Brand story |

## Shopify hybrid + packages

1. Optional Storefront API in `.env.local`:

```bash
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=...
NEXT_PUBLIC_SITE_URL=http://127.0.0.1:4351
```

2. Without a token, `src/lib/shopify.ts` falls back to public JSON:
   - `https://cuttingedgecreations.com/collections/{handle}/products.json`
   - `https://cuttingedgecreations.com/products.json`
3. Featured products deep-link to live Shopify product URLs.
4. **Packages** (`src/lib/packages.ts` + `/packages`): curated multi-unit cards from real products. Labeled **Package** / **Talk to sales** — not fake Shopify bundle SKUs.
5. Do not sync `$0.00` / `-clone` handles into marketing surfaces until catalog hygiene is done.

Quote form currently logs locally (console) — wire CRM/email only with explicit approval.

## Landing page A/B variants

Light offer testing without rebuilding the design system:

- Append **`?v=a`** (default) or **`?v=b`** on category / wholesale landers.
- Alias: `?variant=a|b`
- Config: `src/lib/variants.ts`

| Variant | Primary CTA | Secondary |
|---|---|---|
| **A** | Request a quote | Browse products |
| **B** | Talk to sales | See starter packages |

Manual for now (no analytics split). Example:

```text
http://127.0.0.1:4351/commercial-bounce-houses?v=a
http://127.0.0.1:4351/commercial-bounce-houses?v=b
http://127.0.0.1:4351/wholesale?v=b
```

## Public copy rules

- No Magic Jump / ownership speculation on the public marketing site.
- Commercial / for-sale framing — not party rental near-me.

## Related

- Company X-Ray audit: repo root README (`:4350`)
- SEO strategy: `seo/SEO-PPC-PLAN.md`
- Client email draft: `seo/CLIENT-EMAIL-DRAFT.md` (**do not send**)
