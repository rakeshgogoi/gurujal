"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav, ctaNav, type NavItem } from "@/lib/nav";

/**
 * Site header — recreates gurujal.org's main header.
 *
 *  - Background: brand deep teal (#1A3A4A)
 *  - Logo: white wordmark
 *  - Nav: white links with orange (#F5A043) active state and chevron dropdowns
 *  - Right side: "Support Us" pill CTA
 *  - Mobile: hamburger toggle with full nav drawer
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="w-full bg-brand-deep text-white">
      <div className="mx-auto flex h-[92px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="GuruJal — home"
          className="flex items-center gap-3 shrink-0"
        >
          <Image
            src="/brand/gurujal-logo-white.png"
            alt="GuruJal"
            width={170}
            height={52}
            priority
            className="h-12 w-auto"
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
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
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
        <div className="lg:hidden border-t border-white/10 bg-brand-deep">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-white/10 ${
                      isActive(item.href) ? "text-brand-orange" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-3 mt-1 mb-2 border-l border-white/15 pl-3">
                      {item.children.map((c) => (
                        <li key={c.href + c.label}>
                          <Link
                            href={c.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 hover:text-white"
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
          active ? "text-brand-orange" : "text-white hover:text-brand-orange"
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
          <div className="min-w-[240px] rounded-xl border border-white/10 bg-brand-deep p-2 shadow-xl ring-1 ring-black/20">
            {item.children!.map((c) => (
              <Link
                key={c.href + c.label}
                href={c.href}
                className="block rounded-md px-3 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-brand-orange transition"
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
