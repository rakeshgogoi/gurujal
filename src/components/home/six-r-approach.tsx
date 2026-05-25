"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const sixR = [
  {
    key: "RESOURCE",
    icon: "/uploads/2025/06/resource.png",
    blurb: "Equip young adults with the skills to become experts in the green economy.",
    href: "/we-for-water",
  },
  {
    key: "REDUCE",
    icon: "/uploads/2025/06/reduce.png",
    blurb: "Assist institutions in integrating climate-positive designs.",
    href: "/water-proofing",
  },
  {
    key: "RESTORE",
    icon: "/uploads/2025/06/restore.png",
    blurb: "Implement nature-based solutions to enhance groundwater tables.",
    href: "/support-a-pond",
  },
  {
    key: "REVIVE",
    icon: "/uploads/2025/06/revive.png",
    blurb: "Foster the growth of natural forest covers to support local biodiversity.",
    href: "/eco-restoration",
  },
  {
    key: "RETHINK",
    icon: "/uploads/2025/06/rethink.png",
    blurb: "Promote behavior change to cultivate a positive attitude towards conservation.",
    href: "/connect-the-drops",
  },
  {
    key: "REALIGN",
    icon: "/uploads/2025/06/realign.png",
    blurb: "Guide companies in balancing profits, people, and the planet.",
    href: "/esg-advisory",
  },
];

/**
 * "The 6R Approach" — horizontal scroll-snap carousel.
 *
 * Six cards live in a horizontally scrolling track with scroll-snap so they
 * snap to a card edge on release. Two arrow buttons step the scroll by one
 * card width. Hidden on overflow-x-auto so users can also swipe / drag.
 */
export function SixRApproach() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // Update arrow disabled state from scroll position
  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scrollBy = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    // Step by ~one card width (account for gap)
    const firstCard = el.querySelector<HTMLElement>("[data-card]");
    const step = firstCard ? firstCard.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-brand-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              There is a Smart Solution for the Crisis
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              The 6R Approach
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              A circular and strategic framework for sustainability and
              resilience.
            </p>
          </div>

          {/* Arrow controls */}
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="Previous"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-primary/30 bg-white text-brand-primary transition hover:bg-brand-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-brand-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="Next"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-primary/30 bg-white text-brand-primary transition hover:bg-brand-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-brand-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal scroller */}
        <div className="relative mt-12">
          {/* Soft fade on the right edge hinting at more content */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-brand-mist to-transparent"
            aria-hidden
          />
          <ul
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            style={{ scrollbarWidth: "thin" }}
          >
            {sixR.map((r) => (
              <li
                key={r.key}
                data-card
                className="snap-start shrink-0 w-[280px] sm:w-[320px]"
              >
                <Link
                  href={r.href}
                  className="group relative flex h-full flex-col rounded-2xl border border-brand-soft/80 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-accent hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-mist ring-1 ring-brand-soft">
                      <Image
                        src={r.icon}
                        alt=""
                        width={36}
                        height={36}
                        className="h-9 w-9 object-contain"
                      />
                    </span>
                    <div className="text-2xl font-bold tracking-tight text-brand-primary">
                      {r.key}
                    </div>
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-brand-muted">
                    {r.blurb}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-x-0.5" aria-hidden>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
