"use client";

/**
 * Sanity Studio embedded at /studio. The catch-all segment lets Sanity
 * own every URL under /studio (e.g. /studio/structure, /studio/vision).
 *
 * The Studio is a React-context-heavy bundle that has to run in the
 * browser — hence "use client" and `dynamic = "force-dynamic"` to skip
 * static prerendering.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { isSanityConfigured } from "../../../../sanity/env";

export const dynamic = "force-dynamic";

export default function StudioPage() {
  if (!isSanityConfigured) {
    // Friendly fallback before the user has wired up env vars. See
    // SANITY_SETUP.md at the repo root for the full walkthrough.
    return (
      <main className="mx-auto max-w-2xl px-6 py-24">
        <h1 className="text-2xl font-bold tracking-tight text-brand-ink">
          GuruJal CMS — needs setup
        </h1>
        <p className="mt-4 text-brand-muted">
          Sanity isn&apos;t configured yet. Add{" "}
          <code className="rounded bg-brand-mist px-1.5 py-0.5 text-sm text-brand-primary">
            NEXT_PUBLIC_SANITY_PROJECT_ID
          </code>{" "}
          (and optionally{" "}
          <code className="rounded bg-brand-mist px-1.5 py-0.5 text-sm text-brand-primary">
            NEXT_PUBLIC_SANITY_DATASET
          </code>
          ) to your{" "}
          <code className="rounded bg-brand-mist px-1.5 py-0.5 text-sm text-brand-primary">
            .env.local
          </code>{" "}
          (locally) or your Vercel project env, then reload this page.
        </p>
        <p className="mt-3 text-brand-muted">
          See{" "}
          <code className="rounded bg-brand-mist px-1.5 py-0.5 text-sm text-brand-primary">
            SANITY_SETUP.md
          </code>{" "}
          at the repo root for a step-by-step walkthrough.
        </p>
      </main>
    );
  }
  return <NextStudio config={config} />;
}
