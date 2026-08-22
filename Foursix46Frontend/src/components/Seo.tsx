/* ─────────────────────────────────────────────────────────────────────────────
   src/components/Seo.tsx
   One component that emits the complete <head> SEO block for a page:
   title, description, canonical, robots, Open Graph, Twitter Card and any
   number of JSON-LD graphs.

   Rendered through react-helmet-async, so vite-react-ssg bakes it straight
   into the static HTML at build time — no client-side hydration needed for
   crawlers to see it.

   Usage:
     <Seo
       title="Same Day Courier Services UK"
       description="…"
       path="/services"
       schemas={[breadcrumbSchema([{ name: "Services", path: "/services" }])]}
     />
───────────────────────────────────────────────────────────────────────────── */

import { Helmet } from "react-helmet-async";
import {
  canonical,
  absoluteImage,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  TWITTER_HANDLE,
  clean,
} from "@/lib/seo";

interface SeoProps {
  /** Page title. " | Route46 Couriers" is appended unless `rawTitle` is set. */
  title: string;
  description?: string;
  /** Route path, e.g. "/services" — used for canonical + og:url. */
  path: string;
  image?: string;
  /** og:type — "website" for pages, "article" for blog posts. */
  type?: "website" | "article";
  /** Set true to keep the page out of the index (thank-you, pay, admin…). */
  noindex?: boolean;
  /** Use the title exactly as given, without the brand suffix. */
  rawTitle?: boolean;
  /** JSON-LD graphs to attach to this page. */
  schemas?: object[];
  /** Extra <head> children if a page needs something bespoke. */
  children?: React.ReactNode;
}

const BRAND_SUFFIX = ` | ${SITE_NAME}`;

export default function Seo({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
  rawTitle = false,
  schemas = [],
  children,
}: SeoProps) {
  const url = canonical(path);
  const fullTitle =
    rawTitle || title.includes(SITE_NAME) ? title : `${title}${BRAND_SUFFIX}`;
  const ogImage = image ? absoluteImage(image) : DEFAULT_OG_IMAGE;

  // No `prioritizeSeoTags` on <Helmet> below: it moves title, description,
  // canonical, og:* and ld+json into helmet's separate `priority` bucket,
  // which vite-react-ssg's head extractor does not read — they would
  // silently vanish from the static HTML.
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      {schemas.filter(Boolean).map((schema, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(clean(schema))}
        </script>
      ))}

      {children}
    </Helmet>
  );
}
