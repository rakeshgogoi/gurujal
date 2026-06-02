"use client";

import { useEffect, useRef } from "react";

/**
 * Visual Vignettes — short clips that play, muted and looping, once
 * each card scrolls into view. Mirrors the immersive section of the
 * same name in the ArcGIS StoryMap source: full-bleed video with the
 * title and caption sitting over the footage. Pauses when off-screen
 * so we don't burn battery on phones.
 *
 * Section copy (eyebrow / heading / intro) and the vignette list are
 * fully prop-driven so each pond page can supply its own content.
 */

export type Vignette = {
  title: string;
  /** Full caption — shown on sm+ (≥640px) tablet and desktop. */
  body: React.ReactNode;
  /** One-liner shown only on mobile (<640px), where the overlay
   *  otherwise crowds out the video footage behind it. */
  shortBody: React.ReactNode;
  poster: string;
  src: string;
};

export function VisualVignettes({
  eyebrow = "Visual vignettes",
  heading,
  intro,
  items,
  /** DOM id for the section — used by anchor navs. */
  sectionId = "vignettes",
}: {
  eyebrow?: string;
  heading: React.ReactNode;
  intro: React.ReactNode;
  items: Vignette[];
  sectionId?: string;
}) {
  return (
    <section id={sectionId} className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            {intro}
          </p>
        </div>

        {/* Full-bleed cards, stacked vertically. Text panel alternates
            sides on desktop for visual rhythm (left / right / left / …). */}
        <ul className="mx-auto mt-14 space-y-10 lg:space-y-14">
          {items.map((v, i) => (
            <VignetteCard
              key={v.title}
              v={v}
              align={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function VignetteCard({
  v,
  align,
}: {
  v: Vignette;
  align: "left" | "right";
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // Honour user "Reduce motion" preference — keep the poster, never play.
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // .play() returns a rejected promise on some autoplay blocks;
            // we don't care — the poster stays put as a graceful fallback.
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <li className="relative isolate overflow-hidden rounded-3xl bg-brand-deep shadow-xl ring-1 ring-brand-soft/40">
      {/* Aspect ratio — taller on mobile so the overlaid text breathes,
          cinematic 21:9 on lg+ where the panel sits over one third of the
          frame. */}
      <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]">
        <video
          ref={videoRef}
          src={v.src}
          poster={v.poster}
          muted
          loop
          playsInline
          // metadata-only on load — the file only fully streams once
          // the card scrolls into view (IntersectionObserver above).
          preload="metadata"
          aria-label={v.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Mobile / tablet (below lg): bottom-to-top gradient so the
            text panel at the bottom is always readable, regardless of
            what frame the video is paused on. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-brand-deep/95 via-brand-deep/55 to-brand-deep/10 lg:hidden"
        />

        {/* Desktop (lg+): horizontal gradient anchored to the same side
            as the text panel, so the panel reads cleanly while the rest
            of the video stays unobscured. */}
        <div
          aria-hidden
          className={`absolute inset-0 hidden lg:block ${
            align === "left"
              ? "bg-gradient-to-r from-brand-deep/95 via-brand-deep/55 to-brand-deep/0"
              : "bg-gradient-to-l from-brand-deep/95 via-brand-deep/55 to-brand-deep/0"
          }`}
        />

        {/* Text panel. Bottom on mobile, side-anchored on desktop. */}
        <div
          className={`absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:inset-x-auto lg:inset-y-0 lg:flex lg:max-w-lg lg:flex-col lg:justify-center lg:p-12 ${
            align === "left" ? "lg:left-0" : "lg:right-0"
          }`}
        >
          <h3 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[2rem]">
            {v.title}
          </h3>
          <div className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base lg:mt-4">
            {/* Mobile (<sm): one-line caption so the video stays the focus. */}
            <p className="sm:hidden">{v.shortBody}</p>
            {/* Tablet & desktop (sm+): full caption. */}
            <div className="hidden space-y-3 sm:block">{v.body}</div>
          </div>
        </div>
      </div>
    </li>
  );
}
