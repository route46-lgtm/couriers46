import { cn } from "@/lib/utils";
import { useText, useTrustedLogos } from "@/content/SiteContentProvider";

/* "Trusted by" strip.
   Driven by Admin → Site Content → Trusted by. Only logos ticked
   "customer confirmed" are shown; with none confirmed the whole strip is
   hidden, so the site never claims a customer it cannot prove. */
export const TrustLogosSection = () => {
  const t = useText();
  const logos = useTrustedLogos();
  if (logos.length === 0) return null;

  // Repeat enough times for a seamless marquee even with one or two logos.
  const repeat = Math.max(2, Math.ceil(12 / logos.length));
  const track = Array.from({ length: repeat }, () => logos).flat();

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden relative z-20">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs sm:text-sm uppercase tracking-[0.3em] text-[#134467]/80 font-extrabold mb-10 sm:mb-12">
          {t("home.trusted.heading")}
        </p>

        <div className="relative group">
          <div className="flex items-center gap-12 sm:gap-16 animate-marquee">
            {[...track, ...track].map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-2xl border border-transparent transition-all duration-500",
                  "grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105",
                )}
              >
                {brand.logo && (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    loading="lazy"
                    className="h-8 sm:h-10 w-auto max-w-[140px] object-contain"
                  />
                )}
                <span className="text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap text-[#134467]">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
