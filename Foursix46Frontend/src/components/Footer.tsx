import React from "react";
import { Heart } from "lucide-react"; // Only importing Heart as others are replaced by images
import { cn } from "@/lib/utils";
import { useText } from "@/content/SiteContentProvider";

const fadeInUp =
  "animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out fill-mode-forwards";

export default function Footer() {
  const t = useText();
  const trustBadges = [
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
      title: t("footer.badge1.title"),
      description: t("footer.badge1.text"),
      color: "#dcb004",
    },
    {
      icon: "/FullyInsured.png",
      title: t("footer.badge2.title"),
      description: t("footer.badge2.text"),
      color: "#E53935",
    },
    {
      icon: "/ICOclear.jpg",
      title: t("footer.badge3.title"),
      description: t("footer.badge3.text"),
      color: "#48AEDD",
    },

    {
      icon: "/FSB.jpeg",
      title: t("footer.badge4.title"),
      description: t("footer.badge4.text"),
      color: "#134467",
    },
    {
      icon: "/Trustd Verified.png",
      title: t("footer.badge5.title"),
      sub: "",
      description: t("footer.badge5.text"),
      color: "#E53935",
    },
  ];

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100 font-sans overflow-hidden rounded-t-[1rem]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* --- Header Section --- */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#48AEDD] mb-6 tracking-tight",
              fadeInUp,
            )}
          >
            {t("footer.heading")}{" "}
            <span className="text-[#E53935]">
              {t("footer.headingHighlight")}
            </span>
          </h2>
          <p
            className={cn(
              "text-base sm:text-lg text-[#134467]/80 max-w-2xl mx-auto leading-relaxed px-4",
              fadeInUp,
              "animation-delay-100",
            )}
          >
            {t("footer.intro")}
          </p>
        </div>

        {/* --- Trust Badges --- */}
        <div
          className={cn(
            "flex flex-wrap xl:flex-nowrap justify-center gap-4 md:gap-8",
            fadeInUp,
            "animation-delay-200",
          )}
        >
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-32 md:w-40 group"
            >
              {/* Image Box */}
              <div
                className={cn(
                  "w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:-translate-y-1 overflow-hidden",
                  "bg-white shadow-sm group-hover:shadow-lg border border-slate-100 p-0",
                )}
              >
                <img
                  src={badge.icon}
                  alt={badge.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-bold text-[#134467] leading-tight mb-1">
                {badge.title}
                {badge.sub && <span className="block">{badge.sub}</span>}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#134467]/80 leading-relaxed font-medium">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* --- Divider --- */}
        <div className="my-16 border-t border-slate-100" />

        {/* --- Bottom Footer Links --- */}
        {/* <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left pb-8">
          <p className="text-sm text-[#134467]/80 font-medium">
            © {new Date().getFullYear()} Route46 Global Ltd. All rights
            reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="/privacy"
              className="text-sm text-[#134467]/80 hover:text-[#48AEDD] transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-[#134467]/80 hover:text-[#E53935] transition-colors duration-300 font-medium"
            >
              Terms & Conditions
            </a>
            <a
              href="/cookies"
              className="text-sm text-[#134467]/80 hover:text-[#DAA520] transition-colors duration-300 font-medium"
            >
              Cookies Policy
            </a>
            <a
              href="/faqs"
              className="text-sm text-[#134467]/80 hover:text-[#E53935] transition-colors duration-300 font-medium"
            >
              FAQs
            </a>
            <a
              href="/refund-policy"
              className="text-sm text-[#134467]/80 hover:text-[#48AEDD] transition-colors duration-300 font-medium"
            >
              Refund Policy
            </a>
          </div>
        </div> */}

        {/* --- Bottom Footer Links --- */}
        <div className="flex flex-col items-center gap-4 text-center pb-8">
          {/* SEO coverage line */}
          <p className="text-xs text-[#134467]/60 font-medium max-w-2xl leading-relaxed">
            {t("footer.coverage")}
          </p>

          {/* Legal links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="/privacy"
              className="text-sm text-[#134467]/80 hover:text-[#48AEDD] transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-[#134467]/80 hover:text-[#E53935] transition-colors duration-300 font-medium"
            >
              Terms & Conditions
            </a>
            <a
              href="/cookies"
              className="text-sm text-[#134467]/80 hover:text-[#DAA520] transition-colors duration-300 font-medium"
            >
              Cookies Policy
            </a>
            <a
              href="/faqs"
              className="text-sm text-[#134467]/80 hover:text-[#E53935] transition-colors duration-300 font-medium"
            >
              FAQs
            </a>
            <a
              href="/refund-policy"
              className="text-sm text-[#134467]/80 hover:text-[#48AEDD] transition-colors duration-300 font-medium"
            >
              Refund Policy
            </a>
            <a
              href="/sitemap"
              className="text-sm text-[#134467]/80 hover:text-[#134467] transition-colors duration-300 font-medium"
            >
              Sitemap
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#134467]/55 font-medium">
            Route46 Couriers is a trading name of{" "}
            <a
              href="https://foursix46.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#48AEDD] hover:text-[#E53935] transition-colors duration-300"
            >
              FourSix46® Global Ltd.
            </a>{" "}
            © {new Date().getFullYear()}{" "}
            <a
              href="https://foursix46.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#48AEDD] hover:text-[#E53935] transition-colors duration-300"
            >
              FourSix46® Global Ltd.
            </a>{" "}
            All rights reserved.
          </p>

          {/* Company registration — Companies House details */}
          <p className="text-xs text-[#134467]/55 font-medium">
            Company No. 16712658 · Registered in England &amp; Wales · &copy;{" "}
            {new Date().getFullYear()}
          </p>

          {/* Developer Credit */}
          <p className="text-xs text-[#134467]/55 font-medium">
            Designed &amp; built by{" "}
            <a
              href="https://stack46.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#48AEDD] hover:underline"
            >
              Stack46
            </a>{" "}
            · Full-stack software agency
          </p>
        </div>

        {/* --- Developer Credit --- */}
        {/* <div className="pt-8 border-t border-slate-50 text-center">
          <p className="text-base sm:text-lg text-[#134467]/80 flex items-center justify-center gap-2 font-medium">
            Built with
            <Heart className="w-5 h-5 text-[#E53935] fill-[#E53935] animate-pulse" />
            by
            <a
              href="https://staffarc.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#48AEDD] hover:text-[#E53935] transition-colors duration-300"
            >
              StaffArc
            </a>
          </p>
        </div> */}
      </div>
    </footer>
  );
}
