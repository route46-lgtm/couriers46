import { Button } from "@/components/ui/button";
import { Building2, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStats, useText } from "@/content/SiteContentProvider";

interface CallToActionSectionProps {
  onGetQuote: () => void;
  onBusinessEnquiry: () => void;
}

export const CallToActionSection = ({
  onGetQuote,
  onBusinessEnquiry,
}: CallToActionSectionProps) => {
  const t = useText();
  // Stats row — Admin → Site Content → Stats. Only figures we can prove.
  const stats = useStats().slice(0, 4);
  const cols =
    stats.length >= 4
      ? "grid-cols-2 sm:grid-cols-4 max-w-3xl"
      : stats.length === 3
        ? "grid-cols-3 max-w-lg"
        : stats.length === 2
          ? "grid-cols-2 max-w-sm"
          : "grid-cols-1 max-w-[220px]";

  return (
    <section
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 relative overflow-hidden"
      style={{ backgroundColor: "#0D4064" }}
    >
      <div className="absolute inset-0 opacity-30"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
          {t("home.cta.title")}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-in">
          {t("home.cta.body")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-scale-in">
          <Button
            size="lg"
            variant="default"
            className="bg-white text-[#0D4064] hover:bg-white/90 hover-scale shadow-elegant w-full sm:w-auto font-bold"
            onClick={onGetQuote}
          >
            <Package className="w-5 h-5 mr-2" />
            {t("home.cta.primary")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#0D4064] transition-smooth w-full sm:w-auto font-bold"
            onClick={onBusinessEnquiry}
          >
            <Building2 className="w-5 h-5 mr-2" />
            {t("home.cta.secondary")}
          </Button>
        </div>

        {stats.length > 0 && (
          <div className={cn("mt-12 grid gap-2 sm:gap-4 mx-auto items-center", cols)}>
            {stats.map((s, idx) => (
              <div
                key={`${s.value}-${idx}`}
                className={cn(
                  "text-center px-2",
                  idx > 0 && "sm:border-l border-white/10",
                )}
              >
                <p className="text-xl sm:text-3xl font-bold text-white mb-1">
                  {s.value}
                </p>
                <p className="text-[10px] sm:text-sm text-white/80 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
