import Image from "next/image";

/**
 * Shared round-headshot card used on About and Team pages.
 *
 *   - Round portrait with a soft ring and shadow
 *   - Name (bold), role (muted), optional LinkedIn icon below
 *   - Two size variants: "lg" (Leadership/Trustees) and "md" (Advisors/
 *     Executive). Both keep the same visual language so different groups
 *     read as equally important — only the portrait gets a little smaller
 *     when there are many people in a section.
 */

export type Person = {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
};

type Size = "lg" | "md";

const portraitSize: Record<Size, string> = {
  lg: "h-40 w-40 sm:h-44 sm:w-44",
  md: "h-32 w-32 sm:h-36 sm:w-36",
};

const portraitSizesAttr: Record<Size, string> = {
  lg: "176px",
  md: "144px",
};

const nameSize: Record<Size, string> = {
  lg: "text-base font-semibold sm:text-lg",
  md: "text-sm font-semibold sm:text-base",
};

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

export function PersonCard({
  p,
  size = "lg",
}: {
  p: Person;
  size?: Size;
}) {
  return (
    <div className="group flex flex-col items-center text-center">
      {/* Portrait wrapper has a brand-tinted background so the layout
          never goes blank while the image is loading — users see a soft
          pale-cyan disc that becomes the photo once it resolves. */}
      <div
        className={`relative overflow-hidden rounded-full bg-brand-soft/60 ring-4 ring-white shadow-md transition group-hover:shadow-xl ${portraitSize[size]}`}
      >
        <Image
          src={p.photo}
          alt={`Portrait of ${p.name}`}
          fill
          sizes={portraitSizesAttr[size]}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className={`mt-4 text-brand-ink ${nameSize[size]}`}>{p.name}</h3>
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
