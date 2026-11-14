import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormProgress } from "@/components/shared/FormProgress";
// Removed direct Firebase Storage imports - using backend upload instead
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  ArrowLeft,
  ArrowRight,
  Truck,
  CheckCircle2,
  FileCheck,
  Upload,
} from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { LoadingAnimation } from "@/components/shared/LoadingAnimation";

import Seo from "@/components/Seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Txt, useText } from "@/content/SiteContentProvider";
// --- Zod Validation Schemas ---

// Step 1: Personal Information
const step1Schema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 letters"),
  lastName: z.string().min(3, "Last name must be at least 3 letters"),
  dateOfBirth: z
    .string()
    .min(1, "Date of birth is required")
    .refine((val) => !isNaN(new Date(val).getTime()), {
      message: "Enter a valid date",
    })
    .refine((val) => new Date(val).getTime() <= Date.now(), {
      message: "Date of birth cannot be in the future",
    })
    .refine(
      (val) => {
        const dob = new Date(val);
        const eighteenYearsAgo = new Date();
        eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
        return dob <= eighteenYearsAgo;
      },
      { message: "You must be at least 18 years old" },
    ),
  email: z
    .string()
    .email("Invalid email address")
    .regex(
      /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/,
      "Enter a valid email with a proper domain (e.g. name@example.com)",
    ),
  phone: z
    .string()
    .regex(
      /^\+44\d{10}$/,
      "Phone number must start with +44 and contain exactly 10 digits",
    ),
  addressLine1: z
    .string()
    .min(5, "Address line 1 must be at least 5 characters"),
  addressLine2: z.string().optional(),
  town: z.string().min(2, "Town/City must be at least 2 characters"),
  county: z.string().min(2, "County must be at least 2 characters"),
  postcode: z
    .string()
    .min(1, "Postcode is required")
    .regex(
      /^([Gg][Ii][Rr] ?0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})$/,
      "Enter a valid UK postcode (e.g. CF10 1AA)",
    ),
});

// Step 2: Vehicle & Compliance
const step2Schema = z.object({
  vehicleType: z.string().min(1, "Please select a vehicle type"),
  registration: z
    .string()
    .min(1, "Vehicle registration is required")
    .regex(
      /^([A-Z]{2}[0-9]{2}\s?[A-Z]{3}|[A-Z][0-9]{1,3}\s?[A-Z]{3}|[A-Z]{3}\s?[0-9]{1,3}[A-Z]|[0-9]{1,4}\s?[A-Z]{1,3}|[A-Z]{1,3}\s?[0-9]{1,4})$/i,
      "Enter a valid UK license plate (e.g. AB12 CDE)",
    ),
  makeModel: z.string().min(3, "Make & Model must be at least 3 characters"),
  dvlaCheckCode: z
    .string()
    .regex(
      /^[a-zA-Z0-9]{11}$/,
      "DVLA check code must be exactly 11 alphanumeric characters",
    ),
  year: z.string().regex(/^\d{4}$/, "Must be a 4-digit year (e.g., 2020)"),
  niNumber: z
    .string()
    .min(1, "National Insurance Number is required")
    .regex(
      /^[a-z]{2}\d{6}[a-z]$/i,
      "Format must be 2 letters, 6 numbers, and 1 letter (e.g., AB123456C)",
    ),
  utrNumber: z
    .string()
    .min(1, "UTR Number is required")
    .transform((val) => val.replace(/\s/g, ""))
    .refine((val) => /^\d{10}$/.test(val), {
      message: "UTR must be exactly 10 digits",
    }),
  rightToWorkCode: z
    .string()
    .regex(
      /^[a-zA-Z0-9]{9}$/,
      "Share code must be exactly 9 alphanumeric characters",
    ),
  dbsConfirmed: z.boolean().refine((v) => v === true, {
    message: "You must confirm you requested a basic DBS check",
  }),
});

// Step 3: Banking Information
const step3Schema = z.object({
  accountName: z.string().min(1, "Account name is required"),
  sortCode: z
    .string()
    .regex(/^\d{2}-\d{2}-\d{2}$/, "Sort code must be in 12-34-56 format"),
  accountNumber: z.string().regex(/^\d{8}$/, "Must be an 8-digit number"),
});

// Full schema for typing
const driverSchema = step1Schema.merge(step2Schema).merge(step3Schema);

// Infer the TypeScript type from the Zod schema
type DriverData = z.infer<typeof driverSchema>;

// --- Helper Functions ---

const steps = [
  "Personal Information",
  "Vehicle & Compliance",
  "Banking Information",
];

// List of fields for each step to validate
const step1Fields: (keyof DriverData)[] = [
  "firstName",
  "lastName",
  "dateOfBirth",
  "email",
  "phone",
  "addressLine1",
  "town",
  "postcode",
];
const step2Fields: (keyof DriverData)[] = [
  "vehicleType",
  "registration",
  "makeModel",
  "dvlaCheckCode",
  "year",
  "niNumber",
  "utrNumber", // ✅ ADD
  "rightToWorkCode",
  "dbsConfirmed",
];
const step3Fields: (keyof DriverData)[] = [
  "accountName",
  "sortCode",
  "accountNumber",
];

// --- React Component ---

export default function BecomeDriverPage() {
  const txt = useText();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  // 1. Initialize React Hook Form
  const form = useForm<DriverData>({
    resolver: zodResolver(driverSchema),
    mode: "onBlur", // Validate when user clicks off a field
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
      accountNumber: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Store selected files in state (so we can access them even after step 2 is unmounted)
  const [selectedFiles, setSelectedFiles] = useState<{
    drivingLicense: File | null;
    vehicleInsurance: File | null;
    publicLiabilityInsurance: File | null;
    goodsInTransitInsurance: File | null;
    rightToWorkDoc: File | null;
  }>({
    drivingLicense: null,
    vehicleInsurance: null,
    publicLiabilityInsurance: null,
    goodsInTransitInsurance: null,
    rightToWorkDoc: null,
  });
  // Tracks whether the user has tried to leave Step 2, so file-upload
  // errors only appear after a real attempt (not on first render).
  const [fileUploadAttempted, setFileUploadAttempted] = useState(false);

  // Refactor handleNext
  const apiUrl = import.meta.env.VITE_API_URL;
  const handleNext = async () => {
    let isValid = false;
    let fieldsValidated = true;

    // STEP 1
    if (currentStep === 1) {
      isValid = await form.trigger(step1Fields);
      if (isValid) setCurrentStep(2);
      fieldsValidated = isValid;
    }

    // STEP 2
    else if (currentStep === 2) {
      isValid = await form.trigger(step2Fields);
      setFileUploadAttempted(true);

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

      if (
        isValid &&
        licenseUploaded &&
        vehicleInsuranceUploaded &&
        publicLiabilityUploaded &&
        goodsTransitUploaded &&
        rtwDocUploaded
      ) {
        setCurrentStep(3);
      } else {
        fieldsValidated = false;
      }
    }

    else if (currentStep === 3) {
  isValid = await form.trigger(step3Fields);
  fieldsValidated = isValid;

  if (isValid && !isSubmitting && !submitted) {
    setIsSubmitting(true);
    try {
      const allData = form.getValues();
      allData.utrNumber = allData.utrNumber.replace(/\s/g, '');

      // ── Step A: Submit form data → get driverId ───────────────────────
      const applyRes = await fetch(`${apiUrl}/api/drivers/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(allData),
      });
      const applyResult = await applyRes.json();
      if (!applyRes.ok) throw new Error(applyResult.message || 'Failed to submit application.');

      const driverId = applyResult.driverId;

      // ── Helpers ───────────────────────────────────────────────────────
      const toBase64 = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

      const fileTypeMap: Record<string, string> = {
        drivingLicense:           'driving-license',
        vehicleInsurance:         'vehicle-insurance',
        publicLiabilityInsurance: 'public-liability',
        goodsInTransitInsurance:  'goods-transit',
        rightToWorkDoc:           'right-to-work',
      };

      const fileMap: Record<string, File | null> = {
        drivingLicense:           selectedFiles.drivingLicense,
        vehicleInsurance:         selectedFiles.vehicleInsurance,
        publicLiabilityInsurance: selectedFiles.publicLiabilityInsurance,
        goodsInTransitInsurance:  selectedFiles.goodsInTransitInsurance,
        rightToWorkDoc:           selectedFiles.rightToWorkDoc,
      };

      // ── Step B: Upload each file as base64 JSON ───────────────────────
      const uploadedUrls: Record<string, string> = {}; // ✅ declared ONCE

      for (const [fieldName, file] of Object.entries(fileMap)) {
        if (!file) continue;

        const base64Data = await toBase64(file);

        const uploadRes = await fetch(`${apiUrl}/api/drivers/${driverId}/upload-file`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fileName:    file.name,
            fileData:    base64Data,
            contentType: file.type,
            fileType:    fileTypeMap[fieldName],
          }),
        });

        const uploadResult = await uploadRes.json();
        if (!uploadRes.ok) throw new Error(`Failed to upload ${fieldName}: ${uploadResult.message}`);

        uploadedUrls[fieldName] = Array.isArray(uploadResult.url)
          ? uploadResult.url[0]
          : uploadResult.url;
      }

      // ── Step C: Save all URLs to Firestore ────────────────────────────
      const filesRes = await fetch(`${apiUrl}/api/drivers/${driverId}/files`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          drivingLicenseUrl:            uploadedUrls.drivingLicense,
          rightToWorkDocUrl:            uploadedUrls.rightToWorkDoc,
          vehicleInsuranceUrl:          uploadedUrls.vehicleInsurance,
          publicLiabilityInsuranceUrl:  uploadedUrls.publicLiabilityInsurance,
          goodsInTransitInsuranceUrl:   uploadedUrls.goodsInTransitInsurance,
        }),
      });
      const filesResult = await filesRes.json();
      if (!filesRes.ok) throw new Error(filesResult.message || 'Failed to save document URLs.');

      toast.success('Driver application submitted successfully!');
      setSubmitted(true);
      setTimeout(() => navigate('/driver-thank-you'), 1500);

    } catch (error: any) {
      console.error('Submission Error:', error);
      toast.error(error.message || 'Submission failed.');
    } finally {
      setIsSubmitting(false);
    }
  }
}

    // STEP 3
    // else if (currentStep === 3) {
    //   isValid = await form.trigger(step3Fields);
    //   fieldsValidated = isValid;

    //   if (isValid && !isSubmitting && !submitted) {
    //     setIsSubmitting(true);

    //     try {
    //       const allData = form.getValues();
    //       allData.utrNumber = allData.utrNumber.replace(/\s/g, "");

    //       const response = await fetch(`${apiUrl}/api/drivers/apply`, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(allData),
    //       });

    //       const result = await response.json();

    //       if (!response.ok) {
    //         throw new Error(result.message || "Failed to submit application.");
    //       }

    //       toast.success("Driver application submitted successfully!");
    //       setSubmitted(true);
    //       setTimeout(() => navigate("/driver-thank-you"), 1500);
    //     } catch (error: any) {
    //       console.error("Submission Error:", error);
    //       toast.error(error.message || "Submission failed.");
    //       setIsSubmitting(false);
    //     }
    //   }
    // }

    if (!fieldsValidated) {
      toast.error("Please check the form for errors and try again.");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <Seo
        title="Become a Courier Driver"
        description="Join the Route46 Couriers driver network. Apply to run same day and time-critical courier work across the UK with consistent jobs and fast payment."
        path="/become-driver"
        schemas={[
          webPageSchema({
            path: "/become-driver",
            name: "Become a Courier Driver",
            description:
              "Join the Route46 Couriers driver network for same day and time-critical courier work across the UK.",
          }),
          breadcrumbSchema([
            { name: "Become a Driver", path: "/become-driver" },
          ]),
        ]}
      />

      {/* Loading Animation Overlay */}
      {isSubmitting && (
        <LoadingAnimation message="Submitting your driver application..." />
      )}

      <div className="min-h-screen py-12 px-4 sm:px-8 bg-gradient-to-br from-[#E53935]/5 via-white to-[#134467]/5">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4" /><Txt k="becomeDriver.9754ecd4">{"Back to Home"}</Txt></Button>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 p-6 sm:p-10 mb-16 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F5EB18]/100 mb-4">
                <Truck className="w-8 h-8 text-[#134467]" />
              </div>
              <h1 className="text-4xl font-bold text-[#F81629] mb-2"><Txt k="becomeDriver.2e033d13">{"Become a Courier Driver with Route46 Couriers"}</Txt></h1>
              <p className="text-[#48AEDD] font-medium text-lg"><Txt k="becomeDriver.64ba3ffb">{"Join Route46 Couriers and access delivery opportunities across the UK through our nationwide logistics network."}</Txt></p>
            </div>

            {/* Driver Benefits Section */}

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="group border border-[#48AEDD]/20 rounded-2xl p-6 bg-gradient-to-br from-[#48AEDD]/5 to-transparent hover:shadow-lg hover:border-[#48AEDD]/40 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#48AEDD]" />

                  <h3 className="text-xl font-bold text-[#134467]"><Txt k="becomeDriver.1ab263fe">{"Why Drive with Route46 Couriers"}</Txt></h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#48AEDD] mt-1">✓</span>

                    <span className="text-muted-foreground">
                      <strong><Txt k="becomeDriver.1ab36f56">{"Access to Thousands of Delivery Jobs:"}</Txt></strong>{" "}<Txt k="becomeDriver.a565f08d">{"Connect to courier delivery opportunities across the UK through our logistics network."}</Txt></span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#48AEDD] mt-1">✓</span>

                    <span className="text-muted-foreground">
                      <strong><Txt k="becomeDriver.d87b4fa0">{"Flexible Working Schedule:"}</Txt></strong><Txt k="becomeDriver.1353e67f">{" Choose when and where you want to work."}</Txt></span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#48AEDD] mt-1">✓</span>

                    <span className="text-muted-foreground">
                      <strong><Txt k="becomeDriver.06961b66">{"Competitive Delivery Rates:"}</Txt></strong><Txt k="becomeDriver.25bba4b6">{" Earn per delivery with transparent job pricing."}</Txt></span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#48AEDD] mt-1">✓</span>

                    <span className="text-muted-foreground">
                      <strong><Txt k="becomeDriver.dc186078">{"Nationwide Delivery Opportunities:"}</Txt></strong><Txt k="becomeDriver.0bae5f8c">{" Access courier jobs across major UK cities and regions."}</Txt></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#48AEDD] mt-1">✓</span>

                    <span className="text-muted-foreground">
                      <strong><Txt k="becomeDriver.e2d238f2">{"Driver Support:"}</Txt></strong><Txt k="becomeDriver.f8b3e3e9">{" Our team supports drivers with onboarding and operational guidance."}</Txt></span>
                  </li>
                </ul>
              </div>

              <div className="group border border-[#E53935]/20 rounded-2xl p-6 bg-gradient-to-br from-[#E53935]/5 to-transparent hover:shadow-lg hover:border-[#E53935]/40 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="w-6 h-6 text-[#E53935]" />

                  <h3 className="text-xl font-bold text-[#134467]"><Txt k="becomeDriver.bc648dab">{"Driver Requirements"}</Txt></h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E53935]">•</span>

                    <span className="text-muted-foreground"><Txt k="becomeDriver.19957a81">{"Valid UK driving license"}</Txt></span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#E53935]">•</span>

                    <span className="text-muted-foreground"><Txt k="becomeDriver.197c64b3">{"Access to a vehicle or courier van"}</Txt></span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#E53935]">•</span>

                    <span className="text-muted-foreground"><Txt k="becomeDriver.d2b87da5">{"Hire & Reward Insurance (if using own vehicle)"}</Txt></span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#E53935]">•</span>

                    <span className="text-muted-foreground"><Txt k="becomeDriver.c1e22625">{"Right to Work in the UK"}</Txt></span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#E53935]">•</span>

                    <span className="text-muted-foreground"><Txt k="becomeDriver.78035a21">{"No more than 6 penalty points"}</Txt></span>
                  </li>
                </ul>
              </div>
            </div>

            <FormProgress steps={steps} currentStep={currentStep} />

            {/* 3. Wrap your form content in the Form provider */}
            <Form {...form}>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                {/* --- Step 1: Personal Information --- */}
                {currentStep === 1 && (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel><Txt k="becomeDriver.cc184e7b">{"First Name *"}</Txt></FormLabel>
                            <FormControl>
                              <Input placeholder={txt("becomeDriver.9437d898", "John")} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel><Txt k="becomeDriver.83cf208d">{"Last Name *"}</Txt></FormLabel>
                            <FormControl>
                              <Input placeholder={txt("becomeDriver.7614dc96", "Smith")} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel><Txt k="becomeDriver.c617409d">{"Date of Birth *"}</Txt></FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              max={new Date().toISOString().split("T")[0]}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel><Txt k="becomeDriver.ba1ca4d7">{"Email Address *"}</Txt></FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={txt("becomeDriver.9ebdcfae", "john.smith@example.com")}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel><Txt k="becomeDriver.cb3c98ee">{"Phone Number *"}</Txt></FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder={txt("becomeDriver.547ecec5", "+44 7XXX XXXXXX")}
                              maxLength={13} // +44 (3) + 10 digits = 13
                              {...field}
                              onChange={(e) => {
                                const prefix = "+44";
                                let value = e.target.value;

                                // 1. If user tries to delete prefix, put it back
                                if (
                                  value.length < prefix.length ||
                                  !value.startsWith(prefix)
                                ) {
                                  value = prefix;
                                }

                                // 2. Get everything AFTER the prefix, remove non-digits
                                const digits = value
                                  .substring(prefix.length)
                                  .replace(/[^\d]/g, "");

                                // 3. Re-assemble the value, limiting to 10 digits
                                const newValue = prefix + digits.slice(0, 10);

                                // 4. Update the form
                                field.onChange(newValue);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="addressLine1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel><Txt k="becomeDriver.2bd8c1a8">{"Address Line 1 *"}</Txt></FormLabel>
                          <FormControl>
                            <Input
                              placeholder={txt("becomeDriver.651b5890", "e.g., 10 Downing Street")}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="addressLine2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel><Txt k="becomeDriver.a9d077b1">{"Address Line 2"}</Txt></FormLabel>
                          <FormControl>
                            <Input
                              placeholder={txt("becomeDriver.127194f0", "e.g., Flat 2A (optional)")}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="town"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel><Txt k="becomeDriver.742392f8">{"Town/City *"}</Txt></FormLabel>
                          <FormControl>
                            <Input placeholder={txt("becomeDriver.13de08c5", "e.g., London")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="county"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel><Txt k="becomeDriver.181a0e69">{"County *"}</Txt></FormLabel>
                          <FormControl>
                            <Input
                              placeholder={txt("becomeDriver.5d558c2d", "e.g., Greater London")}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="postcode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel><Txt k="becomeDriver.574a5894">{"Postcode *"}</Txt></FormLabel>
                          <FormControl>
                            <Input placeholder={txt("becomeDriver.aabe0c78", "e.g., SW1A 2AA")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {/* --- Step 2: Vehicle & Compliance Info --- */}
                {currentStep === 2 && (
                  <>
                    <FormField
                      control={form.control}
                      name="vehicleType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel><Txt k="becomeDriver.693849fb">{"Vehicle Type *"}</Txt></FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={txt("becomeDriver.38fac1e1", "Select vehicle type")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="SWB"><Txt k="becomeDriver.f93fa318">{"SWB"}</Txt></SelectItem>
                              <SelectItem value="MWB"><Txt k="becomeDriver.55e4d787">{"MWB"}</Txt></SelectItem>
                              <SelectItem value="LWB/XLWB"><Txt k="becomeDriver.3efdce1b">{"LWB/XLWB"}</Txt></SelectItem>
                              <SelectItem value="LUTON TAIL/CURTAIN"><Txt k="becomeDriver.fcbd4cd0">{"LUTON TAIL/CURTAIN"}</Txt></SelectItem>
                              <SelectItem value="LARGER or SPECIALIST"><Txt k="becomeDriver.f5e56f9d">{"LARGER or SPECIALIST"}</Txt></SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="registration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel><Txt k="becomeDriver.a8810303">{"License Plate Number *"}</Txt></FormLabel>
                            <FormControl>
                              <Input placeholder={txt("becomeDriver.c6f24980", "AB12 CDE")} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="year"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel><Txt k="becomeDriver.6d47f499">{"Year *"}</Txt></FormLabel>
                            <FormControl>
                              <Input
                                placeholder="2020"
                                inputMode="numeric"
                                maxLength={4}
                                {...field}
                                onChange={(e) =>
                                  field.onChange(
                                    e.target.value.replace(/\D/g, "").slice(0, 4),
                                  )
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="makeModel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel><Txt k="becomeDriver.27aa4a3c">{"Make & Model *"}</Txt></FormLabel>
                          <FormControl>
                            <Input
                              placeholder={txt("becomeDriver.1fd61cc2", "e.g., Ford Transit")}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dvlaCheckCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel><Txt k="becomeDriver.71857fcf">{"DVLA check code *"}</Txt></FormLabel>
                          <FormControl>
                            <Input
                              placeholder={txt("becomeDriver.4316ee0f", "e.g., ABC12345DEF")}
                              maxLength={11}
                              {...field}
                              onChange={(e) => {
                                // Remove any non-alphanumeric chars
                                const value = e.target.value.replace(
                                  /[^a-zA-Z0-9]/g,
                                  "",
                                );
                                // Pass the formatted value to the form
                                field.onChange(value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* File Inputs: Store files in state when selected */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="col-span-1 space-y-2">
                        <Label htmlFor="drivingLicense"><Txt k="becomeDriver.ca7e9c0c">{"Driving License *"}</Txt></Label>
                        <Input
                          id="drivingLicense"
                          type="file"
                          accept=".pdf,.jpg,.png"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            if (file) {
                              const maxSize = 5 * 1024 * 1024; // 1MB
                              if (file.size > maxSize) {
                                toast.error(
                                  `Driving License is too large (${(
                                    file.size /
                                    1024 /
                                    1024
                                  ).toFixed(2)}MB). Maximum size is 1MB.`,
                                );
                                // Clear the input so user can re-select
                                try {
                                  (e.currentTarget as HTMLInputElement).value =
                                    "";
                                } catch (err) {
                                  // ignore
                                }
                                setSelectedFiles((prev) => ({
                                  ...prev,
                                  drivingLicense: null,
                                }));
                                return;
                              }
                            }

                            setSelectedFiles((prev) => ({
                              ...prev,
                              drivingLicense: file,
                            }));
                          }}
                        />
                        {/* The Label acts as the button */}
                        <label
                          htmlFor="drivingLicense"
                          className={`flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-muted/50 transition-colors ${
                            selectedFiles.drivingLicense
                              ? "border-primary bg-primary/5"
                              : "border-border"
                          }`}
                        >
                          {selectedFiles.drivingLicense ? (
                            <div className="text-center px-2">
                              <FileCheck className="w-6 h-6 text-primary mx-auto mb-2" />
                              <span className="text-sm font-semibold text-primary truncate block max-w-[140px]">
                                {selectedFiles.drivingLicense.name}
                              </span>
                            </div>
                          ) : (
                            <div className="text-center px-2">
                              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                                <Upload className="w-4 h-4 text-muted-foreground" />{" "}
                                {/* Make sure to import Upload from lucide-react */}
                              </div>
                              <span className="text-sm text-muted-foreground"><Txt k="becomeDriver.1c282b8c">{"Click to Upload"}</Txt></span>
                            </div>
                          )}
                        </label>
                        {fileUploadAttempted && !selectedFiles.drivingLicense && (
                          <p className="text-sm font-medium text-destructive"><Txt k="becomeDriver.ce184631">{"Driving License is required"}</Txt></p>
                        )}
                      </div>

                      <div className="col-span-1 space-y-2">
                        <Label htmlFor="vehicleInsurance"><Txt k="becomeDriver.f19aa699">{"Vehicle Insurance (Hire & Reward) *"}</Txt></Label>

                        <Input
                          id="vehicleInsurance"
                          type="file"
                          accept=".pdf,.jpg,.png"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null;

                            if (file) {
                              const maxSize = 5 * 1024 * 1024; // 1MB
                              if (file.size > maxSize) {
                                toast.error(
                                  `Vehicle Insurance is too large (${(
                                    file.size /
                                    1024 /
                                    1024
                                  ).toFixed(2)}MB). Maximum size is 1MB.`,
                                );
                                try {
                                  (e.currentTarget as HTMLInputElement).value =
                                    "";
                                } catch {}
                                setSelectedFiles((prev) => ({
                                  ...prev,
                                  vehicleInsurance: null,
                                }));
                                return;
                              }
                            }

                            setSelectedFiles((prev) => ({
                              ...prev,
                              vehicleInsurance: file,
                            }));
                          }}
                        />

                        <label
                          htmlFor="vehicleInsurance"
                          className={`flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-muted/50 transition-colors ${
                            selectedFiles.vehicleInsurance
                              ? "border-primary bg-primary/5"
                              : "border-border"
                          }`}
                        >
                          {selectedFiles.vehicleInsurance ? (
                            <div className="text-center px-2">
                              <FileCheck className="w-6 h-6 text-primary mx-auto mb-2" />
                              <span className="text-sm font-semibold text-primary truncate block max-w-[140px]">
                                {selectedFiles.vehicleInsurance.name}
                              </span>
                            </div>
                          ) : (
                            <div className="text-center px-2">
                              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                                <Upload className="w-4 h-4 text-muted-foreground" />
                              </div>
                              <span className="text-sm text-muted-foreground"><Txt k="becomeDriver.1c282b8c_2">{"Click to Upload"}</Txt></span>
                            </div>
                          )}
                        </label>
                        {fileUploadAttempted && !selectedFiles.vehicleInsurance && (
                          <p className="text-sm font-medium text-destructive"><Txt k="becomeDriver.8a219c96">{"Vehicle Insurance (Hire & Reward) is required"}</Txt></p>
                        )}
                      </div>
                      <div className="col-span-1 space-y-2">
                        <Label htmlFor="publicLiabilityInsurance"><Txt k="becomeDriver.98221cbf">{"Public Liability Insurance *"}</Txt></Label>

                        <Input
                          id="publicLiabilityInsurance"
                          type="file"
                          accept=".pdf,.jpg,.png"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null;

                            if (file) {
                              const maxSize = 5 * 1024 * 1024; // 1MB
                              if (file.size > maxSize) {
                                toast.error(
                                  `Public Liability Insurance is too large (${(
                                    file.size /
                                    1024 /
                                    1024
                                  ).toFixed(2)}MB). Maximum size is 1MB.`,
                                );
                                try {
                                  (e.currentTarget as HTMLInputElement).value =
                                    "";
                                } catch {}
                                setSelectedFiles((prev) => ({
                                  ...prev,
                                  publicLiabilityInsurance: null,
                                }));
                                return;
                              }
                            }

                            setSelectedFiles((prev) => ({
                              ...prev,
                              publicLiabilityInsurance: file,
                            }));
                          }}
                        />

                        <label
                          htmlFor="publicLiabilityInsurance"
                          className={`flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-muted/50 transition-colors ${
                            selectedFiles.publicLiabilityInsurance
                              ? "border-primary bg-primary/5"
                              : "border-border"
                          }`}
                        >
                          {selectedFiles.publicLiabilityInsurance ? (
                            <div className="text-center px-2">
                              <FileCheck className="w-6 h-6 text-primary mx-auto mb-2" />
                              <span className="text-sm font-semibold text-primary truncate block max-w-[140px]">
                                {selectedFiles.publicLiabilityInsurance.name}
                              </span>
                            </div>
                          ) : (
                            <div className="text-center px-2">
                              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                                <Upload className="w-4 h-4 text-muted-foreground" />
                              </div>
                              <span className="text-sm text-muted-foreground"><Txt k="becomeDriver.1c282b8c_3">{"Click to Upload"}</Txt></span>
                            </div>
                          )}
                        </label>
                        {fileUploadAttempted && !selectedFiles.publicLiabilityInsurance && (
                          <p className="text-sm font-medium text-destructive"><Txt k="becomeDriver.cd3a5e53">{"Public Liability Insurance is required"}</Txt></p>
                        )}
                      </div>
                      <div className="col-span-1 space-y-2">
                        <Label htmlFor="goodsInTransitInsurance"><Txt k="becomeDriver.a565fbbf">{"Goods In Transit Insurance *"}</Txt></Label>

                        <Input
                          id="goodsInTransitInsurance"
                          type="file"
                          accept=".pdf,.jpg,.png"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null;

                            if (file) {
                              const maxSize = 5 * 1024 * 1024; // 1MB
                              if (file.size > maxSize) {
                                toast.error(
                                  `Goods In Transit Insurance is too large (${(
                                    file.size /
                                    1024 /
                                    1024
                                  ).toFixed(2)}MB). Maximum size is 1MB.`,
                                );
                                try {
                                  (e.currentTarget as HTMLInputElement).value =
                                    "";
                                } catch {}
                                setSelectedFiles((prev) => ({
                                  ...prev,
                                  goodsInTransitInsurance: null,
                                }));
                                return;
                              }
                            }

                            setSelectedFiles((prev) => ({
                              ...prev,
                              goodsInTransitInsurance: file,
                            }));
                          }}
                        />

                        <label
                          htmlFor="goodsInTransitInsurance"
                          className={`flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-muted/50 transition-colors ${
                            selectedFiles.goodsInTransitInsurance
                              ? "border-primary bg-primary/5"
                              : "border-border"
                          }`}
                        >
                          {selectedFiles.goodsInTransitInsurance ? (
                            <div className="text-center px-2">
                              <FileCheck className="w-6 h-6 text-primary mx-auto mb-2" />
                              <span className="text-sm font-semibold text-primary truncate block max-w-[140px]">
                                {selectedFiles.goodsInTransitInsurance.name}
                              </span>
                            </div>
                          ) : (
                            <div className="text-center px-2">
                              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                                <Upload className="w-4 h-4 text-muted-foreground" />
                              </div>
                              <span className="text-sm text-muted-foreground"><Txt k="becomeDriver.1c282b8c_4">{"Click to Upload"}</Txt></span>
                            </div>
                          )}
                        </label>
                        {fileUploadAttempted && !selectedFiles.goodsInTransitInsurance && (
                          <p className="text-sm font-medium text-destructive"><Txt k="becomeDriver.82f3d2bd">{"Goods In Transit Insurance is required"}</Txt></p>
                        )}
                      </div>
                    </div>

                    <FormField
                      control={form.control}
                      name="niNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel><Txt k="becomeDriver.6c086f5d">{"National Insurance Number *"}</Txt></FormLabel>
                          <FormControl>
                            <Input
                              placeholder={txt("becomeDriver.5feefe0a", "AB 12 34 56 C")}
                              maxLength={9}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="utrNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel><Txt k="becomeDriver.a6aa6543">{"UTR Number *"}</Txt></FormLabel>
                          <FormControl>
                            <Input
                              placeholder="1234 567 890"
                              maxLength={13}
                              {...field}
                              onChange={(e) => {
                                // Allow digits and spaces only
                                const value = e.target.value.replace(
                                  /[^\d\s]/g,
                                  "",
                                );
                                field.onChange(value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="rightToWorkCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel><Txt k="becomeDriver.40c71ae6">{"Right to Work Share Code *"}</Txt></FormLabel>
                          <FormControl>
                            <Input
                              placeholder="X1Y2Z3A4B"
                              maxLength={9}
                              {...field}
                              // Add this onChange handler to remove spaces
                              onChange={(e) => {
                                // Remove any spaces or non-alphanumeric chars
                                const value = e.target.value.replace(
                                  /[^a-zA-Z0-9]/g,
                                  "",
                                );
                                // Pass the formatted value to the form
                                field.onChange(value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-2">
                      <Label htmlFor="rightToWorkDoc"><Txt k="becomeDriver.c388ed12">{"Right to Work Verification Document *"}</Txt></Label>
                      <Input
                        id="rightToWorkDoc"
                        type="file"
                        accept=".pdf,.jpg,.png"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          if (file) {
                            const maxSize = 5 * 1024 * 1024; // 1MB
                            if (file.size > maxSize) {
                              toast.error(
                                `Right to Work document is too large (${(
                                  file.size /
                                  1024 /
                                  1024
                                ).toFixed(2)}MB). Maximum size is 1MB.`,
                              );
                              try {
                                (e.currentTarget as HTMLInputElement).value =
                                  "";
                              } catch (err) {}
                              setSelectedFiles((prev) => ({
                                ...prev,
                                rightToWorkDoc: null,
                              }));
                              return;
                            }
                          }
                          setSelectedFiles((prev) => ({
                            ...prev,
                            rightToWorkDoc: file,
                          }));
                        }}
                      />
                      <label
                        htmlFor="rightToWorkDoc"
                        className={`flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-muted/50 transition-colors ${
                          selectedFiles.rightToWorkDoc
                            ? "border-primary bg-primary/5"
                            : "border-border"
                        }`}
                      >
                        {selectedFiles.rightToWorkDoc ? (
                          <div className="text-center px-2">
                            <FileCheck className="w-6 h-6 text-primary mx-auto mb-2" />
                            <span className="text-sm font-semibold text-primary truncate block max-w-[300px]">
                              {selectedFiles.rightToWorkDoc.name}
                            </span>
                          </div>
                        ) : (
                          <div className="text-center px-2">
                            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                              <Upload className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <span className="text-sm text-muted-foreground"><Txt k="becomeDriver.1c282b8c_5">{"Click to Upload"}</Txt></span>
                          </div>
                        )}
                      </label>
                      {fileUploadAttempted && !selectedFiles.rightToWorkDoc && (
                        <p className="text-sm font-medium text-destructive"><Txt k="becomeDriver.fb10b748">{"Right to Work Verification Document is required"}</Txt></p>
                      )}
                    </div>
                    {/* DBS confirmation checkbox */}
                    <FormField
                      control={form.control}
                      name="dbsConfirmed"
                      render={({ field }) => (
                        <FormItem className="flex items-start gap-3 p-4 border border-border rounded-xl mt-4">
                          <FormControl>
                            <Checkbox
                              checked={!!field.value}
                              onCheckedChange={(v) => field.onChange(!!v)}
                              id="dbsConfirmed"
                              className="mt-3"
                            />
                          </FormControl>
                          <div className="grid gap-1.5 leading-none">
                            <FormLabel
                              htmlFor="dbsConfirmed"
                              className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                            ><Txt k="becomeDriver.ca6eceaa">{"I confirm that I have requested a basic DBS check through"}</Txt>{" "}
                              <a
                                href="https://www.gov.uk/request-copy-criminal-record"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline"
                              ><Txt k="becomeDriver.9a5a3e49">{"https://www.gov.uk/request-copy-criminal-record"}</Txt></a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {/* --- Step 3: Banking Information --- */}
                {currentStep === 3 && (
                  <>
                    <div className="bg-muted/50 p-6 rounded-xl">
                      <p className="text-sm text-muted-foreground"><Txt k="becomeDriver.3391ccf5">{"We need your banking details to process your weekly payments securely."}</Txt></p>
                    </div>

                    <FormField
                      control={form.control}
                      name="accountName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel><Txt k="becomeDriver.c60baae6">{"Account Name *"}</Txt></FormLabel>
                          <FormControl>
                            <Input placeholder={txt("becomeDriver.71008555", "John Smith")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="sortCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel><Txt k="becomeDriver.0afd90cf">{"Sort Code *"}</Txt></FormLabel>
                            <FormControl>
                              <Input
                                placeholder="12-34-56"
                                inputMode="numeric"
                                maxLength={8}
                                {...field} // Spread props first
                                // Override onChange
                                onChange={(e) => {
                                  // 1. Get raw value and remove non-digits
                                  let value = e.target.value.replace(
                                    /[^\d]/g,
                                    "",
                                  );

                                  // 2. Limit to 6 digits
                                  if (value.length > 6) {
                                    value = value.slice(0, 6);
                                  }

                                  // 3. Add the dashes automatically
                                  if (value.length > 4) {
                                    value =
                                      value.slice(0, 2) +
                                      "-" +
                                      value.slice(2, 4) +
                                      "-" +
                                      value.slice(4);
                                  } else if (value.length > 2) {
                                    value =
                                      value.slice(0, 2) + "-" + value.slice(2);
                                  }

                                  // 4. Update the form state
                                  field.onChange(value);
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="accountNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel><Txt k="becomeDriver.0674a937">{"Account Number *"}</Txt></FormLabel>
                            <FormControl>
                              <Input
                                placeholder="12345678"
                                inputMode="numeric"
                                maxLength={8}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl mt-8">
                      <h3 className="font-semibold text-secondary mb-3"><Txt k="becomeDriver.533e6d4d">{"Ready to Start?"}</Txt></h3>
                      <p className="text-sm text-muted-foreground"><Txt k="becomeDriver.5f1cf1d0">{"Once you submit this application, our team will review your details within 1 business day. You'll receive an email with next steps and access to the driver portal."}</Txt></p>
                    </div>
                  </>
                )}
              </form>
            </Form>

            {/* --- Navigation Buttons --- */}
            <div className="flex justify-between mt-10">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1 || submitted}
              >
                <ArrowLeft className="w-4 h-4" /><Txt k="becomeDriver.6583c11b">{"Back"}</Txt></Button>
              {submitted ? (
                <div className="text-center w-full py-8">
                  <h2 className="text-2xl font-semibold text-green-600 mb-4"><Txt k="becomeDriver.48ee833f">{"Thank you!"}</Txt></h2>
                  <p><Txt k="becomeDriver.8b38b1db">{"Your application was submitted successfully. We’ll be in touch soon."}</Txt></p>
                </div>
              ) : (
                <Button
                  variant="brand"
                  onClick={handleNext}
                  disabled={isSubmitting}
                >
                  {currentStep === 3 ? "Submit Application" : "Next"}{" "}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
