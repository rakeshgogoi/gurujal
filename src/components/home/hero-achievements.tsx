/**
 * Vertical achievements ticker that overlays the right side of the hero.
 *
 * Each card is solid (not translucent) with a colored accent stripe on
 * the left so the value pops against the video background. The whole
 * column scrolls bottom-to-top continuously with a soft fade mask at
 * the top + bottom edges so cards glide in and out.
 *
 * Hidden on small screens — the hero text takes the full width on mobile.
 */

type Achievement = {
  value: string;
  label: string;
  /** Accent color of the left stripe. Rotates through teal / orange / green. */
  tone: "teal" | "orange" | "green";
};

const achievements: Achievement[] = [
  { value: "200+", label: "Ponds restored across India", tone: "teal" },
  { value: "1,500+", label: "Rainwater-harvesting structures built", tone: "green" },
  { value: "100M+", label: "Litres of groundwater recharged each year", tone: "orange" },
  { value: "5,000", label: "Acres of Aravalli landscape assessed", tone: "teal" },
  { value: "20+", label: "Experts in the Green Wall study", tone: "green" },
  { value: "22+", label: "Brand & foundation partners", tone: "orange" },
  { value: "Skoch", label: "Award for water conservation impact", tone: "teal" },
  { value: "Kalagram", label: "Award recipient for community work", tone: "green" },
  { value: "Governor", label: "Recognition by the Governor of Haryana", tone: "orange" },
  { value: "WeForWater", label: "Fellowship pioneered for green-economy talent", tone: "teal" },
];

const toneStyles: Record<Achievement["tone"], { bar: string; value: string }> = {
  teal: {
    bar: "bg-brand-teal-bright",
    value: "text-brand-teal-bright",
  },
  orange: {
    bar: "bg-brand-orange",
    value: "text-brand-orange",
  },
  green: {
    bar: "bg-brand-green",
    value: "text-brand-green",
  },
};

export function HeroAchievements() {
  const items = [...achievements, ...achievements];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-4 z-20 hidden w-[360px] flex-col items-end justify-center gap-4 lg:flex xl:right-8"
    >
      {/* Section label */}
      <div className="flex w-full items-center gap-3 px-1">
        <span className="h-px flex-1 bg-white/30" />
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/90">
          Our Impact
        </span>
      </div>

      <div
        className="relative h-[68%] w-full overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="gj-ticker-vertical flex flex-col gap-3.5 will-change-transform">
          {items.map((a, i) => {
            const tone = toneStyles[a.tone];
            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl bg-brand-deep/90 px-5 py-4 ring-1 ring-white/10 shadow-xl shadow-black/30 backdrop-blur-sm"
              >
                {/* Left accent stripe */}
                <span
                  className={`absolute inset-y-2 left-0 w-1 rounded-r ${tone.bar}`}
                  aria-hidden
                />
                <div className="pl-3">
                  <div
                    className={`text-3xl font-extrabold leading-none tracking-tight ${tone.value}`}
                  >
                    {a.value}
                  </div>
                  <div className="mt-2 text-sm font-medium leading-snug text-white">
                    {a.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
