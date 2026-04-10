import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { B as Button } from "./button-CGBOOEAe.js";
import { I as Input } from "./input-CBzcThm7.js";
import { L as Label } from "./label-KlbQ8bq0.js";
import { T as Textarea } from "./textarea-CF7Vn140.js";
import { C as Checkbox } from "./checkbox-CHthVXHk.js";
import { F as FormProgress } from "./FormProgress-SlwXwxdo.js";
import { ArrowLeft, Building2, Award, Briefcase, Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { F as Footer } from "./Footer-BW1VuM-V.js";
import { L as LoadingAnimation } from "./LoadingAnimation-De0K9u0o.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-DniiDww_.js";
import { F as Form, a as FormField, b as FormItem, c as FormLabel, d as FormControl, e as FormMessage } from "./form-p9M_iddv.js";
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
import "@radix-ui/react-select";
const step1Schema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  registrationNumber: z.string().regex(/^\d{8}$/, "Must be exactly 8 numbers"),
  vatNumber: z.string().optional().refine(
    (val) => {
      if (!val) return true;
      return /^gb\d{9}$/i.test(val);
    },
    {
      message: "VAT Number must be GB followed by 9 digits (e.g., GB123456789) or left empty"
    }
  ),
  businessType: z.string().min(1, "Business type is required"),
  companyAddress: z.string().min(1, "Company address is required")
});
const step2Schema = z.object({
  contactFirstName: z.string().min(1, "First name is required"),
  contactLastName: z.string().min(1, "Last name is required"),
  contactEmail: z.string().email("Invalid email address"),
  contactPhone: z.string().min(13, "Phone number must start with +44 and contain exactly 10 digits"),
  jobTitle: z.string().min(1, "Job title is required")
});
const step3Schema = z.object({
  monthlyShipments: z.string().min(1, "Please select an option"),
  parcelTypes: z.string().min(1, "Please list typical parcel types"),
  deliveryAreas: z.string().min(1, "Please list primary delivery areas"),
  specialRequirements: z.string().optional()
});
const step4Schema = z.object({
  billingMethod: z.string().min(1, "Please select a billing method"),
  billingEmail: z.string().email("Invalid email address").optional().or(z.literal("")),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions"
  })
});
const fullBusinessSchema = step1Schema.merge(step2Schema).merge(step3Schema).merge(step4Schema);
const step1Fields = [
  "companyName",
  "registrationNumber",
  "businessType",
  "companyAddress"
];
const step2Fields = [
  "contactFirstName",
  "contactLastName",
  "contactEmail",
  "contactPhone",
  "jobTitle"
];
const step3Fields = [
  "monthlyShipments",
  "parcelTypes",
  "deliveryAreas"
];
const step4Fields = [
  "billingMethod",
  "termsAccepted",
  "billingEmail"
];
const steps = [
  "Company Information",
  "Primary Contact",
  "Shipping Profile",
  "Billing Preferences"
];
function ForBusinessesPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);
  const form = useForm({
    resolver: zodResolver(fullBusinessSchema),
    mode: "onBlur",
    defaultValues: {
      companyName: "",
      registrationNumber: "",
      vatNumber: "",
      businessType: "",
      companyAddress: "",
      contactFirstName: "",
      contactLastName: "",
      contactEmail: "",
      contactPhone: "",
      jobTitle: "",
      monthlyShipments: "",
      parcelTypes: "",
      deliveryAreas: "",
      specialRequirements: "",
      billingMethod: "",
      billingEmail: "",
      termsAccepted: false
    }
  });
  const apiUrl = void 0;
  const handleNext = async () => {
    if (isSubmitting) return;
    let fieldsToValidate = [];
    let isValid = false;
    if (currentStep === 1) fieldsToValidate = step1Fields;
    if (currentStep === 2) fieldsToValidate = step2Fields;
    if (currentStep === 3) fieldsToValidate = step3Fields;
    if (currentStep === 4) fieldsToValidate = step4Fields;
    isValid = await form.trigger(fieldsToValidate);
    if (!isValid) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitting(true);
      const allData = form.getValues();
      try {
        const response = await fetch(`${apiUrl}/api/businesses/apply`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(allData)
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message || "Failed to submit registration.");
        }
        toast.success("Business registration submitted successfully!");
        setTimeout(() => navigate("/shipper-thank-you"), 1500);
      } catch (error) {
        console.error("Submission Error:", error);
        toast.error(error.message || "An error occurred during submission.");
        setIsSubmitting(false);
      }
    }
  };
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isSubmitting && /* @__PURE__ */ jsx(LoadingAnimation, { message: "Submitting your business registration..." }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen py-12 px-4 sm:px-8 bg-gradient-to-br from-[#E53935]/5 via-white to-[#134467]/5", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            onClick: () => navigate("/"),
            className: "mb-8",
            disabled: isSubmitting,
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
              "Back to Home"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 p-6 sm:p-10 mb-16 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F5EB18] mb-4", children: /* @__PURE__ */ jsx(Building2, { className: "w-8 h-8 text-[#134467]" }) }),
            /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-[#F81629] mb-2", children: "Business Courier Services with Route46 Couriers" }),
            /* @__PURE__ */ jsx("p", { className: "text-[#48AEDD] font-medium text-lg", children: "Reliable courier services designed for businesses that require fast, secure, and time-critical deliveries across the UK." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "group border border-[#48AEDD]/20 rounded-2xl p-6 bg-gradient-to-br from-[#48AEDD]/5 to-transparent hover:shadow-lg hover:border-[#48AEDD]/40 transition-all duration-300 hover:-translate-y-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx(Award, { className: "w-6 h-6 text-[#48AEDD]" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[#134467]", children: "Business Courier Benefits" })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD] mt-1", children: "✓" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Priority Courier Support:" }),
                    " Dedicated support for business deliveries and urgent shipments"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD] mt-1", children: "✓" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Flexible Billing Options:" }),
                    " Convenient invoicing for businesses with regular delivery needs"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD] mt-1", children: "✓" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Reliable Same Day Delivery:" }),
                    " Fast courier collection and direct delivery across the UK"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD] mt-1", children: "✓" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Nationwide Courier Network:" }),
                    " Access to thousands of courier drivers and delivery vehicles across the UK"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "group border border-[#E53935]/20 rounded-2xl p-6 bg-gradient-to-br from-[#E53935]/5 to-transparent hover:shadow-lg hover:border-[#E53935]/40 transition-all duration-300 hover:-translate-y-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx(Briefcase, { className: "w-6 h-6 text-[#E53935]" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[#134467]", children: "Ideal for Businesses That Need Reliable Delivery" })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "•" }),
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "E-commerce businesses - fast order fulfilment" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "•" }),
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Retail stores - urgent stock movement" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "•" }),
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Manufacturing – time-critical shipments" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "•" }),
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Legal & Financial Firms – secure document delivery" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "•" }),
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Medical & Healthcare Suppliers – urgent transport needs" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-10", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "inline-block text-[11px] font-black uppercase\n                tracking-[0.2em] bg-[#134467]/5 text-[#134467] px-5 py-2\n                rounded-full border border-[#134467]/10 mb-4",
                children: "Our Network"
              }
            ),
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "text-2xl sm:text-3xl lg:text-4xl font-black\n                text-[#134467] tracking-tight leading-tight mb-4",
                children: "Nationwide Business Courier Network"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 rounded-full bg-[#E53935] mx-auto mb-5" }),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "text-base sm:text-lg text-[#134467]/70 font-medium\n                leading-[1.85]",
                children: "Route46 Couriers supports businesses with urgent delivery needs through a nationwide courier network. With access to thousands of courier drivers and vehicles across the UK, we can respond quickly to time-critical shipments and business logistics requirements."
              }
            )
          ] }),
          /* @__PURE__ */ jsx(FormProgress, { steps, currentStep }),
          /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "space-y-6", children: [
            currentStep === 1 && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "companyName",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Company Name *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        placeholder: "Acme Corporation Ltd",
                        ...field
                      }
                    ) }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "registrationNumber",
                    render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsx(FormLabel, { children: "Company Registration Number *" }),
                      /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                        Input,
                        {
                          placeholder: "12345678",
                          maxLength: 8,
                          ...field
                        }
                      ) }),
                      /* @__PURE__ */ jsx(FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "vatNumber",
                    render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsx(FormLabel, { children: "VAT Number (optional)" }),
                      /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                        Input,
                        {
                          placeholder: "GB123456789",
                          maxLength: 11,
                          ...field
                        }
                      ) }),
                      /* @__PURE__ */ jsx(FormMessage, {})
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "businessType",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Business Type *" }),
                    /* @__PURE__ */ jsxs(
                      Select,
                      {
                        onValueChange: field.onChange,
                        defaultValue: field.value,
                        children: [
                          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select business type" }) }) }),
                          /* @__PURE__ */ jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsx(SelectItem, { value: "limited", children: "Limited Company" }),
                            /* @__PURE__ */ jsx(SelectItem, { value: "partnership", children: "Partnership" }),
                            /* @__PURE__ */ jsx(SelectItem, { value: "sole-trader", children: "Sole Trader" }),
                            /* @__PURE__ */ jsx(SelectItem, { value: "charity", children: "Charity" }),
                            /* @__PURE__ */ jsx(SelectItem, { value: "other", children: "Other" })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "companyAddress",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Company Address *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        placeholder: "123 Business Park, City, Postcode",
                        ...field
                      }
                    ) }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              )
            ] }),
            currentStep === 2 && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "contactFirstName",
                    render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsx(FormLabel, { children: "First Name *" }),
                      /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Jane", ...field }) }),
                      /* @__PURE__ */ jsx(FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "contactLastName",
                    render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsx(FormLabel, { children: "Last Name *" }),
                      /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Doe", ...field }) }),
                      /* @__PURE__ */ jsx(FormMessage, {})
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "contactEmail",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Email Address *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        type: "email",
                        placeholder: "jane.doe@company.com",
                        ...field
                      }
                    ) }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "contactPhone",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Phone Number *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        type: "tel",
                        placeholder: "+44 7XXX XXXXXX",
                        maxLength: 13,
                        ...field,
                        onChange: (e) => {
                          const prefix = "+44";
                          let value = e.target.value;
                          if (value.length < prefix.length || !value.startsWith(prefix)) {
                            value = prefix;
                          }
                          const digits = value.substring(prefix.length).replace(/[^\d]/g, "");
                          field.onChange(prefix + digits.slice(0, 10));
                        }
                      }
                    ) }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "jobTitle",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Job Title *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        placeholder: "e.g., Operations Manager",
                        ...field
                      }
                    ) }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              )
            ] }),
            currentStep === 3 && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "monthlyShipments",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Expected Monthly Shipments *" }),
                    /* @__PURE__ */ jsxs(
                      Select,
                      {
                        onValueChange: field.onChange,
                        defaultValue: field.value,
                        children: [
                          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select volume" }) }) }),
                          /* @__PURE__ */ jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsx(SelectItem, { value: "1-50", children: "1-50 shipments" }),
                            /* @__PURE__ */ jsx(SelectItem, { value: "51-200", children: "51-200 shipments" }),
                            /* @__PURE__ */ jsx(SelectItem, { value: "201-500", children: "201-500 shipments" }),
                            /* @__PURE__ */ jsx(SelectItem, { value: "500+", children: "500+ shipments" })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "parcelTypes",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Typical Parcel Types *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        placeholder: "e.g., Documents, Small packages, Equipment",
                        ...field
                      }
                    ) }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "deliveryAreas",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Primary Delivery Areas *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        placeholder: "e.g., London, Birmingham, Manchester",
                        ...field
                      }
                    ) }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "specialRequirements",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Special Requirements" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Textarea,
                      {
                        placeholder: "Any specific handling, timing, or service requirements...",
                        ...field,
                        rows: 4
                      }
                    ) }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              )
            ] }),
            currentStep === 4 && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "billingMethod",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Preferred Billing Method *" }),
                    /* @__PURE__ */ jsxs(
                      Select,
                      {
                        onValueChange: field.onChange,
                        defaultValue: field.value,
                        children: [
                          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select billing method" }) }) }),
                          /* @__PURE__ */ jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsx(SelectItem, { value: "monthly", children: "Monthly Invoice" }),
                            /* @__PURE__ */ jsx(SelectItem, { value: "per-shipment", children: "Per Shipment" }),
                            /* @__PURE__ */ jsx(SelectItem, { value: "prepaid", children: "Prepaid Account" })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "billingEmail",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Billing Email (if different)" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        type: "email",
                        placeholder: "accounts@company.com",
                        ...field
                      }
                    ) }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "bg-muted/50 p-6 rounded-xl space-y-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-secondary", children: "Business Rate Benefits" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsx("li", { children: "✓ Get 20% off on standard rates" }),
                  /* @__PURE__ */ jsx("li", { children: "✓ Dedicated account manager" }),
                  /* @__PURE__ */ jsx("li", { children: "✓ Priority customer support" }),
                  /* @__PURE__ */ jsx("li", { children: "✓ Monthly consolidated billing" }),
                  /* @__PURE__ */ jsx("li", { children: "✓ Flexible payment terms" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "termsAccepted",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex items-start gap-3 p-4 border border-border rounded-xl", children: [
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Checkbox,
                      {
                        checked: !!field.value,
                        onCheckedChange: (v) => field.onChange(!!v),
                        id: "terms",
                        className: "mt-3"
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "grid gap-1.5 leading-none", children: [
                      /* @__PURE__ */ jsx(
                        Label,
                        {
                          htmlFor: "terms",
                          className: "text-sm text-muted-foreground leading-relaxed cursor-pointer",
                          children: "I confirm that I have authority to register this business. I accept Route46's Terms and Conditions, and Privacy Policy."
                        }
                      ),
                      /* @__PURE__ */ jsx(FormMessage, {})
                    ] })
                  ] })
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-10", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "outline",
                onClick: handleBack,
                disabled: currentStep === 1 || isSubmitting,
                children: [
                  /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
                  "Back"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "brand",
                onClick: handleNext,
                disabled: isSubmitting,
                children: [
                  currentStep === 4 ? isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 mr-2 animate-spin" }),
                    "Submitting..."
                  ] }) : "Submit Registration" : "Next",
                  currentStep < 4 && /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
export {
  ForBusinessesPage as default
};
