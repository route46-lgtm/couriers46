import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { CheckCircle2, Building2, Quote, PawPrint, Target, Truck, Users, Shield, TrendingUp, MapPin, User, Globe, Layers } from "lucide-react";
import { c as cn } from "../../main.mjs";
import { F as Footer } from "./Footer-BW1VuM-V.js";
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
import "react-helmet-async";
const fadeInUp = "animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out fill-mode-forwards";
function TypingHighlight({ text, speed = 80 }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  const isTypingComplete = displayed.length === text.length;
  return /* @__PURE__ */ jsxs("span", { className: "font-extrabold text-4xl text-[#E53935] whitespace-pre-wrap max-w-md", children: [
    displayed,
    !isTypingComplete && /* @__PURE__ */ jsx("span", { className: "animate-blink", children: "|" }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s step-start 0s infinite; }
      ` })
  ] });
}
function AboutPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white overflow-x-hidden font-sans", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative py-20 sm:py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#48AEDD]/10 rounded-full blur-3xl -z-10" }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 text-center max-w-4xl relative z-10", children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "inline-block py-1 px-4 rounded-full bg-[#E53935]/10 text-[#E53935] font-bold text-sm mb-6 tracking-wider uppercase border border-[#E53935]/20",
              fadeInUp
            ),
            children: "NATIONWIDE COURIER NETWORK"
          }
        ),
        /* @__PURE__ */ jsxs(
          "h1",
          {
            className: cn(
              "text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#48AEDD] mb-6 tracking-tight leading-tight",
              fadeInUp,
              "animation-delay-100"
            ),
            children: [
              "About ",
              /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "Route46 Couriers" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "text-lg sm:text-xl text-[#134467]/80 leading-relaxed max-w-2xl mx-auto font-medium mb-8",
              fadeInUp,
              "animation-delay-200"
            ),
            children: "A nationwide courier network backed by FourSix46® Global Ltd"
          }
        ),
        /* @__PURE__ */ jsxs(
          "p",
          {
            className: cn(
              "text-base sm:text-lg text-[#134467]/70 leading-relaxed max-w-3xl mx-auto",
              fadeInUp,
              "animation-delay-300"
            ),
            children: [
              "Route46 Couriers is a UK courier service provider offering reliable same day and scheduled delivery solutions across the United Kingdom. Operating through a nationwide network of professional courier drivers and vehicles, Route46 Couriers connects businesses and individuals with fast, secure, and dependable logistics solutions. Route46 Couriers is a trading brand of",
              " ",
              /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "FourSix46® Global Ltd" }),
              ", a UK-registered company focused on building scalable logistics and technology ventures."
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 pb-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-24", children: [
      /* @__PURE__ */ jsxs("section", { className: cn("space-y-8", fadeInUp), children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-100 rounded-3xl p-8 shadow-sm max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-sm font-black text-[#134467] uppercase tracking-widest mb-5 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#48AEDD]" }),
            "Key Highlights"
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
            "Same day courier services across the UK",
            "Access to thousands of drivers and vehicles nationwide",
            "Fast collection windows and reliable delivery timelines",
            "Professional courier network for businesses and individuals",
            "Fully insured and industry-compliant transport operations"
          ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-0.5 w-5 h-5 rounded-full bg-[#48AEDD]/10 text-[#48AEDD] text-xs font-black flex items-center justify-center flex-shrink-0", children: "✓" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#134467]/75 font-medium text-sm leading-relaxed", children: item })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block text-[11px] font-black uppercase tracking-[0.2em] bg-[#134467]/5 text-[#134467] px-5 py-2 rounded-full border border-[#134467]/10 mb-4", children: "Who We Are" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl font-bold text-[#134467] mb-4", children: [
            "How ",
            /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "Route46 Works" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-12 h-1 rounded-full bg-[#E53935] mx-auto mb-6" }),
          /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg text-[#134467]/75 leading-relaxed", children: "Route46 Couriers was established to simplify access to professional courier services across the UK. Through a modern logistics model and access to thousands of independent courier drivers and vehicles nationwide, Route46 Couriers enables rapid collection, time-critical deliveries, and flexible transport solutions for businesses and individuals. Whether it is urgent documents, parcels, pallet shipments, or scheduled business deliveries, Route46 Couriers ensures that shipments are handled by experienced courier professionals operating under recognised UK logistics standards." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "section",
        {
          className: cn(
            "relative bg-[#134467] rounded-[3rem] p-8 sm:p-16 overflow-hidden text-white shadow-2xl shadow-blue-900/20",
            fadeInUp
          ),
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-[#48AEDD] rounded-full blur-[120px] opacity-10" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-[#F5EB18] rounded-full blur-[120px] opacity-10" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 space-y-6 max-w-4xl", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10", children: /* @__PURE__ */ jsx(Building2, { className: "w-7 h-7 text-[#F5EB18]" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-black uppercase tracking-[0.2em] text-[#F5EB18]", children: "Parent Company" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl font-bold text-white", children: [
                "Our Parent Company —",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-[#F5EB18]", children: "FourSix46®" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-12 h-1 rounded-full bg-[#F5EB18]" }),
              /* @__PURE__ */ jsxs("p", { className: "text-white/80 text-lg leading-relaxed", children: [
                "Route46 Couriers operates under the umbrella of",
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "FourSix46® Global Ltd" }),
                ", a UK-based company focused on developing scalable ventures across logistics, technology, and digital platforms. FourSix46® represents a long-term brand ecosystem designed to support multiple industries through innovation, reliability, and structured operational standards."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-white/80 text-lg leading-relaxed", children: "As the parent company, FourSix46® provides the strategic foundation, operational systems, and long-term vision behind Route46 Couriers and other future ventures." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "section",
        {
          className: cn(
            "grid lg:grid-cols-12 gap-12 items-center",
            fadeInUp,
            "animation-delay-300"
          ),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 relative group max-w-xs sm:max-w-sm mx-auto", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#134467] rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-5" }),
              /* @__PURE__ */ jsx("div", { className: "absolute -inset-2 bg-gradient-to-tr from-[#E53935] to-[#48AEDD] rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" }),
              /* @__PURE__ */ jsx("div", { className: "relative bg-white p-2 rounded-2xl shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-xl aspect-[4/5]", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "/FourSix_Logo.jpeg",
                    alt: "FourSix46 Logo",
                    className: "w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#134467]/90 via-[#134467]/20 to-transparent opacity-80" })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -top-5 -right-5 w-16 h-16 bg-[#E53935] text-white rounded-full flex items-center justify-center text-2xl font-black shadow-lg border-4 border-white rotate-12 group-hover:rotate-0 transition-transform duration-300 z-20", children: "46" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-[#48AEDD] font-bold tracking-wide uppercase text-sm", children: [
                /* @__PURE__ */ jsx(Quote, { className: "w-5 h-5 fill-current" }),
                "Origin Story"
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl font-bold text-[#134467] leading-tight", children: [
                "A Mark of ",
                /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "IDENTITY." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-lg text-[#134467]/80 leading-relaxed", children: [
                /* @__PURE__ */ jsxs("p", { children: [
                  "Since 2018, ",
                  /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "46" }),
                  " has been more than just digits — it has been a personal symbol of meaning, luck, and drive. 46 became part of everyday life, a mark of IDENTITY."
                ] }),
                /* @__PURE__ */ jsx("p", { children: "When it was time to step into the world of business, the vision was clear: build a brand that could stand the test of time, transcend industries, and carry a global presence." }),
                /* @__PURE__ */ jsxs("p", { children: [
                  "That vision became",
                  " ",
                  /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "FourSix46®" }),
                  " — a name born from numbers, yet built to represent limitless growth."
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "section",
        {
          className: cn("grid md:grid-cols-2 gap-10 items-stretch", fadeInUp),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center px-6 md:px-12 py-12", children: [
              /* @__PURE__ */ jsx(
                TypingHighlight,
                {
                  text: '" FourSix46® is more than a company name."'
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "mt-6 text-2xl text-[#134467] font-semibold max-w-md", children: "A house for multi-industry brands." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl group shadow-xl aspect-video md:aspect-auto", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://x.com/46_d_c",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "block w-full h-full",
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/tweet.jpeg",
                      alt: "FourSix46® on Social Media",
                      className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-float cursor-pointer"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0  opacity-60 group-hover:opacity-80 transition-opacity duration-700 rounded-3xl animate-pulse-slow pointer-events-none" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://x.com/46_d_c",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "absolute top-6 right-10 w-10 h-10",
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/X-Logo.png",
                      alt: "X Twitter Icon",
                      className: "w-full h-full object-contain cursor-pointer transition-transform duration-300 hover:scale-110 drop-shadow-lg"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("style", { children: `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
      }
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.45; }
        50% { opacity: 0.7; }
      }
      .animate-pulse-slow {
        animation: pulse-slow 6s ease-in-out infinite;
      }
    ` })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "section",
        {
          className: cn(
            "relative bg-[#134467] rounded-[3rem] p-8 sm:p-16 overflow-hidden text-white shadow-2xl shadow-blue-900/20",
            fadeInUp
          ),
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-[#F5EB18] rounded-full blur-[120px] opacity-10" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-[#48AEDD] rounded-full blur-[120px] opacity-10" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col md:flex-row gap-12 items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "p-6 bg-white/10 rounded-3xl shrink-0 backdrop-blur-md border border-white/10", children: /* @__PURE__ */ jsx(PawPrint, { className: "w-16 h-16 text-[#F5EB18]" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold mb-6 text-white", children: "Why the Okapi?" }),
                /* @__PURE__ */ jsx("p", { className: "text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl", children: "At the heart of our identity is the okapi — A rare and majestic animal, a close relative of the giraffe, but often mistaken for something else due to its zebra-like legs and solitary nature." }),
                /* @__PURE__ */ jsxs("div", { className: "pl-6 border-l-4 border-[#F5EB18]", children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-white text-xl italic mb-2", children: '"Just as the okapi stands out in nature, FourSix46® stands out in business."' }),
                  /* @__PURE__ */ jsx("p", { className: "text-[#F5EB18] font-medium", children: "It represents our uniqueness and commitment to standing out, wherever we go." })
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto px-6 sm:px-0", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-to-br from-[#48AEDD]/20 via-[#E53935]/10 to-[#F5EB18]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" }),
          /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white group-hover:border-[#48AEDD]/50 transition-all duration-500", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/okapi.jpeg",
                alt: "Okapi - Symbol of FourSix46®",
                className: "w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#134467]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -right-6 bg-[#E53935] text-white px-6 py-3 rounded-2xl shadow-xl border-4 border-white transform rotate-3 group-hover:rotate-6 transition-transform duration-300", children: /* @__PURE__ */ jsx("p", { className: "font-bold text-sm uppercase tracking-wider", children: "Unique & Bold" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl sm:text-5xl font-extrabold text-[#E53935] leading-tight", children: [
              "Route46",
              /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD]", children: " Couriers" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "inline-block", children: /* @__PURE__ */ jsx("p", { className: "text-base font-semibold uppercase tracking-widest text-[#134467] border-b-4 border-[#F5EB18] inline-block pb-2", children: "The Courier with a Difference" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-lg text-[#134467]/80 leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: "The first chapter of FourSix46® begins with logistics — one of the fastest-growing industries in the world. Route46 Couriers was launched to bring adaptability, speed, and reliability into courier services." }),
            /* @__PURE__ */ jsx("p", { children: "We combine technology, efficiency, and customer-focused service to ensure every delivery goes beyond expectations. Whether it's last-mile delivery, e-commerce shipping, or corporate logistics, we move with purpose." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-[#F5EB18]/20 to-transparent px-6 py-4 rounded-2xl border-l-4 border-[#E53935]", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-[#E53935]", children: "At Route46 Couriers, we don't just deliver packages." }),
            /* @__PURE__ */ jsx("p", { className: "font-bold text-xl text-[#48AEDD] mt-1", children: "We deliver differently." })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#48AEDD]/10 rounded-2xl p-8 sm:p-12 text-center border border-[#48AEDD]/20", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-[#134467] mb-3", children: "Statement" }),
        /* @__PURE__ */ jsx("p", { className: "text-[#134467]/80 text-lg sm:text-xl font-medium max-w-3xl mx-auto", children: '"This is only the beginning. From couriers to logistics, retail, tech, and beyond — the future of FourSix46® is limitless."' })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "text-center max-w-4xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#134467] text-white mb-2 shadow-lg shadow-[#134467]/20", children: /* @__PURE__ */ jsx(Target, { className: "w-8 h-8" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-[#134467]", children: "Our Mission" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-[#134467]/80 leading-relaxed max-w-3xl mx-auto", children: "At Route46 Couriers, our mission is to provide fast, reliable, and professional courier services across the United Kingdom by connecting businesses and individuals with a trusted nationwide network of courier drivers and vehicles. We aim to make same-day and time-critical deliveries simple, transparent, and dependable — ensuring every shipment, from urgent documents to pallet transport, is handled with care, efficiency, and professional logistics standards." }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6 text-left", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-2xl border border-[#48AEDD]/20 shadow-sm hover:shadow-md transition-shadow duration-300", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-[#48AEDD]/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Truck, { className: "w-5 h-5 text-[#48AEDD]" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-[#134467]", children: "Reliable Courier Services" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[#134467]/75 leading-relaxed text-sm", children: "We are committed to delivering shipments safely and efficiently across the UK. From small parcels to larger freight, every delivery is handled with professional care and industry-standard transport practices." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-2xl border border-[#E53935]/20 shadow-sm hover:shadow-md transition-shadow duration-300", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-[#E53935]/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-[#E53935]" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-[#134467]", children: "Supporting Drivers and Businesses" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[#134467]/75 leading-relaxed text-sm", children: "Our network connects thousands of courier drivers with businesses and individuals who require dependable delivery services. By enabling access to a nationwide courier network, Route46 Couriers helps ensure reliable logistics support across the UK." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-center text-[#134467]", children: "Our Values" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "group bg-white border border-slate-100 rounded-[2rem] p-8 hover:shadow-[0_20px_50px_rgba(229,57,53,0.15)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-[#E53935]/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" }),
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-[#E53935]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E53935] transition-colors relative z-10", children: /* @__PURE__ */ jsx(Shield, { className: "w-7 h-7 text-[#E53935] group-hover:text-white transition-colors" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[#134467] mb-3 relative z-10", children: "1. Safety and Responsibility" }),
            /* @__PURE__ */ jsx("p", { className: "text-[#134467]/80 leading-relaxed text-sm relative z-10", children: "The safety of drivers, customers, and transported goods is our highest priority. We promote responsible driving, secure parcel handling, and professional courier practices throughout every delivery." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "group bg-white border border-slate-100 rounded-[2rem] p-8 hover:shadow-[0_20px_50px_rgba(72,174,221,0.15)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-[#48AEDD]/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" }),
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-[#48AEDD]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#48AEDD] transition-colors relative z-10", children: /* @__PURE__ */ jsx(Users, { className: "w-7 h-7 text-[#48AEDD] group-hover:text-white transition-colors" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[#134467] mb-3 relative z-10", children: "2. Respect for Drivers and Customers" }),
            /* @__PURE__ */ jsx("p", { className: "text-[#134467]/80 leading-relaxed text-sm relative z-10", children: "We believe strong logistics networks are built on trust and respect. Every driver and every customer deserves clear communication, fair service, and professional treatment." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "group bg-white border border-slate-100 rounded-[2rem] p-8 hover:shadow-[0_20px_50px_rgba(245,235,24,0.15)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-[#F5EB18]/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" }),
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-[#F5EB18]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F5EB18] transition-colors relative z-10", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-7 h-7 text-[#134467] transition-colors" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[#134467] mb-3 relative z-10", children: "3. Reliability Through Trust" }),
            /* @__PURE__ */ jsx("p", { className: "text-[#134467]/80 leading-relaxed text-sm relative z-10", children: "Route46 Couriers focuses on long-term relationships with businesses and individuals who depend on reliable delivery services. We build trust through consistent service performance and transparent communication." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-[#134467]/55 font-medium max-w-2xl mx-auto leading-relaxed", children: "Route46 Couriers provides same day courier services across the UK, supported by a nationwide logistics network with access to thousands of courier drivers and vehicles." })
      ] }),
      /* @__PURE__ */ jsxs(
        "section",
        {
          className: cn(
            "relative bg-[#134467] rounded-[3rem] p-8 sm:p-16 overflow-hidden text-white shadow-2xl shadow-blue-900/20",
            fadeInUp
          ),
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-[#48AEDD] rounded-full blur-[120px] opacity-10" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-[#F5EB18] rounded-full blur-[120px] opacity-10" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 grid lg:grid-cols-2 gap-12 items-start", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10", children: /* @__PURE__ */ jsx(MapPin, { className: "w-7 h-7 text-[#F5EB18]" }) }),
                  /* @__PURE__ */ jsx("span", { className: "text-[11px] font-black uppercase tracking-[0.2em] text-[#F5EB18]", children: "Coverage" })
                ] }),
                /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-white", children: "Our Network" }),
                /* @__PURE__ */ jsx("div", { className: "w-12 h-1 rounded-full bg-[#F5EB18]" }),
                /* @__PURE__ */ jsx("p", { className: "text-white/80 text-lg leading-relaxed", children: "Route46 Couriers operates through a nationwide courier network with access to thousands of courier drivers and vehicles across the United Kingdom. This flexible logistics infrastructure allows Route46 Couriers to coordinate deliveries efficiently across cities, towns, and business hubs while maintaining reliable service availability." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-black uppercase tracking-widest text-[#F5EB18] mb-4", children: "Our courier network supports:" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                  "Urgent document transport",
                  "Parcel delivery",
                  "Pallet transport",
                  "Business courier contracts",
                  "Time-critical shipments"
                ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "mt-0.5 w-5 h-5 rounded-full bg-[#F5EB18]/20 text-[#F5EB18] text-xs font-black flex items-center justify-center flex-shrink-0", children: "✓" }),
                  /* @__PURE__ */ jsx("span", { className: "text-white/80 font-medium text-sm leading-relaxed", children: item })
                ] }, i)) })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("section", { className: cn("space-y-8", fadeInUp), children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#134467] text-white mb-4 shadow-lg shadow-[#134467]/20", children: /* @__PURE__ */ jsx(User, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsx("span", { className: "block text-[11px] font-black uppercase tracking-[0.2em] bg-[#134467]/5 text-[#134467] px-5 py-2 rounded-full border border-[#134467]/10 mb-4 w-fit mx-auto", children: "Leadership" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl font-bold text-[#134467] mb-4", children: [
            "About the ",
            /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "Founder" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-12 h-1 rounded-full bg-[#E53935] mx-auto mb-6" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm max-w-3xl mx-auto space-y-5", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-base sm:text-lg text-[#134467]/75 leading-relaxed", children: [
            "Route46 Couriers is founded by",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "Dinesh Koyyalamudi" }),
            ", an entrepreneur focused on building structured business ventures with long-term brand identity."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg text-[#134467]/75 leading-relaxed", children: "Through FourSix46®, Dinesh Koyyalamudi is developing a multi-industry brand ecosystem that combines logistics services, digital platforms, and technology-driven business solutions." }),
          /* @__PURE__ */ jsx("div", { className: "pl-6 border-l-4 border-[#48AEDD] mt-4", children: /* @__PURE__ */ jsx("p", { className: "text-[#134467]/80 font-medium leading-relaxed italic", children: '"His vision behind Route46 Couriers is to create a trusted courier brand that connects businesses and individuals with reliable delivery services across the United Kingdom."' }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-[#48AEDD] to-[#134467] rounded-[3rem] p-10 sm:p-20 text-center text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx(Globe, { className: "absolute top-10 left-10 w-40 h-40 opacity-10 rotate-12" }),
        /* @__PURE__ */ jsx(Layers, { className: "absolute bottom-10 right-10 w-32 h-32 opacity-10 -rotate-12 text-[#F5EB18]" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-3xl mx-auto space-y-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-3xl sm:text-4xl font-bold", children: "Looking Ahead" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/90 text-xl leading-relaxed", children: "Route46 Couriers continues to expand its courier network and logistics capabilities while operating under the strategic direction of FourSix46® Global Ltd. The long-term vision is to build a modern logistics platform that combines strong operational standards with scalable technology infrastructure." }),
          /* @__PURE__ */ jsx("div", { className: "inline-block border-2 border-[#F5EB18] text-[#F5EB18] font-bold py-4 px-10 rounded-full tracking-wide uppercase text-sm hover:bg-[#F5EB18] hover:text-[#134467] transition-colors cursor-default shadow-lg", children: "FourSix46®" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-center gap-2.5 max-w-2xl mx-auto px-4 py-4 rounded-2xl bg-[#134467]/4 border border-[#134467]/10", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#134467]/45 mt-0.5 flex-shrink-0", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "15",
            height: "15",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
              /* @__PURE__ */ jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-[#134467]/55 font-medium leading-relaxed text-left", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-bold text-[#134467]/70", children: [
            "Legal Statement:",
            " "
          ] }),
          "Route46 Couriers is a trading brand of FourSix46® Global Ltd, a company registered in the United Kingdom."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  AboutPage as default
};
