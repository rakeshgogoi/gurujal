"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { isLocalRoute } from "@/lib/nav";
import { liveUrl } from "@/lib/live-url";

/** Resolve a CTA href to either an internal path or the live site. */
function resolveHref(href: string): string {
  return isLocalRoute(href) ? href : liveUrl(href);
}

/**
 * "The time to Act is Now" — grouped bar chart of demand vs supply.
 *
 *   - Two year groups (2008, 2030), each with a Demand bar (orange) and
 *     a Supply bar (teal). Values sourced from NITI Aayog.
 *   - The 2030 group carries a shortfall bracket + pill showing the
 *     754 bcm gap between demand and supply.
 *   - Bars grow up from the baseline on scroll-into-view.
 */

// Sourced NITI Aayog values — bcm.
const DEMAND_2008 = 634;
const DEMAND_2030 = 1498;
const SUPPLY_2008 = 650;
const SUPPLY_2030 = 744;
const SHORTFALL_2030 = DEMAND_2030 - SUPPLY_2030; // 754

// Chart drawing coordinates (viewBox units).
const CHART_W = 640;
const CHART_H = 360;
const PAD_L = 56;
const PAD_R = 130;
const PAD_T = 36;
const PAD_B = 48;
const PLOT_W = CHART_W - PAD_L - PAD_R;
const PLOT_H = CHART_H - PAD_T - PAD_B;
const BASELINE_Y = PAD_T + PLOT_H;

// Two groups, two bars per group, with gutters between bars and groups.
const BAR_W = 56;
const BAR_GAP = 10;
const GROUP_W = BAR_W * 2 + BAR_GAP;

// Y scale tuned a touch above the largest value for breathing room.
const Y_MAX = 1600;
const Y_TICKS = [0, 400, 800, 1200, 1600];

function yAt(v: number) {
  return PAD_T + (1 - v / Y_MAX) * PLOT_H;
}

// Center of each year group along the x-axis.
function groupCenter(i: 0 | 1) {
  // Evenly split the plot width into two group slots.
  const slot = PLOT_W / 2;
  return PAD_L + slot * (i + 0.5);
}

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
    <section id="crisis" className="bg-white scroll-mt-20">
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
                href={resolveHref("/support-a-pond")}
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

          {/* Right: slope chart — demand vs supply, 2008 → 2030 */}
          <div ref={ref} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-brand-soft/80 bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-brand-ink">
                  Water demand vs supply
                </h3>
                <span className="text-[11px] font-medium uppercase tracking-wider text-brand-muted">
                  India · 2008 → 2030
                </span>
              </div>

              <DemandSupplyChart show={show} />

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-5 text-xs text-brand-ink/80">
                  <span className="inline-flex items-center gap-2">
                    <span
                      aria-hidden
                      className="inline-block h-3 w-3 rounded-sm bg-brand-orange"
                    />
                    Demand
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span
                      aria-hidden
                      className="inline-block h-3 w-3 rounded-sm bg-brand-teal"
                    />
                    Supply
                  </span>
                </div>
                <p className="text-[11px] text-brand-muted">
                  bcm = billion cubic metres · Source: NITI Aayog
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
 * Chart components
 * ============================================================ */

function DemandSupplyChart({ show }: { show: boolean }) {
  const groups = [
    {
      year: "2008",
      demand: DEMAND_2008,
      supply: SUPPLY_2008,
      cx: groupCenter(0),
    },
    {
      year: "2030",
      demand: DEMAND_2030,
      supply: SUPPLY_2030,
      cx: groupCenter(1),
    },
  ] as const;

  return (
    <div className="relative mt-5">
      <svg
        viewBox={`0 0 ${CHART_W} ${CHART_H}`}
        className="block w-full h-auto"
        role="img"
        aria-label="Grouped bar chart: in 2008 India's water demand (634 bcm) and supply (650 bcm) are roughly balanced. By 2030 demand rises to 1,498 bcm while supply reaches only 744 bcm, leaving a 754 bcm shortfall."
      >
        {/* Gridlines + y-axis labels */}
        {Y_TICKS.map((t) => {
          const y = yAt(t);
          return (
            <g key={t}>
              <line
                x1={PAD_L}
                x2={CHART_W - PAD_R}
                y1={y}
                y2={y}
                stroke="currentColor"
                className="text-brand-soft"
                strokeWidth={1}
                strokeDasharray={t === 0 ? "" : "3 4"}
              />
              <text
                x={PAD_L - 10}
                y={y + 4}
                textAnchor="end"
                className="fill-brand-muted text-[11px] tabular-nums"
              >
                {t.toLocaleString("en-IN")}
              </text>
            </g>
          );
        })}

        {/* Y-axis unit */}
        <text
          x={PAD_L - 10}
          y={PAD_T - 14}
          textAnchor="end"
          className="fill-brand-muted text-[10px] font-semibold uppercase tracking-wider"
        >
          bcm
        </text>

        {/* Bars + year labels */}
        {groups.map((g, i) => {
          const demandX = g.cx - BAR_W - BAR_GAP / 2;
          const supplyX = g.cx + BAR_GAP / 2;
          return (
            <g key={g.year}>
              <Bar
                x={demandX}
                value={g.demand}
                colorClass="fill-brand-orange"
                show={show}
                delay={i * 120}
              />
              <Bar
                x={supplyX}
                value={g.supply}
                colorClass="fill-brand-teal"
                show={show}
                delay={i * 120 + 60}
              />

              {/* Value labels above each bar */}
              <BarValueLabel
                x={demandX + BAR_W / 2}
                value={g.demand}
                colorClass="fill-brand-orange-dark"
                show={show}
                delay={i * 120 + 600}
              />
              <BarValueLabel
                x={supplyX + BAR_W / 2}
                value={g.supply}
                colorClass="fill-brand-teal-dark"
                show={show}
                delay={i * 120 + 660}
              />

              {/* Year label below the group */}
              <text
                x={g.cx}
                y={BASELINE_Y + 22}
                textAnchor="middle"
                className="fill-brand-ink text-[13px] font-semibold"
              >
                {g.year}
              </text>
            </g>
          );
        })}

        {/* Shortfall callout — bracket spanning supply→demand on the
            2030 group, plus a pill anchored to the right of the chart. */}
        <ShortfallCallout
          xBar={groupCenter(1) + BAR_GAP / 2 + BAR_W}
          yDemand={yAt(DEMAND_2030)}
          ySupply={yAt(SUPPLY_2030)}
          show={show}
        />
      </svg>
    </div>
  );
}

function Bar({
  x,
  value,
  colorClass,
  show,
  delay = 0,
}: {
  x: number;
  value: number;
  colorClass: string;
  show: boolean;
  delay?: number;
}) {
  const fullH = BASELINE_Y - yAt(value);
  const h = show ? fullH : 0;
  const y = BASELINE_Y - h;
  return (
    <rect
      x={x}
      y={y}
      width={BAR_W}
      height={h}
      rx={3}
      className={colorClass}
      style={{
        transition: `y 1100ms cubic-bezier(.22,1,.36,1) ${delay}ms, height 1100ms cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    />
  );
}

function BarValueLabel({
  x,
  value,
  colorClass,
  show,
  delay = 0,
}: {
  x: number;
  value: number;
  colorClass: string;
  show: boolean;
  delay?: number;
}) {
  return (
    <text
      x={x}
      y={yAt(value) - 8}
      textAnchor="middle"
      className={`${colorClass} text-[12px] font-bold tabular-nums`}
      style={{
        opacity: show ? 1 : 0,
        transition: `opacity 400ms ease-out ${delay}ms`,
      }}
    >
      {value.toLocaleString("en-IN")}
    </text>
  );
}

function ShortfallCallout({
  xBar,
  yDemand,
  ySupply,
  show,
}: {
  xBar: number;
  yDemand: number;
  ySupply: number;
  show: boolean;
}) {
  const midY = (yDemand + ySupply) / 2;
  const bracketX = xBar + 16;
  const pillX = bracketX + 12;
  return (
    <g
      style={{
        opacity: show ? 1 : 0,
        transition: "opacity 500ms ease-out 1400ms",
      }}
    >
      {/* Bracket spanning demand-top to supply-top of the 2030 group */}
      <path
        d={`M ${xBar + 4} ${yDemand} L ${bracketX} ${yDemand} L ${bracketX} ${ySupply} L ${xBar + 4} ${ySupply}`}
        fill="none"
        stroke="currentColor"
        className="text-brand-orange"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <line
        x1={bracketX}
        y1={midY}
        x2={pillX}
        y2={midY}
        stroke="currentColor"
        className="text-brand-orange"
        strokeWidth={1.5}
        strokeLinecap="round"
      />

      {/* Shortfall pill */}
      <g transform={`translate(${pillX}, ${midY - 24})`}>
        <rect
          x={0}
          y={0}
          width={96}
          height={48}
          rx={10}
          className="fill-brand-orange-dark"
        />
        <text
          x={48}
          y={19}
          textAnchor="middle"
          className="fill-white text-[10px] font-semibold uppercase tracking-wider"
        >
          Shortfall
        </text>
        <text
          x={48}
          y={38}
          textAnchor="middle"
          className="fill-white text-[15px] font-bold tabular-nums"
        >
          −{SHORTFALL_2030} bcm
        </text>
      </g>
    </g>
  );
}
