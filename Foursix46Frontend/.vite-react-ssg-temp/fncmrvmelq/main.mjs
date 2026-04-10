var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { ViteReactSSG } from "vite-react-ssg";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useLocation, useNavigate, NavLink, Outlet, Navigate } from "react-router-dom";
import * as React from "react";
import { useState, useEffect, Suspense, Component, lazy } from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, Menu, Truck, House, Building2, Send, Info, HeartHandshake, MapPin, BookOpen, Star, Phone, FileCheck, CreditCard, Instagram, MessageCircle, Facebook, Youtube, Linkedin } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider, Helmet } from "react-helmet-async";
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(ToastPrimitives.Root, { ref, className: cn(toastVariants({ variant }), className), ...props });
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Title, { ref, className: cn("text-sm font-semibold", className), ...props }));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Description, { ref, className: cn("text-sm opacity-90", className), ...props }));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster$1() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const TiktokIcon = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className,
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" })
  }
);
const navItems = [
  { id: "home", label: "Home", icon: House, path: "/" },
  {
    id: "become-driver",
    label: "Drive with Route46",
    icon: Truck,
    path: "/become-driver"
  },
  {
    id: "for-businesses",
    label: "Join Our Courier Network",
    icon: Building2,
    path: "/for-businesses"
  },
  { id: "quick-quote", label: "Quick Quote", icon: Send, path: "/quick-quote" }
];
const infoItems = [
  { id: "about", label: "About", icon: Info, path: "/about" },
  {
    id: "services",
    label: "Services",
    icon: HeartHandshake,
    path: "/services"
  },
  { id: "sectors", label: "Sectors", icon: Building2, path: "/sectors" },
  { id: "locations", label: "Locations", icon: MapPin, path: "/locations" },
  { id: "blogs", label: "Blogs", icon: BookOpen, path: "/blog" },
  {
    id: "testimonials",
    label: "Testimonials",
    icon: Star,
    path: "/testimonials"
  },
  { id: "contact", label: "Contact", icon: Phone, path: "/contact" }
];
const legalItems = [
  {
    id: "rha-conditions",
    label: "RHA Summary",
    icon: FileCheck,
    path: "/rha-summary"
  },
  {
    id: "compliance",
    label: "Accredited & Trusted",
    icon: FileCheck,
    path: "/accredited-trusted"
  },
  {
    id: "payments",
    label: "Secure Payment Portal",
    icon: CreditCard,
    path: "/pay"
  }
];
const socialItems = [
  {
    id: "tiktok",
    label: "TikTok",
    icon: TiktokIcon,
    path: "https://www.tiktok.com/@route46_couriers",
    color: "hover:text-[#000000] hover:bg-[#00f2ea]/20"
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: Instagram,
    path: "https://www.instagram.com/route46couriers/",
    color: "hover:text-[#E1306C] hover:bg-[#E1306C]/20"
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    path: "https://wa.me/447393363802",
    color: "hover:text-[#25D366] hover:bg-[#25D366]/20"
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: Facebook,
    path: "https://www.facebook.com/route46couriers/",
    color: "hover:text-[#1877F2] hover:bg-[#1877F2]/20"
  },
  {
    id: "youtube",
    label: "YouTube",
    icon: Youtube,
    path: "https://www.youtube.com/@Route46Couriers",
    color: "hover:text-[#FF0000] hover:bg-[#FF0000]/20"
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: Linkedin,
    path: "https://www.linkedin.com/company/foursix46-couriers/",
    color: "hover:text-[#0077b5] hover:bg-[#0077b5]/20"
  },
  {
    id: "x",
    label: "X",
    icon: X,
    path: "https://x.com/Route46Couriers",
    color: "hover:text-black hover:bg-black/20"
  }
];
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };
  const isActive = (path) => location.pathname === path;
  const handleSocialClick = () => {
    setMobileMenuOpen(false);
    sessionStorage.setItem("refreshOnReturn", "true");
  };
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        if (sessionStorage.getItem("refreshOnReturn") === "true") {
          sessionStorage.removeItem("refreshOnReturn");
          window.location.reload();
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);
  useEffect(() => {
    const handleCloseMenu = () => setMobileMenuOpen(false);
    window.addEventListener("closeMobileMenu", handleCloseMenu);
    return () => window.removeEventListener("closeMobileMenu", handleCloseMenu);
  }, []);
  const desktopLinkClass = (active) => cn(
    "w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 text-left group relative overflow-hidden",
    active ? "bg-red-50 text-[#E53935] font-bold shadow-[0_4px_20px_rgba(229,57,53,0.15)]" : "hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-gray-600 hover:text-black font-medium"
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: `
        @-webkit-keyframes fadeIn {
          from { opacity: 0; -webkit-transform: translateY(10px); transform: translateY(10px); }
          to   { opacity: 1; -webkit-transform: translateY(0);    transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          -webkit-animation: fadeIn 0.5s ease-out forwards;
          animation: fadeIn 0.5s ease-out forwards;
        }
        .nav-scroll-container {
          overscroll-behavior: contain;
        }
        .nav-scroll-container::-webkit-scrollbar {
          width: 5px;
          background-color: transparent;
        }
        .nav-scroll-container::-webkit-scrollbar-track {
          background-color: transparent;
        }
        .nav-scroll-container::-webkit-scrollbar-thumb {
          background-color: transparent;
          border-radius: 20px;
        }
        .nav-scroll-container:hover::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.1);
        }
      ` }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex fixed right-0 top-0 h-screen w-72 z-50 flex-col shadow-[-20px_0_80px_rgba(0,0,0,0.05)]", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/90 backdrop-blur-2xl -z-10 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto nav-scroll-container w-full", children: /* @__PURE__ */ jsxs("div", { className: "p-6 w-full", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "text-center mb-10 animate-fade-in pt-4 cursor-pointer",
            onClick: handleLogoClick,
            children: [
              /* @__PURE__ */ jsxs("h1", { className: "text-2xl font-extrabold text-[#48AEDD] mb-2 tracking-tight", children: [
                "Route",
                /* @__PURE__ */ jsx("span", { className: "text-[#F5EB18]", children: "46" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-1 w-16 bg-[#F5EB18] mx-auto rounded-full mb-2" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-[10px] uppercase tracking-widest font-semibold", children: "Logistics & Couriers" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[#48AEDD] text-[11px] font-bold mb-4 px-4 tracking-widest uppercase opacity-80", children: "Main Menu" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: navItems.map((item, idx) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return /* @__PURE__ */ jsx(
              "li",
              {
                className: "animate-fade-in",
                style: {
                  animationDelay: `${idx * 50}ms`,
                  opacity: 0,
                  animationFillMode: "forwards"
                },
                children: /* @__PURE__ */ jsxs(
                  NavLink,
                  {
                    to: item.path,
                    className: desktopLinkClass(active),
                    children: [
                      /* @__PURE__ */ jsx(
                        Icon,
                        {
                          className: cn(
                            "w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110",
                            active ? "text-[#E53935]" : "text-gray-400 group-hover:text-[#E53935]"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsx("span", { className: "text-sm relative z-10", children: item.label })
                    ]
                  }
                )
              },
              item.id
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[#48AEDD] text-[11px] font-bold mb-4 px-4 tracking-widest uppercase opacity-80", children: "Legal" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: legalItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              NavLink,
              {
                to: item.path,
                className: cn(
                  "w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 text-left group relative overflow-hidden",
                  active ? "bg-yellow-50 text-[#dcb004] font-bold shadow-[0_4px_20px_rgba(220,176,4,0.15)]" : "hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-gray-600 hover:text-black font-medium"
                ),
                children: [
                  /* @__PURE__ */ jsx(
                    Icon,
                    {
                      className: cn(
                        "w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110",
                        active ? "text-[#dcb004]" : "text-gray-400 group-hover:text-[#dcb004]"
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "text-sm relative z-10", children: item.label })
                ]
              }
            ) }, item.id);
          }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[#48AEDD] text-[11px] font-bold mb-4 px-4 tracking-widest uppercase opacity-80", children: "Information" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: infoItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              NavLink,
              {
                to: item.path,
                className: cn(
                  "w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 text-left group relative overflow-hidden",
                  active ? "bg-blue-50 text-[#48AEDD] font-bold shadow-[0_4px_20px_rgba(72,174,221,0.15)]" : "hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-gray-600 hover:text-black font-medium"
                ),
                children: [
                  /* @__PURE__ */ jsx(
                    Icon,
                    {
                      className: cn(
                        "w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110",
                        active ? "text-[#48AEDD]" : "text-gray-400 group-hover:text-[#48AEDD]"
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "text-sm relative z-10", children: item.label })
                ]
              }
            ) }, item.id);
          }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-[#48AEDD] text-[11px] font-bold mb-4 px-4 tracking-widest opacity-80", children: [
            "The Route46",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-[#E53935] text-[12px]", children: "Verse" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2 px-1", children: socialItems.map((item) => {
            const Icon = item.icon;
            return /* @__PURE__ */ jsx(
              "a",
              {
                href: item.path,
                target: "_blank",
                rel: "noopener noreferrer",
                className: cn(
                  "flex items-center justify-center aspect-square rounded-2xl bg-gray-50 transition-all duration-300 group border border-transparent hover:border-gray-100 hover:shadow-md",
                  item.color
                ),
                "aria-label": item.label,
                children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-gray-400 transition-colors group-hover:text-inherit" })
              },
              item.id
            );
          }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-10" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "lg:hidden fixed top-4 right-4 z-50 transition-all duration-300",
          mobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        ),
        children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setMobileMenuOpen(true),
            className: "p-3 bg-white/95 backdrop-blur-3xl rounded-2xl shadow-lg border border-white/50 text-gray-700 hover:bg-gray-50 active:scale-95 transition-all duration-200",
            "aria-label": "Open navigation menu",
            children: /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
          }
        )
      }
    ),
    mobileMenuOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "lg:hidden fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm transition-opacity touch-none cursor-pointer",
        onClick: () => setMobileMenuOpen(false)
      }
    ),
    /* @__PURE__ */ jsx(
      "nav",
      {
        className: cn(
          "lg:hidden fixed right-0 top-0 h-screen h-[100dvh] w-[280px] bg-white/95 shadow-2xl z-[70] flex-col overflow-y-auto transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        ),
        children: /* @__PURE__ */ jsxs("div", { className: "p-6 relative min-h-full pb-32", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-10 relative z-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-[#F5EB18] rounded-lg flex items-center justify-center text-black shadow-sm", children: /* @__PURE__ */ jsx(Truck, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxs("span", { className: "text-[#48AEDD] font-bold text-xl", children: [
                "Route",
                /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "46" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setMobileMenuOpen(false),
                className: "p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors",
                "aria-label": "Close navigation menu",
                children: /* @__PURE__ */ jsx(X, { className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-[#48AEDD] text-[11px] font-bold mb-3 px-2 tracking-widest uppercase opacity-80", children: "Main Menu" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                  NavLink,
                  {
                    to: item.path,
                    onClick: () => setMobileMenuOpen(false),
                    className: cn(
                      "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-left",
                      active ? "bg-red-50 text-[#E53935] font-bold shadow-sm" : "text-gray-700 hover:bg-gray-50 font-medium"
                    ),
                    children: [
                      /* @__PURE__ */ jsx(
                        Icon,
                        {
                          className: cn(
                            "w-5 h-5",
                            active ? "text-[#E53935]" : "text-gray-500"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: item.label })
                    ]
                  }
                ) }, item.id);
              }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-[#48AEDD] text-[11px] font-bold mb-3 px-2 tracking-widest uppercase opacity-80", children: "Legal" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: legalItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                  NavLink,
                  {
                    to: item.path,
                    onClick: () => setMobileMenuOpen(false),
                    className: cn(
                      "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-left",
                      active ? "bg-yellow-50 text-[#dcb004] font-bold shadow-sm" : "text-gray-700 hover:bg-gray-50 font-medium"
                    ),
                    children: [
                      /* @__PURE__ */ jsx(
                        Icon,
                        {
                          className: cn(
                            "w-5 h-5",
                            active ? "text-[#dcb004]" : "text-gray-500"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: item.label })
                    ]
                  }
                ) }, item.id);
              }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-[#48AEDD] text-[11px] font-bold mb-3 px-2 tracking-widest uppercase opacity-80", children: "Information" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: infoItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                  NavLink,
                  {
                    to: item.path,
                    onClick: () => setMobileMenuOpen(false),
                    className: cn(
                      "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-left",
                      active ? "bg-blue-50 text-[#48AEDD] font-bold shadow-sm" : "text-gray-700 hover:bg-gray-50 font-medium"
                    ),
                    children: [
                      /* @__PURE__ */ jsx(
                        Icon,
                        {
                          className: cn(
                            "w-5 h-5",
                            active ? "text-[#48AEDD]" : "text-gray-500"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: item.label })
                    ]
                  }
                ) }, item.id);
              }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-[#48AEDD] text-[11px] font-bold mb-3 px-2 tracking-widest opacity-80", children: [
                "The Route46",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-[#E53935] text-[12px]", children: "Verse" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2 px-1", children: socialItems.map((item) => {
                const Icon = item.icon;
                return /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: item.path,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: handleSocialClick,
                    className: cn(
                      "flex items-center justify-center aspect-square rounded-xl bg-gray-50 border border-gray-100 shadow-sm active:scale-95 transition-all",
                      item.color
                    ),
                    "aria-label": item.label,
                    children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-gray-600 transition-colors group-hover:text-inherit" })
                  },
                  item.id
                );
              }) })
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("nav", { className: "lg:hidden fixed bottom-0 left-0 w-full h-auto bg-white/95 backdrop-blur-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 border-t border-white/50 safe-area-pb", children: /* @__PURE__ */ jsx("div", { className: "px-2 py-2", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-row justify-around items-center w-full", children: navItems.map((item) => {
      const Icon = item.icon;
      const active = isActive(item.path);
      return /* @__PURE__ */ jsx("li", { className: "flex-1", children: /* @__PURE__ */ jsxs(
        NavLink,
        {
          to: item.path,
          onClick: () => setMobileMenuOpen(false),
          className: cn(
            "w-full flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 text-center group relative overflow-hidden",
            active ? "text-[#E53935]" : "text-gray-500 hover:text-gray-700 active:scale-95"
          ),
          children: [
            /* @__PURE__ */ jsx(
              Icon,
              {
                className: cn(
                  "w-6 h-6 sm:w-7 sm:h-7 relative z-10 transition-transform duration-300",
                  active ? "scale-110 drop-shadow-sm" : "group-hover:scale-110"
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: cn(
                  "font-bold text-[10px] sm:text-xs relative z-10 transition-all duration-300 tracking-wide",
                  active ? "translate-y-0.5" : ""
                ),
                children: item.label
              }
            )
          ]
        }
      ) }, item.id);
    }) }) }) })
  ] });
};
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
const BASE_URL = "https://www.route46couriers.co.uk";
const queryClient = new QueryClient();
const PageLoader = () => /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-5", children: [
  /* @__PURE__ */ jsxs("div", { className: "relative w-16 h-16", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-[#134467]/10" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-t-[#E53935] border-r-[#48AEDD] border-b-[#F5EB18] border-l-transparent animate-spin" })
  ] }),
  /* @__PURE__ */ jsx("p", { className: "text-[#134467] font-semibold text-sm tracking-wide", children: "Loading…" })
] }) });
const RouteErrorFallback = ({
  error,
  onReset
}) => /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-white px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md w-full text-center space-y-6", children: [
  /* @__PURE__ */ jsx("div", { className: "w-full h-1 bg-gradient-to-r from-[#48AEDD] via-[#F5EB18] to-[#E53935] rounded-full" }),
  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black text-[#E53935]", children: "Oops!" }),
    /* @__PURE__ */ jsx("p", { className: "text-[#134467] font-semibold text-lg", children: "Something went wrong loading this page." }),
    /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm", children: "This is usually a temporary issue. Try refreshing or go back home." })
  ] }),
  (error == null ? void 0 : error.message) && /* @__PURE__ */ jsx("pre", { className: "text-xs text-left bg-slate-50 border border-slate-200 text-slate-500 p-4 rounded-xl overflow-auto max-h-32", children: error.message }),
  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onReset,
        className: "px-6 py-3 bg-[#134467] text-white font-semibold rounded-xl hover:bg-[#0d2f4a] transition-colors text-sm",
        children: "Try Again"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => window.location.href = "/",
        className: "px-6 py-3 border border-[#134467] text-[#134467] font-semibold rounded-xl hover:bg-[#134467]/5 transition-colors text-sm",
        children: "Go Home"
      }
    )
  ] })
] }) });
class PageErrorBoundary extends Component {
  constructor(props) {
    super(props);
    __publicField(this, "reset", () => this.setState({ hasError: false, error: null }));
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("[PageErrorBoundary]", error, info);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsx(RouteErrorFallback, { error: this.state.error, onReset: this.reset });
    }
    return this.props.children;
  }
}
const RootLayout = () => /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(HelmetProvider, { children: [
  /* @__PURE__ */ jsx(Toaster$1, {}),
  /* @__PURE__ */ jsx(Toaster, {}),
  /* @__PURE__ */ jsx(ScrollToTop, {}),
  /* @__PURE__ */ jsx(Outlet, {})
] }) }) });
const PublicLayout = () => {
  const { pathname } = useLocation();
  const cleanPath = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  return /* @__PURE__ */ jsxs(PageErrorBoundary, { children: [
    /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx("link", { rel: "canonical", href: `${BASE_URL}${cleanPath}` }) }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsx(Navigation, {}),
      /* @__PURE__ */ jsx("main", { className: "pt-20 pb-24 lg:pt-0 lg:pb-0 lg:mr-72", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(PageLoader, {}), children: /* @__PURE__ */ jsx(Outlet, {}) }) })
    ] })
  ] });
};
const FullBleedLayout = () => /* @__PURE__ */ jsx(PageErrorBoundary, { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
  /* @__PURE__ */ jsx(Navigation, {}),
  /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(PageLoader, {}), children: /* @__PURE__ */ jsx(Outlet, {}) })
] }) });
const AdminLayout = () => /* @__PURE__ */ jsx(PageErrorBoundary, { children: /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-100", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(PageLoader, {}), children: /* @__PURE__ */ jsx(Outlet, {}) }) }) });
const HomePage = lazy(() => import("./assets/js/HomePage-C8b_HU-M.js"));
const QuickQuotePage = lazy(() => import("./assets/js/QuickQuotePage-CDkBkpkK.js"));
const QuickQuoteThankYouPage = lazy(
  () => import("./assets/js/QuickQuoteThankYouPage-DBR0j_2v.js")
);
const BecomeDriverPage = lazy(() => import("./assets/js/BecomeDriverPage-B6UvW7oe.js"));
const ForBusinessesPage = lazy(() => import("./assets/js/ForBusinessesPage-CboZgCqW.js"));
const ServicesPage = lazy(() => import("./assets/js/ServicesPage-svso-lG0.js"));
lazy(() => import("./assets/js/ServiceDetailPage-TwBqNsVh.js"));
const SectorsPage = lazy(() => import("./assets/js/SectorsPage-CjJcmhOP.js"));
lazy(() => import("./assets/js/SectorDetailPage-D8SukwBt.js"));
const AboutPage = lazy(() => import("./assets/js/AboutPage-CPJjmwUz.js"));
const PayPage = lazy(() => import("./assets/js/PayPage-Cl37mhYv.js"));
const PaySuccessPage = lazy(() => import("./assets/js/PaySuccessPage-DxNkcNiN.js"));
const PayCancelPage = lazy(() => import("./assets/js/PayCancelPage-BS8TICYt.js"));
const LocationsPage = lazy(() => import("./assets/js/LocationsPage-ChRRGUPG.js"));
lazy(() => import("./assets/js/LocationDetailPage-B90pE-sj.js"));
lazy(() => import("./assets/js/LocationServicePage-DLJnTnCA.js"));
const ContactPage = lazy(() => import("./assets/js/ContactPage-CQZuS0BQ.js"));
const PrivacyPolicyPage = lazy(() => import("./assets/js/PrivacyPolicyPage-0RDEMgqX.js"));
const TermsPage = lazy(() => import("./assets/js/TermsPage-B_At6SoY.js"));
const CookiesPage = lazy(() => import("./assets/js/CookiesPage-DoLkjciZ.js"));
const RefundPolicyPage = lazy(() => import("./assets/js/RefundPolicyPage-CvA9yOdK.js"));
const FAQSPage = lazy(() => import("./assets/js/FAQSPage-CeSDK2mE.js"));
const AccreditedTrustedPage = lazy(
  () => import("./assets/js/AccreditedTrustedPage-B8nwJ5eV.js")
);
const NotFound = lazy(() => import("./assets/js/NotFound-DzIkEfns.js"));
const AdminLoginPage = lazy(() => import("./assets/js/AdminLoginPage-B3QZ9egE.js"));
const AdminDashboardPage = lazy(() => import("./assets/js/AdminDashboardPage-DQJbSNy2.js"));
const RHAPage = lazy(() => import("./assets/js/RHAPage-BkMuGnbS.js"));
const DriverThankYouPage = lazy(() => import("./assets/js/DriverThankYouPage-1wtochsg.js"));
const ShipperThankYouPage = lazy(() => import("./assets/js/ShipperThankYouPage-B0ez92J4.js"));
const ContactThankYouPage = lazy(() => import("./assets/js/ContactThankYouPage-DUT-PpbY.js"));
const BookingThankYouPage = lazy(() => import("./assets/js/BookingThankYouPage-D_Zc3BJJ.js"));
const BlogsPage = lazy(() => import("./assets/js/BlogsPage-ChcVUdgZ.js"));
lazy(() => import("./assets/js/BlogPostPage-HCJVfHyg.js"));
const TestimonialsPage = lazy(
  () => import("./assets/js/TestimonialsPage-Fbm93mUA.js").then((m) => ({
    default: m.TestimonialsPage
  }))
);
const s = (Component2) => /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(PageLoader, {}), children: /* @__PURE__ */ jsx(Component2, {}) });
const isBrowser = typeof window !== "undefined";
const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      // ── ADMIN — only registered in the browser, never during SSG ─────────
      ...isBrowser ? [
        {
          Component: AdminLayout,
          children: [
            { path: "admin/login", element: s(AdminLoginPage) },
            { path: "admin/dashboard", element: s(AdminDashboardPage) }
          ]
        }
      ] : [],
      // ── FULL-BLEED ────────────────────────────────────────────────────────
      {
        Component: FullBleedLayout,
        children: [
          {
            path: "/locations/:locationSlug/:serviceSlug",
            lazy: async () => {
              const mod = await import("./assets/js/LocationServicePage-DLJnTnCA.js");
              return {
                Component: mod.default,
                loader: mod.loader,
                entry: mod.entry
              };
            }
          }
        ]
      },
      // ── PUBLIC ────────────────────────────────────────────────────────────
      {
        Component: PublicLayout,
        children: [
          { index: true, element: s(HomePage) },
          { path: "quick-quote", element: s(QuickQuotePage) },
          { path: "get-a-quote/thank-you", element: s(QuickQuoteThankYouPage) },
          { path: "become-driver", element: s(BecomeDriverPage) },
          { path: "for-businesses", element: s(ForBusinessesPage) },
          { path: "testimonials", element: s(TestimonialsPage) },
          { path: "blog", element: s(BlogsPage) },
          {
            path: "/blog/:slug",
            lazy: async () => {
              const mod = await import("./assets/js/BlogPostPage-HCJVfHyg.js");
              return {
                Component: mod.default,
                loader: mod.loader,
                entry: mod.entry
              };
            }
          },
          { path: "services", element: s(ServicesPage) },
          {
            path: "/services/:slug",
            lazy: async () => {
              const mod = await import("./assets/js/ServiceDetailPage-TwBqNsVh.js");
              return {
                Component: mod.default,
                loader: mod.loader,
                entry: mod.entry
              };
            }
          },
          { path: "sectors", element: s(SectorsPage) },
          {
            path: "/sectors/:slug",
            lazy: async () => {
              const mod = await import("./assets/js/SectorDetailPage-D8SukwBt.js");
              return {
                Component: mod.default,
                loader: mod.loader,
                entry: mod.entry
              };
            }
          },
          { path: "locations", element: s(LocationsPage) },
          {
            path: "/locations/:slug",
            lazy: async () => {
              const mod = await import("./assets/js/LocationDetailPage-B90pE-sj.js");
              return {
                Component: mod.default,
                loader: mod.loader,
                entry: mod.entry
              };
            }
          },
          { path: "pay", element: s(PayPage) },
          { path: "pay/success", element: s(PaySuccessPage) },
          { path: "pay/cancel", element: s(PayCancelPage) },
          { path: "about", element: s(AboutPage) },
          { path: "contact", element: s(ContactPage) },
          { path: "privacy", element: s(PrivacyPolicyPage) },
          { path: "terms", element: s(TermsPage) },
          { path: "cookies", element: s(CookiesPage) },
          { path: "refund-policy", element: s(RefundPolicyPage) },
          { path: "faqs", element: s(FAQSPage) },
          { path: "accredited-trusted", element: s(AccreditedTrustedPage) },
          { path: "rha-summary", element: s(RHAPage) },
          { path: "driver-thank-you", element: s(DriverThankYouPage) },
          { path: "shipper-thank-you", element: s(ShipperThankYouPage) },
          { path: "contact-thank-you", element: s(ContactThankYouPage) },
          { path: "booking-thank-you", element: s(BookingThankYouPage) },
          {
            path: "send-parcel",
            element: /* @__PURE__ */ jsx(Navigate, { to: "/quick-quote", replace: true })
          }
        ]
      },
      // ── 404 ───────────────────────────────────────────────────────────────
      { path: "*", element: s(NotFound) }
    ]
  }
];
const createRoot = ViteReactSSG({ routes }, ({ isClient }) => {
  if (isClient) {
    window.addEventListener("error", (e) => {
      console.error("[APP ERROR]", e.message, e.error);
    });
    window.addEventListener("unhandledrejection", (e) => {
      console.error("[UNHANDLED PROMISE]", e.reason);
    });
    const overlay = document.getElementById("loading-overlay");
    if (overlay) {
      overlay.style.opacity = "0";
      setTimeout(() => overlay.remove(), 300);
    }
  }
});
export {
  cn as c,
  createRoot
};
