import Link from "next/link";
import { QuoteCta } from "@/components/QuoteCta";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Cutting Edge Creations",
  description:
    "Cutting Edge Creations supplies commercial-grade inflatables for rental operators and entertainment venues. Independent brand focused on for-sale commercial equipment.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-bg-neutral">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <p className="font-nav text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            About
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
            An independent brand for commercial inflatable buyers
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {siteConfig.name} focuses on commercial-grade bounce houses, water
            slides, obstacle courses, and related inflatables sold to operators
            who need durable inventory—and often a salesperson to close the
            right package.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-ink">Who we serve</h2>
            <p className="mt-3 text-ink-soft">
              Party rental companies, family entertainment centers, schools and
              churches, advertising programs, and other organizations buying
              equipment to generate bookings—not shoppers looking for a same-day
              backyard rental.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-ink">How buying works</h2>
            <p className="mt-3 text-ink-soft">
              Browse category landers and the product index, then{" "}
              <Link
                href="/request-a-quote"
                className="font-semibold text-tertiary hover:underline"
              >
                request a quote
              </Link>{" "}
              for specs, fleet packaging, and pricing. High-ticket commercial
              purchases usually need a short consult.
            </p>
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
