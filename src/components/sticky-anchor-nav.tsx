"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Sticky in-page section anchor nav.
 *
 * Rendered as a sibling of the page hero (not inside it) so position: sticky
 * isn't broken by the hero's overflow-hidden clip. Pins at top:80px under
 * the site header.
 *
 * When pinned, the bar visibly shrinks — tighter padding and pill sizing —
 * so it doesn't dominate the viewport while users read the section below.
 * Detection uses a 1px sentinel placed just above the nav: while the
 * sentinel is in view the nav is at rest; once the sentinel scrolls past
 * the 80px header line, the nav is stuck.
 */

export type AnchorSection = { label: string; href: string };

export function StickyAnchorNav({ sections }: { sections: AnchorSection[] }) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      {
        // Shift the intersection root down by the sticky offset (80px =
        // site header height). The sentinel "leaves view" precisely when
        // the nav has finished pinning underneath the header.
        rootMargin: "-80px 0px 0px 0px",
        threshold: 0,
      }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel — 1px tall, invisible. Tracks the "stuck" transition. */}
      <div ref={sentinelRef} aria-hidden className="h-px w-full" />

      <nav
        aria-label="On this page"
        className="sticky top-20 z-30 border-y border-white/10 bg-brand-deep/95 backdrop-blur shadow-lg shadow-black/10 transition-[padding] duration-200"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <ul
            className={`flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-2 lg:justify-center transition-[padding] duration-200 ${
              stuck ? "py-1.5" : "py-3"
            }`}
          >
            {sections.map((s) => (
              <li key={s.href} className="shrink-0">
                <a
                  href={s.href}
                  className={`inline-flex items-center rounded-full border border-white/15 font-semibold uppercase tracking-[0.14em] text-white/85 transition-all duration-200 hover:border-brand-orange hover:bg-brand-orange hover:text-white ${
                    stuck
                      ? "px-3 py-1 text-[10px] sm:text-[11px]"
                      : "px-4 py-2 text-xs sm:text-[13px]"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
