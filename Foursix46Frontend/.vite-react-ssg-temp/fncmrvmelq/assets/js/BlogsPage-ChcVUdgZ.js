import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { B as Badge } from "./badge-Bqu1ytSH.js";
import { I as Input } from "./input-CBzcThm7.js";
import { BookOpen, Search, Loader2, ArrowRight } from "lucide-react";
import { F as Footer } from "./Footer-BW1VuM-V.js";
import "class-variance-authority";
import "../../main.mjs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const apiUrl = void 0;
function BlogsPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${apiUrl}/api/blog`).then((r) => r.json()).then((data) => setPosts(Array.isArray(data) ? data : [])).catch(() => setPosts([])).finally(() => setLoading(false));
  }, []);
  const categories = [
    "All",
    ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean)))
  ];
  const filtered = posts.filter((p) => {
    var _a, _b;
    const matchesSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || ((_a = p.excerpt) == null ? void 0 : _a.toLowerCase().includes(search.toLowerCase())) || ((_b = p.category) == null ? void 0 : _b.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  const featuredPost = filtered.find((p) => p.isFeatured);
  const regularPosts = filtered.filter(
    (p) => !p.isFeatured || p !== featuredPost
  );
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white font-sans", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative bg-[#134467] overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-[#48AEDD] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5EB18] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-6xl mx-auto px-6 py-20 text-center", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#48AEDD]/20 text-[#48AEDD] text-sm font-semibold mb-6", children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }),
              "Insights & News"
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl font-black text-white mb-4 leading-tight", children: [
              "The Route46 ",
              /* @__PURE__ */ jsx("span", { className: "text-[#F5EB18]", children: "Blogs" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[#48AEDD]/80 text-xl max-w-2xl mx-auto", children: "Industry insights, courier tips, and company updates from the Route46 team." })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full overflow-hidden leading-none", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 1440 40", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z",
          fill: "white"
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 py-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((cat) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveCategory(cat),
            className: `px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${activeCategory === cat ? "bg-[#134467] text-white border-[#134467]" : "bg-white text-[#134467] border-slate-200 hover:border-[#134467]"}`,
            children: cat
          },
          cat
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "relative w-full md:w-72", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Search posts...",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              className: "pl-9"
            }
          )
        ] })
      ] }),
      loading && /* @__PURE__ */ jsx("div", { className: "flex justify-center py-24", children: /* @__PURE__ */ jsx(Loader2, { className: "w-10 h-10 animate-spin text-[#134467]" }) }),
      !loading && filtered.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-center py-24", children: [
        /* @__PURE__ */ jsx(BookOpen, { className: "w-12 h-12 mx-auto text-slate-300 mb-4" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-lg font-medium", children: "No posts found." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mt-1", children: "Try a different search or category." })
      ] }),
      !loading && featuredPost && /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          onClick: () => navigate(`/blog/${featuredPost.slug}`),
          className: "group cursor-pointer mb-12 rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition-shadow grid md:grid-cols-2",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative h-64 md:h-auto bg-slate-100 overflow-hidden", children: [
              featuredPost.featuredImage ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: featuredPost.featuredImage,
                  alt: featuredPost.title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }
              ) : /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-br from-[#134467] to-[#48AEDD] flex items-center justify-center", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-16 h-16 text-white/30" }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsx(Badge, { className: "bg-[#F5EB18] text-[#134467] font-bold text-xs px-3", children: "★ Featured" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-8 md:p-10 flex flex-col justify-center bg-white", children: [
              featuredPost.category && /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "outline",
                  className: "w-fit text-xs text-[#134467] border-[#134467]/30 mb-4",
                  children: featuredPost.category
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-black text-[#134467] mb-3 group-hover:text-[#E53935] transition-colors leading-tight", children: featuredPost.title }),
              featuredPost.excerpt && /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-base mb-6 line-clamp-3 leading-relaxed", children: featuredPost.excerpt }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-auto", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-400", children: [
                  featuredPost.authorName && /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#134467]", children: featuredPost.authorName }),
                  featuredPost.publishedDate && /* @__PURE__ */ jsxs("span", { className: "ml-2", children: [
                    "·",
                    " ",
                    new Date(featuredPost.publishedDate).toLocaleDateString(
                      "en-GB",
                      { day: "numeric", month: "short", year: "numeric" }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-sm font-semibold text-[#E53935] group-hover:gap-2 transition-all", children: [
                  "Read more ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                ] })
              ] })
            ] })
          ]
        }
      ),
      !loading && regularPosts.length > 0 && /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: regularPosts.map((post, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.06, duration: 0.4 },
          onClick: () => navigate(`/blog/${post.slug}`),
          className: "group cursor-pointer rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden bg-white",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "h-48 bg-slate-100 overflow-hidden relative", children: [
              post.featuredImage ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: post.featuredImage,
                  alt: post.title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }
              ) : /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-br from-[#134467]/10 to-[#48AEDD]/20 flex items-center justify-center", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-10 h-10 text-[#134467]/20" }) }),
              post.category && /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 left-3", children: /* @__PURE__ */ jsx("span", { className: "bg-white/90 text-[#134467] text-xs font-bold px-2.5 py-1 rounded-full", children: post.category }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-[#134467] mb-2 group-hover:text-[#E53935] transition-colors line-clamp-2 leading-snug", children: post.title }),
              post.excerpt && /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed", children: post.excerpt }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs text-slate-400 mt-auto pt-3 border-t border-slate-50", children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium text-[#134467]/70", children: post.authorName ?? "FourSix46® Team" }),
                post.publishedDate && /* @__PURE__ */ jsx("span", { children: new Date(post.publishedDate).toLocaleDateString(
                  "en-GB",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                  }
                ) })
              ] })
            ] })
          ]
        },
        post.id
      )) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  BlogsPage as default
};
