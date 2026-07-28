/**
 * Shopify catalog helpers.
 *
 * Prefer Storefront API when SHOPIFY_STORE_DOMAIN + SHOPIFY_STOREFRONT_ACCESS_TOKEN
 * are set. Otherwise fall back to the public storefront JSON feeds:
 *   https://cuttingedgecreations.com/products.json
 *   https://cuttingedgecreations.com/collections/{handle}/products.json
 *
 * Do not expose Admin API tokens in this marketing app.
 */

export type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  productType: string;
  priceDisplay: string | null;
  priceAmount: number | null;
  availableForSale: boolean;
  onlineStoreUrl: string;
  imageUrl: string | null;
  imageLocal: string | null;
  tags: string[];
};

const PUBLIC_STORE = "https://cuttingedgecreations.com";
const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export function isShopifyConfigured(): boolean {
  return Boolean(domain && token);
}

export function shopifyProductUrl(handle: string): string {
  return `${PUBLIC_STORE}/products/${handle}`;
}

function formatMoney(amount: string | number | null | undefined): string | null {
  if (amount == null || amount === "") return null;
  const n = typeof amount === "number" ? amount : Number(amount);
  if (!Number.isFinite(n) || n <= 0) return null;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

type PublicProduct = {
  id?: number | string;
  handle: string;
  title: string;
  body_html?: string;
  product_type?: string;
  tags?: string[] | string;
  variants?: { price?: string; available?: boolean }[];
  images?: { src?: string; width?: number; height?: number }[];
};

function mapPublicProduct(p: PublicProduct): ShopifyProduct | null {
  const handle = p.handle;
  if (!handle || handle.includes("-clone")) return null;
  const variant = p.variants?.[0];
  const priceAmount = variant?.price != null ? Number(variant.price) : null;
  // Skip obvious accessory-only noise from early pages when filtering later;
  // still allow $0 (quote-only) through with null display.
  const imgs = p.images || [];
  const best =
    imgs.length > 0
      ? imgs.reduce((a, b) =>
          (a.width || 0) * (a.height || 0) >= (b.width || 0) * (b.height || 0)
            ? a
            : b,
        )
      : null;
  const tags = Array.isArray(p.tags)
    ? p.tags
    : typeof p.tags === "string"
      ? p.tags.split(",").map((t) => t.trim())
      : [];

  return {
    id: String(p.id ?? handle),
    handle,
    title: p.title,
    description: stripHtml(p.body_html || "").slice(0, 220),
    productType: p.product_type || "",
    priceDisplay: formatMoney(priceAmount),
    priceAmount: Number.isFinite(priceAmount as number) ? priceAmount : null,
    availableForSale: variant?.available !== false,
    onlineStoreUrl: shopifyProductUrl(handle),
    imageUrl: best?.src ?? null,
    imageLocal: null,
    tags,
  };
}

async function fetchPublicProductsJson(
  limit: number,
): Promise<ShopifyProduct[]> {
  const out: ShopifyProduct[] = [];
  const collections = [
    "best-sellers",
    "bounce-houses",
    "5-in-1-combos",
    "club-slide-combos",
    "10-must-have-inflatables",
  ];

  for (const handle of collections) {
    if (out.length >= limit) break;
    try {
      const res = await fetch(
        `${PUBLIC_STORE}/collections/${encodeURIComponent(handle)}/products.json?limit=30`,
        {
          next: { revalidate: 3600 },
          headers: { "User-Agent": "CEC-marketing-scaffold/0.1" },
        },
      );
      if (!res.ok) continue;
      const data = (await res.json()) as { products?: PublicProduct[] };
      for (const p of data.products || []) {
        const mapped = mapPublicProduct(p);
        if (!mapped) continue;
        if (out.some((x) => x.handle === mapped.handle)) continue;
        // Prefer units with product imagery
        if (!mapped.imageUrl) continue;
        out.push(mapped);
        if (out.length >= limit) break;
      }
    } catch {
      // fall through
    }
  }

  if (out.length >= Math.min(6, limit)) return out.slice(0, limit);

  // Fallback: paginated products.json
  for (let page = 1; page <= 3 && out.length < limit; page++) {
    try {
      const res = await fetch(
        `${PUBLIC_STORE}/products.json?limit=250&page=${page}`,
        {
          next: { revalidate: 3600 },
          headers: { "User-Agent": "CEC-marketing-scaffold/0.1" },
        },
      );
      if (!res.ok) break;
      const data = (await res.json()) as { products?: PublicProduct[] };
      const products = data.products || [];
      if (!products.length) break;
      for (const p of products) {
        const mapped = mapPublicProduct(p);
        if (!mapped?.imageUrl) continue;
        const t = `${mapped.title} ${mapped.productType}`.toLowerCase();
        const isUnit =
          /bounce|bouncer|slide|combo|obstacle|kidzone|belly|axe|golf|castle|truck|inflatable/.test(
            t,
          ) &&
          !/strap|wheel|blower|stake|dolly|repair kit|water bag|sand bag|impact mat/.test(
            t,
          );
        if (!isUnit) continue;
        if (out.some((x) => x.handle === mapped.handle)) continue;
        out.push(mapped);
        if (out.length >= limit) break;
      }
    } catch {
      break;
    }
  }

  return out.slice(0, limit);
}

async function fetchStorefrontProducts(
  limit: number,
): Promise<ShopifyProduct[]> {
  if (!domain || !token) return [];
  const endpoint = `https://${domain}/api/2024-10/graphql.json`;
  const query = `
    query FeaturedProducts($first: Int!) {
      products(first: $first, sortKey: BEST_SELLING) {
        edges {
          node {
            id
            handle
            title
            description
            productType
            availableForSale
            onlineStoreUrl
            tags
            featuredImage { url }
            priceRange {
              minVariantPrice { amount currencyCode }
            }
          }
        }
      }
    }
  `;
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({ query, variables: { first: limit } }),
      next: { revalidate: 1800 },
    });
    if (!res.ok) return [];
    const json = (await res.json()) as {
      data?: {
        products?: {
          edges?: {
            node: {
              id: string;
              handle: string;
              title: string;
              description: string;
              productType: string;
              availableForSale: boolean;
              onlineStoreUrl?: string | null;
              tags?: string[];
              featuredImage?: { url?: string } | null;
              priceRange?: {
                minVariantPrice?: { amount?: string };
              };
            };
          }[];
        };
      };
    };
    const edges = json.data?.products?.edges || [];
    const mapped: ShopifyProduct[] = [];
    for (const { node } of edges) {
      if (node.handle.includes("-clone")) continue;
      const amount = node.priceRange?.minVariantPrice?.amount;
      mapped.push({
        id: node.id,
        handle: node.handle,
        title: node.title,
        description: (node.description || "").slice(0, 220),
        productType: node.productType || "",
        priceDisplay: formatMoney(amount),
        priceAmount: amount != null ? Number(amount) : null,
        availableForSale: node.availableForSale,
        onlineStoreUrl: node.onlineStoreUrl || shopifyProductUrl(node.handle),
        imageUrl: node.featuredImage?.url ?? null,
        imageLocal: null,
        tags: node.tags || [],
      });
    }
    return mapped;
  } catch {
    return [];
  }
}

import mediaManifest from "../../public/media/manifest.json";

const localByHandle: Record<string, string> = Object.fromEntries(
  (mediaManifest as { handle: string; local: string }[]).map((row) => [
    row.handle,
    row.local,
  ]),
);

/** Attach locally mirrored media when handle matches downloaded assets. */
function attachLocalMedia(products: ShopifyProduct[]): ShopifyProduct[] {
  return products.map((p) => {
    const local = localByHandle[p.handle] ?? null;
    return {
      ...p,
      imageLocal: local,
      // Prefer CDN when present; fall back to local mirror so cards never blank.
      imageUrl: p.imageUrl || local,
    };
  });
}

/**
 * Featured commercial products for homepage / products index.
 */
export async function fetchFeaturedProducts(
  limit = 8,
): Promise<ShopifyProduct[]> {
  if (isShopifyConfigured()) {
    const live = await fetchStorefrontProducts(limit);
    if (live.length) return attachLocalMedia(live);
  }
  return attachLocalMedia(await fetchPublicProductsJson(limit));
}

/** @deprecated use fetchFeaturedProducts */
export async function fetchProductsStub(
  limit = 12,
): Promise<ShopifyProduct[]> {
  return fetchFeaturedProducts(limit);
}
