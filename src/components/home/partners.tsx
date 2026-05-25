import Image from "next/image";

/**
 * Partners & Collaborators section.
 *
 * Logos render at full color (no grayscale filter), matching the live
 * site's "Collaborating with public and private organizations" block.
 * All file paths verified against /public/uploads on disk.
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

        {/* Government */}
        <div className="mt-14">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-brand-muted">
            Government
          </h3>
          <ul className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-8 justify-center">
            {govt.map((g) => (
              <li
                key={g.name}
                className="flex h-28 items-center justify-center rounded-xl bg-white p-5 ring-1 ring-brand-soft/70 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-brand-accent"
              >
                <Image
                  src={g.src}
                  alt={g.name}
                  width={200}
                  height={100}
                  className="max-h-20 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Brands & Foundations */}
        <div className="mt-14">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-brand-muted">
            Brands &amp; Foundations
          </h3>
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
            {brands.map((b) => (
              <li
                key={b.name}
                className="flex h-24 items-center justify-center rounded-xl bg-white p-4 ring-1 ring-brand-soft/70 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-brand-accent"
              >
                <Image
                  src={b.src}
                  alt={b.name}
                  width={160}
                  height={80}
                  className="max-h-14 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
