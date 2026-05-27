import Image from "next/image";
import Link from "next/link";
import { liveUrl } from "@/lib/live-url";

/**
 * Leadership + Trustees.
 *
 * Both groups share the same round-headshot card so each set carries the
 * same visual weight. Visitors who want to see the full operating team
 * are pointed to the dedicated /team page.
 */

type Person = {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
};

// LinkedIn URLs taken from the live gurujal.org/about page. Where the live
// page only had a placeholder ("#"), we leave the URL as "#" so the icon
// still renders for visual consistency — a real URL can be slotted in
// later.
const leaders: Person[] = [
  {
    name: "Ms. Shubhi Kesarwani",
    role: "Co-Founder & CEO",
    photo: "/uploads/2024/08/shubhi.jpg",
    linkedin: "#",
  },
  {
    name: "Dr. Fawzia Tarannum",
    role: "Co-Founder & Strategic Head",
    photo: "/uploads/2024/08/fawzia.jpg",
    linkedin: "https://www.linkedin.com/in/fawzia-tarannum-75301117",
  },
  {
    name: "Col Kuldeep Singh Dalal",
    role: "Executive Director",
    photo: "/uploads/2025/11/kuldeep.jpg",
    linkedin: "#",
  },
  {
    name: "Mr. Ashish Dev Kapur",
    role: "Trustee & Vice-Chairman",
    photo: "/uploads/2024/08/Ashish-Dev.png",
    linkedin: "https://www.linkedin.com/in/ashish-dev-kapur-69b1241",
  },
];

const trustees: Person[] = [
  {
    name: "Mr. Ashok Kapur",
    role: "Former Special Cabinet Secretary, GoI (Retd. IFS)",
    photo: "/uploads/2024/08/Ashish-Kapur.png",
  },
  {
    name: "Mr. Ashish Dev Kapur",
    role: "Trustee & Vice-Chairman",
    photo: "/uploads/2024/08/ashish.jpg",
  },
  {
    name: "Mr. Kapil Jaiswal",
    role: "Accountant, Whitehat Hospitality",
    photo: "/uploads/2025/11/kapil.jpg",
  },
  {
    name: "Ms. Elisha Suri",
    role: "Former Director of SD Apparels",
    photo: "/uploads/2024/08/Elisha.png",
  },
  {
    name: "Ms. Shubhi Kesarwani",
    role: "Co-Founder & CEO",
    photo: "/uploads/2024/08/shubhi.jpg",
  },
];

function LinkedInIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  );
}

function PersonCard({ p }: { p: Person }) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-white shadow-md transition group-hover:shadow-xl sm:h-44 sm:w-44">
        <Image
          src={p.photo}
          alt={`Portrait of ${p.name}`}
          fill
          sizes="176px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-5 text-base font-semibold text-brand-ink sm:text-lg">
        {p.name}
      </h3>
      <p className="mt-1 max-w-[240px] text-sm leading-snug text-brand-muted">
        {p.role}
      </p>
      {p.linkedin && (
        <a
          href={p.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${p.name} on LinkedIn`}
          className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-mist text-brand-primary transition hover:bg-brand-orange hover:text-white"
        >
          <LinkedInIcon />
        </a>
      )}
    </div>
  );
}

export function Leadership() {
  return (
    <section id="leadership" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* Leading the way */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Leadership
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Leading the way
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            A team of practitioners, policymakers and scientists at the helm
            of GuruJal&apos;s next decade of work.
          </p>
        </div>
        <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {leaders.map((p) => (
            <li key={p.name}>
              <PersonCard p={p} />
            </li>
          ))}
        </ul>

        {/* Trustees */}
        <div id="trustees" className="mt-24 scroll-mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Governance
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Trustees
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted">
              An experienced board guiding GuruJal&apos;s mission, finances
              and public accountability.
            </p>
          </div>
          <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
            {trustees.map((p) => (
              <li key={p.name}>
                <PersonCard p={p} />
              </li>
            ))}
          </ul>
        </div>

        {/* Pointer to the full operating team */}
        <div className="mt-16 text-center">
          <Link
            href={liveUrl("/team")}
            className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:border-brand-accent hover:text-brand-accent-dark"
          >
            Meet our full operating team
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
