import Link from "next/link";
import { QuoteCta } from "@/components/QuoteCta";
import { buildMetadata } from "@/lib/seo";
import { fetchFeaturedProducts, isShopifyConfigured } from "@/lib/shopify";
import { categoryPages, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Commercial Inflatables Products",
  description:
    "Browse commercial inflatable products from Cutting Edge Creations. Live catalog from Shopify with deep links to product pages.",
  path: "/products",
});

export default async function ProductsPage() {
  const products = await fetchFeaturedProducts(24);
  const shopifyReady = isShopifyConfigured();

  return (
    <>
      <section className="bg-bg-neutral">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
          <p className="font-nav text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Product index
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Commercial inflatables from the live catalog
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            {shopifyReady
              ? "Loaded via Shopify Storefront API when available; otherwise public catalog JSON."
              : "Loaded from the public cuttingedgecreations.com catalog (products / collections JSON). Connect Storefront API in .env.local when ready."}{" "}
            High-ticket or quote-only units should use Request a Quote.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-8 flex flex-wrap gap-3 text-sm">
          {categoryPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="border border-[var(--line)] px-3 py-1.5 text-ink-soft hover:border-primary hover:text-ink"
            >
              {page.title}
            </Link>
          ))}
          <Link
            href="/packages"
            className="border border-[var(--line)] px-3 py-1.5 text-ink-soft hover:border-primary hover:text-ink"
          >
            Packages
          </Link>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.id} className="border border-[var(--line)] bg-white">
              <a
                href={product.onlineStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[4/3] bg-bg-plain">
                  {product.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={product.imageUrl}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>
                <div className="p-5">
                  <p className="font-nav text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                    {product.productType || "Commercial"}
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-ink">
                    {product.title}
                  </h2>
                  {product.description ? (
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">
                      {product.description}
                    </p>
                  ) : null}
                  <p className="mt-4 text-sm font-semibold text-tertiary">
                    {product.priceDisplay ?? "Request pricing"}
                  </p>
                  <p className="mt-2 text-xs text-ink-muted">
                    View on {siteConfig.domain} ↗
                  </p>
                </div>
              </a>
              <div className="border-t border-[var(--line)] px-5 py-3">
                <Link
                  href="/request-a-quote"
                  className="text-sm font-semibold text-ink hover:text-tertiary"
                >
                  Request a quote →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <QuoteCta />
    </>
  );
}
