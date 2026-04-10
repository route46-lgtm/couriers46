import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { B as Badge } from "./badge-Bqu1ytSH.js";
import { B as Button } from "./button-CGBOOEAe.js";
import { BookOpen, ArrowLeft, User, Calendar, Tag, Clock, Zap, Map, Timer, MapPin, Network } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { F as Footer } from "./Footer-BW1VuM-V.js";
import { c as cn } from "../../main.mjs";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-BG3FU_wB.js";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "@radix-ui/react-accordion";
const apiUrl = void 0;
const fadeUp = "animate-in fade-in slide-in-from-bottom-5 duration-700 ease-out";
async function loader({ params }) {
  const slug = params.slug;
  if (!slug) return { post: null, related: [], allFaqs: [] };
  try {
    const [postRes, allPostsRes, faqsRes] = await Promise.all([
      fetch(`${apiUrl}/api/blog/${slug}`),
      fetch(`${apiUrl}/api/blog`),
      fetch(`${apiUrl}/api/faqs`)
    ]);
    const post = postRes.ok ? await postRes.json() : null;
    const allPosts = allPostsRes.ok ? await allPostsRes.json() : [];
    const faqsData = faqsRes.ok ? await faqsRes.json() : [];
    const allPostsArr = Array.isArray(allPosts == null ? void 0 : allPosts.data) ? allPosts.data : Array.isArray(allPosts) ? allPosts : [];
    const related = post ? allPostsArr.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3) : [];
    return {
      post: post || null,
      related,
      allFaqs: Array.isArray(faqsData == null ? void 0 : faqsData.data) ? faqsData.data : Array.isArray(faqsData) ? faqsData : []
    };
  } catch {
    return { post: null, related: [], allFaqs: [] };
  }
}
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
function renderBlock(block, i) {
  switch (block.type) {
    case "textSection":
    case "internalLinkSection":
      return /* @__PURE__ */ jsxs("div", { className: "my-6", children: [
        block.heading && /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-black text-[#134467] mt-10 mb-4 leading-tight", children: block.heading }),
        block.body && /* @__PURE__ */ jsx(
          "div",
          {
            className: "text-slate-600 leading-relaxed text-lg prose prose-slate max-w-none prose-a:text-[#E53935] prose-strong:text-[#134467]",
            dangerouslySetInnerHTML: { __html: block.body }
          }
        )
      ] }, i);
    case "bulletSection":
      return /* @__PURE__ */ jsxs("div", { className: "my-6", children: [
        block.heading && /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-[#134467] mb-4", children: block.heading }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 my-5 pl-2", children: (block.items ?? []).map((item, j) => /* @__PURE__ */ jsxs(
          "li",
          {
            className: "flex items-start gap-3 text-slate-600 text-base",
            children: [
              /* @__PURE__ */ jsx("span", { className: "mt-2 w-2 h-2 rounded-full bg-[#E53935] flex-shrink-0" }),
              item
            ]
          },
          j
        )) })
      ] }, i);
    case "imageLeftTextRight":
    case "imageRightTextLeft":
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `my-8 flex flex-col md:flex-row gap-6 items-center ${block.type === "imageRightTextLeft" ? "md:flex-row-reverse" : ""}`,
          children: [
            block.imageUrl && /* @__PURE__ */ jsxs("figure", { className: "md:w-1/2 shrink-0", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: block.imageUrl,
                  alt: block.imageAlt ?? "",
                  className: "w-full rounded-2xl shadow-md object-cover",
                  loading: "lazy"
                }
              ),
              block.imageAlt && /* @__PURE__ */ jsx("figcaption", { className: "text-center text-sm text-slate-400 mt-2", children: block.imageAlt })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "md:w-1/2", children: [
              block.heading && /* @__PURE__ */ jsx("h2", { className: "text-xl font-black text-[#134467] mb-3", children: block.heading }),
              block.body && /* @__PURE__ */ jsx(
                "div",
                {
                  className: "text-slate-600 leading-relaxed prose prose-slate max-w-none",
                  dangerouslySetInnerHTML: { __html: block.body }
                }
              )
            ] })
          ]
        },
        i
      );
    case "calloutCard":
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "my-6 bg-[#134467]/5 border border-[#134467]/15 rounded-2xl p-6",
          children: [
            block.heading && /* @__PURE__ */ jsx("h3", { className: "font-black text-[#134467] text-lg mb-2", children: block.heading }),
            block.body && /* @__PURE__ */ jsx(
              "div",
              {
                className: "text-slate-600 prose prose-sm max-w-none",
                dangerouslySetInnerHTML: { __html: block.body }
              }
            ),
            block.ctaText && block.ctaUrl && /* @__PURE__ */ jsx(
              "a",
              {
                href: block.ctaUrl,
                className: "inline-block mt-4 bg-[#134467] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#0d2f4a] transition-colors",
                children: block.ctaText
              }
            )
          ]
        },
        i
      );
    case "ctaBanner":
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "my-8 bg-gradient-to-r from-[#134467] to-[#0d2f4a] text-white rounded-2xl p-8 text-center",
          children: [
            block.heading && /* @__PURE__ */ jsx("h3", { className: "font-black text-2xl mb-3", children: block.heading }),
            block.body && /* @__PURE__ */ jsx(
              "div",
              {
                className: "text-white/80 mb-5 prose prose-invert max-w-none",
                dangerouslySetInnerHTML: { __html: block.body }
              }
            ),
            block.ctaText && block.ctaUrl && /* @__PURE__ */ jsx(
              "a",
              {
                href: block.ctaUrl,
                className: "inline-block bg-[#E53935] text-white px-8 py-3 rounded-xl font-black hover:bg-[#c62828] transition-colors",
                children: block.ctaText
              }
            )
          ]
        },
        i
      );
    case "quoteBlock":
      return /* @__PURE__ */ jsxs(
        "blockquote",
        {
          className: "border-l-4 border-[#48AEDD] pl-6 py-2 my-6 bg-[#48AEDD]/5 rounded-r-xl",
          children: [
            block.heading && /* @__PURE__ */ jsx("h3", { className: "font-black text-[#134467] mb-2", children: block.heading }),
            /* @__PURE__ */ jsxs("p", { className: "text-slate-700 italic text-lg font-medium leading-relaxed", children: [
              '"',
              block.body,
              '"'
            ] }),
            block.cite && /* @__PURE__ */ jsxs("cite", { className: "text-sm text-slate-400 not-italic mt-2 block", children: [
              "— ",
              block.cite
            ] })
          ]
        },
        i
      );
    case "tableBlock":
      return /* @__PURE__ */ jsxs("div", { className: "my-6 overflow-x-auto", children: [
        block.heading && /* @__PURE__ */ jsx("h2", { className: "text-xl font-black text-[#134467] mb-4", children: block.heading }),
        block.body && /* @__PURE__ */ jsx(
          "div",
          {
            className: "prose prose-slate max-w-none [&_table]:w-full [&_th]:bg-[#134467] [&_th]:text-white [&_th]:p-3 [&_td]:p-3 [&_td]:border [&_td]:border-slate-200 [&_tr:nth-child(even)]:bg-slate-50",
            dangerouslySetInnerHTML: { __html: block.body }
          }
        )
      ] }, i);
    case "faqSection":
      return null;
    default:
      return null;
  }
}
async function entry() {
  try {
    const res = await fetch(`${apiUrl}/api/blogs`);
    const data = await res.json();
    const items = Array.isArray(data == null ? void 0 : data.data) ? data.data : Array.isArray(data) ? data : [];
    return items.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}
function BlogPostPage() {
  var _a, _b, _c, _d, _e;
  const { slug } = useParams();
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const [post, setPost] = useState((loaderData == null ? void 0 : loaderData.post) ?? null);
  const [related, setRelated] = useState((loaderData == null ? void 0 : loaderData.related) ?? []);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(!(loaderData == null ? void 0 : loaderData.post));
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    if ((loaderData == null ? void 0 : loaderData.post) || !slug) return;
    window.scrollTo(0, 0);
    setLoading(true);
    setNotFound(false);
    fetch(`${apiUrl}/api/blog/${slug}`).then((r) => {
      if (!r.ok) {
        setNotFound(true);
        return null;
      }
      return r.json();
    }).then((data) => {
      if (!data) return;
      setPost(data);
      fetch(`${apiUrl}/api/blog`).then((r) => r.json()).then((all) => {
        const arr = Array.isArray(all) ? all : (all == null ? void 0 : all.data) ?? [];
        setRelated(
          arr.filter((p) => p.slug !== slug && p.category === data.category).slice(0, 3)
        );
      }).catch(() => {
      });
    }).catch(() => setNotFound(true)).finally(() => setLoading(false));
  }, [slug, loaderData]);
  useEffect(() => {
    var _a2;
    if (!((_a2 = post == null ? void 0 : post.faqIds) == null ? void 0 : _a2.length)) return;
    const resolveFaqs = async () => {
      var _a3;
      const allFaqs = ((_a3 = loaderData == null ? void 0 : loaderData.allFaqs) == null ? void 0 : _a3.length) ? loaderData.allFaqs : await fetch(`${apiUrl}/api/faqs`).then((r) => r.ok ? r.json() : []).then((d) => (d == null ? void 0 : d.data) || d || []).catch(() => []);
      setFaqs(allFaqs.filter((f) => post.faqIds.includes(f.id)));
    };
    resolveFaqs();
  }, [post, loaderData]);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-16 h-16", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-[#134467]/10" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-t-[#E53935] border-r-[#48AEDD] border-b-[#F5EB18] border-l-transparent animate-spin" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[#134467]/50 text-sm font-semibold tracking-widest uppercase", children: "Loading blog post..." })
    ] }) });
  }
  if (notFound || !post) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center bg-white gap-6 px-4", children: [
      /* @__PURE__ */ jsx(BookOpen, { className: "w-16 h-16 text-slate-200" }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-black text-[#134467]", children: "Post Not Found" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-center max-w-sm", children: "This article doesn't exist or may have been removed." }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          onClick: () => navigate("/blog"),
          className: "bg-[#134467] hover:bg-[#0d2f4a] text-white",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
            " Back to Blog"
          ]
        }
      )
    ] });
  }
  const canonicalUrl = `https://www.route46couriers.co.uk/blog/${post.slug}`;
  const ogImage = post.ogImage || post.featuredImage || "https://www.route46couriers.co.uk/og-default.jpg";
  const formattedDate = post.publishedDate ? new Date(post.publishedDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }) : null;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white font-sans", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        post.seoTitle || post.title,
        " | FourSix46® Blog"
      ] }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: post.seoDescription || post.excerpt || ""
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl }),
      post.noindex && /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex,nofollow" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: post.seoTitle || post.title }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: post.seoDescription || post.excerpt || ""
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonicalUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImage }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "FourSix46® Couriers" }),
      post.publishedDate && /* @__PURE__ */ jsx(
        "meta",
        {
          property: "article:published_time",
          content: post.publishedDate
        }
      ),
      post.updatedAt && /* @__PURE__ */ jsx("meta", { property: "article:modified_time", content: post.updatedAt }),
      post.authorName && /* @__PURE__ */ jsx("meta", { property: "article:author", content: post.authorName }),
      post.category && /* @__PURE__ */ jsx("meta", { property: "article:section", content: post.category }),
      (_a = post.tags) == null ? void 0 : _a.map((tag) => /* @__PURE__ */ jsx("meta", { property: "article:tag", content: tag }, tag)),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: post.seoTitle || post.title }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: post.seoDescription || post.excerpt || ""
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImage }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.seoDescription || post.excerpt || "",
        url: canonicalUrl,
        datePublished: post.publishedDate || "",
        dateModified: post.updatedAt || post.publishedDate || "",
        image: ogImage,
        inLanguage: "en-GB",
        keywords: ((_b = post.tags) == null ? void 0 : _b.join(", ")) || "",
        articleSection: post.category || "Courier News",
        author: {
          "@type": "Person",
          name: post.authorName || "Route46 Editorial Team"
        },
        publisher: {
          "@type": "Organization",
          name: "FourSix46® Couriers",
          url: "https://www.route46couriers.co.uk",
          logo: {
            "@type": "ImageObject",
            url: "https://www.route46couriers.co.uk/logo.png"
          }
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
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
            name: "Blog",
            item: "https://www.route46couriers.co.uk/blog"
          },
          ...post.category ? [
            {
              "@type": "ListItem",
              position: 3,
              name: post.category,
              item: `https://www.route46couriers.co.uk/blog?category=${encodeURIComponent(post.category)}`
            },
            {
              "@type": "ListItem",
              position: 4,
              name: post.title,
              item: canonicalUrl
            }
          ] : [
            {
              "@type": "ListItem",
              position: 3,
              name: post.title,
              item: canonicalUrl
            }
          ]
        ]
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.route46couriers.co.uk/#business",
        name: "FourSix46® Couriers",
        url: "https://www.route46couriers.co.uk",
        telephone: "+447393363802",
        image: "https://www.route46couriers.co.uk/og-default.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "66 Paul Street",
          addressLocality: "London",
          postalCode: "EC2A 4NA",
          addressCountry: "GB"
        },
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
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full h-[420px] md:h-[520px] bg-[#134467] overflow-hidden", children: [
      post.featuredImage ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: post.featuredImage,
            alt: post.title,
            className: "w-full h-full object-cover opacity-40"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#134467] via-[#134467]/60 to-transparent" })
      ] }) : /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#134467] to-[#0d2f4a]", children: /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[400px] h-[400px] bg-[#48AEDD]/10 rounded-full blur-3xl" }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-6 left-6 z-10", children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "ghost",
          onClick: () => navigate("/blog"),
          className: "text-white hover:bg-white/10 gap-2",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Blog"
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 z-10 max-w-4xl mx-auto px-6 pb-10", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "space-y-4",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              post.category && /* @__PURE__ */ jsx(Badge, { className: "bg-[#48AEDD] text-white text-xs font-bold", children: post.category }),
              post.isFeatured && /* @__PURE__ */ jsx(Badge, { className: "bg-[#F5EB18] text-[#134467] text-xs font-bold", children: "★ Featured" })
            ] }),
            /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl", children: post.title }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4 text-sm text-white/70", children: [
              post.authorName && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(User, { className: "w-3.5 h-3.5" }),
                post.authorName
              ] }),
              formattedDate && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "w-3.5 h-3.5" }),
                formattedDate
              ] })
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 py-12", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2, duration: 0.5 },
          children: [
            post.intro && /* @__PURE__ */ jsx(
              "div",
              {
                className: "text-xl text-slate-700 font-medium leading-relaxed mb-8 border-l-4 border-[#E53935] pl-5 prose prose-slate max-w-none",
                dangerouslySetInnerHTML: { __html: post.intro }
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "prose-like", children: (post.contentBlocks ?? []).map(
              (block, i) => renderBlock(block, i)
            ) }),
            post.tags && post.tags.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-slate-100", children: [
              /* @__PURE__ */ jsx(Tag, { className: "w-4 h-4 text-slate-400" }),
              post.tags.map((tag) => /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "outline",
                  className: "text-xs text-[#134467] border-[#134467]/20",
                  children: tag
                },
                tag
              ))
            ] })
          ]
        }
      ),
      ((((_c = post.relatedServiceSlugs) == null ? void 0 : _c.length) ?? 0) > 0 || (((_d = post.relatedLocationSlugs) == null ? void 0 : _d.length) ?? 0) > 0 || (((_e = post.relatedSectorSlugs) == null ? void 0 : _e.length) ?? 0) > 0) && /* @__PURE__ */ jsxs("div", { className: "mt-10 pt-6 border-t border-slate-100 space-y-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-black uppercase tracking-widest text-[#134467]/50", children: "Related Content" }),
        post.relatedServiceSlugs && post.relatedServiceSlugs.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-[#134467] uppercase tracking-wider mb-2", children: "Services" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: post.relatedServiceSlugs.map((slug2) => /* @__PURE__ */ jsx(
            "a",
            {
              href: `/services/${slug2}`,
              className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#134467]/20 text-xs font-semibold text-[#134467] hover:bg-[#134467] hover:text-white transition-colors",
              children: slug2.replace(/-/g, " ")
            },
            slug2
          )) })
        ] }),
        post.relatedLocationSlugs && post.relatedLocationSlugs.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-[#134467] uppercase tracking-wider mb-2", children: "Locations" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: post.relatedLocationSlugs.map((slug2) => /* @__PURE__ */ jsx(
            "a",
            {
              href: `/locations/${slug2}`,
              className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#48AEDD]/30 text-xs font-semibold text-[#48AEDD] hover:bg-[#48AEDD] hover:text-white transition-colors",
              children: slug2.replace(/-/g, " ")
            },
            slug2
          )) })
        ] }),
        post.relatedSectorSlugs && post.relatedSectorSlugs.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-[#134467] uppercase tracking-wider mb-2", children: "Sectors" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: post.relatedSectorSlugs.map((slug2) => /* @__PURE__ */ jsx(
            "a",
            {
              href: `/sectors/${slug2}`,
              className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E53935]/20 text-xs font-semibold text-[#E53935] hover:bg-[#E53935] hover:text-white transition-colors",
              children: slug2.replace(/-/g, " ")
            },
            slug2
          )) })
        ] })
      ] }),
      related.length > 0 && /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.4, duration: 0.5 },
          className: "mt-16",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "w-1 h-6 bg-[#E53935] rounded-full" }),
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-black text-[#134467]", children: "Related Articles" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: related.map((r) => /* @__PURE__ */ jsxs(
              "div",
              {
                onClick: () => navigate(`/blog/${r.slug}`),
                className: "group cursor-pointer rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "h-36 bg-slate-100 overflow-hidden", children: r.featuredImage ? /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: r.featuredImage,
                      alt: r.title,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    }
                  ) : /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-br from-[#134467]/10 to-[#48AEDD]/20" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-[#134467] line-clamp-2 group-hover:text-[#E53935] transition-colors", children: r.title }),
                    r.publishedDate && /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: new Date(r.publishedDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric"
                    }) })
                  ] })
                ]
              },
              r.id
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-12 pt-8 border-t border-slate-100 flex justify-center", children: /* @__PURE__ */ jsxs(
        Button,
        {
          onClick: () => navigate("/blog"),
          variant: "outline",
          className: "border-[#134467] text-[#134467] hover:bg-[#134467] hover:text-white px-8 py-5 text-base rounded-xl transition-colors",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
            " Back to All Posts"
          ]
        }
      ) })
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
    faqs.length > 0 && /* @__PURE__ */ jsx("section", { className: "py-20 sm:py-24 bg-white border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-5 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block bg-[#134467]/5 text-[#134467] text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full border border-[#134467]/10 mb-5", children: "Got Questions?" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-black text-[#134467] tracking-tight leading-tight", children: post.faqHeading || "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-[#134467]/50 text-sm font-medium", children: "Everything you need to know." })
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
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  BlogPostPage as default,
  entry,
  loader
};
