import { jsxs, jsx } from "react/jsx-runtime";
import { Shield, CheckCircle, ShieldCheck, FileText, Database, Eye, Scale, Users, Server, Cookie, UserCheck, Lock, Globe, AlertCircle } from "lucide-react";
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
function PrivacyPolicyPage() {
  const privacySections = [
    {
      title: "1. Who We Are",
      icon: FileText,
      color: "#48AEDD",
      // Sky Blue
      bg: "bg-[#48AEDD]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "FourSix46® Global Ltd" }) }),
        /* @__PURE__ */ jsxs("p", { children: [
          "trading as",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-[#48AEDD]", children: "Route46 Couriers" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "66 Paul Street, London EC2A 4NA, United Kingdom" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-2 text-slate-600", children: [
          "FourSix46® Global Ltd is the ",
          /* @__PURE__ */ jsx("strong", { children: "Data Controller" }),
          " ",
          "responsible for the personal information collected through our services. For privacy enquiries please contact us."
        ] })
      ] })
    },
    {
      title: "2. What Data We Collect",
      icon: Database,
      color: "#134467",
      // Navy
      bg: "bg-[#134467]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-4 rounded-xl border border-slate-100", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-[#134467] mb-2 text-sm", children: "Customers (B2B & B2C)" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-4 space-y-1 text-sm text-slate-600", children: [
            /* @__PURE__ */ jsx("li", { children: "Name, phone, email" }),
            /* @__PURE__ */ jsx("li", { children: "Addresses (billing, pickup, delivery)" }),
            /* @__PURE__ */ jsx("li", { children: "Parcel details" }),
            /* @__PURE__ */ jsx("li", { children: "Payment and invoice information" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-4 rounded-xl border border-slate-100", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-[#134467] mb-2 text-sm", children: "Drivers (Contractors)" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-4 space-y-1 text-sm text-slate-600", children: [
            /* @__PURE__ */ jsx("li", { children: "Name, contact details" }),
            /* @__PURE__ */ jsx("li", { children: "Driving licence & vehicle info" }),
            /* @__PURE__ */ jsx("li", { children: "Insurance details" }),
            /* @__PURE__ */ jsx("li", { children: "Bank details for payments" })
          ] })
        ] })
      ] })
    },
    {
      title: "3. How We Use Your Data",
      icon: Eye,
      color: "#E53935",
      // Red
      bg: "bg-[#E53935]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "We process data to:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 grid sm:grid-cols-2 gap-1", children: [
          /* @__PURE__ */ jsx("li", { children: "Provide and manage courier services" }),
          /* @__PURE__ */ jsx("li", { children: "Arrange collections and deliveries" }),
          /* @__PURE__ */ jsx("li", { children: "Communicate with customers" }),
          /* @__PURE__ */ jsx("li", { children: "Manage business accounts and invoices" }),
          /* @__PURE__ */ jsx("li", { children: "Verify and pay self-employed drivers" }),
          /* @__PURE__ */ jsx("li", { children: "Improve our website and operations" }),
          /* @__PURE__ */ jsx("li", { children: "Meet legal and regulatory obligations" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm italic text-slate-400 mt-2", children: "We may send marketing updates only if you have opted in." })
      ] })
    },
    {
      title: "4. Legal Basis for Processing",
      icon: Scale,
      color: "#F5EB18",
      // Yellow
      bg: "bg-[#F5EB18]/20",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "We rely on the following legal grounds:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Contract:" }),
            " Providing courier services."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Legitimate Interest:" }),
            " Business operations, fraud prevention."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Legal Obligation:" }),
            " Tax, accounting, verification."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Consent:" }),
            " Marketing communications."
          ] })
        ] })
      ] })
    },
    {
      title: "5. Sharing Your Information",
      icon: Users,
      color: "#48AEDD",
      // Sky Blue
      bg: "bg-[#48AEDD]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "We may share data with:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 grid sm:grid-cols-2 gap-1", children: [
          /* @__PURE__ */ jsx("li", { children: "Subcontracted drivers" }),
          /* @__PURE__ */ jsx("li", { children: "Third-party couriers" }),
          /* @__PURE__ */ jsx("li", { children: "Payment processors" }),
          /* @__PURE__ */ jsx("li", { children: "IT/hosting providers" }),
          /* @__PURE__ */ jsx("li", { children: "Regulators if legally required" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 inline-block bg-[#E53935]/10 px-3 py-1 rounded text-[#E53935] text-sm font-bold", children: "We never sell personal data." })
      ] })
    },
    {
      title: "6. Data Storage & Retention",
      icon: Server,
      color: "#134467",
      // Navy
      bg: "bg-[#134467]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "We keep your data only as long as needed:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Delivery & customer records:" }),
            " Up to 6 years"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Driver records:" }),
            " Up to 6 years"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Website analytics:" }),
            " 12–24 months"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 mt-1", children: "Data is stored securely on encrypted systems." })
      ] })
    },
    {
      title: "7. Cookies",
      icon: Cookie,
      color: "#F5EB18",
      // Yellow
      bg: "bg-[#F5EB18]/20",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "Our website uses cookies for functionality, analytics, and improving user experience." }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "You may disable cookies in your browser settings at any time." })
      ] })
    },
    {
      title: "8. Your Rights",
      icon: UserCheck,
      color: "#E53935",
      // Red
      bg: "bg-[#E53935]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "Under the UK GDPR, you have the right to:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 grid sm:grid-cols-2 gap-1", children: [
          /* @__PURE__ */ jsx("li", { children: "Access your data" }),
          /* @__PURE__ */ jsx("li", { children: "Correct inaccuracies" }),
          /* @__PURE__ */ jsx("li", { children: "Request deletion" }),
          /* @__PURE__ */ jsx("li", { children: "Object to processing" }),
          /* @__PURE__ */ jsx("li", { children: "Restrict processing" }),
          /* @__PURE__ */ jsx("li", { children: "Request data portability" }),
          /* @__PURE__ */ jsx("li", { children: "Withdraw consent (marketing)" })
        ] })
      ] })
    },
    {
      title: "9. Security",
      icon: Lock,
      color: "#48AEDD",
      // Sky Blue
      bg: "bg-[#48AEDD]/10",
      content: /* @__PURE__ */ jsx("p", { children: "We use encryption, secure servers, access controls, and regular monitoring to protect your information. However, no online system is 100% secure." })
    },
    {
      title: "10. Changes to This Policy",
      icon: Globe,
      color: "#134467",
      // Navy
      bg: "bg-[#134467]/10",
      content: "We may update this Privacy Policy anytime. The latest version will always appear on our website."
    },
    {
      title: "11. Complaints",
      icon: AlertCircle,
      color: "#E53935",
      // Red
      bg: "bg-[#E53935]/10",
      content: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { children: "If you have concerns, contact us first." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "You may also contact the Information Commissioner’s Office (ICO) at",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://ico.org.uk",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-[#48AEDD] font-bold hover:underline",
              children: "ico.org.uk"
            }
          ),
          "."
        ] })
      ] })
    },
    {
      title: "12. Children’s Privacy",
      icon: Users,
      color: "#F5EB18",
      // Red
      bg: "bg-[#F5EB18]/20",
      content: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsx("p", { children: "We do not intend to collect or knowingly collect personal information from children. We do not target children with our services." }) })
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 overflow-x-hidden font-sans selection:bg-[#E53935] selection:text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-[#48AEDD]/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-[#48AEDD]/5 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-10 w-64 h-64 bg-[#F5EB18]/10 rounded-full blur-3xl" })
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
              /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-[#48AEDD]" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD] font-bold text-xs tracking-widest uppercase", children: "Trust & Security" })
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
              "Privacy ",
              /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "Policy" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "text-lg sm:text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium",
              fadeInUp,
              "animation-delay-200"
            ),
            children: "(UK GDPR Compliant)"
          }
        ),
        /* @__PURE__ */ jsxs(
          "p",
          {
            className: cn(
              "text-sm text-slate-400",
              fadeInUp,
              "animation-delay-300"
            ),
            children: [
              "Last Updated: ",
              (/* @__PURE__ */ new Date()).toLocaleDateString()
            ]
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
            /* @__PURE__ */ jsx("div", { className: "bg-[#48AEDD] p-8 sm:p-10 text-white", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-[#F5EB18] flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h2", { className: "font-bold text-xl mb-2 text-[#F5EB18]", children: "Data Protection Commitment" }),
                /* @__PURE__ */ jsx("p", { className: "text-white/90 leading-relaxed", children: "FourSix46® Global Ltd, trading as Route46 Couriers, is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, store and safeguard personal information in accordance with the UK GDPR and the Data Protection Act 2018." })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "p-8 sm:p-12 space-y-10", children: privacySections.map((section, index) => /* @__PURE__ */ jsxs("section", { className: "group", children: [
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
              index !== privacySections.length - 1 && /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-slate-100 mt-10 ml-16" })
            ] }, index)) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-8 text-center border-t border-slate-100", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F5EB18]/20 mb-4", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-6 h-6 text-[#E53935]" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 font-medium", children: "Your data privacy is our top priority." }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: "To exercise your rights, please contact our privacy team." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("mt-12 text-center", fadeInUp, "animation-delay-700"),
          children: /* @__PURE__ */ jsxs("p", { className: "text-slate-500", children: [
            "Questions about privacy?",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/contact",
                className: "text-[#48AEDD] hover:underline font-bold",
                children: "Contact Support"
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
  PrivacyPolicyPage as default
};
