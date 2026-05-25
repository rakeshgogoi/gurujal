/**
 * Content helpers for file-based MDX content.
 *
 * Content lives in /content as follows:
 *
 *   content/
 *     pages/        - top-level marketing/info pages (about, contact, etc.)
 *     posts/        - blog posts
 *     team/         - team member profiles
 *     publications/ - reports & publications
 *
 * Each file is .mdx with YAML frontmatter:
 *   ---
 *   title: "About GuruJal"
 *   slug: "about"
 *   date: "2024-01-15"
 *   excerpt: "Optional short description"
 *   cover: "/images/about-hero.jpg"
 *   ---
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type CollectionName = "pages" | "posts" | "team" | "publications";

export type ContentEntry<T = Record<string, unknown>> = {
  slug: string;
  filepath: string;
  frontmatter: T & {
    title: string;
    slug?: string;
    date?: string;
    excerpt?: string;
    cover?: string;
    draft?: boolean;
  };
  body: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

function readDirSafe(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

export function listSlugs(collection: CollectionName): string[] {
  const dir = path.join(CONTENT_ROOT, collection);
  return readDirSafe(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function loadEntry<T = Record<string, unknown>>(
  collection: CollectionName,
  slug: string
): ContentEntry<T> | null {
  const dir = path.join(CONTENT_ROOT, collection);
  const candidates = [`${slug}.mdx`, `${slug}.md`];
  for (const name of candidates) {
    const full = path.join(dir, name);
    if (fs.existsSync(full)) {
      const raw = fs.readFileSync(full, "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        filepath: full,
        frontmatter: { title: slug, ...(data as Record<string, unknown>) } as ContentEntry<T>["frontmatter"],
        body: content,
      };
    }
  }
  return null;
}

export function listEntries<T = Record<string, unknown>>(
  collection: CollectionName
): ContentEntry<T>[] {
  return listSlugs(collection)
    .map((s) => loadEntry<T>(collection, s))
    .filter((e): e is ContentEntry<T> => e !== null && !e.frontmatter.draft);
}
