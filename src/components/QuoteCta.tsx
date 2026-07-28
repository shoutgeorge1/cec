import Link from "next/link";

type QuoteCtaProps = {
  headline?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function QuoteCta({
  headline = "Ready for specs and pricing?",
  body = "Commercial inflatables move through a short sales conversation. Tell us what you need — we route you to the right units or packages.",
  primaryHref = "/request-a-quote",
  primaryLabel = "Request a quote",
}: QuoteCtaProps) {
  return (
    <section className="border-y border-[var(--line)] bg-bg-neutral">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="headline text-2xl sm:text-3xl md:text-[2rem]">
            {headline}
          </h2>
          <p className="mt-2 text-sm leading-snug text-ink-soft md:text-[0.95rem]">
            {body}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={primaryHref} className="btn-primary">
            {primaryLabel}
          </Link>
          <Link href="/contact" className="btn-secondary">
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}
