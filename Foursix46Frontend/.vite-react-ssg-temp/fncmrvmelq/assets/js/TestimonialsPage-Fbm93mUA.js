import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { Truck, ArrowRight, Quote, Star } from "lucide-react";
import { c as cn } from "../../main.mjs";
import { B as Button } from "./button-CGBOOEAe.js";
import { useNavigate } from "react-router-dom";
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
import "react-helmet-async";
import "@radix-ui/react-slot";
const fadeInUp = "animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-forwards";
const TestimonialsPage = () => {
  const navigate = useNavigate();
  const [pausedRows, setPausedRows] = useState({});
  const timeoutRefs = useRef({});
  const toggleRow = (index) => {
    setPausedRows((prev) => {
      const isPaused = !prev[index];
      if (timeoutRefs.current[index]) {
        clearTimeout(timeoutRefs.current[index]);
      }
      if (isPaused) {
        timeoutRefs.current[index] = setTimeout(() => {
          setPausedRows((current) => ({ ...current, [index]: false }));
        }, 5e3);
      }
      return { ...prev, [index]: isPaused };
    });
  };
  const testimonials = [
    {
      quote: "“Route46 Couriers handled our urgent same-day delivery perfectly. The driver collected the parcel within the hour and delivered it safely across the city. Reliable courier service when timing really matters.”",
      name: "David – Bristol",
      role: "Logistics Manager",
      initial: "N",
      color: "#E53935",
      // Red
      bg: "bg-[#E53935]/10"
    },
    {
      quote: "“We use Route46 Couriers regularly for business shipments. The booking process is simple, pricing is transparent, and the delivery updates keep us informed throughout the journey.”",
      name: "Neha – Manchester",
      role: "Small Business Owner",
      initial: "A",
      color: "#48AEDD",
      // Blue
      bg: "bg-[#48AEDD]/10"
    },
    {
      quote: "“I needed a passport delivered urgently and Route46 arranged a courier collection within minutes. The service was fast, professional, and exactly what I needed for a time-critical delivery.”",
      name: "James – London",
      role: "Private Client",
      initial: "S",
      color: "#134467",
      // Navy
      bg: "bg-[#134467]/10"
    },
    {
      quote: "“Our company depends on reliable logistics partners, and Route46 Couriers has consistently delivered. From documents to urgent parcels, their same-day courier service across the UK has been excellent.”",
      name: "Sarah – Birmingham",
      role: "Operations Manager",
      initial: "M",
      color: "#F5EB18",
      // Yellow
      bg: "bg-[#F5EB18]/20",
      textColor: "#134467"
    },
    {
      quote: "“Fast collection, friendly driver, and clear communication from start to finish. Route46 Couriers made our urgent delivery stress-free. Highly recommended courier service.”",
      name: "Michael – Cardiff",
      role: "Retail Business Owner",
      initial: "D",
      color: "#E53935",
      bg: "bg-[#E53935]/10"
    }
  ];
  const ReviewCard = ({
    data,
    size = "small"
  }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative flex-shrink-0 rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:border-[#DAA520]/50 mx-3 sm:mx-6 cursor-pointer",
        size === "large" ? "w-[350px] sm:w-[450px] h-[220px]" : "w-[280px] sm:w-[320px] h-[180px]"
      ),
      children: [
        size === "large" && /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 bg-[#134467] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx(Quote, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 mb-3", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-[#DAA520] text-[#DAA520]" }, i)) }),
            /* @__PURE__ */ jsxs(
              "p",
              {
                className: cn(
                  "font-medium text-[#134467]/80 leading-snug line-clamp-3",
                  size === "large" ? "text-lg" : "text-sm"
                ),
                children: [
                  '"',
                  data.quote,
                  '"'
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-4 border-t border-slate-50 mt-auto", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "rounded-full flex items-center justify-center font-bold shadow-sm",
                  data.bg,
                  size === "large" ? "w-10 h-10 text-lg" : "w-8 h-8 text-sm"
                ),
                style: { color: data.textColor || data.color },
                children: data.initial
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: cn(
                    "font-bold text-[#134467]",
                    size === "large" ? "text-base" : "text-sm"
                  ),
                  children: data.name
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold uppercase tracking-wider text-[#134467]/50", children: data.role })
            ] })
          ] })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 font-sans selection:bg-[#E53935] selection:text-white min-h-screen", children: [
    /* @__PURE__ */ jsxs("section", { className: "py-20 bg-slate-50 relative overflow-hidden flex flex-col justify-center", children: [
      /* @__PURE__ */ jsx("style", { children: `
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-100% - 1.5rem)); }
          }
          @keyframes marquee-reverse {
            from { transform: translateX(calc(-100% - 1.5rem)); }
            to { transform: translateX(0); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse 60s linear infinite;
          }
          
          /* Only pause when the specific row has the .paused class */
          .paused {
            animation-play-state: paused !important;
          }

          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s infinite ease-in-out;
          }
        ` }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-20 container mx-auto px-4 mb-12 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EB18]/75 border border-[#F5EB18]/100 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-[#E53935]/100 animate-pulse" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-[#134467]", children: "What Our Customers Say" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#48AEDD] mb-6 tracking-tight", children: [
          "Trusted by",
          /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: " Businesses and Individuals " }),
          "Across the UK"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[#134467]/80 max-w-xl mx-auto text-lg", children: "See what businesses, drivers, and individuals say about their experience with Route46 Couriers." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative w-full overflow-hidden py-4 bg-transparent marquee-container space-y-8", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "flex w-max animate-marquee",
              pausedRows[0] && "paused"
            ),
            onClick: () => toggleRow(0),
            children: [...testimonials, ...testimonials, ...testimonials].map(
              (item, idx) => /* @__PURE__ */ jsx(ReviewCard, { data: item, size: "small" }, `row1-${idx}`)
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "flex w-max animate-marquee-reverse",
              pausedRows[1] && "paused"
            ),
            onClick: () => toggleRow(1),
            children: [...testimonials, ...testimonials, ...testimonials].map(
              (item, idx) => /* @__PURE__ */ jsx(ReviewCard, { data: item, size: "large" }, `row2-${idx}`)
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "flex w-max animate-marquee",
              pausedRows[2] && "paused"
            ),
            onClick: () => toggleRow(2),
            children: [...testimonials, ...testimonials, ...testimonials].map(
              (item, idx) => /* @__PURE__ */ jsx(ReviewCard, { data: item, size: "small" }, `row3-${idx}`)
            )
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: cn("relative py-20 overflow-hidden bg-white", fadeInUp), children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border-2 border-[#134467]/10 rounded-[2.5rem] p-8 sm:p-16 text-center max-w-5xl mx-auto shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-shadow duration-500 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-[#F5EB18]/5 rounded-bl-full -z-10" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-64 h-64 bg-[#48AEDD]/5 rounded-tr-full -z-10" }),
      /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-[#F5EB18]/75 rounded-full mx-auto flex items-center justify-center mb-8 animate-bounce-slow", children: /* @__PURE__ */ jsx(Truck, { className: "w-10 h-10 text-[#134467]" }) }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl sm:text-5xl font-black text-[#48AEDD] mb-6 leading-tight", children: [
        "Ready to Ship with",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "Confidence?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[#134467]/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium", children: "Join businesses and individuals across the UK who trust Route46 Couriers for reliable courier and delivery services." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => navigate("/quick-quote"),
            className: "h-16 px-10 bg-[#134467] hover:bg-[#0f3652] text-white text-lg font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1",
            children: "Quick Quote"
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "outline",
            onClick: () => navigate("/for-businesses"),
            className: "h-16 px-10 border-2 border-[#134467]/100 bg-transparent text-[#134467] hover:bg-[#134467]/100 text-lg font-bold rounded-full transition-all duration-300 hover:-translate-y-1",
            children: [
              "Join Our Courier Network ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
            ]
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  TestimonialsPage
};
