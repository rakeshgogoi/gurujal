import Image from "next/image";

/**
 * Partners & Collaborators — modernised as two horizontal marquees
 * scrolling in opposite directions. Logos render at full color. The
 * government partners get their own marquee row above.
 *
 * The animation pauses on hover (see globals.css).
 */

const brands = [
  { name: "HDFC Bank", src: "/uploads/2025/01/hdfc.png" },
  { name: "Honda", src: "/uploads/2025/01/honda.png" },
  { name: "MakeMyTrip", src: "/uploads/2025/01/makemytrip.png" },
  { name: "Suntory Global Spirits", src: "/uploads/2026/03/suntory.png" },
  { name: "ICICI Bank", src: "/uploads/2024/08/ICICI.png" },
  { name: "EY Foundation", src: "/uploads/2024/08/EY.png" },
  { name: "Brookfield", src: "/uploads/2026/03/Brookfield-1.png" },
  { name: "Diageo", src: "/uploads/2026/03/Diageo-1.png" },
  { name: "Emaar", src: "/uploads/2026/03/Emaar.png" },
  { name: "Max Healthcare", src: "/uploads/2026/03/Max-Healthcare.png" },
  { name: "Power Grid", src: "/uploads/2024/08/powergrid.png" },
  { name: "AIC IITD", src: "/uploads/2024/08/AIC-IITD.png" },
  { name: "PepsiCo", src: "/uploads/2026/03/pepsico.png" },
  { name: "Hyundai", src: "/uploads/2026/03/hyundai.png" },
  { name: "Pearl Global", src: "/uploads/2026/03/pearl-global.png" },
  { name: "Rites", src: "/uploads/2026/03/Rites.png" },
  { name: "Topgear", src: "/uploads/2026/03/Topgear.png" },
  { name: "AIPL", src: "/uploads/2026/03/aipl-1.png" },
  { name: "Whisky Samba", src: "/uploads/2024/08/whisky.png" },
  { name: "Xebia", src: "/uploads/2024/08/xebia.png" },
  { name: "Jaquar", src: "/uploads/2026/03/jaquar-1.png" },
  { name: "Central Park", src: "/uploads/2026/03/central.png" },
];

const govt = [
  { name: "NITI Aayog", src: "/uploads/2024/08/niti-aayog.png" },
  {
    name: "National Water Mission",
    src: "/uploads/2024/08/national-water-mission.png",
  },
];

// Split brands into two roughly-equal lists for the two rows
const half = Math.ceil(brands.length / 2);
const rowA = brands.slice(0, half);
const rowB = brands.slice(half);

export function Partners() {
  return (
    <section className="bg-brand-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Our partners
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Collaborating with public and private organizations to drive our
            mission
          </h2>
        </div>

        {/* Government — small row, also marquee-style for consistency */}
        <div className="mt-12">
          <h3 className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-brand-muted">
            Government
          </h3>
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-6">
            {govt.map((g) => (
              <div
                key={g.name}
                className="flex h-24 w-44 items-center justify-center rounded-xl bg-white px-4 ring-1 ring-brand-soft/70 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-brand-accent"
              >
                <Image
                  src={g.src}
                  alt={g.name}
                  width={180}
                  height={80}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Brands — two rows scrolling opposite directions */}
        <div className="mt-14">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-brand-muted">
            Brands &amp; Foundations
          </h3>

          {/* Outer wrapper provides fade-mask on left + right edges so logos
              appear to slide in/out of view at the edges. */}
          <div
            className="gj-marquee-paused relative space-y-4 overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            }}
          >
            <MarqueeRow logos={rowA} direction="left" />
            <MarqueeRow logos={rowB} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({
  logos,
  direction,
}: {
  logos: { name: string; src: string }[];
  direction: "left" | "right";
}) {
  // Double the list for a seamless infinite scroll
  const doubled = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max gap-4 ${
          direction === "left" ? "gj-marquee-left" : "gj-marquee-right"
        }`}
      >
        {doubled.map((b, i) => (
          <div
            key={i}
            className="flex h-24 w-44 shrink-0 items-center justify-center rounded-xl bg-white px-4 ring-1 ring-brand-soft/70"
          >
            <Image
              src={b.src}
              alt={b.name}
              width={160}
              height={70}
              className="max-h-14 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
