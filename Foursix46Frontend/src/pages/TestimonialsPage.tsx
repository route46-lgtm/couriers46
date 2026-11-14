import { Truck, ArrowRight, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { useTestimonials, useText } from "@/content/SiteContentProvider";
import { TestimonialCard } from "@/components/home/TestimonialsSection";

/* Testimonials page.
   Shows ONLY testimonials from Admin → Site Content → Testimonials that have
   "consent given" ticked. With none, the page explains that verified feedback
   is coming and is kept out of search (noindex) so no empty page is indexed. */
export const TestimonialsPage = () => {
  const navigate = useNavigate();
  const t = useText();
  const testimonials = useTestimonials();
  const hasTestimonials = testimonials.length > 0;

  return (
    <div className="bg-slate-50 font-sans min-h-screen">
      <Seo
        title="Customer Testimonials"
        description="Feedback from Route46 Couriers customers on our same day delivery and time-critical logistics service, published with their permission."
        path="/testimonials"
        noindex={!hasTestimonials}
        schemas={[
          webPageSchema({
            path: "/testimonials",
            name: "Customer Testimonials",
            description:
              "Feedback from Route46 Couriers customers, published with their permission.",
            type: "CollectionPage",
          }),
          breadcrumbSchema([{ name: "Testimonials", path: "/testimonials" }]),
        ]}
      />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EB18]/75 border border-[#F5EB18] mb-6">
              <div className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#134467]">
                {t("testimonialsPage.eyebrow")}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#48AEDD] mb-6 tracking-tight">
              {t("testimonialsPage.title")}
            </h1>
            <p className="text-[#134467]/80 max-w-xl mx-auto text-lg">
              {t("testimonialsPage.subtitle")}
            </p>
          </div>

          {hasTestimonials ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item, idx) => (
                <TestimonialCard key={`${item.name}-${idx}`} item={item} />
              ))}
            </div>
          ) : (
            <div className="max-w-xl mx-auto text-center bg-white border border-slate-100 rounded-3xl p-10 shadow-sm">
              <MessageSquareQuote className="w-12 h-12 mx-auto text-[#48AEDD]/50 mb-4" />
              <p className="text-[#134467]/80 text-lg">
                {t("testimonialsPage.empty")}
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="relative py-20 overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white border-2 border-[#134467]/10 rounded-[2.5rem] p-8 sm:p-16 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="w-20 h-20 bg-[#F5EB18]/75 rounded-full mx-auto flex items-center justify-center mb-8">
              <Truck className="w-10 h-10 text-[#134467]" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#48AEDD] mb-6 leading-tight">
              Ready to Ship with{" "}
              <span className="text-[#E53935]">Confidence?</span>
            </h2>
            <p className="text-[#134467]/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Get an instant quote for same day courier and time-critical
              delivery across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => navigate("/quick-quote")}
                className="h-16 px-10 bg-[#134467] hover:bg-[#0f3652] text-white text-lg font-bold rounded-full shadow-lg"
              >
                Quick Quote
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/for-businesses")}
                className="h-16 px-10 border-2 border-[#134467] bg-transparent text-[#134467] hover:bg-[#134467] hover:text-white text-lg font-bold rounded-full"
              >
                Join Our Courier Network <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
