import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./button-CGBOOEAe.js";
import { Package, Building2, ShieldCheck, CheckCircle2, HelpCircle, ArrowRight, Send, Zap, MapPin, IceCreamBowl, Truck, ShoppingCart, Building2Icon, Pencil, Quote, Star } from "lucide-react";
import { c as cn } from "../../main.mjs";
import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-BG3FU_wB.js";
import { F as Footer } from "./Footer-BW1VuM-V.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
import "@radix-ui/react-accordion";
const CallToActionSection = ({
  onGetQuote,
  onBusinessEnquiry
}) => /* @__PURE__ */ jsxs(
  "section",
  {
    className: "py-20 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 relative overflow-hidden",
    style: { backgroundColor: "#0D4064" },
    children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-30" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center relative z-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 animate-fade-in", children: "Need a Same Day Courier Delivery?" }),
        /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-in", children: "Route46 Couriers provides fast and reliable courier services across the UK. Through our nationwide logistics network, we have access to thousands of courier drivers and delivery vehicles ready to handle urgent shipments, business deliveries, and time-critical transport." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-scale-in", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              size: "lg",
              variant: "default",
              className: "bg-white text-[#0D4064] hover:bg-white/90 hover-scale shadow-elegant w-full sm:w-auto font-bold",
              onClick: onGetQuote,
              children: [
                /* @__PURE__ */ jsx(Package, { className: "w-5 h-5 mr-2" }),
                "Get a Quote Now"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              size: "lg",
              variant: "outline",
              className: "border-2 border-white text-white hover:bg-white hover:text-[#0D4064] transition-smooth w-full sm:w-auto font-bold",
              onClick: onBusinessEnquiry,
              children: [
                /* @__PURE__ */ jsx(Building2, { className: "w-5 h-5 mr-2" }),
                "Open Business Account"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xl sm:text-3xl font-bold text-white mb-1", children: "24/7" }),
            /* @__PURE__ */ jsx("p", { className: "text-[10px] sm:text-sm text-white/80 leading-tight", children: "Service operating across the UK" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center border-x border-white/10 px-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xl sm:text-3xl font-bold text-white mb-1", children: "4000+" }),
            /* @__PURE__ */ jsx("p", { className: "text-[10px] sm:text-sm text-white/80 leading-tight", children: "Approved Drivers" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xl sm:text-3xl font-bold text-white mb-1", children: "100%" }),
            /* @__PURE__ */ jsx("p", { className: "text-[10px] sm:text-sm text-white/80 leading-tight", children: "Nationwide Courier Coverage" })
          ] })
        ] })
      ] })
    ]
  }
);
const CommitmentSection = ({ benefits }) => /* @__PURE__ */ jsxs("section", { className: "py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden", children: [
  /* @__PURE__ */ jsx("style", { children: `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in-up {
        animation: fadeInUp 0.7s ease-out forwards;
      }
    ` }),
  /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E53935]/20 to-transparent" }),
  /* @__PURE__ */ jsx("div", { className: "absolute -left-20 top-20 w-64 h-64 bg-[#48AEDD]/5 rounded-full blur-3xl pointer-events-none" }),
  /* @__PURE__ */ jsx("div", { className: "absolute -right-20 bottom-20 w-64 h-64 bg-[#F5EB18]/5 rounded-full blur-3xl pointer-events-none" }),
  /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto relative z-10", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "text-center mb-16 animate-fade-in-up",
        style: { opacity: 0 },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 mb-3 px-4 py-1 rounded-full bg-[#134467]/5 border border-[#134467]/10", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 text-[#E53935]" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-[#134467]", children: "Our Promise" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#134467] mb-4", children: [
            "Reliable Same Day Courier Services",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD]", children: "Across the UK" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-[#134467]/80 max-w-2xl mx-auto text-lg", children: [
            "Looking for a reliable same day courier service in the UK? ",
            /* @__PURE__ */ jsx("br", {}),
            "Route46 Couriers provides fast collection and secure delivery for urgent shipments and business logistics."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: benefits.map((benefit, idx) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "group flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm",
          "hover:shadow-xl hover:border-[#E53935]/20 hover:-translate-y-1 transition-all duration-300 cursor-default",
          "animate-fade-in-up"
        ),
        style: {
          animationDelay: `${200 + idx * 100}ms`,
          opacity: 0,
          animationFillMode: "forwards"
        },
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-[#E53935]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E53935] transition-colors duration-300", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-[#E53935] group-hover:text-white transition-colors duration-300" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 pt-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-lg text-[#134467] font-bold group-hover:text-[#134467] transition-colors", children: benefit }),
            /* @__PURE__ */ jsx("div", { className: "w-0 group-hover:w-12 h-0.5 bg-[#F5EB18] mt-2 transition-all duration-500" })
          ] })
        ]
      },
      `${benefit}-${idx}`
    )) })
  ] })
] });
const faqs = [
  {
    question: "How quickly can Route46 Couriers collect my parcel?",
    answer: "Route46 Couriers can arrange courier collection within 60 minutes in most UK cities. Once your booking is confirmed, the nearest available driver is dispatched to your pickup location to collect the parcel and begin delivery immediately. This makes our service ideal for urgent same day deliveries and time-critical shipments."
  },
  {
    question: "Do you offer same day courier delivery across the UK?",
    answer: "Yes. Route46 Couriers provides same day courier services across the UK, including major cities such as London, Cardiff, Birmingham, Manchester, and Bristol. Our courier network ensures fast collection and direct delivery without unnecessary stops, making it perfect for urgent parcels and business deliveries."
  },
  {
    question: "What types of items can be delivered by Route46 Couriers?",
    answer: "Route46 Couriers can transport pallets,documents, parcels, business shipments, retail goods, medical supplies, and time-critical packages. Our courier vehicles are suitable for a wide range of deliveries, ensuring secure and efficient transport across the UK."
  },
  {
    question: "How do I get a courier quote for delivery?",
    answer: "You can request a courier quote directly through the Route46 Couriers website using our Quick Quote form. Simply enter the pickup location, delivery destination, and parcel details to receive an estimated courier price instantly."
  },
  {
    question: "Can businesses use Route46 Couriers for regular deliveries?",
    answer: "Yes. Route46 Couriers supports business courier services for companies that require regular deliveries or urgent logistics support. Businesses can create an account and arrange deliveries for documents, parcels, and time-sensitive shipments across the UK."
  },
  {
    question: "Is parcel tracking available during delivery?",
    answer: "Yes. Route46 Couriers provides real-time delivery updates, allowing customers to monitor the progress of their shipment from collection to final delivery. This ensures transparency and peace of mind throughout the courier journey."
  }
];
const FaqSection = () => {
  const [openItems, setOpenItems] = useState(["faq-0"]);
  const navigate = useNavigate();
  const handleAccordionChange = (values) => {
    setOpenItems(values);
  };
  return /* @__PURE__ */ jsxs("section", { className: "py-20 px-4 sm:px-8 bg-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
      ` }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 animate-fade-in-up", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#48AEDD]/10 mb-4", children: /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-[#48AEDD]" }) }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#134467]", children: [
          "Frequently Asked ",
          /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "Questions" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[#134467]/80 mt-4 max-w-2xl mx-auto", children: "Everything you need to know about our services, delivery process, and partnerships." })
      ] }),
      /* @__PURE__ */ jsx(
        Accordion,
        {
          type: "multiple",
          value: openItems,
          onValueChange: handleAccordionChange,
          className: "space-y-4 animate-fade-in-up",
          style: { animationDelay: "200ms", opacity: 0 },
          children: faqs.map((faq, idx) => /* @__PURE__ */ jsxs(
            AccordionItem,
            {
              value: `faq-${idx}`,
              className: "\n                border border-[#48AEDD]/30 rounded-2xl px-6 py-2 \n                bg-white transition-all duration-300 \n                hover:shadow-md hover:border-[#48AEDD]\n                data-[state=open]:border-[#48AEDD] data-[state=open]:bg-[#48AEDD]/5\n                data-[state=open]:shadow-lg\n              ",
              children: [
                /* @__PURE__ */ jsx(
                  AccordionTrigger,
                  {
                    className: "\n                  text-left text-lg sm:text-xl font-bold text-[#134467]\n                  no-underline hover:no-underline decoration-none\n                  transition-colors duration-300\n                  py-4\n                ",
                    children: faq.question
                  }
                ),
                /* @__PURE__ */ jsx(AccordionContent, { className: "text-[#2B7CB3] text-base leading-relaxed pb-4 pt-0 font-medium", children: faq.answer })
              ]
            },
            faq.question
          ))
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "mt-10 text-center animate-fade-in-up",
          style: { animationDelay: "400ms", opacity: 0 },
          children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => navigate("/faqs"),
              className: "\n              inline-flex items-center gap-3 px-8 py-4 \n              bg-gradient-to-r from-[#134467] to-[#48AEDD] \n              text-white font-bold text-lg rounded-full \n              shadow-lg hover:shadow-xl \n              transform hover:scale-105 \n              transition-all duration-300 \n              group\n            ",
              children: [
                "View All FAQs",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" })
              ]
            }
          )
        }
      )
    ] })
  ] });
};
const HeroSection = ({
  onSendParcel,
  onJoinNetwork,
  backgroundImageUrl = "/route462.jpeg",
  mobileBackgroundImageUrl = "/route463mob.png"
}) => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "\n        relative\n        flex items-center justify-center\n        overflow-hidden\n        bg-[#134467]\n        min-h-[100svh] sm:min-h-screen\n        px-4 sm:px-8 lg:px-12\n        pt-24 pb-10 sm:pt-28 sm:pb-20 lg:pt-0 lg:pb-0\n        -mt-20 lg:mt-0\n      ",
      children: [
        /* @__PURE__ */ jsx("style", { children: `
        @keyframes blob {
          0%   { transform: translate(0px,   0px) scale(1);   }
          33%  { transform: translate(30px, -50px) scale(1.1); }
          66%  { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px,   0px) scale(1);   }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0px rgba(255,255,255,0.2); }
          50%       { box-shadow: 0 0 0 5px rgba(255,255,255,0.1); }
        }
        .animate-blob         { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fade-in-up   { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-pulse-glow   { animation: pulseGlow 2s infinite; }
      ` }),
        /* @__PURE__ */ jsxs("picture", { className: "absolute inset-0 z-0 w-full h-full", children: [
          /* @__PURE__ */ jsx("source", { media: "(min-width: 640px)", srcSet: backgroundImageUrl }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: mobileBackgroundImageUrl,
              alt: "",
              className: "w-full h-full object-fill opacity-80 sm:opacity-75",
              fetchPriority: "high",
              loading: "eager",
              width: "900",
              height: "1600",
              decoding: "async"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#0a2538]/85 via-[#0a2538]/60 to-[#0a2538]/20 z-10" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0a2538]/75 via-[#0a2538]/25 to-transparent z-10 sm:hidden" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-72 h-72 bg-[#48AEDD] rounded-full mix-blend-screen filter blur-[100px] opacity-25 animate-blob z-10" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-72 h-72 bg-[#f5eb18] rounded-full mix-blend-screen filter blur-[100px] opacity-15 animate-blob animation-delay-2000 z-10" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 left-20 w-72 h-72 bg-[#E53935] rounded-full mix-blend-screen filter blur-[100px] opacity-15 animate-blob animation-delay-4000 z-10" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "hidden lg:flex absolute top-7 left-8 z-50 items-center animate-fade-in-up",
            style: { animationDelay: "0ms" },
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 px-4 py-3 rounded-2xl bg-[#0a2538]/60 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.35)]", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/route46logo.png",
                  alt: "Route46 Logo",
                  className: "w-14 h-14 object-contain drop-shadow-lg flex-shrink-0"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "h-10 w-[2px] rounded-full bg-[#f5eb18] shadow-[0_0_10px_rgba(245,235,24,0.6)] flex-shrink-0" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xl font-black text-white tracking-tight leading-none drop-shadow-sm whitespace-nowrap", children: "Route46 Couriers" }),
                /* @__PURE__ */ jsx("span", { className: "text-[0.6rem] font-bold text-[#f5eb18] tracking-[0.18em] uppercase leading-tight mt-1 whitespace-nowrap", children: "The Courier with a difference" })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center z-20 lg:min-h-screen lg:py-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left lg:pt-24", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "inline-flex items-center justify-center mb-4 sm:mb-5 animate-fade-in-up",
                style: { animationDelay: "80ms" },
                children: /* @__PURE__ */ jsxs("div", { className: "px-4 sm:px-5 py-2 rounded-full bg-transparent border border-white/70 text-white text-[11px] sm:text-xs font-bold tracking-wide uppercase animate-pulse-glow flex items-center gap-2 backdrop-blur-sm", children: [
                  /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#48AEDD] flex-shrink-0" }),
                  "UK-WIDE COURIER NETWORK"
                ] })
              }
            ),
            /* @__PURE__ */ jsxs(
              "h1",
              {
                className: "text-[2.1rem] sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-5 leading-[1.08] drop-shadow-xl animate-fade-in-up",
                style: { animationDelay: "160ms" },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD] whitespace-nowrap", children: "Same Day Courier" }),
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsx("span", { className: "block mt-1 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#F81E30] to-[#ff6b6b]", children: "Service In UK" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "p",
              {
                className: "text-sm sm:text-lg text-gray-200 mb-7 sm:mb-9 leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-md animate-fade-in-up",
                style: { animationDelay: "240ms" },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Route46" }),
                  " Couriers provides urgent parcel delivery, document transport, and time-critical logistics across the United Kingdom, offers rapid collection, direct delivery, and real-time tracking for businesses and individuals who require fast and secure transport solutions."
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up",
                style: { animationDelay: "320ms" },
                children: [
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      size: "lg",
                      onClick: onSendParcel,
                      className: "\n                w-full sm:w-auto px-7 text-base font-bold\n                bg-[#E53935] hover:bg-[#C62828] text-white rounded-xl\n                shadow-[0_10px_20px_rgba(229,57,53,0.35)]\n                hover:shadow-[0_15px_30px_rgba(229,57,53,0.5)]\n                hover:-translate-y-1 transition-all duration-300\n                flex items-center justify-center gap-2\n              ",
                      children: [
                        /* @__PURE__ */ jsx(Send, { className: "w-5 h-5 flex-shrink-0" }),
                        "Quick Quote"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      size: "lg",
                      variant: "outline",
                      onClick: onJoinNetwork,
                      className: "\n                w-full sm:w-auto px-7 text-base font-bold rounded-xl\n                flex items-center justify-center gap-2\n                border-2 border-[#f5eb18]\n                text-white bg-transparent\n                hover:bg-[#f5eb18]/20\n                hover:shadow-[0_10px_20px_-5px_rgba(245,235,24,0.45)]\n                hover:-translate-y-1 transition-all duration-300\n              ",
                      children: [
                        /* @__PURE__ */ jsx(Building2, { className: "w-5 h-5 flex-shrink-0" }),
                        "Join Our Courier Network"
                      ]
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block" })
        ] })
      ]
    }
  );
};
const MetricsSectionRetain = () => /* @__PURE__ */ jsxs("section", { className: "px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 lg:-mt-20 relative z-30 mb-12 sm:mb-16", children: [
  /* @__PURE__ */ jsx("style", { children: `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
    ` }),
  /* @__PURE__ */ jsx("div", { className: "max-w-[850px] mx-auto", children: /* @__PURE__ */ jsx("div", { className: "animate-fade-in-up", children: /* @__PURE__ */ jsxs("div", { className: "relative animate-float", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#E53935]/20 via-[#48AEDD]/20 to-[#F5EB18]/20 rounded-[1.5rem] blur-2xl transform scale-105" }),
    /* @__PURE__ */ jsxs("div", { className: "relative bg-white p-4 sm:p-6 rounded-[1.5rem] shadow-xl border border-white/50", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 justify-between items-stretch", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#E53935]/30 hover:bg-[#E53935]/5 transition-colors duration-300 group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsx(Zap, { className: "w-5 h-5 text-[#E53935]" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold text-[#134467] text-sm sm:text-base", children: "Same Day Delivery" }),
            /* @__PURE__ */ jsx("p", { className: "text-[10px] sm:text-xs text-[#134467]/80 mt-0.5", children: "Urgent courier delivery available across the UK" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#48AEDD]/30 hover:bg-[#48AEDD]/5 transition-colors duration-300 group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-[#48AEDD]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-[#48AEDD]" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold text-[#134467] text-sm sm:text-base", children: "Live Tracking" }),
            /* @__PURE__ */ jsx("p", { className: "text-[10px] sm:text-xs text-[#134467]/80 mt-0.5", children: "Track your shipment in real time with delivery updates" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#F5EB18]/50 hover:bg-[#F5EB18]/10 transition-colors duration-300 group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-[#F5EB18]/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-[#134467]" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold text-[#134467] text-sm sm:text-base", children: "60 Mins Pickup" }),
            /* @__PURE__ */ jsx("p", { className: "text-[10px] sm:text-xs text-[#134467]/80 mt-0.5", children: "Courier collection within 60 minutes in major UK cities" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 sm:mt-4 p-3 sm:p-4 bg-gradient-to-r from-slate-50 to-white border border-slate-100 rounded-xl text-center relative overflow-hidden shadow-inner", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col sm:flex-row items-center sm:items-baseline justify-center gap-1 sm:gap-3 text-[#134467]", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-baseline gap-1.5", children: /* @__PURE__ */ jsx("span", { className: "text-xl sm:text-2xl font-extrabold text-[#E53935]", children: "On a Mission to cut CO2 Emissions" }) }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline text-[#F5EB18] font-extrabold text-lg mx-1 self-center", children: "|" }),
        /* @__PURE__ */ jsx("span", { className: "font-bold text-[#134467]/90 text-xs sm:text-sm", children: "Upto 30% per Delivery" })
      ] }) })
    ] })
  ] }) }) })
] });
const SplitFeatureSection = ({
  eyebrow,
  title,
  description,
  image,
  benefits,
  cta,
  secondaryCta,
  reverse = false,
  highlight
}) => {
  const renderImageSection = () => /* @__PURE__ */ jsxs("div", { className: "relative animate-float-slow flex justify-center items-center w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#48AEDD]/20 to-[#F5EB18]/20 rounded-[3rem] blur-3xl scale-95 -z-10" }),
    /* @__PURE__ */ jsxs("div", { className: "relative rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-2xl w-full aspect-square lg:aspect-[4/3] max-h-[500px]", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: image,
          alt: title,
          className: "w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
        }
      ),
      highlight && /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" }),
      highlight && /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300", children: highlight })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-6 -right-6 w-24 h-24 bg-[#F5EB18] rounded-full opacity-20 blur-xl -z-10" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -left-6 w-32 h-32 bg-[#E53935] rounded-full opacity-10 blur-xl -z-10" })
  ] });
  return /* @__PURE__ */ jsxs("section", { className: "py-16 sm:py-20 px-4 sm:px-8 lg:px-12 overflow-hidden", children: [
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
      ` }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "max-w-7xl mx-auto grid gap-12 lg:gap-16 items-center",
          reverse ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"
        ),
        children: [
          /* @__PURE__ */ jsxs("div", { className: cn(reverse ? "lg:order-2" : "lg:order-1"), children: [
            eyebrow && /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "w-8 h-[2px] bg-[#E53935]" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-widest font-bold text-[#2B7CB3]", children: eyebrow })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#134467] mb-6 leading-tight", children: title }),
            /* @__PURE__ */ jsx("div", { className: "block lg:hidden mb-8 mt-2", children: renderImageSection() }),
            /* @__PURE__ */ jsx("p", { className: "text-[#134467]/80 text-base sm:text-lg lg:text-base mb-8 leading-relaxed", children: description }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4 mb-10", children: benefits.map((benefit) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#48AEDD]/20 shadow-sm hover:border-[#E53935]/50 hover:shadow-md transition-all duration-300 group",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mt-0.5 w-6 h-6 rounded-full bg-[#E53935]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E53935] transition-colors", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#E53935] group-hover:text-white transition-colors" }) }),
                  /* @__PURE__ */ jsx("p", { className: "text-[#134467] font-medium", children: benefit })
                ]
              },
              benefit
            )) }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4", children: cta && /* @__PURE__ */ jsxs(
              Button,
              {
                size: "lg",
                className: "w-full sm:w-auto h-12 px-8 bg-[#E53935] hover:bg-[#c62828] text-white font-bold rounded-xl shadow-lg hover:shadow-[#E53935]/30 hover:-translate-y-0.5 transition-all",
                onClick: cta.onClick,
                "aria-label": cta.label,
                children: [
                  cta.label,
                  /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "hidden lg:flex justify-center items-center",
                reverse ? "lg:order-1" : "lg:order-2"
              ),
              children: renderImageSection()
            }
          )
        ]
      }
    )
  ] });
};
const trustedBrands = [
  {
    name: "Amma-Ma Foods",
    icon: IceCreamBowl,
    color: "#1a4f0eff",
    // Blue
    className: "hover:text-[#1a4f0eff] hover:bg-[#1a4f0eff]/10 hover:border-[#1a4f0eff]/20"
  },
  {
    name: "Services",
    icon: Truck,
    color: "#d7ce21ff",
    // Yellow
    className: "hover:text-[#d7ce21ff] hover:bg-[#d7ce21ff]/10 hover:border-[#d7ce21ff]/20"
  },
  {
    name: "Spark",
    icon: Zap,
    color: "#48AEDD",
    // Red
    className: "hover:text-[#48AEDD] hover:bg-[#48AEDD]/10 hover:border-[#48AEDD]/20"
  },
  {
    name: "Retail",
    icon: ShoppingCart,
    color: "#E53935",
    // Blue
    className: "hover:text-[#E53935] hover:bg-[#E53935]/10 hover:border-[#E53935]/20"
  },
  {
    name: "E-Commerce",
    icon: Package,
    color: "#134467",
    // Navy
    className: "hover:text-[#134467] hover:bg-[#134467]/10 hover:border-[#134467]/20"
  },
  {
    name: "Hello Amigos",
    icon: Building2Icon,
    color: "#2f9617ff",
    // Blue
    className: "hover:text-[#2f9617ff] hover:bg-[#2f9617ff]/10 hover:border-[#2f9617ff]/20"
  },
  {
    name: "Creators",
    icon: Pencil,
    color: "#e7bc45ff",
    // Red
    className: "hover:text-[#e7bc45ff] hover:bg-[#e7bc45ff]/10 hover:border-[#e7bc45ff]/20"
  },
  {
    name: "Hospitality",
    icon: ShieldCheck,
    color: "#48AEDD",
    // Blue
    className: "hover:text-[#48AEDD] hover:bg-[#48AEDD]/10 hover:border-[#48AEDD]/20"
  }
];
const TrustLogosSection = () => /* @__PURE__ */ jsxs("section", { className: "py-12 sm:py-16 bg-white overflow-hidden relative z-20", children: [
  /* @__PURE__ */ jsx("style", { children: `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 40s linear infinite;
        width: max-content;
      }
      /* Pause animation on hover for better UX */
      .group:hover .animate-marquee {
        animation-play-state: paused;
      }
    ` }),
  /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsx("p", { className: "text-center text-xs sm:text-sm uppercase tracking-[0.3em] text-[#134467]/80 font-extrabold mb-10 sm:mb-12", children: "Trusted by Businesses and Industries Across the UK" }),
    /* @__PURE__ */ jsx("div", { className: "relative group", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-12 sm:gap-16 animate-marquee", children: [...trustedBrands, ...trustedBrands, ...trustedBrands].map(
      (brand, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "flex items-center gap-3 px-6 py-3 rounded-2xl border border-transparent transition-all duration-500 cursor-pointer",
            "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:shadow-lg",
            brand.className
          ),
          children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 bg-slate-50 rounded-xl transition-colors duration-300 group-hover:bg-white", children: /* @__PURE__ */ jsx(brand.icon, { className: "w-6 h-6 sm:w-8 sm:h-8" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap transition-colors duration-300", children: brand.name })
          ]
        },
        `${brand.name}-${idx}`
      )
    ) }) })
  ] })
] });
const FlipCard = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = item.icon;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "relative w-full h-48 sm:h-52 cursor-pointer group [perspective:1000px]",
      onClick: () => setIsFlipped(!isFlipped),
      onMouseLeave: () => setIsFlipped(false),
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]",
            // Mobile: Flip controlled by Click state
            isFlipped ? "[transform:rotateY(180deg)]" : "",
            // Desktop: Flip controlled by Hover
            "lg:group-hover:[transform:rotateY(180deg)]"
          ),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-[#134467] border-2 border-[#F5EB18] rounded-2xl shadow-lg hover:shadow-xl flex flex-col items-center justify-center gap-3 p-6 [backface-visibility:hidden] w-full h-full hover:border-[#F5EB18]/80", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#F5EB18]", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-white/70 text-center leading-snug", children: item.description })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-white border-2 border-[#E53935] text-[#134467] rounded-2xl p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] w-full h-full shadow-xl", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 mb-2 rounded-full bg-[#E53935]/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4 text-[#E53935]" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium leading-relaxed text-[#134467]/90", children: item.detail })
            ] })
          ]
        }
      )
    }
  );
};
const WhyChooseFlipSection = ({ items }) => /* @__PURE__ */ jsxs("section", { className: "py-20 px-4 sm:px-8 lg:px-12 bg-white relative z-20", children: [
  /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-12 animate-fade-in", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-widest font-bold text-[#2B7CB3]", children: "Professional Courier Solutions Across the UK" }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#134467]", children: "Why Choose Route46 Couriers for Same Day Delivery?" })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto", children: items.map((item) => /* @__PURE__ */ jsx(FlipCard, { item }, item.title)) })
] });
const TestimonialsSection = () => {
  const originalTestimonials = [
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
  const testimonials = [
    originalTestimonials[originalTestimonials.length - 2],
    originalTestimonials[originalTestimonials.length - 1],
    ...originalTestimonials,
    originalTestimonials[0],
    originalTestimonials[1]
  ];
  const [activeIndex, setActiveIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);
  const getRealIndex = (index) => {
    if (index < 2) return originalTestimonials.length - 2 + index;
    if (index >= originalTestimonials.length + 2)
      return index - (originalTestimonials.length + 2);
    return index - 2;
  };
  const nextSlide = useCallback(() => {
    if (!isTransitioning) setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  }, [isTransitioning]);
  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setActiveIndex(index + 2);
  };
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 3e3);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);
  useEffect(() => {
    if (activeIndex === testimonials.length - 2) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(2);
      }, 700);
    } else if (activeIndex === 1) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(originalTestimonials.length + 1);
      }, 700);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, testimonials.length, originalTestimonials.length]);
  return /* @__PURE__ */ jsxs("section", { className: "py-20 bg-slate-50 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("style", { children: `
        .testimonial-track {
          --card-width: 85vw;
          --gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .testimonial-track {
            --card-width: 600px;
          }
        }
      ` }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#134467]/10 to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -left-20 top-40 w-72 h-72 bg-[#48AEDD]/5 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -right-20 bottom-10 w-72 h-72 bg-[#F5EB18]/5 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 px-4", children: [
        /* @__PURE__ */ jsx("p", { className: "uppercase tracking-[0.2em] text-[#2B7CB3] text-xs font-bold mb-3", children: "Real Stories" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#134467]", children: [
          "What Our ",
          /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "Customers" }),
          " Say"
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "relative w-full",
          onMouseEnter: () => setIsHovered(true),
          onMouseLeave: () => setIsHovered(false),
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "flex gap-6 ease-in-out testimonial-track",
                isTransitioning ? "transition-transform duration-700" : "transition-none"
              ),
              style: {
                // Logic: Center the active card
                transform: `translateX(calc(50% - (var(--card-width) / 2) - (${activeIndex} * (var(--card-width) + var(--gap)))))`
              },
              children: testimonials.map((testimonial, idx) => {
                const isActive = idx === activeIndex;
                return /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "flex-shrink-0 transition-all duration-700 ease-in-out",
                      "w-[85vw] md:w-[600px]",
                      isActive ? "scale-100 opacity-100" : "scale-90 opacity-50 blur-[1px]"
                    ),
                    children: /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: cn(
                          "bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100 relative flex flex-col items-center text-center h-full transition-shadow",
                          isActive ? "shadow-2xl border-[#F5EB18]/30" : "shadow-sm"
                        ),
                        children: [
                          /* @__PURE__ */ jsx("div", { className: "absolute -top-6 bg-[#134467] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-50", children: /* @__PURE__ */ jsx(Quote, { className: "w-5 h-5" }) }),
                          /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-6 mt-4", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsx(
                            Star,
                            {
                              className: "w-5 h-5 text-[#DAA520] fill-[#DAA520]"
                            },
                            star
                          )) }),
                          /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl md:text-2xl text-[#134467]/80 italic mb-8 leading-relaxed font-medium", children: testimonial.quote }),
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-auto", children: [
                            /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: cn(
                                  "w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-sm",
                                  testimonial.bg
                                ),
                                style: {
                                  color: testimonial.textColor || testimonial.color
                                },
                                children: testimonial.initial
                              }
                            ),
                            /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                              /* @__PURE__ */ jsx("p", { className: "font-bold text-[#134467] text-base", children: testimonial.name }),
                              /* @__PURE__ */ jsx("p", { className: "text-xs text-[#134467]/80 font-bold uppercase tracking-wider", children: testimonial.role })
                            ] })
                          ] })
                        ]
                      }
                    )
                  },
                  idx
                );
              })
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center -space-x-5 mt-12", children: originalTestimonials.map((_, idx) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => handleDotClick(idx),
          className: "p-3 min-w-[44px] min-h-[44px] inline-flex items-center justify-center",
          "aria-label": `Go to testimonial ${idx + 1}`,
          children: /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "h-2 rounded-full transition-all duration-300",
                getRealIndex(activeIndex) === idx ? "bg-[#E53935] w-8" : "bg-[#134467]/20 w-2 hover:bg-[#134467]/40"
              )
            }
          )
        },
        idx
      )) })
    ] })
  ] });
};
function HomePage() {
  const navigate = useNavigate();
  const whyChooseItems = [
    {
      icon: Send,
      title: "Same Day Delivery",
      description: "Fast and reliable same day courier delivery available across the UK for urgent parcels,documents and business shipments",
      detail: "Route46 Couriers provides reliable same day courier services across the UK, ensuring urgent parcels, documents, and business shipments are collected quickly and delivered directly without delays."
    },
    {
      icon: Truck,
      title: "Live Parcel Tracking",
      description: "Track your courier delivery in real time with full visibility from collection to final delivery",
      detail: "Route46 Couriers provides live parcel tracking so customers can monitor their delivery from collection to final destination with complete transparency and real-time updates."
    },
    {
      icon: Building2,
      title: "60 Minute Collection",
      description: "Courier pickup available within 60 minutes in major UK cities for urgent and timecritical deliveries",
      detail: "In most major UK cities, Route46 Couriers can arrange collection within 60 minutes, making it ideal for urgent deliveries, time-sensitive documents, and business logistics."
    }
  ];
  const driverBenefits = [
    "Flexible working hours with competitive courier earnings and full operational support.",
    "Earn money delivering parcels with Route46 Couriers. Driver onboarding, guidance, and insurance support available.",
    "Dedicated support team helping courier drivers manage deliveries and grow their earning potential."
  ];
  const businessBenefits = [
    "Reliable courier delivery solutions designed for businesses that require fast and secure transport.",
    "Flexible courier solutions for businesses with regular delivery requirements.",
    "Trusted courier services helping businesses move parcels, documents, and urgent shipments across the UK."
  ];
  const individualBenefits = [
    "Instant courier quotes with transparent pricing before booking.",
    "Courier collection available within 60 minutes in most UK cities.",
    "Suitable for parcels, documents, pallets, and urgent deliveries."
  ];
  const commitmentBenefits = [
    "Same Day Courier Delivery Across the UK",
    "Transparent Courier Pricing with No Hidden Charges",
    "Professional Courier Drivers and Verified Transport Partners",
    "Real-Time Courier Tracking for Every Delivery",
    "Courier Collection Within 60 Minutes in Major UK Cities",
    "Dedicated 24/7 Customer Support for Urgent Deliveries"
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(
      HeroSection,
      {
        backgroundImageUrl: "/route462.jpeg",
        mobileBackgroundImageUrl: "/route463mob.png",
        onSendParcel: () => navigate("/quick-quote"),
        onJoinNetwork: () => navigate("/for-businesses")
      }
    ),
    /* @__PURE__ */ jsx(MetricsSectionRetain, {}),
    /* @__PURE__ */ jsx(TrustLogosSection, {}),
    /* @__PURE__ */ jsx(WhyChooseFlipSection, { items: whyChooseItems }),
    /* @__PURE__ */ jsx(
      SplitFeatureSection,
      {
        eyebrow: "Become a Courier Driver",
        title: "Driver with Route46 Couriers",
        description: "Join the Route46 Couriers driver network and deliver parcels across the UK with flexible working\nopportunities. Our courier drivers handle urgent deliveries, business shipments, and same day\ncourier services for customers nationwide.",
        image: "/route461.jpeg",
        benefits: driverBenefits,
        cta: {
          label: "Drive with Route46",
          onClick: () => navigate("/become-driver")
        }
      }
    ),
    /* @__PURE__ */ jsx(
      SplitFeatureSection,
      {
        eyebrow: "Courier Services for Businesses",
        title: "Join Our Courier Network",
        description: "Whether you're sending a single parcel or managing regular business deliveries,  Couriers\nprovides reliable same day courier services across the UK. Our courier network supports\nbusinesses with urgent shipments, document transport, and time-critical logistics.",
        image: "/route463.jpeg",
        benefits: businessBenefits,
        reverse: true,
        cta: {
          label: "Join Our Courier Network",
          onClick: () => navigate("/for-businesses")
        },
        highlight: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-secondary", children: "99.2%" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "On-Time Delivery SLA" })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      SplitFeatureSection,
      {
        eyebrow: "INSTANT COURIER QUOTE",
        title: "Request an Instant Courier Quote Across the UK",
        description: "Route46 Couriers provides fast and reliable courier services\nacross the UK. Request an instant courier quote and arrange collection for urgent parcels,\ndocuments, and time-critical deliveries.",
        image: "/route464.jpeg",
        benefits: individualBenefits,
        cta: { label: "Quick Quote", onClick: () => navigate("/quick-quote") },
        highlight: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-secondary", children: "15 mins" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Average courier dispatch time" })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(CommitmentSection, { benefits: commitmentBenefits }),
    /* @__PURE__ */ jsx(TestimonialsSection, {}),
    /* @__PURE__ */ jsx(FaqSection, {}),
    /* @__PURE__ */ jsx(
      CallToActionSection,
      {
        onGetQuote: () => navigate("/quick-quote"),
        onBusinessEnquiry: () => navigate("/for-businesses")
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  HomePage as default
};
