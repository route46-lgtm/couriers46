import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2, Briefcase, MapPin, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const apiUrl = import.meta.env.VITE_API_URL;
const CAREERS_EMAIL = "operations@route46couriers.co.uk";

interface Career {
  id: string;
  title: string;
  location: string;
  employmentType: string;
  description: string;
  requirements?: string;
  status: string;
  sortOrder?: number;
}

export default function CareersPage() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${apiUrl}/api/careers`)
      .then((r) => r.json())
      .then((data) =>
        setCareers(
          (Array.isArray(data) ? data : []).sort(
            (a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999),
          ),
        ),
      )
      .catch(() => setCareers([]))
      .finally(() => setLoading(false));
  }, []);

  const employmentTypes = [
    "All",
    ...Array.from(new Set(careers.map((c) => c.employmentType).filter(Boolean))),
  ];

  const filtered = careers.filter(
    (c) => activeType === "All" || c.employmentType === activeType,
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <div className="relative bg-[#134467] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#48AEDD] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5EB18] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#48AEDD]/20 text-[#48AEDD] text-sm font-semibold mb-6">
              <Briefcase className="w-4 h-4" />
              Join Our Team
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Careers at <span className="text-[#F5EB18]">Route46</span>
            </h1>
            <p className="text-[#48AEDD]/80 text-xl max-w-2xl mx-auto">
              Explore current openings and help us build the logistics
              network of the future.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        {employmentTypes.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {employmentTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                  activeType === type
                    ? "bg-[#134467] text-white border-[#134467]"
                    : "bg-white text-[#134467] border-slate-200 hover:border-[#134467]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-24">
            <Loader2 className="w-10 h-10 animate-spin text-[#134467]" />
          </div>
        )}

        {/* Empty */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-24">
            <Briefcase className="w-12 h-12 mx-auto text-slate-300 mb-4" />
            <p className="text-slate-500 text-lg font-medium">
              No open positions right now.
            </p>
            <p className="text-slate-400 text-sm mt-1">
              Check back soon, or send us your CV at{" "}
              <a
                href={`mailto:${CAREERS_EMAIL}`}
                className="text-[#E53935] font-semibold"
              >
                {CAREERS_EMAIL}
              </a>
              .
            </p>
          </div>
        )}

        {/* Job Listings */}
        {!loading && filtered.length > 0 && (
          <div className="space-y-4">
            {filtered.map((job, i) => {
              const isExpanded = expandedId === job.id;
              const requirementLines = (job.requirements ?? "")
                .split("\n")
                .map((r) => r.trim())
                .filter(Boolean);

              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden bg-white p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h2 className="text-xl font-bold text-[#134467]">
                          {job.title}
                        </h2>
                        <Badge className="bg-[#F5EB18] text-[#134467] font-bold text-xs">
                          {job.employmentType}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-3">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <p
                        className={`text-sm text-slate-600 leading-relaxed ${
                          isExpanded ? "" : "line-clamp-2"
                        }`}
                      >
                        {job.description}
                      </p>

                      {isExpanded && requirementLines.length > 0 && (
                        <div className="mt-4">
                          <p className="text-xs font-bold uppercase tracking-wide text-[#134467] mb-2">
                            Requirements
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                            {requirementLines.map((r, idx) => (
                              <li key={idx}>{r}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : job.id)
                        }
                        className="mt-3 text-sm font-semibold text-[#E53935] hover:underline"
                      >
                        {isExpanded ? "Show less" : "Show more"}
                      </button>
                    </div>

                    <a
                      href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
                        `Application for ${job.title}`,
                      )}`}
                      className="shrink-0"
                    >
                      <Button className="bg-[#134467] hover:bg-[#0e3352] text-white whitespace-nowrap">
                        Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
