import Image from "next/image";
import Link from "next/link";
import { QuoteCta } from "@/components/QuoteCta";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, productPlaceholderJsonLd } from "@/lib/seo";
import { getOfferVariant, type OfferVariantId } from "@/lib/variants";

type CategoryPageProps = {
  title: string;
  path: string;
  eyebrow: string;
  intro: string;
  bullets: string[];
  related: { href: string; label: string }[];
  productName: string;
  productDescription: string;
  category: string;
  heroImage?: string;
  /** From searchParams: ?v=a|b */
  variant?: string | string[];
};

export function CategoryPage({
  title,
  path,
  eyebrow,
  intro,
  bullets,
  related,
  productName,
  productDescription,
  category,
  heroImage = "/media/products/fire-station-combo-wet-dry.jpg",
  variant,
}: CategoryPageProps) {
  const offer = getOfferVariant(variant);

  return (
    <>
      <JsonLd
        data={productPlaceholderJsonLd({
          name: productName,
          description: productDescription,
          url: absoluteUrl(path),
          category,
        })}
      />
      <section className="hero-plane" style={{ minHeight: "52vh" }}>
        <div className="hero-plane__media">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="hero-plane__shade" />
        <div className="hero-plane__content mx-auto flex min-h-[52vh] max-w-6xl items-end px-4 pb-12 pt-16 sm:px-6">
          <div className="hero-plane__copy max-w-3xl">
            <p className="eyebrow text-primary">
              {eyebrow}
              {offer.eyebrowSuffix || ""}
            </p>
            <h1 className="headline-hero mt-3 text-4xl text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="hero-plane__lead mt-4">{intro}</p>
            <p className="mt-4 max-w-xl text-sm font-semibold text-primary">
              {offer.offerLine}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={offer.ctaPrimary.href} className="btn-primary">
                {offer.ctaPrimary.label}
              </Link>
              <Link
                href={offer.ctaSecondary.href}
                className="btn-secondary !border-white/50 !text-white hover:!border-primary hover:!text-primary"
              >
                {offer.ctaSecondary.label}
              </Link>
            </div>
            <p className="hero-plane__meta mt-3 !tracking-[0.08em] !normal-case">
              Comparing offers:{" "}
              <Link href={`${path}?v=a`} className="underline hover:text-white">
                Quote
              </Link>
              {" · "}
              <Link href={`${path}?v=b`} className="underline hover:text-white">
                Packages
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <h2 className="headline text-2xl sm:text-3xl">
            What buyers usually need next
          </h2>
          <p className="mt-3 max-w-xl text-ink-soft">{offer.supportLine}</p>
          <ul className="mt-5 space-y-3 text-sm text-ink-soft md:text-base">
            {bullets.map((item) => (
              <li key={item} className="border-l-2 border-tertiary/50 pl-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="border border-[var(--line)] bg-bg-neutral p-5">
          <p className="font-nav text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Related
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {related.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink hover:text-tertiary">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/packages" className="text-ink hover:text-tertiary">
                Starter packages
              </Link>
            </li>
            <li>
              <Link href="/wholesale" className="text-ink hover:text-tertiary">
                Wholesale & fleet packages
              </Link>
            </li>
          </ul>
          <div className="mt-6 border-t border-[var(--line)] pt-4">
            <p className="text-xs text-ink-muted">Try the other offer</p>
            <div className="mt-2 flex gap-2 text-sm">
              {(["a", "b"] as OfferVariantId[]).map((id) => (
                <Link
                  key={id}
                  href={`${path}?v=${id}`}
                  className={
                    offer.id === id
                      ? "font-semibold text-tertiary"
                      : "text-ink-soft hover:text-tertiary"
                  }
                >
                  Variant {id.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <QuoteCta
        headline={
          offer.id === "b"
            ? "Ready to talk packages with sales?"
            : "Ready to compare commercial options?"
        }
        body={offer.supportLine}
        primaryHref={offer.ctaPrimary.href}
        primaryLabel={offer.ctaPrimary.label}
      />
    </>
  );
}
