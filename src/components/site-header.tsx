"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { primaryNav, type NavItem } from "@/lib/nav";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-soft/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="GuruJal — home"
          className="flex items-center"
        >
          <Image
            src="/brand/gurujal-logo.png"
            alt="GuruJal"
            width={180}
            height={56}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-1"
        >
          {primaryNav.map((item) => (
            <DesktopNavItem key={item.href} item={item} />
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/support-a-pond"
            className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-primary-dark"
          >
            Support a Pond
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-ink hover:bg-brand-soft"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-brand-soft bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-base font-medium text-brand-ink hover:bg-brand-soft"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-3 mt-1 mb-2 border-l border-brand-soft pl-3">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md px-3 py-1.5 text-sm text-brand-muted hover:bg-brand-soft hover:text-brand-ink"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="mt-3">
                <Link
                  href="/support-a-pond"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-full bg-brand-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Support a Pond
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  const hasChildren = item.children && item.children.length > 0;
  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-brand-ink transition hover:text-brand-primary"
      >
        {item.label}
        {hasChildren && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </Link>
      {hasChildren && (
        <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
          <div className="min-w-[220px] rounded-xl border border-brand-soft bg-white p-2 shadow-lg ring-1 ring-black/5">
            {item.children!.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block rounded-md px-3 py-2 text-sm text-brand-ink hover:bg-brand-soft hover:text-brand-primary"
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
