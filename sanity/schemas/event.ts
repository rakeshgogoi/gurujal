/**
 * Event document — mirrors the EventDetailHero component props so a
 * Sanity-authored event can be rendered with the existing hero
 * component without any field renames. The `body` portable-text array
 * lets editors compose the rest of the page (overview, partners,
 * outcomes…) without writing TSX.
 */
import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Internal name (shown in the Studio document list). e.g. \"Urban Adda 2025\".",
      validation: (r) => r.required().min(2),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      description: "Becomes the URL: /events/<slug>",
      options: { source: "title", maxLength: 80 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      description: "Small tag above the headline. e.g. \"Urban Adda 2025\".",
    }),
    defineField({
      name: "dateLine",
      title: "Date line",
      type: "string",
      description:
        "Human-readable date + venue. e.g. \"3rd–5th June 2025 · India Habitat Centre\".",
    }),
    defineField({
      name: "headlineBefore",
      title: "Headline — start",
      type: "string",
      description:
        "Words before the accent. e.g. \"Cities for People, Not\".",
    }),
    defineField({
      name: "headlineAccent",
      title: "Headline — accent word",
      type: "string",
      description:
        "Single highlighted word in the headline. e.g. \"Cars\".",
    }),
    defineField({
      name: "headlineAfter",
      title: "Headline — end",
      type: "string",
      description: "Words after the accent. Often empty.",
    }),
    defineField({
      name: "lead",
      title: "Lead paragraph",
      type: "text",
      rows: 4,
      description:
        "First paragraph beneath the headline — sets the scene.",
    }),
    defineField({
      name: "backdrop",
      title: "Hero backdrop image",
      type: "image",
      options: { hotspot: true },
      description:
        "Full-bleed photo behind the headline. Will be dimmed automatically for legibility.",
    }),
    defineField({
      name: "facts",
      title: "Fact chips",
      type: "array",
      description:
        "Up to 4 quick facts shown beneath the hero (Dates, Venue, Format, etc).",
      of: [
        {
          type: "object",
          name: "factChip",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { label: "label", value: "value" },
            prepare: ({ label, value }) => ({ title: `${label}: ${value}` }),
          },
        },
      ],
      validation: (r) => r.max(4),
    }),
    defineField({
      name: "primaryCta",
      title: "Primary CTA",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Label", type: "string" }),
        defineField({
          name: "href",
          title: "Link",
          type: "string",
          description:
            "Anchor (#overview) or full URL. Leave blank to hide.",
        }),
      ],
    }),
    defineField({
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Label", type: "string" }),
        defineField({ name: "href", title: "Link", type: "string" }),
      ],
    }),
    defineField({
      name: "body",
      title: "Body content",
      type: "array",
      description:
        "Rest of the event page — paragraphs, headings, images, lists.",
      of: [
        {
          type: "block",
          styles: [
            { title: "Body", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
        },
        { type: "image", options: { hotspot: true } },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "dateLine",
      media: "backdrop",
    },
  },
});
