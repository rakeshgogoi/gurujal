import Image from "next/image";

/**
 * Partners & Collaborators.
 *
 *  - Government: 6 logos in a 2-row grid (matches the live site)
 *  - Brands & Foundations: a SINGLE horizontal marquee row, larger logo
 *    cards, continuous scroll. Pauses on hover.
 *
 * Logo file list verified against the live gurujal.org homepage.
 */

const govt = [
  { name: "NITI Aayog", src: "/uploads/2024/08/niti-aayog.png" },
  {
    name: "National Water Mission",
    src: "/uploads/2024/08/national-water-mission.png",
  },
  {
    name: "Gurugram Metropolitan Development Authority",
    src: "/uploads/2024/08/gmda.png",
  },
  {
    name: "Haryana Pollution Water & Wastewater Management Authority",
    src: "/uploads/2024/08/hpwwma.png",
  },
  {
    name: "Municipal Corporation of Faridabad",
    src: "/uploads/2024/08/mcf.png",
  },
  {
    name: "Irrigation Department",
    src: "/uploads/2024/08/sinchai.png",
  },
];

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
  { name: "WH Smith", src: "/uploads/2026/03/wh.png" },
];

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

        {/* GOVERNMENT — 2 rows × 3 columns */}
        <div className="mt-14">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-brand-muted">
            Government
          </h3>
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-3">
            {govt.map((g) => (
              <li
                key={g.name}
                className="flex h-56 items-center justify-center rounded-2xl bg-white px-8 ring-1 ring-brand-soft/70 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-brand-accent"
              >
                <Image
                  src={g.src}
                  alt={g.name}
                  width={400}
                  height={200}
                  className="max-h-44 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* BRANDS & FOUNDATIONS — single horizontal marquee row */}
        <div className="mt-14">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-brand-muted">
            Brands &amp; Foundations
          </h3>

          <div
            className="gj-marquee-paused relative overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            }}
          >
            <div className="gj-marquee-left flex w-max gap-6">
              {[...brands, ...brands].map((b, i) => (
                <div
                  key={i}
                  className="flex h-56 w-[22rem] shrink-0 items-center justify-center rounded-2xl bg-white px-10 ring-1 ring-brand-soft/70"
                >
                  <Image
                    src={b.src}
                    alt={b.name}
                    width={360}
                    height={180}
                    className="max-h-40 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
