import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { Search, ArrowRight } from "lucide-react";
import { c as cn } from "../../main.mjs";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { F as Footer } from "./Footer-BW1VuM-V.js";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
const apiUrl = void 0;
const fadeInUp = "animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out";
function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}
function SectorsPage() {
  const navigate = useNavigate();
  const [allSectors, setAllSectors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function fetchSectors() {
      try {
        const res = await fetch(`${apiUrl}/api/sectors`);
        if (!res.ok) throw new Error("Failed to fetch sectors");
        const json = await res.json();
        const data = json.data || json;
        const published = Array.isArray(data) ? data.filter((s) => s.status === "published").sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0)) : [];
        setAllSectors(published);
      } catch (error) {
        console.error("Sector fetch error:", error);
        setAllSectors([]);
      } finally {
        setLoading(false);
      }
    }
    fetchSectors();
  }, []);
  const sectors = useMemo(() => {
    if (!search.trim()) return allSectors;
    const q = search.toLowerCase();
    return allSectors.filter(
      (s) => {
        var _a, _b, _c;
        return ((_a = s.name) == null ? void 0 : _a.toLowerCase().includes(q)) || ((_b = s.seoDescription) == null ? void 0 : _b.toLowerCase().includes(q)) || ((_c = s.intro) == null ? void 0 : _c.toLowerCase().includes(q));
      }
    );
  }, [allSectors, search]);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-16 h-16", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-[#134467]/10" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-t-[#E53935] border-r-[#48AEDD] border-b-[#F5EB18] border-l-transparent animate-spin" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[#134467]/50 text-sm font-semibold tracking-widest uppercase", children: "Loading sectors..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white font-sans", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Industry Sectors | FourSix46®" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Specialist courier services for dental, aerospace, medical and more industries across the UK."
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: "https://www.route46couriers.co.uk/sectors"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Industry Sectors | FourSix46®" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Specialist courier services for dental, aerospace, medical and more industries across the UK."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: "https://www.route46couriers.co.uk/sectors"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://www.route46couriers.co.uk/og-default.jpg"
        }
      ),
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
            name: "Industry Sectors",
            item: "https://www.route46couriers.co.uk/sectors"
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "pt-24 pb-16 text-center px-5", children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "inline-block bg-[#F5EB18] text-[#134467] text-xs font-black\n          uppercase tracking-widest px-4 py-1.5 rounded-full mb-5",
          children: "Specialist Industry Solutions"
        }
      ),
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl sm:text-6xl font-extrabold text-[#48AEDD]", children: [
        "Industry ",
        /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "Sectors" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg text-[#134467]/80 max-w-2xl mx-auto leading-relaxed", children: "Specialist courier knowledge for every industry we serve across the UK." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "container mx-auto px-6 pb-8 max-w-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Search sectors...",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50\n              focus:outline-none focus:ring-2 focus:ring-[#48AEDD]/40 text-sm"
          }
        )
      ] }),
      search.trim() && /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-2 text-center", children: [
        sectors.length,
        " result",
        sectors.length !== 1 ? "s" : "",
        ' for "',
        search,
        '"'
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container mx-auto px-6 pb-24", children: sectors.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-20", children: [
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg font-medium", children: search ? `No sectors found for "${search}"` : "No sectors available" }),
      search && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setSearch(""),
          className: "mt-4 text-sm text-[#48AEDD] underline underline-offset-2",
          children: "Clear search"
        }
      )
    ] }) : /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: sectors.map((sector, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: () => navigate(`/sectors/${sector.slug}`),
        className: cn(
          "cursor-pointer bg-white border rounded-3xl p-8",
          "hover:shadow-xl transition group",
          fadeInUp
        ),
        style: { animationDelay: `${index * 80}ms` },
        children: [
          sector.heroImage && /* @__PURE__ */ jsx(
            "img",
            {
              src: sector.heroImage,
              alt: sector.name,
              className: "w-full h-36 object-cover rounded-2xl mb-5",
              onError: (e) => e.currentTarget.style.display = "none"
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#134467] mb-3 group-hover:text-[#E53935] transition", children: sector.name }),
          sector.intro && /* @__PURE__ */ jsx("p", { className: "text-[#134467]/70 mb-5 line-clamp-3 text-sm", children: stripHtml(sector.intro) }),
          !sector.intro && sector.seoDescription && /* @__PURE__ */ jsx("p", { className: "text-[#134467]/70 mb-5 line-clamp-3 text-sm", children: sector.seoDescription }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[#E53935] font-semibold text-sm", children: [
            "Explore Sector",
            /* @__PURE__ */ jsx(
              ArrowRight,
              {
                size: 16,
                className: "group-hover:translate-x-1 transition"
              }
            )
          ] })
        ]
      },
      sector.slug
    )) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  SectorsPage as default
};
