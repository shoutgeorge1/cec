import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <Image
            src="/media/brand/desktop-logo.png"
            alt={siteConfig.name}
            width={180}
            height={47}
            className="h-9 w-auto sm:h-10"
            priority
          />
          <span className="font-nav hidden text-[10px] font-bold uppercase tracking-[0.18em] text-ink sm:block">
            Commercial · For sale
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="font-nav hidden items-center gap-5 text-[12px] font-bold uppercase tracking-[0.08em] text-ink lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-tertiary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/request-a-quote"
          className="btn-primary shrink-0 !px-3.5 !py-2.5 !text-[11px]"
        >
          Request a quote
        </Link>
      </div>

      <nav
        aria-label="Mobile categories"
        className="font-nav flex gap-4 overflow-x-auto border-t border-[var(--line)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft lg:hidden"
      >
        {navLinks.slice(0, 6).map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
