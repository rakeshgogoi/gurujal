import { PersonCard, type Person } from "@/components/people/person-card";

/**
 * Team page — the four people sections (Leadership, Trustees, Advisors,
 * Executive Team), rendered with the shared round-headshot card.
 *
 * Sections alternate background (white / brand-mist) so each block reads
 * as its own scope as visitors scroll through the long list.
 */

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
    name: "Ms. Elisha Suri",
    role: "Former Director of SD Apparels",
    photo: "/uploads/2024/08/Elisha.png",
  },
  {
    name: "Mr. Kapil Jaiswal",
    role: "Accountant",
    photo: "/uploads/2024/08/Kapil.png",
  },
  {
    name: "Ms. Shubhi Kesarwani",
    role: "Co-Founder & CEO",
    photo: "/uploads/2024/08/shubhi.jpg",
  },
];

const advisors: Person[] = [
  {
    name: "Mr. Upmanu Lal",
    role: "Director, Columbia Water Center in the Earth Institute",
    photo: "/uploads/2024/08/Upmanu.png",
  },
  {
    name: "Mr. Avinash Mishra",
    role: "R&D Advisor & Chair of Advisory Board",
    photo: "/uploads/2024/08/avinash.jpg",
  },
  {
    name: "Mr. Jagram Maan",
    role: "Former District Development & Panchayat Officer, Haryana",
    photo: "/uploads/2025/11/Maan.jpg",
  },
  {
    name: "Dr. Pradeep Monga",
    role: "Ex-Deputy Exec. Secretary, UNCCD (Ex-IAS, GoI)",
    photo: "/uploads/2025/11/pardeep.jpg",
  },
  {
    name: "Mr. Ravi Pahuja",
    role: "COO, Raman Kant Munjal Foundation (Hero Group)",
    photo: "/uploads/2024/08/Ravi.png",
  },
  {
    name: "Ms. Vandana Menon",
    role: "Senior Design Architect, VM Architects",
    photo: "/uploads/2025/11/Vandana-Menon.jpg",
  },
  {
    name: "Mr. Lalit Arora",
    role: "Former Chief Engineer at GMDA, Govt. of Haryana",
    photo: "/uploads/2024/08/Lalit.png",
  },
  {
    name: "Mr. Chetan Agarwal",
    role: "Senior Fellow, CEDAR & Forest and Environment Service Analyst",
    photo: "/uploads/2024/08/Chetan.png",
  },
  {
    name: "Ms. Ranjana Ray Chaudhuri",
    role: "Associate Professor & Head, Department of Regional Water Studies, TERI SAS",
    photo: "/uploads/2025/11/Ranjana.jpg",
  },
  {
    name: "Ms. Sarika Panda Bhatt",
    role: "Co-founder, Raahgiri Foundation",
    photo: "/uploads/2024/08/Sarika.png",
  },
  {
    name: "Ms. Zeenat Niazi",
    role: "Chief Advisor, Development Alternatives",
    photo: "/uploads/2025/11/Zeenat.jpg",
  },
  {
    name: "Dr. Amit Singh",
    role: "Researcher, Guest Faculty at TERI School of Advanced Study",
    photo: "/uploads/2024/08/Amit.png",
  },
  {
    name: "Ms. Ritu Mehrotra",
    role: "Former Regional Director (APAC, China, Oceania) — Booking.com",
    photo: "/uploads/2024/08/Ritu.png",
  },
  {
    name: "Mr. Prakhar Bhartiya",
    role: "Co-Founder, Indian School of Democracy",
    photo: "/uploads/2025/11/Prakhar.jpg",
  },
  {
    name: "Ms. Ashita Mall",
    role: "Communication Expert",
    photo: "/uploads/2025/11/Ashita.jpg",
  },
  {
    name: "Ms. Elisha Suri",
    role: "Former Director of SD Apparels",
    photo: "/uploads/2024/08/Elisha.png",
  },
  {
    name: "Dr. Abhishek Kumar",
    role: "President and CEO, Nilambar",
    photo: "/uploads/2025/11/Abhishek.jpg",
  },
  {
    name: "Mr. Kevin Kwok",
    role: "Ex-Head of HSBC ESG Advisory to Global Banking & Markets",
    photo: "/uploads/2024/08/Kevin.png",
  },
];

const executive: Person[] = [
  {
    name: "Ms. Sameera Satija",
    role: "Senior Advisor",
    photo: "/uploads/2025/11/SameeraSatija.jpg",
  },
  {
    name: "Dr. Syed Maqbool Geelani",
    role: "Senior Project Manager",
    photo: "/uploads/2025/11/syed.jpg",
  },
  {
    name: "Ms. Deepa Agarwal",
    role: "Business Development Consultant",
    photo: "/uploads/2025/11/Deepa.jpg",
  },
  {
    name: "Ms. Anisha Gupta",
    role: "Communication Consultant",
    photo: "/uploads/2025/11/Anisha.jpg",
  },
  {
    name: "Mr. Faraz Ahmad",
    role: "Assistant Manager — Governance",
    photo: "/uploads/2024/08/Faraz.png",
  },
  {
    name: "Ms. Anjali Singh",
    role: "Manager — Communications",
    photo: "/uploads/2024/08/Anjali.png",
  },
  {
    name: "Ms. Shallu Chauhan",
    role: "Assistant Manager — CEO's Office",
    photo: "/uploads/2025/11/Shallu.jpg",
  },
  {
    name: "Ms. Divyanshi",
    role: "Project Associate",
    photo: "/uploads/2025/11/Divyanshi.jpg",
  },
  {
    name: "Mr. Jitander Kumar",
    role: "Senior Project Associate",
    photo: "/uploads/2024/08/Jitander.png",
  },
  {
    name: "Mr. Aakash",
    role: "GIS Associate",
    photo: "/uploads/2024/08/Akash.png",
  },
  {
    name: "Mr. Ismail Ahmad",
    role: "Senior Project Associate",
    photo: "/uploads/2024/08/Ismail.png",
  },
  {
    name: "Mr. Sachin Bhuker",
    role: "Admin Associate",
    photo: "/uploads/2025/11/Sachin.jpg",
  },
  {
    name: "Mr. Deepak Kumar",
    role: "Site Supervisor — Civil",
    photo: "/uploads/2025/11/Deepak.jpg",
  },
  {
    name: "Mr. Vinod Sharma",
    role: "Site Supervisor — Forestry",
    photo: "/uploads/2025/11/Vinod.jpg",
  },
  {
    name: "Mr. Ajay Kumar",
    role: "Field Associate",
    photo: "/uploads/2025/11/Ajay.jpg",
  },
  {
    name: "Ms. Khyati Rastogi",
    role: "Partnerships Associate",
    photo: "/uploads/2026/04/Khyati.png",
  },
  {
    name: "Dr. Monika Sharma",
    role: "Assistant Manager — Communications",
    photo: "/uploads/2026/04/monika.png",
  },
  {
    name: "Mr. Imran",
    role: "Community Associate",
    photo: "/uploads/2026/04/Imran.png",
  },
  {
    name: "Mr. Abhijeet Pratap Sen",
    role: "Associate",
    photo: "/uploads/2026/04/Abhijeet.png",
  },
];

/** Section heading block (eyebrow + title + sub-copy). */
function SectionHeading({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-brand-muted">
        {blurb}
      </p>
    </div>
  );
}

/* ============================================================
 * Section components — alternating bg-white / bg-brand-mist
 * ============================================================ */

export function TeamLeadership() {
  return (
    <section id="leadership" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Leadership"
          title="Leading the way"
          blurb="A team of practitioners, policymakers and scientists at the helm of GuruJal's next decade of work."
        />
        <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {leaders.map((p) => (
            <li key={p.name}>
              <PersonCard p={p} size="lg" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TeamTrustees() {
  return (
    <section id="trustees" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Governance"
          title="Trustees"
          blurb="An experienced board guiding GuruJal's mission, finances and public accountability."
        />
        <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {trustees.map((p) => (
            <li key={p.name}>
              <PersonCard p={p} size="lg" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TeamAdvisors() {
  return (
    <section id="advisors" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Advisory board"
          title="Advisors"
          blurb="Domain experts and senior counsel who shape GuruJal's strategy, research and partnerships."
        />
        <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {advisors.map((p) => (
            <li key={p.name}>
              <PersonCard p={p} size="md" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TeamExecutive() {
  return (
    <section id="executive" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Day-to-day"
          title="Executive Team"
          blurb="The people who turn strategy into pond rejuvenations, fellowship cohorts, research papers and ecosystems on the ground."
        />
        <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {executive.map((p) => (
            <li key={p.name}>
              <PersonCard p={p} size="md" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
