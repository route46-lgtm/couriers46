import { Quote } from "lucide-react";
import { useTestimonials, useText } from "@/content/SiteContentProvider";
import type { Testimonial } from "@/content/siteContent";

/* Testimonials.
   Driven by Admin → Site Content → Testimonials. A testimonial is shown ONLY
   when its "consent given" box is ticked. With none, the section is hidden. */

const initialsOf = (name: string) =>
  name
    .split(/[\s–-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");

export const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <figure className="relative h-full flex flex-col justify-between rounded-[2rem] bg-white border border-slate-100 shadow-lg p-7">
    <Quote className="w-8 h-8 text-[#48AEDD]/30 mb-4" />
    <blockquote className="text-[#134467]/90 leading-relaxed font-medium mb-6 whitespace-pre-line">
      {item.quote}
    </blockquote>
    <figcaption className="flex items-center gap-3 pt-4 border-t border-slate-100">
      {item.photo ? (
        <img
          src={item.photo}
          alt={item.name}
          loading="lazy"
          className="w-11 h-11 rounded-full object-cover border border-slate-100"
        />
      ) : (
        <div className="w-11 h-11 rounded-full bg-[#48AEDD]/10 text-[#134467] flex items-center justify-center font-bold">
          {initialsOf(item.name)}
        </div>
      )}
      <div>
        <p className="font-bold text-[#134467]">{item.name}</p>
        {item.company && (
          <p className="text-xs font-semibold uppercase tracking-wider text-[#134467]/60">
            {item.company}
          </p>
        )}
      </div>
    </figcaption>
  </figure>
);

export const TestimonialsSection = () => {
  const t = useText();
  const testimonials = useTestimonials();
  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 px-4 sm:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#E53935] mb-3">
            {t("home.testimonials.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#134467]">
            {t("home.testimonials.title")}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((item, idx) => (
            <TestimonialCard key={`${item.name}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
