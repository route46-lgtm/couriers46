import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ChevronRight, CheckCircle, MapPin, Phone, Timer, Globe, Zap, Clock, Navigation, Network } from "lucide-react";
import { F as Footer } from "./Footer-BW1VuM-V.js";
import { B as BlockRenderer } from "./BlockRenderer-DefJOWpD.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-BG3FU_wB.js";
import "../../main.mjs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "@radix-ui/react-accordion";
const apiUrl = void 0;
const BASE_URL = "https://www.route46couriers.co.uk";
const StatsTrustBar = () => /* @__PURE__ */ jsx("div", { className: "bg-[#0e3352] border-b border-[#48AEDD]/20", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-5 sm:px-6 py-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-12", children: [
  {
    icon: /* @__PURE__ */ jsx(Timer, { className: "w-4 h-4" }),
    text: "Collection Within 60 Mins"
  },
  { icon: /* @__PURE__ */ jsx(Globe, { className: "w-4 h-4" }), text: "UK Mainland Coverage" },
  { icon: /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4" }), text: "Same Day Delivery" }
].map(({ icon, text }) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: "flex items-center gap-2 text-white/90 text-sm font-bold",
    children: [
      /* @__PURE__ */ jsx("span", { className: "text-[#F5EB18]", children: icon }),
      text
    ]
  },
  text
)) }) }) });
const HOW_IT_WORKS_STEPS = [
  {
    n: 1,
    title: "Request a Quote",
    desc: "Submit pickup and delivery details online."
  },
  {
    n: 2,
    title: "Courier Assigned",
    desc: "A professional driver is dispatched quickly."
  },
  {
    n: 3,
    title: "Collection",
    desc: "Goods or documents are collected securely."
  },
  {
    n: 4,
    title: "Direct Delivery",
    desc: "Items are transported directly to the destination."
  },
  {
    n: 5,
    title: "Confirmation",
    desc: "Delivery confirmation and proof of delivery provided."
  }
];
const HowOurNetworkWorks = () => /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-20 bg-slate-50 border-y border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-5 sm:px-6", children: [
  /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: "inline-block bg-[#134467]/5 text-[#134467] text-xs font-black\n          uppercase tracking-widest px-4 py-1.5 rounded-full border\n          border-[#134467]/10 mb-4",
        children: "Our Process"
      }
    ),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-black text-[#134467]", children: "How Our Courier Network Works" })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5\n          bg-gradient-to-r from-[#48AEDD]/20 via-[#48AEDD]/60 to-[#48AEDD]/20"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4", children: HOW_IT_WORKS_STEPS.map(({ n, title, desc }) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col items-center text-center relative",
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-16 h-16 rounded-full bg-[#134467] text-white font-black\n                text-xl flex items-center justify-center mb-4 shadow-lg\n                ring-4 ring-white relative z-10 flex-shrink-0",
              children: n
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "font-black text-[#134467] text-sm sm:text-base mb-2", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm leading-relaxed", children: desc })
        ]
      },
      n
    )) })
  ] })
] }) });
const WHY_CHOOSE_CARDS = [
  {
    Icon: Clock,
    label: "Available 24/7",
    title: "24/7 Courier Support",
    desc: "Our courier operations run 24 hours a day, 7 days a week to handle urgent deliveries whenever they arise. Whether you need late-night document transport or early morning collections, our dedicated courier network is always ready to respond."
  },
  {
    Icon: Zap,
    label: "Same Day Transport",
    title: "Same Day Courier Delivery",
    desc: "Route46 Couriers provides reliable same day courier services across the UK. Our dedicated drivers collect your shipment and transport it directly to the destination without unnecessary stops or hub delays."
  },
  {
    Icon: Globe,
    label: "Nationwide Coverage",
    title: "Across the UK Mainland",
    desc: "Our courier network covers cities, towns, and business districts across the UK mainland. From London and Birmingham to Cardiff, Manchester, and beyond, we ensure dependable transport wherever your delivery needs to go."
  },
  {
    Icon: Timer,
    label: "Rapid Dispatch",
    title: "Collection Within 60 Minutes",
    desc: "For urgent deliveries, our courier drivers can often collect shipments within 60 minutes depending on location and availability. This rapid response ensures time-sensitive documents, parcels, or goods move immediately."
  },
  {
    Icon: Navigation,
    label: "Real-Time Visibility",
    title: "Live GPS Delivery Tracking",
    desc: "Every delivery is supported by real-time tracking and delivery confirmation. Our system provides visibility from collection to delivery, ensuring transparency and confidence for both businesses and individual customers."
  },
  {
    Icon: Network,
    label: "Specialist Deliveries",
    title: "Industries & Courier Services",
    desc: "Route46 Couriers supports a wide range of industries including legal, medical, corporate, aviation, and e-commerce. From passport deliveries and legal documents to urgent parcels and specialist freight, our services are designed to meet diverse business needs."
  }
];
const WhyChooseSection = () => /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-5 sm:px-6", children: [
  /* @__PURE__ */ jsxs("div", { className: "text-center mb-10 sm:mb-14", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: "inline-block bg-[#134467]/5 text-[#134467] text-xs font-black\n          uppercase tracking-widest px-4 py-1.5 rounded-full border\n          border-[#134467]/10 mb-4",
        children: "Why Route46"
      }
    ),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-black text-[#134467] mb-3", children: "Why Choose Route46 Couriers" }),
    /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed", children: "Fast, secure and professional courier solutions across the UK mainland for urgent documents, parcels, pallets and specialist deliveries." })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6", children: WHY_CHOOSE_CARDS.map(({ Icon, label, title, desc }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "bg-slate-50 border border-slate-100 rounded-2xl p-6\n              hover:shadow-md hover:-translate-y-0.5 transition-all duration-200",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-10 h-10 rounded-xl bg-[#134467] flex items-center\n                justify-center flex-shrink-0",
              children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-[#F5EB18]" })
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#48AEDD]", children: label })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-black text-[#134467] text-base mb-2", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm leading-relaxed", children: desc })
      ]
    },
    title
  )) })
] }) });
const DedicatedCourierNetwork = () => /* @__PURE__ */ jsx("div", { className: "bg-[#134467]/5 border-y border-[#134467]/10 py-8 sm:py-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto px-5 sm:px-6 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-[#134467] font-semibold text-base sm:text-lg leading-relaxed", children: "Route46 Couriers provides reliable same-day transport across the UK with access to thousands of verified drivers and vehicles through our extended courier network, ensuring fast collection, secure handling, and true nationwide delivery coverage." }) }) });
async function entry() {
  try {
    const [locRes, svcRes] = await Promise.all([
      fetch(`${apiUrl}/api/locations`),
      fetch(`${apiUrl}/api/services`)
    ]);
    const locations = await locRes.json();
    const services = await svcRes.json();
    const locs = Array.isArray(locations == null ? void 0 : locations.data) ? locations.data : [];
    const svcs = Array.isArray(services == null ? void 0 : services.data) ? services.data : [];
    return locs.flatMap(
      (l) => svcs.map((s) => ({
        locationSlug: l.slug,
        serviceSlug: s.slug
      }))
    );
  } catch {
    return [];
  }
}
async function loader({ params }) {
  const { locationSlug, serviceSlug } = params;
  if (!locationSlug || !serviceSlug)
    return { location: null, service: null, allFaqs: [] };
  try {
    const [locationRes, serviceRes, faqsRes] = await Promise.all([
      fetch(`${apiUrl}/api/locations/${locationSlug}`),
      fetch(`${apiUrl}/api/services/${serviceSlug}`),
      fetch(`${apiUrl}/api/faqs`)
    ]);
    const locationData = locationRes.ok ? await locationRes.json() : null;
    const serviceData = serviceRes.ok ? await serviceRes.json() : null;
    const faqsData = faqsRes.ok ? await faqsRes.json() : [];
    return {
      location: (locationData == null ? void 0 : locationData.data) || locationData || null,
      service: (serviceData == null ? void 0 : serviceData.data) || serviceData || null,
      allFaqs: Array.isArray(faqsData == null ? void 0 : faqsData.data) ? faqsData.data : Array.isArray(faqsData) ? faqsData : []
    };
  } catch {
    return { location: null, service: null, allFaqs: [] };
  }
}
function LocationServicePage() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const { locationSlug, serviceSlug } = useParams();
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const [page, setPage] = useState(
    (loaderData == null ? void 0 : loaderData.location) ? { ...loaderData.location, service: loaderData.service } : null
  );
  const [loading, setLoading] = useState(!(loaderData == null ? void 0 : loaderData.location));
  const [notFound, setNotFound] = useState(false);
  const [fetchedFaqs, setFetchedFaqs] = useState(
    (loaderData == null ? void 0 : loaderData.allFaqs) ?? []
  );
  useEffect(() => {
    if (loaderData == null ? void 0 : loaderData.location) return;
    if (!locationSlug || !serviceSlug) return;
    (async () => {
      try {
        setLoading(true);
        setNotFound(false);
        const res = await fetch(
          `${apiUrl}/api/location-services/${locationSlug}/${serviceSlug}`
        );
        if (res.status === 404) {
          setNotFound(true);
          return;
        }
        if (!res.ok) throw new Error("Request failed");
        const json = await res.json();
        setPage(json.data || json);
      } catch (err) {
        console.error("Landing page error:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [locationSlug, serviceSlug]);
  useEffect(() => {
    var _a2, _b2, _c2;
    if (!page) return;
    if (((_a2 = page.faqs) == null ? void 0 : _a2.length) && typeof page.faqs[0] === "object" && page.faqs[0].question) {
      setFetchedFaqs(page.faqs);
      return;
    }
    if (!((_b2 = page.faqIds) == null ? void 0 : _b2.length)) return;
    if ((_c2 = loaderData == null ? void 0 : loaderData.allFaqs) == null ? void 0 : _c2.length) {
      setFetchedFaqs(
        loaderData.allFaqs.filter((f) => page.faqIds.includes(f.id))
      );
      return;
    }
    (async () => {
      try {
        const res = await fetch(`${apiUrl}/api/faqs`);
        if (!res.ok) return;
        const data = await res.json();
        const all = data.data || data;
        setFetchedFaqs(all.filter((f) => page.faqIds.includes(f.id)));
      } catch {
      }
    })();
  }, [page]);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-16 h-16", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-[#134467]/10" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-t-[#E53935] border-r-[#48AEDD] border-b-[#F5EB18] border-l-transparent animate-spin" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[#134467]/50 text-sm font-semibold tracking-widest uppercase", children: "Loading location services details..." })
    ] }) });
  }
  if (notFound || !page || page.status !== "published") {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-1 flex flex-col justify-center items-center gap-4 px-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-[#E53935] uppercase tracking-widest mb-2", children: "404 — Page Not Found" }),
        /* @__PURE__ */ jsx("h1", { className: "text-5xl font-extrabold text-[#134467] mb-3", children: "Oops!" }),
        /* @__PURE__ */ jsx("p", { className: "text-[#134467]/60 text-lg max-w-sm mx-auto mb-8", children: "This location–service page doesn't exist yet or hasn't been published." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => navigate(`/locations/${locationSlug}`),
              className: "flex items-center gap-2 px-6 py-3 bg-[#134467] text-white rounded-full font-semibold hover:bg-[#0d2f4a] transition text-sm",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { size: 14 }),
                "Back to ",
                locationSlug == null ? void 0 : locationSlug.replace(/-/g, " ")
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => navigate(`/services/${serviceSlug}`),
              className: "flex items-center gap-2 px-6 py-3 border-2 border-[#134467] text-[#134467] rounded-full font-semibold hover:bg-[#134467]/5 transition text-sm",
              children: [
                "View Service",
                /* @__PURE__ */ jsx(ChevronRight, { size: 14 })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] });
  }
  const heroImage = page.heroImage || "/route4622.png";
  const canonicalUrl = `${BASE_URL}/locations/${locationSlug}/${serviceSlug}`;
  const proofPoints = page.localProofPoints || [];
  const contentBlocks = page.contentBlocks || [];
  const coverageAreas = page.coverageAreasOverride || [];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white pb-24 lg:pb-0 lg:mr-72", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: page.seoTitle || page.heroTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: page.seoDescription || "" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl }),
      page.noindex && /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex,nofollow" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: page.seoTitle || page.heroTitle }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: page.seoDescription || "" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonicalUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: page.ogImage || `${BASE_URL}/og-default.jpg`
        }
      ),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": canonicalUrl,
        name: page.heroTitle,
        description: page.seoDescription,
        provider: {
          "@type": "CourierService",
          name: "FourSix46®",
          url: BASE_URL
        },
        areaServed: {
          "@type": "Place",
          name: ((_a = page.location) == null ? void 0 : _a.name) || locationSlug
        }
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#business`,
        name: "FourSix46® Couriers",
        url: BASE_URL,
        telephone: "+447393363802",
        image: `${BASE_URL}/og-default.jpg`,
        description: page.seoDescription || "",
        address: {
          "@type": "PostalAddress",
          addressCountry: "GB",
          addressRegion: ((_b = page.location) == null ? void 0 : _b.country) || "England"
        },
        areaServed: {
          "@type": "Place",
          name: ((_c = page.location) == null ? void 0 : _c.name) || locationSlug
        },
        sameAs: [
          "https://www.instagram.com/route46couriers/",
          "https://www.facebook.com/route46couriers/",
          "https://www.linkedin.com/company/foursix46-couriers/"
        ]
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Locations",
            item: `${BASE_URL}/locations`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: ((_d = page.location) == null ? void 0 : _d.name) || locationSlug,
            item: `${BASE_URL}/locations/${locationSlug}`
          },
          {
            "@type": "ListItem",
            position: 4,
            name: ((_e = page.service) == null ? void 0 : _e.name) || serviceSlug,
            item: canonicalUrl
          }
        ]
      }) }),
      fetchedFaqs.length > 0 && /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: fetchedFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer }
        }))
      }) })
    ] }),
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "relative pt-36 pb-28 text-white text-center bg-cover bg-center",
        style: { backgroundImage: `url(${heroImage})` },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[#134467]/80 via-black/55 to-black/70" }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => navigate(`/locations/${locationSlug}`),
              className: "absolute left-6 top-28 z-20 flex items-center gap-2 text-white/80 hover:text-[#48AEDD] transition text-sm font-medium",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { size: 15 }),
                /* @__PURE__ */ jsx("span", { className: "capitalize", children: ((_f = page.location) == null ? void 0 : _f.name) || (locationSlug == null ? void 0 : locationSlug.replace(/-/g, " ")) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-6", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "inline-block mb-4 px-4 py-1.5 rounded-full\n            bg-[#F5EB18] text-[#134467] text-xs font-black uppercase tracking-widest",
                children: "Trusted UK Courier Network"
              }
            ),
            /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5", children: page.heroTitle }),
            page.heroSubtitle && /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-white/80 max-w-2xl mx-auto", children: page.heroSubtitle }),
            /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => navigate(page.ctaPrimaryLink || "/quick-quote"),
                className: "inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c0392b]\n                text-white font-bold px-8 py-4 rounded-full text-base transition\n                shadow-lg shadow-red-800/30",
                children: [
                  page.ctaPrimaryText || "Get a Quote",
                  /* @__PURE__ */ jsx(ChevronRight, { size: 18 })
                ]
              }
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(StatsTrustBar, {}),
    /* @__PURE__ */ jsx("nav", { className: "border-b border-slate-100 bg-slate-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 py-3", children: /* @__PURE__ */ jsxs("ol", { className: "flex items-center gap-1.5 text-xs text-[#134467]/50 flex-wrap", children: [
      /* @__PURE__ */ jsx(
        "li",
        {
          onClick: () => navigate("/"),
          className: "cursor-pointer hover:text-[#134467] transition",
          children: "Home"
        }
      ),
      /* @__PURE__ */ jsx(ChevronRight, { size: 11 }),
      /* @__PURE__ */ jsx(
        "li",
        {
          onClick: () => navigate("/locations"),
          className: "cursor-pointer hover:text-[#134467] transition",
          children: "Locations"
        }
      ),
      /* @__PURE__ */ jsx(ChevronRight, { size: 11 }),
      /* @__PURE__ */ jsx(
        "li",
        {
          onClick: () => navigate(`/locations/${locationSlug}`),
          className: "cursor-pointer hover:text-[#134467] capitalize transition",
          children: ((_g = page.location) == null ? void 0 : _g.name) || (locationSlug == null ? void 0 : locationSlug.replace(/-/g, " "))
        }
      ),
      /* @__PURE__ */ jsx(ChevronRight, { size: 11 }),
      /* @__PURE__ */ jsx("li", { className: "text-[#134467] font-semibold capitalize", children: ((_h = page.service) == null ? void 0 : _h.name) || (serviceSlug == null ? void 0 : serviceSlug.replace(/-/g, " ")) })
    ] }) }) }),
    page.intro && /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 max-w-4xl", children: /* @__PURE__ */ jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: page.intro },
        className: "text-[#134467]/80 prose prose-lg max-w-none\n                prose-headings:text-[#134467] prose-headings:font-extrabold\n                prose-a:text-[#48AEDD] prose-strong:text-[#134467]"
      }
    ) }) }),
    contentBlocks.length > 0 && /* @__PURE__ */ jsx("section", { className: "py-16 px-6", children: /* @__PURE__ */ jsx(BlockRenderer, { blocks: contentBlocks }) }),
    /* @__PURE__ */ jsx(HowOurNetworkWorks, {}),
    /* @__PURE__ */ jsx(WhyChooseSection, {}),
    proofPoints.length > 0 && /* @__PURE__ */ jsx("section", { className: "bg-[#134467] py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 max-w-5xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-bold uppercase tracking-widest text-[#48AEDD] mb-2", children: "Why Choose Us" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-white", children: "Our Service Guarantee" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: proofPoints.map((p, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex gap-4 items-start bg-white/5 border border-white/10\n                    rounded-2xl p-6 hover:bg-white/10 transition",
          children: [
            /* @__PURE__ */ jsx(
              CheckCircle,
              {
                className: "text-[#48AEDD] flex-shrink-0 mt-0.5",
                size: 22
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-1 text-base", children: p.title }),
              /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm leading-relaxed", children: p.description })
            ] })
          ]
        },
        i
      )) })
    ] }) }),
    coverageAreas.length > 0 && /* @__PURE__ */ jsx("section", { className: "py-14 bg-slate-50 border-y border-slate-100", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 max-w-5xl", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:w-64 flex-shrink-0", children: [
        /* @__PURE__ */ jsx("span", { className: "block text-xs font-bold uppercase tracking-widest text-[#E53935] mb-1", children: "Nationwide Courier Coverage" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-extrabold text-[#134467]", children: "Popular UK Courier Locations" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2.5", children: coverageAreas.map((area, i) => /* @__PURE__ */ jsxs(
        "span",
        {
          className: "flex items-center gap-1.5 px-4 py-2 bg-white border\n                      border-[#48AEDD]/30 text-[#134467] rounded-full text-sm font-medium\n                      shadow-sm hover:border-[#48AEDD] hover:bg-[#48AEDD]/5 transition",
          children: [
            /* @__PURE__ */ jsx(MapPin, { size: 12, className: "text-[#E53935]" }),
            area
          ]
        },
        i
      )) })
    ] }) }) }),
    page.serviceDetailsOverride && /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 max-w-4xl", children: /* @__PURE__ */ jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: page.serviceDetailsOverride },
        className: "prose prose-lg max-w-none text-[#134467]/80\n                prose-headings:text-[#134467] prose-headings:font-extrabold\n                prose-a:text-[#48AEDD] prose-strong:text-[#134467]\n                prose-li:marker:text-[#E53935]"
      }
    ) }) }),
    fetchedFaqs.length > 0 && /* @__PURE__ */ jsx("section", { className: "bg-slate-50 border-t border-slate-100 py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 max-w-4xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-bold uppercase tracking-widest text-[#E53935] mb-2", children: "Got Questions?" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-[#134467]", children: page.faqHeading || "Frequently Asked Questions" })
      ] }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: fetchedFaqs.map((faq, i) => /* @__PURE__ */ jsxs(
        AccordionItem,
        {
          value: `faq-${i}`,
          className: "bg-white border border-slate-200 rounded-xl px-2 shadow-sm\n                    data-[state=open]:border-[#48AEDD]/40 data-[state=open]:shadow-md transition-all",
          children: [
            /* @__PURE__ */ jsx(
              AccordionTrigger,
              {
                className: "text-[#134467] font-semibold text-left px-4 py-4\n                    hover:no-underline hover:text-[#E53935] transition",
                children: faq.question
              }
            ),
            /* @__PURE__ */ jsx(AccordionContent, { className: "px-4 pb-4", children: /* @__PURE__ */ jsx(
              "div",
              {
                dangerouslySetInnerHTML: { __html: faq.answer },
                className: "prose prose-sm max-w-none text-[#134467]/70\n                        prose-a:text-[#48AEDD] prose-strong:text-[#134467]"
              }
            ) })
          ]
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(DedicatedCourierNetwork, {}),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-br from-[#134467] to-[#0d2f4a] py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 max-w-3xl text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-bold uppercase tracking-widest text-[#48AEDD] mb-3", children: "Ready to Book?" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-extrabold text-white mb-4", children: [
        "Need",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD]", children: ((_i = page.service) == null ? void 0 : _i.name) || (serviceSlug == null ? void 0 : serviceSlug.replace(/-/g, " ")) }),
        " ",
        "in",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-[#F5EB18]", children: ((_j = page.location) == null ? void 0 : _j.name) || (locationSlug == null ? void 0 : locationSlug.replace(/-/g, " ")) }),
        "?"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white/60 mb-8 text-lg", children: "Get a fast, no-obligation quote from FourSix46® couriers." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => navigate(page.ctaPrimaryLink || "/quick-quote"),
            className: "inline-flex items-center justify-center gap-2 bg-[#E53935]\n                hover:bg-[#c0392b] text-white font-bold px-10 py-4 rounded-full\n                text-lg transition shadow-lg shadow-red-900/40",
            children: [
              page.ctaPrimaryText || "Get a Free Quote",
              /* @__PURE__ */ jsx(ChevronRight, { size: 20 })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+447393363802",
            className: "inline-flex items-center justify-center gap-2 border-2\n                border-white/30 hover:border-white text-white font-bold px-10 py-4\n                rounded-full text-lg transition",
            children: [
              /* @__PURE__ */ jsx(Phone, { size: 18 }),
              "Call Us Now"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  LocationServicePage as default,
  entry,
  loader
};
