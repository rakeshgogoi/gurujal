/**
 * Sanity Studio config. Imported by `src/app/studio/[[...tool]]/page.tsx`
 * so the editor UI lives in the same Next.js app at /studio. Editors
 * sign in with their Sanity account once they've been invited to the
 * project.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { apiVersion, dataset, projectId } from "./sanity/env";

// defineConfig throws when projectId is empty (e.g. during the very
// first `next build` before the user has wired up Sanity env vars).
// Substituting a clearly-fake placeholder lets the build emit a
// Studio bundle that simply renders an empty error state at runtime;
// the /studio route additionally shows a friendly "set up env vars"
// message in that case.
const safeProjectId = projectId || "placeholder";

export default defineConfig({
  basePath: "/studio",
  name: "gurujal",
  title: "GuruJal CMS",
  projectId: safeProjectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    // Default left-nav structure: documents grouped by type.
    structureTool(),
    // GROQ query playground at /studio/vision — handy for dev.
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
