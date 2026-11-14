/* Pure helpers for the Site Content editor: turn the saved CMS document into
   a fully-filled form (every field holds the text currently on the website),
   and turn the form back into the minimal set of edits to save. */

import {
  DEFAULT_SOCIAL_LINKS,
  DEFAULT_STATS,
  SEO_PAGES,
  TEXT_GROUPS,
  type SiteContent,
  type SocialLink,
  type StatItem,
  type Testimonial,
  type TextField,
  type TrustedLogo,
} from "@/content/siteContent";
import { PAGE_TEXT_GROUPS, SEO_DEFAULTS } from "@/content/pageText.generated";

/** Hand-made groups (home, footer, careers…) + every page generated from code. */
export const allTextGroups: { id: string; label: string; fields: (TextField & { section?: string })[] }[] = [
  ...TEXT_GROUPS,
  ...PAGE_TEXT_GROUPS,
];

/** Existing wording of every editable text field, keyed by field key. */
export const TEXT_ORIGINALS: Record<string, string> = Object.fromEntries(
  allTextGroups.flatMap((g) => g.fields.map((fl) => [fl.key, fl.default.trim()])),
);
export const seoOriginal = (path: string) => ({
  title: SEO_DEFAULTS[path]?.title ?? "",
  description: SEO_DEFAULTS[path]?.description ?? "",
});

/** Only what differs from the existing wording is saved as a CMS edit, so
    untouched text keeps following the page code. */
export function toPayload(d: Draft) {
  const text: Record<string, string> = {};
  for (const [k, v] of Object.entries(d.text)) {
    const val = v.trim();
    if (val && val !== TEXT_ORIGINALS[k]) text[k] = val;
  }
  const seo: Record<string, { title: string; description: string }> = {};
  for (const [path, v] of Object.entries(d.seo)) {
    const o = seoOriginal(path);
    const title = v.title.trim() === o.title ? "" : v.title.trim();
    const description = v.description.trim() === o.description ? "" : v.description.trim();
    if (title || description) seo[path] = { title, description };
  }
  return { ...d, text, seo };
}


export interface Draft {
  text: Record<string, string>;
  stats: StatItem[];
  testimonials: Testimonial[];
  trustedBy: TrustedLogo[];
  socialLinks: SocialLink[];
  seo: Record<string, { title: string; description: string }>;
}

export function toDraft(c: SiteContent): Draft {
  // Any platform added to the defaults later (e.g. Crunchbase) shows up even
  // if an older saved list does not have it yet.
  const saved = c.socialLinks ?? DEFAULT_SOCIAL_LINKS;
  const missing = DEFAULT_SOCIAL_LINKS.filter(
    (d) => !saved.some((s) => s.id === d.id),
  );
  // Every field starts filled with the text currently on the website:
  // the saved CMS edit if there is one, otherwise the existing wording.
  const text: Record<string, string> = {};
  for (const [k, original] of Object.entries(TEXT_ORIGINALS)) {
    const saved = c.text[k]?.trim();
    text[k] = saved || original;
  }
  const seo: Draft["seo"] = {};
  for (const pg of SEO_PAGES) {
    const o = seoOriginal(pg.path);
    const v = c.seo[pg.path];
    seo[pg.path] = {
      title: v?.title?.trim() || o.title,
      description: v?.description?.trim() || o.description,
    };
  }
  return {
    text,
    stats: (c.stats ?? DEFAULT_STATS).map((s) => ({ ...s })),
    testimonials: c.testimonials.map((t) => ({ ...t })),
    trustedBy: c.trustedBy.map((l) => ({ ...l })),
    socialLinks: [...saved, ...missing].map((s) => ({ ...s })),
    seo,
  };
}
