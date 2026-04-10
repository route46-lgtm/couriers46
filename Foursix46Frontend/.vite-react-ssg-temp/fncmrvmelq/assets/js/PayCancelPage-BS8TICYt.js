import { jsxs, jsx } from "react/jsx-runtime";
import { XCircle } from "lucide-react";
import { B as Button } from "./button-CGBOOEAe.js";
import { useNavigate } from "react-router-dom";
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
function PayCancelPage() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center text-center px-6", children: [
    /* @__PURE__ */ jsx(XCircle, { className: "w-20 h-20 text-red-500 mb-6" }),
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-3", children: "Payment Cancelled" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-8", children: "Your payment was not completed." }),
    /* @__PURE__ */ jsx(Button, { onClick: () => navigate("/pay"), children: "Try Again" })
  ] });
}
export {
  PayCancelPage as default
};
