import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { B as Button } from "./button-CGBOOEAe.js";
import { Loader2, XCircle, ArrowLeft, CheckCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
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
function BookingThankYouPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const bookingId = searchParams.get("booking_id");
  const [isVerifying, setIsVerifying] = useState(!!sessionId);
  const [verificationStatus, setVerificationStatus] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (sessionId && bookingId) {
      verifyPayment();
    }
  }, [sessionId, bookingId]);
  const verifyPayment = async () => {
    try {
      const apiUrl = "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/bookings/confirm-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, bookingId })
      });
      if (response.ok) {
        const data = await response.json();
        setVerificationStatus("success");
        if (data.booking) {
          await fetch(`${apiUrl}/api/bookings/notify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data.booking)
          });
        }
      } else {
        setVerificationStatus("error");
      }
    } catch (error) {
      console.error("Payment verification failed:", error);
      setVerificationStatus("error");
    } finally {
      setIsVerifying(false);
    }
  };
  if (isVerifying) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen w-full bg-white flex flex-col items-center justify-center font-sans text-slate-800", children: [
      /* @__PURE__ */ jsx(Loader2, { className: "w-12 h-12 text-[#48AEDD] animate-spin mb-4" }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#134467]", children: "Verifying Payment..." }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 mt-2", children: "Please wait while we confirm your booking." })
    ] });
  }
  if (verificationStatus === "error") {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen w-full bg-white flex flex-col items-center justify-center font-sans text-slate-800 p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-600", children: /* @__PURE__ */ jsx(XCircle, { className: "w-10 h-10" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[#134467] mb-4", children: "Payment Verification Failed" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 mb-8 text-center max-w-md", children: "We couldn't verify your payment. If you believe this is an error, please contact support." }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx(Button, { onClick: () => navigate("/contact"), variant: "outline", children: "Contact Support" }),
        /* @__PURE__ */ jsx(Button, { onClick: () => navigate("/"), children: "Return Home" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen w-full bg-white flex flex-col relative overflow-hidden font-sans text-slate-800", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-[#48AEDD]/5 rounded-full blur-3xl -z-10" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E53935]/5 rounded-full blur-3xl -z-10" }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: 0.5 },
        className: "absolute top-6 left-6 z-20 hidden md:block",
        children: /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            onClick: () => navigate("/"),
            className: "gap-2 hover:bg-slate-100 text-[#134467]",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
              "Return Home"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center justify-center p-6 md:p-12", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
        className: "max-w-6xl w-full bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#48AEDD] via-[#F5EB18] to-[#E53935]" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 space-y-12", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center space-y-6", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: { type: "spring", duration: 0.6 },
                  className: "w-20 h-20 mx-auto bg-[#48AEDD]/10 rounded-full flex items-center justify-center mb-6 text-[#48AEDD]",
                  children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-10 h-10" })
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.2 },
                  className: "text-4xl md:text-5xl font-black text-[#F81629] tracking-tight leading-tight",
                  children: [
                    verificationStatus === "success" ? "Payment Successful!" : "Thank You!",
                    " ",
                    /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
                    /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "Your request has been received." })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.3 },
                  className: "space-y-4 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto",
                  children: [
                    /* @__PURE__ */ jsxs("p", { children: [
                      "We appreciate you for choosing",
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "font-bold text-[#48AEDD]", children: "FourSix46®" }),
                      " ",
                      "for your delivery needs."
                    ] }),
                    /* @__PURE__ */ jsx("p", { children: "Your details have been submitted, and our team is currently reviewing your request. We'll contact you shortly to confirm the arrangements and ensure your item is delivered with care." }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-base bg-[#F5EB18]/10 py-3 px-6 rounded-full w-fit mx-auto mt-6 border border-[#F5EB18]/20", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 bg-[#dcb004] rounded-full animate-pulse" }),
                      /* @__PURE__ */ jsx("span", { className: "font-medium text-[#134467]", children: "You’ll receive updates and support throughout your delivery journey." })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-slate-100" }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.8 },
                className: "text-center",
                children: /* @__PURE__ */ jsxs("p", { className: "text-lg italic text-slate-400 font-medium flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-[#134467]" }),
                  "“Secure. Encrypted. Built for business confidence.”"
                ] })
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}
export {
  BookingThankYouPage as default
};
