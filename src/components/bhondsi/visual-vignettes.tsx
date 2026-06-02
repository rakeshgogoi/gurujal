"use client";

import { useEffect, useRef } from "react";

/**
 * Visual Vignettes — four short clips that play, muted and looping,
 * once each card scrolls into view. Mirrors the section of the same
 * name in the ArcGIS StoryMap source. Pauses when off-screen so we
 * don't burn battery on phones.
 */

type Vignette = {
  title: string;
  body: React.ReactNode;
  poster: string;
  src: string;
};

const VIGNETTES: Vignette[] = [
  {
    title: "Wastewater treatment plant & wetland",
    poster: "/uploads/2026/06/bhondsi-vignette-1-treatment.jpg",
    src: "/uploads/2026/06/bhondsi-vignette-1-treatment.mp4",
    body: (
      <>
        <p>
          Rainwater and wastewater emerged as the primary lifelines for
          sustaining the pond. Recognising that rainwater alone would simply
          percolate into the ground, the project routes treated wastewater
          from the surrounding buildings into the pond — after rigorous
          treatment to ensure quality and mitigate pollution.
        </p>
        <p>
          At the heart of this treatment process lies the{" "}
          <strong>Anaerobic Baffled Reactor (ABR)</strong> — a nature-based
          technology that uses microbial and environmental processes to
          purify the wastewater before it reaches the pond.
        </p>
      </>
    ),
  },
  {
    title: "Plantation",
    poster: "/uploads/2026/06/bhondsi-vignette-2-plantation.jpg",
    src: "/uploads/2026/06/bhondsi-vignette-2-plantation.mp4",
    body: (
      <>
        <p>
          Beautification here is more than aesthetics — it is a commitment to
          biodiversity. The native species at the site were preserved
          untouched, and new companions were added: Neem, Jamun, Amla,
          Sehtut, Tecoma, Jasmine, Hibiscus, Anar and Ficus.
        </p>
        <p>
          Every tree, shrub and bloom along the pond perimeter tells a
          story of resilience and renewal, weaving a long-term legacy of
          sustainability into the campus.
        </p>
      </>
    ),
  },
  {
    title: "Landscaping",
    poster: "/uploads/2026/06/bhondsi-vignette-3-landscaping.jpg",
    src: "/uploads/2026/06/bhondsi-vignette-3-landscaping.mp4",
    body: (
      <p>
        Landscaping around the pond serves a dual purpose: to{" "}
        <strong>create a joyful environment</strong> and to adopt sustainable
        measures for resource efficiency. Pathways are built from bricks and
        red sand instead of concrete — maximising rainwater retention and
        reducing the heat-island effect across the campus.
      </p>
    ),
  },
  {
    title: "Pond area",
    poster: "/uploads/2026/06/bhondsi-vignette-4-pond.jpg",
    src: "/uploads/2026/06/bhondsi-vignette-4-pond.mp4",
    body: (
      <p>
        <strong>Ponds epitomise nature&apos;s bounty</strong> — placid waters
        that nurture diverse flora and fauna, tranquil retreats that invite
        the community in, and natural reservoirs that collect rainwater,
        recharge the aquifer and curb the risk of flooding around the
        surrounding quarters.
      </p>
    ),
  },
];

export function VisualVignettes() {
  return (
    <section id="vignettes" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Visual vignettes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            See the restoration in motion
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Four short clips from the BSF Bhondsi site — the ABR treatment
            system in operation, the plantation, the landscaping, and the
            restored pond. Each clip plays automatically when it scrolls
            into view.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-2">
          {VIGNETTES.map((v) => (
            <VignetteCard key={v.title} v={v} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function VignetteCard({ v }: { v: Vignette }) {
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
    <li className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-brand-soft/70 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-video overflow-hidden bg-brand-deep">
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
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="text-lg font-semibold text-brand-ink sm:text-xl">
          {v.title}
        </h3>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-brand-muted sm:text-base">
          {v.body}
        </div>
      </div>
    </li>
  );
}
