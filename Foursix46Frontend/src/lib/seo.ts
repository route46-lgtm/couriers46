/* ─────────────────────────────────────────────────────────────────────────────
   src/lib/seo.ts
   Single source of truth for every SEO constant + JSON-LD schema on the site.

   ENTITY MODEL
   ────────────
   Route46 Couriers is NOT a separate legal entity — it is a trading name of
   FourSix46® Global Ltd. So the site-wide node is an Organization (+LocalBusiness)
   with a `parentOrganization` pointing at FourSix46's @id, and deliberately
   carries NO `identifier` / company number of its own.

   Every page-level schema (Service, Article, LocalBusiness, …) references that
   one node by @id instead of re-declaring the company. One entity, many pages.
───────────────────────────────────────────────────────────────────────────── */

export const SITE_URL = "https://www.route46couriers.co.uk";

/** Stable @id of the site-wide Organization node. Reference, never redeclare. */
export const ORG_ID = `${SITE_URL}/#organization`;
/** Stable @id of the WebSite node. */
export const WEBSITE_ID = `${SITE_URL}/#website`;
/** Parent legal entity — FourSix46® Global Ltd. */
export const PARENT_ORG_ID = "https://foursix46.com/#organization";

export const SITE_NAME = "Route46 Couriers";
export const LEGAL_PARENT_NAME = "FourSix46® Global Ltd";
export const LOGO_URL = `${SITE_URL}/route46logo.png`;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/route46logo.png`;
export const TWITTER_HANDLE = "@Route46Couriers";

export const PHONE = "+443301241966";
export const ALT_PHONE = "+447393363802";
export const EMAIL = "operations@route46couriers.co.uk";

export const SAME_AS = [
  "https://www.instagram.com/route46couriers/",
  "https://www.facebook.com/route46couriers/",
  "https://x.com/Route46Couriers",
  "https://www.youtube.com/@Route46Couriers",
  "https://www.tiktok.com/@route46_couriers",
  "https://www.linkedin.com/company/route46-couriers/",
];

/* ── URL helpers ──────────────────────────────────────────────────────────── */

/** Absolute, trailing-slash-free canonical URL for a route path. */
export function canonical(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  const clean =
    withSlash.length > 1 && withSlash.endsWith("/")
      ? withSlash.slice(0, -1)
      : withSlash;
  return `${SITE_URL}${clean}`;
}

/** Coerce a possibly-relative image path into an absolute URL. */
export function absoluteImage(src?: string | null): string {
  if (!src) return DEFAULT_OG_IMAGE;
  if (/^https?:\/\//i.test(src)) return src;
  return `${SITE_URL}${src.startsWith("/") ? src : `/${src}`}`;
}

/* ── Site-wide nodes ──────────────────────────────────────────────────────── */

/**
 * Site-wide Organization + LocalBusiness.
 * Rendered once in RootLayout, so it lands in the <head> of EVERY page.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": ORG_ID,
  name: SITE_NAME,
  alternateName: "Route46",
  description:
    "Same day courier and time-critical logistics service operating across the United Kingdom.",
  url: SITE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  telephone: PHONE,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "66 Paul Street",
    addressLocality: "London",
    postalCode: "EC2A 4NA",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  parentOrganization: { "@id": PARENT_ORG_ID },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: PHONE,
      email: EMAIL,
      areaServed: "GB",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "dispatch",
      telephone: ALT_PHONE,
      areaServed: "GB",
      availableLanguage: "English",
    },
  ],
  sameAs: SAME_AS,
};

/** Site-wide WebSite node, published by the Organization above. */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    "Same day courier and time-critical logistics service operating across the United Kingdom.",
  inLanguage: "en-GB",
  publisher: { "@id": ORG_ID },
};

/* ── Page-level schema builders ───────────────────────────────────────────── */

export type Crumb = { name: string; path: string };

/** BreadcrumbList. Pass the trail WITHOUT "Home" — it is prepended for you. */
export function breadcrumbSchema(trail: Crumb[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: canonical(c.path),
    })),
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description?: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": opts.type || "WebPage",
    "@id": `${canonical(opts.path)}#webpage`,
    url: canonical(opts.path),
    name: opts.name,
    description: opts.description || undefined,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-GB",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description?: string;
  path: string;
  image?: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical(opts.path)}#service`,
    name: opts.name,
    description: opts.description || undefined,
    url: canonical(opts.path),
    image: opts.image ? absoluteImage(opts.image) : undefined,
    serviceType: opts.name,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": opts.areaServed ? "Place" : "Country",
      name: opts.areaServed || "United Kingdom",
    },
  };
}

export function articleSchema(opts: {
  path: string;
  headline: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonical(opts.path)}#article`,
    mainEntityOfPage: canonical(opts.path),
    headline: opts.headline,
    description: opts.description || undefined,
    image: absoluteImage(opts.image),
    datePublished: opts.datePublished || undefined,
    dateModified: opts.dateModified || opts.datePublished || undefined,
    author: opts.authorName
      ? { "@type": "Person", name: opts.authorName }
      : { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-GB",
  };
}

export function itemListSchema(opts: {
  name: string;
  items: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: opts.name,
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: canonical(it.path),
    })),
  };
}

export function jobPostingSchema(opts: {
  path: string;
  title: string;
  description?: string;
  datePosted?: string;
  employmentType?: string;
  location?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "@id": `${canonical(opts.path)}#job`,
    title: opts.title,
    description: opts.description || opts.title,
    datePosted: opts.datePosted || undefined,
    employmentType: opts.employmentType || undefined,
    hiringOrganization: { "@id": ORG_ID },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: opts.location || "United Kingdom",
        addressCountry: "GB",
      },
    },
  };
}

/** Strip undefined values so JSON-LD never ships `"key": undefined`. */
export function clean<T>(schema: T): T {
  return JSON.parse(JSON.stringify(schema));
}
