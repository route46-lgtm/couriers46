/* ─────────────────────────────────────────────────────────────────────────────
   src/content/siteContent.ts
   Shape + defaults for the "Site Content" CMS (admin → Site Content).

   Everything editable lives in ONE Firestore document, settings/siteContent,
   served by GET /api/site-content and saved by PUT /api/admin/site-content.

   Rules:
     • Every text field has a default here. An empty / missing CMS value falls
       back to that default, so a blank CMS never blanks the site.
     • Testimonials render ONLY when "consent given" is ticked, and the
       "Trusted by" strip ONLY shows logos ticked "customer confirmed".
       The public API also strips the unticked ones, so they never leave the
       server.
     • stats / socialLinks: `undefined` means "never saved" → defaults below.
       An empty array is a deliberate choice → nothing shown.
───────────────────────────────────────────────────────────────────────────── */

export interface StatItem {
  value: string;
  label: string;
  enabled: boolean;
}

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  photo: string;
  consent: boolean;
}

export interface TrustedLogo {
  name: string;
  logo: string;
  confirmed: boolean;
}

export type SocialId =
  | "tiktok"
  | "instagram"
  | "whatsapp"
  | "facebook"
  | "youtube"
  | "linkedin"
  | "x"
  | "crunchbase";

export interface SocialLink {
  id: SocialId;
  label: string;
  url: string;
  enabled: boolean;
}

export interface SeoOverride {
  title?: string;
  description?: string;
}

export interface SiteContent {
  text: Record<string, string>;
  stats?: StatItem[];
  testimonials: Testimonial[];
  trustedBy: TrustedLogo[];
  socialLinks?: SocialLink[];
  seo: Record<string, SeoOverride>;
}

export const EMPTY_SITE_CONTENT: SiteContent = {
  text: {},
  testimonials: [],
  trustedBy: [],
  seo: {},
};

/* ── Defaults ─────────────────────────────────────────────────────────────── */

/** The stats row in the home page call-to-action. Only provable figures. */
export const DEFAULT_STATS: StatItem[] = [
  { value: "24/7", label: "Service operating across the UK", enabled: true },
];

export const CRUNCHBASE_URL =
  "https://www.crunchbase.com/organization/route46-couriers";

export const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  { id: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@route46_couriers", enabled: true },
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/route46couriers/", enabled: true },
  { id: "whatsapp", label: "WhatsApp", url: "https://wa.me/447393363802", enabled: true },
  { id: "facebook", label: "Facebook", url: "https://www.facebook.com/route46couriers/", enabled: true },
  { id: "youtube", label: "YouTube", url: "https://www.youtube.com/@Route46Couriers", enabled: true },
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/company/route46-couriers/", enabled: true },
  { id: "x", label: "X", url: "https://x.com/Route46Couriers", enabled: true },
  { id: "crunchbase", label: "Crunchbase", url: CRUNCHBASE_URL, enabled: true },
];

/* ── Editable page text registry ──────────────────────────────────────────────
   The admin "Page Text" tab is generated from this list, and useText() reads
   its defaults. To make another string editable: add a field here, then
   render it with t("its.key") in the component.
───────────────────────────────────────────────────────────────────────────── */

export interface TextField {
  key: string;
  label: string;
  default: string;
  multiline?: boolean;
}

export interface TextGroup {
  id: string;
  label: string;
  fields: TextField[];
}

const f = (key: string, label: string, def: string, multiline = false): TextField => ({
  key,
  label,
  default: def,
  multiline,
});

export const TEXT_GROUPS: TextGroup[] = [
  {
    id: "home-hero",
    label: "Home — Hero",
    fields: [
      f("home.hero.badge", "Badge", "UK-WIDE COURIER NETWORK"),
      f("home.hero.titleLine1", "Heading line 1", "Same Day Courier"),
      f("home.hero.titleLine2", "Heading line 2 (red)", "Service In UK"),
      f(
        "home.hero.description",
        "Description",
        "Route46 Couriers provides urgent parcel delivery, document transport, and time-critical logistics across the United Kingdom, offers rapid collection, direct delivery, and real-time tracking for businesses and individuals who require fast and secure transport solutions.",
        true,
      ),
      f("home.hero.primaryCta", "Primary button", "Quick Quote"),
      f("home.hero.secondaryCta", "Secondary button", "Join Our Courier Network"),
      f("home.hero.brandTagline", "Brand tagline (desktop)", "The Courier with a difference"),
    ],
  },
  {
    id: "home-highlights",
    label: "Home — Highlights card",
    fields: [
      f("home.highlights.1.title", "Item 1 title", "Same Day Delivery"),
      f("home.highlights.1.text", "Item 1 text", "Urgent courier delivery available across the UK"),
      f("home.highlights.2.title", "Item 2 title", "Live Tracking"),
      f("home.highlights.2.text", "Item 2 text", "Track your shipment in real time with delivery updates"),
      f("home.highlights.3.title", "Item 3 title", "60 Mins Pickup"),
      f("home.highlights.3.text", "Item 3 text", "Courier collection within 60 minutes in major UK cities"),
      f("home.highlights.bannerMain", "Banner (red text)", "On a Mission to cut CO2 Emissions"),
      f("home.highlights.bannerSub", "Banner (small text)", "Upto 30% per Delivery"),
    ],
  },
  {
    id: "home-why",
    label: "Home — Why choose cards",
    fields: [
      f("home.why.1.title", "Card 1 title", "Same Day Delivery"),
      f("home.why.1.description", "Card 1 front", "Fast and reliable same day courier delivery available across the UK for urgent parcels,documents and business shipments", true),
      f("home.why.1.detail", "Card 1 back", "Route46 Couriers provides reliable same day courier services across the UK, ensuring urgent parcels, documents, and business shipments are collected quickly and delivered directly without delays.", true),
      f("home.why.2.title", "Card 2 title", "Live Parcel Tracking"),
      f("home.why.2.description", "Card 2 front", "Track your courier delivery in real time with full visibility from collection to final delivery", true),
      f("home.why.2.detail", "Card 2 back", "Route46 Couriers provides live parcel tracking so customers can monitor their delivery from collection to final destination with complete transparency and real-time updates.", true),
      f("home.why.3.title", "Card 3 title", "60 Minute Collection"),
      f("home.why.3.description", "Card 3 front", "Courier pickup available within 60 minutes in major UK cities for urgent and timecritical deliveries", true),
      f("home.why.3.detail", "Card 3 back", "In most major UK cities, Route46 Couriers can arrange collection within 60 minutes, making it ideal for urgent deliveries, time-sensitive documents, and business logistics.", true),
    ],
  },
  {
    id: "home-driver",
    label: "Home — Driver section",
    fields: [
      f("home.driver.eyebrow", "Eyebrow", "Become a Courier Driver"),
      f("home.driver.title", "Heading", "Driver with Route46 Couriers"),
      f("home.driver.description", "Description", "Join the Route46 Couriers driver network and deliver parcels across the UK with flexible working opportunities. Our courier drivers handle urgent deliveries, business shipments, and same day courier services for customers nationwide.", true),
      f("home.driver.benefit1", "Benefit 1", "Flexible working hours with competitive courier earnings and full operational support.", true),
      f("home.driver.benefit2", "Benefit 2", "Earn money delivering parcels with Route46 Couriers. Driver onboarding, guidance, and insurance support available.", true),
      f("home.driver.benefit3", "Benefit 3", "Dedicated support team helping courier drivers manage deliveries and grow their earning potential.", true),
      f("home.driver.cta", "Button", "Drive with Route46"),
    ],
  },
  {
    id: "home-business",
    label: "Home — Business section",
    fields: [
      f("home.business.eyebrow", "Eyebrow", "Courier Services for Businesses"),
      f("home.business.title", "Heading", "Join Our Courier Network"),
      f("home.business.description", "Description", "Whether you're sending a single parcel or managing regular business deliveries, Route46 Couriers provides reliable same day courier services across the UK. Our courier network supports businesses with urgent shipments, document transport, and time-critical logistics.", true),
      f("home.business.benefit1", "Benefit 1", "Reliable courier delivery solutions designed for businesses that require fast and secure transport.", true),
      f("home.business.benefit2", "Benefit 2", "Flexible courier solutions for businesses with regular delivery requirements.", true),
      f("home.business.benefit3", "Benefit 3", "Trusted courier services helping businesses move parcels, documents, and urgent shipments across the UK.", true),
      f("home.business.cta", "Button", "Join Our Courier Network"),
    ],
  },
  {
    id: "home-quote",
    label: "Home — Instant quote section",
    fields: [
      f("home.quote.eyebrow", "Eyebrow", "INSTANT COURIER QUOTE"),
      f("home.quote.title", "Heading", "Request an Instant Courier Quote Across the UK"),
      f("home.quote.description", "Description", "Route46 Couriers provides fast and reliable courier services across the UK. Request an instant courier quote and arrange collection for urgent parcels, documents, and time-critical deliveries.", true),
      f("home.quote.benefit1", "Benefit 1", "Instant courier quotes with transparent pricing before booking.", true),
      f("home.quote.benefit2", "Benefit 2", "Courier collection available within 60 minutes in most UK cities.", true),
      f("home.quote.benefit3", "Benefit 3", "Suitable for parcels, documents, pallets, and urgent deliveries.", true),
      f("home.quote.cta", "Button", "Quick Quote"),
    ],
  },
  {
    id: "home-commitment",
    label: "Home — Our promise",
    fields: [
      f("home.commitment.eyebrow", "Eyebrow", "Our Promise"),
      f("home.commitment.title", "Heading", "Reliable Same Day Courier Services"),
      f("home.commitment.titleHighlight", "Heading (blue part)", "Across the UK"),
      f("home.commitment.intro", "Intro", "Looking for a reliable same day courier service in the UK? Route46 Couriers provides fast collection and secure delivery for urgent shipments and business logistics.", true),
      f("home.commitment.1", "Point 1", "Same Day Courier Delivery Across the UK"),
      f("home.commitment.2", "Point 2", "Transparent Courier Pricing with No Hidden Charges"),
      f("home.commitment.3", "Point 3", "Professional Courier Drivers and Verified Transport Partners"),
      f("home.commitment.4", "Point 4", "Real-Time Courier Tracking for Every Delivery"),
      f("home.commitment.5", "Point 5", "Courier Collection Within 60 Minutes in Major UK Cities"),
      f("home.commitment.6", "Point 6", "Dedicated 24/7 Customer Support for Urgent Deliveries"),
    ],
  },
  {
    id: "home-social-proof",
    label: "Home — Testimonials & Trusted by headings",
    fields: [
      f("home.trusted.heading", "Trusted by strip heading", "Trusted by Businesses and Industries Across the UK"),
      f("home.testimonials.eyebrow", "Testimonials eyebrow", "Testimonials"),
      f("home.testimonials.title", "Testimonials heading", "What Our Customers Say"),
    ],
  },
  {
    id: "home-cta",
    label: "Home — Final call to action",
    fields: [
      f("home.cta.title", "Heading", "Need a Same Day Courier Delivery?"),
      f(
        "home.cta.body",
        "Text (driver reach)",
        "Route46 Couriers provides fast and reliable courier services across the UK. Through our UK-wide partner network, accessed through Courier Exchange, we handle urgent shipments, business deliveries, and time-critical transport.",
        true,
      ),
      f("home.cta.primary", "Primary button", "Get a Quote Now"),
      f("home.cta.secondary", "Secondary button", "Open Business Account"),
    ],
  },
  {
    id: "careers",
    label: "Careers page",
    fields: [
      f("careers.badge", "Badge", "Join Our Team"),
      f("careers.title", "Heading", "Careers at"),
      f("careers.titleHighlight", "Heading (yellow part)", "Route46"),
      f("careers.subtitle", "Subtitle", "Explore current openings and help us build the logistics network of the future.", true),
      f("careers.emptyTitle", "No openings — title", "No open positions right now."),
      f("careers.emptyText", "No openings — text", "Check back soon, or send us your CV at"),
      f("careers.closedLabel", "Closed job label", "Closed – cannot apply"),
      f("careers.closedNotice", "Closed job notice (job page)", "Applications for this role are now closed. Keep an eye on our careers page for new openings.", true),
    ],
  },
  {
    id: "testimonials-page",
    label: "Testimonials page",
    fields: [
      f("testimonialsPage.eyebrow", "Eyebrow", "What Our Customers Say"),
      f("testimonialsPage.title", "Heading", "Customer Testimonials"),
      f("testimonialsPage.subtitle", "Subtitle", "Feedback shared by Route46 Couriers customers, published with their permission.", true),
      f("testimonialsPage.empty", "Shown when there are no testimonials", "We are collecting verified customer feedback. Please check back soon.", true),
    ],
  },
  {
    id: "footer",
    label: "Footer",
    fields: [
      f("footer.heading", "Heading", "Trusted"),
      f("footer.headingHighlight", "Heading (red part)", "Industry Accreditations"),
      f("footer.intro", "Intro", "Route46 Couriers operates in accordance with recognised UK industry standards. We are fully insured, registered, and committed to maintaining high standards in safety, logistics operations, and data protection.", true),
      f("footer.badge1.title", "Badge 1 title", "Cyber Essentials Certified"),
      f("footer.badge1.text", "Badge 1 text", "Secure and Protected Systems"),
      f("footer.badge2.title", "Badge 2 title", "Fully Insured Courier Services"),
      f("footer.badge2.text", "Badge 2 text", "Public Liability and Goods in Transit Coverage"),
      f("footer.badge3.title", "Badge 3 title", "ICO Registered"),
      f("footer.badge3.text", "Badge 3 text", "Data Protection and Privacy Compliance"),
      f("footer.badge4.title", "Badge 4 title", "Federation of Small Businesses Member"),
      f("footer.badge4.text", "Badge 4 text", "Supporting UK Business Standards"),
      f("footer.badge5.title", "Badge 5 title", "Trustd Verified Business"),
      f("footer.badge5.text", "Badge 5 text", "Fraud Prevention and Identity Verification"),
      f("footer.coverage", "Coverage line", "Route46 Couriers provides same day courier services across the UK, including Cardiff, London, Birmingham, Manchester, and Bristol.", true),
    ],
  },
];

/** Page text fields generated from the page source (scripts/gen-page-text.cjs). */
export interface PageTextField extends TextField {
  /** Nearest heading above this text on the page — used to group the admin. */
  section: string;
}

export interface PageTextGroup {
  id: string;
  label: string;
  path: string;
  fields: PageTextField[];
}

export const TEXT_DEFAULTS: Record<string, string> = Object.fromEntries(
  TEXT_GROUPS.flatMap((g) => g.fields.map((fl) => [fl.key, fl.default])),
);

/* ── SEO pages (static routes) ────────────────────────────────────────────── */

export interface SeoPage {
  path: string;
  label: string;
}

/** Static routes whose title/description can be overridden from the CMS.
    CMS-driven routes (services, sectors, locations, blog) keep their own SEO
    fields in their own editors. Blank = the page's built-in title/description. */
export const SEO_PAGES: SeoPage[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/sectors", label: "Sectors" },
  { path: "/locations", label: "Locations" },
  { path: "/for-businesses", label: "For Businesses" },
  { path: "/become-driver", label: "Become a Driver" },
  { path: "/quick-quote", label: "Quick Quote" },
  { path: "/careers", label: "Careers" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
  { path: "/faqs", label: "FAQs" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/accredited-trusted", label: "Accredited & Trusted" },
  { path: "/privacy", label: "Privacy Policy" },
  { path: "/terms", label: "Terms & Conditions" },
  { path: "/cookies", label: "Cookies Policy" },
  { path: "/refund-policy", label: "Refund Policy" },
  { path: "/sitemap", label: "Sitemap" },
];

/* ── Normalising whatever the API returns ─────────────────────────────────── */

type Obj = Record<string, unknown>;
const str = (v: unknown) => (typeof v === "string" ? v : "");
const obj = (v: unknown): Obj =>
  v && typeof v === "object" && !Array.isArray(v) ? (v as Obj) : {};
const list = (v: unknown): Obj[] | undefined =>
  Array.isArray(v) ? v.map(obj) : undefined;

export function normaliseSiteContent(input: unknown): SiteContent {
  const raw = obj(input);

  const text: Record<string, string> = {};
  for (const [k, v] of Object.entries(obj(raw.text))) {
    if (typeof v === "string") text[k] = v;
  }

  const seo: Record<string, SeoOverride> = {};
  for (const [k, v] of Object.entries(obj(raw.seo))) {
    const o = obj(v);
    seo[k] = { title: str(o.title), description: str(o.description) };
  }

  const stats = list(raw.stats);
  const social = list(raw.socialLinks);

  return {
    text,
    seo,
    stats: stats?.map((s) => ({
      value: str(s.value),
      label: str(s.label),
      enabled: s.enabled !== false,
    })),
    testimonials: (list(raw.testimonials) ?? []).map((t) => ({
      name: str(t.name),
      company: str(t.company),
      quote: str(t.quote),
      photo: str(t.photo),
      consent: t.consent === true,
    })),
    trustedBy: (list(raw.trustedBy) ?? []).map((l) => ({
      name: str(l.name),
      logo: str(l.logo),
      confirmed: l.confirmed === true,
    })),
    socialLinks: social
      ?.map((s) => ({ s, def: DEFAULT_SOCIAL_LINKS.find((d) => d.id === s.id) }))
      .filter((x) => !!x.def)
      .map(({ s, def }) => ({
        id: def!.id,
        label: str(s.label) || def!.label,
        url: str(s.url),
        enabled: s.enabled !== false,
      })),
  };
}
