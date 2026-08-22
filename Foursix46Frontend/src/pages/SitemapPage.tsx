/* ─────────────────────────────────────────────────────────────────────────────
   src/pages/SitemapPage.tsx  →  /sitemap

   Human-readable sitemap. Every indexable URL on the site, grouped, as real
   crawlable <a href> links.

   It is built from the SAME live API data that feeds /sitemap.xml, so a new
   blog post, service, sector or location shows up here the moment it is
   published — nothing to edit by hand.

   The `loader` below runs at build time under vite-react-ssg, so the links are
   baked into the static HTML (crawlers see them with JavaScript disabled) and
   re-fetched on client-side navigation so the page is never stale.
───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Loader2, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { webPageSchema, breadcrumbSchema, itemListSchema } from "@/lib/seo";

const apiUrl = import.meta.env.VITE_API_URL;

/* ── Types ────────────────────────────────────────────────────────────────── */

export interface SitemapLink {
  name: string;
  path: string;
}

export interface SitemapSection {
  title: string;
  description: string;
  links: SitemapLink[];
}

interface SitemapData {
  sections: SitemapSection[];
}

/* ── Static pages — the hand-curated part of the tree ─────────────────────── */

const MAIN_PAGES: SitemapLink[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Get a Quote", path: "/quick-quote" },
  { name: "For Businesses", path: "/for-businesses" },
  { name: "Become a Driver", path: "/become-driver" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Careers", path: "/careers" },
  { name: "FAQs", path: "/faqs" },
  { name: "Accredited & Trusted", path: "/accredited-trusted" },
];

const LEGAL_PAGES: SitemapLink[] = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Cookies Policy", path: "/cookies" },
  { name: "Refund Policy", path: "/refund-policy" },
];

/* ── Data loading — shared by the SSG loader and the client refresh ───────── */

/** The only fields this page reads off any API record. */
interface ApiRecord {
  id?: string;
  slug?: string;
  name?: string;
  title?: string;
  noindex?: boolean;
  locationSlug?: string;
  serviceSlug?: string;
  locationName?: string;
  serviceName?: string;
}

const asList = (raw: unknown): ApiRecord[] => {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw as ApiRecord[];
  const data = (raw as { data?: unknown }).data;
  if (Array.isArray(data)) return data as ApiRecord[];
  return [];
};

const byName = (a: SitemapLink, b: SitemapLink) => a.name.localeCompare(b.name);

async function getJson(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function buildSitemap(): Promise<SitemapData> {
  const [servicesRaw, sectorsRaw, locationsRaw, blogRaw, careersRaw, comboRaw] =
    await Promise.all([
      getJson(`${apiUrl}/api/services`),
      getJson(`${apiUrl}/api/sectors`),
      getJson(`${apiUrl}/api/locations`),
      getJson(`${apiUrl}/api/blog`),
      getJson(`${apiUrl}/api/careers`),
      getJson(`${apiUrl}/api/location-services`),
    ]);

  const services = asList(servicesRaw).filter((s) => s.slug && !s.noindex);
  const sectors = asList(sectorsRaw).filter((s) => s.slug && !s.noindex);
  const locations = asList(locationsRaw).filter((l) => l.slug && !l.noindex);
  const posts = asList(blogRaw).filter((p) => p.slug && !p.noindex);
  const careers = asList(careersRaw).filter((c) => c.id);

  // Location × service landing pages. Prefer the published list from the API;
  // fall back to the full cross-product, which is what SSG pre-renders.
  const combos = asList(comboRaw).filter(
    (c) => c.locationSlug && c.serviceSlug && !c.noindex,
  );
  const locationServiceLinks: SitemapLink[] = combos.length
    ? combos.map((c) => ({
        name: `${c.serviceName || c.serviceSlug} in ${c.locationName || c.locationSlug}`,
        path: `/locations/${c.locationSlug}/${c.serviceSlug}`,
      }))
    : locations.flatMap((l) =>
        services.map((s) => ({
          name: `${s.name ?? s.slug} in ${l.name ?? l.slug}`,
          path: `/locations/${l.slug}/${s.slug}`,
        })),
      );

  return {
    sections: [
      {
        title: "Main Pages",
        description: "The core of the site — who we are and how to reach us.",
        links: MAIN_PAGES,
      },
      {
        title: "Courier Services",
        description: "Every service we run, from same day to dedicated vehicle.",
        links: services
          .map((s) => ({ name: s.name ?? s.slug!, path: `/services/${s.slug}` }))
          .sort(byName),
      },
      {
        title: "Industry Sectors",
        description: "Specialist courier work by industry.",
        links: sectors
          .map((s) => ({ name: s.name ?? s.slug!, path: `/sectors/${s.slug}` }))
          .sort(byName),
      },
      {
        title: "Locations",
        description: "UK cities and regions we collect from and deliver to.",
        links: locations
          .map((l) => ({ name: l.name ?? l.slug!, path: `/locations/${l.slug}` }))
          .sort(byName),
      },
      {
        title: "Services by Location",
        description: "Each service, in each place we cover.",
        links: locationServiceLinks.sort(byName),
      },
      {
        title: "Blog",
        description: "Guides, industry news and delivery advice.",
        links: [
          { name: "All Blog Posts", path: "/blog" },
          ...posts
            .map((p) => ({ name: p.title ?? p.slug!, path: `/blog/${p.slug}` }))
            .sort(byName),
        ],
      },
      {
        title: "Careers",
        description: "Open roles across driving, operations and office.",
        links: [
          { name: "All Vacancies", path: "/careers" },
          ...careers
            .map((c) => ({ name: c.title ?? c.id!, path: `/careers/${c.id}` }))
            .sort(byName),
        ],
      },
      {
        title: "Legal & Policies",
        description: "The terms your delivery runs under.",
        links: LEGAL_PAGES,
      },
    ].filter((section) => section.links.length > 0),
  };
}

/** SSG loader — bakes the link tree into the static HTML at build time. */
export async function loader() {
  return await buildSitemap();
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function SitemapPage() {
  const loaderData = useLoaderData() as SitemapData | undefined;
  const [data, setData] = useState<SitemapData | null>(loaderData ?? null);
  const [loading, setLoading] = useState(!loaderData);

  // Refresh on the client so a page published since the last build still shows.
  useEffect(() => {
    let cancelled = false;
    buildSitemap()
      .then((fresh) => {
        if (!cancelled) setData(fresh);
      })
      .catch(() => undefined)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const sections = data?.sections ?? [];
  const totalLinks = sections.reduce((n, s) => n + s.links.length, 0);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Seo
        title="Sitemap"
        description="Every page on the Route46 Couriers website in one place — services, industry sectors, UK locations, blog posts and careers."
        path="/sitemap"
        schemas={[
          webPageSchema({
            path: "/sitemap",
            name: "Sitemap",
            description:
              "A complete index of every page on the Route46 Couriers website.",
            type: "CollectionPage",
          }),
          breadcrumbSchema([{ name: "Sitemap", path: "/sitemap" }]),
          sections.length > 0 &&
            itemListSchema({
              name: "Route46 Couriers Sitemap",
              items: sections.flatMap((s) => s.links),
            }),
        ].filter(Boolean) as object[]}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#134467] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#48AEDD]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E53935]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl py-20 sm:py-24">
          <p className="text-[#48AEDD] font-semibold tracking-widest text-xs uppercase mb-4">
            Site Index
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
            Sitemap
          </h1>
          <p className="text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
            Every page on the Route46 Couriers website, in one place. Browse our
            courier services, the industry sectors we serve, the UK locations we
            cover, and everything we have published.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-white/60 text-sm font-medium">
              {totalLinks > 0
                ? `${totalLinks} pages across ${sections.length} sections`
                : "Loading pages…"}
            </span>
            <a
              href="/sitemap.xml"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#48AEDD] hover:text-white transition-colors"
            >
              XML sitemap
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-[#48AEDD] via-[#F5EB18] to-[#E53935]" />
      </section>

      {/* ── LINK TREE ────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-16 sm:py-20">
        {loading && sections.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader2 className="w-8 h-8 text-[#48AEDD] animate-spin" />
            <p className="text-[#134467]/60 font-medium text-sm">
              Building the site index…
            </p>
          </div>
        ) : (
          <div className="grid gap-12 sm:gap-14 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <nav
                key={section.title}
                aria-label={section.title}
                className="break-inside-avoid"
              >
                <h2 className="text-xl font-extrabold text-[#134467] tracking-tight mb-1.5">
                  {section.title}
                </h2>
                <p className="text-xs text-[#134467]/55 font-medium mb-5 leading-relaxed">
                  {section.description}
                </p>
                <div
                  className="h-0.5 w-10 bg-[#E53935] rounded-full mb-5"
                  aria-hidden="true"
                />
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-[#134467]/80 hover:text-[#48AEDD] font-medium transition-colors duration-200 leading-snug inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
