import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { CheckCircle, AlertCircle, User, Mail, ChevronDown, HelpCircle, Send, Truck, ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import { B as Button } from "./button-CGBOOEAe.js";
import { I as Input } from "./input-CBzcThm7.js";
import { T as Textarea } from "./textarea-CF7Vn140.js";
import { c as cn } from "../../main.mjs";
import { useNavigate } from "react-router-dom";
import { F as Footer } from "./Footer-BW1VuM-V.js";
import { L as LoadingAnimation } from "./LoadingAnimation-De0K9u0o.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
import "framer-motion";
const fadeInUp = "animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-forwards";
function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    senderType: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(
    null
  );
  const [submitMessage, setSubmitMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };
  const handleCustomSelect = (value) => {
    const syntheticEvent = {
      target: {
        name: "senderType",
        value
      }
    };
    handleInputChange(syntheticEvent);
    setIsDropdownOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.senderType.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitStatus("error");
      setSubmitMessage("Please fill in all fields");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter a valid email address");
      return;
    }
    setIsLoading(true);
    setSubmitStatus(null);
    try {
      const apiUrl = "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => navigate("/contact-thank-you"), 1500);
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          data.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "An error occurred. Please check your connection and try again."
      );
    } finally {
      if (submitStatus !== "success") {
        setIsLoading(false);
      }
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "operations@route46couriers.co.uk",
      link: "mailto:operations@route46couriers.co.uk",
      color: "#E53935",
      bg: "bg-[#E53935]/10",
      border: "group-hover:border-[#E53935]/30"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+44 0330 124 1966",
      link: "tel:+4403301241966",
      color: "#48AEDD",
      bg: "bg-[#48AEDD]/10",
      border: "group-hover:border-[#48AEDD]/30"
    },
    {
      icon: MapPin,
      title: "Head Office",
      content: "London, England, United Kingdom",
      link: "#",
      color: "#134467",
      bg: "bg-[#134467]/10",
      border: "group-hover:border-[#134467]/30"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Available 24/7",
      link: "#",
      color: "#dcb004",
      bg: "bg-[#F5EB18]/20",
      border: "group-hover:border-[#F5EB18]/50"
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isLoading && /* @__PURE__ */ jsx(LoadingAnimation, { message: "Sending your message..." }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen w-full overflow-x-hidden bg-white font-sans selection:bg-[#E53935] selection:text-white", children: [
      /* @__PURE__ */ jsx("div", { className: "relative py-16 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 text-center max-w-4xl relative z-10", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-50 border border-[#134467]/10 shadow-sm mb-8",
              fadeInUp
            ),
            children: [
              /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-[#E53935] animate-ping" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#134467] font-bold text-xs tracking-widest uppercase", children: "We are always online" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "h1",
          {
            className: cn(
              "text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#48AEDD] mb-6 tracking-tight leading-tight",
              fadeInUp,
              "animation-delay-100"
            ),
            children: [
              "Contact ",
              /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-[#E53935] to-[#E53935]", children: "Route46 Couriers" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "text-lg sm:text-xl text-[#134467]/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium",
              fadeInUp,
              "animation-delay-200"
            ),
            children: "Whether you need a courier quote, delivery support, or business logistics assistance, the Route46 Couriers team is ready to help."
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 pb-24 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "bg-white/80 backdrop-blur-sm border-2 border-[#48AEDD]/10 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-blue-900/5 flex flex-col h-full relative overflow-hidden",
              fadeInUp,
              "animation-delay-300"
            ),
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative z-10 mb-10", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[#134467] mb-4 flex items-center gap-3", children: "Get in Touch" }),
                /* @__PURE__ */ jsx("p", { className: "text-[#134467]/80 text-lg leading-relaxed", children: "Reach out to us directly using the contact information below, or fill out the form and we will get back to you within 24 hours." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "relative z-10 grid gap-6 flex-1 content-center", children: contactInfo.map((item, index) => /* @__PURE__ */ jsxs(
                "a",
                {
                  href: item.link,
                  className: cn(
                    "flex items-center gap-5 p-5 rounded-2xl bg-white border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group/item",
                    item.border
                  ),
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110",
                          item.bg
                        ),
                        children: /* @__PURE__ */ jsx(
                          item.icon,
                          {
                            className: "w-6 h-6",
                            style: { color: item.color }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        "p",
                        {
                          className: "text-xs font-extrabold uppercase tracking-wider mb-0.5",
                          style: { color: item.color },
                          children: item.title
                        }
                      ),
                      /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-[#134467]", children: item.content })
                    ] })
                  ]
                },
                index
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "bg-white border-2 border-[#48AEDD]/10 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-blue-900/5 flex flex-col h-full",
              fadeInUp,
              "animation-delay-400"
            ),
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[#134467] mb-2", children: "Send a Message" }),
              /* @__PURE__ */ jsx("p", { className: "text-[#134467]/80 mb-8 text-lg", children: "Fill in the details below and we'll contact you shortly." }),
              /* @__PURE__ */ jsxs(
                "form",
                {
                  onSubmit: handleSubmit,
                  className: "space-y-6 flex-1 flex flex-col",
                  children: [
                    submitStatus === "success" && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "font-semibold text-green-800 text-sm", children: submitMessage }),
                        /* @__PURE__ */ jsx("p", { className: "text-green-700 text-xs mt-1", children: "Confirmation email has been sent to your inbox." })
                      ] })
                    ] }),
                    submitStatus === "error" && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl", children: [
                      /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "font-semibold text-red-800 text-sm", children: submitMessage }) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2 group", children: [
                        /* @__PURE__ */ jsx(
                          "label",
                          {
                            htmlFor: "name",
                            className: "text-sm font-bold text-[#134467] ml-1 transition-colors group-focus-within:text-[#E53935]",
                            children: "Name *"
                          }
                        ),
                        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                          /* @__PURE__ */ jsx(User, { className: "absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-[#E53935] transition-colors" }),
                          /* @__PURE__ */ jsx(
                            Input,
                            {
                              id: "name",
                              name: "name",
                              value: formData.name,
                              onChange: handleInputChange,
                              placeholder: "John Doe",
                              disabled: isLoading,
                              required: true,
                              "aria-required": "true",
                              className: "h-12 pl-12 rounded-xl border-none bg-slate-50 text-[#134467] placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-[#E53935]/100 focus-visible:bg-white transition-all duration-300 disabled:opacity-50"
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2 group", children: [
                        /* @__PURE__ */ jsx(
                          "label",
                          {
                            htmlFor: "email",
                            className: "text-sm font-bold text-[#134467] ml-1 transition-colors group-focus-within:text-[#E53935]",
                            children: "Email *"
                          }
                        ),
                        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                          /* @__PURE__ */ jsx(Mail, { className: "absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-[#E53935] transition-colors" }),
                          /* @__PURE__ */ jsx(
                            Input,
                            {
                              id: "email",
                              name: "email",
                              type: "email",
                              value: formData.email,
                              onChange: handleInputChange,
                              placeholder: "john@example.com",
                              disabled: isLoading,
                              required: true,
                              "aria-required": "true",
                              pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
                              className: "h-12 pl-12 rounded-xl border-none bg-slate-50 text-[#134467] placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-[#E53935]/100 focus-visible:bg-white transition-all duration-300 disabled:opacity-50"
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2 w-full", ref: dropdownRef, children: [
                        /* @__PURE__ */ jsx("label", { className: "text-sm font-bold text-[#134467] ml-1", children: "Who is submitting?" }),
                        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                          /* @__PURE__ */ jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => setIsDropdownOpen(!isDropdownOpen),
                              disabled: isLoading,
                              className: `
                          h-12 w-full pl-4 pr-10 text-left rounded-xl border-none 
                          bg-slate-50 text-[#134467] font-medium
                          focus:outline-none transition-all duration-300 flex items-center justify-between
                          ${isDropdownOpen ? "ring-2 ring-[#E53935] bg-white" : "hover:bg-[#E53935]/5 hover:ring-1 hover:ring-[#E53935]"}
                        `,
                              children: [
                                /* @__PURE__ */ jsx(
                                  "span",
                                  {
                                    className: !formData.senderType ? "text-slate-400" : "",
                                    children: formData.senderType || "Select one"
                                  }
                                ),
                                /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ jsx(
                                  ChevronDown,
                                  {
                                    className: `w-4 h-4 text-[#E53935] transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`
                                  }
                                ) })
                              ]
                            }
                          ),
                          isDropdownOpen && /* @__PURE__ */ jsx("div", { className: "absolute z-50 mt-2 w-full bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200", children: ["Driver", "Shipper", "Customer"].map((option) => /* @__PURE__ */ jsx(
                            "div",
                            {
                              onClick: () => handleCustomSelect(option),
                              className: "\n                                px-4 py-3 cursor-pointer text-[#134467] font-medium\n                                transition-colors duration-200\n                                hover:bg-[#E53935] hover:text-white\n                              ",
                              children: option
                            },
                            option
                          )) })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2 group", children: [
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          htmlFor: "subject",
                          className: "text-sm font-bold text-[#134467] ml-1 transition-colors group-focus-within:text-[#E53935]",
                          children: "Subject *"
                        }
                      ),
                      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsx(HelpCircle, { className: "absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-[#E53935] transition-colors" }),
                        /* @__PURE__ */ jsx(
                          Input,
                          {
                            id: "subject",
                            name: "subject",
                            value: formData.subject,
                            onChange: handleInputChange,
                            placeholder: "What is this regarding?",
                            disabled: isLoading,
                            required: true,
                            "aria-required": "true",
                            className: "h-12 pl-12 rounded-xl border-none bg-slate-50 text-[#134467] placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-[#E53935]/100 focus-visible:bg-white transition-all duration-300 disabled:opacity-50"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2 group flex-1", children: [
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          htmlFor: "message",
                          className: "text-sm font-bold text-[#134467] ml-1 transition-colors group-focus-within:text-[#E53935]",
                          children: "Message *"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Textarea,
                        {
                          id: "message",
                          name: "message",
                          value: formData.message,
                          onChange: handleInputChange,
                          placeholder: "Tell us how we can help you...",
                          disabled: isLoading,
                          required: true,
                          "aria-required": "true",
                          className: "rounded-xl border-none bg-slate-50 text-[#134467] placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-[#E53935]/100 focus-visible:bg-white transition-all duration-300 resize-none h-full min-h-[150px] p-4 text-base leading-relaxed disabled:opacity-50"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        type: "submit",
                        disabled: isLoading,
                        className: "w-full h-14 text-lg font-bold bg-[#E53935] hover:bg-[#C62828] text-white rounded-xl shadow-lg hover:shadow-[#E53935]/30 hover:-translate-y-1 transition-all duration-300 mt-2 group disabled:opacity-50 disabled:cursor-not-allowed",
                        children: isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [
                          /* @__PURE__ */ jsx("span", { className: "inline-block animate-spin mr-2", children: "⏳" }),
                          "Sending..."
                        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                          "Send Message",
                          /* @__PURE__ */ jsx(Send, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
                        ] })
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "flex items-start gap-2.5 max-w-xl mx-auto mt-2 mb-8 px-5 py-3.5 rounded-2xl bg-[#134467]/5 border border-[#134467]/10 justify-center",
            fadeInUp,
            "animation-delay-200"
          ),
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD] mt-0.5 flex-shrink-0", children: /* @__PURE__ */ jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
                  /* @__PURE__ */ jsx("polyline", { points: "12 6 12 12 16 14" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-[#134467]/70 font-medium leading-relaxed text-center", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-[#134467]/85", children: "Available 24/7" }),
              " ",
              "for urgent courier enquiries across the UK."
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("relative py-20 overflow-hidden bg-white", fadeInUp),
          children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border-2 border-[#134467]/10 rounded-[2.5rem] p-8 sm:p-16 text-center max-w-5xl mx-auto shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-shadow duration-500 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-[#F5EB18]/5 rounded-bl-full -z-10" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-64 h-64 bg-[#48AEDD]/5 rounded-tr-full -z-10" }),
            /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-[#F5EB18]/75 rounded-full mx-auto flex items-center justify-center mb-8 animate-bounce-slow", children: /* @__PURE__ */ jsx(Truck, { className: "w-10 h-10 text-[#134467]" }) }),
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl sm:text-5xl font-black text-[#48AEDD] mb-6 leading-tight", children: [
              "Ready to Ship with",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-[#E53935]", children: "Confidence?" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[#134467]/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium", children: "Join businesses and individuals across the UK who trust Route46 Couriers for reliable courier and delivery services." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: () => navigate("/quick-quote"),
                  className: "h-16 px-10 bg-[#134467] hover:bg-[#0f3652] text-white text-lg font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1",
                  children: "Get a Quick Quote"
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "outline",
                  onClick: () => navigate("/for-businesses"),
                  className: "h-16 px-10 border-2 border-[#134467]/100 bg-transparent text-[#134467] hover:bg-[#134467]/100 text-lg font-bold rounded-full transition-all duration-300 hover:-translate-y-1",
                  children: [
                    "Join Our Courier Network",
                    " ",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
                  ]
                }
              )
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
export {
  ContactPage as default
};
