import Image from "next/image";
import Link from "next/link";
import { QuoteCta } from "@/components/QuoteCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Wholesale Commercial Inflatables",
  description:
    "Wholesale and multi-unit commercial inflatable packages for rental startups and expanding fleets. Talk to sales about volume pricing and custom builds.",
  path: "/wholesale",
});

const wholesaleTracks = [
  {
    t: "Starter fleets",
    d: "Bounce + slide combinations sized for first-season booking mix.",
    image: "/media/products/wacky-15-large-bouncer.jpg",
    alt: "Commercial bounce house for starter fleets",
  },
  {
    t: "Expansion packs",
    d: "Add obstacles or specialty units that unlock new event types.",
    image: "/media/products/wacky-180ao-obstaclea-c.jpg",
    alt: "Commercial obstacle course for fleet expansion",
  },
  {
    t: "Custom / brandable",
    d: "When standard SKUs are not enough, request a consult on custom work.",
    image: "/media/categories/custom.png",
    alt: "Custom commercial inflatable build",
  },
] as const;

export default async function WholesalePage({
  searchParams,
}: {
  searchParams: Promise<{ v?: string; variant?: string }>;
}) {
  const sp = await searchParams;
  const isB = (sp.v || sp.variant || "a").toLowerCase() === "b";

  return (
    <>
      <section className="hero-plane" style={{ minHeight: "48vh" }}>
        <div className="hero-plane__media">
          <Image
            src="/media/products/wacky-5-in-1-combo.jpg"
            alt="Commercial inflatable fleet from Cutting Edge Creations"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="hero-plane__shade" />
        <div className="hero-plane__content mx-auto flex min-h-[48vh] max-w-6xl items-end px-4 pb-12 pt-16 sm:px-6">
          <div className="hero-plane__copy max-w-3xl">
            <p className="eyebrow text-primary">
              Wholesale & fleet buying
              {isB ? " · Package pricing" : ""}
            </p>
            <h1 className="headline-hero mt-3 text-4xl text-white sm:text-5xl md:text-6xl">
              {isB
                ? "Starter fleets with a clear path to sales"
                : "Multi-unit buys deserve a salesperson, not a cart alone"}
            </h1>
            <p className="hero-plane__lead mt-4">
              {isB
                ? "Review starter packages, then talk to sales about volume pricing and lead times."
                : "Starting or expanding a fleet? Sales covers mix, capacity, lead times, and volume pricing."}
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
                className="btn-secondary !border-white/50 !text-white hover:!border-primary hover:!text-primary"
              >
                {isB ? "Talk to sales" : "Preview catalog"}
              </Link>
            </div>
            <p className="hero-plane__meta mt-4 !tracking-[0.08em] !normal-case">
              Offer test:{" "}
              <Link href="/wholesale?v=a" className="underline hover:text-white">
                A
              </Link>{" "}
              ·{" "}
              <Link href="/wholesale?v=b" className="underline hover:text-white">
                B
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {wholesaleTracks.map((item) => (
            <div key={item.t} className="overflow-hidden border border-[var(--line)] bg-white">
              <div className="relative aspect-[16/10] bg-bg-neutral">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t-2 border-primary p-5">
                <h2 className="text-2xl font-bold text-ink">{item.t}</h2>
                <p className="mt-2 text-sm text-ink-soft">{item.d}</p>
              </div>
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
