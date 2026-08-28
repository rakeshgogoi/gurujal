"use client";

import { useEffect, useState } from "react";

/**
 * Open internship positions — seven tracks sourced from the
 * GuruJal_Internship_JDs working document. Each card shows tags, an
 * "About this role" blurb and an Apply CTA by default; "View full
 * details" expands the responsibilities / what-you-bring / what-you-take
 * -away breakdown so the page stays scannable without losing content.
 *
 * Each card also carries a stable id (role.id), so "View full details"
 * doubles as a shareable deep link — e.g. /internship#water-access opens
 * the page already scrolled to and expanded on that role.
 */

const APPLY_FORM = "https://forms.gle/znTdPDCCXwmFGXgy5";

type Tone = "teal" | "green" | "orange";

type BulletGroup = { heading?: string; bullets: string[] };

type Role = {
  id: string;
  title: string;
  tags: [string, string, string];
  about: string;
  responsibilities: BulletGroup[];
  whatYouBring: string[];
  programmeStructure?: string[];
  takeaway: string[];
  tone: Tone;
};

const roles: Role[] = [
  {
    id: "water-access",
    title: "Water Access & Community Engagement Intern",
    tags: ["Rural Water Security Programme", "Aug – Oct", "Certificate + LOR"],
    about:
      "Support GuruJal's rural water security initiative under “Making Jal Jeevan Mission Functional” in villages Ghasera and Malab, Nuh District. This role combines household-level survey work with community mobilization, giving interns exposure to both data-driven research and grassroots engagement that shape water access planning.",
    responsibilities: [
      {
        heading: "Survey & Data Collection",
        bullets: [
          "Conduct household surveys in Ghasera and Malab alongside the GuruJal field team.",
          "Record responses accurately using Google Forms/survey tools.",
          "Collect data on water access, quality, source sustainability, and household use patterns.",
          "Support data validation, cleaning, and basic organisation.",
          "Assist in identifying trends and observations from survey data.",
        ],
      },
      {
        heading: "Community Mobilization",
        bullets: [
          "Support planning and organisation of community mobilization drives in Ghasera and Malab.",
          "Assist in conducting community meetings alongside the GuruJal team, including logistics and coordination.",
          "Contribute to developing a mobilization strategy tailored to each village's context.",
          "Support identification and outreach of potential community volunteers.",
          "Build rapport with community members, VWSC members, and local stakeholders.",
        ],
      },
      {
        heading: "Documentation",
        bullets: [
          "Prepare field notes, meeting proceedings, and activity summaries.",
          "Contribute to survey and mobilization reports.",
          "Optionally continue remote data review/analysis after field visit.",
        ],
      },
    ],
    whatYouBring: [
      "Interest in water conservation, rural development, community engagement, or social impact.",
      "Strong communication and interpersonal skills; comfort engaging with rural communities.",
      "Attention to detail in data collection and documentation.",
      "Ability to plan and coordinate small-scale meetings/events.",
      "Basic proficiency in Google Forms/MS Excel/Google Sheets.",
      "Ability to work independently and collaboratively in a field environment.",
    ],
    programmeStructure: [
      "Orientation: 30–45 min session covering project background, village context, survey methodology, and mobilization approach.",
      "Field Exposure: Guided visits to Ghasera and Malab with GuruJal's project team for surveys, mobilization drives, and community meetings.",
      "Extended Engagement (optional): Remote support for data analysis, volunteer coordination, and reporting.",
    ],
    takeaway: [
      "First-hand exposure to rural water governance and grassroots mobilization.",
      "Practical experience in field surveys, community engagement, and data collection.",
      "Understanding of household water access and rural governance structures (VWSC, Panchayat).",
      "Experience contributing to a real-world project supporting the Jal Jeevan Mission.",
      "GuruJal Certificate of Internship; LOR for active contributors.",
      "Priority consideration for future GuruJal internships, fellowships, and the WeForWater programme.",
    ],
    tone: "teal",
  },
  {
    id: "community-mobilisation",
    title: "Community Mobilisation Intern",
    tags: ["Community Programmes", "1–4 months", "Certificate + LOR"],
    about:
      "You will work closely with GuruJal's Communication team to mobilize communities, schools, RWAs, Panchayats, and local stakeholders for water conservation and environmental initiatives. This is a field-intensive role involving community outreach, awareness activities, field visits, stakeholder coordination, and support for project implementation across Gurugram.",
    responsibilities: [
      {
        bullets: [
          "Support in organizing community meetings, awareness campaigns, and engagement activities.",
          "Support field visits by collecting basic observations, photographs, and activity updates.",
          "Support in conducting surveys, community profiling, and organizing field data.",
          "Help prepare visit reports, meeting minutes (MoMs), activity summaries, and other project documentation.",
          "Support coordination with community members, schools, RWAs, Panchayats, and local stakeholders.",
          "Support in organizing plantation drives, volunteer programmes, and environmental awareness events.",
          "Capture photographs and videos during field activities and support the creation of presentations and awareness materials.",
          "Perform other project-related tasks assigned by the Community Associate.",
        ],
      },
    ],
    whatYouBring: [
      "Strong communication skills in Hindi and English.",
      "Interest in community development, environmental sustainability, and water conservation.",
      "Willingness to travel locally to Gurugram / Delhi NCR for field works.",
      "Basic proficiency in MS Office / Google Suite.",
      "Good organizational skills, teamwork, and a proactive learning attitude.",
      "Basic report writing and documentation skills are an advantage.",
    ],
    takeaway: [
      "Hands-on experience in grassroots community mobilisation at an active environmental NGO.",
      "Understanding of how India's water and waste challenges play out at the household and community level.",
      "A portfolio of documented field work — photos, reports, case studies — for use in future applications.",
      "GuruJal Certificate of Internship.",
      "Priority consideration for future GuruJal roles, fellowships, and the WeForWater programme.",
    ],
    tone: "green",
  },
  {
    id: "communications-content",
    title: "Communications & Content Intern",
    tags: [
      "Communications, Storytelling & Digital Media",
      "1–4 months",
      "Certificate + LOR",
    ],
    about:
      "You will own GuruJal's content output during your internship — writing, photographing, filming, and publishing the stories of our water conservation and restoration work. This role suits a student with strong writing skills and a genuine interest in environmental storytelling, journalism, or nonprofit communications.",
    responsibilities: [
      {
        bullets: [
          "Write 2–3 social media posts per week (Instagram, LinkedIn) documenting GuruJal programmes with strong narrative hooks.",
          "Accompany field teams to restoration sites, school sessions, and community events — capturing photos and short video content.",
          "Write 1–2 long-form pieces per month (impact stories, field reports, volunteer profiles) for GuruJal's newsletter and website.",
          "Support design of campaign materials using Canva or similar tools.",
        ],
      },
    ],
    whatYouBring: [
      "Strong English writing skills — ability to write both for social media (punchy, visual) and long-form (narrative, evidence-based).",
      "Basic photography or video skills (smartphone is fine).",
      "Comfortable using Canva or similar design tools.",
      "Genuine interest in environmental issues, social impact, or nonprofit communications.",
      "Able to work independently with editorial accountability — hitting deadlines matters.",
    ],
    takeaway: [
      "A published portfolio of content — social media posts, field reports, newsletter editions, and visual assets — live during your internship.",
      "Experience covering real field work in an active NGO — restoration sites, community programmes, school sessions.",
      "Editorial mentorship from GuruJal's communications lead.",
      "GuruJal Certificate of Internship + LinkedIn recommendation.",
      "Strong portfolio piece for journalism, communications, marketing, or sustainability careers.",
    ],
    tone: "orange",
  },
  {
    id: "native-nursery-restoration",
    title: "Native Nursery & Restoration Intern",
    tags: ["Ecological Restoration", "1–4 months", "Certificate + LOR"],
    about:
      "In this role, you will support GuruJal's native nursery and ecological restoration initiatives. You will gain hands-on experience in plant propagation, nursery management, species identification, and restoration planning while contributing directly to the growth of native saplings used across Gurugram's restoration sites.",
    responsibilities: [
      {
        bullets: [
          "Support daily operations of GuruJal's native nursery including seed sowing, sapling bagging, labelling, watering, and maintenance.",
          "Assist in seed collection, seed banking, and propagation activities.",
          "Learn and document native Aravalli plant species and their ecological significance.",
          "Maintain nursery records, inventories, and plant health monitoring data.",
          "Support compost preparation and soil mix development for nursery operations.",
          "Participate in plantation drives and restoration site visits.",
          "Assist in monitoring sapling survival and restoration outcomes.",
          "Support citizen engagement activities conducted at nursery sites.",
          "Capture photographs, observations, and field documentation.",
          "Perform other restoration-related tasks assigned by the Restoration Team.",
        ],
      },
    ],
    whatYouBring: [
      "Interest in ecology, biodiversity conservation, forestry, agriculture, or environmental science.",
      "Willingness to work outdoors and engage in field activities.",
      "Curiosity to learn plant identification and nursery management practices.",
      "Good observation and documentation skills.",
      "Basic proficiency in Google Workspace / MS Office.",
      "A proactive and hands-on learning attitude.",
    ],
    takeaway: [
      "Practical experience in native nursery development and ecological restoration.",
      "Knowledge of native Aravalli species and restoration methodologies.",
      "Hands-on training in propagation, composting, and plantation management.",
      "Exposure to nature-based solutions for climate resilience and biodiversity conservation.",
      "GuruJal Certificate of Internship.",
      "Priority consideration for future restoration projects, fellowships, and the WeForWater programme.",
    ],
    tone: "teal",
  },
  {
    id: "volunteer-management",
    title: "Volunteer Management Intern",
    tags: ["Community Programmes", "1–4 months", "Certificate + LOR"],
    about:
      "In this role, you will work closely with GuruJal's Community Engagement team to build and strengthen GuruJal's volunteer ecosystem. You will support volunteer recruitment, onboarding, engagement, and coordination across environmental campaigns, restoration activities, school programmes, and public events. This role is ideal for someone interested in community building, leadership development, and people management.",
    responsibilities: [
      {
        bullets: [
          "Support volunteer recruitment through colleges, communities, social media, and partner networks.",
          "Coordinate volunteer onboarding, orientations, and engagement activities.",
          "Maintain volunteer databases, attendance records, and communication groups.",
          "Support planning and execution of monthly volunteering events, plantation drives, clean-up campaigns, and awareness programmes.",
          "Coordinate volunteer schedules, task allocation, and event-day management.",
          "Build relationships with active volunteers and support volunteer retention initiatives.",
          "Collect volunteer feedback and document participation and impact stories.",
          "Support collaborations with NSS units, Environment Clubs, RWAs, and youth groups.",
          "Assist in preparing volunteer reports, certificates, and engagement summaries.",
          "Perform other volunteer programme-related tasks assigned by the Community Associate.",
        ],
      },
    ],
    whatYouBring: [
      "Strong communication and interpersonal skills in Hindi and English.",
      "Interest in community engagement, youth leadership, and environmental action.",
      "Good organisational and coordination skills.",
      "Comfortable interacting with diverse groups of people.",
      "Basic proficiency in Google Workspace / MS Office.",
      "Ability to work independently and manage multiple activities simultaneously.",
    ],
    takeaway: [
      "Hands-on experience in volunteer management and community leadership.",
      "Exposure to grassroots environmental programmes and citizen engagement models.",
      "Experience in planning and managing large volunteer-driven events.",
      "Strong people management and stakeholder coordination skills.",
      "GuruJal Certificate of Internship.",
      "Priority consideration for future GuruJal roles, fellowships, and the WeForWater programme.",
    ],
    tone: "green",
  },
  {
    id: "events-logistics",
    title: "Events and Logistics Intern",
    tags: ["Events & Outreach", "1–4 months", "Certificate + LOR"],
    about:
      "In this role, you will support the planning and execution of GuruJal's events, workshops, volunteering programmes, school engagements, and flagship initiatives such as Urban Adda. You will gain practical experience in event operations, logistics management, participant engagement, and programme coordination.",
    responsibilities: [
      {
        bullets: [
          "Support planning and execution of environmental awareness events, workshops, and volunteering programmes.",
          "Coordinate participant registrations, confirmations, and event communication.",
          "Assist with venue preparation, materials management, and logistical arrangements.",
          "Support coordination with speakers, facilitators, volunteers, vendors, and partners.",
          "Manage on-ground event operations including participant support and session flow.",
          "Support documentation through photographs, videos, attendance tracking, and feedback collection.",
          "Assist in creating event reports, summaries, and impact documentation.",
          "Support outreach efforts to increase participation in events and campaigns.",
          "Help manage logistics for plantation drives, school programmes, restoration visits, and community events.",
          "Perform other event-related tasks assigned by the Programmes Team.",
        ],
      },
    ],
    whatYouBring: [
      "Strong organisational and coordination skills.",
      "Excellent communication skills in Hindi and English.",
      "Ability to multitask and work in fast-paced environments.",
      "Interest in event management, sustainability, and community engagement.",
      "Basic proficiency in Google Workspace / MS Office.",
      "A proactive attitude and attention to detail.",
    ],
    takeaway: [
      "Hands-on experience in planning and managing real-world environmental events.",
      "Exposure to stakeholder management, logistics coordination, and public engagement.",
      "Experience supporting flagship programmes and multi-stakeholder initiatives.",
      "A portfolio of event reports, outreach campaigns, and programme documentation.",
      "GuruJal Certificate of Internship.",
      "Priority consideration for future GuruJal roles, fellowships, and the WeForWater programme.",
    ],
    tone: "orange",
  },
  {
    id: "school-rwa-outreach",
    title: "Community Mobilisation Intern (School & RWA Outreach)",
    tags: [
      "Community Programmes & School Partnerships",
      "1–4 months",
      "Certificate + LOR",
    ],
    about:
      "You will work directly with GuruJal's programme team to mobilise schools, RWAs, and communities around the Milk Packet Collection Drive, Water Ambassador Programme, and Micro-Project rollouts. This is a field-heavy role — expect to be in schools, housing societies, and community spaces.",
    responsibilities: [
      {
        bullets: [
          "Support onboarding of new schools and RWAs into the native nursery plantation efforts — outreach, follow-up, box installation.",
          "Maintain a database of active collection points, volunteer contacts, and programme participants.",
          "Document field visits through photos, notes, and short written reports for internal and donor use.",
          "Support the design of simple community communication materials (WhatsApp messages, posters, flyers) in coordination with the communications team.",
        ],
      },
    ],
    whatYouBring: [
      "Strong interpersonal and communication skills — comfortable speaking to RWA committees, and student groups.",
      "Proactive and self-organised — able to manage follow-up independently.",
      "Interest in environmental issues, community development, or social impact.",
      "Willingness to travel locally within Gurugram / NCR for field work.",
      "Basic proficiency in MS Office / Google Suite.",
    ],
    takeaway: [
      "Hands-on experience in grassroots community mobilisation at an active environmental NGO.",
      "Understanding of how India's water and waste challenges play out at the household and community level.",
      "A portfolio of documented field work — photos, reports, case studies — for use in future applications.",
      "GuruJal Certificate of Internship + LinkedIn recommendation from programme lead.",
      "Priority consideration for future GuruJal roles and fellowships.",
    ],
    tone: "teal",
  },
];

const toneTag: Record<Tone, string> = {
  teal: "bg-brand-teal/10 text-brand-teal-dark",
  green: "bg-brand-green/10 text-brand-green-dark",
  orange: "bg-brand-orange/10 text-brand-orange-dark",
};

const toneDot: Record<Tone, string> = {
  teal: "bg-brand-teal",
  green: "bg-brand-green",
  orange: "bg-brand-orange",
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
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
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function Arrow() {
  return (
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
  );
}

function BulletList({ items, tone }: { items: string[]; tone: Tone }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
          <span
            aria-hidden
            className={`mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${toneDot[tone]}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RoleCard({ role }: { role: Role }) {
  const [open, setOpen] = useState(false);
  const detailId = `role-detail-${role.id}`;

  // Deep-link support: if the page loads with #<role.id> already in the
  // URL, expand this card and scroll it into view — so a shared/bookmarked
  // link lands the reader straight on the right role, expanded.
  useEffect(() => {
    if (window.location.hash === `#${role.id}`) {
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!open || window.location.hash !== `#${role.id}`) return;
    // A short delay lets the browser's own (sometimes late-firing) jump
    // to the #hash fragment happen first, so ours lands last. We jump
    // instantly rather than smoothly: this card's content just grew by
    // 1000+px in this same render, and animating a scroll toward a
    // target that size — under the site's global smooth-scroll CSS —
    // proved unreliable (the animation silently stalls partway).
    const timer = window.setTimeout(() => {
      const el = document.getElementById(role.id);
      if (!el) return;
      const scrollMarginTop = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
      const top = el.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
      window.scrollTo({ top, behavior: "instant" });
    }, 150);
    return () => window.clearTimeout(timer);
  }, [open, role.id]);

  const toggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const next = !open;
    setOpen(next);
    if (next) {
      window.history.pushState(null, "", `#${role.id}`);
    } else if (window.location.hash === `#${role.id}`) {
      window.history.pushState(null, "", window.location.pathname + window.location.search);
    }
  };

  return (
    <li
      id={role.id}
      className="flex scroll-mt-24 flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-brand-soft/80 transition hover:shadow-md sm:p-8"
    >
      <ul className="flex flex-wrap gap-2">
        {role.tags.map((t) => (
          <li
            key={t}
            className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${toneTag[role.tone]}`}
          >
            {t}
          </li>
        ))}
      </ul>
      <h3 className="mt-4 text-xl font-semibold text-brand-ink sm:text-2xl">
        {role.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
        {role.about}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href={`#${role.id}`}
          onClick={toggle}
          aria-expanded={open}
          aria-controls={detailId}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-soft bg-white px-5 py-2.5 text-sm font-semibold text-brand-primary transition hover:border-brand-accent hover:text-brand-accent-dark"
        >
          {open ? "Hide full details" : "View full details"}
          <ChevronIcon open={open} />
        </a>
        <a
          href={APPLY_FORM}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-primary-dark"
        >
          Apply
          <Arrow />
        </a>
      </div>

      {open && (
        <div id={detailId} className="mt-6 grid gap-6 border-t border-brand-soft/70 pt-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Key Responsibilities
            </p>
            <div className="mt-3 space-y-5">
              {role.responsibilities.map((group, i) => (
                <div key={group.heading ?? i}>
                  {group.heading && (
                    <p className="mb-2 text-sm font-semibold text-brand-ink">
                      {group.heading}
                    </p>
                  )}
                  <BulletList items={group.bullets} tone={role.tone} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              What You Bring
            </p>
            <div className="mt-3">
              <BulletList items={role.whatYouBring} tone={role.tone} />
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              What You Take Away
            </p>
            <div className="mt-3">
              <BulletList items={role.takeaway} tone={role.tone} />
            </div>
          </div>

          {role.programmeStructure && (
            <div className="sm:col-span-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Programme Structure
              </p>
              <div className="mt-3">
                <BulletList items={role.programmeStructure} tone={role.tone} />
              </div>
            </div>
          )}
        </div>
      )}
    </li>
  );
}

export function OpenInternships() {
  return (
    <section id="positions" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Open Positions
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Seven internship tracks, currently open
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            Each internship runs 1–4 months and carries a GuruJal
            Certificate of Internship. We accept applications year-round;
            selection depends on availability of the role. Internships
            shorter than 2 months are unpaid — 3 months or more becomes a
            paid internship.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-5">
          {roles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </ul>
      </div>
    </section>
  );
}
