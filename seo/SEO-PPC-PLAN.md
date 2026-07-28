# Cutting Edge Creations — SEO + PPC Plan

**Date:** 2026-07-28  
**Data:** Google Keyword Planner, Jul 1 2025 – Jun 30 2026 (`keywords-2026-07-28.csv`, 2,354 rows)  
**Site play:** Next.js marketing landers (this app, :4351) + Shopify catalog/commerce  
**Public positioning:** Independent commercial inflatable brand (for-sale / B2B). Do **not** mention ownership affiliates on-site.

---

## 1. Business intent framing

CEC is **not** a party-rental marketplace. Core model is **e-com + lead gen** for **high-ticket commercial inflatables** sold to rental operators, FECs, schools/churches, and similar buyers. Many SKUs need a **salesperson** (specs, fleet mix, custom, financing conversations)—not Amazon-style DTC bounce.

| Channel job | What “good” looks like |
|---|---|
| Organic | Rank for **commercial / for sale / wholesale / manufacturer** intent on Next.js landers |
| Shopify | Catalog truth, checkout where priced cleanly, media, collections |
| PPC | Capture **branded** + **exact commercial purchase** after quote path + catalog hygiene |
| Sales | Structured quote → CRM → consult → close |

**Strategic filter (non-negotiable):**  
Huge rental/“near me” volume is **misaligned noise** for homepage and primary SEO if CEC sells equipment. Use it only if George later confirms CEC truly operates consumer rentals.

---

## 2. Keyword clusters (from Planner)

Volumes = Avg. monthly searches. Bids = top-of-page low–high (USD). Full dump in CSV; rollup in `keyword-clusters.json`.

### A) Primary — site IA + PPC phase 1 (commercial / B2B)

| Keyword | Vol | Bid (low–high) |
|---|---:|---|
| commercial bounce house | 3,600 | $0.29–$1.54 |
| commercial bounce house for sale | 2,900 | $0.31–$1.83 |
| buy commercial bounce house | 2,900 | $0.31–$1.83 |
| commercial water slide | 2,900 | $0.32–$1.96 |
| commercial inflatables | 1,000 | $0.41–$2.68 |
| commercial water slides for sale | 880 | $0.31–$2.19 |
| bounce house wholesale | 480 | $0.43–$2.31 |
| wholesale inflatables | 260 | $0.67–$4.04 |
| bounce house manufacturers | 260 | $0.54–$3.08 |
| inflatable manufacturers | 140 | $1.84–$6.01 |
| custom bounce house | 140 | $1.96–$11.37 |
| inflatable manufacturers usa | 70 | $1.84–$6.99 |

**~203 keywords** tagged `primary` in the export.

### B) Secondary — product purchase (phase 2)

| Keyword | Vol | Bid |
|---|---:|---|
| bounce house for sale | 22,200 | $0.23–$0.98 |
| water slides for sale | 8,100 | $0.20–$0.87 |
| inflatable water slides for sale | 4,400 | $0.27–$1.28 |
| buy bounce house | 2,400 | $0.26–$1.27 |
| inflatables for sale | 1,600 | $0.31–$2.38 |
| inflatable obstacle course for sale | 390 | $0.33–$2.25 |

**~363** tagged `secondary`. Higher volume, more consumer/price-shopper mix—use category pages + tight ads, not homepage as the only lander.

### C) Deprioritize — rental / near-me (avoid organic homepage)

| Keyword | Vol | Why avoid as primary |
|---|---:|---|
| bounce house rental | 110,000 | Local rental marketplace intent |
| bounce house rentals near me | 49,500 | Same |
| water slides rentals | 40,500 | Same |
| bounce houses near me | 22,200 | Same |

**~454** tagged `deprioritize_rental`. Competing here burns budget and dilutes manufacturer positioning.

### D) Branded — protect first

| Keyword | Vol | Bid |
|---|---:|---|
| cutting edge inflatables | 170 | $1.01–$4.60 |
| cutting edge creations inflatables | 50 | $1.09–$4.90 |
| cutting edge bounce house / creation / n flatables… | ~10 ea | varies |

Small volume, high intent. **Own these in PPC immediately** once the site can convert.

### E) High-CPC adjacent (careful / later)

- `inflatable insurance` ~170 @ **$5.69–$19.14** — not a product page; maybe guide content later, not launch ads.
- `custom bounce house` / custom variants — high CPC, sales-assisted; land on quote.
- Financing / “start a bounce house business” — content later, not phase-1 spend.

---

## 3. Priority landing page map

| URL | Primary seeds | Job |
|---|---|---|
| `/` | Brand + commercial manufacturer framing | One composition: brand, promise, quote + catalog CTAs |
| `/commercial-bounce-houses` | commercial bounce house*, buy commercial… | Category SEO + PPC lander |
| `/commercial-water-slides` | commercial water slide*, water slides for sale | Category SEO + PPC lander |
| `/inflatable-obstacle-courses` | obstacle course for sale, inflatable obstacle… | Category SEO |
| `/wholesale` | wholesale*, manufacturers*, fleet packages | B2B / multi-unit |
| `/products` | inflatables for sale (index) | Shopify-fed index (stubbed now) |
| `/request-a-quote` | custom*, commercial high-intent | **P0 conversion** (fixes X-Ray quote gap on marketing layer) |
| `/contact` | branded / support | Light capture |
| `/about` | branded trust | Independent brand story only |

**Later (when content capacity exists):**  
`/guides/buying-commercial-bounce-houses`, `/guides/commercial-vs-residential-inflatables`, `/guides/starting-an-inflatable-rental-fleet` (attract secondary + business-start intent without bidding blindly).

---

## 4. Why Next.js + Shopify (not Shopify alone)

Shopify themes can sell; they struggle as a **query-matched lander system** (thin collection SEO, weak programmatic IA, homepage meta stubs—already observed on the live store).  

**Play:** Next.js owns **crawlable intent pages, metadata, schema, quote UX**. Shopify owns **SKU truth, media, checkout**. Hybrid/headless Storefront API when catalog hygiene is ready.

X-Ray blockers before paid scale: missing quote form on Shopify quote page, **~$0.00 products**, clone handles, measurement gaps. This marketing scaffold ships a **real quote form**; live ads still need Shopify catalog cleanup + tracking.

---

## 5. Technical SEO checklist (Next.js ↔ Shopify)

- [x] App Router metadata API, canonical, OG/Twitter
- [x] `sitemap.ts` + `robots.ts`
- [x] Organization JSON-LD; Product placeholders on category pages
- [ ] Set `NEXT_PUBLIC_SITE_URL` to production domain before launch
- [ ] Connect Storefront API; map collections → landers; noindex thin stubs
- [ ] Suppress or quote-gate $0 / clone SKUs in any public product feed
- [ ] Unique H1/title/description per lander (no brand-only stubs)
- [ ] Internal links: Home → categories → products → quote (hub/spoke)
- [ ] Core Web Vitals: image CDN from Shopify, lazy below-fold media
- [ ] Redirect map if cuttingedgecreations.com moves routes (preserve equity)
- [ ] GA4 + conversion events: `quote_submit`, `contact_click`, key collection views
- [ ] Search Console property + sitemap submit post-launch
- [ ] hreflang N/A (EN-US only unless expanded)

---

## 6. Content plan (lean)

| Type | Cadence | Notes |
|---|---|---|
| Category landers | Ship now | Copy already scaffolded; deepen with specs/FAQs |
| Product templates | After Storefront | Title pattern: `{Product} \| Commercial {Type} \| CEC` |
| Commercial buying guide | 1–2 in 30 days | Targets secondary + “how to buy commercial” |
| Quote/sales FAQ | With quote page | Lead times, what’s included, who we sell to |
| Avoid | — | “Bounce house rentals near me” blogs unless rentals are real |

Tone: operator/B2B, specs-forward, **request specs / talk to sales**—avoid unverifiable “#1 USA manufacturer” claims unless evidence-backed.

---

## 7. PPC phases

**Not ready for meaningful spend until:** quote path live in production, $0/clone hygiene, and analytics conversions verified (aligns with X-Ray ads readiness = NOT READY).

### Phase 1 — Soft launch (branded + exact commercial)
- Exact/phrase: branded terms + `commercial bounce house`, `commercial bounce house for sale`, `buy commercial bounce house`, `commercial water slide`
- Land on matching Next.js URLs (not generic homepage only)
- Daily cap small; optimize to **quote submits**
- Need Google Ads access (MCC or admin)—confirm account ownership

### Phase 2 — Product-category purchase
- `bounce house for sale`, `water slides for sale`, `inflatables for sale`, obstacle-for-sale variants
- Separate ad groups per lander; negates: `rental`, `rent`, `near me`, `party rental` (unless strategy changes)

### Phase 3 — Careful expansion
- Wholesale / manufacturers / custom (watch CPC)
- Retargeting site visitors who hit quote but didn’t submit
- Still negate pure local rental intent

**Negatives (default list):** near me, rental, rentals, rent a, bounce house rental, jumper rental, party rentals.

---

## 8. Competitor glance (positioning only — no invented DA/traffic)

| Competitor | Positioning notes |
|---|---|
| [Jungle Jumps](https://www.junglejumps.com/) | CA manufacturer; factory-direct commercial bounce/slides; rental-business starter framing; USA craftsmanship messaging |
| [Moonwalk USA](https://moonwalkusa.com/) | MI manufacturer since 2003; commercial-only; Light N Strong weight-reduction vinyl story; tents/furniture adjacency |
| [Big and Bright Inflatables](https://bigandbrightinflatables.com/) | TX manufacturer; wholesale to party rental; ROI/fleet growth narrative; safety/compliance emphasis |
| [BounceWave](https://www.bouncewaveslidesales.com/) | FL manufacturing; ASTM/NFPA language; FOB warehouse; financing callouts; rental-operator voice |
| [Jingo Jump](https://jingojump.com/) / [Bouncer Depot](https://www.bouncerdepot.com/) | Long-running CA manufacturers; wholesale packages; ASTM/commercial vinyl; education for new rental businesses |

**CEC wedge to own in copy/IA:** clear **commercial for-sale + quote-assisted** path, category landers matched to Planner intent, and catalog that doesn’t leak $0/test residue into paid landing experiences.

---

## 9. 30-day operator checklist

1. Approve IA + quote fields; wire quote → inbox/CRM (no silent email from agents).  
2. Catalog hygiene on Shopify ($0, clones).  
3. Connect Storefront API to `/products`.  
4. Production domain + Search Console + GA4.  
5. Branded + exact commercial ads only after steps 1–4.  
6. Feed more Planner lists when ready; re-cluster into CSV.

---

## Open questions for George

1. Confirm **no consumer rental** positioning on public site?  
2. Which phone/address/legal name for public footer?  
3. Quote destination: email, HubSpot, Shopify form, other?  
4. Google Ads: existing account / MCC invite?  
5. Any **USA manufacturing** claims that are evidence-safe to put on-page?  
6. Priority SKU families for first Shopify collection sync?
