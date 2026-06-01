/**
 * GROQ queries used by the public site. Co-located so they're easy to
 * keep in sync with the schema and easy to tweak alongside the pages
 * that consume them.
 */
import { groq } from "next-sanity";

/** Every published event's slug — used to enumerate static params. */
export const allEventSlugsQuery = groq`*[_type == "event" && defined(slug.current)][].slug.current`;

/** Full event document for the detail page, queried by slug. */
export const eventBySlugQuery = groq`*[_type == "event" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  eyebrow,
  dateLine,
  headlineBefore,
  headlineAccent,
  headlineAfter,
  lead,
  primaryCta,
  secondaryCta,
  facts,
  backdrop,
  body
}`;
