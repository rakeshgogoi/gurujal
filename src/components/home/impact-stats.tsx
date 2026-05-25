"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * Impact at a Glance — bento grid layout.
 *
 *  - Big feature tile (top-left) with hero image + headline stat overlay
 *  - Three counter tiles for headline numbers (animate up on scroll)
 *  - One quote / story tile
 *  - One CTA tile
 *
 * All numbers are real (from /content/pages/home and live testimonials).
 */

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  tone: "teal" | "green" | "orange";
};

const stats: Stat[] = [
  { value: 1500, suffix: "+", label: "Rainwater-harvesting structures built", tone: "teal" },
  { value: 100, suffix: "M+", label: "Litres of groundwater recharged each year", tone: "green" },
  { value: 5000, label: "Acres of Aravalli landscape assessed", tone: "orange" },
];

const toneNumberClass: Record<Stat["tone"], string> = {
  teal: "text-brand-teal-bright",
  green: "text-brand-green",
  orange: "text-brand-orange",
};

export function ImpactStats() {
  return (
    <section className="bg-brand-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal-bright">
              Impact at a glance
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Real outcomes. Real water. Real communities.
            </h2>
          </div>
          <Link
            href="/about"
            className="hidden shrink-0 items-center gap-1.5 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-deep sm:inline-flex"
          >
            How we measure impact
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* Bento grid — 6 columns on lg, 2 on md, stack on mobile */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-6 md:auto-rows-[180px]">
          {/* Feature tile: hero image + flagship stat overlay */}
          <div className="relative overflow-hidden rounded-3xl md:col-span-4 md:row-span-2">
            <Image
              src="/uploads/2026/03/Support-a-pond-hero.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 768px) 66vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-deep/85 via-brand-deep/35 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
                Ponds restored across India
              </p>
              <Counter
                target={200}
                suffix="+"
                className="mt-2 text-6xl font-extrabold tracking-tight text-white sm:text-7xl"
              />
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                From silted neglect to thriving ecosystems — community-led
                rejuvenation across rural and urban India.
              </p>
            </div>
          </div>

          {/* Quote / mini story tile */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-teal/30 via-brand-deep to-brand-deep p-7 md:col-span-2 md:row-span-2">
            <svg
              className="absolute -right-4 -top-4 h-24 w-24 text-brand-teal-bright/40"
              viewBox="0 0 32 32"
              aria-hidden
            >
              <path
                fill="currentColor"
                d="M9.352 4C4.456 7.456 1 13.12 1 19.36 1 24.832 4.32 28 8.32 28c3.776 0 6.464-3.04 6.464-6.624 0-3.584-2.496-6.208-5.696-6.208-.704 0-1.6.16-1.824.224.512-3.488 3.808-7.616 7.072-9.664L9.352 4z"
              />
            </svg>
            <p className="relative text-sm font-medium leading-relaxed text-white/95">
              &ldquo;GuruJal led a multi-disciplinary effort — bringing
              together over 20 experts to assess the 5,000-acre Aravalli
              landscape around Damdama Lake across themes like biodiversity,
              hydrology, groundwater recharge, social challenges and cultural
              heritage.&rdquo;
            </p>
            <footer className="relative mt-5 border-t border-white/15 pt-4">
              <div className="text-sm font-semibold text-white">
                Ashish Srivastava
              </div>
              <div className="text-xs text-white/70">
                Associate Director · EY Foundation (India)
              </div>
            </footer>
          </div>

          {/* Three counter tiles */}
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:col-span-2 md:row-span-1 ${
                i === 2 ? "md:col-span-2" : ""
              }`}
            >
              <Counter
                target={s.value}
                suffix={s.suffix}
                className={`text-4xl font-extrabold leading-none tracking-tight sm:text-5xl ${toneNumberClass[s.tone]}`}
              />
              <p className="mt-3 text-sm font-medium leading-snug text-white/85">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Animated number counter — ticks up from 0 to target when scrolled into
 * view. Same easing as previous Counter.
 */
function Counter({
  target,
  suffix,
  prefix,
  className,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, target]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
