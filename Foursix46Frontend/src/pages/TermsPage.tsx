import React from "react";
import {
  Scale,
  FileText,
  ShieldCheck,
  AlertTriangle,
  Info,
  BookOpen,
  Truck,
  UserCheck,
  Package,
  AlertCircle,
  CreditCard,
  ShieldAlert,
  FileWarning,
  Lock,
  Users,
  CloudLightning,
  Gavel,
  RefreshCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

import Seo from "@/components/Seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Txt, useText } from "@/content/SiteContentProvider";
// Animation utility
const fadeInUp =
  "animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-forwards";

export default function TermsPage() {
  const txt = useText();
  // Legal content data structure with specific icons and colors
  const legalSections = [
    {
      title: txt("terms.e16b59b4", "1. Introduction"),
      icon: Info,
      color: "#48AEDD", // Sky Blue
      bg: "bg-[#48AEDD]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="terms.21d10867">{"These Terms and Conditions govern the provision of courier, transport, and related logistics services offered by"}</Txt>{" "}
            <strong className="text-[#134467]"><Txt k="terms.867c8ae4">{"FourSix46® Global Ltd"}</Txt></strong><Txt k="terms.d6156767">{", trading as"}</Txt>{" "}
            <strong className="text-[#134467]"><Txt k="terms.5d55c92c">{"Route46 Couriers"}</Txt></strong><Txt k="terms.6f1d7c40">{", within the United Kingdom."}</Txt></p>
          <p><Txt k="terms.9f675a95">{"All carriage and delivery services arranged by Route46 Couriers are undertaken in accordance with these Terms, which set out the standard terms, responsibilities, and liability limits applicable to our road transport operations in the UK."}</Txt></p>
          <p><Txt k="terms.f16129b0">{"By requesting a delivery quotation, booking a shipment, opening an account, or consigning goods for transport, the customer confirms their acceptance of these Terms and Conditions."}</Txt></p>
          <p><Txt k="terms.1839840e">{"No additional or alternative terms shall apply unless expressly agreed in writing and signed by an authorised director of FourSix46 Global Ltd."}</Txt></p>
          <p className="italic text-sm"><Txt k="terms.29e472d6">{"A full copy of these Terms is available on request."}</Txt></p>
          <p><Txt k="terms.038c8ee0">{"Company Information:"}</Txt><br /><Txt k="terms.0be147af">{"FourSix46® Global Ltd Trading as Route46 Couriers"}</Txt><br /><Txt k="terms.19249e41">{"66 Paul Street"}</Txt><br /><Txt k="terms.da4056fc">{"London EC2A 4NA"}</Txt><br /><Txt k="terms.d8656aab">{"United Kingdom"}</Txt></p>
        </div>
      ),
    },
    {
      title: txt("terms.a22cda5a", "2. Definitions"),
      icon: BookOpen,
      color: "#134467", // Navy
      bg: "bg-[#134467]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="terms.4cb5235a">{"The following terms carry the meanings set out below wherever they appear in these Terms:"}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong><Txt k="terms.f5326201">{"“Carrier”"}</Txt></strong><Txt k="terms.2f0b25f4">{" – Route46 Couriers (FourSix46 Global Ltd)"}</Txt></li>
            <li>
              <strong><Txt k="terms.eed2547c">{"“Customer”"}</Txt></strong><Txt k="terms.4f3b1de8">{" – Any person or business using the Carrier’s services"}</Txt></li>
            <li>
              <strong><Txt k="terms.58daf9ae">{"“Consignment”"}</Txt></strong><Txt k="terms.73ea3f83">{" – Goods carried at one time under one contract"}</Txt></li>
            <li>
              <strong><Txt k="terms.84a8ce2e">{"“Goods”"}</Txt></strong><Txt k="terms.cc46a308">{" – Items accepted for carriage"}</Txt></li>
            <li>
              <strong><Txt k="terms.3690b9c7">{"“Subcontractor”"}</Txt></strong><Txt k="terms.017666b4">{" – Any third party engaged to perform carriage"}</Txt></li>
          </ul>
        </div>
      ),
    },
    {
      title: txt("terms.9cf862e8", "3. Governing Conditions"),
      icon: Scale,
      color: "#E53935", // Red
      bg: "bg-[#E53935]/10",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li><Txt k="terms.0361aeaa">{"3.1 All services are supplied under"}</Txt>{" "}
            <strong className="text-[#134467]"><Txt k="terms.c5a18c01">{"these Terms"}</Txt></strong><Txt k="terms.e569862e">{", which take precedence over any other terms, including the Customer’s own, unless we agree otherwise in writing."}</Txt></li>
          <li><Txt k="terms.e7bfc96f">{"3.2 No employee, contractor, or agent has authority to"}</Txt>{" "}
            <strong className="text-[#134467]"><Txt k="terms.64a21eaa">{"vary these Conditions"}</Txt></strong>{" "}<Txt k="terms.2d5ac4ec">{"unless authorised in writing by a director of FourSix46 Global Ltd."}</Txt></li>
        </ul>
      ),
    },
    {
      title: txt("terms.66b2607d", "4. Carrier’s Status"),
      icon: ShieldCheck,
      color: "#F5EB18", // Yellow
      bg: "bg-[#F5EB18]/20",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li><Txt k="terms.2786c25a">{"4.1 The Carrier is"}</Txt>{" "}
            <strong className="text-[#E53935]"><Txt k="terms.b5c73e28">{"not a common carrier"}</Txt></strong><Txt k="terms.d4dda369">{" and may refuse goods at its discretion."}</Txt></li>
          <li><Txt k="terms.d4c5c646">{"4.2 The Carrier may"}</Txt>{" "}
            <strong className="text-[#134467]"><Txt k="terms.18c2b68d">{"subcontract"}</Txt></strong><Txt k="terms.e139fe26">{" the whole or any part of the carriage to another carrier, courier or driver."}</Txt></li>
        </ul>
      ),
    },
    {
      title: txt("terms.14f93200", "5. Customer Obligations"),
      icon: UserCheck,
      color: "#48AEDD", // Sky Blue
      bg: "bg-[#48AEDD]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="terms.38e7b7f2">{"The Customer must ensure:"}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong><Txt k="terms.9960937e">{"Accurate description"}</Txt></strong><Txt k="terms.1bc55957">{" of Goods"}</Txt></li>
            <li>
              <strong><Txt k="terms.756463fb">{"Appropriate packaging"}</Txt></strong>
            </li>
            <li>
              <strong><Txt k="terms.213f6188">{"Correct addresses"}</Txt></strong><Txt k="terms.ca4e3b81">{" and documentation"}</Txt></li>
            <li><Txt k="terms.d842ec47">{"Compliance with "}</Txt><strong><Txt k="terms.53c085b5">{"UK laws"}</Txt></strong><Txt k="terms.4ca6a723">{" and transport regulations"}</Txt></li>
            <li><Txt k="terms.7119d9be">{"Proper declaration of"}</Txt>{" "}
              <strong><Txt k="terms.2104b4c8">{"Hazardous or Dangerous Goods"}</Txt></strong>
            </li>
            <li><Txt k="terms.7137c8e8">{"Arranging "}</Txt><strong><Txt k="terms.e72b2815">{"full-value insurance"}</Txt></strong><Txt k="terms.5e964217">{" for the Goods"}</Txt></li>
          </ul>
          <p className="mt-2 italic text-slate-500"><Txt k="terms.b6d14aae">{"The Customer is responsible for any consequences arising from incorrect information or insufficient packaging."}</Txt></p>
        </div>
      ),
    },
    {
      title: txt("terms.0254ef38", "6. Dangerous or Prohibited Goods"),
      icon: AlertTriangle,
      color: "#E53935", // Red
      bg: "bg-[#E53935]/10",
      content: (
        <div className="space-y-4">
          <p><Txt k="terms.cdfc55c4">{"Unless agreed in writing, the Carrier"}</Txt>{" "}
            <strong className="text-[#E53935]"><Txt k="terms.9eda82c0">{"does not accept"}</Txt></strong>:
          </p>
          <div className="grid sm:grid-cols-2 gap-2 pl-5">
            <ul className="list-disc space-y-1">
              <li>
                <strong><Txt k="terms.8dfdc4d1">{"Dangerous goods"}</Txt></strong>
              </li>
              <li><Txt k="terms.a679bfdc">{"Hazardous, explosive, toxic, or flammable items"}</Txt></li>
              <li>
                <strong><Txt k="terms.d9c02176">{"Cash"}</Txt></strong>
              </li>
              <li><Txt k="terms.a066d344">{"High-value jewellery"}</Txt></li>
            </ul>
            <ul className="list-disc space-y-1">
              <li><Txt k="terms.272b5c4b">{"Animals or livestock"}</Txt></li>
              <li><Txt k="terms.aa9e20ef">{"Controlled or illegal substances"}</Txt></li>
              <li><Txt k="terms.9a73b4ab">{"Items "}</Txt><strong><Txt k="terms.a435005f">{"prohibited by law"}</Txt></strong>
              </li>
            </ul>
          </div>
          {/* Alert Box */}
          <div className="bg-[#E53935]/5 p-4 rounded-lg border border-[#E53935]/20">
            <p className="font-semibold text-[#E53935] mb-2"><Txt k="terms.c522dd0d">{"Notice:"}</Txt></p>
            <p className="text-slate-700 text-sm"><Txt k="terms.23579c63">{"The Carrier may refuse, remove, make safe, render harmless, or destroy any "}</Txt><strong><Txt k="terms.bf04deba">{"undeclared dangerous goods"}</Txt></strong><Txt k="terms.dba01590">{", with all costs payable by the Customer."}</Txt></p>
          </div>
        </div>
      ),
    },
    {
      title: txt("terms.1e86fb42", "7. Packaging"),
      icon: Package,
      color: "#134467", // Navy
      bg: "bg-[#134467]/10",
      content: (
        <div className="space-y-2">
          <ul className="list-disc pl-5 space-y-2">
            <li><Txt k="terms.82e05291">{"The Customer must ensure Goods are"}</Txt>{" "}
              <strong className="text-[#134467]"><Txt k="terms.fc8f9128">{"securely and adequately packaged"}</Txt></strong>
              .
            </li>
            <li><Txt k="terms.33532b7a">{"The Carrier is"}</Txt>{" "}
              <strong className="text-[#E53935]"><Txt k="terms.0ad2b285">{"not liable"}</Txt></strong><Txt k="terms.93deccf9">{" for loss or damage caused by "}</Txt><strong><Txt k="terms.5615c24f">{"insufficient packaging"}</Txt></strong>.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: txt("terms.928c239c", "8. Collection, Carriage & Delivery"),
      icon: Truck,
      color: "#F5EB18", // Yellow
      bg: "bg-[#F5EB18]/20",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li><Txt k="terms.1e38539c">{"8.1 Times for collection or delivery are"}</Txt>{" "}
            <strong className="text-[#E53935]"><Txt k="terms.991660c4">{"not guaranteed"}</Txt></strong><Txt k="terms.443eeca0">{" unless expressly agreed in writing as a special contractual service."}</Txt></li>
          <li><Txt k="terms.3db3382d">{"8.2 Delivery may be made to any person appearing"}</Txt>{" "}
            <strong className="text-[#134467]"><Txt k="terms.2af2ebf6">{"authorised"}</Txt></strong><Txt k="terms.e6960d02">{" at the delivery address."}</Txt></li>
          <li><Txt k="terms.19a76908">{"8.3 Undelivered goods will be handled in accordance with these Terms (including storage, return, or disposal)."}</Txt></li>
        </ul>
      ),
    },
    {
      title: txt("terms.e41078bb", "9. Undelivered, Unclaimed, or Rejected Goods"),
      icon: AlertCircle,
      color: "#E53935", // Red
      bg: "bg-[#E53935]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="terms.ea5dae97">{"If the Carrier cannot deliver Goods:"}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li><Txt k="terms.5d7380c0">{"The Carrier will attempt to contact the Customer;"}</Txt></li>
            <li><Txt k="terms.b3399485">{"Goods may be held, returned, stored, or sold after a reasonable notice period;"}</Txt></li>
            <li><Txt k="terms.a1aa8f87">{"All costs associated with"}</Txt>{" "}
              <strong className="text-[#134467]"><Txt k="terms.b4dbefb7">{"storage, return, or disposal"}</Txt></strong>{" "}<Txt k="terms.4ef3663c">{"are payable by the Customer."}</Txt></li>
          </ul>
        </div>
      ),
    },
    {
      title: txt("terms.846b40de", "10. Charges & Payment Terms"),
      icon: CreditCard,
      color: "#48AEDD", // Blue
      bg: "bg-[#48AEDD]/10",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li><Txt k="terms.d0a39e9b">{"10.1 Charges are based on distance, size, weight, service type, or contractual agreements."}</Txt></li>
          <li><Txt k="terms.f80f39a6">{"10.2 Business account customers must pay within"}</Txt>{" "}
            <strong className="text-[#134467]"><Txt k="terms.9efd2f42">{"30 days"}</Txt></strong><Txt k="terms.8a0efeb6">{" of invoice unless agreed otherwise."}</Txt></li>
          <li>
            10.3 <strong><Txt k="terms.fced6fe9">{"Interest"}</Txt></strong><Txt k="terms.aa48b7d7">{" may be charged under the Late Payment of Commercial Debts (Interest) Act 1998."}</Txt></li>
          <li><Txt k="terms.de9dd668">{"10.4 The Carrier exercises a "}</Txt><strong><Txt k="terms.46ca6f09">{"general lien"}</Txt></strong><Txt k="terms.26456f3d">{" over Goods until all charges are paid in full (see Condition 13 below)."}</Txt></li>
        </ul>
      ),
    },
    {
      title: txt("terms.313805dd", "11. Liability"),
      icon: ShieldAlert,
      color: "#134467", // Navy
      bg: "bg-[#134467]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="terms.dfd83b0f">{"Liability for loss, damage, or delay is governed by these Terms, as follows:"}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li><Txt k="terms.890f7cba">{"Liability limited to"}</Txt>{" "}
              <strong className="text-[#E53935]"><Txt k="terms.e6dd2698">{"£1,300 per tonne"}</Txt></strong><Txt k="terms.0f870942">{" of gross weight (≈ £1.30/kg)"}</Txt></li>
            <li>
              <strong><Txt k="terms.40fc44d7">{"No liability"}</Txt></strong><Txt k="terms.4c8a4bcd">{" for consequential or indirect loss"}</Txt></li>
            <li>
              <strong><Txt k="terms.40fc44d7_2">{"No liability"}</Txt></strong><Txt k="terms.f6f25492">{" for loss of profits, business, opportunity, or special damages"}</Txt></li>
            <li>
              <strong><Txt k="terms.40fc44d7_3">{"No liability"}</Txt></strong><Txt k="terms.67a9471d">{" for customer-packaged fragile or poorly packaged items"}</Txt></li>
            <li>
              <strong><Txt k="terms.40fc44d7_4">{"No liability"}</Txt></strong><Txt k="terms.eb0d6ef0">{" for undeclared dangerous goods"}</Txt></li>
          </ul>
          <p className="mt-2 italic text-slate-500"><Txt k="terms.a30675cb">{"The Customer must arrange"}</Txt>{" "}
            <strong className="text-[#134467]"><Txt k="terms.e72b2815_2">{"full-value insurance"}</Txt></strong><Txt k="terms.944cc693">{" if required."}</Txt></p>
        </div>
      ),
    },
    {
      title: txt("terms.f39779bf", "12. Claims"),
      icon: FileWarning,
      color: "#E53935", // Red
      bg: "bg-[#E53935]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="terms.fe7b24f9">{"Claims must be made within the following deadlines:"}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong><Txt k="terms.6788bd6d">{"Damage / Shortage:"}</Txt></strong><Txt k="terms.3625e383">{" Notify within"}</Txt>{" "}
              <strong className="text-[#E53935]"><Txt k="terms.f7513daf">{"7 days"}</Txt></strong><Txt k="terms.b540ebaa">{" of delivery"}</Txt></li>
            <li>
              <strong><Txt k="terms.0e1bb397">{"Loss / Non-Delivery:"}</Txt></strong><Txt k="terms.3625e383_2">{" Notify within"}</Txt>{" "}
              <strong className="text-[#E53935]"><Txt k="terms.7317afeb">{"28 days"}</Txt></strong><Txt k="terms.45936df8">{" of the date the Goods should have been delivered"}</Txt></li>
            <li><Txt k="terms.b4da66e1">{"Claims made outside these windows will not be accepted, unless it was genuinely not possible to notify us in time"}</Txt></li>
            <li><Txt k="terms.7dd14a6a">{"All claims must be supported by reasonable evidence of the loss or damage claimed"}</Txt></li>
          </ul>
        </div>
      ),
    },
    {
      title: txt("terms.7a94d0c5", "13. Lien"),
      icon: Lock,
      color: "#F5EB18", // Yellow
      bg: "bg-[#F5EB18]/20",
      content: (
        <p><Txt k="terms.ba7e922c">{"The Carrier may"}</Txt>{" "}
          <strong className="text-[#134467]"><Txt k="terms.461a23ae">{"retain Goods"}</Txt></strong><Txt k="terms.a556cc43">{" until all charges due are paid in full. If charges remain unpaid, Goods may be"}</Txt>{" "}
          <strong className="text-[#E53935]"><Txt k="terms.7d22bff3">{"sold to recover costs"}</Txt></strong>.
        </p>
      ),
    },
    {
      title: txt("terms.48deca3c", "14. Subcontracted Drivers"),
      icon: Users,
      color: "#48AEDD", // Blue
      bg: "bg-[#48AEDD]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="terms.7e2fa005">{"All subcontracted drivers must operate in accordance with these Terms, including:"}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li><Txt k="terms.d842ec47_2">{"Compliance with "}</Txt><strong><Txt k="terms.72365a2d">{"safety standards"}</Txt></strong>
            </li>
            <li><Txt k="terms.abd938d9">{"Proper handling of Goods"}</Txt></li>
            <li><Txt k="terms.cde1bd35">{"Reporting incidents immediately"}</Txt></li>
            <li><Txt k="terms.f9cd5e4f">{"Prohibition from subcontracting further without written permission"}</Txt></li>
          </ul>
        </div>
      ),
    },
    {
      title: txt("terms.2ef25911", "15. Force Majeure"),
      icon: CloudLightning,
      color: "#134467", // Navy
      bg: "bg-[#134467]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="terms.3c93c4bd">{"Events"}</Txt>{" "}
            <strong className="text-[#134467]"><Txt k="terms.5a66606b">{"outside the Carrier’s reasonable control"}</Txt></strong>{" "}<Txt k="terms.53c731e7">{"relieve the Carrier of liability and may include:"}</Txt></p>
          <ul className="list-disc pl-5 grid sm:grid-cols-2 gap-1">
            <li><Txt k="terms.ee4e980b">{"Weather disruptions"}</Txt></li>
            <li><Txt k="terms.61112920">{"Traffic or road closures"}</Txt></li>
            <li><Txt k="terms.e1e5037a">{"Strikes or industrial action"}</Txt></li>
            <li><Txt k="terms.b04b1a5f">{"Government restrictions"}</Txt></li>
            <li><Txt k="terms.c51e743d">{"Accidents"}</Txt></li>
            <li><Txt k="terms.da93807d">{"Natural disasters"}</Txt></li>
          </ul>
        </div>
      ),
    },
    {
      title: txt("terms.1847309b", "16. Governing Law"),
      icon: Gavel,
      color: "#E53935", // Red
      bg: "bg-[#E53935]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="terms.b61495cf">{"These Terms and all carriage contracts are governed by the laws of"}</Txt>{" "}
            <strong className="text-[#134467]"><Txt k="terms.5011bff8">{"England & Wales"}</Txt></strong><Txt k="terms.d215cce0">{", with disputes subject to the exclusive jurisdiction of the English courts."}</Txt></p>
        </div>
      ),
    },
    {
      title: txt("terms.9dc36d70", "17. Updates to These Terms"),
      icon: RefreshCcw,
      color: "#48AEDD", // Blue
      bg: "bg-[#48AEDD]/10",
      content:
        txt("terms.de3d1523", "We may update these Terms from time to time to reflect changes in our services or the law. The version in force is always the one published on this page, dated above. A full copy of these Terms is available on request."),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden font-sans selection:bg-[#E53935] selection:text-white">
      <Seo
        title="Terms & Conditions"
        description="The terms and conditions governing use of the Route46 Couriers website and our same day courier services."
        path="/terms"
        schemas={[
          webPageSchema({
            path: "/terms",
            name: "Terms & Conditions",
            description: "The terms and conditions governing use of the Route46 Couriers website and our same day courier services.",
          }),
          breadcrumbSchema([{ name: "Terms & Conditions", path: "/terms" }]),
        ]}
      />

      {/* Header Area */}
      <div className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-[#48AEDD]/10">
        {/* Subtle Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#F5EB18]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#48AEDD]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl relative z-10">
          <div
            className={cn(
              "inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-50 border border-[#48AEDD]/20 shadow-sm mb-8",
              fadeInUp,
            )}
          >
            <Scale className="w-4 h-4 text-[#48AEDD]" />
            <span className="text-[#48AEDD] font-bold text-xs tracking-widest uppercase"><Txt k="terms.0b63f4af">{"Legal Information"}</Txt></span>
          </div>

          <h1
            className={cn(
              "text-4xl sm:text-5xl lg:text-6xl font-black text-[#48AEDD] mb-6 tracking-tight",
              fadeInUp,
              "animation-delay-100",
            )}
          ><Txt k="terms.c2ff8464">{"Terms & "}</Txt><span className="text-[#E53935]"><Txt k="terms.60aa5c97">{"Conditions"}</Txt></span>
          </h1>

          <p
            className={cn(
              "text-lg sm:text-xl text-slate-500 mb-4 max-w-2xl mx-auto font-medium",
              fadeInUp,
              "animation-delay-200",
            )}
          ><Txt k="terms.8b7f8d0c">{"Our Conditions of Carriage — Effective for Every Booking and Consignment"}</Txt></p>
          <p
            className={cn(
              "text-sm text-slate-400",
              fadeInUp,
              "animation-delay-300",
            )}
          ><Txt k="terms.f946fe2d">{"Last Updated: 22/08/2026"}</Txt></p>
        </div>
      </div>

      {/* Content Section - Single Container */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div
          className={cn(
            "max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden",
            fadeInUp,
            "animation-delay-500",
          )}
        >
          {/* Intro Box - Red Background (Requested) */}
          <div className="bg-[#E53935] p-8 sm:p-10 text-white">
            <div className="flex gap-4 items-start">
              <AlertTriangle className="w-6 h-6 text-[#F5EB18] flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-xl mb-2 text-[#F5EB18]"><Txt k="terms.18b7fc11">{"Important Agreement"}</Txt></h2>
                <p className="text-white/90 leading-relaxed"><Txt k="terms.183dca68">{"FourSix46® Global Ltd, trading as Route46 Couriers, provides all carriage and related transport services under these Conditions of Carriage, which set out the rights, responsibilities and liability limits that apply to every consignment we carry."}</Txt></p>
              </div>
            </div>
          </div>

          {/* Legal Clauses List */}
          <div className="p-8 sm:p-12 space-y-10">
            {legalSections.map((section, index) => (
              <section key={index} className="group">
                <div className="flex gap-4 items-start">
                  {/* Section Number/Icon - Dynamic Colors */}
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
                    {/* Headings - Consistent Navy Blue */}
                    <h3 className="text-xl font-bold text-[#134467] mb-4 flex items-center gap-3 group-hover:text-[#E53935] transition-colors">
                      {section.title}
                    </h3>
                    {/* Body Text - Slate Gray */}
                    <div className="text-slate-600 leading-relaxed text-base">
                      {section.content}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index !== legalSections.length - 1 && (
                  <div className="h-px w-full bg-slate-100 mt-10 ml-16" />
                )}
              </section>
            ))}
          </div>

          {/* Footer of the Document */}
          <div className="bg-slate-50 p-8 text-center border-t border-slate-100">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F5EB18]/20 mb-4">
              <ShieldCheck className="w-6 h-6 text-[#E53935]" />
            </div>
            <p className="text-sm text-slate-600 font-medium"><Txt k="terms.a07eedac">{"FourSix46® Global Ltd — Trading as Route46 Couriers"}</Txt></p>
            <p className="text-xs text-slate-400 mt-1"><Txt k="terms.d7ee1f97">{"FourSix46® Global Ltd Trading as Route46 Couriers, 66 Paul Street, London EC2A 4NA, United Kingdom"}</Txt></p>
          </div>
        </div>

        {/* Contact CTA */}
        <div
          className={cn("mt-12 text-center", fadeInUp, "animation-delay-700")}
        >
          <p className="text-slate-500"><Txt k="terms.e9e485dd">{"Questions about our terms?"}</Txt>{" "}
            <a
              href="/contact"
              className="text-[#48AEDD] hover:underline font-bold"
            ><Txt k="terms.f601da90">{"Contact Legal Support"}</Txt></a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
