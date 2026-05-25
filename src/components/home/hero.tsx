"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

/**
 * Homepage hero — real image slider.
 *
 * Each slide pairs a headline with a different hero image pulled from
 * the WP media library. Slides auto-advance every 6s; users can also
 * navigate via prev/next arrows or the dot indicators.
 */
const slides = [
  {
    image: "/uploads/2026/03/Support-a-pond-hero.jpg",
    lead: "We",
    action: "REVITALIZE",
    suffix: "communities to make India",
    emphasis: "WATER-SECURE",
  },
  {
    image: "/uploads/2026/03/eco-hero.jpg",
    lead: "We",
    action: "REVIVE",
    suffix: "water bodies to restore natural",
    emphasis: "ECOSYSTEMS",
  },
  {
    image: "/uploads/2026/03/Water-proofing-hero.jpg",
    lead: "We",
    action: "DRIVE",
    suffix: "climate resilience through",
    emphasis: "ECO-RESTORATION",
  },
];

const AUTO_MS = 6000;

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIdx((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTO_MS);
    return () => clearInterval(t);
  }, [next, paused]);

  return (
    <section
      className="relative isolate overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Stacked slides — only the current one is visible */}
      <div className="absolute inset-0 -z-10">
        {slides.map((s, i) => (
          <div
            key={s.image}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== idx}
          >
            <Image
              src={s.image}
              alt=""
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/85 via-brand-deep/55 to-brand-deep/90" />
      </div>

      <div className="mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        {/* Animated headline tied to current slide */}
        <div className="relative min-h-[180px] sm:min-h-[220px] lg:min-h-[260px]">
          {slides.map((s, i) => (
            <h1
              key={i}
              className={`absolute inset-0 flex flex-col justify-center text-4xl font-semibold leading-tight tracking-tight text-white transition-all duration-700 sm:text-5xl lg:text-6xl ${
                i === idx
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
              aria-hidden={i !== idx}
            >
              <span>
                <span className="inline-block rounded-md bg-brand-primary/80 px-3 py-1 text-white shadow-lg shadow-black/20">
                  {s.lead}
                </span>{" "}
                <span className="text-brand-orange">{s.action}</span>{" "}
                <span className="text-white/95">{s.suffix}</span>{" "}
                <span className="text-brand-orange">{s.emphasis}</span>
              </span>
            </h1>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex items-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white hover:text-brand-deep"
          >
            Know More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          {/* Dot pagination */}
          <div className="ml-2 flex gap-2" role="tablist" aria-label="Hero slides">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === idx}
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-8 bg-brand-orange" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Prev / next arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-white hover:text-brand-deep lg:block"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-white hover:text-brand-deep lg:block"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </section>
  );
}
