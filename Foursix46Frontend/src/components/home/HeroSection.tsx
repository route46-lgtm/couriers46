// import { Button } from "@/components/ui/button";
// import { Building2, Send } from "lucide-react";

// interface HeroSectionProps {
//   onSendParcel: () => void;
//   onJoinNetwork: () => void;
//   backgroundImageUrl?: string;
//   mobileBackgroundImageUrl?: string;
// }

// export const HeroSection = ({
//   onSendParcel,
//   onJoinNetwork,
//   backgroundImageUrl = "/route462.jpeg",
//   mobileBackgroundImageUrl = "/route462mob.png",
// }: HeroSectionProps) => {
//   return (
//     <section
//       className="relative min-h-screen flex items-center justify-center
//         px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#134467]
//         pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-0 lg:pb-0 -mt-20 lg:mt-0"
//     >
//       <style>{`
//         @keyframes blob {
//           0%   { transform: translate(0px,   0px)   scale(1);   }
//           33%  { transform: translate(30px,  -50px) scale(1.1); }
//           66%  { transform: translate(-20px,  20px) scale(0.9); }
//           100% { transform: translate(0px,   0px)   scale(1);   }
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to   { opacity: 1; transform: translateY(0);    }
//         }
//         @keyframes pulseGlow {
//           0%, 100% { box-shadow: 0 0 0 0px rgba(255,255,255,0.2); }
//           50%       { box-shadow: 0 0 0 5px rgba(255,255,255,0.1); }
//         }
//         .animate-blob          { animation: blob 7s infinite; }
//         .animation-delay-2000  { animation-delay: 2s; }
//         .animation-delay-4000  { animation-delay: 4s; }
//         .animate-fade-in-up    { animation: fadeInUp 0.8s ease-out forwards; }
//         .animate-pulse-glow    { animation: pulseGlow 2s infinite; }
//       `}</style>

//       {/* ── DESKTOP BRAND LOCKUP (lg+) ─────────────────────────────── */}
//       <div
//         className="hidden lg:flex absolute top-7 left-8 z-50 items-center
//           animate-fade-in-up"
//         style={{ animationDelay: "0ms" }}
//       >
//         {/*
//           Glass pill — gives the lockup its own readable surface so it
//           never fights the background image.
//         */}
//         <div
//           className="flex items-center gap-4 px-4 py-3 rounded-2xl
//             bg-[#0a2538]/60 backdrop-blur-md
//             border border-white/10
//             shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
//         >
//           <img
//             src="/route46logo.png"
//             alt="Route46 Logo"
//             className="w-14 h-14 object-contain drop-shadow-lg flex-shrink-0"
//           />

//           <div
//             className="h-10 w-[2px] rounded-full bg-[#f5eb18]
//             shadow-[0_0_10px_rgba(245,235,24,0.6)] flex-shrink-0"
//           />

//           <div className="hidden sm:flex flex-col justify-center">
//             <span
//               className="text-xl font-black text-white tracking-tight
//     leading-none drop-shadow-sm whitespace-nowrap"
//             >
//               Route46 Couriers
//             </span>
//             <span
//               className="text-[0.6rem] font-bold text-[#f5eb18]
//     tracking-[0.18em] uppercase leading-tight mt-1 whitespace-nowrap"
//             >
//               The Courier with a difference
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* ── BACKGROUND IMAGES ───────────────────────────────────────── */}
//       <img
//         src={backgroundImageUrl}
//         alt="Route46 Courier Service"
//         className="hidden sm:block absolute inset-0 w-full h-full object-cover z-0 opacity-75"
//         fetchPriority="high"
//         loading="eager"
//         width="1920"
//         height="1080"
//       />
//       <img
//         src={mobileBackgroundImageUrl || backgroundImageUrl}
//         alt="Route46 Courier Service"
//         className="block sm:hidden absolute inset-0 w-full h-full object-cover z-0 opacity-60"
//         fetchPriority="high"
//         loading="eager"
//         width="800"
//         height="1200"
//       />

//       {/* ── GRADIENT OVERLAYS ───────────────────────────────────────── */}
//       {/* Stronger left-side gradient so text stays readable */}
//       <div
//         className="absolute inset-0 bg-gradient-to-r
//         from-[#0a2538]/80 via-[#0a2538]/55 to-[#0a2538]/20 z-10"
//       />
//       {/* Extra bottom fade on mobile for button legibility */}
//       <div
//         className="absolute inset-0 bg-gradient-to-t
//         from-[#0a2538]/70 via-transparent to-transparent z-10 sm:hidden"
//       />

//       {/* ── ANIMATED BLOBS ──────────────────────────────────────────── */}
//       <div
//         className="absolute top-0 left-0 w-72 h-72 bg-[#48AEDD] rounded-full
//         mix-blend-screen filter blur-[100px] opacity-25 animate-blob z-10"
//       />
//       <div
//         className="absolute top-0 right-0 w-72 h-72 bg-[#f5eb18] rounded-full
//         mix-blend-screen filter blur-[100px] opacity-15 animate-blob animation-delay-2000 z-10"
//       />
//       <div
//         className="absolute -bottom-32 left-20 w-72 h-72 bg-[#E53935] rounded-full
//         mix-blend-screen filter blur-[100px] opacity-15 animate-blob animation-delay-4000 z-10"
//       />

//       {/* ── MAIN CONTENT ────────────────────────────────────────────── */}
//       <div
//         className="relative max-w-7xl w-full grid lg:grid-cols-2
//         gap-10 items-center z-20 lg:min-h-screen lg:py-0"
//       >
//         <div className="text-center lg:text-left lg:pt-24">
//           {/* ── MOBILE / TABLET BRAND LOCKUP (<lg) ── */}
//           <div
//             className="hidden items-center justify-center gap-3 mb-7
//               animate-fade-in-up"
//             style={{ animationDelay: "0ms" }}
//           >
//             {/*
//               On mobile the lockup sits inside the content flow.
//               Give it the same glass treatment so it's always legible.
//             */}
//             <div
//               className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl
//                 bg-[#0a2538]/65 backdrop-blur-md
//                 border border-white/10
//                 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
//             >
//               <img
//                 src="/route46logo.png"
//                 alt="Route46 Logo"
//                 className="w-11 h-11 object-contain drop-shadow-md flex-shrink-0"
//               />

//               <div
//                 className="h-9 w-[2px] rounded-full bg-[#f5eb18]
//                 shadow-[0_0_8px_rgba(245,235,24,0.5)] flex-shrink-0"
//               />

//               <div className="flex flex-col text-left">
//                 <span
//                   className="text-base sm:text-lg font-black text-white
//                   tracking-tight leading-none whitespace-nowrap"
//                 >
//                   Route46 Couriers
//                 </span>
//                 <span
//                   className="text-[0.55rem] sm:text-[0.6rem] font-bold
//                   text-[#f5eb18] tracking-[0.15em] uppercase leading-tight
//                   mt-0.5 whitespace-nowrap"
//                 >
//                   The Courier with a difference
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* ── BADGE ── */}
//           <div
//             className="inline-flex items-center justify-center lg:justify-start
//               mb-5 animate-fade-in-up"
//             style={{ animationDelay: "80ms" }}
//           >
//             <div
//               className="px-5 py-2 rounded-full bg-transparent border border-white/70
//                 text-white text-xs font-bold tracking-wide uppercase
//                 animate-pulse-glow flex items-center gap-2 backdrop-blur-sm"
//             >
//               <span className="w-1.5 h-1.5 rounded-full bg-[#48AEDD]" />
//               UK-WIDE COURIER NETWORK
//             </div>
//           </div>

//           {/* ── HEADING ── */}
//           <h1
//             className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
//               font-extrabold mb-5 leading-[1.08] drop-shadow-xl
//               animate-fade-in-up"
//             style={{ animationDelay: "160ms" }}
//           >
//             <span className="text-[#48AEDD] whitespace-nowrap">
//               Same Day Courier
//             </span>
//             <br />
//             <span
//               className="block mt-1 pb-2
//                 text-transparent bg-clip-text
//                 bg-gradient-to-r from-[#F81E30] to-[#ff6b6b]"
//             >
//               Service In UK
//             </span>
//           </h1>

//           {/* ── DESCRIPTION ── */}
//           <p
//             className="text-base sm:text-lg text-gray-200 mb-9
//               leading-relaxed max-w-xl mx-auto lg:mx-0
//               drop-shadow-md animate-fade-in-up"
//             style={{ animationDelay: "240ms" }}
//           >
//             <span className="text-white font-semibold">Route46</span> Couriers
//             provides urgent parcel delivery, document transport, and
//             time-critical logistics across the United Kingdom, offers rapid
//             collection, direct delivery, and real-time tracking for businesses
//             and individuals who require fast and secure transport solutions.
//           </p>

//           {/* ── BUTTONS ── */}
//           <div
//             className="flex flex-col sm:flex-row gap-3 sm:gap-4
//               justify-center lg:justify-start animate-fade-in-up"
//             style={{ animationDelay: "320ms" }}
//           >
//             <Button
//               size="lg"
//               onClick={onSendParcel}
//               className="w-full sm:w-auto h-13 px-7 text-base font-bold
//                 bg-[#E53935] hover:bg-[#C62828] text-white rounded-xl
//                 shadow-[0_10px_20px_rgba(229,57,53,0.35)]
//                 hover:shadow-[0_15px_30px_rgba(229,57,53,0.5)]
//                 hover:-translate-y-1 transition-all duration-300
//                 flex items-center justify-center gap-2"
//             >
//               <Send className="w-5 h-5 flex-shrink-0" />
//               Quick Quote
//             </Button>

//             <Button
//               size="lg"
//               variant="outline"
//               onClick={onJoinNetwork}
//               className="w-full sm:w-auto h-13 px-7 text-base font-bold
//                 rounded-xl flex items-center justify-center gap-2
//                 border-2 border-[#f5eb18]
//                 text-white bg-transparent
//                 hover:bg-[#f5eb18]/20
//                 hover:shadow-[0_10px_20px_-5px_rgba(245,235,24,0.45)]
//                 hover:-translate-y-1
//                 transition-all duration-300"
//             >
//               <Building2 className="w-5 h-5 flex-shrink-0" />
//               Join Our Courier Network
//             </Button>
//           </div>
//         </div>

//         {/* Right column — intentionally empty, image shows through */}
//         <div className="hidden lg:block" />
//       </div>
//     </section>
//   );
// };
import { Button } from "@/components/ui/button";
import { Building2, Send } from "lucide-react";

interface HeroSectionProps {
  onSendParcel: () => void;
  onJoinNetwork: () => void;
  backgroundImageUrl?: string;
  mobileBackgroundImageUrl?: string;
}

export const HeroSection = ({
  onSendParcel,
  onJoinNetwork,
  backgroundImageUrl = "/route462.jpeg",
  mobileBackgroundImageUrl = "/route463mob.png",
}: HeroSectionProps) => {
  return (
    <section
      className="
        relative
        flex items-center justify-center
        overflow-hidden
        bg-[#134467]
        min-h-[100svh] sm:min-h-screen
        px-4 sm:px-8 lg:px-12
        pt-24 pb-10 sm:pt-28 sm:pb-20 lg:pt-0 lg:pb-0
        -mt-20 lg:mt-0
      "
    >
      {/* ── ANIMATIONS ───────────────────────── */}
      <style>{`
        @keyframes blob {
          0%   { transform: translate(0px,   0px) scale(1);   }
          33%  { transform: translate(30px, -50px) scale(1.1); }
          66%  { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px,   0px) scale(1);   }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0px rgba(255,255,255,0.2); }
          50%       { box-shadow: 0 0 0 5px rgba(255,255,255,0.1); }
        }
        .animate-blob         { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fade-in-up   { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-pulse-glow   { animation: pulseGlow 2s infinite; }
      `}</style>

      {/* ── BACKGROUND IMAGE (native <picture> — 100% reliable) ───────────────────────── */}
      {/*
        <source media="(min-width: 640px)"> → browser loads backgroundImageUrl on desktop
        <img> fallback                       → browser loads mobileBackgroundImageUrl on mobile
        This is handled by the browser BEFORE CSS, so it can never be overridden.
      */}
      <picture className="absolute inset-0 z-0 w-full h-full">
        {/* Desktop (≥ 640px): landscape image, cover fill */}
        <source media="(min-width: 640px)" srcSet={backgroundImageUrl} />
        {/* Mobile (< 640px): portrait image, cover fill */}
        <img
          src={mobileBackgroundImageUrl}
          alt=""
          className="w-full h-full object-fill opacity-80 sm:opacity-75"
          fetchPriority="high"
          loading="eager"
          width="900"
          height="1600"
          decoding="async"
        />
      </picture>

      {/* ── GRADIENT OVERLAYS ───────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a2538]/85 via-[#0a2538]/60 to-[#0a2538]/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2538]/75 via-[#0a2538]/25 to-transparent z-10 sm:hidden" />

      {/* ── ANIMATED BLOBS ───────────────────────── */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#48AEDD] rounded-full mix-blend-screen filter blur-[100px] opacity-25 animate-blob z-10" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#f5eb18] rounded-full mix-blend-screen filter blur-[100px] opacity-15 animate-blob animation-delay-2000 z-10" />
      <div className="absolute -bottom-32 left-20 w-72 h-72 bg-[#E53935] rounded-full mix-blend-screen filter blur-[100px] opacity-15 animate-blob animation-delay-4000 z-10" />

      {/* ── DESKTOP BRAND LOCKUP (lg+) ───────────────────────── */}
      <div
        className="hidden lg:flex absolute top-7 left-8 z-50 items-center animate-fade-in-up"
        style={{ animationDelay: "0ms" }}
      >
        <div className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-[#0a2538]/60 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
          <img
            src="/route46logo.png"
            alt="Route46 Logo"
            className="w-14 h-14 object-contain drop-shadow-lg flex-shrink-0"
          />
          <div className="h-10 w-[2px] rounded-full bg-[#f5eb18] shadow-[0_0_10px_rgba(245,235,24,0.6)] flex-shrink-0" />
          <div className="flex flex-col justify-center">
            <span className="text-xl font-black text-white tracking-tight leading-none drop-shadow-sm whitespace-nowrap">
              Route46 Couriers
            </span>
            <span className="text-[0.6rem] font-bold text-[#f5eb18] tracking-[0.18em] uppercase leading-tight mt-1 whitespace-nowrap">
              The Courier with a difference
            </span>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ───────────────────────── */}
      <div className="relative max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center z-20 lg:min-h-screen lg:py-0">
        <div className="text-center lg:text-left lg:pt-24">
          {/* BADGE */}
          <div
            className="inline-flex items-center justify-center mb-4 sm:mb-5 animate-fade-in-up"
            style={{ animationDelay: "80ms" }}
          >
            <div className="px-4 sm:px-5 py-2 rounded-full bg-transparent border border-white/70 text-white text-[11px] sm:text-xs font-bold tracking-wide uppercase animate-pulse-glow flex items-center gap-2 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#48AEDD] flex-shrink-0" />
              UK-WIDE COURIER NETWORK
            </div>
          </div>

          {/* HEADING */}
          <h1
            className="text-[2.1rem] sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-5 leading-[1.08] drop-shadow-xl animate-fade-in-up"
            style={{ animationDelay: "160ms" }}
          >
            <span className="text-[#48AEDD] whitespace-nowrap">
              Same Day Courier
            </span>
            <br />
            <span className="block mt-1 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#F81E30] to-[#ff6b6b]">
              Service In UK
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="text-sm sm:text-lg text-gray-200 mb-7 sm:mb-9 leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-md animate-fade-in-up"
            style={{ animationDelay: "240ms" }}
          >
            <span className="text-white font-semibold">Route46</span> Couriers
            provides urgent parcel delivery, document transport, and
            time-critical logistics across the United Kingdom, offers rapid
            collection, direct delivery, and real-time tracking for businesses
            and individuals who require fast and secure transport solutions.
          </p>

          {/* BUTTONS */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up"
            style={{ animationDelay: "320ms" }}
          >
            <Button
              size="lg"
              onClick={onSendParcel}
              className="
                w-full sm:w-auto px-7 text-base font-bold
                bg-[#E53935] hover:bg-[#C62828] text-white rounded-xl
                shadow-[0_10px_20px_rgba(229,57,53,0.35)]
                hover:shadow-[0_15px_30px_rgba(229,57,53,0.5)]
                hover:-translate-y-1 transition-all duration-300
                flex items-center justify-center gap-2
              "
            >
              <Send className="w-5 h-5 flex-shrink-0" />
              Quick Quote
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={onJoinNetwork}
              className="
                w-full sm:w-auto px-7 text-base font-bold rounded-xl
                flex items-center justify-center gap-2
                border-2 border-[#f5eb18]
                text-white bg-transparent
                hover:bg-[#f5eb18]/20
                hover:shadow-[0_10px_20px_-5px_rgba(245,235,24,0.45)]
                hover:-translate-y-1 transition-all duration-300
              "
            >
              <Building2 className="w-5 h-5 flex-shrink-0" />
              Join Our Courier Network
            </Button>
          </div>
        </div>

        {/* Desktop right column — image shows through */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
};
