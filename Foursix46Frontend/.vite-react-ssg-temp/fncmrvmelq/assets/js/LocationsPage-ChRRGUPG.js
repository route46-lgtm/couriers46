import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { Search, MapPin, ArrowRight } from "lucide-react";
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
const COUNTRY_ORDER = ["England", "Wales", "Scotland", "Northern Ireland"];
function LocationsPage() {
  const navigate = useNavigate();
  const [allLocations, setAllLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function fetchLocations() {
      try {
        const res = await fetch(`${apiUrl}/api/locations`);
        if (!res.ok) throw new Error("Failed to fetch locations");
        const json = await res.json();
        const data = json.data || json || [];
        setAllLocations(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Location fetch error:", err);
        setAllLocations([]);
      } finally {
        setLoading(false);
      }
    }
    fetchLocations();
  }, []);
  const publishedLocations = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allLocations.filter((loc) => loc.status === "published").filter((loc) => {
      var _a, _b, _c;
      if (!q) return true;
      return ((_a = loc.name) == null ? void 0 : _a.toLowerCase().includes(q)) || ((_b = loc.postcodeCoverage) == null ? void 0 : _b.toLowerCase().includes(q)) || // ✅ Fix #2 — also search intro and seoDescription
      stripHtml(loc.intro ?? "").toLowerCase().includes(q) || ((_c = loc.seoDescription) == null ? void 0 : _c.toLowerCase().includes(q));
    }).sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  }, [allLocations, search]);
  const { groupedByCountry, hasGroups } = useMemo(() => {
    const grouped = COUNTRY_ORDER.reduce(
      (acc, country) => {
        const locs = publishedLocations.filter(
          (loc) => loc.country === country
        );
        if (locs.length > 0) acc[country] = locs;
        return acc;
      },
      {}
    );
    const uncategorised = publishedLocations.filter(
      (loc) => !loc.country || !COUNTRY_ORDER.includes(loc.country)
    );
    if (uncategorised.length > 0) grouped["Other"] = uncategorised;
    return {
      groupedByCountry: grouped,
      hasGroups: Object.keys(grouped).length > 0
    };
  }, [publishedLocations]);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-16 h-16", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-[#134467]/10" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-t-[#E53935] border-r-[#48AEDD] border-b-[#F5EB18] border-l-transparent animate-spin" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[#134467]/50 text-sm font-semibold tracking-widest uppercase", children: "Loading locations..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white font-sans", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Locations We Serve | FourSix46®" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Explore cities and regions where FourSix46® provides reliable same-day courier services across the UK mainland."
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: "https://www.route46couriers.co.uk/locations"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Locations We Serve | FourSix46®" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Explore cities and regions where FourSix46® provides reliable same-day courier services across the UK mainland."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: "https://www.route46couriers.co.uk/locations"
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
            name: "Locations",
            item: "https://www.route46couriers.co.uk/locations"
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "pt-24 pb-16 text-center", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 max-w-5xl", children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          className: cn(
            "inline-block py-1.5 px-4 rounded-full bg-[#F5EB18] text-[#134467] font-black text-xs uppercase tracking-widest mb-6",
            fadeInUp
          ),
          children: "Nationwide Courier Coverage"
        }
      ),
      /* @__PURE__ */ jsxs(
        "h1",
        {
          className: cn(
            "text-5xl sm:text-6xl font-extrabold text-[#48AEDD] mb-6",
            fadeInUp
          ),
          children: [
            "Our ",
            /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "Locations" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-[#134467]/80 max-w-3xl mx-auto leading-relaxed", children: "Our courier network covers major cities and business hubs across the UK, providing reliable same-day and urgent delivery services." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container mx-auto px-6 pb-8 max-w-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Search by city, postcode or description...",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50\n              focus:outline-none focus:ring-2 focus:ring-[#48AEDD]/40 text-sm"
          }
        )
      ] }),
      search.trim() && /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-2 text-center", children: [
        publishedLocations.length,
        " result",
        publishedLocations.length !== 1 ? "s" : "",
        ' for "',
        search,
        '"'
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container mx-auto px-6 pb-24", children: !hasGroups ? /* @__PURE__ */ jsxs("div", { className: "text-center py-20", children: [
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg font-medium", children: search.trim() ? `No locations found for "${search}"` : "No locations available yet." }),
      search.trim() && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setSearch(""),
          className: "mt-4 text-sm text-[#48AEDD] underline underline-offset-2",
          children: "Clear search"
        }
      )
    ] }) : /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto space-y-16", children: Object.entries(groupedByCountry).map(([country, locs]) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#134467] mb-6 pb-2 border-b-2 border-[#F1C40F]", children: country }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: locs.map((location, index) => {
        const previewText = location.intro ? stripHtml(location.intro) : location.seoDescription || "";
        return /* @__PURE__ */ jsxs(
          "div",
          {
            onClick: () => navigate(`/locations/${location.slug}`),
            className: cn(
              "cursor-pointer group bg-white border border-slate-200 rounded-[2.5rem] p-8",
              "hover:shadow-xl hover:-translate-y-1 transition-all duration-500",
              fadeInUp
            ),
            style: { animationDelay: `${index * 80}ms` },
            children: [
              location.heroImage && /* @__PURE__ */ jsx(
                "img",
                {
                  src: location.heroImage,
                  alt: location.name,
                  className: "w-full h-36 object-cover rounded-2xl mb-5",
                  onError: (e) => e.currentTarget.style.display = "none"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx(
                  MapPin,
                  {
                    className: "text-[#E53935] flex-shrink-0",
                    size: 20
                  }
                ),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-[#134467] group-hover:text-[#E53935] transition leading-tight", children: location.name })
              ] }),
              previewText && /* @__PURE__ */ jsx("p", { className: "text-[#134467]/70 mb-5 line-clamp-3 text-sm leading-relaxed", children: previewText }),
              location.postcodeCoverage && /* @__PURE__ */ jsxs("p", { className: "text-xs text-[#134467]/50 mb-4 font-medium", children: [
                "Postcodes:",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-mono", children: location.postcodeCoverage })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[#E53935] font-semibold text-sm", children: [
                "Explore Location",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition" })
              ] })
            ]
          },
          location.slug
        );
      }) })
    ] }, country)) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  LocationsPage as default
};
