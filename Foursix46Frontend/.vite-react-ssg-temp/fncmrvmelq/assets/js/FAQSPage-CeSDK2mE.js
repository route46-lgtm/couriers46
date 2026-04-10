import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { Tag, HelpCircle, Search, ChevronDown, MapPin, Package, Truck, CreditCard, RefreshCcw, Shield, Users, UserPlus, HardHat, Smartphone, FileText, AlertTriangle } from "lucide-react";
import { c as cn } from "../../main.mjs";
import { F as Footer } from "./Footer-BW1VuM-V.js";
import { Helmet } from "react-helmet-async";
import "vite-react-ssg";
import "react-router-dom";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
const apiUrl = void 0;
const fadeInUp = "animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-forwards";
const TAG_COLORS = ["#134467", "#48AEDD", "#E53935", "#F5EB18"];
const KNOWN_TAG_META = {
  general: { label: "General", icon: HelpCircle, color: "#134467" },
  booking: { label: "Booking", icon: MapPin, color: "#48AEDD" },
  packaging: { label: "Packaging", icon: Package, color: "#E53935" },
  delivery: { label: "Delivery", icon: Truck, color: "#F5EB18" },
  pricing: { label: "Pricing", icon: CreditCard, color: "#134467" },
  refunds: { label: "Refunds", icon: RefreshCcw, color: "#E53935" },
  insurance: { label: "Insurance", icon: Shield, color: "#48AEDD" },
  damage: { label: "Insurance", icon: Shield, color: "#48AEDD" },
  business: { label: "Business", icon: Users, color: "#134467" },
  shippers: { label: "Business", icon: Users, color: "#134467" },
  drivers: { label: "Drivers", icon: UserPlus, color: "#F5EB18" },
  safety: { label: "Safety", icon: HardHat, color: "#E53935" },
  tech: { label: "Tech", icon: Smartphone, color: "#48AEDD" },
  technology: { label: "Tech", icon: Smartphone, color: "#48AEDD" },
  onboarding: { label: "Onboarding", icon: FileText, color: "#134467" },
  contact: { label: "Support", icon: AlertTriangle, color: "#E53935" },
  support: { label: "Support", icon: AlertTriangle, color: "#E53935" },
  tracking: { label: "Tracking", icon: MapPin, color: "#48AEDD" },
  vehicles: { label: "Vehicles", icon: Truck, color: "#48AEDD" },
  coverage: { label: "Coverage", icon: Shield, color: "#48AEDD" }
};
function FaqPage() {
  const [allFaqs, setAllFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTag, setActiveTag] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestions, setOpenQuestions] = useState([]);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  useEffect(() => {
    async function loadFaqs() {
      try {
        const res = await fetch(`${apiUrl}/api/faqs`);
        if (!res.ok) throw new Error("Failed to fetch FAQs");
        const json = await res.json();
        const data = json.data || json;
        const active = data.filter((f) => f.status === "published").sort((a, b) => Number(a.sortOrder ?? 0) - Number(b.sortOrder ?? 0));
        setAllFaqs(active);
      } catch (err) {
        console.error("FAQ fetch error:", err);
        setAllFaqs([]);
      } finally {
        setLoading(false);
      }
    }
    loadFaqs();
  }, []);
  const tagSections = useMemo(() => {
    const tagMap = /* @__PURE__ */ new Map();
    const generalFaqs = [];
    allFaqs.forEach((faq) => {
      const tags = (faq.tags ?? []).map((t) => t.toLowerCase().trim()).filter(Boolean);
      if (tags.length === 0) {
        generalFaqs.push(faq);
      } else {
        tags.forEach((tag) => {
          if (!tagMap.has(tag)) tagMap.set(tag, []);
          tagMap.get(tag).push(faq);
        });
      }
    });
    const sections = [];
    let colorIdx = 0;
    tagMap.forEach((faqs, tag) => {
      const known = KNOWN_TAG_META[tag];
      const color = (known == null ? void 0 : known.color) ?? TAG_COLORS[colorIdx % TAG_COLORS.length];
      const icon = (known == null ? void 0 : known.icon) ?? Tag;
      const label = (known == null ? void 0 : known.label) ?? tag.charAt(0).toUpperCase() + tag.slice(1);
      colorIdx++;
      sections.push({
        id: tag,
        label,
        icon,
        color,
        questions: [...faqs].sort(
          (a, b) => Number(a.sortOrder ?? 0) - Number(b.sortOrder ?? 0)
        )
      });
    });
    sections.sort((a, b) => a.label.localeCompare(b.label));
    if (generalFaqs.length > 0) {
      sections.unshift({
        id: "general",
        label: "General",
        icon: HelpCircle,
        color: "#134467",
        questions: [...generalFaqs].sort(
          (a, b) => Number(a.sortOrder ?? 0) - Number(b.sortOrder ?? 0)
        )
      });
    }
    return sections;
  }, [allFaqs]);
  useEffect(() => {
    if (tagSections.length === 0) return;
    const ids = tagSections.map((s) => s.id);
    if (!ids.includes(activeTag)) setActiveTag(ids[0]);
  }, [tagSections]);
  const filteredSections = useMemo(() => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return tagSections.map((s) => ({
        ...s,
        questions: s.questions.filter(
          (item) => {
            var _a;
            return item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q) || ((_a = item.tags) == null ? void 0 : _a.some((t) => t.toLowerCase().includes(q)));
          }
        )
      })).filter((s) => s.questions.length > 0);
    }
    return tagSections.filter((s) => s.id === activeTag);
  }, [searchQuery, activeTag, tagSections]);
  const toggleQuestion = (id) => setOpenQuestions(
    (prev) => prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
  );
  const activeSection = tagSections.find((s) => s.id === activeTag);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-slate-50", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 border-4 border-[#48AEDD] border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ jsx("p", { className: "text-[#134467]/60 font-medium", children: "Loading FAQs..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 overflow-x-hidden font-sans selection:bg-[#E53935] selection:text-white", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "FAQs | FourSix46®" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Answers to common questions about FourSix46® courier services, booking, pricing, and policies."
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.route46couriers.co.uk/faqs" }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "FAQs | FourSix46®" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Answers to common questions about FourSix46® courier services, booking, pricing, and policies."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: "https://www.route46couriers.co.uk/faqs"
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
      /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:alt", content: "FourSix46 Couriers – FAQs" }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "en_GB" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "FourSix46 Couriers" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "FAQs | FourSix46®" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Answers to common questions about FourSix46® courier services, booking, pricing, and policies."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:image",
          content: "https://www.route46couriers.co.uk/og-default.jpg"
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image:alt", content: "FourSix46 Couriers – FAQs" }),
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
            name: "FAQs",
            item: "https://www.route46couriers.co.uk/faqs"
          }
        ]
      }) }),
      allFaqs.length > 0 && /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: allFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer.replace(/<[^>]*>/g, "")
          }
        }))
      }) })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        .faq-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        .faq-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .faq-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.1); border-radius: 4px; }
        .faq-scrollbar::-webkit-scrollbar-thumb:hover { background-color: rgba(0,0,0,0.2); }
      ` }),
    /* @__PURE__ */ jsxs("div", { className: "relative pt-24 pb-20 bg-white border-b border-slate-100", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-[#48AEDD]/5 rounded-full blur-3xl -z-10" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E53935]/5 rounded-full blur-3xl -z-10" }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 text-center max-w-4xl relative z-10", children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "inline-block py-1.5 px-4 rounded-full bg-[#134467]/5 text-[#134467] font-bold text-xs sm:text-sm mb-6 tracking-widest uppercase border border-[#134467]/10",
              fadeInUp
            ),
            children: "Help Center"
          }
        ),
        /* @__PURE__ */ jsxs(
          "h1",
          {
            className: cn(
              "text-4xl sm:text-5xl lg:text-6xl font-black text-[#48AEDD] mb-6 tracking-tight",
              fadeInUp
            ),
            children: [
              "Frequently Asked ",
              /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "Questions" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "text-lg text-[#134467]/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium",
              fadeInUp
            ),
            children: "Everything you need to know about our services, booking process, and policies."
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: cn("relative max-w-xl mx-auto", fadeInUp), children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-4 flex items-center pointer-events-none", children: /* @__PURE__ */ jsx(Search, { className: "w-5 h-5 text-gray-400", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "search",
              placeholder: "Search for answers...",
              value: searchQuery,
              onChange: (e) => {
                setSearchQuery(e.target.value);
                setOpenQuestions([]);
              },
              "aria-label": "Search frequently asked questions",
              className: "w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-100 shadow-lg shadow-slate-200/50 focus:border-[#48AEDD] focus:ring-4 focus:ring-[#48AEDD]/10 outline-none transition-all text-slate-700 font-medium placeholder:text-slate-400"
            }
          ),
          searchQuery && /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setSearchQuery(""),
              "aria-label": "Clear search",
              className: "absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-700 transition",
              children: "✕"
            }
          )
        ] }),
        searchQuery && /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm text-[#134467]/50", "aria-live": "polite", children: [
          filteredSections.reduce((n, s) => n + s.questions.length, 0),
          " ",
          "result(s) found"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 py-12 lg:py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12", children: [
      !searchQuery && tagSections.length > 0 && /* @__PURE__ */ jsxs("div", { className: "lg:w-1/4 flex-shrink-0 relative z-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:hidden mb-4", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setIsCategoryMenuOpen(!isCategoryMenuOpen),
              "aria-expanded": isCategoryMenuOpen,
              "aria-controls": "mobile-tag-menu",
              "aria-label": "Select FAQ tag",
              className: "w-full flex items-center justify-between p-4 bg-white border-2 border-slate-100 rounded-2xl shadow-sm text-[#134467] font-bold",
              children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-[#134467]/10 flex items-center justify-center", children: activeSection && /* @__PURE__ */ jsx(
                    activeSection.icon,
                    {
                      className: "w-5 h-5",
                      style: { color: activeSection.color },
                      "aria-hidden": "true"
                    }
                  ) }),
                  (activeSection == null ? void 0 : activeSection.label) ?? "Select Topic"
                ] }),
                /* @__PURE__ */ jsx(
                  ChevronDown,
                  {
                    "aria-hidden": "true",
                    className: cn(
                      "w-5 h-5 transition-transform duration-300",
                      isCategoryMenuOpen ? "rotate-180" : ""
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              id: "mobile-tag-menu",
              role: "listbox",
              "aria-label": "FAQ topics",
              className: cn(
                "absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl max-h-[60vh] overflow-y-auto z-50 p-2 origin-top transition-all duration-300 ease-out",
                isCategoryMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
              ),
              children: tagSections.map((section) => /* @__PURE__ */ jsxs(
                "button",
                {
                  role: "option",
                  "aria-selected": activeTag === section.id,
                  onClick: () => {
                    setActiveTag(section.id);
                    setIsCategoryMenuOpen(false);
                    setOpenQuestions([]);
                  },
                  className: cn(
                    "w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-left mb-1",
                    activeTag === section.id ? "bg-[#134467]/5 text-[#134467] font-bold" : "text-slate-600 hover:bg-slate-50"
                  ),
                  children: [
                    /* @__PURE__ */ jsx(
                      section.icon,
                      {
                        className: "w-5 h-5 flex-shrink-0",
                        "aria-hidden": "true",
                        style: {
                          color: activeTag === section.id ? section.color : "#94a3b8"
                        }
                      }
                    ),
                    section.label,
                    /* @__PURE__ */ jsx("span", { className: "ml-auto text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full", children: section.questions.length })
                  ]
                },
                section.id
              ))
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "nav",
          {
            "aria-label": "FAQ topics",
            className: "hidden lg:block space-y-2 sticky top-24 self-start overflow-y-auto max-h-[70vh] pb-2 faq-scrollbar pr-2",
            children: tagSections.map((section) => /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => {
                  setActiveTag(section.id);
                  setOpenQuestions([]);
                },
                "aria-current": activeTag === section.id ? "true" : void 0,
                className: cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-bold text-sm w-full text-left border border-transparent",
                  activeTag === section.id ? "bg-white shadow-md text-[#134467] border-slate-100 translate-x-2" : "text-slate-500 hover:bg-white/50 hover:text-[#48AEDD]"
                ),
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0",
                      style: {
                        backgroundColor: activeTag === section.id ? `${section.color}20` : "#f1f5f9"
                      },
                      children: /* @__PURE__ */ jsx(
                        section.icon,
                        {
                          className: "w-4 h-4",
                          "aria-hidden": "true",
                          style: {
                            color: activeTag === section.id ? section.color : "#94a3b8"
                          }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "flex-1 capitalize", children: section.label }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      "aria-label": `${section.questions.length} questions`,
                      className: cn(
                        "text-xs px-2 py-0.5 rounded-full",
                        activeTag === section.id ? "bg-[#134467]/10 text-[#134467]" : "bg-slate-100 text-slate-400"
                      ),
                      children: section.questions.length
                    }
                  )
                ]
              },
              section.id
            ))
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("flex-1 space-y-8 min-w-0", searchQuery && "w-full"),
          children: filteredSections.length > 0 ? filteredSections.map((section) => /* @__PURE__ */ jsxs(
            "section",
            {
              "aria-labelledby": `faq-section-${section.id}`,
              className: "animate-in fade-in slide-in-from-bottom-4 duration-500",
              children: [
                (searchQuery || filteredSections.length > 1) && /* @__PURE__ */ jsxs(
                  "h2",
                  {
                    id: `faq-section-${section.id}`,
                    className: "text-xl font-bold text-[#134467] mb-6 flex items-center gap-3 pb-2 border-b border-slate-200",
                    children: [
                      /* @__PURE__ */ jsx(
                        section.icon,
                        {
                          className: "w-5 h-5 flex-shrink-0",
                          "aria-hidden": "true",
                          style: { color: section.color }
                        }
                      ),
                      section.label,
                      " FAQs"
                    ]
                  }
                ),
                !searchQuery && filteredSections.length === 1 && /* @__PURE__ */ jsxs(
                  "h2",
                  {
                    id: `faq-section-${section.id}`,
                    className: "text-xl font-bold text-[#134467] mb-6 flex items-center gap-3 pb-2 border-b border-slate-200",
                    children: [
                      /* @__PURE__ */ jsx(
                        section.icon,
                        {
                          className: "w-5 h-5 flex-shrink-0",
                          "aria-hidden": "true",
                          style: { color: section.color }
                        }
                      ),
                      section.label,
                      " FAQs",
                      /* @__PURE__ */ jsxs("span", { className: "ml-auto text-xs font-medium text-slate-400", children: [
                        section.questions.length,
                        " question",
                        section.questions.length !== 1 ? "s" : ""
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: section.questions.map((item) => {
                  const isOpen = openQuestions.includes(item.id);
                  const answerId = `faq-answer-${item.id}`;
                  const questionId = `faq-question-${item.id}`;
                  return /* @__PURE__ */ jsxs(
                    "div",
                    {
                      itemScope: true,
                      itemType: "https://schema.org/Question",
                      className: cn(
                        "bg-white border rounded-2xl overflow-hidden transition-all duration-300",
                        isOpen ? "border-[#48AEDD] shadow-lg ring-1 ring-[#48AEDD]/20" : "border-slate-100 hover:border-slate-300 shadow-sm"
                      ),
                      children: [
                        /* @__PURE__ */ jsxs(
                          "button",
                          {
                            id: questionId,
                            onClick: () => toggleQuestion(item.id),
                            "aria-expanded": isOpen,
                            "aria-controls": answerId,
                            className: "w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48AEDD] focus-visible:ring-offset-2",
                            children: [
                              /* @__PURE__ */ jsx(
                                "span",
                                {
                                  itemProp: "name",
                                  className: cn(
                                    "font-bold text-base sm:text-lg pr-4 leading-snug",
                                    isOpen ? "text-[#134467]" : "text-slate-700"
                                  ),
                                  children: item.question
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                "div",
                                {
                                  "aria-hidden": "true",
                                  className: cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0",
                                    isOpen ? "bg-[#E53935] text-white rotate-180" : "bg-slate-100 text-slate-400"
                                  ),
                                  children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5" })
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            id: answerId,
                            role: "region",
                            "aria-labelledby": questionId,
                            itemScope: true,
                            itemType: "https://schema.org/Answer",
                            className: cn(
                              "overflow-hidden transition-all duration-300 ease-in-out",
                              isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                            ),
                            children: /* @__PURE__ */ jsxs("div", { className: "p-5 pt-0 border-t border-slate-50", children: [
                              /* @__PURE__ */ jsx(
                                "div",
                                {
                                  itemProp: "text",
                                  dangerouslySetInnerHTML: {
                                    __html: item.answer
                                  },
                                  className: "prose prose-sm max-w-none text-slate-600 leading-relaxed"
                                }
                              ),
                              item.tags && item.tags.length > 0 && /* @__PURE__ */ jsx(
                                "div",
                                {
                                  className: "flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-50",
                                  "aria-label": "Related topics",
                                  children: item.tags.map((tag, i) => /* @__PURE__ */ jsxs(
                                    "span",
                                    {
                                      role: "button",
                                      tabIndex: 0,
                                      "aria-label": `Search for ${tag}`,
                                      onKeyDown: (e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                          setSearchQuery(tag);
                                        }
                                      },
                                      onClick: (e) => {
                                        e.stopPropagation();
                                        setSearchQuery(tag);
                                      },
                                      className: "px-2 py-0.5 bg-[#48AEDD]/10 text-[#134467] text-xs rounded-full font-medium cursor-pointer hover:bg-[#48AEDD]/20 transition",
                                      children: [
                                        "#",
                                        tag
                                      ]
                                    },
                                    i
                                  ))
                                }
                              )
                            ] })
                          }
                        )
                      ]
                    },
                    item.id
                  );
                }) })
              ]
            },
            section.id
          )) : /* @__PURE__ */ jsxs("div", { className: "text-center py-20 opacity-60", role: "status", children: [
            /* @__PURE__ */ jsx(
              Search,
              {
                className: "w-16 h-16 mx-auto mb-4 text-slate-300",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-slate-500", children: "No answers found" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-400 mt-1", children: "Try adjusting your search terms or browse by topic." }),
            searchQuery && /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setSearchQuery(""),
                className: "mt-4 text-[#48AEDD] underline text-sm",
                children: "Clear search"
              }
            )
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  FaqPage as default
};
