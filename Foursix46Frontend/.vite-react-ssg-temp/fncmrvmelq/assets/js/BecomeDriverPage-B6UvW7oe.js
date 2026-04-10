import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { B as Button } from "./button-CGBOOEAe.js";
import { I as Input } from "./input-CBzcThm7.js";
import { L as Label } from "./label-KlbQ8bq0.js";
import { F as FormProgress } from "./FormProgress-SlwXwxdo.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-DniiDww_.js";
import { C as Checkbox } from "./checkbox-CHthVXHk.js";
import { F as Form, a as FormField, b as FormItem, c as FormLabel, d as FormControl, e as FormMessage } from "./form-p9M_iddv.js";
import { ArrowLeft, Truck, CheckCircle2, FileCheck, Upload, ArrowRight } from "lucide-react";
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
import "@radix-ui/react-select";
import "@radix-ui/react-checkbox";
import "framer-motion";
const step1Schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(
    /^\+44\d{10}$/,
    "Phone number must start with +44 and contain exactly 10 digits"
  ),
  addressLine1: z.string().min(1, "Address line 1 is required"),
  addressLine2: z.string().optional(),
  town: z.string().min(1, "Town/City is required"),
  county: z.string().min(1, "County is required"),
  postcode: z.string().min(1, "Postcode is required")
});
const step2Schema = z.object({
  vehicleType: z.string().min(1, "Please select a vehicle type"),
  registration: z.string().min(1, "Vehicle registration is required"),
  makeModel: z.string().min(1, "Make & Model is required"),
  dvlaCheckCode: z.string().regex(
    /^[a-zA-Z0-9]{11}$/,
    "DVLA check code must be exactly 11 alphanumeric characters"
  ),
  year: z.string().regex(/^\d{4}$/, "Must be a 4-digit year (e.g., 2020)"),
  niNumber: z.string().min(1, "National Insurance Number is required").regex(
    /^[a-z]{2}\d{6}[a-z]$/i,
    "Format must be 2 letters, 6 numbers, and 1 letter (e.g., AB123456C)"
  ),
  utrNumber: z.string().min(1, "UTR Number is required").transform((val) => val.replace(/\s/g, "")).refine((val) => /^\d{10}$/.test(val), {
    message: "UTR must be exactly 10 digits"
  }),
  rightToWorkCode: z.string().regex(
    /^[a-zA-Z0-9]{9}$/,
    "Share code must be exactly 9 alphanumeric characters"
  ),
  dbsConfirmed: z.boolean().refine((v) => v === true, {
    message: "You must confirm you requested a basic DBS check"
  })
});
const step3Schema = z.object({
  accountName: z.string().min(1, "Account name is required"),
  sortCode: z.string().regex(/^\d{2}-\d{2}-\d{2}$/, "Sort code must be in 12-34-56 format"),
  accountNumber: z.string().regex(/^\d{8}$/, "Must be an 8-digit number")
});
const driverSchema = step1Schema.merge(step2Schema).merge(step3Schema);
const steps = [
  "Personal Information",
  "Vehicle & Compliance",
  "Banking Information"
];
const step1Fields = [
  "firstName",
  "lastName",
  "dateOfBirth",
  "email",
  "phone",
  "addressLine1",
  "town",
  "postcode"
];
const step2Fields = [
  "vehicleType",
  "registration",
  "makeModel",
  "dvlaCheckCode",
  "year",
  "niNumber",
  "utrNumber",
  // ✅ ADD
  "rightToWorkCode",
  "dbsConfirmed"
];
const step3Fields = [
  "accountName",
  "sortCode",
  "accountNumber"
];
function BecomeDriverPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);
  const form = useForm({
    resolver: zodResolver(driverSchema),
    mode: "onBlur",
    // Validate when user clicks off a field
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      town: "",
      county: "",
      postcode: "",
      vehicleType: "",
      registration: "",
      makeModel: "",
      dvlaCheckCode: "",
      year: "",
      niNumber: "",
      utrNumber: "",
      rightToWorkCode: "",
      dbsConfirmed: false,
      accountName: "",
      sortCode: "",
      accountNumber: ""
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState({
    drivingLicense: null,
    vehicleInsurance: null,
    publicLiabilityInsurance: null,
    goodsInTransitInsurance: null,
    rightToWorkDoc: null
  });
  const apiUrl = void 0;
  const handleNext = async () => {
    let isValid = false;
    let fieldsValidated = true;
    if (currentStep === 1) {
      isValid = await form.trigger(step1Fields);
      if (isValid) setCurrentStep(2);
      fieldsValidated = isValid;
    } else if (currentStep === 2) {
      isValid = await form.trigger(step2Fields);
      const licenseUploaded = !!selectedFiles.drivingLicense;
      const vehicleInsuranceUploaded = !!selectedFiles.vehicleInsurance;
      const publicLiabilityUploaded = !!selectedFiles.publicLiabilityInsurance;
      const goodsTransitUploaded = !!selectedFiles.goodsInTransitInsurance;
      const rtwDocUploaded = !!selectedFiles.rightToWorkDoc;
      if (!licenseUploaded) toast.error("Please upload your Driving License");
      if (!vehicleInsuranceUploaded)
        toast.error("Vehicle Insurance (Hire & Reward) is required");
      if (!publicLiabilityUploaded)
        toast.error("Public Liability Insurance is required");
      if (!goodsTransitUploaded)
        toast.error("Goods In Transit Insurance is required");
      if (!rtwDocUploaded)
        toast.error("Please upload your Right to Work Verification Document");
      if (isValid && licenseUploaded && vehicleInsuranceUploaded && publicLiabilityUploaded && goodsTransitUploaded && rtwDocUploaded) {
        setCurrentStep(3);
      } else {
        fieldsValidated = false;
      }
    } else if (currentStep === 3) {
      isValid = await form.trigger(step3Fields);
      fieldsValidated = isValid;
      if (isValid && !isSubmitting && !submitted) {
        setIsSubmitting(true);
        try {
          const allData = form.getValues();
          allData.utrNumber = allData.utrNumber.replace(/\s/g, "");
          const applyRes = await fetch(`${apiUrl}/api/drivers/apply`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(allData)
          });
          const applyResult = await applyRes.json();
          if (!applyRes.ok) throw new Error(applyResult.message || "Failed to submit application.");
          const driverId = applyResult.driverId;
          const toBase64 = (file) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
          const fileTypeMap = {
            drivingLicense: "driving-license",
            vehicleInsurance: "vehicle-insurance",
            publicLiabilityInsurance: "public-liability",
            goodsInTransitInsurance: "goods-transit",
            rightToWorkDoc: "right-to-work"
          };
          const fileMap = {
            drivingLicense: selectedFiles.drivingLicense,
            vehicleInsurance: selectedFiles.vehicleInsurance,
            publicLiabilityInsurance: selectedFiles.publicLiabilityInsurance,
            goodsInTransitInsurance: selectedFiles.goodsInTransitInsurance,
            rightToWorkDoc: selectedFiles.rightToWorkDoc
          };
          const uploadedUrls = {};
          for (const [fieldName, file] of Object.entries(fileMap)) {
            if (!file) continue;
            const base64Data = await toBase64(file);
            const uploadRes = await fetch(`${apiUrl}/api/drivers/${driverId}/upload-file`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                fileName: file.name,
                fileData: base64Data,
                contentType: file.type,
                fileType: fileTypeMap[fieldName]
              })
            });
            const uploadResult = await uploadRes.json();
            if (!uploadRes.ok) throw new Error(`Failed to upload ${fieldName}: ${uploadResult.message}`);
            uploadedUrls[fieldName] = Array.isArray(uploadResult.url) ? uploadResult.url[0] : uploadResult.url;
          }
          const filesRes = await fetch(`${apiUrl}/api/drivers/${driverId}/files`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              drivingLicenseUrl: uploadedUrls.drivingLicense,
              rightToWorkDocUrl: uploadedUrls.rightToWorkDoc,
              vehicleInsuranceUrl: uploadedUrls.vehicleInsurance,
              publicLiabilityInsuranceUrl: uploadedUrls.publicLiabilityInsurance,
              goodsInTransitInsuranceUrl: uploadedUrls.goodsInTransitInsurance
            })
          });
          const filesResult = await filesRes.json();
          if (!filesRes.ok) throw new Error(filesResult.message || "Failed to save document URLs.");
          toast.success("Driver application submitted successfully!");
          setSubmitted(true);
          setTimeout(() => navigate("/driver-thank-you"), 1500);
        } catch (error) {
          console.error("Submission Error:", error);
          toast.error(error.message || "Submission failed.");
        } finally {
          setIsSubmitting(false);
        }
      }
    }
    if (!fieldsValidated) {
      toast.error("Please check the form for errors and try again.");
    }
  };
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
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
            onClick: () => navigate("/"),
            className: "mb-8",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
              "Back to Home"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 p-6 sm:p-10 mb-16 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F5EB18]/100 mb-4", children: /* @__PURE__ */ jsx(Truck, { className: "w-8 h-8 text-[#134467]" }) }),
            /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-[#F81629] mb-2", children: "Become a Courier Driver with Route46 Couriers" }),
            /* @__PURE__ */ jsx("p", { className: "text-[#48AEDD] font-medium text-lg", children: "Join Route46 Couriers and access delivery opportunities across the UK through our nationwide logistics network." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "group border border-[#48AEDD]/20 rounded-2xl p-6 bg-gradient-to-br from-[#48AEDD]/5 to-transparent hover:shadow-lg hover:border-[#48AEDD]/40 transition-all duration-300 hover:-translate-y-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-[#48AEDD]" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[#134467]", children: "Why Drive with Route46 Couriers" })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD] mt-1", children: "✓" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Access to Thousands of Delivery Jobs:" }),
                    " ",
                    "Connect to courier delivery opportunities across the UK through our logistics network."
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD] mt-1", children: "✓" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Flexible Working Schedule:" }),
                    " Choose when and where you want to work."
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD] mt-1", children: "✓" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Competitive Delivery Rates:" }),
                    " Earn per delivery with transparent job pricing."
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD] mt-1", children: "✓" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Nationwide Delivery Opportunities:" }),
                    " Access courier jobs across major UK cities and regions."
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD] mt-1", children: "✓" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Driver Support:" }),
                    " Our team supports drivers with onboarding and operational guidance."
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "group border border-[#E53935]/20 rounded-2xl p-6 bg-gradient-to-br from-[#E53935]/5 to-transparent hover:shadow-lg hover:border-[#E53935]/40 transition-all duration-300 hover:-translate-y-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx(FileCheck, { className: "w-6 h-6 text-[#E53935]" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[#134467]", children: "Driver Requirements" })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "•" }),
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Valid UK driving license" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "•" }),
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Access to a vehicle or courier van" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "•" }),
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Hire & Reward Insurance (if using own vehicle)" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "•" }),
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Right to Work in the UK" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "•" }),
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "No more than 6 penalty points" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(FormProgress, { steps, currentStep }),
          /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "space-y-6", children: [
            currentStep === 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "firstName",
                    render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsx(FormLabel, { children: "First Name *" }),
                      /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "John", ...field }) }),
                      /* @__PURE__ */ jsx(FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "lastName",
                    render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsx(FormLabel, { children: "Last Name *" }),
                      /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Smith", ...field }) }),
                      /* @__PURE__ */ jsx(FormMessage, {})
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "dateOfBirth",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Date of Birth *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "date", ...field }) }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "email",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Email Address *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        type: "email",
                        placeholder: "john.smith@example.com",
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
                  name: "phone",
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
                          const newValue = prefix + digits.slice(0, 10);
                          field.onChange(newValue);
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
                  name: "addressLine1",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Address Line 1 *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        placeholder: "e.g., 10 Downing Street",
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
                  name: "addressLine2",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Address Line 2" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        placeholder: "e.g., Flat 2A (optional)",
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
                  name: "town",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Town/City *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "e.g., London", ...field }) }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "county",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "County *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        placeholder: "e.g., Greater London",
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
                  name: "postcode",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Postcode *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "e.g., SW1A 2AA", ...field }) }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              )
            ] }),
            currentStep === 2 && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "vehicleType",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Vehicle Type *" }),
                    /* @__PURE__ */ jsxs(
                      Select,
                      {
                        onValueChange: field.onChange,
                        defaultValue: field.value,
                        children: [
                          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select vehicle type" }) }) }),
                          /* @__PURE__ */ jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsx(SelectItem, { value: "SWB", children: "SWB" }),
                            /* @__PURE__ */ jsx(SelectItem, { value: "MWB", children: "MWB" }),
                            /* @__PURE__ */ jsx(SelectItem, { value: "LWB/XLWB", children: "LWB/XLWB" }),
                            /* @__PURE__ */ jsx(SelectItem, { value: "LUTON TAIL/CURTAIN", children: "LUTON TAIL/CURTAIN" }),
                            /* @__PURE__ */ jsx(SelectItem, { value: "LARGER or SPECIALIST", children: "LARGER or SPECIALIST" })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "registration",
                    render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsx(FormLabel, { children: "License Plate Number *" }),
                      /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "AB12 CDE", ...field }) }),
                      /* @__PURE__ */ jsx(FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "year",
                    render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsx(FormLabel, { children: "Year *" }),
                      /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                        Input,
                        {
                          placeholder: "2020",
                          inputMode: "numeric",
                          maxLength: 4,
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
                  name: "makeModel",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Make & Model *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        placeholder: "e.g., Ford Transit",
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
                  name: "dvlaCheckCode",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "DVLA check code *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        placeholder: "e.g., ABC12345DEF",
                        maxLength: 11,
                        ...field,
                        onChange: (e) => {
                          const value = e.target.value.replace(
                            /[^a-zA-Z0-9]/g,
                            ""
                          );
                          field.onChange(value);
                        }
                      }
                    ) }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "col-span-1 space-y-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "drivingLicense", children: "Driving License *" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "drivingLicense",
                      type: "file",
                      accept: ".pdf,.jpg,.png",
                      className: "hidden",
                      onChange: (e) => {
                        var _a;
                        const file = ((_a = e.target.files) == null ? void 0 : _a[0]) || null;
                        if (file) {
                          const maxSize = 5 * 1024 * 1024;
                          if (file.size > maxSize) {
                            toast.error(
                              `Driving License is too large (${(file.size / 1024 / 1024).toFixed(2)}MB). Maximum size is 1MB.`
                            );
                            try {
                              e.currentTarget.value = "";
                            } catch (err) {
                            }
                            setSelectedFiles((prev) => ({
                              ...prev,
                              drivingLicense: null
                            }));
                            return;
                          }
                        }
                        setSelectedFiles((prev) => ({
                          ...prev,
                          drivingLicense: file
                        }));
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "drivingLicense",
                      className: `flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-muted/50 transition-colors ${selectedFiles.drivingLicense ? "border-primary bg-primary/5" : "border-border"}`,
                      children: selectedFiles.drivingLicense ? /* @__PURE__ */ jsxs("div", { className: "text-center px-2", children: [
                        /* @__PURE__ */ jsx(FileCheck, { className: "w-6 h-6 text-primary mx-auto mb-2" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-primary truncate block max-w-[140px]", children: selectedFiles.drivingLicense.name })
                      ] }) : /* @__PURE__ */ jsxs("div", { className: "text-center px-2", children: [
                        /* @__PURE__ */ jsxs("div", { className: "w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-2", children: [
                          /* @__PURE__ */ jsx(Upload, { className: "w-4 h-4 text-muted-foreground" }),
                          " "
                        ] }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Click to Upload" })
                      ] })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "col-span-1 space-y-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "vehicleInsurance", children: "Vehicle Insurance (Hire & Reward) *" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "vehicleInsurance",
                      type: "file",
                      accept: ".pdf,.jpg,.png",
                      className: "hidden",
                      onChange: (e) => {
                        var _a;
                        const file = ((_a = e.target.files) == null ? void 0 : _a[0]) || null;
                        if (file) {
                          const maxSize = 5 * 1024 * 1024;
                          if (file.size > maxSize) {
                            toast.error(
                              `Vehicle Insurance is too large (${(file.size / 1024 / 1024).toFixed(2)}MB). Maximum size is 1MB.`
                            );
                            try {
                              e.currentTarget.value = "";
                            } catch {
                            }
                            setSelectedFiles((prev) => ({
                              ...prev,
                              vehicleInsurance: null
                            }));
                            return;
                          }
                        }
                        setSelectedFiles((prev) => ({
                          ...prev,
                          vehicleInsurance: file
                        }));
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "vehicleInsurance",
                      className: `flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-muted/50 transition-colors ${selectedFiles.vehicleInsurance ? "border-primary bg-primary/5" : "border-border"}`,
                      children: selectedFiles.vehicleInsurance ? /* @__PURE__ */ jsxs("div", { className: "text-center px-2", children: [
                        /* @__PURE__ */ jsx(FileCheck, { className: "w-6 h-6 text-primary mx-auto mb-2" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-primary truncate block max-w-[140px]", children: selectedFiles.vehicleInsurance.name })
                      ] }) : /* @__PURE__ */ jsxs("div", { className: "text-center px-2", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Upload, { className: "w-4 h-4 text-muted-foreground" }) }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Click to Upload" })
                      ] })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "col-span-1 space-y-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "publicLiabilityInsurance", children: "Public Liability Insurance *" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "publicLiabilityInsurance",
                      type: "file",
                      accept: ".pdf,.jpg,.png",
                      className: "hidden",
                      onChange: (e) => {
                        var _a;
                        const file = ((_a = e.target.files) == null ? void 0 : _a[0]) || null;
                        if (file) {
                          const maxSize = 5 * 1024 * 1024;
                          if (file.size > maxSize) {
                            toast.error(
                              `Public Liability Insurance is too large (${(file.size / 1024 / 1024).toFixed(2)}MB). Maximum size is 1MB.`
                            );
                            try {
                              e.currentTarget.value = "";
                            } catch {
                            }
                            setSelectedFiles((prev) => ({
                              ...prev,
                              publicLiabilityInsurance: null
                            }));
                            return;
                          }
                        }
                        setSelectedFiles((prev) => ({
                          ...prev,
                          publicLiabilityInsurance: file
                        }));
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "publicLiabilityInsurance",
                      className: `flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-muted/50 transition-colors ${selectedFiles.publicLiabilityInsurance ? "border-primary bg-primary/5" : "border-border"}`,
                      children: selectedFiles.publicLiabilityInsurance ? /* @__PURE__ */ jsxs("div", { className: "text-center px-2", children: [
                        /* @__PURE__ */ jsx(FileCheck, { className: "w-6 h-6 text-primary mx-auto mb-2" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-primary truncate block max-w-[140px]", children: selectedFiles.publicLiabilityInsurance.name })
                      ] }) : /* @__PURE__ */ jsxs("div", { className: "text-center px-2", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Upload, { className: "w-4 h-4 text-muted-foreground" }) }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Click to Upload" })
                      ] })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "col-span-1 space-y-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "goodsInTransitInsurance", children: "Goods In Transit Insurance *" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "goodsInTransitInsurance",
                      type: "file",
                      accept: ".pdf,.jpg,.png",
                      className: "hidden",
                      onChange: (e) => {
                        var _a;
                        const file = ((_a = e.target.files) == null ? void 0 : _a[0]) || null;
                        if (file) {
                          const maxSize = 5 * 1024 * 1024;
                          if (file.size > maxSize) {
                            toast.error(
                              `Goods In Transit Insurance is too large (${(file.size / 1024 / 1024).toFixed(2)}MB). Maximum size is 1MB.`
                            );
                            try {
                              e.currentTarget.value = "";
                            } catch {
                            }
                            setSelectedFiles((prev) => ({
                              ...prev,
                              goodsInTransitInsurance: null
                            }));
                            return;
                          }
                        }
                        setSelectedFiles((prev) => ({
                          ...prev,
                          goodsInTransitInsurance: file
                        }));
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "goodsInTransitInsurance",
                      className: `flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-muted/50 transition-colors ${selectedFiles.goodsInTransitInsurance ? "border-primary bg-primary/5" : "border-border"}`,
                      children: selectedFiles.goodsInTransitInsurance ? /* @__PURE__ */ jsxs("div", { className: "text-center px-2", children: [
                        /* @__PURE__ */ jsx(FileCheck, { className: "w-6 h-6 text-primary mx-auto mb-2" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-primary truncate block max-w-[140px]", children: selectedFiles.goodsInTransitInsurance.name })
                      ] }) : /* @__PURE__ */ jsxs("div", { className: "text-center px-2", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Upload, { className: "w-4 h-4 text-muted-foreground" }) }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Click to Upload" })
                      ] })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "niNumber",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "National Insurance Number *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        placeholder: "AB 12 34 56 C",
                        maxLength: 9,
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
                  name: "utrNumber",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "UTR Number *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        placeholder: "1234 567 890",
                        maxLength: 13,
                        ...field,
                        onChange: (e) => {
                          const value = e.target.value.replace(
                            /[^\d\s]/g,
                            ""
                          );
                          field.onChange(value);
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
                  name: "rightToWorkCode",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Right to Work Share Code *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        placeholder: "X1Y2Z3A4B",
                        maxLength: 9,
                        ...field,
                        onChange: (e) => {
                          const value = e.target.value.replace(
                            /[^a-zA-Z0-9]/g,
                            ""
                          );
                          field.onChange(value);
                        }
                      }
                    ) }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "rightToWorkDoc", children: "Right to Work Verification Document *" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "rightToWorkDoc",
                    type: "file",
                    accept: ".pdf,.jpg,.png",
                    className: "hidden",
                    onChange: (e) => {
                      var _a;
                      const file = ((_a = e.target.files) == null ? void 0 : _a[0]) || null;
                      if (file) {
                        const maxSize = 5 * 1024 * 1024;
                        if (file.size > maxSize) {
                          toast.error(
                            `Right to Work document is too large (${(file.size / 1024 / 1024).toFixed(2)}MB). Maximum size is 1MB.`
                          );
                          try {
                            e.currentTarget.value = "";
                          } catch (err) {
                          }
                          setSelectedFiles((prev) => ({
                            ...prev,
                            rightToWorkDoc: null
                          }));
                          return;
                        }
                      }
                      setSelectedFiles((prev) => ({
                        ...prev,
                        rightToWorkDoc: file
                      }));
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "rightToWorkDoc",
                    className: `flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-muted/50 transition-colors ${selectedFiles.rightToWorkDoc ? "border-primary bg-primary/5" : "border-border"}`,
                    children: selectedFiles.rightToWorkDoc ? /* @__PURE__ */ jsxs("div", { className: "text-center px-2", children: [
                      /* @__PURE__ */ jsx(FileCheck, { className: "w-6 h-6 text-primary mx-auto mb-2" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-primary truncate block max-w-[300px]", children: selectedFiles.rightToWorkDoc.name })
                    ] }) : /* @__PURE__ */ jsxs("div", { className: "text-center px-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Upload, { className: "w-4 h-4 text-muted-foreground" }) }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Click to Upload" })
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "dbsConfirmed",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex items-start gap-3 p-4 border border-border rounded-xl mt-4", children: [
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                      Checkbox,
                      {
                        checked: !!field.value,
                        onCheckedChange: (v) => field.onChange(!!v),
                        id: "dbsConfirmed",
                        className: "mt-3"
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "grid gap-1.5 leading-none", children: [
                      /* @__PURE__ */ jsxs(
                        FormLabel,
                        {
                          htmlFor: "dbsConfirmed",
                          className: "text-sm text-muted-foreground leading-relaxed cursor-pointer",
                          children: [
                            "I confirm that I have requested a basic DBS check through",
                            " ",
                            /* @__PURE__ */ jsx(
                              "a",
                              {
                                href: "https://www.gov.uk/request-copy-criminal-record",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-primary underline",
                                children: "https://www.gov.uk/request-copy-criminal-record"
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(FormMessage, {})
                    ] })
                  ] })
                }
              )
            ] }),
            currentStep === 3 && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("div", { className: "bg-muted/50 p-6 rounded-xl", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "We need your banking details to process your weekly payments securely." }) }),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "accountName",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Account Name *" }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "John Smith", ...field }) }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "sortCode",
                    render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsx(FormLabel, { children: "Sort Code *" }),
                      /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                        Input,
                        {
                          placeholder: "12-34-56",
                          inputMode: "numeric",
                          maxLength: 8,
                          ...field,
                          onChange: (e) => {
                            let value = e.target.value.replace(
                              /[^\d]/g,
                              ""
                            );
                            if (value.length > 6) {
                              value = value.slice(0, 6);
                            }
                            if (value.length > 4) {
                              value = value.slice(0, 2) + "-" + value.slice(2, 4) + "-" + value.slice(4);
                            } else if (value.length > 2) {
                              value = value.slice(0, 2) + "-" + value.slice(2);
                            }
                            field.onChange(value);
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
                    name: "accountNumber",
                    render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsx(FormLabel, { children: "Account Number *" }),
                      /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                        Input,
                        {
                          placeholder: "12345678",
                          inputMode: "numeric",
                          maxLength: 8,
                          ...field
                        }
                      ) }),
                      /* @__PURE__ */ jsx(FormMessage, {})
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 p-6 rounded-xl mt-8", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-secondary mb-3", children: "Ready to Start?" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Once you submit this application, our team will review your details within 1 business day. You'll receive an email with next steps and access to the driver portal." })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-10", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "outline",
                onClick: handleBack,
                disabled: currentStep === 1 || submitted,
                children: [
                  /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
                  "Back"
                ]
              }
            ),
            submitted ? /* @__PURE__ */ jsxs("div", { className: "text-center w-full py-8", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-green-600 mb-4", children: "Thank you!" }),
              /* @__PURE__ */ jsx("p", { children: "Your application was submitted successfully. We’ll be in touch soon." })
            ] }) : /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "brand",
                onClick: handleNext,
                disabled: isSubmitting,
                children: [
                  currentStep === 3 ? "Submit Application" : "Next",
                  " ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
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
  BecomeDriverPage as default
};
