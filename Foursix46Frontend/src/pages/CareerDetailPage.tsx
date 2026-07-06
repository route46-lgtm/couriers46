import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  Briefcase,
  MapPin,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
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

export default function CareerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Career | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!id) return;
    setLoading(true);
    setNotFound(false);
    fetch(`${apiUrl}/api/careers/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.json();
      })
      .then((data) => setJob(data))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [id]);

  const requirementLines = (job?.requirements ?? "")
    .split("\n")
    .map((r) => r.trim())
    .filter(Boolean);

  const applyHref = job
    ? `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
        `Application for ${job.title}`,
      )}&body=${encodeURIComponent(
        `Hi Route46 Couriers team,\n\nI would like to apply for the ${job.title} (${job.location}) position.\n\nPlease find my CV attached.\n\nThanks,\n`,
      )}`
    : "#";

  return (
    <div className="min-h-screen bg-white font-sans">
      {job && (
        <Helmet>
          <title>{job.title} | Careers at Route46 Couriers</title>
          <meta
            name="description"
            content={`${job.title} — ${job.employmentType} role in ${job.location}. Apply now to join the Route46 Couriers team.`}
          />
        </Helmet>
      )}

      {/* Hero */}
      <div className="relative bg-[#134467] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#48AEDD] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5EB18] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-[#48AEDD] text-sm font-semibold mb-6 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all openings
          </Link>

          {loading && (
            <div className="flex justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-white" />
            </div>
          )}

          {!loading && job && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#48AEDD]/20 text-[#48AEDD] text-sm font-semibold mb-5">
                <Briefcase className="w-4 h-4" />
                {job.employmentType}
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                {job.title}
              </h1>
              <div className="flex items-center gap-1.5 text-[#48AEDD]/90 text-lg font-medium">
                <MapPin className="w-5 h-5" />
                {job.location}
              </div>
            </motion.div>
          )}

          {!loading && notFound && (
            <div className="py-16 text-center">
              <Briefcase className="w-12 h-12 mx-auto text-white/40 mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">
                This position is no longer available
              </h1>
              <p className="text-[#48AEDD]/80">
                It may have been filled or removed. Check out our other
                openings instead.
              </p>
            </div>
          )}
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

      {/* Content */}
      {!loading && job && (
        <div className="max-w-4xl mx-auto px-6 py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="grid md:grid-cols-3 gap-10"
          >
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-lg font-bold text-[#134467] uppercase tracking-wide mb-3">
                  About the Role
                </h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {job.description}
                </p>
              </section>

              {requirementLines.length > 0 && (
                <section>
                  <h2 className="text-lg font-bold text-[#134467] uppercase tracking-wide mb-3">
                    What We're Looking For
                  </h2>
                  <ul className="space-y-2.5">
                    {requirementLines.map((r, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-slate-600"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#48AEDD] shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Sidebar / Apply Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-slate-100 shadow-sm p-6 bg-white">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-4">
                  Job Overview
                </p>
                <dl className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center justify-between">
                    <dt className="text-slate-500">Type</dt>
                    <dd className="font-semibold text-[#134467]">
                      {job.employmentType}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-slate-500">Location</dt>
                    <dd className="font-semibold text-[#134467]">
                      {job.location}
                    </dd>
                  </div>
                </dl>
                <a href={applyHref} className="block">
                  <Button className="w-full bg-[#134467] hover:bg-[#0e3352] text-white">
                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <p className="text-xs text-slate-400 mt-3 text-center">
                  Opens an email to {CAREERS_EMAIL}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {!loading && notFound && (
        <div className="max-w-4xl mx-auto px-6 py-14 text-center">
          <Link to="/careers">
            <Button className="bg-[#134467] hover:bg-[#0e3352] text-white">
              View All Openings <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      )}

      <Footer />
    </div>
  );
}
