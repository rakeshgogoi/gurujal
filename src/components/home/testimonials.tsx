"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * "Recognizing the Impact" — single-testimonial slider with all
 * navigation tucked INSIDE the card itself.
 *
 *   - No separate row of pagination dots / avatars below the card.
 *   - Arrows sit at the vertical centre of the card's left and right
 *     edges (visible on every viewport).
 *   - Top-right of the card carries a discreet "01 / 05" counter.
 *   - Bottom edge carries a segmented progress bar: one slim segment per
 *     speaker. The active segment fills like a timer during auto-advance,
 *     filled segments stay solid in the speaker's tone colour, and any
 *     segment is clickable to jump.
 *
 *   - When `photo` is set on a testimonial, the real headshot renders.
 *     Otherwise a tone-tinted gradient with initials stands in.
 *
 * Quote text is verbatim from gurujal.org's testimonials section.
 */

type Tone = "teal" | "green" | "orange" | "primary" | "accent";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  org: string;
  tone: Tone;
  photo?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with GuruJal has reaffirmed our belief in the power of community-driven change. Their ability to integrate scientific research with local realities is truly commendable. During the study of 'The Green Wall of Aravalli: A Roadmap for Ecological Restoration', we witnessed how GuruJal led a multi-disciplinary effort — bringing together over 20 experts to assess the 5,000-acre Aravalli landscape around Damdama Lake.",
    name: "Ashish Srivastava",
    role: "Associate Director",
    org: "EY Foundation (India)",
    tone: "teal",
    photo: "/uploads/2026/03/Ashish-Srivastava.jpeg",
  },
  {
    quote:
      "GuruJal has brought water conservation to the forefront by active engagement with various stakeholders in the Government as well as the community by way of knowledge sharing and demonstrating success stories.",
    name: "Jaspreet Kaur, IAS",
    role: "Additional Municipal Commissioner",
    org: "MCG",
    tone: "orange",
    photo: "/uploads/2025/01/jaspreet-kaur.png",
  },
  {
    quote:
      "Suntory Global Spirits India extends its gratitude to GuruJal Management for the timely completion of the pond rejuvenation project in Bhokarka village of Haryana. The execution reflects your team's expertise, discipline, and dedication to sustainable environmental outcomes.",
    name: "Sumit Dhiman",
    role: "Corporate Communications Specialist – India",
    org: "Suntory Global Spirits",
    tone: "green",
  },
  {
    quote:
      "GuruJal has played an important role in making the public aware about how water is a critical asset and water management is essential in Gurugram district. I am happy to support and guide them in their endeavours.",
    name: "Sri. Prashant Panwar, IAS",
    role: "Additional Deputy Commissioner",
    org: "Gurugram",
    tone: "primary",
    photo: "/uploads/2024/08/prashant-panwar.png",
  },
  {
    quote:
      "Working with the GuruJal team on many initiatives is truly inspiring. We admire and respect their collective effort and resolve towards conserving water and making greener surroundings.",
    name: "Shalu Johar Sahni",
    role: "President",
    org: "Pure Hearts (A Children's Initiative)",
    tone: "accent",
    photo: "/uploads/2025/01/shalu-johar-sahni.png",
  },
];

const ROTATE_MS = 9000;

const toneGradient: Record<Tone, string> = {
  teal: "from-brand-teal to-brand-teal-dark",
  green: "from-brand-green to-brand-green-dark",
  orange: "from-brand-orange to-brand-orange-dark",
  primary: "from-brand-teal-bright to-brand-primary",
  accent: "from-brand-accent to-brand-accent-dark",
};
const toneSolid: Record<Tone, string> = {
  teal: "bg-brand-teal",
  green: "bg-brand-green",
  orange: "bg-brand-orange",
  primary: "bg-brand-teal-bright",
  accent: "bg-brand-accent",
};
const toneOrg: Record<Tone, string> = {
  teal: "text-brand-teal-bright",
  green: "text-brand-green",
  orange: "text-brand-orange",
  primary: "text-brand-teal-bright",
  accent: "text-brand-accent",
};

function initials(name: string) {
  return name
    .replace(/,.*$/, "")
    .replace(/^(Sri\.|Smt\.|Dr\.|Mr\.|Ms\.|Mrs\.)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");
}

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0); // 0..1 progress within current slide
  const count = testimonials.length;
  const startRef = useRef<number>(performance.now());

  // Auto-advance + smooth progress fill driven by a single rAF loop. Resets
  // when idx changes or paused toggles.
  useEffect(() => {
    if (paused) return;
    startRef.current = performance.now();
    let raf = 0;
    const loop = (now: number) => {
      const p = Math.min(1, (now - startRef.current) / ROTATE_MS);
      setTick(p);
      if (p >= 1) {
        setIdx((i) => (i + 1) % count);
      } else {
        raf = requestAnimationFrame(loop);
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [paused, idx, count]);

  const jump = (i: number) => {
    setIdx(i);
    setTick(0);
  };
  const prev = () => jump((idx - 1 + count) % count);
  const next = () => jump((idx + 1) % count);

  /* Touch-swipe support — left-swipe advances, right-swipe retreats.
   * Threshold at 40 px so a slight finger wobble doesn't trip it. Auto-
   * advance pauses while the finger is down. */
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const startX = touchStartX.current;
    touchStartX.current = null;
    setPaused(false);
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
  };

  const t = testimonials[idx];

  return (
    <section
      className="relative overflow-hidden bg-brand-deep text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-12 h-80 w-80 rounded-full bg-brand-teal/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-12 h-80 w-80 rounded-full bg-brand-orange/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal-bright sm:mb-3">
            Voices from the field
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Recognizing the Impact
          </h2>
          <p className="mt-2 text-sm text-white/70 sm:mt-3 sm:text-base">
            Testimonials from key leaders and partners.
          </p>
        </div>

        {/* Card */}
        <div className="relative mx-auto mt-6 max-w-5xl sm:mt-10 lg:mt-12">
          <div
            key={idx}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="gj-headline-enter relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 backdrop-blur touch-pan-y select-none"
          >
            {/* Counter */}
            <div className="pointer-events-none absolute right-4 top-3 z-10 text-[11px] font-semibold tracking-[0.18em] text-white/55 sm:right-6 sm:top-5 sm:text-xs">
              <span className="text-white">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="mx-1">/</span>
              <span>{String(count).padStart(2, "0")}</span>
            </div>

            {/* Inset content — compact stack on mobile, two-up at lg */}
            <div className="grid items-center gap-4 p-5 sm:gap-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-12 lg:p-12">
              <Portrait t={t} />

              <div className="relative">
                <QuoteMark className="absolute -top-2 left-0 h-8 w-8 text-white/15 sm:-top-4 sm:h-12 sm:w-12" />
                <p className="relative line-clamp-5 pt-12 text-sm leading-relaxed text-white/95 sm:line-clamp-none sm:pt-6 sm:text-lg lg:text-xl">
                  {t.quote}
                </p>
                <div className="mt-4 flex items-center gap-3 sm:mt-6">
                  <span aria-hidden className={`h-px w-8 sm:w-10 ${toneSolid[t.tone]}`} />
                  <div>
                    <div className="text-sm font-semibold text-white sm:text-base">
                      {t.name}
                    </div>
                    <div className="mt-0.5 text-xs text-white/65 sm:text-sm">
                      {t.role} ·{" "}
                      <span className={`font-medium ${toneOrg[t.tone]}`}>
                        {t.org}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* In-card side arrows — sit on the card's left/right edges
                on sm+. On phones the segmented progress bar at the bottom
                of the card serves as touch navigation (arrows would
                overlap the portrait at <375 px). */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white hover:text-brand-deep sm:inline-flex"
            >
              <Arrow direction="left" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white hover:text-brand-deep sm:inline-flex"
            >
              <Arrow direction="right" />
            </button>

            {/* Segmented progress bar — one slim segment per testimonial,
                hugs the card's bottom edge. Clickable. */}
            <div className="absolute inset-x-0 bottom-0 flex gap-1 px-2 pb-2">
              {testimonials.map((p, i) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => jump(i)}
                  title={p.name}
                  aria-label={`Show testimonial from ${p.name}`}
                  className="group h-1 flex-1 overflow-hidden rounded-full bg-white/15 transition hover:bg-white/25"
                >
                  <span
                    aria-hidden
                    className={`block h-full rounded-full ${toneSolid[p.tone]}`}
                    style={{
                      width:
                        i < idx
                          ? "100%"
                          : i === idx
                            ? `${Math.round(tick * 100)}%`
                            : "0%",
                      transition: i === idx ? "none" : "width 300ms ease",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Portrait — real photo if provided, otherwise a designed initials
 * placeholder with concentric tone gradient rings.
 */
function Portrait({ t }: { t: Testimonial }) {
  if (t.photo) {
    return (
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-white/15 shadow-2xl sm:h-40 sm:w-40 lg:h-48 lg:w-48">
        <Image src={t.photo} alt={t.name} fill sizes="192px" className="object-cover" />
      </div>
    );
  }
  return (
    <div
      className={`relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${toneGradient[t.tone]} ring-4 ring-white/15 shadow-2xl sm:h-40 sm:w-40 lg:h-48 lg:w-48`}
      aria-hidden
    >
      <div className="absolute inset-2 rounded-full border border-white/25 sm:inset-3" />
      <div className="absolute inset-4 rounded-full border border-white/10 sm:inset-6" />
      <span className="relative text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {initials(t.name)}
      </span>
    </div>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {direction === "left" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}

function QuoteMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M9.352 4C4.456 7.456 1 13.12 1 19.36 1 24.832 4.32 28 8.32 28c3.776 0 6.464-3.04 6.464-6.624 0-3.584-2.496-6.208-5.696-6.208-.704 0-1.6.16-1.824.224.512-3.488 3.808-7.616 7.072-9.664L9.352 4zm16.512 0c-4.832 3.456-8.288 9.12-8.288 15.36 0 5.472 3.328 8.64 7.328 8.64 3.712 0 6.464-3.04 6.464-6.624 0-3.584-2.56-6.208-5.76-6.208-.704 0-1.536.16-1.76.224.512-3.488 3.744-7.616 7.008-9.664L25.864 4z"
      />
    </svg>
  );
}
