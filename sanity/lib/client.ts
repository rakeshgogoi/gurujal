/**
 * Read-only Sanity client used by the public site to fetch documents
 * via GROQ. `useCdn: true` caches at Sanity's edge, fastest for
 * end-user reads. If you need fresh writes for previews, create a
 * separate authenticated client elsewhere.
 *
 * Constructed lazily because next-sanity throws at construction time
 * if projectId is empty — we want `next build` to succeed even before
 * the user has wired up SANITY_PROJECT_ID. Call sites guard on
 * `isSanityConfigured` before invoking.
 */
import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "../env";

let cached: SanityClient | null = null;

export function getSanityClient(): SanityClient {
  if (!isSanityConfigured) {
    throw new Error(
      "Sanity is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID in your environment."
    );
  }
  if (!cached) {
    cached = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    });
  }
  return cached;
}
