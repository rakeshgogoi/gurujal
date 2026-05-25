"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { HeroAchievements } from "./hero-achievements";

/**
 * Homepage hero — YouTube video background ("Gurujal Intro", id 3olgmTIt80U)
 * matching the live site's Slider Revolution hero.
 *
 *  - Static poster image is rendered behind the iframe so users always see
 *    something while the YouTube embed loads (and on browsers / contexts
 *    where autoplay is blocked, e.g. localhost / private mode, the poster
 *    remains visible).
 *  - The iframe sits on top with `pointer-events:none` so CTAs work.
 *  - The headline rotates through three lines on a 6-second schedule.
 */
const YT_ID = "3olgmTIt80U";

const headlines = [
  {
    lead: "We",
    action: "REVITALIZE",
    suffix: "communities to make India",
    emphasis: "WATER-SECURE",
  },
  {
    lead: "We",
    action: "REVIVE",
    suffix: "water bodies to restore natural",
    emphasis: "ECOSYSTEMS",
  },
  {
    lead: "We",
    action: "DRIVE",
    suffix: "climate resilience through",
    emphasis: "ECO-RESTORATION",
  },
];

const AUTO_MS = 6000;

export function Hero() {
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % headlines.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + headlines.length) % headlines.length), []);

  useEffect(() => {
    const t = setInterval(next, AUTO_MS);
    return () => clearInterval(t);
  }, [next]);

  // YouTube embed params — tuned for reliable muted autoplay.
  //  - Use youtube.com (some browsers' autoplay heuristics treat the
  //    nocookie variant more conservatively)
  //  - autoplay=1 + mute=1 to satisfy browser autoplay policies
  //  - loop=1 + playlist=ID to make a single video loop
  //  - playsinline=1 for iOS (critical — iOS Safari won't autoplay
  //    fullscreen takeovers, only inline)
  //  - controls=0 + showinfo=0 + modestbranding=1 + iv_load_policy=3 hide chrome
  //  - rel=0, disablekb=1, fs=0 for safety
  //  - enablejsapi=1 lets us script the player if we ever need to
  const ytSrc =
    `https://www.youtube.com/embed/${YT_ID}` +
    `?autoplay=1&mute=1&controls=0&loop=1&playlist=${YT_ID}` +
    `&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3` +
    `&disablekb=1&fs=0&showinfo=0&enablejsapi=1`;

  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      {/* Video background.
          Layer order (bottom→top):
            1. poster image (always visible — fallback if video can't autoplay)
            2. YouTube iframe (covers the poster once video starts)
            3. dark gradient overlay for headline contrast */}
      <div className="absolute inset-0 -z-10">
        {/* Poster — always rendered, no fade. */}
        <Image
          src="/uploads/2026/03/Support-a-pond-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 overflow-hidden">
          {/*
            Video-cover sizing for a 16:9 YouTube embed:
              width  = max(100vw, 100vh * 16/9)   // i.e. max(100vw, 177.78vh)
              height = width * 9/16                // maintained via aspect-video
            This guarantees the iframe is at least viewport-wide AND
            viewport-tall, with 16:9 preserved, so the video always covers
            the hero area regardless of viewport aspect ratio.
          */}
          <iframe
            title="GuruJal Intro"
            src={ytSrc}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video w-[max(100vw,177.78vh)]"
            style={{ border: 0 }}
          />
        </div>

        {/* Dark overlay for readability — keep it light so the video shows through */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/55 via-brand-deep/35 to-brand-deep/70" />
      </div>

      {/*
        Hero content container. Header is in normal flow above so the hero
        can use the full viewport for impact. min-h tuned so the headline
        and CTA sit comfortably with breathing room above and below.
      */}
      {/* On lg+ the right side is reserved for the achievements ticker, so
          the headline gets right-padding to avoid running into it. */}
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 lg:pr-[400px]">
        {/* Rotating headline — one <h1> swapped on idx change, with a key
            forcing remount so the fade-in animation replays cleanly without
            overlapping the previous slide. */}
        <div className="relative min-h-[120px] sm:min-h-[140px] lg:min-h-[170px]">
          <h1
            key={idx}
            className="absolute inset-0 flex flex-col justify-center text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl gj-headline-enter"
          >
            <span>
              <span className="inline-block rounded-md bg-brand-teal px-3 py-1 text-white shadow-lg shadow-black/20">
                {headlines[idx].lead}
              </span>{" "}
              <span className="text-brand-teal-bright">{headlines[idx].action}</span>{" "}
              <span className="text-white/95">{headlines[idx].suffix}</span>{" "}
              <span className="text-brand-green">{headlines[idx].emphasis}</span>
            </span>
          </h1>
        </div>

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

          {/* Headline dot pagination */}
          <div className="ml-2 flex gap-2" role="tablist" aria-label="Hero slides">
            {headlines.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === idx}
                aria-label={`Show headline ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-8 bg-brand-orange" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Vertical achievements ticker on the right edge */}
      <HeroAchievements />

      {/* Prev / next arrows */}
      <button
        type="button"
        aria-label="Previous headline"
        onClick={prev}
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-white hover:text-brand-deep lg:block"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next headline"
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
