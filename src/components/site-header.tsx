"use client";

import Image from "next/image";
import { useState } from "react";
import { primaryNav, ctaNav, type NavItem } from "@/lib/nav";
import { liveUrl } from "@/lib/live-url";

/**
 * Site header — light theme.
 *
 *  - All nav links resolve to the live gurujal.org site via liveUrl().
 *    The home link stays internal so the new homepage is reachable.
 *  - Logo on the left, primary nav in the middle, Support Us pill on the
 *    right. Mobile drawer collapses everything into a column.
 */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleSection = (key: string) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  const closeMobile = () => {
    setMobileOpen(false);
    setExpanded({});
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white text-brand-ink shadow-sm ring-1 ring-brand-soft/60">
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo — internal home link (this homepage). */}
        <a href="/" aria-label="GuruJal — home" className="flex items-center gap-3 shrink-0">
          <Image
            src="/brand/gurujal-logo.png"
            alt="GuruJal"
            width={260}
            height={80}
            priority
            className="h-14 w-auto sm:h-16 lg:h-[68px]"
          />
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-1 xl:gap-2"
        >
          {primaryNav.map((item) => (
            <DesktopNavItem
              key={item.href + item.label}
              item={item}
              isHome={item.href === "/"}
            />
          ))}
        </nav>

        {/* Right side: CTA + menu */}
        <div className="flex items-center gap-3">
          <a
            href={liveUrl(ctaNav.href)}
            className="hidden lg:inline-flex items-center rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-orange-dark"
          >
            {ctaNav.label}
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
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

      {/* Mobile drawer — parents with children render as toggles that
          expand a sub-list; clicking the chevron / row toggles the
          accordion without navigating. Leaf items navigate as normal. */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-brand-soft bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col gap-1">
              {primaryNav.map((item) => {
                const hasChildren = !!item.children?.length;
                const isOpen = !!expanded[item.label];
                const itemHref = item.href === "/" ? "/" : liveUrl(item.href);

                return (
                  <li key={item.href + item.label}>
                    {hasChildren ? (
                      <button
                        type="button"
                        onClick={() => toggleSection(item.label)}
                        aria-expanded={isOpen}
                        aria-controls={`mobile-submenu-${item.label}`}
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base font-semibold text-brand-ink hover:bg-brand-mist"
                      >
                        <span>{item.label}</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                          className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    ) : (
                      <a
                        href={itemHref}
                        onClick={closeMobile}
                        className={`block rounded-md px-3 py-2 text-base font-semibold hover:bg-brand-mist ${
                          item.href === "/" ? "text-brand-orange" : "text-brand-ink"
                        }`}
                      >
                        {item.label}
                      </a>
                    )}
                    {hasChildren && isOpen && (
                      <ul
                        id={`mobile-submenu-${item.label}`}
                        className="ml-3 mt-1 mb-2 border-l border-brand-soft pl-3"
                      >
                        {/* First item links to the parent page itself so
                            users can still reach e.g. About → Our Story. */}
                        <li>
                          <a
                            href={liveUrl(item.href)}
                            onClick={closeMobile}
                            className="block rounded-md px-3 py-1.5 text-sm font-medium text-brand-ink hover:bg-brand-mist"
                          >
                            {item.label} overview
                          </a>
                        </li>
                        {item.children!.map((c) => (
                          <li key={c.href + c.label}>
                            <a
                              href={liveUrl(c.href)}
                              onClick={closeMobile}
                              className="block rounded-md px-3 py-1.5 text-sm text-brand-muted hover:bg-brand-mist hover:text-brand-ink"
                            >
                              {c.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
              <li className="mt-4">
                <a
                  href={liveUrl(ctaNav.href)}
                  onClick={closeMobile}
                  className="block rounded-full bg-brand-orange px-5 py-2.5 text-center text-sm font-semibold text-white"
                >
                  {ctaNav.label}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

function DesktopNavItem({ item, isHome }: { item: NavItem; isHome: boolean }) {
  const hasChildren = item.children && item.children.length > 0;
  const itemHref = isHome ? "/" : liveUrl(item.href);
  return (
    <div className="group relative">
      <a
        href={itemHref}
        className={`inline-flex items-center gap-1 px-3 py-2 text-[17px] font-semibold transition ${
          isHome ? "text-brand-orange" : "text-brand-ink hover:text-brand-orange"
        }`}
      >
        {item.label}
        {hasChildren && (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </a>
      {hasChildren && (
        <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
          <div className="min-w-[240px] rounded-xl border border-brand-soft bg-white p-2 shadow-xl ring-1 ring-black/5">
            {item.children!.map((c) => (
              <a
                key={c.href + c.label}
                href={liveUrl(c.href)}
                className="block rounded-md px-3 py-2 text-sm text-brand-ink hover:bg-brand-mist hover:text-brand-orange transition"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
