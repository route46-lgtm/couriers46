import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { c as cn } from "../../main.mjs";
function BlockRenderer({ blocks }) {
  if (!(blocks == null ? void 0 : blocks.length)) return null;
  return /* @__PURE__ */ jsx(Fragment, { children: blocks.map((block) => /* @__PURE__ */ jsx(RenderBlock, { block }, block.id)) });
}
function RenderBlock({ block }) {
  switch (block.type) {
    case "bulletSection":
      return /* @__PURE__ */ jsx(BulletSection, { block });
    case "imageLeftTextRight":
      return /* @__PURE__ */ jsx(ImageSplit, { block, imagePos: "left" });
    case "imageRightTextLeft":
      return /* @__PURE__ */ jsx(ImageSplit, { block, imagePos: "right" });
    case "calloutCard":
      return /* @__PURE__ */ jsx(CalloutCard, { block });
    case "ctaBanner":
      return /* @__PURE__ */ jsx(CtaBannerBlock, { block });
    case "richText":
      return /* @__PURE__ */ jsx(RichTextBlock, { block });
    case "textSection":
      return /* @__PURE__ */ jsx(RichTextBlock, { block });
    default:
      return null;
  }
}
function BulletSection({ block }) {
  var _a;
  return /* @__PURE__ */ jsx("section", { className: "py-14 px-5 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    block.heading && /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-black text-[#134467] mb-8 leading-tight", children: block.heading }),
    ((_a = block.bullets) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsx("ul", { className: "grid sm:grid-cols-2 gap-4", children: block.bullets.map((bullet, i) => /* @__PURE__ */ jsxs(
      "li",
      {
        className: "flex items-start gap-3 bg-slate-50 rounded-2xl p-4 border border-slate-100",
        children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-[#E53935] flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#134467]/80 leading-relaxed text-[15px]", children: bullet })
        ]
      },
      i
    )) })
  ] }) });
}
function ImageSplit({
  block,
  imagePos
}) {
  const [imgError, setImgError] = useState(false);
  const ImageEl = (
    /* ✅ KEY FIX: explicit aspect-ratio gives the container a real height */
    /* @__PURE__ */ jsx("div", { className: "relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 shadow-lg flex-shrink-0", children: !imgError && block.imageUrl ? /* @__PURE__ */ jsx(
      "img",
      {
        src: block.imageUrl,
        alt: block.heading || "",
        referrerPolicy: "no-referrer",
        onError: () => setImgError(true),
        className: "absolute inset-0 w-full h-full object-cover"
      }
    ) : /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-slate-400 text-sm", children: "Image unavailable" }) }) })
  );
  const TextEl = /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center py-4", children: [
    block.heading && /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-black text-[#134467] mb-5 leading-tight", children: block.heading }),
    block.richText && /* @__PURE__ */ jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: block.richText },
        className: "prose prose-lg max-w-none text-[#134467]/75 leading-relaxed\n            prose-headings:text-[#134467] prose-a:text-[#48AEDD]"
      }
    )
  ] });
  return /* @__PURE__ */ jsx("section", { className: "py-14 px-5 sm:px-6", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "max-w-6xl mx-auto grid gap-10 md:gap-14 items-center",
        "grid-cols-1 md:grid-cols-2"
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: cn(imagePos === "right" && "md:order-2"), children: ImageEl }),
        /* @__PURE__ */ jsx("div", { className: cn(imagePos === "right" && "md:order-1"), children: TextEl })
      ]
    }
  ) });
}
function CalloutCard({ block }) {
  return /* @__PURE__ */ jsx("section", { className: "py-6 px-5 sm:px-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden bg-gradient-to-br from-[#134467] to-[#1a5a8a] rounded-3xl p-8 sm:p-12 text-center shadow-xl", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-48 h-48 bg-[#48AEDD]/20 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-40 h-40 bg-[#F5EB18]/10 rounded-full blur-3xl pointer-events-none" }),
    block.title && /* @__PURE__ */ jsx("h3", { className: "relative z-10 text-2xl sm:text-3xl font-black text-white mb-3 leading-tight", children: block.title }),
    block.shortText && /* @__PURE__ */ jsx("p", { className: "relative z-10 text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed", children: block.shortText })
  ] }) }) });
}
function CtaBannerBlock({ block }) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsx("section", { className: "py-6 px-5 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto bg-[#E53935] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl shadow-red-900/20", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#c0392b] to-[#E53935] opacity-80" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      block.title && /* @__PURE__ */ jsx("h3", { className: "text-2xl sm:text-3xl font-black text-white mb-3 leading-tight", children: block.title }),
      block.richText && /* @__PURE__ */ jsx(
        "div",
        {
          dangerouslySetInnerHTML: { __html: block.richText },
          className: "prose prose-invert max-w-none text-white/80 mb-8 mx-auto max-w-xl"
        }
      ),
      block.buttonText && /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => navigate(block.buttonLink || "/quick-quote"),
          className: "inline-flex items-center gap-2 bg-white text-[#E53935] font-black\n                uppercase tracking-wide px-8 sm:px-10 py-4 rounded-2xl text-base\n                shadow-xl hover:scale-105 active:scale-95 transition-all\n                w-full sm:w-auto justify-center",
          children: [
            block.buttonText,
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ]
        }
      )
    ] })
  ] }) });
}
function RichTextBlock({ block }) {
  return /* @__PURE__ */ jsx("section", { className: "py-10 px-5 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    block.heading && /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-black text-[#134467] mb-6", children: block.heading }),
    /* @__PURE__ */ jsx(
      "div",
      {
        dangerouslySetInnerHTML: {
          __html: block.content || block.richText || ""
        },
        className: "prose prose-lg max-w-none text-[#134467]/75\n            prose-headings:text-[#134467] prose-a:text-[#48AEDD]"
      }
    )
  ] }) });
}
export {
  BlockRenderer as B
};
