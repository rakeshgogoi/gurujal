/**
 * Vertical achievements ticker that overlays the right edge of the hero.
 *
 * Continuously scrolls a stack of cards top-to-bottom (well, the track
 * slides up; cards appear from the bottom and fade out at the top) with
 * a CSS mask-image creating soft fade edges so items glide in and out
 * of view rather than abruptly clipping.
 *
 * Hidden on small screens — the hero text needs the full width on
 * mobile.
 */

type Achievement = {
  value: string;
  label: string;
};

const achievements: Achievement[] = [
  { value: "200+", label: "Ponds restored across India" },
  { value: "1,500+", label: "Rainwater-harvesting structures built" },
  { value: "100M+", label: "Litres of groundwater recharged each year" },
  { value: "5,000", label: "Acres of Aravalli landscape assessed" },
  { value: "20+", label: "Experts in the Green Wall of Aravalli study" },
  { value: "Skoch", label: "Award for water conservation impact" },
  { value: "Kalagram", label: "Award recipient for community work" },
  { value: "Governor of Haryana", label: "Public recognition" },
  { value: "22+", label: "Brand & foundation partners" },
  { value: "WeForWater", label: "Fellowship pioneered for green-economy talent" },
];

export function HeroAchievements() {
  // Duplicate the list so the infinite loop has no visible seam.
  const items = [...achievements, ...achievements];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-4 z-20 hidden w-[300px] items-center justify-end lg:flex xl:right-8"
    >
      <div
        className="relative h-[78%] w-full overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
        }}
      >
        <div className="gj-ticker-vertical flex flex-col gap-3 will-change-transform">
          {items.map((a, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md shadow-lg shadow-black/10"
            >
              <div className="text-2xl font-bold leading-none tracking-tight text-brand-teal-bright">
                {a.value}
              </div>
              <div className="mt-2 text-sm leading-snug text-white/90">
                {a.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
