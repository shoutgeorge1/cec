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

/**
 * Default homepage = PPC converter baseline.
 * Category landers already support ?v=a|b offer tests; homepage A/B offer
 * splits come next — do not overbuild a variant system here yet.
 */
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
        <div className="hero-plane__content mx-auto flex min-h-[72vh] max-w-6xl items-end px-4 pb-14 pt-20 sm:px-6 md:pb-16">
          <div className="max-w-2xl text-white">
            <p className="animate-rise eyebrow text-primary">
              Commercial inflatables · For sale
            </p>
            <h1 className="animate-rise-delay headline-hero mt-3 text-[2.5rem] text-white sm:text-5xl md:text-[3.5rem]">
              Buy commercial bounce houses, water slides &amp; obstacle courses.
            </h1>
            <p className="animate-rise-delay-2 mt-4 max-w-lg text-[1.05rem] leading-snug text-white/90 md:text-lg">
              Fleet-ready units for rental operators and venues. Request a quote
              — or talk to sales about packages.
            </p>
            <div className="animate-rise-delay-2 mt-7 flex flex-wrap gap-3">
              <Link href="/request-a-quote" className="btn-primary">
                Request a quote
              </Link>
              <Link
                href="/contact"
                className="btn-secondary !border-white/50 !text-white hover:!border-primary hover:!text-primary"
              >
                Talk to sales
              </Link>
              <Link
                href="/packages"
                className="btn-secondary !border-white/50 !text-white hover:!border-primary hover:!text-primary"
              >
                View packages
              </Link>
            </div>
            <p className="animate-rise-delay-2 mt-4 font-nav text-[11px] font-semibold uppercase tracking-[0.12em] text-white/65">
              <Link href="/products" className="underline-offset-2 hover:text-primary hover:underline">
                Shop catalog
              </Link>
              <span className="mx-2 text-white/35">·</span>
              USA manufacturer · Sales-assisted
            </p>
          </div>
        </div>
      </section>

      <TrustSignals />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow text-ink-muted">Shop by category</p>
            <h2 className="headline mt-2 text-2xl sm:text-3xl md:text-[2rem]">
              Commercial units for sale
            </h2>
          </div>
          <Link href="/products" className="btn-secondary !py-2 !text-[11px]">
            All products
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group overflow-hidden border border-[var(--line)] bg-white transition hover:border-primary"
            >
              <div className="relative aspect-[16/10] bg-bg-neutral">
                <Image
                  src={page.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-extrabold leading-snug tracking-tight text-ink group-hover:text-tertiary">
                  {page.title}
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-ink-soft">
                  {page.blurb}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-bg-neutral">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="eyebrow text-ink-muted">Featured units</p>
              <h2 className="headline mt-2 text-2xl sm:text-3xl md:text-[2rem]">
                From the live catalog
              </h2>
            </div>
            <Link href="/request-a-quote" className="btn-primary !py-2 !text-[11px]">
              Request a quote
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
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
                      src={
                        product.imageLocal ||
                        product.imageUrl ||
                        "/media/categories/monster-truck.png"
                      }
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3.5">
                    <p className="font-nav text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                      {product.productType || "Commercial"}
                    </p>
                    <h3 className="mt-1 text-[0.95rem] font-extrabold leading-snug tracking-tight text-ink">
                      {product.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-bold text-tertiary">
                      {product.priceDisplay ?? "Request pricing"}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow text-ink-muted">Packages</p>
            <h2 className="headline mt-2 text-2xl sm:text-3xl md:text-[2rem]">
              Starter fleets — talk to sales
            </h2>
          </div>
          <Link href="/packages" className="btn-secondary !py-2 !text-[11px]">
            All packages
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
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
              <div className="flex flex-1 flex-col p-4">
                <p className="eyebrow text-primary !tracking-[0.14em]">
                  {pkg.label}
                </p>
                <h3 className="mt-2 text-lg font-extrabold tracking-tight text-ink">
                  {pkg.name}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-snug text-ink-soft">
                  {pkg.blurb}
                </p>
                <Link href={pkg.href} className="btn-primary mt-4 self-start !py-2.5 !text-[11px]">
                  {pkg.label === "Talk to sales"
                    ? "Talk to sales"
                    : "Request package quote"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
