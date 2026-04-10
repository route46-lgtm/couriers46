import { jsxs, jsx } from "react/jsx-runtime";
import { Scale, AlertTriangle, ShieldCheck, Info, BookOpen, UserCheck, Package, Truck, AlertCircle, CreditCard, ShieldAlert, FileWarning, Lock, Users, CloudLightning, Gavel, Download } from "lucide-react";
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
function TermsPage() {
  const legalSections = [
    {
      title: "1. Introduction",
      icon: Info,
      color: "#48AEDD",
      // Sky Blue
      bg: "bg-[#48AEDD]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "These Terms and Conditions govern the provision of courier, transport, and related logistics services offered by",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "FourSix46® Global Ltd" }),
          ", trading as",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "Route46 Couriers" }),
          ", within the United Kingdom."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "All carriage and delivery services arranged by Route46 Couriers are undertaken strictly in accordance with the Road Haulage Association (RHA) Conditions of Carriage 2024, which set out the standard terms, responsibilities, and liability limits applicable to road freight operations in the UK." }),
        /* @__PURE__ */ jsx("p", { children: "By requesting a delivery quotation, booking a shipment, opening an account, or consigning goods for transport, the customer confirms their acceptance of these Terms and Conditions and the applicable RHA Conditions of Carriage 2024." }),
        /* @__PURE__ */ jsx("p", { children: "No additional or alternative terms shall apply unless expressly agreed in writing and signed by an authorised director of FourSix46 Global Ltd." }),
        /* @__PURE__ */ jsx("p", { className: "italic text-sm", children: "A full copy of the RHA Conditions is available upon request." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Company Information:",
          /* @__PURE__ */ jsx("br", {}),
          "FourSix46® Global Ltd Trading as Route46 Couriers",
          /* @__PURE__ */ jsx("br", {}),
          "66 Paul Street",
          /* @__PURE__ */ jsx("br", {}),
          "London EC2A 4NA",
          /* @__PURE__ */ jsx("br", {}),
          "United Kingdom"
        ] })
      ] })
    },
    {
      title: "2. Definitions",
      icon: BookOpen,
      color: "#134467",
      // Navy
      bg: "bg-[#134467]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "The definitions used in these Terms correspond to those in the RHA Conditions, including but not limited to:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "“Carrier”" }),
            " – Route46 Global Ltd"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "“Customer”" }),
            " – Any person or business using the Carrier’s services"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "“Consignment”" }),
            " – Goods carried at one time under one contract"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "“Goods”" }),
            " – Items accepted for carriage"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "“Subcontractor”" }),
            " – Any third party engaged to perform carriage"
          ] })
        ] })
      ] })
    },
    {
      title: "3. Governing Conditions",
      icon: Scale,
      color: "#E53935",
      // Red
      bg: "bg-[#E53935]/10",
      content: /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          "3.1 All services are supplied under the",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "RHA Conditions of Carriage 2024" }),
          ", which take precedence over all other terms including Customer terms."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "3.2 No employee, contractor, or agent has authority to",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "vary these Conditions" }),
          "."
        ] })
      ] })
    },
    {
      title: "4. Carrier’s Status",
      icon: ShieldCheck,
      color: "#F5EB18",
      // Yellow
      bg: "bg-[#F5EB18]/20",
      content: /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          "4.1 The Carrier is",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-[#E53935]", children: "not a common carrier" }),
          " and may refuse goods at its discretion."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "4.2 The Carrier may",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "subcontract" }),
          " the whole or any part of the carriage in accordance with the RHA Conditions."
        ] })
      ] })
    },
    {
      title: "5. Customer Obligations",
      icon: UserCheck,
      color: "#48AEDD",
      // Sky Blue
      bg: "bg-[#48AEDD]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "The Customer must comply with the responsibilities outlined in the RHA Conditions, including:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Accurate description" }),
            " of Goods"
          ] }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("strong", { children: "Appropriate packaging" }) }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Correct addresses" }),
            " and documentation"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Compliance with ",
            /* @__PURE__ */ jsx("strong", { children: "UK laws" }),
            " and transport regulations"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Proper declaration of",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "Hazardous or Dangerous Goods" })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Arranging ",
            /* @__PURE__ */ jsx("strong", { children: "full-value insurance" }),
            " for the Goods"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 italic text-slate-500", children: "The Customer is responsible for any consequences arising from incorrect information or insufficient packaging." })
      ] })
    },
    {
      title: "6. Dangerous or Prohibited Goods",
      icon: AlertTriangle,
      color: "#E53935",
      // Red
      bg: "bg-[#E53935]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Unless agreed in writing, the Carrier",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-[#E53935]", children: "does not accept" }),
          ":"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-2 pl-5", children: [
          /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-1", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("strong", { children: "Dangerous goods" }) }),
            /* @__PURE__ */ jsx("li", { children: "Hazardous, explosive, toxic, or flammable items" }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("strong", { children: "Cash" }) }),
            /* @__PURE__ */ jsx("li", { children: "High-value jewellery" })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-1", children: [
            /* @__PURE__ */ jsx("li", { children: "Animals or livestock" }),
            /* @__PURE__ */ jsx("li", { children: "Controlled or illegal substances" }),
            /* @__PURE__ */ jsxs("li", { children: [
              "Items ",
              /* @__PURE__ */ jsx("strong", { children: "prohibited by law" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#E53935]/5 p-4 rounded-lg border border-[#E53935]/20", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-[#E53935] mb-2", children: "RHA Conditions Notice:" }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 text-sm", children: [
            "The Carrier may refuse, remove, make safe, render harmless, or destroy any ",
            /* @__PURE__ */ jsx("strong", { children: "undeclared dangerous goods" }),
            ", with all costs payable by the Customer."
          ] })
        ] })
      ] })
    },
    {
      title: "7. Packaging",
      icon: Package,
      color: "#134467",
      // Navy
      bg: "bg-[#134467]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "Packaging responsibilities follow RHA rules:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            "The Customer must ensure Goods are",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "securely and adequately packaged" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "The Carrier is",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "text-[#E53935]", children: "not liable" }),
            " for loss or damage caused by ",
            /* @__PURE__ */ jsx("strong", { children: "insufficient packaging" }),
            "."
          ] })
        ] })
      ] })
    },
    {
      title: "8. Collection, Carriage & Delivery",
      icon: Truck,
      color: "#F5EB18",
      // Yellow
      bg: "bg-[#F5EB18]/20",
      content: /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          "8.1 Times for collection or delivery are",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-[#E53935]", children: "not guaranteed" }),
          " unless expressly agreed in writing as a special contractual service under the RHA Conditions."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "8.2 Delivery may be made to any person appearing",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "authorised" }),
          " at the delivery address."
        ] }),
        /* @__PURE__ */ jsx("li", { children: "8.3 Undelivered goods will be handled in accordance with the RHA Conditions (including storage, return, or disposal)." })
      ] })
    },
    {
      title: "9. Undelivered, Unclaimed, or Rejected Goods",
      icon: AlertCircle,
      color: "#E53935",
      // Red
      bg: "bg-[#E53935]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "If the Carrier cannot deliver Goods:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsx("li", { children: "The Carrier will attempt to contact the Customer;" }),
          /* @__PURE__ */ jsx("li", { children: "Goods may be held, returned, stored, or sold after the RHA notice period;" }),
          /* @__PURE__ */ jsxs("li", { children: [
            "All costs associated with",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "storage, return, or disposal" }),
            " ",
            "are payable by the Customer."
          ] })
        ] })
      ] })
    },
    {
      title: "10. Charges & Payment Terms",
      icon: CreditCard,
      color: "#48AEDD",
      // Blue
      bg: "bg-[#48AEDD]/10",
      content: /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2", children: [
        /* @__PURE__ */ jsx("li", { children: "10.1 Charges are based on distance, size, weight, service type, or contractual agreements." }),
        /* @__PURE__ */ jsxs("li", { children: [
          "10.2 Business account customers must pay within",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "30 days" }),
          " of invoice unless agreed otherwise."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "10.3 ",
          /* @__PURE__ */ jsx("strong", { children: "Interest" }),
          " may be charged under the Late Payment of Commercial Debts (Interest) Act 1998."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "10.4 The Carrier exercises a ",
          /* @__PURE__ */ jsx("strong", { children: "general lien" }),
          " over Goods until all charges are paid (as permitted under RHA Conditions)."
        ] })
      ] })
    },
    {
      title: "11. Liability",
      icon: ShieldAlert,
      color: "#134467",
      // Navy
      bg: "bg-[#134467]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Liability for loss, damage, or delay is governed strictly by the",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "RHA Conditions of Carriage 2024" }),
          ". This includes:"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            "Liability limited to",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "text-[#E53935]", children: "£1,300 per tonne" }),
            " of gross weight (≈ £1.30/kg)"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "No liability" }),
            " for consequential or indirect loss"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "No liability" }),
            " for loss of profits, business, opportunity, or special damages"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "No liability" }),
            " for customer-packaged fragile or poorly packaged items"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "No liability" }),
            " for undeclared dangerous goods"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-2 italic text-slate-500", children: [
          "The Customer must arrange",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "full-value insurance" }),
          " if required."
        ] })
      ] })
    },
    {
      title: "12. Claims",
      icon: FileWarning,
      color: "#E53935",
      // Red
      bg: "bg-[#E53935]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "Claims must comply with RHA deadlines:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Damage / Shortage:" }),
            " Notify within",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "text-[#E53935]", children: "7 days" }),
            " of delivery"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Loss / Non-Delivery:" }),
            " Notify within the RHA time limits"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Claims outside the permitted RHA windows are",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "text-[#E53935]", children: "invalid" })
          ] }),
          /* @__PURE__ */ jsx("li", { children: "All claims must include required evidence per RHA rules" })
        ] })
      ] })
    },
    {
      title: "13. Lien",
      icon: Lock,
      color: "#F5EB18",
      // Yellow
      bg: "bg-[#F5EB18]/20",
      content: /* @__PURE__ */ jsxs("p", { children: [
        "The Carrier may",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "retain Goods" }),
        " until all charges due are paid in full, as authorised by the RHA Conditions. If charges remain unpaid, Goods may be",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-[#E53935]", children: "sold to recover costs" }),
        "."
      ] })
    },
    {
      title: "14. Subcontracted Drivers",
      icon: Users,
      color: "#48AEDD",
      // Blue
      bg: "bg-[#48AEDD]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "All subcontracted drivers operate under the authority and rules of the RHA Conditions, including:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            "Compliance with ",
            /* @__PURE__ */ jsx("strong", { children: "safety standards" })
          ] }),
          /* @__PURE__ */ jsx("li", { children: "Proper handling of Goods" }),
          /* @__PURE__ */ jsx("li", { children: "Reporting incidents immediately" }),
          /* @__PURE__ */ jsx("li", { children: "Prohibition from subcontracting further without written permission" })
        ] })
      ] })
    },
    {
      title: "15. Force Majeure",
      icon: CloudLightning,
      color: "#134467",
      // Navy
      bg: "bg-[#134467]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Events",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "outside the Carrier’s reasonable control" }),
          " ",
          "(as defined in the RHA Conditions) relieve the Carrier of liability and may include:"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 grid sm:grid-cols-2 gap-1", children: [
          /* @__PURE__ */ jsx("li", { children: "Weather disruptions" }),
          /* @__PURE__ */ jsx("li", { children: "Traffic or road closures" }),
          /* @__PURE__ */ jsx("li", { children: "Strikes or industrial action" }),
          /* @__PURE__ */ jsx("li", { children: "Government restrictions" }),
          /* @__PURE__ */ jsx("li", { children: "Accidents" }),
          /* @__PURE__ */ jsx("li", { children: "Natural disasters" })
        ] })
      ] })
    },
    {
      title: "16. Governing Law",
      icon: Gavel,
      color: "#E53935",
      // Red
      bg: "bg-[#E53935]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "These Terms and all carriage contracts are governed by the laws of",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "England & Wales" }),
          ", with disputes subject to the exclusive jurisdiction of the English courts."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "All carriage remains subject to the",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "RHA Conditions of Carriage 2024" }),
          ", which override any conflicting term herein."
        ] })
      ] })
    },
    {
      title: "17. Availability of RHA Conditions",
      icon: Download,
      color: "#48AEDD",
      // Blue
      bg: "bg-[#48AEDD]/10",
      content: "A full copy of the RHA Conditions of Carriage 2024 is available on request or for download from our website."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 overflow-x-hidden font-sans selection:bg-[#E53935] selection:text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-[#48AEDD]/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-10 left-10 w-64 h-64 bg-[#F5EB18]/10 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 right-10 w-72 h-72 bg-[#48AEDD]/5 rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 text-center max-w-4xl relative z-10", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-50 border border-[#48AEDD]/20 shadow-sm mb-8",
              fadeInUp
            ),
            children: [
              /* @__PURE__ */ jsx(Scale, { className: "w-4 h-4 text-[#48AEDD]" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD] font-bold text-xs tracking-widest uppercase", children: "Legal Information" })
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
              "Terms & ",
              /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "Conditions" })
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
            children: "All Carriage Subject to RHA Conditions of Carriage 2024"
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
            children: "Last Updated: 16/03/2026"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 py-12 sm:py-16", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden",
            fadeInUp,
            "animation-delay-500"
          ),
          children: [
            /* @__PURE__ */ jsx("div", { className: "bg-[#E53935] p-8 sm:p-10 text-white", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "w-6 h-6 text-[#F5EB18] flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h2", { className: "font-bold text-xl mb-2 text-[#F5EB18]", children: "Important Agreement" }),
                /* @__PURE__ */ jsx("p", { className: "text-white/90 leading-relaxed", children: "FourSix46® Global Ltd, trading as Route46 Couriers, undertakes all carriage and related transport services strictly under the Road Haulage Association (RHA) Conditions of Carriage 2024. All transport and delivery services are undertaken in accordance with these industry-standard conditions, which set out the rights, responsibilities and liability limits applicable to UK road freight operations." })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "p-8 sm:p-12 space-y-10", children: legalSections.map((section, index) => /* @__PURE__ */ jsxs("section", { className: "group", children: [
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
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[#134467] mb-4 flex items-center gap-3 group-hover:text-[#E53935] transition-colors", children: section.title }),
                  /* @__PURE__ */ jsx("div", { className: "text-slate-600 leading-relaxed text-base", children: section.content })
                ] })
              ] }),
              index !== legalSections.length - 1 && /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-slate-100 mt-10 ml-16" })
            ] }, index)) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-8 text-center border-t border-slate-100", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F5EB18]/20 mb-4", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-6 h-6 text-[#E53935]" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 font-medium", children: "FourSix46® Global Ltd — Trading as Route46 Couriers" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: "FourSix46® Global Ltd Trading as Route46 Couriers, 66 Paul Street, London EC2A 4NA, United Kingdom" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("mt-12 text-center", fadeInUp, "animation-delay-700"),
          children: /* @__PURE__ */ jsxs("p", { className: "text-slate-500", children: [
            "Questions about our terms?",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/contact",
                className: "text-[#48AEDD] hover:underline font-bold",
                children: "Contact Legal Support"
              }
            )
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  TermsPage as default
};
