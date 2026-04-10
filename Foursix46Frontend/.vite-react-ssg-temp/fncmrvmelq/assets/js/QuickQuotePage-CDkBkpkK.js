import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { B as Button } from "./button-CGBOOEAe.js";
import { I as Input } from "./input-CBzcThm7.js";
import { L as Label } from "./label-KlbQ8bq0.js";
import { T as Textarea } from "./textarea-CF7Vn140.js";
import { C as Checkbox } from "./checkbox-CHthVXHk.js";
import { C as Card } from "./card-BgLfCdTQ.js";
import { ArrowLeft, Send } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { F as Footer } from "./Footer-BW1VuM-V.js";
import { L as LoadingAnimation } from "./LoadingAnimation-De0K9u0o.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../../main.mjs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
import "@radix-ui/react-label";
import "@radix-ui/react-checkbox";
import "framer-motion";
function QuickQuotePage() {
  const navigate = useNavigate();
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const initialState = {
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    pickupName: "",
    pickupPostcode: "",
    pickupDate: "",
    pickupFrom: "",
    pickupTo: "",
    dropName: "",
    dropPostcode: "",
    dropDate: "",
    dropTime: "",
    // ← renamed
    // dropTimeTo: "", // ← new
    asap: false,
    distanceMiles: "",
    jobDescription: "",
    suggestedVehicle: "",
    notes: ""
  };
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.asap && !form.dropTime) {
      toast.error("Please select a drop time window or choose ASAP.");
      return;
    }
    if (Number(form.distanceMiles) <= 0) {
      toast.error("Distance must be greater than 0 miles.");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(
        `${void 0}/api/quick-quotes`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        }
      );
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.message || "Failed to submit quote.");
      setIsSubmitting(true);
      navigate("/get-a-quote/thank-you");
    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isSubmitting && /* @__PURE__ */ jsx(LoadingAnimation, { message: "Submitting your driver application..." }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen py-12 px-4 sm:px-8 bg-gradient-to-br from-[#E53935]/5 via-white to-[#134467]/5", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
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
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 mx-auto bg-[#F5EB18] rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Send, { className: "w-8 h-8 text-[#134467]" }) }),
            /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-[#F81629]", children: "Get an Instant Courier Quote" }),
            /* @__PURE__ */ jsx("p", { className: "text-[#48AEDD] mt-2", children: "Request an instant quote for same day courier delivery across the UK. No booking required." })
          ] }),
          /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [
            /* @__PURE__ */ jsxs(Card, { className: "p-6 space-y-4", children: [
              /* @__PURE__ */ jsx("h2", { className: "font-semibold text-lg text-[#134467]", children: "Pickup" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  name: "pickupName",
                  placeholder: "Pickup Name",
                  required: true,
                  value: form.pickupName,
                  onChange: handleChange
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  name: "pickupPostcode",
                  placeholder: "Pickup Postcode",
                  required: true,
                  value: form.pickupPostcode,
                  onChange: handleChange
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx(
                  Label,
                  {
                    htmlFor: "pickupDate",
                    className: "text-sm text-[#134467]/70 font-medium",
                    children: "Pickup Date"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "pickupDate",
                    type: "date",
                    name: "pickupDate",
                    required: true,
                    min: today,
                    value: form.pickupDate,
                    onChange: handleChange
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsx(
                    Label,
                    {
                      htmlFor: "pickupFrom",
                      className: "text-sm text-[#134467]/70 font-medium",
                      children: "Pickup From"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "pickupFrom",
                      type: "time",
                      name: "pickupFrom",
                      required: true,
                      value: form.pickupFrom,
                      onChange: handleChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsx(
                    Label,
                    {
                      htmlFor: "pickupTo",
                      className: "text-sm text-[#134467]/70 font-medium",
                      children: "Pickup To"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "pickupTo",
                      type: "time",
                      name: "pickupTo",
                      required: true,
                      value: form.pickupTo,
                      onChange: handleChange
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 space-y-4", children: [
              /* @__PURE__ */ jsx("h2", { className: "font-semibold text-lg text-[#134467]", children: "Drop" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  name: "dropName",
                  placeholder: "Drop Name",
                  required: true,
                  value: form.dropName,
                  onChange: handleChange
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  name: "dropPostcode",
                  placeholder: "Drop Postcode",
                  required: true,
                  value: form.dropPostcode,
                  onChange: handleChange
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx(
                  Label,
                  {
                    htmlFor: "dropDate",
                    className: "text-sm text-[#134467]/70 font-medium",
                    children: "Drop Date"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "dropDate",
                    type: "date",
                    name: "dropDate",
                    required: true,
                    min: today,
                    value: form.dropDate,
                    onChange: handleChange
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx(
                  Label,
                  {
                    htmlFor: "dropTime",
                    className: "text-sm text-[#134467]/70 font-medium",
                    children: "Drop Time"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "dropTime",
                    type: "time",
                    name: "dropTime",
                    required: !form.asap,
                    disabled: form.asap,
                    value: form.dropTime,
                    onChange: handleChange,
                    className: form.asap ? "opacity-40 cursor-not-allowed" : ""
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    id: "asap",
                    checked: form.asap,
                    onCheckedChange: (v) => setForm((prev) => ({
                      ...prev,
                      asap: !!v,
                      dropTime: v ? "" : prev.dropTime
                    }))
                  }
                ),
                /* @__PURE__ */ jsx(Label, { htmlFor: "asap", className: "cursor-pointer font-medium", children: "ASAP" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 space-y-4", children: [
              /* @__PURE__ */ jsx("h2", { className: "font-semibold text-lg text-[#134467]", children: "Job Details" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "number",
                  name: "distanceMiles",
                  placeholder: "Distance (Miles)",
                  required: true,
                  min: "0.1",
                  step: "0.1",
                  value: form.distanceMiles,
                  onChange: handleChange
                }
              ),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  name: "jobDescription",
                  required: true,
                  value: form.jobDescription,
                  className: "w-full border rounded-md p-2 text-sm",
                  onChange: handleChange,
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Job Description" }),
                    /* @__PURE__ */ jsx("option", { children: "Same Day – Timed" }),
                    /* @__PURE__ */ jsx("option", { children: "Same Day – Non Timed" }),
                    /* @__PURE__ */ jsx("option", { children: "Next Day – Timed" }),
                    /* @__PURE__ */ jsx("option", { children: "Next Day – Non Timed" }),
                    /* @__PURE__ */ jsx("option", { children: "3–5 Days" }),
                    /* @__PURE__ */ jsx("option", { children: "Multi-Drop" }),
                    /* @__PURE__ */ jsx("option", { children: "Deliver Direct" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  name: "suggestedVehicle",
                  required: true,
                  value: form.suggestedVehicle,
                  className: "w-full border rounded-md p-2 text-sm",
                  onChange: handleChange,
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Suggested Vehicle" }),
                    /* @__PURE__ */ jsx("option", { children: "Motorcycle" }),
                    /* @__PURE__ */ jsx("option", { children: "Car" }),
                    /* @__PURE__ */ jsx("option", { children: "Small Van" }),
                    /* @__PURE__ */ jsx("option", { children: "Midi Van" }),
                    /* @__PURE__ */ jsx("option", { children: "SWB up to 2.4m" }),
                    /* @__PURE__ */ jsx("option", { children: "MWB up to 3m" }),
                    /* @__PURE__ */ jsx("option", { children: "LWB up to 4m" }),
                    /* @__PURE__ */ jsx("option", { children: "XLWB 4m+" }),
                    /* @__PURE__ */ jsx("option", { children: "Luton" }),
                    /* @__PURE__ */ jsx("option", { children: "7.5T" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Textarea,
                {
                  name: "notes",
                  placeholder: "Additional Notes",
                  value: form.notes,
                  onChange: handleChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 space-y-4", children: [
              /* @__PURE__ */ jsx("h2", { className: "font-semibold text-lg text-[#134467]", children: "Contact Details" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  name: "contactName",
                  placeholder: "Your Name",
                  required: true,
                  value: form.contactName,
                  onChange: handleChange
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "email",
                  name: "contactEmail",
                  placeholder: "Email Address",
                  required: true,
                  value: form.contactEmail,
                  onChange: handleChange
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "tel",
                  name: "contactPhone",
                  placeholder: "Phone Number",
                  required: true,
                  value: form.contactPhone,
                  onChange: handleChange
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "submit",
                disabled: loading,
                className: "w-full text-lg py-6",
                children: loading ? "Submitting..." : "Request Quote"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-start justify-center gap-2.5 max-w-xl mx-auto\n  mt-6 mb-10 px-4 py-3 rounded-2xl\n  bg-[#134467]/4 border border-[#134467]/10",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#134467]/50 mt-0.5 flex-shrink-0", children: /* @__PURE__ */ jsxs(
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
              /* @__PURE__ */ jsx("span", { className: "font-bold text-[#134467]/70", children: "Disclaimer: " }),
              "Submitting this form does not confirm a booking. Our team will review your request and provide a courier quote shortly."
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
export {
  QuickQuotePage as default
};
