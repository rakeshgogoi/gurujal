/**
 * Volunteering tracks — six ways to get involved, from the
 * GuruJal_Volunteers document. Source document letters these C–G plus
 * an unlettered "Citizen Science" track; relabelled A–F here so the
 * sequence reads cleanly on the site.
 */

type Tone = "teal" | "green" | "orange";

type Track = {
  letter: string;
  title: string;
  subtitle: string;
  bullets: { label: string; body: string }[];
  certificate: string;
  certificateNote: string;
  tone: Tone;
  icon: React.ReactNode;
};

const tracks: Track[] = [
  {
    letter: "A",
    title: "Digital Storytelling & Social Media",
    subtitle: "Turn conservation work into compelling stories",
    bullets: [
      {
        label: "Content creation",
        body: "Create Instagram reels, LinkedIn posts, newsletters, and short video content documenting GuruJal's field work — water audits, nursery sessions, plantation drives.",
      },
      {
        label: "Campaign management",
        body: "Design and run themed social media campaigns around World Water Day, Earth Day, Monsoon Season, etc.",
      },
      {
        label: "Impact documentation",
        body: "Write field reports and impact stories from GuruJal's school, community, and restoration programmes for use in fundraising and donor reporting.",
      },
      {
        label: "Skills gained",
        body: "Real nonprofit communications experience — portfolio-building content, editorial responsibility, and measurable reach metrics.",
      },
    ],
    certificate: "GuruJal Digital Storyteller Certificate",
    certificateNote: "Direct portfolio credit for communications, journalism, and marketing careers",
    tone: "teal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="14" height="12" rx="2" />
        <path d="M16 10l6-3v10l-6-3" />
      </svg>
    ),
  },
  {
    letter: "B",
    title: "Campus Ambassador & Outreach",
    subtitle: "Build GuruJal's presence in your college",
    bullets: [
      {
        label: "Awareness stalls",
        body: "Set up GuruJal information and activity stalls at college fests, orientation days, and sustainability events — enrolling new volunteers.",
      },
      {
        label: "Milk packet ambassador",
        body: "Drive milk packet collection in your college, hostel, and home — set up a permanent collection box, track monthly volumes.",
      },
      {
        label: "Volunteer onboarding",
        body: "Be the face of GuruJal in your campus — onboard classmates, run orientation sessions, manage a WhatsApp community.",
      },
      {
        label: "College liaison",
        body: "Coordinate between GuruJal and your college's NSS, NCC, or Environment Club for structured partnership.",
      },
    ],
    certificate: "GuruJal Campus Ambassador",
    certificateNote: "Leadership credential for placements, higher education, and sustainability roles",
    tone: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V4a1 1 0 0 1 1-1h9l4 4v14" />
        <path d="M4 8h10M4 14h6" />
      </svg>
    ),
  },
  {
    letter: "C",
    title: "Crowdfunding for Green Projects",
    subtitle: "Mobilise resources for restoration",
    bullets: [
      {
        label: "Tree plantation campaigns",
        body: "Design and run peer-to-peer crowdfunding campaigns for GuruJal's plantation drives — each tree planted is a measurable outcome.",
      },
      {
        label: "Native nursery funding",
        body: "Raise micro-funds to support seed banks, nursery infrastructure, and native species procurement.",
      },
      {
        label: "Donor storytelling",
        body: "Create compelling impact cases for individual donors — learn the basics of nonprofit fundraising.",
      },
      {
        label: "Budget accountability",
        body: "Learn to track, report, and communicate the use of crowdfunded resources transparently.",
      },
    ],
    certificate: "GuruJal Green Finance Volunteer",
    certificateNote: "Skills transferable to CSR, social enterprise, and impact investing careers",
    tone: "orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5c0-1.4 1.2-2.5 2.5-2.5s2.5 1 2.5 2c0 3-5 1.5-5 4.5 0 1 1.1 2 2.5 2s2.5-1.1 2.5-2.5" />
      </svg>
    ),
  },
  {
    letter: "D",
    title: "Event Support & Logistics",
    subtitle: "Power GuruJal's public events",
    bullets: [
      {
        label: "Plan monthly volunteering events",
        body: "Support the team to plan monthly volunteering events and outreach for them.",
      },
      {
        label: "Urban Adda",
        body: "Support GuruJal's flagship annual water innovation events — logistics, registration, speaker coordination, social media coverage.",
      },
      {
        label: "Plantation drives",
        body: "Coordinate volunteer teams at large-scale plantation events — site prep, tool management, participant briefing.",
      },
      {
        label: "Community water audits",
        body: "Support GuruJal teams conducting water audits in RWAs and communities — data entry, community mobilisation, logistics.",
      },
      {
        label: "School programmes",
        body: "Assist GuruJal team members during school sessions — co-facilitation, materials prep, student engagement.",
      },
    ],
    certificate: "GuruJal Event & Programme Volunteer",
    certificateNote: "Event management and community mobilisation experience",
    tone: "teal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </svg>
    ),
  },
  {
    letter: "E",
    title: "Native Nursery Volunteering",
    subtitle: "Grow the forest, hands-on",
    bullets: [
      {
        label: "Regular nursery sessions",
        body: "Weekly or fortnightly volunteering at GuruJal's native nurseries — soil preparation, seed sowing, sapling bagging, labelling.",
      },
      {
        label: "Species learning",
        body: "Learn to identify native Aravalli species, understand their ecological roles, and catalogue nursery stock.",
      },
      {
        label: "Propagation techniques",
        body: "Hands-on training in seed germination, cutting propagation, and transplanting — practical botany skills.",
      },
      {
        label: "Restoration link",
        body: "Participate in plantation drives where nursery-grown saplings are planted at restoration sites — close the loop from seed to forest.",
      },
    ],
    certificate: "GuruJal Restoration Volunteer",
    certificateNote: "Field ecology and conservation skills · Priority consideration for WeForWater Fellowship",
    tone: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-7" />
        <path d="M12 15c-4 0-7-2.5-7-7 4 0 7 2 7 5 0-3 3-5 7-5 0 4.5-3 7-7 7z" />
      </svg>
    ),
  },
  {
    letter: "F",
    title: "Citizen Science & Biodiversity Corps",
    subtitle: "Build the record of what lives at our restoration sites",
    bullets: [
      {
        label: "Field tools",
        body: "Use iNaturalist and Merlin Bird ID to document flora and fauna at GuruJal sites.",
      },
      {
        label: "Biodiversity records",
        body: "Build long-term biodiversity records at restoration sites, alongside butterfly and bird counts.",
      },
      {
        label: "Impact",
        body: "Creates long-term ecological monitoring systems that inform how restoration sites are managed over time.",
      },
    ],
    certificate: "GuruJal Citizen Scientist",
    certificateNote: "Field ecology and biodiversity monitoring experience",
    tone: "orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" />
      </svg>
    ),
  },
];

const toneAccent: Record<Tone, string> = {
  teal: "bg-brand-teal/15 text-brand-teal-dark ring-brand-teal/30",
  green: "bg-brand-green/15 text-brand-green-dark ring-brand-green/30",
  orange: "bg-brand-orange/15 text-brand-orange-dark ring-brand-orange/30",
};

const toneDot: Record<Tone, string> = {
  teal: "bg-brand-teal",
  green: "bg-brand-green",
  orange: "bg-brand-orange",
};

export function VolunteerTracks() {
  return (
    <section id="tracks" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Volunteering tracks
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Pick a track that fits your skills
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            Every track ends in a named certificate — a credential you
            can show for placements, higher education, and the causes
            you care about.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
          {tracks.map((t) => (
            <li
              key={t.letter}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-soft/80 transition hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span
                  className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl font-bold ring-1 ${toneAccent[t.tone]}`}
                >
                  {t.letter}
                </span>
                <div>
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ring-1 ${toneAccent[t.tone]}`}
                    aria-hidden
                  >
                    <span className="h-5 w-5">{t.icon}</span>
                  </span>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-brand-ink sm:text-xl">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-muted">
                    {t.subtitle}
                  </p>
                </div>
              </div>

              <ul className="mt-5 flex-1 space-y-3">
                {t.bullets.map((b) => (
                  <li key={b.label} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
                    <span
                      aria-hidden
                      className={`mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${toneDot[t.tone]}`}
                    />
                    <span>
                      <strong className="font-semibold text-brand-ink">{b.label}:</strong>{" "}
                      {b.body}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl bg-brand-mist p-4 ring-1 ring-brand-soft/70">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  Certificate awarded
                </p>
                <p className="mt-1 text-sm font-semibold text-brand-ink">
                  {t.certificate}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-brand-muted">
                  {t.certificateNote}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
