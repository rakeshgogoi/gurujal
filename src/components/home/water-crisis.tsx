"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { liveUrl } from "@/lib/live-url";

/**
 * "The time to Act is Now" — editorial stat-card visualisation.
 *
 *   - Hero number: -754 bcm (2030 supply shortfall).
 *   - "From → To" pill above the hero number showing the swing from a
 *     +16 surplus in 2008 to a -754 deficit in 2030.
 *   - Three supporting stat tiles below: demand/supply numbers and the
 *     "2× demand exceeds supply" framing.
 *   - All numbers animate up from zero on scroll-into-view; the
 *     percentage fill bars under the demand/supply tiles draw in to
 *     reflect each value against a 0-1600 bcm scale.
 *
 *   Source: NITI Aayog (verbatim from gurujal.org's crisis widget).
 */

const SCALE_MAX = 1600;

export function WaterCrisisIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Fire immediately if the element is already on screen at mount time
    // (covers deep-link / refresh-mid-page cases where the IO may not get
    // an initial entry).
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      setShow(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: heading + copy */}
          <div className="lg:col-span-5">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              The Crisis
            </p>
            <h2 className="mb-8 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              The time to Act is Now
            </h2>
            <p className="text-lg leading-relaxed text-brand-ink/90 sm:text-xl">
              Water scarcity is no longer a distant threat — it&apos;s a reality
              affecting millions across India. Over half of the population
              faces high water stress, and by 2030, 21 major cities including
              Delhi, Bengaluru and Chennai, could run dry.
            </p>
            <p className="mt-6 text-base leading-relaxed text-brand-muted">
              This crisis impacts agriculture, livelihoods, and health,
              perpetuating poverty and inequality. Yet, within this challenge
              lies an opportunity to unite stakeholders — communities,
              governments, experts, and corporations — to build a sustainable
              future together.
            </p>
            <div className="mt-10">
              <Link
                href={liveUrl("/support-a-pond")}
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-brand-primary-dark"
              >
                Discover Our Solutions
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: editorial stat layout */}
          <div ref={ref} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-brand-soft/80 bg-gradient-to-br from-brand-mist via-white to-white p-8 sm:p-10">
              {/* Subtle decorative orange glow on the warning side */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-orange/15 blur-3xl"
              />

              {/* Swing pill — from balanced surplus to a yawning deficit */}
              <div className="relative inline-flex items-center gap-3 rounded-full bg-white px-3.5 py-1.5 ring-1 ring-brand-soft shadow-sm">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-green-dark">
                  <Dot className="bg-brand-green" />
                  2008 · +16 bcm
                </span>
                <Arrow />
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange-dark">
                  <Dot className="bg-brand-orange" />
                  2030 · −754 bcm
                </span>
              </div>

              {/* Hero number — the 2030 supply shortfall */}
              <div className="relative mt-8">
                <div className="flex items-baseline gap-3 text-brand-ink">
                  <span className="text-sm font-medium uppercase tracking-[0.18em] text-brand-orange-dark">
                    Projected shortfall by 2030
                  </span>
                </div>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-7xl font-bold tracking-tight text-brand-orange-dark sm:text-8xl">
                    <CountUp to={754} show={show} prefix="−" />
                  </span>
                  <span className="text-2xl font-semibold tracking-tight text-brand-ink/80 sm:text-3xl">
                    bcm
                  </span>
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-muted">
                  Up from a balanced 16 bcm surplus in 2008 — a swing wide
                  enough to refill nearly half of India&apos;s reservoirs.
                </p>
              </div>

              {/* Three supporting tiles */}
              <div className="relative mt-10 grid gap-4 sm:grid-cols-3">
                <StatTile
                  label="Demand"
                  year="2008 → 2030"
                  from={634}
                  to={1498}
                  show={show}
                  tone="orange"
                />
                <StatTile
                  label="Supply"
                  year="2008 → 2030"
                  from={650}
                  to={744}
                  show={show}
                  tone="teal"
                />
                <RatioTile show={show} />
              </div>

              <p className="relative mt-6 text-[11px] text-brand-muted">
                bcm = billion cubic metres · Source: NITI Aayog
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Small components
 * ============================================================ */

function CountUp({
  to,
  show,
  duration = 1600,
  prefix = "",
  suffix = "",
}: {
  to: number;
  show: boolean;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!show) return;
    const start = Date.now();
    const interval = setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // Ease-out cubic
      setVal(Math.round(to * eased));
      if (t >= 1) clearInterval(interval);
    }, 32); // ~30 fps — plenty for counter motion, robust to tab focus
    return () => clearInterval(interval);
  }, [show, to, duration]);

  return (
    <span className="tabular-nums">
      {prefix}
      {val.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

function StatTile({
  label,
  year,
  from,
  to,
  show,
  tone,
}: {
  label: string;
  year: string;
  from: number;
  to: number;
  show: boolean;
  tone: "orange" | "teal";
}) {
  const fillClass = tone === "orange" ? "bg-brand-orange" : "bg-brand-teal";
  const valueClass =
    tone === "orange" ? "text-brand-orange-dark" : "text-brand-teal-dark";
  const fillPct = (to / SCALE_MAX) * 100;

  return (
    <div className="relative rounded-2xl bg-white p-5 ring-1 ring-brand-soft/70 shadow-sm">
      <div className="flex items-baseline justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-muted">
          {label}
        </span>
        <span className="text-[10px] font-medium text-brand-muted">{year}</span>
      </div>
      <div className={`mt-3 text-3xl font-bold tracking-tight ${valueClass}`}>
        <CountUp to={to} show={show} />
        <span className="ml-1 text-base font-semibold text-brand-ink/60">
          bcm
        </span>
      </div>
      <div className="mt-1 text-[11px] text-brand-muted">
        from {from.toLocaleString("en-IN")} bcm
      </div>

      {/* Track */}
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-brand-mist">
        <div
          className={`h-full rounded-full ${fillClass}`}
          style={{
            width: show ? `${fillPct}%` : "0%",
            transition: "width 1400ms cubic-bezier(.22,1,.36,1)",
          }}
        />
      </div>
    </div>
  );
}

function RatioTile({ show }: { show: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-brand-deep p-5 text-white shadow-sm">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-orange/30 blur-2xl"
      />
      <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
        2030 ratio
      </span>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-5xl font-bold tracking-tight text-white">
          <CountUp to={2} show={show} />
          <span className="text-brand-orange">×</span>
        </span>
      </div>
      <p className="mt-2 text-[11px] leading-snug text-white/80">
        Demand will outpace supply — twice over.
      </p>
    </div>
  );
}

function Dot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block h-1.5 w-1.5 rounded-full ${className}`}
    />
  );
}

function Arrow() {
  return (
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
      className="text-brand-muted"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
