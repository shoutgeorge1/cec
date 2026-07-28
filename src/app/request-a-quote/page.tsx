import { QuoteForm } from "@/components/QuoteForm";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Request a Quote",
  description:
    "Request commercial inflatable pricing and specifications. Tell us your business type, product interest, quantity, and timeline.",
  path: "/request-a-quote",
});

export default function RequestQuotePage() {
  return (
    <section className="bg-bg-neutral">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:py-16">
        <div>
          <p className="font-nav text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Sales-assisted buying
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Request a quote
          </h1>
          <p className="mt-4 text-ink-soft">
            Use this form for commercial bounce houses, water slides, obstacle
            courses, wholesale fleets, and custom builds. Structured fields help
            sales respond with the right specs—not a generic contact dump.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink-soft">
            <li>• Typical response path: sales review → specs/options → quote</li>
            <li>• Include region and season start date when possible</li>
            <li>
              · Or email{" "}
              <a
                className="font-semibold text-tertiary hover:underline"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
        <div className="border border-[var(--line)] bg-white p-5 sm:p-7">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
