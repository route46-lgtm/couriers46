// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Outlet } from "react-router-dom";
// import { lazy, Suspense, Component, ReactNode } from "react";
// import { HelmetProvider } from "react-helmet-async";

// // ── Always-on Global Components ───────────────────────────────────────────────
// import { Navigation } from "@/components/Navigation";
// import { Chatbot } from "@/components/Chatbot";
// import ScrollToTop from "@/components/ScrollToTop";
// import { useLocation } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const BASE_URL = "https://www.route46couriers.co.uk";

// const queryClient = new QueryClient();

// // ── Page Loader ───────────────────────────────────────────────────────────────
// export const PageLoader = () => (
//   <div className="min-h-screen flex items-center justify-center bg-white">
//     <div className="flex flex-col items-center gap-5">
//       <div className="relative w-16 h-16">
//         <div className="absolute inset-0 rounded-full border-4 border-[#134467]/10" />
//         <div className="absolute inset-0 rounded-full border-4 border-t-[#E53935] border-r-[#48AEDD] border-b-[#F5EB18] border-l-transparent animate-spin" />
//       </div>
//       <p className="text-[#134467] font-semibold text-sm tracking-wide">
//         Loading…
//       </p>
//     </div>
//   </div>
// );

// // ── Route Error Fallback ──────────────────────────────────────────────────────
// const RouteErrorFallback = ({
//   error,
//   onReset,
// }: {
//   error: Error;
//   onReset: () => void;
// }) => (
//   <div className="min-h-screen flex items-center justify-center bg-white px-6">
//     <div className="max-w-md w-full text-center space-y-6">
//       <div className="w-full h-1 bg-gradient-to-r from-[#48AEDD] via-[#F5EB18] to-[#E53935] rounded-full" />
//       <div className="space-y-2">
//         <h1 className="text-4xl font-black text-[#E53935]">Oops!</h1>
//         <p className="text-[#134467] font-semibold text-lg">
//           Something went wrong loading this page.
//         </p>
//         <p className="text-slate-400 text-sm">
//           This is usually a temporary issue. Try refreshing or go back home.
//         </p>
//       </div>
//       {error?.message && (
//         <pre className="text-xs text-left bg-slate-50 border border-slate-200 text-slate-500 p-4 rounded-xl overflow-auto max-h-32">
//           {error.message}
//         </pre>
//       )}
//       <div className="flex flex-col sm:flex-row gap-3 justify-center">
//         <button
//           onClick={onReset}
//           className="px-6 py-3 bg-[#134467] text-white font-semibold rounded-xl hover:bg-[#0d2f4a] transition-colors text-sm"
//         >
//           Try Again
//         </button>
//         <button
//           onClick={() => (window.location.href = "/")}
//           className="px-6 py-3 border border-[#134467] text-[#134467] font-semibold rounded-xl hover:bg-[#134467]/5 transition-colors text-sm"
//         >
//           Go Home
//         </button>
//       </div>
//     </div>
//   </div>
// );

// // ── Error Boundary ────────────────────────────────────────────────────────────
// interface EBState {
//   hasError: boolean;
//   error: Error | null;
// }
// interface EBProps {
//   children: ReactNode;
// }

// export class PageErrorBoundary extends Component<EBProps, EBState> {
//   constructor(props: EBProps) {
//     super(props);
//     this.state = { hasError: false, error: null };
//   }
//   static getDerivedStateFromError(error: Error): EBState {
//     return { hasError: true, error };
//   }
//   componentDidCatch(error: Error, info: React.ErrorInfo) {
//     console.error("[PageErrorBoundary]", error, info);
//   }
//   reset = () => this.setState({ hasError: false, error: null });
//   render() {
//     if (this.state.hasError) {
//       return (
//         <RouteErrorFallback error={this.state.error!} onReset={this.reset} />
//       );
//     }
//     return this.props.children;
//   }
// }

// // ── Root Layout — wraps EVERY route with providers ───────────────────────────
// // This is the top-level component passed to vite-react-ssg.
// // It must NOT contain a BrowserRouter — SSG provides the router.
// export const RootLayout = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <HelmetProvider>
//         <Toaster />
//         <Sonner />
//         <ScrollToTop />
//         <Outlet />
//         {/* <Chatbot /> */}
//       </HelmetProvider>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// // ── Public Layout — Navigation sidebar + content offset ──────────────────────
// // export const PublicLayout = () => (
// //   <PageErrorBoundary>
// //     <div className="min-h-screen">
// //       <Navigation />
// //       <main className="pt-20 pb-24 lg:pt-0 lg:pb-0 lg:mr-72">
// //         <Suspense fallback={<PageLoader />}>
// //           <Outlet />
// //         </Suspense>
// //       </main>
// //     </div>
// //   </PageErrorBoundary>
// // );
// export const PublicLayout = () => {
//   const { pathname } = useLocation();

//   return (
//     <PageErrorBoundary>
//       <Helmet>
//         <link rel="canonical" href={`${BASE_URL}${pathname}`} />
//       </Helmet>
//       <div className="min-h-screen">
//         <Navigation />
//         <main className="pt-20 pb-24 lg:pt-0 lg:pb-0 lg:mr-72">
//           <Suspense fallback={<PageLoader />}>
//             <Outlet />
//           </Suspense>
//         </main>
//       </div>
//     </PageErrorBoundary>
//   );
// };

// // ── Full-bleed Layout — Navigation only, page controls own spacing ────────────
// export const FullBleedLayout = () => (
//   <PageErrorBoundary>
//     <div className="min-h-screen">
//       <Navigation />
//       <Suspense fallback={<PageLoader />}>
//         <Outlet />
//       </Suspense>
//     </div>
//   </PageErrorBoundary>
// );

// // ── Admin Layout ──────────────────────────────────────────────────────────────
// export const AdminLayout = () => {
//   return (
//     <PageErrorBoundary>
//       <div className="min-h-screen bg-gray-100">
//         <Suspense fallback={<PageLoader />}>
//           <Outlet />
//         </Suspense>
//       </div>
//     </PageErrorBoundary>
//   );
// };

// // Default export kept for any legacy import references
// export default RootLayout;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import { Suspense, Component, ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";

// ── Always-on Global Components ───────────────────────────────────────────────
import { Navigation } from "@/components/Navigation";
import { Chatbot } from "@/components/Chatbot";
import ScrollToTop from "@/components/ScrollToTop";

const BASE_URL = "https://www.route46couriers.co.uk";

const queryClient = new QueryClient();

// ── Page Loader ───────────────────────────────────────────────────────────────
export const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-5">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-[#134467]/10" />
        <div className="absolute inset-0 rounded-full border-4 border-t-[#E53935] border-r-[#48AEDD] border-b-[#F5EB18] border-l-transparent animate-spin" />
      </div>
      <p className="text-[#134467] font-semibold text-sm tracking-wide">
        Loading…
      </p>
    </div>
  </div>
);

// ── Route Error Fallback ──────────────────────────────────────────────────────
const RouteErrorFallback = ({
  error,
  onReset,
}: {
  error: Error;
  onReset: () => void;
}) => (
  <div className="min-h-screen flex items-center justify-center bg-white px-6">
    <div className="max-w-md w-full text-center space-y-6">
      <div className="w-full h-1 bg-gradient-to-r from-[#48AEDD] via-[#F5EB18] to-[#E53935] rounded-full" />
      <div className="space-y-2">
        <h1 className="text-4xl font-black text-[#E53935]">Oops!</h1>
        <p className="text-[#134467] font-semibold text-lg">
          Something went wrong loading this page.
        </p>
        <p className="text-slate-400 text-sm">
          This is usually a temporary issue. Try refreshing or go back home.
        </p>
      </div>
      {error?.message && (
        <pre className="text-xs text-left bg-slate-50 border border-slate-200 text-slate-500 p-4 rounded-xl overflow-auto max-h-32">
          {error.message}
        </pre>
      )}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onReset}
          className="px-6 py-3 bg-[#134467] text-white font-semibold rounded-xl hover:bg-[#0d2f4a] transition-colors text-sm"
        >
          Try Again
        </button>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-3 border border-[#134467] text-[#134467] font-semibold rounded-xl hover:bg-[#134467]/5 transition-colors text-sm"
        >
          Go Home
        </button>
      </div>
    </div>
  </div>
);

// ── Error Boundary ────────────────────────────────────────────────────────────
interface EBState {
  hasError: boolean;
  error: Error | null;
}
interface EBProps {
  children: ReactNode;
}

export class PageErrorBoundary extends Component<EBProps, EBState> {
  constructor(props: EBProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error): EBState {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[PageErrorBoundary]", error, info);
  }
  reset = () => this.setState({ hasError: false, error: null });
  render() {
    if (this.state.hasError) {
      return (
        <RouteErrorFallback error={this.state.error!} onReset={this.reset} />
      );
    }
    return this.props.children;
  }
}

// ── Root Layout ───────────────────────────────────────────────────────────────
// Top-level component passed to vite-react-ssg.
// HelmetProvider MUST be here so every child Helmet has a valid context.
// NOTE: Do NOT add canonical here — pages set their own via <Helmet>.
export const RootLayout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Outlet />
        {/* <Chatbot /> */}
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

// ── Public Layout ─────────────────────────────────────────────────────────────
// Canonical here acts as a CSR fallback for pages that don't set their own.
// For SSG, canonical is guaranteed by the onPageRendered hook in vite.config.ts.
// Page-level <Helmet> (deeper in tree) always overrides this layout-level one.
export const PublicLayout = () => {
  const { pathname } = useLocation();
  // Normalise trailing slash so canonical is always clean
  const cleanPath =
    pathname.endsWith("/") && pathname !== "/"
      ? pathname.slice(0, -1)
      : pathname;

  return (
    <PageErrorBoundary>
      <Helmet>
        <link rel="canonical" href={`${BASE_URL}${cleanPath}`} />
      </Helmet>
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20 pb-24 lg:pt-0 lg:pb-0 lg:mr-72">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </PageErrorBoundary>
  );
};

// ── Full-bleed Layout ─────────────────────────────────────────────────────────
export const FullBleedLayout = () => (
  <PageErrorBoundary>
    <div className="min-h-screen">
      <Navigation />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </div>
  </PageErrorBoundary>
);

// ── Admin Layout ──────────────────────────────────────────────────────────────
export const AdminLayout = () => (
  <PageErrorBoundary>
    <div className="min-h-screen bg-gray-100">
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </div>
  </PageErrorBoundary>
);

export default RootLayout;
