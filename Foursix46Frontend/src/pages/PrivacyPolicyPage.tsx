import React from "react";
import {
  Shield,
  Lock,
  Eye,
  Cookie,
  FileText,
  CheckCircle,
  Users,
  Server,
  Scale,
  AlertCircle,
  Globe,
  Database,
  UserCheck,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

import Seo from "@/components/Seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Txt, useText } from "@/content/SiteContentProvider";
// Animation utility
const fadeInUp =
  "animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-forwards";

export default function PrivacyPolicyPage() {
  const txt = useText();
  // Privacy content data structure
  const privacySections = [
    {
      title: txt("privacy.52fc2e8d", "1. Who We Are"),
      icon: FileText,
      color: "#48AEDD", // Sky Blue
      bg: "bg-[#48AEDD]/10",
      content: (
        <div className="space-y-2">
          <p>
            <strong className="text-[#134467]"><Txt k="privacy.867c8ae4">{"FourSix46® Global Ltd"}</Txt></strong>
          </p>
          <p><Txt k="privacy.833540a1">{"trading as"}</Txt>{" "}
            <strong className="text-[#48AEDD]"><Txt k="privacy.5d55c92c">{"Route46 Couriers"}</Txt></strong>
          </p>
          <p><Txt k="privacy.9171ab5d">{"66 Paul Street, London EC2A 4NA, United Kingdom"}</Txt></p>
          <p className="mt-2 text-slate-600"><Txt k="privacy.a0610c8f">{"FourSix46® Global Ltd is the "}</Txt><strong><Txt k="privacy.df63c37d">{"Data Controller"}</Txt></strong>{" "}<Txt k="privacy.375a4d9e">{"responsible for the personal information collected through our services. For privacy enquiries please contact us."}</Txt></p>
        </div>
      ),
    },
    {
      title: txt("privacy.0687ce84", "2. What Data We Collect"),
      icon: Database,
      color: "#134467", // Navy
      bg: "bg-[#134467]/10",
      content: (
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-[#134467] mb-2 text-sm"><Txt k="privacy.88922e0c">{"Customers (B2B & B2C)"}</Txt></h4>
            <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
              <li><Txt k="privacy.45a0c579">{"Name, phone, email"}</Txt></li>
              <li><Txt k="privacy.faee695a">{"Addresses (billing, pickup, delivery)"}</Txt></li>
              <li><Txt k="privacy.f295faa3">{"Parcel details"}</Txt></li>
              <li><Txt k="privacy.6d658421">{"Payment and invoice information"}</Txt></li>
            </ul>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-[#134467] mb-2 text-sm"><Txt k="privacy.dcf8c101">{"Drivers (Contractors)"}</Txt></h4>
            <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
              <li><Txt k="privacy.4ccef603">{"Name, contact details"}</Txt></li>
              <li><Txt k="privacy.b30912c7">{"Driving licence & vehicle info"}</Txt></li>
              <li><Txt k="privacy.d64d8716">{"Insurance details"}</Txt></li>
              <li><Txt k="privacy.852bd3a5">{"Bank details for payments"}</Txt></li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: txt("privacy.95a3b224", "3. How We Use Your Data"),
      icon: Eye,
      color: "#E53935", // Red
      bg: "bg-[#E53935]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="privacy.05e276f5">{"We process data to:"}</Txt></p>
          <ul className="list-disc pl-5 grid sm:grid-cols-2 gap-1">
            <li><Txt k="privacy.11ab650a">{"Provide and manage courier services"}</Txt></li>
            <li><Txt k="privacy.2f44a35b">{"Arrange collections and deliveries"}</Txt></li>
            <li><Txt k="privacy.033760b2">{"Communicate with customers"}</Txt></li>
            <li><Txt k="privacy.fc9180ca">{"Manage business accounts and invoices"}</Txt></li>
            <li><Txt k="privacy.ec5e2d38">{"Verify and pay self-employed drivers"}</Txt></li>
            <li><Txt k="privacy.8081a6ac">{"Improve our website and operations"}</Txt></li>
            <li><Txt k="privacy.c0408e1f">{"Meet legal and regulatory obligations"}</Txt></li>
          </ul>
          <p className="text-sm italic text-slate-400 mt-2"><Txt k="privacy.63ddc1d8">{"We may send marketing updates only if you have opted in."}</Txt></p>
        </div>
      ),
    },
    {
      title: txt("privacy.73009666", "4. Legal Basis for Processing"),
      icon: Scale,
      color: "#F5EB18", // Yellow
      bg: "bg-[#F5EB18]/20",
      content: (
        <div className="space-y-2">
          <p><Txt k="privacy.805fa32b">{"We rely on the following legal grounds:"}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong><Txt k="privacy.ab57b20f">{"Contract:"}</Txt></strong><Txt k="privacy.7c0174f3">{" Providing courier services."}</Txt></li>
            <li>
              <strong><Txt k="privacy.ab4fdea8">{"Legitimate Interest:"}</Txt></strong><Txt k="privacy.eef472a3">{" Business operations, fraud prevention."}</Txt></li>
            <li>
              <strong><Txt k="privacy.8ebb8539">{"Legal Obligation:"}</Txt></strong><Txt k="privacy.38e86c5c">{" Tax, accounting, verification."}</Txt></li>
            <li>
              <strong><Txt k="privacy.100e68fd">{"Consent:"}</Txt></strong><Txt k="privacy.b7db4ab0">{" Marketing communications."}</Txt></li>
          </ul>
        </div>
      ),
    },
    {
      title: txt("privacy.a2fd5954", "5. Sharing Your Information"),
      icon: Users,
      color: "#48AEDD", // Sky Blue
      bg: "bg-[#48AEDD]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="privacy.bac9430e">{"We may share data with:"}</Txt></p>
          <ul className="list-disc pl-5 grid sm:grid-cols-2 gap-1">
            <li><Txt k="privacy.092c122a">{"Subcontracted drivers"}</Txt></li>
            <li><Txt k="privacy.570b514b">{"Third-party couriers"}</Txt></li>
            <li><Txt k="privacy.76c11588">{"Payment processors"}</Txt></li>
            <li><Txt k="privacy.b8fec4e8">{"IT/hosting providers"}</Txt></li>
            <li><Txt k="privacy.09a2d5f3">{"Regulators if legally required"}</Txt></li>
          </ul>
          <div className="mt-3 inline-block bg-[#E53935]/10 px-3 py-1 rounded text-[#E53935] text-sm font-bold"><Txt k="privacy.e85576a8">{"We never sell personal data."}</Txt></div>
        </div>
      ),
    },
    {
      title: txt("privacy.16deea3e", "6. Data Storage & Retention"),
      icon: Server,
      color: "#134467", // Navy
      bg: "bg-[#134467]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="privacy.03415f71">{"We keep your data only as long as needed:"}</Txt></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong><Txt k="privacy.c0a5a51a">{"Delivery & customer records:"}</Txt></strong><Txt k="privacy.5524a6e8">{" Up to 6 years"}</Txt></li>
            <li>
              <strong><Txt k="privacy.642f7bb0">{"Driver records:"}</Txt></strong><Txt k="privacy.5524a6e8_2">{" Up to 6 years"}</Txt></li>
            <li>
              <strong><Txt k="privacy.73d51d2e">{"Website analytics:"}</Txt></strong><Txt k="privacy.76f05b56">{" 12–24 months"}</Txt></li>
          </ul>
          <p className="text-sm text-slate-500 mt-1"><Txt k="privacy.46fce7de">{"Data is stored securely on encrypted systems."}</Txt></p>
        </div>
      ),
    },
    {
      title: txt("privacy.4bc8473c", "7. Cookies"),
      icon: Cookie,
      color: "#F5EB18", // Yellow
      bg: "bg-[#F5EB18]/20",
      content: (
        <div className="space-y-2">
          <p><Txt k="privacy.2c025871">{"Our website uses cookies for functionality, analytics, and improving user experience."}</Txt></p>
          <p className="text-sm"><Txt k="privacy.25e8e73d">{"You may disable cookies in your browser settings at any time."}</Txt></p>
        </div>
      ),
    },
    {
      title: txt("privacy.3aaeb7a5", "8. Your Rights"),
      icon: UserCheck,
      color: "#E53935", // Red
      bg: "bg-[#E53935]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="privacy.e719e151">{"Under the UK GDPR, you have the right to:"}</Txt></p>
          <ul className="list-disc pl-5 grid sm:grid-cols-2 gap-1">
            <li><Txt k="privacy.07bd4296">{"Access your data"}</Txt></li>
            <li><Txt k="privacy.f83a6ea6">{"Correct inaccuracies"}</Txt></li>
            <li><Txt k="privacy.e8442d81">{"Request deletion"}</Txt></li>
            <li><Txt k="privacy.56d26ad2">{"Object to processing"}</Txt></li>
            <li><Txt k="privacy.18870ee5">{"Restrict processing"}</Txt></li>
            <li><Txt k="privacy.590dc14e">{"Request data portability"}</Txt></li>
            <li><Txt k="privacy.4043a015">{"Withdraw consent (marketing)"}</Txt></li>
          </ul>
        </div>
      ),
    },
    {
      title: txt("privacy.f3a20bc4", "9. Security"),
      icon: Lock,
      color: "#48AEDD", // Sky Blue
      bg: "bg-[#48AEDD]/10",
      content: (
        <p><Txt k="privacy.65170a05">{"We use encryption, secure servers, access controls, and regular monitoring to protect your information. However, no online system is 100% secure."}</Txt></p>
      ),
    },
    {
      title: txt("privacy.5bfb8977", "10. Changes to This Policy"),
      icon: Globe,
      color: "#134467", // Navy
      bg: "bg-[#134467]/10",
      content:
        txt("privacy.06f2f7e0", "We may update this Privacy Policy anytime. The latest version will always appear on our website."),
    },
    {
      title: txt("privacy.c162569c", "11. Complaints"),
      icon: AlertCircle,
      color: "#E53935", // Red
      bg: "bg-[#E53935]/10",
      content: (
        <div className="space-y-2">
          <p><Txt k="privacy.fa849a5f">{"If you have concerns, contact us first."}</Txt></p>
          <p><Txt k="privacy.44a4387c">{"You may also contact the Information Commissioner’s Office (ICO) at"}</Txt>{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#48AEDD] font-bold hover:underline"
            ><Txt k="privacy.e713e143">{"ico.org.uk"}</Txt></a>
            .
          </p>
        </div>
      ),
    },
    {
      title: txt("privacy.844566b5", "12. Children’s Privacy"),
      icon: Users,
      color: "#F5EB18", // Red
      bg: "bg-[#F5EB18]/20",
      content: (
        <div className="space-y-2">
          <p><Txt k="privacy.022ed151">{"We do not intend to collect or knowingly collect personal information from children. We do not target children with our services."}</Txt></p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden font-sans selection:bg-[#E53935] selection:text-white">
      <Seo
        title="Privacy Policy"
        description="How Route46 Couriers collects, uses and protects your personal data. ICO registered and UK GDPR compliant."
        path="/privacy"
        schemas={[
          webPageSchema({
            path: "/privacy",
            name: "Privacy Policy",
            description: "How Route46 Couriers collects, uses and protects your personal data. ICO registered and UK GDPR compliant.",
          }),
          breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy" }]),
        ]}
      />

      {/* Header Area */}
      <div className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-[#48AEDD]/10">
        {/* Subtle Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#48AEDD]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#F5EB18]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl relative z-10">
          <div
            className={cn(
              "inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-50 border border-[#48AEDD]/20 shadow-sm mb-8",
              fadeInUp,
            )}
          >
            <Shield className="w-4 h-4 text-[#48AEDD]" />
            <span className="text-[#48AEDD] font-bold text-xs tracking-widest uppercase"><Txt k="privacy.ef8bd9d8">{"Trust & Security"}</Txt></span>
          </div>

          <h1
            className={cn(
              "text-4xl sm:text-5xl lg:text-6xl font-black text-[#48AEDD] mb-6 tracking-tight",
              fadeInUp,
              "animation-delay-100",
            )}
          ><Txt k="privacy.5bf8b436">{"Privacy "}</Txt><span className="text-[#E53935]"><Txt k="privacy.23d3bd66">{"Policy"}</Txt></span>
          </h1>

          <p
            className={cn(
              "text-lg sm:text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium",
              fadeInUp,
              "animation-delay-200",
            )}
          ><Txt k="privacy.275ab243">{"(UK GDPR Compliant)"}</Txt></p>

          <p
            className={cn(
              "text-sm text-slate-400",
              fadeInUp,
              "animation-delay-300",
            )}
          ><Txt k="privacy.ebfd5757">{"Last Updated: "}</Txt>{new Date().toLocaleDateString()}
          </p>
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
          {/* Intro Box - Sky Blue Background (Consistent with Terms) */}
          <div className="bg-[#48AEDD] p-8 sm:p-10 text-white">
            <div className="flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-[#F5EB18] flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-xl mb-2 text-[#F5EB18]"><Txt k="privacy.dddfc338">{"Data Protection Commitment"}</Txt></h2>
                <p className="text-white/90 leading-relaxed"><Txt k="privacy.ac25775e">{"FourSix46® Global Ltd, trading as Route46 Couriers, is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, store and safeguard personal information in accordance with the UK GDPR and the Data Protection Act 2018."}</Txt></p>
              </div>
            </div>
          </div>

          {/* Privacy Sections List */}
          <div className="p-8 sm:p-12 space-y-10">
            {privacySections.map((section, index) => (
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
                    {/* Headings - Consistent Navy Blue with Hover to Red */}
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
                {index !== privacySections.length - 1 && (
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
            <p className="text-sm text-slate-600 font-medium"><Txt k="privacy.98639bb2">{"Your data privacy is our top priority."}</Txt></p>
            <p className="text-xs text-slate-400 mt-1"><Txt k="privacy.cfc0ebda">{"To exercise your rights, please contact our privacy team."}</Txt></p>
          </div>
        </div>

        {/* Contact CTA */}
        <div
          className={cn("mt-12 text-center", fadeInUp, "animation-delay-700")}
        >
          <p className="text-slate-500"><Txt k="privacy.5815fcb4">{"Questions about privacy?"}</Txt>{" "}
            <a
              href="/contact"
              className="text-[#48AEDD] hover:underline font-bold"
            ><Txt k="privacy.446eb351">{"Contact Support"}</Txt></a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
