import Image from "next/image";

/**
 * Awards & Recognition — photo-on-top cards with award name + the awarding
 * body + one-line description. Matches the live site's grid.
 */

const awards: {
  name: string;
  photo: string;
  body: string;
  year?: string;
}[] = [
  {
    name: "KalaGram Green Impact Awards",
    photo: "/uploads/2024/08/Kalagram-1024x683.jpg",
    body: "GuruJal won the KalaGram Green Impact Awards 2024.",
    year: "2024",
  },
  {
    name: "Governor of Haryana",
    photo: "/uploads/2024/08/government-1024x683.jpg",
    body: "Recognised by the Governor of Haryana for contributions to water governance.",
    year: "2020",
  },
  {
    name: "World Environment Summit",
    photo: "/uploads/2024/08/env-summit-1024x683.jpg",
    body: "Best presentation at the World Environment Summit.",
    year: "2020",
  },
  {
    name: "Hero Group Social Impact Award",
    photo: "/uploads/2024/08/munjal-1024x683.jpg",
    body: "Shubhi Kesarwani, Founder & CEO, received the Social Impact Award for GuruJal from the Hero Group.",
    year: "2022",
  },
  {
    name: "Skoch Award — Gold (Governance)",
    photo: "/uploads/2024/08/skoch-1024x683.jpg",
    body: "GuruJal received the Skoch Award for Governance in the Gold category.",
    year: "2019",
  },
  {
    name: "Women on Top Magazine",
    photo: "/uploads/2024/08/women-1024x683.jpg",
    body: "Shubhi Kesarwani, a water warrior, received the Women on Top Award for her impactful contributions to the water sector.",
  },
  {
    name: "Indian Nurserymen Association",
    photo: "/uploads/2026/04/nurseyman-1024x683.jpg",
    body: "Recognised by the Indian Nurserymen Association for continued efforts in ecosystem restoration and water conservation.",
  },
  {
    name: "Best NGO in the Water Sector",
    photo: "/uploads/2026/04/best-ngo-1024x683.jpg",
    body: "Awarded during the launch of Jal Shakti Abhiyan: Catch the Rain 2025 — presented by CM Nayab Singh Saini and Union Minister for Jal Shakti, C.R. Patil, on World Water Day.",
    year: "2025",
  },
];

export function Awards() {
  return (
    <section id="awards" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Awards & Recognition
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Recognised for the work, again and again
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            From the Ministry of Jal Shakti to international academia,
            GuruJal&apos;s programs continue to be recognised for innovation,
            governance and on-ground impact.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((a) => (
            <li
              key={a.name}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-soft/80 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-soft">
                <Image
                  src={a.photo}
                  alt={a.name}
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {a.year && (
                  <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-orange-dark shadow-sm">
                    {a.year}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-brand-ink">
                  {a.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                  {a.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
