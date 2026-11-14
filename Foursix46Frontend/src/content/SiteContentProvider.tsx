/* ─────────────────────────────────────────────────────────────────────────────
   src/content/SiteContentProvider.tsx
   Makes the Site Content CMS available to every component.

   Initial value = the snapshot baked in at build time (__SITE_CONTENT__, see
   scripts/fetch-site-content.mjs + vite.config.ts). Server render and client
   hydration therefore start from the same data, so the static HTML already
   carries the CMS text. After mount it re-fetches the live document, so edits
   made in the admin show up without a rebuild.
───────────────────────────────────────────────────────────────────────────── */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_SOCIAL_LINKS,
  DEFAULT_STATS,
  EMPTY_SITE_CONTENT,
  TEXT_DEFAULTS,
  normaliseSiteContent,
  type SiteContent,
} from "./siteContent";

const apiUrl = import.meta.env.VITE_API_URL;

declare const __SITE_CONTENT__: unknown;

function initialContent(): SiteContent {
  try {
    return normaliseSiteContent(
      typeof __SITE_CONTENT__ !== "undefined" ? __SITE_CONTENT__ : null,
    );
  } catch {
    return { ...EMPTY_SITE_CONTENT };
  }
}

interface Ctx {
  content: SiteContent;
  /** Re-read the live document (used by the admin after saving). */
  reload: () => Promise<void>;
}

const SiteContentContext = createContext<Ctx>({
  content: EMPTY_SITE_CONTENT,
  reload: async () => {},
});

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(initialContent);

  const reload = useCallback(async () => {
    if (!apiUrl) return;
    try {
      const res = await fetch(`${apiUrl}/api/site-content`);
      if (!res.ok) return;
      setContent(normaliseSiteContent(await res.json()));
    } catch {
      /* keep the snapshot — the site still renders with it */
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  const value = useMemo(() => ({ content, reload }), [content, reload]);
  return (
    <SiteContentContext.Provider value={value}>
      {children}
    </SiteContentContext.Provider>
  );
}

export const useSiteContent = () => useContext(SiteContentContext);

/** t("home.cta.title") → CMS value, or the registry default when blank. */
export function useText() {
  const { content } = useSiteContent();
  return useCallback(
    (key: string): string => {
      const v = content.text[key];
      return v && v.trim() ? v : (TEXT_DEFAULTS[key] ?? "");
    },
    [content.text],
  );
}

export function useStats() {
  const { content } = useSiteContent();
  return (content.stats ?? DEFAULT_STATS).filter(
    (s) => s.enabled && s.value.trim() && s.label.trim(),
  );
}

/** Only testimonials with consent ticked — never anything else. */
export function useTestimonials() {
  const { content } = useSiteContent();
  return content.testimonials.filter(
    (t) => t.consent === true && t.quote.trim() && t.name.trim(),
  );
}

/** Only logos ticked "customer confirmed". */
export function useTrustedLogos() {
  const { content } = useSiteContent();
  return content.trustedBy.filter((l) => l.confirmed === true && l.name.trim());
}

export function useSocialLinks() {
  const { content } = useSiteContent();
  return (content.socialLinks ?? DEFAULT_SOCIAL_LINKS).filter(
    (s) => s.enabled && /^https?:\/\//i.test(s.url),
  );
}

export function useSeoOverride(path: string) {
  const { content } = useSiteContent();
  return content.seo[path];
}
