import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Cutting Edge Creations for commercial inflatable sales questions, catalog help, or quote follow-up.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-bg-neutral">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <p className="font-nav text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Talk with sales
        </h1>
        <p className="mt-4 max-w-2xl text-ink-soft">
          For product selection, fleet packaging, or custom work, the fastest
          path is a structured quote. Use contact for general questions and
          follow-ups.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="border-t-2 border-primary bg-white p-6">
            <h2 className="text-2xl font-bold text-ink">Quote requests</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Preferred for commercial purchases and multi-unit orders.
            </p>
            <Link href="/request-a-quote" className="btn-primary mt-4">
              Open quote form
            </Link>
          </div>
          <div className="border-t-2 border-tertiary bg-white p-6">
            <h2 className="text-2xl font-bold text-ink">Email</h2>
            <p className="mt-2 text-sm text-ink-soft">
              General sales and catalog questions.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-block font-semibold text-tertiary hover:underline"
            >
              {siteConfig.email}
            </a>
            <p className="mt-6 text-xs text-ink-muted">
              Phone and address can be added once confirmed for the public
              marketing site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
