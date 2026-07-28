import Image from "next/image";
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

const FALLBACK_IMAGE = "/media/products/fire-station-combo-wet-dry.jpg";

export default async function ProductsPage() {
  const products = await fetchFeaturedProducts(24);
  const shopifyReady = isShopifyConfigured();

  return (
    <>
      <section className="hero-plane" style={{ minHeight: "42vh" }}>
        <div className="hero-plane__media">
          <Image
            src="/media/products/construction-kidzonea-c-wet-dry-combo.jpg"
            alt="Commercial inflatables from the Cutting Edge Creations catalog"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="hero-plane__shade" />
        <div className="hero-plane__content mx-auto flex min-h-[42vh] max-w-6xl items-end px-4 pb-10 pt-14 sm:px-6">
          <div className="max-w-3xl text-white">
            <p className="eyebrow text-primary">Product index</p>
            <h1 className="headline-hero mt-3 text-4xl text-white sm:text-5xl">
              Commercial inflatables from the live catalog
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-snug text-white/90">
              {shopifyReady
                ? "Loaded via Shopify Storefront API when available; otherwise public catalog JSON."
                : "Loaded from the public cuttingedgecreations.com catalog. Connect Storefront API in .env.local when ready."}{" "}
              High-ticket or quote-only units should use Request a Quote.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categoryPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group overflow-hidden border border-[var(--line)] bg-white transition hover:border-primary"
            >
              <div className="relative aspect-[16/9] bg-bg-neutral">
                <Image
                  src={page.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="font-nav px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-ink group-hover:text-tertiary">
                {page.title.replace(/^Commercial |^Inflatable /, "")}
              </p>
            </Link>
          ))}
        </div>

        <div className="mb-6 flex flex-wrap gap-2 text-sm">
          <Link
            href="/packages"
            className="border border-[var(--line)] px-3 py-1.5 font-nav text-[11px] font-bold uppercase tracking-[0.08em] text-ink-soft hover:border-primary hover:text-ink"
          >
            Packages
          </Link>
          <Link
            href="/wholesale"
            className="border border-[var(--line)] px-3 py-1.5 font-nav text-[11px] font-bold uppercase tracking-[0.08em] text-ink-soft hover:border-primary hover:text-ink"
          >
            Wholesale
          </Link>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const src = product.imageLocal || product.imageUrl || FALLBACK_IMAGE;
            return (
              <li key={product.id} className="border border-[var(--line)] bg-white">
                <a
                  href={product.onlineStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-[4/3] bg-bg-plain">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                    />
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
            );
          })}
        </ul>
      </section>

      <QuoteCta />
    </>
  );
}
