import Link from "next/link";

type QuoteCtaProps = {
  headline?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function QuoteCta({
  headline = "Need specs, fleet pricing, or a custom build?",
  body = "High-ticket commercial inflatables usually move through a short sales conversation—not a one-click cart. Tell us what you are buying for and we will route you to the right options.",
  primaryHref = "/request-a-quote",
  primaryLabel = "Request a quote",
}: QuoteCtaProps) {
  return (
    <section className="border-y border-[var(--line)] bg-bg-neutral">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {headline}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
            {body}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={primaryHref} className="btn-primary">
            {primaryLabel}
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact sales
          </Link>
        </div>
      </div>
    </section>
  );
}
