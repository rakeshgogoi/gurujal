import Image from "next/image";

const brands = [
  { name: "HDFC Bank", src: "/uploads/2025/01/hdfc.png" },
  { name: "Honda", src: "/uploads/2025/01/honda.png" },
  { name: "MakeMyTrip", src: "/uploads/2025/01/makemytrip.png" },
  { name: "Suntory Global Spirits", src: "/uploads/2026/03/suntory.png" },
  { name: "ICICI", src: "/uploads/2024/08/ICICI.png" },
  { name: "EY", src: "/uploads/2024/08/EY.png" },
  { name: "Brookfield", src: "/uploads/2024/08/Brookfield-1.png" },
  { name: "Diageo", src: "/uploads/2024/08/Diageo-1.png" },
  { name: "Emaar", src: "/uploads/2024/08/Emaar.png" },
  { name: "Max Healthcare", src: "/uploads/2024/08/Max-Healthcare.png" },
  { name: "Power Grid", src: "/uploads/2024/08/powergrid.png" },
  { name: "AIC IITD", src: "/uploads/2024/08/AIC-IITD.png" },
  { name: "Whisky", src: "/uploads/2024/08/whisky.png" },
  { name: "Xebia", src: "/uploads/2024/08/xebia.png" },
  { name: "Jaquar", src: "/uploads/2026/03/jaquar-1.png" },
  { name: "Central", src: "/uploads/2026/03/central.png" },
];

const govt = [
  { name: "Government of India", src: "/uploads/2024/08/government-1024x683.jpg" },
];

export function Partners() {
  return (
    <section className="bg-brand-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
            Our partners
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Collaborating with public and private organizations to drive our mission
          </h2>
        </div>

        <div className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-muted">
            Brands & Foundations
          </h3>
          <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {brands.map((b) => (
              <li
                key={b.name}
                className="flex h-20 items-center justify-center rounded-xl bg-white p-4 ring-1 ring-brand-soft/70 transition hover:ring-brand-accent"
              >
                <Image
                  src={b.src}
                  alt={b.name}
                  width={140}
                  height={60}
                  className="max-h-12 w-auto object-contain grayscale opacity-80 transition hover:grayscale-0 hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-muted">
            Government
          </h3>
          <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {govt.map((g) => (
              <li
                key={g.name}
                className="flex h-24 items-center justify-center rounded-xl bg-white p-4 ring-1 ring-brand-soft/70"
              >
                <Image
                  src={g.src}
                  alt={g.name}
                  width={200}
                  height={80}
                  className="max-h-16 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
