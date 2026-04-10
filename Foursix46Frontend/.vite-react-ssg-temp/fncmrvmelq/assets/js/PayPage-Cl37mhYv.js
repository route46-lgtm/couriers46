import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { C as Card } from "./card-BgLfCdTQ.js";
import { I as Input } from "./input-CBzcThm7.js";
import { B as Button } from "./button-CGBOOEAe.js";
import { T as Textarea } from "./textarea-CF7Vn140.js";
import { C as Checkbox } from "./checkbox-CHthVXHk.js";
import { L as Label } from "./label-KlbQ8bq0.js";
import { ArrowLeft, CreditCard, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { F as Footer } from "./Footer-BW1VuM-V.js";
import { u as useVatSettings } from "./useVatSettings-Cs_lKj_y.js";
import "../../main.mjs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
import "@radix-ui/react-slot";
import "@radix-ui/react-checkbox";
import "@radix-ui/react-label";
function PayPage() {
  const navigate = useNavigate();
  const API_URL = "https://route46.couriers.uk";
  const { settings: vatSettings, loading: vatLoading } = useVatSettings();
  const vatEnabled = vatSettings.vatEnabled;
  const vatRate = vatSettings.vatRate;
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [payment, setPayment] = useState({
    name: "",
    email: "",
    phone: "",
    amountNet: "",
    reference: ""
  });
  const net = Number(payment.amountNet) || 0;
  const vatAmount = useMemo(
    () => vatEnabled ? Number((net * (vatRate / 100)).toFixed(2)) : 0,
    [net, vatEnabled, vatRate]
  );
  const totalAmount = useMemo(
    () => Number((net + vatAmount).toFixed(2)),
    [net, vatAmount]
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    var _a;
    e.preventDefault();
    if (!payment.name || !payment.email || !payment.reference) {
      toast.error("Please complete all required fields.");
      return;
    }
    if (net < 1) {
      toast.error("Minimum payment amount is £1.");
      return;
    }
    if (!confirmed) {
      toast.error("Please confirm the payment details are correct.");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(
        `${API_URL}/api/payments/create-checkout-session`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: payment.name.trim(),
            email: payment.email.trim(),
            phone: (_a = payment.phone) == null ? void 0 : _a.trim(),
            netAmount: net,
            vatEnabled,
            vatRate: vatEnabled ? vatRate : 0,
            reference: payment.reference.trim()
          })
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Payment failed");
      if (!data.url) throw new Error("Stripe session URL not returned");
      window.location.href = data.url;
    } catch (error) {
      console.error("Payment error:", error);
      toast.error(error.message || "Something went wrong.");
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen py-12 px-4 sm:px-8 bg-gradient-to-br from-[#E53935]/5 via-white to-[#134467]/5", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "ghost",
          className: "mb-6",
          onClick: () => navigate("/"),
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
            "Back to Home"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(Card, { className: "p-8 rounded-3xl shadow-xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 mx-auto bg-[#F5EB18] rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(CreditCard, { className: "w-8 h-8 text-[#134467]" }) }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-[#F81629]", children: "Secure Payment" }),
          /* @__PURE__ */ jsx("p", { className: "text-[#48AEDD] mt-2", children: "Pay your invoice securely via Stripe" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[#134467]/10 bg-[#134467]/5 p-5 space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-[#134467] mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-[#134467]/80 leading-relaxed", children: [
              "Payments are processed securely via",
              " ",
              /* @__PURE__ */ jsx("strong", { className: "text-[#134467]", children: "Stripe" }),
              ", a globally trusted payment provider. FourSix46® Global Ltd does not store or have access to your card details."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 text-[#134467] mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-[#134467]/80 leading-relaxed", children: "This payment page is used for invoice settlement, service payments, or agreed charges across FourSix46® ventures. Please ensure the payment amount and reference details are correct before proceeding." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-[#134467]/70 leading-relaxed pl-8", children: "If you have any questions regarding this payment, please contact our team before completing the transaction." })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [
          /* @__PURE__ */ jsxs(Card, { className: "p-6 space-y-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-semibold text-lg", children: "Customer Information" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "name",
                placeholder: "Full Name *",
                required: true,
                value: payment.name,
                onChange: handleChange
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "email",
                type: "email",
                placeholder: "Email Address *",
                required: true,
                value: payment.email,
                onChange: handleChange
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "phone",
                placeholder: "Phone (Optional)",
                value: payment.phone,
                onChange: handleChange
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "p-6 space-y-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-semibold text-lg", children: "Payment Details" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "number",
                name: "amountNet",
                min: "1",
                step: "0.01",
                placeholder: "Amount (ex VAT) £ *",
                required: true,
                value: payment.amountNet,
                onChange: handleChange
              }
            ),
            vatLoading ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin" }),
              "Loading VAT settings…"
            ] }) : vatEnabled ? /* @__PURE__ */ jsx(Input, { value: `VAT Rate: ${vatRate}%`, disabled: true, readOnly: true }) : /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 px-3 py-2 rounded-md border bg-muted/40 text-sm text-muted-foreground", children: "VAT: Not applicable" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                name: "reference",
                required: true,
                placeholder: "Payment Reference (e.g. Quote Ref FSC-QQ-0007 or Job payment – London to Bristol) *",
                value: payment.reference,
                onChange: handleChange
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "p-6 space-y-3 bg-gray-50", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-semibold text-lg", children: "Payment Breakdown" }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Amount" }),
              /* @__PURE__ */ jsxs("span", { children: [
                "£",
                net.toFixed(2)
              ] })
            ] }),
            vatEnabled ? /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "VAT (",
                vatRate,
                "%)"
              ] }),
              /* @__PURE__ */ jsxs("span", { children: [
                "£",
                vatAmount.toFixed(2)
              ] })
            ] }) : /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx("span", { children: "VAT" }),
              /* @__PURE__ */ jsx("span", { children: "Not applicable" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "border-t pt-3 flex justify-between font-bold text-lg", children: [
              /* @__PURE__ */ jsx("span", { children: "Total Payable" }),
              /* @__PURE__ */ jsxs("span", { children: [
                "£",
                totalAmount.toFixed(2)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 rounded-xl border border-[#134467]/15 bg-[#134467]/5 p-4", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                id: "confirm",
                checked: confirmed,
                onCheckedChange: (v) => setConfirmed(!!v),
                className: "mt-0.5"
              }
            ),
            /* @__PURE__ */ jsx(
              Label,
              {
                htmlFor: "confirm",
                className: "text-sm text-[#134467]/80 leading-relaxed cursor-pointer",
                children: "By proceeding, you confirm that the payment amount and reference details are correct."
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              className: "w-full text-lg py-6 bg-[#134467] hover:bg-[#0d2f4a] text-white rounded-xl",
              disabled: loading || vatLoading || !confirmed,
              children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 mr-2 animate-spin" }),
                "Redirecting to Stripe…"
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 mr-2" }),
                "Pay Securely via Stripe — £",
                totalAmount.toFixed(2)
              ] })
            }
          ),
          /* @__PURE__ */ jsxs("p", { className: "text-center text-xs text-muted-foreground leading-relaxed pt-2", children: [
            "Payments are processed by Stripe. All payments are made to",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "FourSix46® Global Ltd" }),
            " and are subject to applicable terms and policies."
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
export {
  PayPage as default
};
