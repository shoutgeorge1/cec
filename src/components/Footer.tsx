import Image from "next/image";
import Link from "next/link";
import { categoryPages, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-bg-neutral">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/media/brand/desktop-logo.png"
            alt={siteConfig.name}
            width={160}
            height={42}
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            Commercial bounce houses, water slides, and obstacle courses for
            operators who need durable inventory and a clear path to specs and
            pricing.
          </p>
        </div>

        <div>
          <p className="font-nav text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Categories
          </p>
          <ul className="mt-3 space-y-2 text-sm text-ink">
            {categoryPages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="hover:text-tertiary">
                  {page.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/packages" className="hover:text-tertiary">
                Packages
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-tertiary">
                Products
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-nav text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Sales
          </p>
          <ul className="mt-3 space-y-2 text-sm text-ink">
            <li>
              <Link href="/request-a-quote" className="hover:text-tertiary">
                Request a quote
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-tertiary">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-tertiary">
                About
              </Link>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-tertiary">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.shopifyUrl}
                className="hover:text-tertiary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Shopify catalog ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--line)] px-4 py-4 text-center text-xs text-ink-muted sm:px-6">
        © {new Date().getFullYear()} {siteConfig.name}. Product images from the
        client storefront for this engagement.
      </div>
    </footer>
  );
}
