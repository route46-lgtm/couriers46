import { jsxs, jsx } from "react/jsx-runtime";
import { CheckCircle2, Download, ShieldCheck, FileCheck, Scale, Clock, AlertTriangle, Lock } from "lucide-react";
import { c as cn } from "../../main.mjs";
import { F as Footer } from "./Footer-BW1VuM-V.js";
import "vite-react-ssg";
import "react-router-dom";
import "react";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const fadeInUp = "animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-forwards";
function RhaConditionsPage() {
  const summaryPoints = [
    {
      title: "Our Responsibilities",
      icon: ShieldCheck,
      color: "#48AEDD",
      // Sky Blue
      points: [
        "Safe and professional transport of goods.",
        "Reasonable care while handling and carrying consignments.",
        "Delivery within agreed instructions."
      ]
    },
    {
      title: "Your Responsibilities",
      icon: FileCheck,
      color: "#134467",
      // Navy
      points: [
        "Providing accurate descriptions, weights, and addresses.",
        "Ensuring goods are properly packaged.",
        "Declaring any dangerous goods.",
        "Arranging insurance for goods in transit.",
        "Checking goods upon delivery."
      ]
    },
    {
      title: "Liability Limits",
      icon: Scale,
      color: "#E53935",
      // Red
      points: [
        "Maximum liability: £1,300 per tonne (≈ £1.30/kg).",
        "No liability for consequential, indirect or special losses.",
        "No liability for delays unless explicitly agreed in writing."
      ]
    },
    {
      title: "Claims & Time Limits",
      icon: Clock,
      color: "#dcb004",
      // Yellow
      points: [
        "Damage must be reported within 7 days.",
        "Loss or non-delivery claims must be made within 28 days.",
        "Claims outside these windows cannot be accepted."
      ]
    },
    {
      title: "Dangerous / Prohibited Goods",
      icon: AlertTriangle,
      color: "#E53935",
      // Red
      points: [
        "Customers must fully declare dangerous goods.",
        "Undeclared dangerous goods may be refused, destroyed or made safe at the customer's cost."
      ]
    },
    {
      title: "Lien (Right to Hold Goods)",
      icon: Lock,
      color: "#134467",
      // Navy
      points: ["We may hold goods until all charges are paid."]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white overflow-x-hidden font-sans text-slate-800", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative pt-24 pb-20 border-b border-slate-100 bg-slate-50/50", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-[#48AEDD]/5 rounded-full blur-3xl -z-10" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E53935]/5 rounded-full blur-3xl -z-10" }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 text-center max-w-4xl relative z-10", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "mx-auto w-28 h-28 mb-8 bg-white p-4 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center",
              fadeInUp
            ),
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/RHA-LogoSquare.png",
                alt: "RHA Logo",
                className: "w-full h-full object-contain"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs(
          "h1",
          {
            className: cn(
              "text-4xl sm:text-5xl lg:text-6xl font-black text-[#48AEDD] mb-6 tracking-tight leading-tight",
              fadeInUp,
              "animation-delay-100"
            ),
            children: [
              "RHA Conditions of Carriage",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "(2024 Edition)" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-[#134467]/10 mb-6 shadow-sm",
              fadeInUp,
              "animation-delay-200"
            ),
            children: /* @__PURE__ */ jsx("span", { className: "text-[#134467] font-bold text-xs tracking-widest uppercase", children: "Official Summary" })
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium",
              fadeInUp,
              "animation-delay-300"
            ),
            children: "Route46 Couriers is a trading name of FourSix46® Global Ltd. All carriage undertaken by Route46 Couriers is subject to the Road Haulage Association (RHA) Conditions of Carriage 2024."
          }
        ),
        /* @__PURE__ */ jsxs(
          "p",
          {
            className: cn(
              " mt-4 text-sm text-slate-400",
              fadeInUp,
              "animation-delay-300"
            ),
            children: [
              "Last updated by Route46 Couriers – 16 March 2026 ",
              /* @__PURE__ */ jsx("br", {}),
              "This summary page is maintained by Route46 Couriers. The original RHA Conditions of Carriage remain unchanged."
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 py-20", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto space-y-16", children: summaryPoints.map((section, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "group flex flex-col md:flex-row gap-8 md:gap-12 items-start relative",
            fadeInUp
          ),
          style: { animationDelay: `${200 + index * 100}ms` },
          children: [
            index !== summaryPoints.length - 1 && /* @__PURE__ */ jsx("div", { className: "absolute left-[34px] top-20 bottom-[-40px] w-0.5 bg-slate-100 hidden md:block" }),
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 relative", children: /* @__PURE__ */ jsx("div", { className: "w-[68px] h-[68px] rounded-2xl flex items-center justify-center bg-white shadow-lg border border-slate-100 group-hover:scale-110 transition-transform duration-500 relative z-10", children: /* @__PURE__ */ jsx(
              section.icon,
              {
                className: "w-8 h-8",
                style: { color: section.color },
                strokeWidth: 1.5
              }
            ) }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 pt-2", children: [
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-2xl font-bold mb-6 flex items-center gap-3 transition-colors duration-300",
                  style: {
                    color: section.color === "#dcb004" ? "#b39200" : section.color
                  },
                  children: section.title
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-1 gap-4", children: section.points.map((point, i) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white transition-colors duration-300",
                  children: [
                    /* @__PURE__ */ jsx(
                      CheckCircle2,
                      {
                        className: "w-5 h-5 mt-0.5 flex-shrink-0",
                        style: {
                          color: section.color === "#dcb004" ? "#dcb004" : section.color
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-medium leading-relaxed", children: point })
                  ]
                },
                i
              )) })
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "max-w-4xl mx-auto mt-24 text-center",
            fadeInUp,
            "animation-delay-700"
          ),
          children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[3rem] p-10 sm:p-14 shadow-2xl shadow-slate-200 border border-slate-100 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-full h-5 bg-gradient-to-r from-[#48AEDD] via-[#F5EB18] to-[#E53935] rounded-t-[3rem]" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -left-20 -bottom-20 w-64 h-64 bg-[#48AEDD]/5 rounded-full blur-3xl pointer-events-none" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -right-20 -top-20 w-64 h-64 bg-[#E53935]/5 rounded-full blur-3xl pointer-events-none" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#134467]/5 text-[#134467] mb-6", children: /* @__PURE__ */ jsx(Download, { className: "w-7 h-7" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-black text-[#134467] mb-4", children: "Official Documentation" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-500 mb-10 max-w-xl mx-auto text-lg leading-relaxed", children: "For full legal details and comprehensive terms, please download the official RHA documents below." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-6", children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "/Documents/Conditions of Carriage 2024 - FourSix46® Global Ltd.pdf",
                    download: "Conditions of Carriage 2024 - FourSix46® Global Ltd.pdf",
                    className: "group flex items-center justify-center gap-3 bg-[#134467] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#134467] transition-all duration-300 shadow-lg shadow-[#134467]/20 hover:-translate-y-1",
                    children: [
                      /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 text-[#F5EB18]" }),
                      "Conditions of Carriage"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "/Documents/Explanatory Notes COC 2024.pdf",
                    download: "Explanatory Notes COC 2024.pdf",
                    className: "group flex items-center justify-center gap-3 bg-white text-[#134467] border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-[#134467] transition-all duration-300 hover:-translate-y-1",
                    children: [
                      /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 text-[#48AEDD]" }),
                      "Explanatory Notes"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-10 text-xs text-slate-400 font-medium", children: "By using our services, you agree to be bound by the RHA Conditions of Carriage 2024." })
            ] })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  RhaConditionsPage as default
};
