import { jsxs, jsx } from "react/jsx-runtime";
import { Receipt, AlertOctagon, HelpCircle, FileText, RefreshCcw, Truck, Clock, Shield, Wallet, Building2, AlertTriangle, CheckCircle } from "lucide-react";
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
function RefundPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: "1. General Principle",
      color: "#48AEDD",
      // Blue
      bg: "bg-[#48AEDD]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "Operational planning begins immediately once a booking is made. Refund eligibility depends on whether a driver has been assigned, dispatched, or travelled." }),
        /* @__PURE__ */ jsx("p", { className: "font-medium text-[#134467]", children: "All liability, claims, and compensation are governed by the RHA Conditions of Carriage 2024." })
      ] })
    },
    {
      icon: RefreshCcw,
      title: "2. Cancellations Before Dispatch",
      color: "#E53935",
      // Red
      bg: "bg-[#E53935]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "A booking may be cancelled before a driver is allocated or dispatched." }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsx("li", { children: "Refunds may be issued minus an administrative fee." }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Admin fee:" }),
            " Up to £5.00 to cover booking & processing costs."
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Refunds are processed to the original payment method within 5–10 business days." })
      ] })
    },
    {
      icon: Truck,
      title: "3. Cancellations After Assignment",
      color: "#134467",
      // Navy
      bg: "bg-[#134467]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "Once a driver has been allocated or started travelling to the collection point:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            "A ",
            /* @__PURE__ */ jsx("strong", { children: "full refund is not available" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "A partial refund may be issued minus:",
            /* @__PURE__ */ jsxs("ul", { className: "list-circle pl-5 mt-1", children: [
              /* @__PURE__ */ jsx("li", { children: "Driver call-out fee" }),
              /* @__PURE__ */ jsx("li", { children: "Mileage already travelled" }),
              /* @__PURE__ */ jsx("li", { children: "Waiting time (if applicable)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "italic text-sm", children: "This is permitted under the Carrier’s right to recover reasonable operational costs." })
      ] })
    },
    {
      icon: AlertOctagon,
      title: "4. Failed Collection",
      color: "#F5EB18",
      // Yellow
      bg: "bg-[#F5EB18]/20",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "A failed collection occurs when:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsx("li", { children: "Goods are not ready" }),
          /* @__PURE__ */ jsx("li", { children: "Nobody is available at the collection point" }),
          /* @__PURE__ */ jsx("li", { children: "Incorrect/incomplete address" }),
          /* @__PURE__ */ jsx("li", { children: "Unsafe or inaccessible location" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 bg-red-50 p-3 rounded-lg border border-red-100 text-red-800 text-sm", children: [
          /* @__PURE__ */ jsx("strong", { children: "Result:" }),
          " No refund is provided. Re-collection can be arranged at additional cost. Drivers’ time and mileage are chargeable."
        ] })
      ] })
    },
    {
      icon: Clock,
      title: "5. Delayed Deliveries",
      color: "#48AEDD",
      // Blue
      bg: "bg-[#48AEDD]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-[#134467]", children: "5.1 Same-Day Deliveries" }),
          /* @__PURE__ */ jsx("p", { children: "Same-day delivery is not guaranteed unless expressly agreed in writing as a special service under RHA rules. Delays caused by traffic, weather, road closures, or incidents are not refundable." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-[#134467]", children: "5.2 Standard Deliveries (2–4 Days)" }),
          /* @__PURE__ */ jsx("p", { children: "Delivery times are estimates. Refunds are not given unless a delay is proven to be solely caused by FourSix46® negligence, not external conditions." })
        ] })
      ] })
    },
    {
      icon: Shield,
      title: "6. Loss or Damage (RHA)",
      color: "#E53935",
      // Red
      bg: "bg-[#E53935]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Customers must follow the",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "RHA Conditions of Carriage 2024" }),
          ":"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Damage/Shortage:" }),
            " Notice required within 7 days."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Loss/Non-delivery:" }),
            " Notice required within RHA time limits."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Liability Limit:" }),
            " £1,300 per tonne of gross weight (~£1.30 per kg)."
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Liability excludes consequential loss, loss of profits, or special losses. Customers must arrange full-value insurance if needed." })
      ] })
    },
    {
      icon: Wallet,
      title: "7. Non-Refundable Situations",
      color: "#134467",
      // Navy
      bg: "bg-[#134467]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "No refund will be issued if:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsx("li", { children: "The Customer provides incorrect information." }),
          /* @__PURE__ */ jsx("li", { children: "The Goods are illegal, dangerous, or prohibited." }),
          /* @__PURE__ */ jsx("li", { children: "Delivery is refused by the recipient." }),
          /* @__PURE__ */ jsx("li", { children: "Delays arise from external factors (weather, traffic, incidents)." }),
          /* @__PURE__ */ jsx("li", { children: "The job is completed and then cancellation is requested." }),
          /* @__PURE__ */ jsx("li", { children: "The Customer breaches the RHA Conditions or our Terms." })
        ] })
      ] })
    },
    {
      icon: Building2,
      title: "8. Business (B2B) Customers",
      color: "#F5EB18",
      // Yellow
      bg: "bg-[#F5EB18]/20",
      content: "Refunds for account customers follow this Policy and the RHA Conditions. Any credit notes issued will be applied to the business account balance."
    },
    {
      icon: RefreshCcw,
      title: "9. Booking Changes",
      color: "#48AEDD",
      // Blue
      bg: "bg-[#48AEDD]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "Changes to collection time, delivery address, parcel details, or contact information may:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsx("li", { children: "Not always be possible." }),
          /* @__PURE__ */ jsx("li", { children: "Incur additional charges." }),
          /* @__PURE__ */ jsx("li", { children: "Affect delivery times." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm italic", children: "If the change leads to cancellation, Sections 2–4 apply." })
      ] })
    },
    {
      icon: Receipt,
      title: "10. Refund Procedure",
      color: "#E53935",
      // Red
      bg: "bg-[#E53935]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "To request a refund, contact us via the Contact Us page and include:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsx("li", { children: "Booking reference" }),
          /* @__PURE__ */ jsx("li", { children: "Reason for request" }),
          /* @__PURE__ */ jsx("li", { children: "Relevant documents (if applicable)" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-[#E53935]", children: "Approved refunds are issued within 5–10 business days." })
      ] })
    },
    {
      icon: AlertTriangle,
      title: "11. Right to Decline",
      color: "#134467",
      // Navy
      bg: "bg-[#134467]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "FourSix46® Global Ltd may refuse a refund if:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsx("li", { children: "Policy or RHA Conditions are breached." }),
          /* @__PURE__ */ jsx("li", { children: "Fraudulent claims are detected." }),
          /* @__PURE__ */ jsx("li", { children: "Goods fall under prohibited categories." }),
          /* @__PURE__ */ jsx("li", { children: "Claims do not meet RHA time limits." })
        ] })
      ] })
    },
    {
      icon: CheckCircle,
      title: "12. Policy Updates",
      color: "#F5EB18",
      // Yellow
      bg: "bg-[#F5EB18]/20",
      content: "This Policy may be updated. Continued use of our services confirms acceptance of the latest version."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 overflow-x-hidden font-sans selection:bg-[#E53935] selection:text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-[#48AEDD]/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-10 right-1/3 w-64 h-64 bg-[#48AEDD]/5 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 left-10 w-72 h-72 bg-[#E53935]/5 rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 text-center max-w-4xl relative z-10", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-50 border border-[#134467]/10 shadow-sm mb-8",
              fadeInUp
            ),
            children: [
              /* @__PURE__ */ jsx(Receipt, { className: "w-4 h-4 text-[#48AEDD]" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD] font-bold text-xs tracking-widest uppercase", children: "Customer Guarantee" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "h1",
          {
            className: cn(
              "text-4xl sm:text-5xl lg:text-6xl font-black text-[#48AEDD] mb-6 tracking-tight",
              fadeInUp,
              "animation-delay-100"
            ),
            children: [
              "Refund & ",
              /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "Cancellation Policy" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "text-lg sm:text-xl text-slate-500 mb-4 max-w-2xl mx-auto font-medium",
              fadeInUp,
              "animation-delay-200"
            ),
            children: "All Carriage Subject to RHA Conditions of Carriage 2024."
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "text-sm text-slate-400",
              fadeInUp,
              "animation-delay-300"
            ),
            children: "Last Updated: 23/03/2026"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 py-12 sm:py-16", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden",
          fadeInUp,
          "animation-delay-500"
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "bg-[#48AEDD] p-8 sm:p-10 text-white", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
            /* @__PURE__ */ jsx(AlertOctagon, { className: "w-6 h-6 text-[#F5EB18] flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "font-bold text-xl mb-2 text-[#F5EB18]", children: "Policy Overview" }),
              /* @__PURE__ */ jsx("p", { className: "text-white/90 leading-relaxed", children: "This Refund & Cancellation Policy applies to courier, transport, and logistics services provided by FourSix46® Global Ltd, trading as Route46 Couriers, within the United Kingdom." }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("p", { className: "text-white/90 leading-relaxed", children: "All delivery and transport services are undertaken in accordance with the Road Haulage Association (RHA) Conditions of Carriage 2024, which set out the industry-standard terms governing liability, claims, and compensation for road freight services." }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("p", { className: "text-white/90 leading-relaxed", children: "Where any conflict arises between this Refund & Cancellation Policy and the RHA Conditions of Carriage 2024, the RHA Conditions shall take precedence." }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("p", { className: "text-white/90 leading-relaxed", children: "This policy outlines how booking cancellations, refunds, and related service adjustments are handled in accordance with operational planning, driver dispatch procedures, and transport commitments." })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "p-8 sm:p-12 space-y-10", children: sections.map((section, index) => /* @__PURE__ */ jsxs("section", { className: "group", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mt-1 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                    section.bg
                  ),
                  children: /* @__PURE__ */ jsx(
                    section.icon,
                    {
                      className: "w-6 h-6",
                      style: {
                        color: section.color === "#F5EB18" ? "#dcb004" : section.color
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-[#134467] mb-4 group-hover:text-[#E53935] transition-colors", children: section.title }),
                /* @__PURE__ */ jsx("div", { className: "text-slate-600 text-base leading-relaxed", children: section.content })
              ] })
            ] }),
            index !== sections.length - 1 && /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-slate-100 mt-10 ml-16" })
          ] }, index)) }),
          /* @__PURE__ */ jsx("div", { className: "bg-slate-50 p-8 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-6 text-center md:text-left", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#48AEDD]", children: /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[#134467]", children: "Need to request a refund?" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 mt-1", children: "Contact our support team with your Booking Reference." })
            ] }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/contact",
                className: "px-6 py-3 bg-[#134467] text-white font-bold rounded-xl hover:bg-[#0f3652] transition-colors shadow-lg shadow-blue-900/10",
                children: "Contact Support"
              }
            )
          ] }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  RefundPolicyPage as default
};
