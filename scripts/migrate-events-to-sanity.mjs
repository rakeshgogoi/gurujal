/**
 * One-time migration: lift the four hardcoded event hero blocks into
 * Sanity as Event documents.
 *
 * Each event's backdrop image is uploaded to Sanity's asset CDN and
 * referenced from the document. We use `createOrReplace` with a
 * deterministic document id so re-running this script is safe — it
 * upserts on the same id instead of duplicating.
 *
 * Usage:
 *   1. Generate a Sanity write token at sanity.io/manage → API →
 *      Tokens → "Add API token", Permissions: Editor.
 *   2. Add to .env.local:
 *        SANITY_WRITE_TOKEN=sk...
 *   3. Run: npm run sanity:migrate-events
 *
 * After verifying the events render correctly at /events/<slug>,
 * delete the hardcoded /src/app/<slug>/page.tsx files for those slugs
 * (and the corresponding entries in build-search-index.mjs ROUTES).
 */
import { createClient } from "@sanity/client";
import { readFileSync, existsSync } from "node:fs";
import { basename, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadDotenv } from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");

// Pull env from .env.local (the Sanity write token never goes into
// the public next-sanity client; it's only used by this Node script).
loadDotenv({ path: resolve(REPO_ROOT, ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId) {
  console.error(
    "[migrate] Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local"
  );
  process.exit(1);
}
if (!token) {
  console.error(
    "[migrate] Missing SANITY_WRITE_TOKEN. Generate one at\n" +
      "  sanity.io/manage → API → Tokens → Add API token (Editor permission)\n" +
      "and add it to .env.local as SANITY_WRITE_TOKEN=sk..."
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-01",
  token,
  useCdn: false,
});

/** Hardcoded mirror of each existing event page's EventDetailHero
 *  props. The `backdropPath` is relative to the repo root (i.e. the
 *  file lives at <repo>/public/<...>). */
const EVENTS = [
  {
    slug: "urban-adda-25",
    title: "Urban Adda 2025",
    eyebrow: "Urban Adda 2025",
    dateLine: "3rd–5th June 2025 · India Habitat Centre, New Delhi",
    headlineBefore: "Cities for People, Not",
    headlineAccent: "Cars",
    headlineAfter: "",
    lead:
      "A three-day conference co-creating sustainable, equitable and resilient cities — blending policy dialogue, creative expression and youth engagement, from World Bicycle Day to World Environment Day.",
    primaryCta: { label: "Read Event Report", href: "#overview" },
    secondaryCta: { label: "View Gallery", href: "#gallery" },
    facts: [
      { label: "Dates", value: "3–5 Jun 2025" },
      { label: "Venue", value: "India Habitat Centre" },
      { label: "Duration", value: "3-Day Conclave" },
      { label: "Edition", value: "Inaugural Edition" },
    ],
    backdropPath: "public/uploads/2026/03/Book-Launch-at-Urban-Adda.jpeg",
  },
  {
    slug: "roots-and-recharge-symposium",
    title: "Roots & Recharge Symposium",
    eyebrow: "Roots & Recharge Symposium",
    dateLine:
      "GuruJal · Wipro Foundation · 9 December 2025 · India Habitat Centre, New Delhi",
    headlineBefore: "Roots &",
    headlineAccent: "Recharge",
    headlineAfter: "Symposium",
    lead:
      "Reviving traditional water wisdom for groundwater resilience — a multistakeholder dialogue on heritage water structures and their role in modern water planning.",
    primaryCta: { label: "Read Event Report", href: "#overview" },
    secondaryCta: { label: "View Gallery", href: "#gallery" },
    facts: [
      { label: "Date", value: "9 Dec 2025" },
      { label: "Venue", value: "Juniper Hall, IHC" },
      { label: "Timings", value: "10:00 AM – 4:00 PM" },
      { label: "Focus area", value: "Gurugram, Haryana" },
    ],
    backdropPath: "public/uploads/2024/08/Roots-recharge-symposium-2025.jpg",
  },
  {
    slug: "hydromingle-event",
    title: "HydroMingle Delhi 2025",
    eyebrow: "HydroMingle Delhi 2025",
    dateLine: "10th December 2025 · India Habitat Centre, New Delhi",
    headlineBefore: "Innovating for India's",
    headlineAccent: "Water",
    headlineAfter: "Future",
    lead:
      "Connecting Systems, Science & Society — a one-day live innovation lab convening policymakers, technologists, researchers, entrepreneurs and CSR partners.",
    primaryCta: { label: "Read Event Report", href: "#overview" },
    secondaryCta: { label: "View Gallery", href: "#gallery" },
    facts: [
      { label: "Date", value: "10 Dec 2025" },
      { label: "Venue", value: "Tamarind Hall, IHC" },
      { label: "Timings", value: "10:00 AM – 5:30 PM" },
      { label: "Edition", value: "Special Edition" },
    ],
    backdropPath: "public/uploads/2024/08/hydromingle2025.jpg",
  },
  {
    slug: "real-nature-in-restored-landscapes",
    title: "Real Nature in Restored Landscapes",
    eyebrow: "Field Programme · GuruJal",
    dateLine:
      "📅 21 February 2026 · 📍 BSF Camp · Khandewala · Bhokarka · 👥 21 Participants",
    headlineBefore: "Water Conservation &",
    headlineAccent: "Exposure",
    headlineAfter: "Site Visit",
    lead:
      "An experiential site-visit programme giving participants hands-on exposure to pond restoration, wastewater treatment, traditional well revival and native plantation — hosted by GuruJal in partnership with Prana Earth under Delhi Climate Innovation Week 2026.",
    primaryCta: { label: "Read Event Report", href: "#overview" },
    secondaryCta: { label: "Site Highlights", href: "#sites" },
    facts: [
      { label: "Date", value: "21 Feb 2026" },
      { label: "Sites Visited", value: "3" },
      { label: "Participants", value: "21" },
      { label: "Water Bodies", value: "4" },
    ],
    backdropPath: "public/uploads/2026/05/real-nature-hero.avif",
  },
];

/** Upload a local file to Sanity's image asset CDN. Returns the
 *  reference object the schema expects in the `backdrop` field. */
async function uploadBackdrop(repoRelPath) {
  const fullPath = resolve(REPO_ROOT, repoRelPath);
  if (!existsSync(fullPath)) {
    throw new Error(`Image not found at ${fullPath}`);
  }
  const buffer = readFileSync(fullPath);
  const filename = basename(fullPath);
  const asset = await client.assets.upload("image", buffer, { filename });
  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  };
}

async function migrateEvent(ev) {
  process.stdout.write(`  ${ev.slug.padEnd(40)} `);
  const backdrop = await uploadBackdrop(ev.backdropPath);

  const fields = {
    title: ev.title,
    slug: { _type: "slug", current: ev.slug },
    eyebrow: ev.eyebrow,
    dateLine: ev.dateLine,
    headlineBefore: ev.headlineBefore,
    headlineAccent: ev.headlineAccent,
    headlineAfter: ev.headlineAfter,
    lead: ev.lead,
    primaryCta: ev.primaryCta,
    secondaryCta: ev.secondaryCta,
    facts: ev.facts,
    backdrop,
  };

  // Look up an existing document by slug; if found, patch it in place
  // so re-runs don't duplicate. Otherwise create a fresh one. Both
  // operations are within the standard Editor token's permission set,
  // unlike `createOrReplace` with a custom _id which Sanity's newer
  // RBAC treats as a privileged action.
  const existing = await client.fetch(
    `*[_type == "event" && slug.current == $slug][0]{_id}`,
    { slug: ev.slug }
  );

  if (existing?._id) {
    await client.patch(existing._id).set(fields).commit();
    process.stdout.write(`✓ updated\n`);
  } else {
    await client.create({ _type: "event", ...fields });
    process.stdout.write(`✓ created\n`);
  }
}

async function main() {
  console.log(
    `[migrate] target: ${projectId}.${dataset} (${EVENTS.length} events)\n`
  );
  for (const ev of EVENTS) {
    await migrateEvent(ev);
  }
  console.log(
    `\n[migrate] done. Visit /studio → Event to see them, and /events/<slug> to view the published page.`
  );
}

main().catch((e) => {
  console.error("\n[migrate] failed:", e.message);
  process.exit(1);
});
