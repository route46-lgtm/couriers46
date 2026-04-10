import { jsx, jsxs } from "react/jsx-runtime";
import { c as cn } from "../../main.mjs";
const fadeInUp = "animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out fill-mode-forwards";
function Footer() {
  const trustBadges = [
    {
      icon: "/RHA-LogoSquare.png",
      title: "RHA Member",
      description: "Approved UK Road Haulage Association Member",
      color: "#48AEDD"
    },
    // {
    //   icon: "/ISO 9001.png",
    //   title: "ISO 9001",
    //   sub: "(In Progress)",
    //   description: "Commitment to quality",
    //   color: "#48AEDD",
    // },
    // {
    //   icon: "/FORS.png",
    //   title: "FORS Ready",
    //   description: "UK fleet safety standard",
    //   color: "#E53935",
    // },
    {
      icon: "/Cyber Essentials.png",
      title: "Cyber Essentials Certified",
      description: "Secure and Protected Systems",
      color: "#dcb004"
    },
    {
      icon: "/FullyInsured.png",
      title: "Fully Insured Courier Services",
      description: "Public Liability and Goods in Transit Coverage",
      color: "#E53935"
    },
    {
      icon: "/ICOclear.jpg",
      title: "ICO Registered",
      description: "Data Protection and Privacy Compliance",
      color: "#48AEDD"
    },
    {
      icon: "/FSB.jpeg",
      title: "Federation of Small Businesses Member",
      description: "Supporting UK Business Standards",
      color: "#134467"
    },
    {
      icon: "/Trustd Verified.png",
      title: "Trustd Verified Business",
      sub: "",
      description: "Fraud Prevention and Identity Verification",
      color: "#E53935"
    }
  ];
  return /* @__PURE__ */ jsx("footer", { className: "bg-white pt-20 pb-10 border-t border-slate-100 font-sans overflow-hidden rounded-t-[1rem]", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 max-w-7xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 sm:mb-20", children: [
      /* @__PURE__ */ jsxs(
        "h2",
        {
          className: cn(
            "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#48AEDD] mb-6 tracking-tight",
            fadeInUp
          ),
          children: [
            "Trusted",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "Industry Accreditations" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "p",
        {
          className: cn(
            "text-base sm:text-lg text-[#134467]/80 max-w-2xl mx-auto leading-relaxed px-4",
            fadeInUp,
            "animation-delay-100"
          ),
          children: "Route46 Couriers operates in accordance with recognised UK industry standards. We are fully insured, registered, and committed to maintaining high standards in safety, logistics operations, and data protection."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "flex flex-wrap xl:flex-nowrap justify-center gap-4 md:gap-8",
          fadeInUp,
          "animation-delay-200"
        ),
        children: trustBadges.map((badge, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex flex-col items-center text-center w-32 md:w-40 group",
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:-translate-y-1 overflow-hidden",
                    "bg-white shadow-sm group-hover:shadow-lg border border-slate-100 p-0"
                  ),
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: badge.icon,
                      alt: badge.title,
                      className: "w-full h-full object-cover"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxs("h3", { className: "text-sm md:text-base font-bold text-[#134467] leading-tight mb-1", children: [
                badge.title,
                badge.sub && /* @__PURE__ */ jsx("span", { className: "block", children: badge.sub })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-[#134467]/80 leading-relaxed font-medium", children: badge.description })
            ]
          },
          index
        ))
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "my-16 border-t border-slate-100" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4 text-center pb-8", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs text-[#134467]/60 font-medium max-w-2xl leading-relaxed", children: "Route46 Couriers provides same day courier services across the UK, including Cardiff, London, Birmingham, Manchester, and Bristol." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-x-6 gap-y-2", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/privacy",
            className: "text-sm text-[#134467]/80 hover:text-[#48AEDD] transition-colors duration-300 font-medium",
            children: "Privacy Policy"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/terms",
            className: "text-sm text-[#134467]/80 hover:text-[#E53935] transition-colors duration-300 font-medium",
            children: "Terms & Conditions"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/cookies",
            className: "text-sm text-[#134467]/80 hover:text-[#DAA520] transition-colors duration-300 font-medium",
            children: "Cookies Policy"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/faqs",
            className: "text-sm text-[#134467]/80 hover:text-[#E53935] transition-colors duration-300 font-medium",
            children: "FAQs"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/refund-policy",
            className: "text-sm text-[#134467]/80 hover:text-[#48AEDD] transition-colors duration-300 font-medium",
            children: "Refund Policy"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-[#134467]/55 font-medium", children: [
        "Route46 Couriers is a trading name of",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://foursix46.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-[#48AEDD] hover:text-[#E53935] transition-colors duration-300",
            children: "FourSix46® Global Ltd."
          }
        ),
        " ",
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://foursix46.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-[#48AEDD] hover:text-[#E53935] transition-colors duration-300",
            children: "FourSix46® Global Ltd."
          }
        ),
        " ",
        "All rights reserved."
      ] })
    ] })
  ] }) });
}
export {
  Footer as F
};
