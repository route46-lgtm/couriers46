import { jsxs, jsx } from "react/jsx-runtime";
import { CheckCircle } from "lucide-react";
import { B as Button } from "./button-CGBOOEAe.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../../main.mjs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
function PaySuccessPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-green-50 via-white to-[#134467]/5", children: [
    /* @__PURE__ */ jsx(CheckCircle, { className: "w-20 h-20 text-green-500 mb-6" }),
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-[#134467] mb-3", children: "Payment Successful!" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-2 max-w-sm", children: "Thank you — your payment has been received. A confirmation email will be sent shortly." }),
    sessionId && /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400 font-mono mb-6", children: [
      "Ref: ",
      sessionId
    ] }),
    /* @__PURE__ */ jsx(
      Button,
      {
        className: "bg-[#134467] hover:bg-[#0d2f4a] text-white rounded-full px-8",
        onClick: () => navigate("/"),
        children: "Back to Home"
      }
    )
  ] });
}
export {
  PaySuccessPage as default
};
