/**
 * Server-only Sanity client used by API routes that need to WRITE
 * (create publication leads, etc.). Keep this separate from the
 * cached read-only client in client.ts — the read client uses
 * `useCdn: true` and has no token, this one uses a token and
 * `useCdn: false` so writes apply immediately and reads stay
 * uncached.
 *
 * The token is loaded from SANITY_WRITE_TOKEN (no NEXT_PUBLIC_ prefix
 * — it must never reach the browser). To create one:
 *  https://www.sanity.io/manage → project → API → Tokens → +Add API
 *  token → "Editor" permissions. Paste it into .env.local AND into
 *  Vercel project env vars before deploying.
 *
 * Constructed lazily so the absence of the token doesn't break local
 * dev for unrelated workflows; the API route guards on it before
 * calling the client.
 */
import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "../env";

let cached: SanityClient | null = null;

export function hasSanityWriteToken(): boolean {
  return Boolean(process.env.SANITY_WRITE_TOKEN);
}

export function getSanityServerClient(): SanityClient {
  if (!isSanityConfigured) {
    throw new Error(
      "Sanity is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID."
    );
  }
  const token = process.env.SANITY_WRITE_TOKEN;
  if (!token) {
    throw new Error(
      "SANITY_WRITE_TOKEN is not set. Create one at sanity.io/manage and add it to .env.local."
    );
  }
  if (!cached) {
    cached = createClient({
      projectId,
      dataset,
      apiVersion,
      token,
      useCdn: false,
    });
  }
  return cached;
}
