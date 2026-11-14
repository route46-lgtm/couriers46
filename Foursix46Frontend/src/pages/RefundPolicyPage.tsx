import React from "react";
import {
  Receipt,
  RefreshCcw,
  AlertOctagon,
  Wallet,
  HelpCircle,
  CheckCircle,
  FileText,
  Truck,
  Clock,
  Shield,
  AlertTriangle,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

import Seo from "@/components/Seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Txt, useText } from "@/content/SiteContentProvider";
// Animation utility
const fadeInUp =
  "animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-forwards";

export default function RefundPolicyPage() {
  const txt = useText();
  const sections = [
    {
      icon: FileText,
      title: txt("refund.7e8bc31f", "1. General Principle"),
      color: "#48AEDD", // Blue
      bg: "bg-[#48AEDD]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="refund.a7ea5ad4">{"Operational planning begins immediately once a booking is made. Refund eligibility depends on whether a driver has been assigned, dispatched, or travelled."}</Txt></p>
          <p className="font-medium text-[#134467]"><Txt k="refund.4a3c4672">{"All liability, claims, and compensation are governed by our"}</Txt>{" "}
            <a href="/terms" className="underline hover:text-[#48AEDD]"><Txt k="refund.b01ec4b5">{"Terms and Conditions"}</Txt></a>
            .
          </p>
        </div>
      ),
    },
    {
      icon: RefreshCcw,
      title: txt("refund.253f034f", "2. Cancellations Before Dispatch"),
      color: "#E53935", // Red
      bg: "bg-[#E53935]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="refund.6857dcc1">{"A booking may be cancelled before a driver is allocated or dispatched."}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li><Txt k="refund.cc325e10">{"Refunds may be issued minus an administrative fee."}</Txt></li>
            <li>
              <strong><Txt k="refund.c4f9a7b5">{"Admin fee:"}</Txt></strong><Txt k="refund.df0e764f">{" Up to £5.00 to cover booking & processing costs."}</Txt></li>
          </ul>
          <p className="text-sm text-slate-500"><Txt k="refund.94bec0e3">{"Refunds are processed to the original payment method within 5–10 business days."}</Txt></p>
        </div>
      ),
    },
    {
      icon: Truck,
      title: txt("refund.32470d92", "3. Cancellations After Assignment"),
      color: "#134467", // Navy
      bg: "bg-[#134467]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="refund.4a4b9471">{"Once a driver has been allocated or started travelling to the collection point:"}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              A <strong><Txt k="refund.0a3ab235">{"full refund is not available"}</Txt></strong>.
            </li>
            <li><Txt k="refund.42d06a01">{"A partial refund may be issued minus:"}</Txt><ul className="list-circle pl-5 mt-1">
                <li><Txt k="refund.80f5484d">{"Driver call-out fee"}</Txt></li>
                <li><Txt k="refund.2763165e">{"Mileage already travelled"}</Txt></li>
                <li><Txt k="refund.439b46d1">{"Waiting time (if applicable)"}</Txt></li>
              </ul>
            </li>
          </ul>
          <p className="italic text-sm"><Txt k="refund.408565cb">{"This is permitted under the Carrier’s right to recover reasonable operational costs."}</Txt></p>
        </div>
      ),
    },
    {
      icon: AlertOctagon,
      title: txt("refund.5d31dfa5", "4. Failed Collection"),
      color: "#F5EB18", // Yellow
      bg: "bg-[#F5EB18]/20",
      content: (
        <div className="space-y-2">
          <p><Txt k="refund.43284d06">{"A failed collection occurs when:"}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li><Txt k="refund.5f50d08b">{"Goods are not ready"}</Txt></li>
            <li><Txt k="refund.3bff43d6">{"Nobody is available at the collection point"}</Txt></li>
            <li><Txt k="refund.ff1f12ee">{"Incorrect/incomplete address"}</Txt></li>
            <li><Txt k="refund.f7c283b4">{"Unsafe or inaccessible location"}</Txt></li>
          </ul>
          <div className="mt-2 bg-red-50 p-3 rounded-lg border border-red-100 text-red-800 text-sm">
            <strong><Txt k="refund.39d55cc6">{"Result:"}</Txt></strong><Txt k="refund.c4efecb9">{" No refund is provided. Re-collection can be arranged at additional cost. Drivers’ time and mileage are chargeable."}</Txt></div>
        </div>
      ),
    },
    {
      icon: Clock,
      title: txt("refund.73a0c565", "5. Delayed Deliveries"),
      color: "#48AEDD", // Blue
      bg: "bg-[#48AEDD]/10",
      content: (
        <div className="space-y-4">
          <div>
            <p className="font-bold text-[#134467]"><Txt k="refund.909c03c5">{"5.1 Same-Day Deliveries"}</Txt></p>
            <p><Txt k="refund.311e84da">{"Same-day delivery is not guaranteed unless expressly agreed in writing as a special service. Delays caused by traffic, weather, road closures, or incidents are not refundable."}</Txt></p>
          </div>
          <div>
            <p className="font-bold text-[#134467]"><Txt k="refund.1c09eaaa">{"5.2 Standard Deliveries (2–4 Days)"}</Txt></p>
            <p><Txt k="refund.a180992d">{"Delivery times are estimates. Refunds are not given unless a delay is proven to be solely caused by FourSix46® negligence, not external conditions."}</Txt></p>
          </div>
        </div>
      ),
    },
    {
      icon: Shield,
      title: txt("refund.9b2626eb", "6. Loss or Damage"),
      color: "#E53935", // Red
      bg: "bg-[#E53935]/10",
      content: (
        <div className="space-y-3">
          <p><Txt k="refund.9f91e549">{"Loss or damage claims are handled as follows:"}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong><Txt k="refund.238f5b8e">{"Damage/Shortage:"}</Txt></strong><Txt k="refund.a4c1dd7d">{" Notice required within"}</Txt>{" "}
              <strong><Txt k="refund.f7513daf">{"7 days"}</Txt></strong>.
            </li>
            <li>
              <strong><Txt k="refund.3885fc5e">{"Loss/Non-delivery:"}</Txt></strong><Txt k="refund.a4c1dd7d_2">{" Notice required within"}</Txt>{" "}
              <strong><Txt k="refund.7317afeb">{"28 days"}</Txt></strong>.
            </li>
            <li>
              <strong><Txt k="refund.969a95c2">{"Liability Limit:"}</Txt></strong><Txt k="refund.1a9288f9">{" £1,300 per tonne of gross weight (~£1.30 per kg)."}</Txt></li>
          </ul>
          <p className="text-sm"><Txt k="refund.274e549a">{"Liability excludes consequential loss, loss of profits, or special losses. Customers must arrange full-value insurance if needed."}</Txt></p>
        </div>
      ),
    },
    {
      icon: Wallet,
      title: txt("refund.fc003c1d", "7. Non-Refundable Situations"),
      color: "#134467", // Navy
      bg: "bg-[#134467]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="refund.c2e718f3">{"No refund will be issued if:"}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li><Txt k="refund.d169bc0b">{"The Customer provides incorrect information."}</Txt></li>
            <li><Txt k="refund.ecb87017">{"The Goods are illegal, dangerous, or prohibited."}</Txt></li>
            <li><Txt k="refund.c0dde288">{"Delivery is refused by the recipient."}</Txt></li>
            <li><Txt k="refund.a1c08f72">{"Delays arise from external factors (weather, traffic, incidents)."}</Txt></li>
            <li><Txt k="refund.0563ce56">{"The job is completed and then cancellation is requested."}</Txt></li>
            <li><Txt k="refund.97287cfd">{"The Customer breaches our Terms and Conditions."}</Txt></li>
          </ul>
        </div>
      ),
    },
    {
      icon: Building2,
      title: txt("refund.fbfd3b1d", "8. Business (B2B) Customers"),
      color: "#F5EB18", // Yellow
      bg: "bg-[#F5EB18]/20",
      content:
        txt("refund.f310efc4", "Refunds for account customers follow this Policy and our Terms and Conditions. Any credit notes issued will be applied to the business account balance."),
    },
    {
      icon: RefreshCcw,
      title: txt("refund.f4d32f28", "9. Booking Changes"),
      color: "#48AEDD", // Blue
      bg: "bg-[#48AEDD]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="refund.3edaf880">{"Changes to collection time, delivery address, parcel details, or contact information may:"}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li><Txt k="refund.8a75acd2">{"Not always be possible."}</Txt></li>
            <li><Txt k="refund.1dc6fd42">{"Incur additional charges."}</Txt></li>
            <li><Txt k="refund.eca5b014">{"Affect delivery times."}</Txt></li>
          </ul>
          <p className="text-sm italic"><Txt k="refund.e89d1312">{"If the change leads to cancellation, Sections 2–4 apply."}</Txt></p>
        </div>
      ),
    },
    {
      icon: Receipt,
      title: txt("refund.c3edab14", "10. Refund Procedure"),
      color: "#E53935", // Red
      bg: "bg-[#E53935]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="refund.fb965366">{"To request a refund, contact us via the Contact Us page and include:"}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li><Txt k="refund.9100768a">{"Booking reference"}</Txt></li>
            <li><Txt k="refund.b94dd147">{"Reason for request"}</Txt></li>
            <li><Txt k="refund.02856f44">{"Relevant documents (if applicable)"}</Txt></li>
          </ul>
          <p className="font-semibold text-[#E53935]"><Txt k="refund.e75be05b">{"Approved refunds are issued within 5–10 business days."}</Txt></p>
        </div>
      ),
    },
    {
      icon: AlertTriangle,
      title: txt("refund.90115fef", "11. Right to Decline"),
      color: "#134467", // Navy
      bg: "bg-[#134467]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="refund.e7faa36a">{"FourSix46® Global Ltd may refuse a refund if:"}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li><Txt k="refund.427fc097">{"This Policy or our Terms and Conditions are breached."}</Txt></li>
            <li><Txt k="refund.f4417962">{"Fraudulent claims are detected."}</Txt></li>
            <li><Txt k="refund.a18fbbf2">{"Goods fall under prohibited categories."}</Txt></li>
            <li><Txt k="refund.9e7736ed">{"Claims do not meet the time limits set out in Section 6."}</Txt></li>
          </ul>
        </div>
      ),
    },
    {
      icon: CheckCircle,
      title: txt("refund.3b65e4e9", "12. Policy Updates"),
      color: "#F5EB18", // Yellow
      bg: "bg-[#F5EB18]/20",
      content:
        txt("refund.de55ad8a", "This Policy may be updated. Continued use of our services confirms acceptance of the latest version."),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden font-sans selection:bg-[#E53935] selection:text-white">
      <Seo
        title="Refund Policy"
        description="Route46 Couriers' refund and cancellation policy for same day courier bookings and prepaid deliveries."
        path="/refund-policy"
        schemas={[
          webPageSchema({
            path: "/refund-policy",
            name: "Refund Policy",
            description: "Route46 Couriers' refund and cancellation policy for same day courier bookings and prepaid deliveries.",
          }),
          breadcrumbSchema([{ name: "Refund Policy", path: "/refund-policy" }]),
        ]}
      />

      {/* Hero Section */}
      <div className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-[#48AEDD]/10">
        {/* Subtle Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-10 right-1/3 w-64 h-64 bg-[#48AEDD]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#E53935]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl relative z-10">
          <div
            className={cn(
              "inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-50 border border-[#134467]/10 shadow-sm mb-8",
              fadeInUp,
            )}
          >
            <Receipt className="w-4 h-4 text-[#48AEDD]" />
            <span className="text-[#48AEDD] font-bold text-xs tracking-widest uppercase"><Txt k="refund.514b1765">{"Customer Guarantee"}</Txt></span>
          </div>

          <h1
            className={cn(
              "text-4xl sm:text-5xl lg:text-6xl font-black text-[#48AEDD] mb-6 tracking-tight",
              fadeInUp,
              "animation-delay-100",
            )}
          ><Txt k="refund.3eaae10a">{"Refund & "}</Txt><span className="text-[#E53935]"><Txt k="refund.e49d7c7c">{"Cancellation Policy"}</Txt></span>
          </h1>

          <p
            className={cn(
              "text-lg sm:text-xl text-slate-500 mb-4 max-w-2xl mx-auto font-medium",
              fadeInUp,
              "animation-delay-200",
            )}
          ><Txt k="refund.123e9cf2">{"Applies to All Bookings, Cancellations and Deliveries"}</Txt></p>
          <p
            className={cn(
              "text-sm text-slate-400",
              fadeInUp,
              "animation-delay-300",
            )}
          ><Txt k="refund.f946fe2d">{"Last Updated: 22/08/2026"}</Txt></p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div
          className={cn(
            "max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden",
            fadeInUp,
            "animation-delay-500",
          )}
        >
          {/* Intro Box - Sky Blue Background for Policy Notice (UPDATED) */}
          <div className="bg-[#48AEDD] p-8 sm:p-10 text-white">
            <div className="flex gap-4 items-start">
              <AlertOctagon className="w-6 h-6 text-[#F5EB18] flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-xl mb-2 text-[#F5EB18]"><Txt k="refund.b223659e">{"Policy Overview"}</Txt></h2>
                <p className="text-white/90 leading-relaxed"><Txt k="refund.536e15ed">{"This Refund & Cancellation Policy applies to courier, transport, and logistics services provided by FourSix46® Global Ltd, trading as Route46 Couriers, within the United Kingdom."}</Txt></p>
                <br />
                <p className="text-white/90 leading-relaxed"><Txt k="refund.306fbc59">{"All delivery and transport services are provided in accordance with our"}</Txt>{" "}
                  <a
                    href="/terms"
                    className="underline decoration-[#F5EB18]/60 underline-offset-2 hover:text-[#F5EB18]"
                  ><Txt k="refund.b01ec4b5_2">{"Terms and Conditions"}</Txt></a><Txt k="refund.d3690366">{", which set out our standard terms governing liability, claims, and compensation."}</Txt></p>
                <br />
                <p className="text-white/90 leading-relaxed"><Txt k="refund.6e775755">{"Where any conflict arises between this Refund & Cancellation Policy and our Terms and Conditions, our Terms and Conditions shall take precedence."}</Txt></p>
                <br />
                <p className="text-white/90 leading-relaxed"><Txt k="refund.a5756faa">{"This policy outlines how booking cancellations, refunds, and related service adjustments are handled in accordance with our operational planning, driver dispatch procedures, and transport commitments."}</Txt></p>
              </div>
            </div>
          </div>

          {/* Policy Sections List */}
          <div className="p-8 sm:p-12 space-y-10">
            {sections.map((section, index) => (
              <section key={index} className="group">
                <div className="flex gap-4 items-start">
                  {/* Section Icon - Styled Container */}
                  <div
                    className={cn(
                      "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mt-1 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                      section.bg,
                    )}
                  >
                    <section.icon
                      className="w-6 h-6"
                      style={{
                        color:
                          section.color === "#F5EB18"
                            ? "#dcb004"
                            : section.color,
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-[#134467] mb-4 group-hover:text-[#E53935] transition-colors">
                      {section.title}
                    </h2>
                    <div className="text-slate-600 text-base leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index !== sections.length - 1 && (
                  <div className="h-px w-full bg-slate-100 mt-10 ml-16" />
                )}
              </section>
            ))}
          </div>

          {/* Bottom Contact Section */}
          <div className="bg-slate-50 p-8 border-t border-slate-100">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#48AEDD]">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#134467]"><Txt k="refund.676f6d4b">{"Need to request a refund?"}</Txt></h3>
                <p className="text-sm text-slate-500 mt-1"><Txt k="refund.87a11e38">{"Contact our support team with your Booking Reference."}</Txt></p>
              </div>
              <a
                href="/contact"
                className="px-6 py-3 bg-[#134467] text-white font-bold rounded-xl hover:bg-[#0f3652] transition-colors shadow-lg shadow-blue-900/10"
              ><Txt k="refund.446eb351">{"Contact Support"}</Txt></a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
