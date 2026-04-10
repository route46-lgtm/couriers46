import { jsx, jsxs } from "react/jsx-runtime";
import React__default, { useState, useEffect } from "react";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import { ArrowLeft, Timer, Map, Zap, Package, Truck, Building2, MapPin, CheckCircle2, ArrowRight, Clock, Network } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { F as Footer } from "./Footer-BW1VuM-V.js";
import { B as BlockRenderer } from "./BlockRenderer-DefJOWpD.js";
import { c as cn } from "../../main.mjs";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-BG3FU_wB.js";
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
async function loader({ params }) {
  const slug = params.slug;
  if (!slug) return { service: null, allFaqs: [] };
  try {
    const [serviceRes, faqsRes] = await Promise.all([
      fetch(`${apiUrl}/api/services/${slug}`),
      fetch(`${apiUrl}/api/faqs`)
    ]);
    const serviceData = serviceRes.ok ? await serviceRes.json() : null;
    const faqsData = faqsRes.ok ? await faqsRes.json() : [];
    return {
      service: (serviceData == null ? void 0 : serviceData.data) || serviceData || null,
      allFaqs: Array.isArray(faqsData == null ? void 0 : faqsData.data) ? faqsData.data : Array.isArray(faqsData) ? faqsData : []
    };
  } catch {
    return { service: null, allFaqs: [] };
  }
}
const fadeUp = "animate-in fade-in slide-in-from-bottom-5 duration-700 ease-out";
const DedicatedCourierNetwork = () => /* @__PURE__ */ jsx("div", { className: "bg-[#134467]/5 border-y border-[#134467]/10 py-8 sm:py-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto px-5 sm:px-6 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-[#134467] font-semibold text-base sm:text-lg leading-[1.85]", children: "Route46 Couriers provides reliable same-day transport across the UK with access to thousands of verified drivers and vehicles through our extended courier network, ensuring fast collection, secure handling, and true nationwide delivery coverage." }) }) });
const WHY_CHOOSE_FEATURES = [
  {
    icon: Clock,
    label: "Available 24/7",
    title: "24/7 Courier Support",
    description: "Our courier operations run 24 hours a day, 7 days a week to handle urgent deliveries whenever they arise. Whether you need late-night document transport or early morning collections, our dedicated courier network is always ready to respond."
  },
  {
    icon: Zap,
    label: "Same Day Transport",
    title: "Same Day Courier Delivery",
    description: "Route46 Couriers provides reliable same day courier services across the UK. Our dedicated drivers collect your shipment and transport it directly to the destination without unnecessary stops or hub delays."
  },
  {
    icon: Map,
    label: "Nationwide Coverage",
    title: "Across the UK Mainland",
    description: "Our courier network covers cities, towns, and business districts across the UK mainland. From London and Birmingham to Cardiff, Manchester, and beyond, we ensure dependable transport wherever your delivery needs to go."
  },
  {
    icon: Timer,
    label: "Rapid Dispatch",
    title: "Collection Within 60 Minutes",
    description: "For urgent deliveries, our courier drivers can often collect shipments within 60 minutes depending on location and availability. This rapid response ensures time-sensitive documents, parcels, or goods move immediately."
  },
  {
    icon: MapPin,
    label: "Real-Time Visibility",
    title: "Live GPS Delivery Tracking",
    description: "Every delivery is supported by real-time tracking and delivery confirmation. Our system provides visibility from collection to delivery, ensuring transparency and confidence for both businesses and individual customers."
  },
  {
    icon: Network,
    label: "Specialist Deliveries",
    title: "Industries & Courier Services",
    description: "Route46 Couriers supports a wide range of industries including legal, medical, corporate, aviation, and e-commerce. From passport deliveries and legal documents to urgent parcels and specialist freight, our services are designed to meet diverse business needs."
  }
];
const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Request a Quote",
    desc: "Submit pickup and delivery details online."
  },
  {
    step: "02",
    title: "Courier Assigned",
    desc: "A professional driver is dispatched quickly."
  },
  {
    step: "03",
    title: "Collection",
    desc: "Goods or documents are collected securely."
  },
  {
    step: "04",
    title: "Direct Delivery",
    desc: "Items are transported directly to the destination."
  },
  {
    step: "05",
    title: "Confirmation",
    desc: "Delivery confirmation and proof of delivery provided."
  }
];
async function entry() {
  try {
    const res = await fetch(`${apiUrl}/api/services`);
    const data = await res.json();
    const services = Array.isArray(data == null ? void 0 : data.data) ? data.data : Array.isArray(data) ? data : [];
    return services.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}
function ServiceDetailPage() {
  var _a;
  const { slug } = useParams();
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const [service, setService] = useState((loaderData == null ? void 0 : loaderData.service) ?? null);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(!(loaderData == null ? void 0 : loaderData.service));
  const [imgError, setImgError] = useState(false);
  useEffect(() => {
    if ((loaderData == null ? void 0 : loaderData.service) || !slug) return;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`${apiUrl}/api/services/${slug}`);
        if (!res.ok) throw new Error("Not found");
        const json = await res.json();
        setService(json.data || json);
      } catch {
        setService(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug, loaderData]);
  useEffect(() => {
    var _a2;
    if (!((_a2 = service == null ? void 0 : service.faqIds) == null ? void 0 : _a2.length)) return;
    const resolveFaqs = async () => {
      var _a3;
      const allFaqs = ((_a3 = loaderData == null ? void 0 : loaderData.allFaqs) == null ? void 0 : _a3.length) ? loaderData.allFaqs : await fetch(`${apiUrl}/api/faqs`).then((r) => r.ok ? r.json() : []).then((d) => (d == null ? void 0 : d.data) || d || []).catch(() => []);
      setFaqs(allFaqs.filter((f) => service.faqIds.includes(f.id)));
    };
    resolveFaqs();
  }, [service, loaderData]);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-16 h-16", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-[#134467]/10" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-t-[#E53935] border-r-[#48AEDD] border-b-[#F5EB18] border-l-transparent animate-spin" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[#134467]/50 text-sm font-semibold tracking-widest uppercase", children: "Loading service details..." })
    ] }) });
  }
  if (!service || service.status !== "published") {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-50 px-5 text-center antialiased", children: [
      /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-full bg-[#48AEDD]/10 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-4xl font-black text-[#48AEDD] tracking-tight", children: "404" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-black text-[#134467] tracking-tight", children: "Service Not Found" }),
        /* @__PURE__ */ jsx("p", { className: "text-[#134467]/50 mt-2 font-medium text-sm", children: "This service doesn't exist or may have been removed." })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => navigate("/services"),
          className: "flex items-center gap-2 bg-[#134467] text-white px-6 py-3 rounded-xl font-black text-sm tracking-wide hover:bg-[#134467]/90 transition",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { size: 16 }),
            " Back to Services"
          ]
        }
      )
    ] });
  }
  const heroImage = !imgError && service.heroImage ? service.heroImage : "/route462.jpeg";
  const canonicalUrl = `https://www.route46couriers.co.uk/services/${slug}`;
  const vehicleTypes = Array.isArray(service.vehicleTypes) ? service.vehicleTypes : [];
  const whatWeCarry = Array.isArray(service.whatWeCarry) ? service.whatWeCarry : [];
  const relatedSectors = service.relatedSectors || [];
  const featuredLocations = service.featuredLocations || [];
  const relatedServices = service.relatedServices || [];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white selection:bg-[#E53935] selection:text-white antialiased", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        service.seoTitle || service.name,
        " | FourSix46®"
      ] }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: service.seoDescription || "" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: service.seoTitle || service.name }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: service.seoDescription || ""
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonicalUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: service.ogImage || "https://www.route46couriers.co.uk/og-default.jpg"
        }
      ),
      service.noindex && /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex,nofollow" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.seoDescription,
        provider: {
          "@type": "Organization",
          name: "Route46",
          url: "https://www.route46couriers.co.uk"
        },
        areaServed: "United Kingdom"
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.route46couriers.co.uk"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Our Services",
            item: "https://www.route46couriers.co.uk/services"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: canonicalUrl
          }
        ]
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.route46couriers.co.uk/#business",
        name: "FourSix46® Couriers",
        url: "https://www.route46couriers.co.uk",
        telephone: "+447393363802",
        image: service.ogImage || "https://www.route46couriers.co.uk/og-default.jpg",
        description: service.seoDescription || "",
        address: { "@type": "PostalAddress", addressCountry: "GB" },
        areaServed: "United Kingdom",
        sameAs: [
          "https://www.instagram.com/route46couriers/",
          "https://www.facebook.com/route46couriers/",
          "https://www.linkedin.com/company/foursix46-couriers/"
        ]
      }) }),
      faqs.length > 0 && /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer }
        }))
      }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[70vh] sm:min-h-[88vh] flex items-end overflow-hidden bg-[#0d2d47]", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: heroImage,
          alt: service.heroTitle || service.name,
          referrerPolicy: "no-referrer",
          onError: () => setImgError(true),
          className: "absolute inset-0 w-full h-full object-cover object-center"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0d2d47] via-[#0d2d47]/65 to-[#0d2d47]/15" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#0d2d47]/85 via-[#0d2d47]/30 to-transparent" }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => navigate("/services"),
          className: "absolute top-20 left-4 sm:left-6 z-20 flex items-center gap-2\n            text-white/90 hover:text-[#F5EB18] text-sm font-bold tracking-wide\n            bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full\n            border border-white/20 transition-all hover:bg-white/20",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { size: 15 }),
            /* @__PURE__ */ jsx("span", { children: "All Services" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pb-20 sm:pb-24 pt-36 sm:pt-32", children: [
        /* @__PURE__ */ jsx("div", { className: cn("mb-5", fadeUp), children: /* @__PURE__ */ jsx("span", { className: "inline-block bg-[#F5EB18] text-[#134467] text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-sm", children: "Trusted UK Courier Network" }) }),
        /* @__PURE__ */ jsx(
          "h1",
          {
            className: cn(
              "text-4xl sm:text-5xl lg:text-[4.5rem] font-black text-white",
              "leading-[1.04] tracking-tight mb-5 max-w-3xl",
              fadeUp
            ),
            children: service.heroTitle || service.name
          }
        ),
        service.heroSubtitle && /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "text-base sm:text-lg text-white/75 max-w-2xl mb-8 leading-[1.85] font-medium",
              fadeUp
            ),
            children: service.heroSubtitle
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: cn("flex flex-wrap gap-2 sm:gap-3 mb-9", fadeUp), children: [
          /* @__PURE__ */ jsx(
            HeroChip,
            {
              icon: /* @__PURE__ */ jsx(Timer, { className: "w-4 h-4 text-[#F5EB18]" }),
              label: "60 Min Collection"
            }
          ),
          /* @__PURE__ */ jsx(
            HeroChip,
            {
              icon: /* @__PURE__ */ jsx(Map, { className: "w-4 h-4 text-[#48AEDD]" }),
              label: "UK Mainland Coverage"
            }
          ),
          /* @__PURE__ */ jsx(
            HeroChip,
            {
              icon: /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 text-[#E53935]" }),
              label: "Same Day Delivery"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => navigate(service.ctaPrimaryLink || "/quick-quote"),
            className: "inline-flex items-center gap-3 bg-[#E53935] hover:bg-[#c0392b]\n              active:scale-95 text-white font-black uppercase tracking-wide\n              px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg\n              shadow-xl shadow-red-900/40 transition-all hover:scale-105\n              w-full sm:w-auto justify-center",
            children: service.ctaPrimaryText || "Get a Quote"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 z-10 pointer-events-none", children: /* @__PURE__ */ jsx(
        "svg",
        {
          viewBox: "0 0 1440 56",
          xmlns: "http://www.w3.org/2000/svg",
          preserveAspectRatio: "none",
          className: "w-full h-10 sm:h-14",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M0 56L1440 56L1440 20C1200 56 960 0 720 20C480 40 240 0 0 20Z",
              fill: "white"
            }
          )
        }
      ) })
    ] }),
    service.intro && /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto py-16 sm:py-20 px-5 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-1.5 h-10 rounded-full bg-gradient-to-b from-[#E53935] to-[#48AEDD]" }),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] font-black uppercase tracking-[0.2em] text-[#48AEDD]", children: "About This Service" })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          dangerouslySetInnerHTML: { __html: service.intro },
          className: "text-lg sm:text-xl text-[#134467]/80 leading-[1.85]\n              prose prose-lg max-w-none\n              prose-p:text-[#134467]/75 prose-p:leading-[1.85] prose-p:font-medium\n              prose-strong:text-[#134467] prose-strong:font-black\n              prose-a:text-[#E53935] prose-a:no-underline hover:prose-a:underline"
        }
      )
    ] }),
    (vehicleTypes.length > 0 || whatWeCarry.length > 0) && /* @__PURE__ */ jsx("section", { className: "py-14 sm:py-16 bg-gradient-to-br from-slate-50 to-blue-50/30 border-y border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-5 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "w-1.5 h-8 rounded-full bg-[#48AEDD]" }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-black text-[#134467] uppercase tracking-[0.12em]", children: "Service Capabilities" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8", children: [
        vehicleTypes.length > 0 && /* @__PURE__ */ jsx(
          TagBlock,
          {
            title: "Vehicle Types",
            icon: /* @__PURE__ */ jsx(Timer, { className: "w-5 h-5 text-[#48AEDD]" }),
            items: vehicleTypes,
            scheme: "blue"
          }
        ),
        whatWeCarry.length > 0 && /* @__PURE__ */ jsx(
          TagBlock,
          {
            title: "What We Carry",
            icon: /* @__PURE__ */ jsx(Package, { className: "w-5 h-5 text-[#E53935]" }),
            items: whatWeCarry,
            scheme: "red"
          }
        )
      ] })
    ] }) }),
    ((_a = service.contentBlocks) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(BlockRenderer, { blocks: service.contentBlocks }) }),
    /* @__PURE__ */ jsxs("section", { className: "bg-[#134467] py-20 sm:py-24 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-[#48AEDD]/10 rounded-full blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E53935]/10 rounded-full blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-5 sm:px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block text-[11px] font-black uppercase tracking-[0.2em] bg-[#F5EB18] text-[#134467] px-5 py-2 rounded-full mb-4 shadow-sm", children: "Trusted UK Courier Network" }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight", children: "How Our Courier Network Works" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4", children: HOW_IT_WORKS.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          i < HOW_IT_WORKS.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-7 left-[65%] w-full h-px bg-gradient-to-r from-white/25 to-transparent z-0" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center text-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-[#E53935] flex items-center justify-center shadow-xl shadow-red-900/40 group-hover:scale-110 group-hover:bg-[#c0392b] transition-all duration-300", children: /* @__PURE__ */ jsx("span", { className: "text-white font-black text-sm tracking-wide", children: item.step }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-white font-black text-sm leading-snug tracking-wide", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-white/50 text-xs leading-relaxed font-medium", children: item.desc })
          ] })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-slate-50/80 py-20 sm:py-24 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-5 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-[11px] font-black uppercase tracking-[0.2em] bg-[#F5EB18] text-[#134467] px-5 py-2 rounded-full mb-5 shadow-sm", children: "Why Route46" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#134467] tracking-tight leading-tight mb-4", children: "Why Choose Route46 Couriers" }),
        /* @__PURE__ */ jsx("p", { className: "text-[#134467]/55 text-base font-medium max-w-2xl mx-auto leading-[1.85]", children: "Fast, secure and professional courier solutions across the UK mainland for urgent documents, parcels, pallets and specialist deliveries." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: WHY_CHOOSE_FEATURES.map((f, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "bg-white p-8 rounded-3xl border border-slate-100",
            "hover:shadow-2xl hover:-translate-y-2 hover:border-[#48AEDD]/25 transition-all duration-300 group",
            fadeUp
          ),
          style: { animationDelay: `${i * 80}ms` },
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-gradient-to-br from-[#134467]/5 to-[#48AEDD]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsx(f.icon, { className: "w-6 h-6 text-[#48AEDD]" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black uppercase tracking-[0.18em] text-[#E53935] mb-2.5 block", children: f.label }),
            /* @__PURE__ */ jsx("h3", { className: "font-black text-[17px] text-[#134467] mb-3 leading-snug tracking-tight group-hover:text-[#E53935] transition-colors duration-200", children: f.title }),
            /* @__PURE__ */ jsx("p", { className: "text-[#134467]/58 text-[13.5px] leading-[1.85] font-medium", children: f.description })
          ]
        },
        i
      )) })
    ] }) }),
    relatedServices.length > 0 && /* @__PURE__ */ jsx(
      CardsHub,
      {
        eyebrow: "Express Delivery Across the UK",
        title: "Same Day Courier Services",
        subtitle: "Explore our specialist courier services designed for urgent deliveries, confidential documents, and time-critical logistics across the UK.",
        items: relatedServices,
        basePath: "/services",
        navigate,
        accentColor: "#48AEDD",
        badgeLabel: "Courier Service",
        FallbackIcon: Truck,
        fallbackGradient: "from-[#134467] via-[#1a5280] to-[#48AEDD]",
        bg: "bg-white",
        entityType: "service"
      }
    ),
    relatedSectors.length > 0 && /* @__PURE__ */ jsx(
      CardsHub,
      {
        eyebrow: "Specialist Industry Solutions",
        title: "Industries We Support",
        subtitle: "Our courier services are trusted by businesses across multiple industries requiring reliable and secure transport solutions.",
        items: relatedSectors,
        basePath: "/sectors",
        navigate,
        accentColor: "#E53935",
        badgeLabel: "Industry Sector",
        FallbackIcon: Building2,
        fallbackGradient: "from-[#E53935] via-[#c0392b] to-[#8b1a1a]",
        bg: "bg-slate-50",
        entityType: "sector"
      }
    ),
    featuredLocations.length > 0 && /* @__PURE__ */ jsx(
      CardsHub,
      {
        eyebrow: "Nationwide Courier Coverage",
        title: "Popular UK Courier Locations",
        subtitle: "Our courier network covers major cities and business hubs across the UK, providing reliable same-day and urgent delivery services.",
        items: featuredLocations,
        basePath: "/locations",
        navigate,
        accentColor: "#134467",
        badgeLabel: "Courier Location",
        FallbackIcon: MapPin,
        fallbackGradient: "from-[#134467] via-[#1a5280] to-[#0d2d47]",
        bg: "bg-white",
        entityType: "location"
      }
    ),
    faqs.length > 0 && /* @__PURE__ */ jsx("section", { className: "py-20 sm:py-24 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-5 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block bg-[#134467]/5 text-[#134467] text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full border border-[#134467]/10 mb-5", children: "Got Questions?" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-black text-[#134467] tracking-tight leading-tight", children: service.faqHeading || "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-[#134467]/50 text-sm font-medium", children: "Everything you need to know about this service." })
      ] }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: faqs.map((faq, i) => /* @__PURE__ */ jsxs(
        AccordionItem,
        {
          value: `faq-${i}`,
          className: cn(
            "border border-slate-100 rounded-2xl overflow-hidden bg-white transition-all shadow-sm",
            "data-[state=open]:border-[#48AEDD] data-[state=open]:shadow-md data-[state=open]:ring-1 data-[state=open]:ring-[#48AEDD]/20"
          ),
          children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "px-5 sm:px-6 py-5 text-left font-bold text-[#134467] hover:no-underline text-[15px] sm:text-base tracking-tight", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "w-7 h-7 rounded-full bg-[#48AEDD]/10 text-[#48AEDD] text-xs font-black flex items-center justify-center flex-shrink-0 tracking-wide", children: String(i + 1).padStart(2, "0") }),
              faq.question
            ] }) }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "px-5 sm:px-6 pb-6 pt-4 border-t border-slate-50", children: /* @__PURE__ */ jsx(
              "div",
              {
                dangerouslySetInnerHTML: { __html: faq.answer },
                className: "prose prose-sm max-w-none\n                        prose-p:text-slate-600 prose-p:leading-[1.85] prose-p:font-medium\n                        prose-strong:text-[#134467] prose-strong:font-black\n                        prose-ul:text-slate-600 prose-li:marker:text-[#E53935]\n                        prose-a:text-[#E53935] prose-a:no-underline hover:prose-a:underline"
              }
            ) })
          ]
        },
        faq.id || i
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(DedicatedCourierNetwork, {}),
    /* @__PURE__ */ jsxs("section", { className: "bg-[#134467] py-20 sm:py-24 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-[#48AEDD]/10 rounded-full blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E53935]/10 rounded-full blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-4xl mx-auto text-center px-5 sm:px-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-5 mb-10", children: [
          "Same Day Dispatch",
          "UK Mainland Coverage",
          "60 Min Collection",
          "24/7 Support"
        ].map((t) => /* @__PURE__ */ jsxs(
          "span",
          {
            className: "flex items-center gap-1.5 text-white/70 text-sm font-semibold",
            children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#F5EB18] flex-shrink-0" }),
              t
            ]
          },
          t
        )) }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4", children: "Need a Same Day Courier Delivery?" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/60 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-[1.85] font-medium", children: "Get an instant quote — same-day dispatch available across the UK mainland." }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => navigate(service.ctaPrimaryLink || "/quick-quote"),
            className: "inline-flex items-center gap-3 bg-[#E53935] hover:bg-[#c0392b]\n              active:scale-95 text-white font-black uppercase tracking-wide\n              px-10 sm:px-14 py-4 sm:py-5 rounded-2xl text-base sm:text-lg\n              shadow-2xl shadow-red-900/40 transition-all hover:scale-105\n              w-full sm:w-auto justify-center",
            children: [
              service.ctaPrimaryText || "Get a Quote",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function HeroChip({ icon, label }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5", children: [
    /* @__PURE__ */ jsx("span", { className: "flex-shrink-0", children: icon }),
    /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-xs sm:text-sm tracking-wide", children: label })
  ] });
}
const TagBlock = ({
  title,
  icon,
  items,
  scheme
}) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-6 border border-slate-100 shadow-sm", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "w-8 h-8 rounded-xl flex items-center justify-center",
          scheme === "blue" ? "bg-blue-50" : "bg-red-50"
        ),
        children: icon
      }
    ),
    /* @__PURE__ */ jsx("h3", { className: "font-black text-sm text-[#134467] uppercase tracking-[0.12em]", children: title })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: items.map((item, i) => /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border transition-colors",
        scheme === "red" ? "bg-red-50 text-red-700 border-red-100 hover:bg-red-100" : "bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100"
      ),
      children: item
    },
    `${item}-${i}`
  )) })
] });
const CardItem = ({
  item,
  basePath,
  navigate,
  accentColor,
  badgeLabel,
  FallbackIcon,
  fallbackGradient,
  index,
  entityType
}) => {
  const [cardImgError, setCardImgError] = React__default.useState(false);
  const [fullData, setFullData] = React__default.useState(null);
  const [fetching, setFetching] = React__default.useState(false);
  const itemSlug = typeof item === "string" ? item : item.slug;
  const name = typeof item === "string" ? item.replace(/-/g, " ") : item.name;
  const hasInlineImage = !!((item == null ? void 0 : item.heroImage) || (item == null ? void 0 : item.featuredImage) || (item == null ? void 0 : item.image));
  React__default.useEffect(() => {
    if (hasInlineImage || !itemSlug || fetching) return;
    setFetching(true);
    const endpoint = entityType === "sector" ? `${apiUrl}/api/sectors/${itemSlug}` : entityType === "location" ? `${apiUrl}/api/locations/${itemSlug}` : `${apiUrl}/api/services/${itemSlug}`;
    fetch(endpoint).then((r) => r.ok ? r.json() : null).then((data) => {
      if (data) setFullData(data.data || data);
    }).catch(() => {
    }).finally(() => setFetching(false));
  }, [itemSlug]);
  const src = fullData || item;
  const rawImage = (src == null ? void 0 : src.heroImage) || (src == null ? void 0 : src.featuredImage) || (src == null ? void 0 : src.image) || null;
  const image = cardImgError ? null : rawImage;
  const description = (src == null ? void 0 : src.heroSubtitle) || (src == null ? void 0 : src.seoDescription) || (src == null ? void 0 : src.description) || null;
  const ctaLabel = entityType === "sector" ? "Explore Sector" : entityType === "location" ? "View Location" : "View Service";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      onClick: () => navigate(`${basePath}/${itemSlug}`),
      className: cn(
        "cursor-pointer group bg-white border border-slate-100 rounded-2xl p-3",
        "hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        fadeUp
      ),
      style: { animationDelay: `${index * 60}ms` },
      children: [
        /* @__PURE__ */ jsx("div", { className: "relative rounded-xl overflow-hidden h-48", children: fetching && !image ? /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 animate-pulse" }) : image ? /* @__PURE__ */ jsx(
          "img",
          {
            src: image,
            alt: name,
            className: "w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out",
            onError: () => setCardImgError(true)
          }
        ) : /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "w-full h-full bg-gradient-to-br flex items-center justify-center",
              fallbackGradient
            ),
            children: /* @__PURE__ */ jsx(FallbackIcon, { className: "w-14 h-14 text-white/20" })
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "px-2 pt-4 pb-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
            /* @__PURE__ */ jsx(
              FallbackIcon,
              {
                className: "w-[18px] h-[18px] flex-shrink-0",
                style: { color: accentColor }
              }
            ),
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "font-black text-[15px] text-[#134467] leading-snug tracking-tight capitalize\n            group-hover:text-[#E53935] transition-colors duration-200",
                children: name
              }
            )
          ] }),
          description && /* @__PURE__ */ jsx("p", { className: "text-[#134467]/55 text-[13px] font-medium leading-[1.7] line-clamp-2 mt-1 mb-3", children: description }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex items-center gap-1.5 mt-2",
              style: { color: accentColor },
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-[12px] font-black uppercase tracking-[0.1em]", children: ctaLabel }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" })
              ]
            }
          )
        ] })
      ]
    }
  );
};
const CardsHub = ({
  eyebrow,
  title,
  subtitle,
  items,
  basePath,
  navigate,
  accentColor,
  badgeLabel,
  FallbackIcon,
  fallbackGradient,
  entityType,
  bg = "bg-white"
}) => /* @__PURE__ */ jsx("section", { className: cn("py-16 sm:py-20 border-t border-slate-100", bg), children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-5 sm:px-6", children: [
  /* @__PURE__ */ jsxs("div", { className: "mb-10 sm:mb-12", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: "inline-block text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-3 shadow-sm",
        style: { background: `${accentColor}18`, color: accentColor },
        children: eyebrow
      }
    ),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-black text-[#134467] tracking-tight leading-tight mb-2", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-[#134467]/55 text-sm sm:text-base font-medium max-w-2xl leading-[1.85]", children: subtitle })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6", children: items.map((item, i) => /* @__PURE__ */ jsx(
    CardItem,
    {
      item,
      basePath,
      navigate,
      accentColor,
      badgeLabel,
      FallbackIcon,
      fallbackGradient,
      entityType,
      index: i
    },
    `${typeof item === "string" ? item : item.slug}-${i}`
  )) })
] }) });
export {
  ServiceDetailPage as default,
  entry,
  loader
};
