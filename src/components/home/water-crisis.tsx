"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * "The time to Act is Now" — modernised as a data-storytelling moment.
 *
 * Replaces the classic bar chart with a "Then vs Now" comparison:
 *   - 2008  Demand 634   /  Supply 650   — balanced
 *   - 2030  Demand 1,498 /  Supply 744   — 2× shortfall
 *
 * Each year is a card with animated horizontal bars whose widths reflect
 * the underlying numbers. The bars draw in when scrolled into view.
 *
 * Source: live gurujal.org chart widget. Units: billion cubic metres.
 */

const SCALE_MAX = 1600; // bcm — round-up beyond the max value (1498)

type SnapshotProps = {
  year: string;
  demand: number;
  supply: number;
  tone: "ok" | "warn";
  caption: string;
};

export function WaterCrisisIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Left: heading + copy + CTA. The heading lives inside the left
              column (rather than spanning the grid) so the top edges of
              both columns are visually aligned. */}
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
                href="/support-a-pond"
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

          {/* Right: storytelling visualization */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-br from-brand-mist via-white to-brand-soft/60 p-6 ring-1 ring-brand-soft sm:p-8">
              {/* Headline summary */}
              <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <div className="text-5xl font-extrabold leading-none tracking-tight text-brand-primary sm:text-6xl">
                  2&times;
                </div>
                <p className="text-sm font-medium text-brand-ink/85 sm:text-base">
                  Demand will exceed supply by 2030.
                </p>
              </div>

              {/* Snapshot cards */}
              <div className="space-y-5">
                <Snapshot
                  year="2008"
                  demand={634}
                  supply={650}
                  tone="ok"
                  caption="Demand and supply were nearly balanced — a 16 bcm surplus."
                />
                <Snapshot
                  year="2030"
                  demand={1498}
                  supply={744}
                  tone="warn"
                  caption="Demand soars; supply barely grows — a 754 bcm shortfall."
                />
              </div>

              {/* Legend + source */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-brand-soft pt-4">
                <div className="flex items-center gap-5 text-xs">
                  <Legend tone="demand" label="Demand" />
                  <Legend tone="supply" label="Supply" />
                </div>
                <p className="text-[11px] text-brand-muted">
                  bcm = billion cubic metres · NITI Aayog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Snapshot card — one year, two animated horizontal bars.
 * ============================================================ */
function Snapshot({ year, demand, supply, tone, caption }: SnapshotProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const demandPct = (demand / SCALE_MAX) * 100;
  const supplyPct = (supply / SCALE_MAX) * 100;

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand-soft/70"
    >
      <div className="mb-3 flex items-baseline justify-between">
        <div className="flex items-baseline gap-3">
          <div className="text-2xl font-bold tracking-tight text-brand-ink">
            {year}
          </div>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
              tone === "ok"
                ? "bg-brand-green/15 text-brand-green-dark"
                : "bg-brand-orange/15 text-brand-orange-dark"
            }`}
          >
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full ${
                tone === "ok" ? "bg-brand-green" : "bg-brand-orange"
              }`}
            />
            {tone === "ok" ? "Balanced" : "2× Shortfall"}
          </span>
        </div>
        <div className="text-xs text-brand-muted">
          gap{" "}
          <span
            className={`font-semibold ${
              demand > supply ? "text-brand-orange-dark" : "text-brand-green-dark"
            }`}
          >
            {(demand - supply > 0 ? "+" : "") +
              (demand - supply).toLocaleString("en-IN")}{" "}
            bcm
          </span>
        </div>
      </div>

      <Bar
        label="Demand"
        value={demand}
        widthPct={show ? demandPct : 0}
        color="demand"
      />
      <div className="h-2" />
      <Bar
        label="Supply"
        value={supply}
        widthPct={show ? supplyPct : 0}
        color="supply"
      />

      <p className="mt-3 text-xs leading-relaxed text-brand-muted">
        {caption}
      </p>
    </div>
  );
}

function Bar({
  label,
  value,
  widthPct,
  color,
}: {
  label: string;
  value: number;
  widthPct: number;
  color: "demand" | "supply";
}) {
  // Gradient fills give the bars a more "alive" feel than flat color
  const barClass =
    color === "demand"
      ? "from-brand-orange to-brand-orange-dark"
      : "from-brand-teal to-brand-teal-dark";

  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="font-medium text-brand-muted">{label}</span>
        <span className="font-bold tabular-nums text-brand-ink">
          {value.toLocaleString("en-IN")}{" "}
          <span className="text-[10px] font-normal text-brand-muted">bcm</span>
        </span>
      </div>
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-brand-mist">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${barClass}`}
          style={{
            width: `${widthPct}%`,
            transition: "width 1400ms cubic-bezier(.22, 1, .36, 1)",
          }}
        />
      </div>
    </div>
  );
}

function Legend({ tone, label }: { tone: "demand" | "supply"; label: string }) {
  return (
    <div className="flex items-center gap-2 text-brand-ink/85">
      <span
        className={`inline-block h-2.5 w-2.5 rounded-sm ${
          tone === "demand" ? "bg-brand-orange" : "bg-brand-teal"
        }`}
        aria-hidden
      />
      <span className="font-medium">{label}</span>
    </div>
  );
}
