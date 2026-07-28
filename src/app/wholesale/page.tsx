import Link from "next/link";
import { QuoteCta } from "@/components/QuoteCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Wholesale Commercial Inflatables",
  description:
    "Wholesale and multi-unit commercial inflatable packages for rental startups and expanding fleets. Talk to sales about volume pricing and custom builds.",
  path: "/wholesale",
});

export default async function WholesalePage({
  searchParams,
}: {
  searchParams: Promise<{ v?: string; variant?: string }>;
}) {
  const sp = await searchParams;
  const isB = (sp.v || sp.variant || "a").toLowerCase() === "b";

  return (
    <>
      <section className="bg-bg-neutral">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <p className="font-nav text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Wholesale & fleet buying
            {isB ? " · Package pricing tease" : ""}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
            {isB
              ? "Starter fleets with a clear path to sales"
              : "Multi-unit buys deserve a salesperson, not a cart alone"}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {isB
              ? "See curated commercial starter packages, then talk to sales about volume pricing, blowers, and lead times."
              : "Whether you are starting a rental company or expanding an existing fleet, wholesale conversations cover mix, capacity, lead times, and budget packaging."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={isB ? "/packages" : "/request-a-quote"}
              className="btn-primary"
            >
              {isB ? "See starter packages" : "Talk wholesale with sales"}
            </Link>
            <Link
              href={isB ? "/contact" : "/products"}
              className="btn-secondary"
            >
              {isB ? "Talk to sales" : "Preview catalog"}
            </Link>
          </div>
          <p className="mt-4 text-xs text-ink-muted">
            Offer test:{" "}
            <Link href="/wholesale?v=a" className="hover:text-tertiary">
              A
            </Link>{" "}
            ·{" "}
            <Link href="/wholesale?v=b" className="hover:text-tertiary">
              B
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              t: "Starter fleets",
              d: "Bounce + slide combinations sized for first-season booking mix.",
            },
            {
              t: "Expansion packs",
              d: "Add obstacles or specialty units that unlock new event types.",
            },
            {
              t: "Custom / brandable",
              d: "When standard SKUs are not enough, request a consult on custom work.",
            },
          ].map((item) => (
            <div key={item.t} className="border-t-2 border-primary pt-4">
              <h2 className="text-2xl font-bold text-ink">{item.t}</h2>
              <p className="mt-2 text-sm text-ink-soft">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <QuoteCta
        headline="Request a wholesale conversation"
        body="Include unit count, region, and season start date so sales can respond with a practical package."
        primaryHref={isB ? "/contact" : "/request-a-quote"}
        primaryLabel={isB ? "Talk to sales" : "Request a quote"}
      />
    </>
  );
}
