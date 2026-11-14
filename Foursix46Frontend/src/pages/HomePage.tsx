import { CallToActionSection } from "@/components/home/CallToActionSection";
import { CommitmentSection } from "@/components/home/CommitmentSection";
import { FaqSection } from "@/components/home/FaqSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MetricsSectionRetain } from "@/components/home/MetricsSectionRetain";
import { SplitFeatureSection } from "@/components/home/SplitFeatureSection";
import { TrustLogosSection } from "@/components/home/TrustLogosSection";
import { WhyChooseFlipSection } from "@/components/home/WhyChooseFlipSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Building2, Send, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

import Seo from "@/components/Seo";
import { webPageSchema } from "@/lib/seo";
import { useText } from "@/content/SiteContentProvider";
export default function HomePage() {
  const navigate = useNavigate();
  const t = useText();

  const whyChooseItems = [
    {
      icon: Send,
      title: t("home.why.1.title"),
      description: t("home.why.1.description"),
      detail: t("home.why.1.detail"),
    },
    {
      icon: Truck,
      title: t("home.why.2.title"),
      description: t("home.why.2.description"),
      detail: t("home.why.2.detail"),
    },
    {
      icon: Building2,
      title: t("home.why.3.title"),
      description: t("home.why.3.description"),
      detail: t("home.why.3.detail"),
    },
  ];

  const driverBenefits = [
    t("home.driver.benefit1"),
    t("home.driver.benefit2"),
    t("home.driver.benefit3"),
  ].filter(Boolean);

  const businessBenefits = [
    t("home.business.benefit1"),
    t("home.business.benefit2"),
    t("home.business.benefit3"),
  ].filter(Boolean);

  const individualBenefits = [
    t("home.quote.benefit1"),
    t("home.quote.benefit2"),
    t("home.quote.benefit3"),
  ].filter(Boolean);

  const commitmentBenefits = [1, 2, 3, 4, 5, 6]
    .map((n) => t(`home.commitment.${n}`))
    .filter(Boolean);

  return (
    <div className="min-h-screen">
      <Seo
        title="Same Day Courier Services UK"
        description="Fast, reliable same day courier services across the UK. Secure transport, professional drivers and real-time delivery updates with Route46 Couriers."
        path="/"
        schemas={[
          webPageSchema({
            path: "/",
            name: "Same Day Courier Services UK | Route46 Couriers",
            description:
              "Fast, reliable same day courier services across the UK. Secure transport, professional drivers and real-time delivery updates.",
          }),
        ]}
      />

      <HeroSection
        backgroundImageUrl="/route462.webp"
        mobileBackgroundImageUrl="/route463mob.webp"
        // backgroundImageUrl="/FourSixLogo.png"
        onSendParcel={() => navigate("/quick-quote")}
        onJoinNetwork={() => navigate("/for-businesses")}
      />
      <MetricsSectionRetain />
      <TrustLogosSection />
      <WhyChooseFlipSection items={whyChooseItems} />
      <SplitFeatureSection
        eyebrow={t("home.driver.eyebrow")}
        title={t("home.driver.title")}
        description={t("home.driver.description")}
        image="/route461.webp"
        benefits={driverBenefits}
        cta={{
          label: t("home.driver.cta"),
          onClick: () => navigate("/become-driver"),
        }}
      />
      <SplitFeatureSection
        eyebrow={t("home.business.eyebrow")}
        title={t("home.business.title")}
        description={t("home.business.description")}
        image="/route463.webp"
        benefits={businessBenefits}
        reverse
        cta={{
          label: t("home.business.cta"),
          onClick: () => navigate("/for-businesses"),
        }}
      />
      <SplitFeatureSection
        eyebrow={t("home.quote.eyebrow")}
        title={t("home.quote.title")}
        description={t("home.quote.description")}
        image="/route464.webp"
        squareImage
        benefits={individualBenefits}
        cta={{
          label: t("home.quote.cta"),
          onClick: () => navigate("/quick-quote"),
        }}
      />
      <CommitmentSection benefits={commitmentBenefits} />
      <TestimonialsSection />
      <FaqSection />
      <CallToActionSection
        onGetQuote={() => navigate("/quick-quote")}
        onBusinessEnquiry={() => navigate("/for-businesses")}
      />
      <Footer />
    </div>
  );
}
