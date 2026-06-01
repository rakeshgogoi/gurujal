/**
 * Sanity environment configuration.
 *
 * Reads the project ID and dataset from env vars so the same code
 * works locally (.env.local) and on Vercel (project settings). Falls
 * back to empty strings if not set — that lets `next build` succeed
 * before the user has created a Sanity project; the Studio route and
 * GROQ queries gate on `isSanityConfigured` so a missing config
 * produces a clean 404 instead of a runtime crash.
 */
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// API version: a date string, pin to the day you set things up so
// future Sanity API changes don't break your queries. Bump when you
// adopt new features.
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const isSanityConfigured = projectId.length > 0;
