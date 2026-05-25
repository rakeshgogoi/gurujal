"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav, ctaNav, type NavItem } from "@/lib/nav";

/**
 * Site header — light theme.
 *
 *  - Background: white, sits in normal document flow (no longer overlapping
 *    the hero). Sticky so it stays visible while scrolling.
 *  - Logo: colored GuruJal mark (gurujal-logo.png).
 *  - Nav text: brand-ink (dark teal). Active link in brand-orange.
 *  - Right side: "Support Us" pill CTA.
 *  - Mobile: hamburger toggle with light drawer.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40 w-full bg-white text-brand-ink shadow-sm ring-1 ring-brand-soft/60">
      <div className="mx-auto flex h-[112px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo — colored mark on light bg */}
        <Link
          href="/"
          aria-label="GuruJal — home"
          className="flex items-center gap-3 shrink-0"
        >
          <Image
            src="/brand/gurujal-logo.png"
            alt="GuruJal"
            width={260}
            height={80}
            priority
            className="h-16 w-auto sm:h-[72px] lg:h-20"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-1 xl:gap-2"
        >
          {primaryNav.map((item) => (
            <DesktopNavItem
              key={item.href + item.label}
              item={item}
              active={isActive(item.href)}
            />
          ))}
        </nav>

        {/* Right side: CTA + menu */}
        <div className="flex items-center gap-3">
          <Link
            href={ctaNav.href}
            className="hidden lg:inline-flex items-center rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-orange-dark"
          >
            {ctaNav.label}
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-ink hover:bg-brand-mist"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-brand-soft bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-brand-mist ${
                      isActive(item.href) ? "text-brand-orange" : "text-brand-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-3 mt-1 mb-2 border-l border-brand-soft pl-3">
                      {item.children.map((c) => (
                        <li key={c.href + c.label}>
                          <Link
                            href={c.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md px-3 py-1.5 text-sm text-brand-muted hover:bg-brand-mist hover:text-brand-ink"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="mt-4">
                <Link
                  href={ctaNav.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-full bg-brand-orange px-5 py-2.5 text-center text-sm font-semibold text-white"
                >
                  {ctaNav.label}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

function DesktopNavItem({ item, active }: { item: NavItem; active: boolean }) {
  const hasChildren = item.children && item.children.length > 0;
  return (
    <div className="group relative">
      <Link
        href={item.href}
        className={`inline-flex items-center gap-1 px-3 py-2 text-[15px] font-medium transition ${
          active ? "text-brand-orange" : "text-brand-ink hover:text-brand-orange"
        }`}
      >
        {item.label}
        {hasChildren && (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </Link>
      {hasChildren && (
        <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
          <div className="min-w-[240px] rounded-xl border border-brand-soft bg-white p-2 shadow-xl ring-1 ring-black/5">
            {item.children!.map((c) => (
              <Link
                key={c.href + c.label}
                href={c.href}
                className="block rounded-md px-3 py-2 text-sm text-brand-ink hover:bg-brand-mist hover:text-brand-orange transition"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
