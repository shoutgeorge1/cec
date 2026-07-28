import Image from "next/image";
import Link from "next/link";
import { QuoteCta } from "@/components/QuoteCta";
import { commercialPackages } from "@/lib/packages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Commercial Starter Packages",
  description:
    "Curated commercial inflatable starter packages for rental fleets. Built from real catalog products — talk to sales for configuration and pricing.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <>
      <section className="hero-plane" style={{ minHeight: "42vh" }}>
        <div className="hero-plane__media">
          <Image
            src="/media/products/wacky-kidzonea-c-wet-dry-combo.jpg"
            alt="Commercial starter packages from Cutting Edge Creations"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="hero-plane__shade" />
        <div className="hero-plane__content mx-auto flex min-h-[42vh] max-w-6xl items-end px-4 pb-10 pt-14 sm:px-6">
          <div className="max-w-3xl text-white">
            <p className="eyebrow text-primary">Packages</p>
            <h1 className="headline-hero mt-3 text-4xl text-white sm:text-5xl">
              Commercial starter packages
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-snug text-white/90">
              Shopify does not expose native bundle SKUs for these yet. Each card
              below is a curated package of real catalog products — labeled
              honestly as Package or Talk to sales.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
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
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-nav text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                  {pkg.label}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-ink">{pkg.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {pkg.blurb}
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                  {pkg.includes.map((item) => (
                    <li key={item.shopifyUrl}>
                      <a
                        href={item.shopifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tertiary hover:underline"
                      >
                        {item.title} ↗
                      </a>
                    </li>
                  ))}
                </ul>
                <Link href={pkg.href} className="btn-primary mt-6 self-start">
                  {pkg.label === "Talk to sales"
                    ? "Talk to sales"
                    : "Request package quote"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <QuoteCta
        headline="Want a custom fleet package?"
        body="Tell sales your region, season start, and booking mix. We will help shape a multi-unit package from the live catalog."
      />
    </>
  );
}
