"use client";

import Image from "next/image";
import { useState } from "react";
import { primaryNav, ctaNav, isLocalRoute, type NavItem } from "@/lib/nav";
import { liveUrl } from "@/lib/live-url";

/** Resolve a NavItem href to either an internal path or the live site. */
function resolveHref(href: string): string {
  return isLocalRoute(href) ? href : liveUrl(href);
}

/**
 * Site header — light theme.
 *
 *  - Nav links resolve via resolveHref(): local routes (listed in
 *    localRoutes) stay internal; everything else falls back to the
 *    live gurujal.org page via liveUrl().
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
            href={resolveHref(ctaNav.href)}
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
                const itemHref = resolveHref(item.href);

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
                            href={resolveHref(item.href)}
                            onClick={closeMobile}
                            className="block rounded-md px-3 py-1.5 text-sm font-medium text-brand-ink hover:bg-brand-mist"
                          >
                            {item.label} overview
                          </a>
                        </li>
                        {item.children!.map((c, ci) => {
                          if (c.section) {
                            return (
                              <li
                                key={`m-section-${ci}-${c.label}`}
                                className={`px-3 pb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted ${
                                  ci === 0 ? "pt-2" : "pt-3"
                                }`}
                              >
                                {c.label}
                              </li>
                            );
                          }
                          const childHasChildren = !!c.children?.length;
                          if (childHasChildren) {
                            const subKey = `${item.label}::${c.label}`;
                            const subOpen = !!expanded[subKey];
                            return (
                              <li key={c.href + c.label}>
                                <div className="flex items-center gap-1">
                                  <a
                                    href={resolveHref(c.href)}
                                    onClick={closeMobile}
                                    className="flex-1 rounded-md px-3 py-1.5 text-sm text-brand-muted hover:bg-brand-mist hover:text-brand-ink"
                                  >
                                    {c.label}
                                  </a>
                                  <button
                                    type="button"
                                    onClick={() => toggleSection(subKey)}
                                    aria-expanded={subOpen}
                                    aria-label={`Toggle ${c.label} sub-menu`}
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-brand-muted hover:bg-brand-mist hover:text-brand-ink"
                                  >
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      aria-hidden
                                      className={`transition-transform duration-200 ${
                                        subOpen ? "rotate-180" : ""
                                      }`}
                                    >
                                      <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                  </button>
                                </div>
                                {subOpen && (
                                  <ul className="ml-3 mt-1 mb-1 border-l border-brand-soft pl-3">
                                    {c.children!.map((gc) => (
                                      <li key={gc.href + gc.label}>
                                        <a
                                          href={resolveHref(gc.href)}
                                          onClick={closeMobile}
                                          className="block rounded-md px-3 py-1.5 text-sm text-brand-muted hover:bg-brand-mist hover:text-brand-ink"
                                        >
                                          {gc.label}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            );
                          }
                          return (
                            <li key={c.href + c.label}>
                              <a
                                href={resolveHref(c.href)}
                                onClick={closeMobile}
                                className="block rounded-md px-3 py-1.5 text-sm text-brand-muted hover:bg-brand-mist hover:text-brand-ink"
                              >
                                {c.label}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
              <li className="mt-4">
                <a
                  href={resolveHref(ctaNav.href)}
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
  const itemHref = resolveHref(item.href);
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
          <div className="min-w-[260px] rounded-xl border border-brand-soft bg-white p-2 shadow-xl ring-1 ring-black/5">
            {item.children!.map((c, i) =>
              c.section ? (
                <div
                  key={`section-${i}-${c.label}`}
                  className={`px-3 pb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted ${
                    i === 0 ? "pt-1" : "pt-3"
                  }`}
                >
                  {c.label}
                </div>
              ) : c.children && c.children.length > 0 ? (
                <DesktopNestedItem key={c.href + c.label} item={c} />
              ) : (
                <a
                  key={c.href + c.label}
                  href={resolveHref(c.href)}
                  className="block rounded-md px-3 py-2 text-sm text-brand-ink hover:bg-brand-mist hover:text-brand-orange transition"
                >
                  {c.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Nested dropdown item — rendered inside a parent dropdown. The parent
 * link is still clickable (so e.g. "Support A Pond" navigates to the
 * solution page), but hovering its chevron expands a side flyout with
 * the third-level children.
 */
function DesktopNestedItem({ item }: { item: NavItem }) {
  return (
    <div className="group/sub relative">
      <a
        href={resolveHref(item.href)}
        className="flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-brand-ink hover:bg-brand-mist hover:text-brand-orange transition"
      >
        <span>{item.label}</span>
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </a>
      <div className="invisible absolute left-full top-0 z-50 pl-2 opacity-0 transition group-hover/sub:visible group-hover/sub:opacity-100">
        <div className="min-w-[240px] rounded-xl border border-brand-soft bg-white p-2 shadow-xl ring-1 ring-black/5">
          {item.children!.map((c) => (
            <a
              key={c.href + c.label}
              href={resolveHref(c.href)}
              className="block rounded-md px-3 py-2 text-sm text-brand-ink hover:bg-brand-mist hover:text-brand-orange transition"
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
