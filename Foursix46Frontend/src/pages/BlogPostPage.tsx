// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Loader2,
//   ArrowLeft,
//   BookOpen,
//   User,
//   Calendar,
//   Tag,
// } from "lucide-react";
// import Footer from "@/components/Footer";

// const apiUrl = import.meta.env.VITE_API_URL;

// interface ContentBlock {
//   type: "paragraph" | "heading" | "subheading" | "image" | "quote" | "list";
//   content?: string;
//   items?: string[];
//   url?: string;
//   alt?: string;
// }

// interface BlogPost {
//   id: string;
//   title: string;
//   slug: string;
//   intro?: string;
//   excerpt?: string;
//   category?: string;
//   authorName?: string;
//   publishedDate?: string;
//   featuredImage?: string;
//   isFeatured?: boolean;
//   status: string;
//   contentBlocks?: ContentBlock[];
//   seoTitle?: string;
//   seoDescription?: string;
//   tags?: string[];
// }

// function renderBlock(block: ContentBlock, i: number) {
//   switch (block.type) {
//     case "heading":
//       return (
//         <h2
//           key={i}
//           className="text-2xl md:text-3xl font-black text-[#134467] mt-10 mb-4 leading-tight"
//         >
//           {block.content}
//         </h2>
//       );
//     case "subheading":
//       return (
//         <h3 key={i} className="text-xl font-bold text-[#134467] mt-8 mb-3">
//           {block.content}
//         </h3>
//       );
//     case "paragraph":
//       return (
//         <p key={i} className="text-slate-600 leading-relaxed text-lg mb-5">
//           {block.content}
//         </p>
//       );
//     case "quote":
//       return (
//         <blockquote
//           key={i}
//           className="border-l-4 border-[#48AEDD] pl-6 py-2 my-6 bg-[#48AEDD]/5 rounded-r-xl"
//         >
//           <p className="text-slate-700 italic text-lg font-medium leading-relaxed">
//             "{block.content}"
//           </p>
//         </blockquote>
//       );
//     case "list":
//       return (
//         <ul key={i} className="space-y-2 my-5 pl-2">
//           {(block.items ?? []).map((item, j) => (
//             <li
//               key={j}
//               className="flex items-start gap-3 text-slate-600 text-base"
//             >
//               <span className="mt-2 w-2 h-2 rounded-full bg-[#E53935] flex-shrink-0" />
//               {item}
//             </li>
//           ))}
//         </ul>
//       );
//     case "image":
//       return block.url ? (
//         <figure key={i} className="my-8">
//           <img
//             src={block.url}
//             alt={block.alt ?? ""}
//             className="w-full rounded-2xl shadow-md object-cover"
//           />
//           {block.alt && (
//             <figcaption className="text-center text-sm text-slate-400 mt-2">
//               {block.alt}
//             </figcaption>
//           )}
//         </figure>
//       ) : null;
//     default:
//       return null;
//   }
// }

// export default function BlogPostPage() {
//   const { slug } = useParams<{ slug: string }>();
//   const navigate = useNavigate();
//   const [post, setPost] = useState<BlogPost | null>(null);
//   const [related, setRelated] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [notFound, setNotFound] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     if (!slug) return;
//     setLoading(true);
//     setNotFound(false);

//     fetch(`${apiUrl}/api/blog/${slug}`)
//       .then((r) => {
//         if (!r.ok) {
//           setNotFound(true);
//           return null;
//         }
//         return r.json();
//       })
//       .then((data) => {
//         if (!data) return;
//         setPost(data);
//         // Fetch related posts by category
//         fetch(`${apiUrl}/api/blog`)
//           .then((r) => r.json())
//           .then((all: BlogPost[]) => {
//             setRelated(
//               all
//                 .filter((p) => p.slug !== slug && p.category === data.category)
//                 .slice(0, 3),
//             );
//           })
//           .catch(() => {});
//       })
//       .catch(() => setNotFound(true))
//       .finally(() => setLoading(false));
//   }, [slug]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <div className="flex flex-col items-center gap-5">
//           <div className="relative w-16 h-16">
//             <div className="absolute inset-0 rounded-full border-4 border-[#134467]/10" />
//             <div className="absolute inset-0 rounded-full border-4 border-t-[#E53935] border-r-[#48AEDD] border-b-[#F5EB18] border-l-transparent animate-spin" />
//           </div>
//           <p className="text-[#134467]/50 text-sm font-semibold tracking-widest uppercase">
//             Loading blog post...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (notFound || !post) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-6 px-4">
//         <BookOpen className="w-16 h-16 text-slate-200" />
//         <h1 className="text-3xl font-black text-[#134467]">Post Not Found</h1>
//         <p className="text-slate-400 text-center max-w-sm">
//           This article doesn't exist or may have been removed.
//         </p>
//         <Button
//           onClick={() => navigate("/blog")}
//           className="bg-[#134467] hover:bg-[#0d2f4a] text-white"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white font-sans">
//       {/* ── Hero / Featured Image ───────────────────── */}
//       <div className="relative w-full h-[420px] md:h-[520px] bg-[#134467] overflow-hidden">
//         {post.featuredImage ? (
//           <>
//             <img
//               src={post.featuredImage}
//               alt={post.title}
//               className="w-full h-full object-cover opacity-40"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#134467] via-[#134467]/60 to-transparent" />
//           </>
//         ) : (
//           <div className="absolute inset-0 bg-gradient-to-br from-[#134467] to-[#0d2f4a]">
//             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#48AEDD]/10 rounded-full blur-3xl" />
//           </div>
//         )}

//         {/* Back Button */}
//         <div className="absolute top-6 left-6 z-10">
//           <Button
//             variant="ghost"
//             onClick={() => navigate("/blog")}
//             className="text-white hover:bg-white/10 gap-2"
//           >
//             <ArrowLeft className="w-4 h-4" /> Blog
//           </Button>
//         </div>

//         {/* Post Meta */}
//         <div className="absolute bottom-0 left-0 right-0 z-10 max-w-4xl mx-auto px-6 pb-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-4"
//           >
//             <div className="flex flex-wrap items-center gap-2">
//               {post.category && (
//                 <Badge className="bg-[#48AEDD] text-white text-xs font-bold">
//                   {post.category}
//                 </Badge>
//               )}
//               {post.isFeatured && (
//                 <Badge className="bg-[#F5EB18] text-[#134467] text-xs font-bold">
//                   ★ Featured
//                 </Badge>
//               )}
//             </div>
//             <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
//               {post.title}
//             </h1>
//             <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
//               {post.authorName && (
//                 <span className="flex items-center gap-1.5">
//                   <User className="w-3.5 h-3.5" />
//                   {post.authorName}
//                 </span>
//               )}
//               {post.publishedDate && (
//                 <span className="flex items-center gap-1.5">
//                   <Calendar className="w-3.5 h-3.5" />
//                   {new Date(post.publishedDate).toLocaleDateString("en-GB", {
//                     day: "numeric",
//                     month: "long",
//                     year: "numeric",
//                   })}
//                 </span>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* ── Article Body ────────────────────────────── */}
//       <div className="max-w-4xl mx-auto px-6 py-12">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//         >
//           {/* Intro */}
//           {post.intro && (
//             <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8 border-l-4 border-[#E53935] pl-5">
//               {post.intro}
//             </p>
//           )}

//           {/* Content Blocks */}
//           <div className="prose-like">
//             {(post.contentBlocks ?? []).map((block, i) =>
//               renderBlock(block, i),
//             )}
//           </div>

//           {/* Tags */}
//           {post.tags && post.tags.length > 0 && (
//             <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-slate-100">
//               <Tag className="w-4 h-4 text-slate-400" />
//               {post.tags.map((tag) => (
//                 <Badge
//                   key={tag}
//                   variant="outline"
//                   className="text-xs text-[#134467] border-[#134467]/20"
//                 >
//                   {tag}
//                 </Badge>
//               ))}
//             </div>
//           )}
//         </motion.div>

//         {/* ── Related Posts ────────────────────────── */}
//         {related.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//             className="mt-16"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-1 h-6 bg-[#E53935] rounded-full" />
//               <h2 className="text-xl font-black text-[#134467]">
//                 Related Articles
//               </h2>
//             </div>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//               {related.map((r) => (
//                 <div
//                   key={r.id}
//                   onClick={() => navigate(`/blog/${r.slug}`)}
//                   className="group cursor-pointer rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
//                 >
//                   <div className="h-36 bg-slate-100 overflow-hidden">
//                     {r.featuredImage ? (
//                       <img
//                         src={r.featuredImage}
//                         alt={r.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-gradient-to-br from-[#134467]/10 to-[#48AEDD]/20" />
//                     )}
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-sm font-bold text-[#134467] line-clamp-2 group-hover:text-[#E53935] transition-colors">
//                       {r.title}
//                     </h3>
//                     {r.publishedDate && (
//                       <p className="text-xs text-slate-400 mt-1">
//                         {new Date(r.publishedDate).toLocaleDateString("en-GB", {
//                           day: "numeric",
//                           month: "short",
//                           year: "numeric",
//                         })}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* Back CTA */}
//         <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center">
//           <Button
//             onClick={() => navigate("/blog")}
//             variant="outline"
//             className="border-[#134467] text-[#134467] hover:bg-[#134467] hover:text-white px-8 py-5 text-base rounded-xl transition-colors"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Posts
//           </Button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  ArrowLeft,
  BookOpen,
  User,
  Calendar,
  Tag,
  Clock,
  Zap,
  Map,
  Timer,
  MapPin,
  Network,
  CheckCircle2,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const apiUrl = import.meta.env.VITE_API_URL;
const fadeUp =
  "animate-in fade-in slide-in-from-bottom-5 duration-700 ease-out";

/* ─────────────────────────────────────────────────────────────────────────────
   CONSTANT — 6 Why-Choose cards
───────────────────────────────────────────────────────────────────────────── */
const WHY_CHOOSE_FEATURES = [
  {
    icon: Clock,
    label: "Available 24/7",
    title: "24/7 Courier Support",
    description:
      "Our courier operations run 24 hours a day, 7 days a week to handle urgent deliveries whenever they arise. Whether you need late-night document transport or early morning collections, our dedicated courier network is always ready to respond.",
  },
  {
    icon: Zap,
    label: "Same Day Transport",
    title: "Same Day Courier Delivery",
    description:
      "Route46 Couriers provides reliable same day courier services across the UK. Our dedicated drivers collect your shipment and transport it directly to the destination without unnecessary stops or hub delays.",
  },
  {
    icon: Map,
    label: "Nationwide Coverage",
    title: "Across the UK Mainland",
    description:
      "Our courier network covers cities, towns, and business districts across the UK mainland. From London and Birmingham to Cardiff, Manchester, and beyond, we ensure dependable transport wherever your delivery needs to go.",
  },
  {
    icon: Timer,
    label: "Rapid Dispatch",
    title: "Collection Within 60 Minutes",
    description:
      "For urgent deliveries, our courier drivers can often collect shipments within 60 minutes depending on location and availability. This rapid response ensures time-sensitive documents, parcels, or goods move immediately.",
  },
  {
    icon: MapPin,
    label: "Real-Time Visibility",
    title: "Live GPS Delivery Tracking",
    description:
      "Every delivery is supported by real-time tracking and delivery confirmation. Our system provides visibility from collection to delivery, ensuring transparency and confidence for both businesses and individual customers.",
  },
  {
    icon: Network,
    label: "Specialist Deliveries",
    title: "Industries & Courier Services",
    description:
      "Route46 Couriers supports a wide range of industries including legal, medical, corporate, aviation, and e-commerce. From passport deliveries and legal documents to urgent parcels and specialist freight, our services are designed to meet diverse business needs.",
  },
];

interface ContentBlock {
  type: "paragraph" | "heading" | "subheading" | "image" | "quote" | "list";
  content?: string;
  items?: string[];
  url?: string;
  alt?: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  intro?: string;
  excerpt?: string;
  category?: string;
  authorName?: string;
  publishedDate?: string;
  featuredImage?: string;
  isFeatured?: boolean;
  status: string;
  contentBlocks?: ContentBlock[];
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
  faqIds?: string[];
  faqHeading?: string;
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={i}
          className="text-2xl md:text-3xl font-black text-[#134467] mt-10 mb-4 leading-tight"
        >
          {block.content}
        </h2>
      );
    case "subheading":
      return (
        <h3 key={i} className="text-xl font-bold text-[#134467] mt-8 mb-3">
          {block.content}
        </h3>
      );
    case "paragraph":
      return (
        <p key={i} className="text-slate-600 leading-relaxed text-lg mb-5">
          {block.content}
        </p>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="border-l-4 border-[#48AEDD] pl-6 py-2 my-6 bg-[#48AEDD]/5 rounded-r-xl"
        >
          <p className="text-slate-700 italic text-lg font-medium leading-relaxed">
            "{block.content}"
          </p>
        </blockquote>
      );
    case "list":
      return (
        <ul key={i} className="space-y-2 my-5 pl-2">
          {(block.items ?? []).map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-slate-600 text-base"
            >
              <span className="mt-2 w-2 h-2 rounded-full bg-[#E53935] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "image":
      return block.url ? (
        <figure key={i} className="my-8">
          <img
            src={block.url}
            alt={block.alt ?? ""}
            className="w-full rounded-2xl shadow-md object-cover"
          />
          {block.alt && (
            <figcaption className="text-center text-sm text-slate-400 mt-2">
              {block.alt}
            </figcaption>
          )}
        </figure>
      ) : null;
    default:
      return null;
  }
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  /* ── Fetch post ── */
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!slug) return;
    setLoading(true);
    setNotFound(false);

    fetch(`${apiUrl}/api/blog/${slug}`)
      .then((r) => {
        if (!r.ok) {
          setNotFound(true);
          return null;
        }
        return r.json();
      })
      .then((data) => {
        if (!data) return;
        setPost(data);
        // Fetch related posts by category
        fetch(`${apiUrl}/api/blog`)
          .then((r) => r.json())
          .then((all: BlogPost[]) => {
            setRelated(
              all
                .filter((p) => p.slug !== slug && p.category === data.category)
                .slice(0, 3),
            );
          })
          .catch(() => {});
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  /* ── Fetch FAQs ── */
  useEffect(() => {
    if (!post?.faqIds?.length) return;
    (async () => {
      try {
        const res = await fetch(`${apiUrl}/api/faqs`);
        if (!res.ok) return;
        const data = await res.json();
        const all: any[] = data.data || data;
        setFaqs(all.filter((f) => post.faqIds!.includes(f.id)));
      } catch {
        /* silent */
      }
    })();
  }, [post]);

  /* ── Loading ── */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-5">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-[#134467]/10" />
            <div className="absolute inset-0 rounded-full border-4 border-t-[#E53935] border-r-[#48AEDD] border-b-[#F5EB18] border-l-transparent animate-spin" />
          </div>
          <p className="text-[#134467]/50 text-sm font-semibold tracking-widest uppercase">
            Loading blog post...
          </p>
        </div>
      </div>
    );
  }

  /* ── 404 ── */
  if (notFound || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-6 px-4">
        <BookOpen className="w-16 h-16 text-slate-200" />
        <h1 className="text-3xl font-black text-[#134467]">Post Not Found</h1>
        <p className="text-slate-400 text-center max-w-sm">
          This article doesn't exist or may have been removed.
        </p>
        <Button
          onClick={() => navigate("/blog")}
          className="bg-[#134467] hover:bg-[#0d2f4a] text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ══════════════════════════════════════════════════
          HERO / FEATURED IMAGE
      ══════════════════════════════════════════════════ */}
      <div className="relative w-full h-[420px] md:h-[520px] bg-[#134467] overflow-hidden">
        {post.featuredImage ? (
          <>
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#134467] via-[#134467]/60 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#134467] to-[#0d2f4a]">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#48AEDD]/10 rounded-full blur-3xl" />
          </div>
        )}

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <Button
            variant="ghost"
            onClick={() => navigate("/blog")}
            className="text-white hover:bg-white/10 gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Blog
          </Button>
        </div>

        {/* Post Meta */}
        <div className="absolute bottom-0 left-0 right-0 z-10 max-w-4xl mx-auto px-6 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              {post.category && (
                <Badge className="bg-[#48AEDD] text-white text-xs font-bold">
                  {post.category}
                </Badge>
              )}
              {post.isFeatured && (
                <Badge className="bg-[#F5EB18] text-[#134467] text-xs font-bold">
                  ★ Featured
                </Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              {post.authorName && (
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  {post.authorName}
                </span>
              )}
              {post.publishedDate && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.publishedDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          ARTICLE BODY
      ══════════════════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Intro */}
          {post.intro && (
            <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8 border-l-4 border-[#E53935] pl-5">
              {post.intro}
            </p>
          )}

          {/* Content Blocks */}
          <div className="prose-like">
            {(post.contentBlocks ?? []).map((block, i) =>
              renderBlock(block, i),
            )}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-slate-100">
              <Tag className="w-4 h-4 text-slate-400" />
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs text-[#134467] border-[#134467]/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </motion.div>

        {/* ══════════════════════════════════════════════════
            RELATED POSTS
        ══════════════════════════════════════════════════ */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-[#E53935] rounded-full" />
              <h2 className="text-xl font-black text-[#134467]">
                Related Articles
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => (
                <div
                  key={r.id}
                  onClick={() => navigate(`/blog/${r.slug}`)}
                  className="group cursor-pointer rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="h-36 bg-slate-100 overflow-hidden">
                    {r.featuredImage ? (
                      <img
                        src={r.featuredImage}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#134467]/10 to-[#48AEDD]/20" />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-[#134467] line-clamp-2 group-hover:text-[#E53935] transition-colors">
                      {r.title}
                    </h3>
                    {r.publishedDate && (
                      <p className="text-xs text-slate-400 mt-1">
                        {new Date(r.publishedDate).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Back CTA */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center">
          <Button
            onClick={() => navigate("/blog")}
            variant="outline"
            className="border-[#134467] text-[#134467] hover:bg-[#134467] hover:text-white px-8 py-5 text-base rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Posts
          </Button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          WHY CHOOSE ROUTE46
      ══════════════════════════════════════════════════ */}
      <section className="bg-slate-50/80 py-20 sm:py-24 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] bg-[#F5EB18] text-[#134467] px-5 py-2 rounded-full mb-5 shadow-sm">
              Why Route46
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#134467] tracking-tight leading-tight mb-4">
              Why Choose Route46 Couriers
            </h2>
            <p className="text-[#134467]/55 text-base font-medium max-w-2xl mx-auto leading-[1.85]">
              Fast, secure and professional courier solutions across the UK
              mainland for urgent documents, parcels, pallets and specialist
              deliveries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_FEATURES.map((f, i) => (
              <div
                key={i}
                className={cn(
                  "bg-white p-8 rounded-3xl border border-slate-100",
                  "hover:shadow-2xl hover:-translate-y-2 hover:border-[#48AEDD]/25 transition-all duration-300 group",
                  fadeUp,
                )}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#134467]/5 to-[#48AEDD]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="w-6 h-6 text-[#48AEDD]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#E53935] mb-2.5 block">
                  {f.label}
                </span>
                <h3 className="font-black text-[17px] text-[#134467] mb-3 leading-snug tracking-tight group-hover:text-[#E53935] transition-colors duration-200">
                  {f.title}
                </h3>
                <p className="text-[#134467]/58 text-[13.5px] leading-[1.85] font-medium">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FAQs
      ══════════════════════════════════════════════════ */}
      {faqs.length > 0 && (
        <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#134467]/5 text-[#134467] text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full border border-[#134467]/10 mb-5">
                Got Questions?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#134467] tracking-tight leading-tight">
                {post.faqHeading || "Frequently Asked Questions"}
              </h2>
              <p className="mt-3 text-[#134467]/50 text-sm font-medium">
                Everything you need to know.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq: any, i: number) => (
                <AccordionItem
                  key={faq.id || i}
                  value={`faq-${i}`}
                  className={cn(
                    "border border-slate-100 rounded-2xl overflow-hidden bg-white transition-all shadow-sm",
                    "data-[state=open]:border-[#48AEDD] data-[state=open]:shadow-md data-[state=open]:ring-1 data-[state=open]:ring-[#48AEDD]/20",
                  )}
                >
                  <AccordionTrigger className="px-5 sm:px-6 py-5 text-left font-bold text-[#134467] hover:no-underline text-[15px] sm:text-base tracking-tight">
                    <span className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#48AEDD]/10 text-[#48AEDD] text-xs font-black flex items-center justify-center flex-shrink-0 tracking-wide">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 sm:px-6 pb-6 pt-4 border-t border-slate-50">
                    <div
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                      className="prose prose-sm max-w-none
                        prose-p:text-slate-600 prose-p:leading-[1.85] prose-p:font-medium
                        prose-strong:text-[#134467] prose-strong:font-black
                        prose-ul:text-slate-600 prose-li:marker:text-[#E53935]
                        prose-a:text-[#E53935] prose-a:no-underline hover:prose-a:underline"
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
