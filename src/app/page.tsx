import Image from "next/image";
import Link from "next/link";
import { QuoteCta } from "@/components/QuoteCta";
import { TrustSignals } from "@/components/TrustSignals";
import { commercialPackages } from "@/lib/packages";
import { buildMetadata } from "@/lib/seo";
import { fetchFeaturedProducts } from "@/lib/shopify";
import { categoryPages, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default async function HomePage() {
  const products = await fetchFeaturedProducts(8);

  return (
    <>
      <section className="hero-plane hero-pan">
        <div className="hero-plane__media">
          <Image
            src="/media/hero/barnyard-breakout-main.jpg"
            alt="Commercial inflatable obstacle course from Cutting Edge Creations"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="hero-plane__shade" />
        <div className="hero-plane__content mx-auto flex min-h-[78vh] max-w-6xl items-end px-4 pb-16 pt-24 sm:px-6 md:pb-20">
          <div className="max-w-2xl text-white">
            <p className="animate-rise font-nav text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Cutting Edge Creations
            </p>
            <h1 className="animate-rise-delay mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Commercial inflatables for operators who sell weekends.
            </h1>
            <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Bounce houses, water slides, and obstacle courses built for rental
              fleets and entertainment venues — for sale, not party rental near
              you. Browse the catalog or request a quote when you need specs and
              packaging.
            </p>
            <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
              <Link href="/request-a-quote" className="btn-primary">
                Request a quote
              </Link>
              <Link
                href="/products"
                className="btn-secondary !border-white/40 !text-white hover:!border-primary hover:!text-primary"
              >
                View products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <p className="font-nav text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Shop by category
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Built around commercial, for-sale search intent
          </h2>
          <p className="mt-3 text-ink-soft">
            Category landers target operators buying inventory — not local “near
            me” rental queries.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
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
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-ink group-hover:text-tertiary">
                  {page.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {page.blurb}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-bg-neutral">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="font-nav text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                From the live catalog
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Featured commercial units
              </h2>
              <p className="mt-3 text-ink-soft">
                Pulled from cuttingedgecreations.com. Prices shown when published;
                quote-only or complex builds go through sales.
              </p>
            </div>
            <Link href="/products" className="btn-secondary">
              All products
            </Link>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                  <div className="p-4">
                    <p className="font-nav text-[10px] uppercase tracking-[0.12em] text-ink-muted">
                      {product.productType || "Commercial"}
                    </p>
                    <h3 className="mt-1 text-base font-bold leading-snug text-ink">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-tertiary">
                      {product.priceDisplay ?? "Request pricing"}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <p className="font-nav text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Packages
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Commercial starter packages
          </h2>
          <p className="mt-3 text-ink-soft">
            Curated multi-unit packages from real catalog products. Not Shopify
            bundle SKUs yet — labeled honestly as Package / Talk to sales.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {commercialPackages.map((pkg) => (
            <article
              key={pkg.id}
              className="flex flex-col border border-[var(--line)] bg-white"
            >
              <div className="relative aspect-[16/10] bg-bg-neutral">
                <Image
                  src={pkg.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-nav text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                  {pkg.label}
                </p>
                <h3 className="mt-2 text-xl font-bold text-ink">{pkg.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {pkg.blurb}
                </p>
                <ul className="mt-4 space-y-1 text-xs text-ink-muted">
                  {pkg.includes.map((item) => (
                    <li key={item.shopifyUrl}>· {item.title}</li>
                  ))}
                </ul>
                <Link href={pkg.href} className="btn-primary mt-5 self-start">
                  {pkg.label === "Talk to sales"
                    ? "Talk to sales"
                    : "Request package quote"}
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm">
          <Link href="/packages" className="font-semibold text-tertiary hover:underline">
            See all packages →
          </Link>
        </p>
      </section>

      <QuoteCta />
    </>
  );
}
