/**
 * publicationLead — one document per visitor who fills the gated form
 * on a publication page to unlock the PDF. The /api/publication-lead
 * Next.js route creates these documents server-side using a write
 * token; editors can view, search and delete them in Studio, and the
 * custom "Publication leads" Studio tool offers a CSV download.
 *
 * Field design notes:
 *  - `name` / `email` / `phone` come straight from the visitor's form.
 *  - `publicationTitle` and `pdfSrc` are passed through from the page
 *    so we know which publication the lead is for, even if the page
 *    title later changes in the codebase.
 *  - `accessedAt` is set by the server, NOT the client — clients can
 *    lie about timestamps.
 *  - Nothing here is `validation: required()` because the validation
 *    is enforced at the API boundary; we don't want a malformed
 *    legacy row to be un-deletable inside Studio.
 */
import { defineField, defineType } from "sanity";

export const publicationLeadType = defineType({
  name: "publicationLead",
  title: "Publication lead",
  type: "document",
  // Hide the +New button in the document list — leads are only ever
  // created by the API route, never hand-authored in Studio.
  // (Editors can still open, view, and delete existing rows.)
  // The custom action restriction is set in sanity.config.ts.
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "publicationTitle",
      title: "Publication",
      type: "string",
    }),
    defineField({
      name: "pdfSrc",
      title: "PDF source path",
      type: "string",
      description:
        "Path to the PDF the visitor unlocked. Useful when the same publication appears under multiple URLs.",
    }),
    defineField({
      name: "accessedAt",
      title: "Accessed at",
      type: "datetime",
      description: "Server-side timestamp of the form submission.",
    }),
  ],
  // Sort newest-first by default in the document list.
  orderings: [
    {
      title: "Most recent",
      name: "accessedAtDesc",
      by: [{ field: "accessedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      name: "name",
      email: "email",
      publicationTitle: "publicationTitle",
      accessedAt: "accessedAt",
    },
    prepare: ({ name, email, publicationTitle, accessedAt }) => {
      const when = accessedAt
        ? new Date(accessedAt).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "—";
      return {
        title: name || email || "Anonymous lead",
        subtitle: `${publicationTitle || "Unknown publication"} · ${when}`,
      };
    },
  },
});
