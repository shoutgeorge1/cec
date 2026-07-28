"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { primaryNavLinks, siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 sm:gap-3 sm:px-6">
          <Link href="/" className="flex min-w-0 flex-1 items-center lg:flex-none">
            <Image
              src="/media/brand/desktop-logo.png"
              alt={siteConfig.name}
              width={180}
              height={47}
              className="h-8 w-auto max-w-[min(100%,9.5rem)] sm:h-9 sm:max-w-none"
              priority
            />
          </Link>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <nav
              aria-label="Primary"
              className="font-nav hidden items-center gap-0 text-[10px] font-bold uppercase tracking-[0.05em] text-ink xl:gap-0.5 xl:text-[11px] lg:flex"
            >
              {primaryNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-sm px-1.5 py-2 transition hover:text-tertiary xl:px-2.5 ${
                    pathname === link.href ? "text-tertiary" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/request-a-quote"
              className="btn-primary !hidden !px-3.5 !py-2.5 !text-[11px] sm:!inline-flex"
            >
              Request a quote
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--line)] text-ink transition hover:border-tertiary hover:text-tertiary lg:hidden"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Close" : "Menu"}</span>
              <span className="flex w-[18px] flex-col gap-[5px]" aria-hidden>
                <span
                  className={`block h-[2px] bg-current transition ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] bg-current transition ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] bg-current transition ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/*
        Mobile sheet must be a SIBLING of the sticky header — not a child.
        backdrop-filter / sticky on <header> creates a containing block that
        clips position:fixed to ~header height, which hid all nav links.
      */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute right-0 top-0 flex h-full w-[min(100%,20.5rem)] flex-col bg-white shadow-xl transition-transform duration-200 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3">
            <p className="font-nav text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
              Menu
            </p>
            <button
              type="button"
              className="font-nav text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted hover:text-tertiary"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile">
            <ul className="space-y-0.5">
              {primaryNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-nav block border-l-2 py-3 pl-3 text-[14px] font-bold uppercase tracking-[0.06em] transition hover:text-tertiary ${
                      pathname === link.href
                        ? "border-primary text-tertiary"
                        : "border-transparent text-ink"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-[var(--line)] p-4">
            <Link
              href="/request-a-quote"
              className="btn-primary w-full !text-[12px]"
              onClick={() => setOpen(false)}
            >
              Request a quote
            </Link>
            <p className="mt-3 text-center text-xs text-ink-muted">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-tertiary">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
