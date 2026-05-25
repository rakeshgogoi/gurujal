import Link from "next/link";

/**
 * "The time to Act is Now" section — matches the live site's two-column
 * layout: water-crisis copy on the left, an inline bar chart showing
 * India's water demand vs supply (2008 → 2030) on the right.
 *
 * Data sourced from the live gurujal.org chart widget:
 *   2008  Demand 634  /  Supply 650
 *   2030  Demand 1498 /  Supply 744
 * (Units: billion cubic metres)
 */

type Bar = { year: string; demand: number; supply: number };

const data: Bar[] = [
  { year: "2008", demand: 634, supply: 650 },
  { year: "2030", demand: 1498, supply: 744 },
];

export function WaterCrisisIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            The Crisis
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            The time to Act is Now
          </h2>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Left: copy + CTA */}
          <div className="lg:col-span-6">
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

          {/* Right: chart */}
          <div className="lg:col-span-6">
            <DemandSupplyChart />
            <p className="mt-5 text-base font-semibold text-brand-primary sm:text-lg">
              Overall demand is expected to exceed supply two-fold by 2030.
            </p>
            <p className="mt-3 text-xs text-brand-muted">
              Source: NITI Aayog Composite Water Management Index · India
              Water Tool · Billion cubic metres
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Inline SVG bar chart — demand vs supply, two years.
 *
 *   - Yellow/orange = Demand (alarming)
 *   - Brand teal     = Supply
 *   - Chart-area background in brand-mist to match live site's aesthetic
 */
function DemandSupplyChart() {
  // Chart sizing
  const width = 520;
  const height = 360;
  const padding = { top: 40, right: 24, bottom: 60, left: 56 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  // Y-axis — round max up to a clean tick
  const yMax = 1600;
  const yTicks = [0, 400, 800, 1200, 1600];

  // Group geometry
  const groupCount = data.length;
  const groupW = innerW / groupCount;
  const barW = 50;
  const barGap = 14;

  // Scale value → pixel height
  const yScale = (v: number) => (v / yMax) * innerH;

  return (
    <div className="overflow-hidden rounded-2xl bg-brand-mist p-6 ring-1 ring-brand-soft">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label="Demand vs supply of water in India (2008 vs 2030)"
      >
        {/* Gridlines + Y-axis labels */}
        {yTicks.map((t) => {
          const y = padding.top + innerH - yScale(t);
          return (
            <g key={t}>
              <line
                x1={padding.left}
                x2={padding.left + innerW}
                y1={y}
                y2={y}
                stroke="#cfe4ea"
                strokeWidth={1}
              />
              <text
                x={padding.left - 10}
                y={y}
                textAnchor="end"
                dominantBaseline="central"
                className="fill-brand-muted text-[11px]"
              >
                {t.toLocaleString("en-IN")}
              </text>
            </g>
          );
        })}

        {/* X-axis baseline */}
        <line
          x1={padding.left}
          x2={padding.left + innerW}
          y1={padding.top + innerH}
          y2={padding.top + innerH}
          stroke="#9bbac3"
          strokeWidth={1.5}
        />

        {/* Bars */}
        {data.map((d, i) => {
          const groupX = padding.left + groupW * i;
          const centerX = groupX + groupW / 2;
          const demandX = centerX - barW - barGap / 2;
          const supplyX = centerX + barGap / 2;

          const demandH = yScale(d.demand);
          const supplyH = yScale(d.supply);
          const baselineY = padding.top + innerH;

          return (
            <g key={d.year}>
              {/* Demand bar */}
              <rect
                x={demandX}
                y={baselineY - demandH}
                width={barW}
                height={demandH}
                rx={4}
                className="fill-brand-orange"
              />
              <text
                x={demandX + barW / 2}
                y={baselineY - demandH - 8}
                textAnchor="middle"
                className="fill-brand-ink text-[12px] font-bold"
              >
                {d.demand}
              </text>

              {/* Supply bar */}
              <rect
                x={supplyX}
                y={baselineY - supplyH}
                width={barW}
                height={supplyH}
                rx={4}
                className="fill-brand-teal"
              />
              <text
                x={supplyX + barW / 2}
                y={baselineY - supplyH - 8}
                textAnchor="middle"
                className="fill-brand-ink text-[12px] font-bold"
              >
                {d.supply}
              </text>

              {/* Year label */}
              <text
                x={centerX}
                y={baselineY + 24}
                textAnchor="middle"
                className="fill-brand-ink text-[14px] font-semibold"
              >
                {d.year}
              </text>
            </g>
          );
        })}

        {/* Legend */}
        <g transform={`translate(${padding.left}, 16)`}>
          <rect width={12} height={12} rx={2} className="fill-brand-orange" />
          <text
            x={18}
            y={6}
            dominantBaseline="central"
            className="fill-brand-ink text-[12px] font-medium"
          >
            Demand
          </text>
          <g transform="translate(96, 0)">
            <rect width={12} height={12} rx={2} className="fill-brand-teal" />
            <text
              x={18}
              y={6}
              dominantBaseline="central"
              className="fill-brand-ink text-[12px] font-medium"
            >
              Supply
            </text>
          </g>
        </g>

        {/* Y-axis title */}
        <text
          x={-padding.top - innerH / 2}
          y={14}
          transform="rotate(-90)"
          textAnchor="middle"
          className="fill-brand-muted text-[11px]"
        >
          Billion cubic metres
        </text>
      </svg>
      <p className="mt-2 text-center text-xs font-medium text-brand-muted">
        Demand and Supply of water in India
      </p>
    </div>
  );
}
