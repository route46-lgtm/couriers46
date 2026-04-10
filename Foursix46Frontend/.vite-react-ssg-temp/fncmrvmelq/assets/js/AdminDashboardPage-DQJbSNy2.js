import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { d as db, a as auth } from "./firebase-CB0YWs6U.js";
import { T as Textarea } from "./textarea-CF7Vn140.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDocs, query, collection, where } from "firebase/firestore";
import { X, Plus, Loader2, GripVertical, Trash2, Check, Copy, ChevronUp, ChevronDown, Percent, Info, RefreshCw, Save, LogOut, PackageCheck, Hourglass, Banknote, Settings, Eye } from "lucide-react";
import { B as Button } from "./button-CGBOOEAe.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardDescription } from "./card-BgLfCdTQ.js";
import { c as cn } from "../../main.mjs";
import { B as Badge } from "./badge-Bqu1ytSH.js";
import { toast } from "sonner";
import { I as Input } from "./input-CBzcThm7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-DniiDww_.js";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { L as Label } from "./label-KlbQ8bq0.js";
import { C as Checkbox } from "./checkbox-CHthVXHk.js";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { u as useVatSettings } from "./useVatSettings-Cs_lKj_y.js";
import "firebase/app";
import "firebase/analytics";
import "firebase/storage";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
import "@radix-ui/react-select";
import "@radix-ui/react-label";
import "@radix-ui/react-checkbox";
const Table = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
const TableHeader = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props })
);
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props })
);
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("tfoot", { ref, className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className), ...props })
);
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "tr",
    {
      ref,
      className: cn("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", className),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "th",
    {
      ref,
      className: cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className
      ),
      ...props
    }
  )
);
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("td", { ref, className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className), ...props })
);
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props })
);
TableCaption.displayName = "TableCaption";
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const defaultFormData = {
  name: "",
  slug: "",
  status: "draft",
  sortOrder: 0,
  heroTitle: "",
  heroSubtitle: "",
  heroImage: "",
  intro: "",
  contentBlocks: [],
  vehicleTypes: [],
  whatWeCarry: [],
  ctaPrimaryText: "Get a Quote",
  ctaPrimaryLink: "/quick-quote",
  seoTitle: "",
  seoDescription: "",
  canonicalUrl: "",
  ogImage: "",
  noindex: false,
  relatedSectors: [],
  featuredLocations: [],
  faqIds: [],
  faqHeading: "Frequently Asked Questions"
};
const slugify$3 = (text) => text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_]+/g, "-").replace(/^-+|-+$/g, "");
const TagInput$5 = ({
  label,
  values,
  onChange,
  placeholder
}) => {
  const [input, setInput] = useState("");
  const add = () => {
    const trimmed = input.trim();
    if (trimmed && !values.includes(trimmed)) {
      onChange([...values, trimmed]);
    }
    setInput("");
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Label, { className: "mb-1 block", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-2", children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), add()),
          placeholder: placeholder ?? "Type and press Enter",
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ jsx(Button, { type: "button", size: "sm", variant: "outline", onClick: add, children: /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: values.map((v) => /* @__PURE__ */ jsxs(
      Badge,
      {
        variant: "secondary",
        className: "flex items-center gap-1 pr-1",
        children: [
          v,
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => onChange(values.filter((x) => x !== v)),
              className: "ml-1 hover:text-red-500",
              children: /* @__PURE__ */ jsx(X, { className: "w-3 h-3" })
            }
          )
        ]
      },
      v
    )) })
  ] });
};
const blockLabels$3 = {
  textSection: "Text Section",
  bulletSection: "Bullet Section",
  imageLeftTextRight: "Image Left + Text Right",
  imageRightTextLeft: "Image Right + Text Left",
  calloutCard: "Callout Card",
  ctaBanner: "CTA Banner"
};
const BlockEditor$3 = ({
  block,
  onChange,
  onRemove
}) => {
  const update = (fields) => onChange({ ...block, ...fields });
  return /* @__PURE__ */ jsxs("div", { className: "border rounded-xl p-4 space-y-3 bg-muted/30", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(GripVertical, { className: "w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx(Badge, { variant: "outline", children: blockLabels$3[block.type] })
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "button", size: "sm", variant: "ghost", onClick: onRemove, children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 text-red-500" }) })
    ] }),
    [
      "textSection",
      "bulletSection",
      "imageLeftTextRight",
      "imageRightTextLeft"
    ].includes(block.type) && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Heading" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          value: block.heading ?? "",
          onChange: (e) => update({ heading: e.target.value }),
          placeholder: "Section heading"
        }
      )
    ] }),
    ["textSection", "imageLeftTextRight", "imageRightTextLeft"].includes(
      block.type
    ) && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Content (rich text / HTML)" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          value: block.richText ?? "",
          onChange: (e) => update({ richText: e.target.value }),
          rows: 4,
          placeholder: "<p>Content here...</p>"
        }
      )
    ] }),
    block.type === "bulletSection" && /* @__PURE__ */ jsx(
      TagInput$5,
      {
        label: "Bullets (press Enter to add)",
        values: block.bullets ?? [],
        onChange: (v) => update({ bullets: v }),
        placeholder: "Add bullet point"
      }
    ),
    ["imageLeftTextRight", "imageRightTextLeft"].includes(block.type) && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Image URL" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          value: block.imageUrl ?? "",
          onChange: (e) => update({ imageUrl: e.target.value }),
          placeholder: "https://..."
        }
      ),
      block.imageUrl && /* @__PURE__ */ jsx(
        "img",
        {
          src: block.imageUrl,
          alt: "block preview",
          className: "mt-2 h-20 rounded border object-cover",
          onError: (e) => e.currentTarget.style.display = "none"
        }
      )
    ] }),
    block.type === "calloutCard" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Title" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: block.title ?? "",
            onChange: (e) => update({ title: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Short Text" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            value: block.shortText ?? "",
            onChange: (e) => update({ shortText: e.target.value }),
            rows: 2
          }
        )
      ] })
    ] }),
    block.type === "ctaBanner" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Title" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: block.title ?? "",
            onChange: (e) => update({ title: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Text" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            value: block.richText ?? "",
            onChange: (e) => update({ richText: e.target.value }),
            rows: 2
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Button Text" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: block.buttonText ?? "",
              onChange: (e) => update({ buttonText: e.target.value }),
              placeholder: "Get a Quote"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Button Link" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: block.buttonLink ?? "",
              onChange: (e) => update({ buttonLink: e.target.value }),
              placeholder: "/quick-quote"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const SectionHeader$3 = ({ title }) => /* @__PURE__ */ jsx("div", { className: "col-span-2 mt-2", children: /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-widest text-[#134467] border-b-2 border-[#F1C40F] pb-1", children: title }) });
function ServiceFormDialog({
  open,
  editingItem,
  onClose,
  onSave
}) {
  const [form, setForm] = useState(defaultFormData);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("core");
  const [newBlockType, setNewBlockType] = useState("textSection");
  const [slugManual, setSlugManual] = useState(false);
  useEffect(() => {
    if (!open) return;
    setActiveTab("core");
    if (editingItem) {
      setSlugManual(true);
      setForm({
        ...defaultFormData,
        ...editingItem,
        // Ensure array fields are always arrays of strings
        vehicleTypes: (editingItem.vehicleTypes ?? []).map(
          (v) => typeof v === "string" ? v : String(v ?? "")
        ),
        whatWeCarry: (editingItem.whatWeCarry ?? []).map(
          (v) => typeof v === "string" ? v : String(v ?? "")
        ),
        relatedSectors: (editingItem.relatedSectors ?? []).map(
          (v) => typeof v === "string" ? v : (v == null ? void 0 : v.slug) ?? (v == null ? void 0 : v.id) ?? String(v ?? "")
        ),
        featuredLocations: (editingItem.featuredLocations ?? []).map(
          (v) => typeof v === "string" ? v : (v == null ? void 0 : v.slug) ?? (v == null ? void 0 : v.id) ?? String(v ?? "")
        ),
        faqIds: (editingItem.faqIds ?? []).map(
          (v) => typeof v === "string" ? v : (v == null ? void 0 : v.id) ?? (v == null ? void 0 : v.slug) ?? String(v ?? "")
        ),
        contentBlocks: (editingItem.contentBlocks ?? []).map((b) => ({
          ...b,
          bullets: (b.bullets ?? []).map(
            (x) => typeof x === "string" ? x : String(x ?? "")
          )
        }))
      });
    } else {
      setSlugManual(false);
      setForm(defaultFormData);
    }
  }, [editingItem, open]);
  const update = (fields) => setForm((prev) => ({ ...prev, ...fields }));
  const handleNameChange = (name) => {
    update({ name, ...!slugManual && { slug: slugify$3(name) } });
  };
  const addBlock = () => {
    const newBlock = {
      id: `block_${Date.now()}`,
      type: newBlockType
    };
    update({ contentBlocks: [...form.contentBlocks, newBlock] });
  };
  const updateBlock = (id, block) => {
    update({
      contentBlocks: form.contentBlocks.map((b) => b.id === id ? block : b)
    });
  };
  const removeBlock = (id) => {
    update({ contentBlocks: form.contentBlocks.filter((b) => b.id !== id) });
  };
  const handleSave = async (status) => {
    if (!form.name.trim()) {
      toast.error("Name is required.");
      return;
    }
    if (!form.slug.trim()) {
      toast.error("Slug is required.");
      return;
    }
    if (!form.seoTitle.trim()) {
      toast.error("SEO Title is required.");
      return;
    }
    if (!form.seoDescription.trim()) {
      toast.error("SEO Description is required.");
      return;
    }
    setIsSaving(true);
    try {
      await onSave({ ...form, status });
    } finally {
      setIsSaving(false);
    }
  };
  const tabs = [
    { key: "core", label: "Core & Hero" },
    { key: "body", label: "Body Content" },
    { key: "delivery", label: "Delivery Info" },
    { key: "seo", label: "SEO" },
    { key: "relations", label: "Relations & FAQs" }
  ];
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-3xl max-h-[90vh] overflow-hidden flex flex-col", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
      editingItem ? "Edit Service" : "Create Service",
      /* @__PURE__ */ jsx(
        Badge,
        {
          className: "ml-1",
          variant: form.status === "published" ? "default" : "secondary",
          children: form.status
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-1 border-b pb-2 flex-wrap", children: tabs.map((tab) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => setActiveTab(tab.key),
        className: `px-3 py-1.5 text-sm rounded-md font-medium transition-colors ${activeTab === tab.key ? "bg-[#134467] text-white" : "text-muted-foreground hover:bg-muted"}`,
        children: tab.label
      },
      tab.key
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "overflow-y-auto flex-1 pr-2 space-y-4 py-2", children: [
      activeTab === "core" && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx(SectionHeader$3, { title: "Core" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Name *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.name,
              onChange: (e) => handleNameChange(e.target.value),
              placeholder: "Same Day Courier"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Slug *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.slug,
              onChange: (e) => {
                setSlugManual(true);
                update({
                  slug: e.target.value.toLowerCase().replace(/\s+/g, "-")
                });
              },
              placeholder: "same-day-courier",
              className: "font-mono text-sm"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Auto-generated from name. Edit to override." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Status" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: form.status,
              onValueChange: (v) => update({ status: v }),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "draft", children: "Draft" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "published", children: "Published" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Sort Order" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "number",
              value: form.sortOrder,
              onChange: (e) => update({ sortOrder: Number(e.target.value) })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(SectionHeader$3, { title: "Hero Section" }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Hero Title" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.heroTitle,
              onChange: (e) => update({ heroTitle: e.target.value }),
              placeholder: "Fast, Reliable Same Day Courier"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Hero Subtitle" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.heroSubtitle,
              onChange: (e) => update({ heroSubtitle: e.target.value }),
              placeholder: "UK-wide collection within 60 minutes"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Hero Image URL" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.heroImage,
              onChange: (e) => update({ heroImage: e.target.value }),
              placeholder: "https://..."
            }
          ),
          form.heroImage && /* @__PURE__ */ jsx(
            "img",
            {
              src: form.heroImage,
              alt: "Hero preview",
              className: "mt-2 h-24 rounded border object-cover w-full",
              onError: (e) => e.currentTarget.style.display = "none"
            }
          )
        ] })
      ] }),
      activeTab === "body" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Intro (HTML / Rich Text)" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              value: form.intro,
              onChange: (e) => update({ intro: e.target.value }),
              rows: 5,
              placeholder: "<p>We provide same day courier services across the UK...</p>",
              className: "font-mono text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(SectionHeader$3, { title: "Content Blocks" }),
        form.contentBlocks.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground italic", children: "No blocks yet. Add one below." }),
        form.contentBlocks.map((block) => /* @__PURE__ */ jsx(
          BlockEditor$3,
          {
            block,
            onChange: (b) => updateBlock(block.id, b),
            onRemove: () => removeBlock(block.id)
          },
          block.id
        )),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pt-2 border-t", children: [
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: newBlockType,
              onValueChange: (v) => setNewBlockType(v),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: "flex-1", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsx(SelectContent, { children: Object.entries(blockLabels$3).map(([key, label]) => /* @__PURE__ */ jsx(SelectItem, { value: key, children: label }, key)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(Button, { type: "button", onClick: addBlock, variant: "outline", children: [
            /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4 mr-1" }),
            " Add Block"
          ] })
        ] })
      ] }),
      activeTab === "delivery" && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx(SectionHeader$3, { title: "Vehicle & Cargo" }),
        /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
          TagInput$5,
          {
            label: "Vehicle Types",
            values: form.vehicleTypes,
            onChange: (v) => update({ vehicleTypes: v }),
            placeholder: "e.g. Small Van, SWB, LWB"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
          TagInput$5,
          {
            label: "What We Carry",
            values: form.whatWeCarry,
            onChange: (v) => update({ whatWeCarry: v }),
            placeholder: "e.g. Documents, Parcels, Pallets"
          }
        ) }),
        /* @__PURE__ */ jsx(SectionHeader$3, { title: "CTA" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "CTA Button Text" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.ctaPrimaryText,
              onChange: (e) => update({ ctaPrimaryText: e.target.value }),
              placeholder: "Get a Quote"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "CTA Button Link" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.ctaPrimaryLink,
              onChange: (e) => update({ ctaPrimaryLink: e.target.value }),
              placeholder: "/quick-quote"
            }
          )
        ] })
      ] }),
      activeTab === "seo" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "SEO Title *",
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "(",
              form.seoTitle.length,
              "/60 chars)"
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.seoTitle,
              onChange: (e) => update({ seoTitle: e.target.value }),
              placeholder: "Same Day Courier UK | FourSix46®",
              maxLength: 60,
              className: form.seoTitle.length > 60 ? "border-red-500" : ""
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "SEO Description *",
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "(",
              form.seoDescription.length,
              "/160 chars)"
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              value: form.seoDescription,
              onChange: (e) => update({ seoDescription: e.target.value }),
              placeholder: "Fast, reliable same day courier services across the UK. Book online or get a quote...",
              maxLength: 160,
              rows: 3,
              className: form.seoDescription.length > 160 ? "border-red-500" : ""
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "Canonical URL",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "(optional, leave blank to auto-set)" })
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.canonicalUrl,
              onChange: (e) => update({ canonicalUrl: e.target.value }),
              placeholder: `https://couriers.foursix46.com/services/${form.slug || "slug"}`
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "OG Image URL",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "(optional)" })
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.ogImage,
              onChange: (e) => update({ ogImage: e.target.value }),
              placeholder: "https://..."
            }
          ),
          form.ogImage && /* @__PURE__ */ jsx(
            "img",
            {
              src: form.ogImage,
              alt: "OG preview",
              className: "mt-2 h-20 rounded border object-cover",
              onError: (e) => e.currentTarget.style.display = "none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 border rounded-xl", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              id: "noindex",
              checked: form.noindex,
              onCheckedChange: (v) => update({ noindex: !!v })
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              Label,
              {
                htmlFor: "noindex",
                className: "cursor-pointer font-medium",
                children: "No Index"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Hides this page from Google. Use for draft/test pages only." })
          ] })
        ] })
      ] }),
      activeTab === "relations" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(SectionHeader$3, { title: "Relations" }),
        /* @__PURE__ */ jsx(
          TagInput$5,
          {
            label: "Related Sectors (enter sector slugs)",
            values: form.relatedSectors,
            onChange: (v) => update({ relatedSectors: v }),
            placeholder: "e.g. dental, medical, aerospace"
          }
        ),
        /* @__PURE__ */ jsx(
          TagInput$5,
          {
            label: "Featured Locations (enter location slugs)",
            values: form.featuredLocations,
            onChange: (v) => update({ featuredLocations: v }),
            placeholder: "e.g. cardiff, london, bristol"
          }
        ),
        /* @__PURE__ */ jsx(SectionHeader$3, { title: "FAQs" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "FAQ Section Heading" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.faqHeading,
              onChange: (e) => update({ faqHeading: e.target.value }),
              placeholder: "Frequently Asked Questions"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          TagInput$5,
          {
            label: "FAQ IDs (enter Firestore FAQ document IDs)",
            values: form.faqIds,
            onChange: (v) => update({ faqIds: v }),
            placeholder: "Paste FAQ document ID and press Enter"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "💡 Tip: Go to FAQs section, copy the document ID from the table, and paste it here to link FAQs to this service." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(DialogFooter, { className: "border-t pt-4 gap-2", children: [
      /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClose, disabled: isSaving, children: "Cancel" }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          disabled: isSaving,
          onClick: () => handleSave("draft"),
          children: [
            isSaving && /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 mr-1 animate-spin" }),
            "Save as Draft"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Button,
        {
          className: "bg-[#134467] hover:bg-[#0e3352] text-white",
          disabled: isSaving,
          onClick: () => handleSave("published"),
          children: [
            isSaving && /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 mr-1 animate-spin" }),
            isSaving ? "Saving…" : editingItem ? "Update & Publish" : "Create & Publish"
          ]
        }
      )
    ] })
  ] }) });
}
const blockLabels$2 = {
  textSection: "Text Section",
  bulletSection: "Bullet Section",
  imageLeftTextRight: "Image Left + Text Right",
  imageRightTextLeft: "Image Right + Text Left",
  calloutCard: "Callout Card",
  ctaBanner: "CTA Banner"
};
const defaultForm$3 = {
  name: "",
  slug: "",
  status: "draft",
  sortOrder: 0,
  heroTitle: "",
  heroSubtitle: "",
  heroImage: "",
  intro: "",
  contentBlocks: [],
  recommendedServices: [],
  featuredLocations: [],
  seoTitle: "",
  seoDescription: "",
  canonicalUrl: "",
  ogImage: "",
  noindex: false,
  faqIds: [],
  faqHeading: "Sector FAQs"
};
const toSlugStr = (v) => typeof v === "string" ? v : (v == null ? void 0 : v.slug) ?? (v == null ? void 0 : v.id) ?? String(v ?? "");
const toIdStr = (v) => typeof v === "string" ? v : (v == null ? void 0 : v.id) ?? (v == null ? void 0 : v.slug) ?? String(v ?? "");
const slugify$2 = (text) => text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_]+/g, "-").replace(/^-+|-+$/g, "");
const SectionHeader$2 = ({ title }) => /* @__PURE__ */ jsx("div", { className: "col-span-2 mt-2", children: /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-widest text-[#134467] border-b-2 border-[#F1C40F] pb-1", children: title }) });
const TagInput$4 = ({
  label,
  values,
  onChange,
  placeholder
}) => {
  const [input, setInput] = useState("");
  const add = () => {
    const t = input.trim();
    if (t && !values.includes(t)) onChange([...values, t]);
    setInput("");
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Label, { className: "mb-1 block", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-2", children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), add()),
          placeholder,
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ jsx(Button, { type: "button", size: "sm", variant: "outline", onClick: add, children: /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: values.map((v) => /* @__PURE__ */ jsxs(
      Badge,
      {
        variant: "secondary",
        className: "flex items-center gap-1 pr-1",
        children: [
          v,
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => onChange(values.filter((x) => x !== v)),
              className: "ml-1 hover:text-red-500",
              children: /* @__PURE__ */ jsx(X, { className: "w-3 h-3" })
            }
          )
        ]
      },
      v
    )) })
  ] });
};
const BlockEditor$2 = ({
  block,
  onChange,
  onRemove
}) => {
  const u = (f) => onChange({ ...block, ...f });
  return /* @__PURE__ */ jsxs("div", { className: "border rounded-xl p-4 space-y-3 bg-muted/30", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(GripVertical, { className: "w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx(Badge, { variant: "outline", children: blockLabels$2[block.type] })
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "button", size: "sm", variant: "ghost", onClick: onRemove, children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 text-red-500" }) })
    ] }),
    [
      "textSection",
      "bulletSection",
      "imageLeftTextRight",
      "imageRightTextLeft"
    ].includes(block.type) && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Heading" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          value: block.heading ?? "",
          onChange: (e) => u({ heading: e.target.value })
        }
      )
    ] }),
    ["textSection", "imageLeftTextRight", "imageRightTextLeft"].includes(
      block.type
    ) && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Content (HTML)" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          value: block.richText ?? "",
          onChange: (e) => u({ richText: e.target.value }),
          rows: 3
        }
      )
    ] }),
    block.type === "bulletSection" && /* @__PURE__ */ jsx(
      TagInput$4,
      {
        label: "Bullets",
        values: block.bullets ?? [],
        onChange: (v) => u({ bullets: v }),
        placeholder: "Add bullet point"
      }
    ),
    ["imageLeftTextRight", "imageRightTextLeft"].includes(block.type) && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Image URL" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          value: block.imageUrl ?? "",
          onChange: (e) => u({ imageUrl: e.target.value }),
          placeholder: "https://..."
        }
      ),
      block.imageUrl && /* @__PURE__ */ jsx(
        "img",
        {
          src: block.imageUrl,
          alt: "block preview",
          className: "mt-2 h-20 rounded border object-cover",
          onError: (e) => e.currentTarget.style.display = "none"
        }
      )
    ] }),
    block.type === "calloutCard" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Title" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: block.title ?? "",
            onChange: (e) => u({ title: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Short Text" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            value: block.shortText ?? "",
            onChange: (e) => u({ shortText: e.target.value }),
            rows: 2
          }
        )
      ] })
    ] }),
    block.type === "ctaBanner" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Title" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: block.title ?? "",
            onChange: (e) => u({ title: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Text (HTML)" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            value: block.richText ?? "",
            onChange: (e) => u({ richText: e.target.value }),
            rows: 2
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Button Text" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: block.buttonText ?? "",
              onChange: (e) => u({ buttonText: e.target.value }),
              placeholder: "Get a Quote"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Button Link" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: block.buttonLink ?? "",
              onChange: (e) => u({ buttonLink: e.target.value }),
              placeholder: "/quick-quote"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
function SectorFormDialog({
  open,
  editingItem,
  // ✅ Fix #3 — destructured so it's available for future FAQ picker use
  allFaqs = [],
  onClose,
  onSave
}) {
  const [form, setForm] = useState(defaultForm$3);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("core");
  const [newBlockType, setNewBlockType] = useState("textSection");
  const [slugManual, setSlugManual] = useState(false);
  useEffect(() => {
    if (!open) return;
    setActiveTab("core");
    if (editingItem) {
      setSlugManual(true);
      setForm({
        ...defaultForm$3,
        ...editingItem,
        recommendedServices: (editingItem.recommendedServices ?? []).map(
          toSlugStr
        ),
        featuredLocations: (editingItem.featuredLocations ?? []).map(toSlugStr),
        faqIds: (editingItem.faqIds ?? []).map(toIdStr),
        contentBlocks: (editingItem.contentBlocks ?? []).map((b) => ({
          ...b,
          bullets: (b.bullets ?? []).map(
            (x) => typeof x === "string" ? x : String(x ?? "")
          )
        }))
      });
    } else {
      setSlugManual(false);
      setForm(defaultForm$3);
    }
  }, [editingItem, open]);
  const update = (f) => setForm((p) => ({ ...p, ...f }));
  const handleNameChange = (name) => {
    update({ name, ...!slugManual && { slug: slugify$2(name) } });
  };
  const addBlock = () => {
    update({
      contentBlocks: [
        ...form.contentBlocks,
        { id: `block_${Date.now()}`, type: newBlockType }
      ]
    });
  };
  const handleSave = async (status) => {
    if (!form.name.trim()) {
      toast.error("Name is required.");
      return;
    }
    if (!form.slug.trim()) {
      toast.error("Slug is required.");
      return;
    }
    if (!form.seoTitle.trim()) {
      toast.error("SEO Title is required.");
      return;
    }
    if (!form.seoDescription.trim()) {
      toast.error("SEO Description is required.");
      return;
    }
    if (status === "published" && !form.recommendedServices.length) {
      toast.error(
        "At least one Recommended Service is required before publishing."
      );
      return;
    }
    setIsSaving(true);
    try {
      await onSave({ ...form, status });
    } finally {
      setIsSaving(false);
    }
  };
  const tabs = [
    { key: "core", label: "Core & Hero" },
    { key: "body", label: "Body Content" },
    { key: "seo", label: "SEO" },
    { key: "relations", label: "Relations & FAQs" }
  ];
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-3xl max-h-[90vh] overflow-hidden flex flex-col", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
      editingItem ? "Edit Sector" : "Create Sector",
      /* @__PURE__ */ jsx(
        Badge,
        {
          className: "ml-1",
          variant: form.status === "published" ? "default" : "secondary",
          children: form.status
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-1 border-b pb-2 flex-wrap", children: tabs.map((tab) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => setActiveTab(tab.key),
        className: `px-3 py-1.5 text-sm rounded-md font-medium transition-colors ${activeTab === tab.key ? "bg-[#134467] text-white" : "text-muted-foreground hover:bg-muted"}`,
        children: tab.label
      },
      tab.key
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "overflow-y-auto flex-1 pr-2 space-y-4 py-2", children: [
      activeTab === "core" && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx(SectionHeader$2, { title: "Core" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Name *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.name,
              onChange: (e) => handleNameChange(e.target.value),
              placeholder: "Dental Courier"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Slug *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.slug,
              onChange: (e) => {
                setSlugManual(true);
                update({
                  slug: e.target.value.toLowerCase().replace(/\s+/g, "-")
                });
              },
              placeholder: "dental",
              className: "font-mono text-sm"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Auto-generated from name. Edit to override." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Status" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: form.status,
              onValueChange: (v) => update({ status: v }),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "draft", children: "Draft" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "published", children: "Published" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Sort Order" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "number",
              value: form.sortOrder,
              onChange: (e) => update({ sortOrder: Number(e.target.value) })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(SectionHeader$2, { title: "Hero Section" }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Hero Title *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.heroTitle,
              onChange: (e) => update({ heroTitle: e.target.value }),
              placeholder: "Dental Courier Services UK"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Hero Subtitle" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.heroSubtitle,
              onChange: (e) => update({ heroSubtitle: e.target.value }),
              placeholder: "Specialist same-day deliveries for dental practices"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Hero Image URL" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.heroImage,
              onChange: (e) => update({ heroImage: e.target.value }),
              placeholder: "https://..."
            }
          ),
          form.heroImage && /* @__PURE__ */ jsx(
            "img",
            {
              src: form.heroImage,
              alt: "preview",
              className: "mt-2 h-24 rounded border object-cover w-full",
              onError: (e) => e.currentTarget.style.display = "none"
            }
          )
        ] })
      ] }),
      activeTab === "body" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Intro (HTML / Rich Text)" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              value: form.intro,
              onChange: (e) => update({ intro: e.target.value }),
              rows: 5,
              placeholder: "<p>We specialise in dental courier services...</p>",
              className: "font-mono text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(SectionHeader$2, { title: "Content Blocks" }),
        form.contentBlocks.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground italic", children: "No blocks yet. Add one below." }),
        form.contentBlocks.map((block) => /* @__PURE__ */ jsx(
          BlockEditor$2,
          {
            block,
            onChange: (b) => update({
              contentBlocks: form.contentBlocks.map(
                (x) => x.id === block.id ? b : x
              )
            }),
            onRemove: () => update({
              contentBlocks: form.contentBlocks.filter(
                (x) => x.id !== block.id
              )
            })
          },
          block.id
        )),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pt-2 border-t", children: [
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: newBlockType,
              onValueChange: (v) => setNewBlockType(v),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: "flex-1", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsx(SelectContent, { children: Object.entries(blockLabels$2).map(([k, v]) => /* @__PURE__ */ jsx(SelectItem, { value: k, children: v }, k)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", onClick: addBlock, children: [
            /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4 mr-1" }),
            "Add Block"
          ] })
        ] })
      ] }),
      activeTab === "seo" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "SEO Title *",
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "(",
              form.seoTitle.length,
              "/60)"
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.seoTitle,
              onChange: (e) => update({ seoTitle: e.target.value }),
              placeholder: "Dental Courier Services | FourSix46®",
              maxLength: 60
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "SEO Description *",
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "(",
              form.seoDescription.length,
              "/160)"
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              value: form.seoDescription,
              onChange: (e) => update({ seoDescription: e.target.value }),
              placeholder: "Same-day dental courier services across the UK...",
              maxLength: 160,
              rows: 3
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Canonical URL" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.canonicalUrl,
              onChange: (e) => update({ canonicalUrl: e.target.value }),
              placeholder: `https://couriers.foursix46.com/sectors/${form.slug || "slug"}`
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "OG Image URL" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.ogImage,
              onChange: (e) => update({ ogImage: e.target.value }),
              placeholder: "https://..."
            }
          ),
          form.ogImage && /* @__PURE__ */ jsx(
            "img",
            {
              src: form.ogImage,
              alt: "og preview",
              className: "mt-2 h-20 rounded border object-cover",
              onError: (e) => e.currentTarget.style.display = "none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 border rounded-xl", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              id: "noindex-sector",
              checked: form.noindex,
              onCheckedChange: (v) => update({ noindex: !!v })
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              Label,
              {
                htmlFor: "noindex-sector",
                className: "cursor-pointer font-medium",
                children: "No Index"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Hides page from Google. Use for drafts only." })
          ] })
        ] })
      ] }),
      activeTab === "relations" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(SectionHeader$2, { title: "Relations" }),
        /* @__PURE__ */ jsx(
          TagInput$4,
          {
            label: "Recommended Services * (enter service slugs)",
            values: form.recommendedServices,
            onChange: (v) => update({ recommendedServices: v }),
            placeholder: "e.g. same-day-courier"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-amber-600 font-medium", children: "⚠️ At least one recommended service is required before publishing." }),
        /* @__PURE__ */ jsx(
          TagInput$4,
          {
            label: "Featured Locations (enter location slugs)",
            values: form.featuredLocations,
            onChange: (v) => update({ featuredLocations: v }),
            placeholder: "e.g. cardiff, london, bristol"
          }
        ),
        /* @__PURE__ */ jsx(SectionHeader$2, { title: "FAQs" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "FAQ Section Heading" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.faqHeading,
              onChange: (e) => update({ faqHeading: e.target.value }),
              placeholder: "Sector FAQs"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          TagInput$4,
          {
            label: "FAQ IDs (Firestore document IDs)",
            values: form.faqIds,
            onChange: (v) => update({ faqIds: v }),
            placeholder: "Paste FAQ doc ID and press Enter"
          }
        ),
        allFaqs.length > 0 && /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-dashed border-slate-200 p-3 bg-slate-50", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-[#134467] uppercase tracking-wide mb-2", children: "Available FAQs — click to copy ID" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 max-h-40 overflow-y-auto", children: allFaqs.map((faq) => {
            var _a;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                title: faq.question,
                onClick: () => {
                  if (!form.faqIds.includes(faq.id)) {
                    update({ faqIds: [...form.faqIds, faq.id] });
                  }
                },
                className: "text-xs font-mono bg-white border border-slate-200 px-2 py-1\n                          rounded-md hover:border-[#134467] hover:bg-[#134467]/5 transition\n                          max-w-[200px] truncate text-left",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#48AEDD]", children: faq.id }),
                  /* @__PURE__ */ jsxs("span", { className: "text-slate-400 ml-1 not-truncate", children: [
                    "— ",
                    (_a = faq.question) == null ? void 0 : _a.slice(0, 30),
                    "…"
                  ] })
                ]
              },
              faq.id
            );
          }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(DialogFooter, { className: "border-t pt-4 gap-2", children: [
      /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClose, disabled: isSaving, children: "Cancel" }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          disabled: isSaving,
          onClick: () => handleSave("draft"),
          children: [
            isSaving ? /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 mr-1 animate-spin" }) : null,
            "Save as Draft"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Button,
        {
          className: "bg-[#134467] hover:bg-[#0e3352] text-white",
          disabled: isSaving,
          onClick: () => handleSave("published"),
          children: [
            isSaving ? /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 mr-1 animate-spin" }) : null,
            isSaving ? "Saving…" : editingItem ? "Update & Publish" : "Create & Publish"
          ]
        }
      )
    ] })
  ] }) });
}
const blockLabels$1 = {
  textSection: "Text Section",
  bulletSection: "Bullet Section",
  imageLeftTextRight: "Image Left + Text Right",
  imageRightTextLeft: "Image Right + Text Left",
  calloutCard: "Callout Card",
  ctaBanner: "CTA Banner"
};
const defaultForm$2 = {
  name: "",
  slug: "",
  status: "draft",
  country: "",
  sortOrder: 0,
  heroTitle: "",
  heroSubtitle: "",
  heroImage: "",
  intro: "",
  contentBlocks: [],
  // ✅ Added
  postcodeCoverage: "",
  nearbyAreas: [],
  serviceRadiusMiles: "",
  mapEmbedUrl: "",
  recommendedServices: [],
  seoTitle: "",
  seoDescription: "",
  canonicalUrl: "",
  ogImage: "",
  noindex: false,
  faqIds: [],
  faqHeading: "Local FAQs"
};
const slugify$1 = (text) => text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_]+/g, "-").replace(/^-+|-+$/g, "");
const SectionHeader$1 = ({ title }) => /* @__PURE__ */ jsx("div", { className: "col-span-2 mt-2", children: /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-widest text-[#134467] border-b-2 border-[#F1C40F] pb-1", children: title }) });
const TagInput$3 = ({
  label,
  values,
  onChange,
  placeholder
}) => {
  const [input, setInput] = useState("");
  const add = () => {
    const t = input.trim();
    if (t && !values.includes(t)) onChange([...values, t]);
    setInput("");
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Label, { className: "mb-1 block", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-2", children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), add()),
          placeholder,
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ jsx(Button, { type: "button", size: "sm", variant: "outline", onClick: add, children: /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: values.map((v) => /* @__PURE__ */ jsxs(
      Badge,
      {
        variant: "secondary",
        className: "flex items-center gap-1 pr-1",
        children: [
          v,
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => onChange(values.filter((x) => x !== v)),
              className: "ml-1 hover:text-red-500",
              children: /* @__PURE__ */ jsx(X, { className: "w-3 h-3" })
            }
          )
        ]
      },
      v
    )) })
  ] });
};
const BlockEditor$1 = ({
  block,
  onChange,
  onRemove
}) => {
  const update = (fields) => onChange({ ...block, ...fields });
  return /* @__PURE__ */ jsxs("div", { className: "border rounded-xl p-4 space-y-3 bg-muted/30", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(GripVertical, { className: "w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx(Badge, { variant: "outline", children: blockLabels$1[block.type] })
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "button", size: "sm", variant: "ghost", onClick: onRemove, children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 text-red-500" }) })
    ] }),
    [
      "textSection",
      "bulletSection",
      "imageLeftTextRight",
      "imageRightTextLeft"
    ].includes(block.type) && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Heading" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          value: block.heading ?? "",
          onChange: (e) => update({ heading: e.target.value }),
          placeholder: "e.g. Why Choose Us in Cardiff"
        }
      )
    ] }),
    ["textSection", "imageLeftTextRight", "imageRightTextLeft"].includes(
      block.type
    ) && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Content (rich text / HTML)" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          value: block.richText ?? "",
          onChange: (e) => update({ richText: e.target.value }),
          rows: 4,
          placeholder: "<p>Content here...</p>"
        }
      )
    ] }),
    block.type === "bulletSection" && /* @__PURE__ */ jsx(
      TagInput$3,
      {
        label: "Bullets (press Enter to add)",
        values: block.bullets ?? [],
        onChange: (v) => update({ bullets: v }),
        placeholder: "Add bullet point"
      }
    ),
    ["imageLeftTextRight", "imageRightTextLeft"].includes(block.type) && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Image URL" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          value: block.imageUrl ?? "",
          onChange: (e) => update({ imageUrl: e.target.value }),
          placeholder: "https://..."
        }
      ),
      block.imageUrl && /* @__PURE__ */ jsx(
        "img",
        {
          src: block.imageUrl,
          alt: "block preview",
          className: "mt-2 h-20 rounded border object-cover",
          onError: (e) => e.currentTarget.style.display = "none"
        }
      )
    ] }),
    block.type === "calloutCard" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Title" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: block.title ?? "",
            onChange: (e) => update({ title: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Short Text" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            value: block.shortText ?? "",
            onChange: (e) => update({ shortText: e.target.value }),
            rows: 2
          }
        )
      ] })
    ] }),
    block.type === "ctaBanner" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Title" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: block.title ?? "",
            onChange: (e) => update({ title: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Text" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            value: block.richText ?? "",
            onChange: (e) => update({ richText: e.target.value }),
            rows: 2
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Button Text" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: block.buttonText ?? "",
              onChange: (e) => update({ buttonText: e.target.value }),
              placeholder: "Get a Quote"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Button Link" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: block.buttonLink ?? "",
              onChange: (e) => update({ buttonLink: e.target.value }),
              placeholder: "/quick-quote"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
function LocationFormDialog({
  open,
  editingItem,
  onClose,
  onSave
}) {
  const [form, setForm] = useState(defaultForm$2);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("core");
  const [slugManual, setSlugManual] = useState(false);
  const [newBlockType, setNewBlockType] = useState("textSection");
  useEffect(() => {
    if (!open) return;
    setActiveTab("core");
    if (editingItem) {
      setSlugManual(true);
      setForm({
        ...defaultForm$2,
        ...editingItem,
        nearbyAreas: (editingItem.nearbyAreas ?? []).map(
          (v) => typeof v === "string" ? v : String(v ?? "")
        ),
        recommendedServices: (editingItem.recommendedServices ?? []).map(
          (v) => typeof v === "string" ? v : (v == null ? void 0 : v.slug) ?? (v == null ? void 0 : v.id) ?? String(v ?? "")
        ),
        faqIds: (editingItem.faqIds ?? []).map(
          (v) => typeof v === "string" ? v : (v == null ? void 0 : v.id) ?? (v == null ? void 0 : v.slug) ?? String(v ?? "")
        ),
        // ✅ Normalise contentBlocks on edit load
        contentBlocks: (editingItem.contentBlocks ?? []).map((b) => ({
          ...b,
          bullets: (b.bullets ?? []).map(
            (x) => typeof x === "string" ? x : String(x ?? "")
          )
        }))
      });
    } else {
      setSlugManual(false);
      setForm(defaultForm$2);
    }
  }, [editingItem, open]);
  const update = (f) => setForm((p) => ({ ...p, ...f }));
  const handleNameChange = (name) => {
    update({ name, ...!slugManual && { slug: slugify$1(name) } });
  };
  const addBlock = () => {
    update({
      contentBlocks: [
        ...form.contentBlocks,
        { id: `block_${Date.now()}`, type: newBlockType }
      ]
    });
  };
  const updateBlock = (id, block) => {
    update({
      contentBlocks: form.contentBlocks.map((b) => b.id === id ? block : b)
    });
  };
  const removeBlock = (id) => {
    update({ contentBlocks: form.contentBlocks.filter((b) => b.id !== id) });
  };
  const handleSave = async (status) => {
    if (!form.name.trim()) {
      toast.error("Name is required.");
      return;
    }
    if (!form.slug.trim()) {
      toast.error("Slug is required.");
      return;
    }
    if (!form.heroTitle.trim()) {
      toast.error("Hero Title is required.");
      return;
    }
    if (!form.seoTitle.trim()) {
      toast.error("SEO Title is required.");
      return;
    }
    if (!form.seoDescription.trim()) {
      toast.error("SEO Description is required.");
      return;
    }
    if (status === "published" && !form.recommendedServices.length) {
      toast.error(
        "At least one Recommended Service is required before publishing."
      );
      return;
    }
    setIsSaving(true);
    try {
      await onSave({ ...form, status });
    } finally {
      setIsSaving(false);
    }
  };
  const tabs = [
    { key: "core", label: "Core & Hero" },
    { key: "body", label: "Body Content" },
    // ✅ New tab for intro + contentBlocks
    { key: "local", label: "Local Details" },
    { key: "seo", label: "SEO" },
    { key: "relations", label: "Relations & FAQs" }
  ];
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-3xl max-h-[90vh] overflow-hidden flex flex-col", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
      editingItem ? "Edit Location" : "Create Location",
      /* @__PURE__ */ jsx(
        Badge,
        {
          className: "ml-1",
          variant: form.status === "published" ? "default" : "secondary",
          children: form.status
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-1 border-b pb-2 flex-wrap", children: tabs.map((tab) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => setActiveTab(tab.key),
        className: `px-3 py-1.5 text-sm rounded-md font-medium transition-colors ${activeTab === tab.key ? "bg-[#134467] text-white" : "text-muted-foreground hover:bg-muted"}`,
        children: tab.label
      },
      tab.key
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "overflow-y-auto flex-1 pr-2 space-y-4 py-2", children: [
      activeTab === "core" && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx(SectionHeader$1, { title: "Core" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Name *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.name,
              onChange: (e) => handleNameChange(e.target.value),
              placeholder: "e.g. Cardiff"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Slug *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.slug,
              onChange: (e) => {
                setSlugManual(true);
                update({
                  slug: e.target.value.toLowerCase().replace(/\s+/g, "-")
                });
              },
              placeholder: "cardiff",
              className: "font-mono text-sm"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Auto-generated from name. Edit to override." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Country" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: form.country,
              onValueChange: (v) => update({ country: v }),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select country" }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "England", children: "England" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Wales", children: "Wales" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Scotland", children: "Scotland" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Northern Ireland", children: "Northern Ireland" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Status" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: form.status,
              onValueChange: (v) => update({ status: v }),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "draft", children: "Draft" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "published", children: "Published" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Sort Order" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "number",
              value: form.sortOrder,
              onChange: (e) => update({ sortOrder: Number(e.target.value) })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(SectionHeader$1, { title: "Hero Section" }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Hero Title *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.heroTitle,
              onChange: (e) => update({ heroTitle: e.target.value }),
              placeholder: "e.g. Same Day Courier Cardiff"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Hero Subtitle" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.heroSubtitle,
              onChange: (e) => update({ heroSubtitle: e.target.value }),
              placeholder: "e.g. Fast, reliable courier across Cardiff and surrounding areas"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Hero Image URL" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.heroImage,
              onChange: (e) => update({ heroImage: e.target.value }),
              placeholder: "e.g. https://cdn.example.com/cardiff-hero.jpg"
            }
          ),
          form.heroImage && /* @__PURE__ */ jsx(
            "img",
            {
              src: form.heroImage,
              alt: "Hero preview",
              className: "mt-2 h-24 rounded border object-cover w-full",
              onError: (e) => e.currentTarget.style.display = "none"
            }
          )
        ] })
      ] }),
      activeTab === "body" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Intro (HTML / Rich Text)" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              value: form.intro,
              onChange: (e) => update({ intro: e.target.value }),
              rows: 5,
              placeholder: "e.g. <p>We offer same day courier services across Cardiff...</p>",
              className: "font-mono text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(SectionHeader$1, { title: "Content Blocks" }),
        form.contentBlocks.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground italic", children: "No blocks yet. Add one below." }),
        form.contentBlocks.map((block) => /* @__PURE__ */ jsx(
          BlockEditor$1,
          {
            block,
            onChange: (b) => updateBlock(block.id, b),
            onRemove: () => removeBlock(block.id)
          },
          block.id
        )),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pt-2 border-t", children: [
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: newBlockType,
              onValueChange: (v) => setNewBlockType(v),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: "flex-1", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsx(SelectContent, { children: Object.entries(blockLabels$1).map(([key, label]) => /* @__PURE__ */ jsx(SelectItem, { value: key, children: label }, key)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(Button, { type: "button", onClick: addBlock, variant: "outline", children: [
            /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4 mr-1" }),
            " Add Block"
          ] })
        ] })
      ] }),
      activeTab === "local" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Postcode Coverage" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.postcodeCoverage,
              onChange: (e) => update({ postcodeCoverage: e.target.value }),
              placeholder: "e.g. CF, NP, SA"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "e.g. Comma-separated postcode prefixes" })
        ] }),
        /* @__PURE__ */ jsx(
          TagInput$3,
          {
            label: "Nearby Areas",
            values: form.nearbyAreas,
            onChange: (v) => update({ nearbyAreas: v }),
            placeholder: "e.g. Penylan, Canton, Pontcanna"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Service Radius (miles)" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "number",
                value: form.serviceRadiusMiles,
                onChange: (e) => update({
                  serviceRadiusMiles: e.target.value ? Number(e.target.value) : ""
                }),
                placeholder: "e.g. 25"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Map Embed URL" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                value: form.mapEmbedUrl,
                onChange: (e) => update({ mapEmbedUrl: e.target.value }),
                placeholder: "e.g. https://maps.google.com/embed?..."
              }
            )
          ] })
        ] }),
        form.mapEmbedUrl && /* @__PURE__ */ jsx(
          "iframe",
          {
            src: form.mapEmbedUrl,
            className: "w-full h-48 rounded border",
            title: "Map preview"
          }
        )
      ] }),
      activeTab === "seo" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "SEO Title *",
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "(",
              form.seoTitle.length,
              "/60)"
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.seoTitle,
              onChange: (e) => update({ seoTitle: e.target.value }),
              placeholder: "e.g. Same Day Courier Cardiff | FourSix46®",
              maxLength: 60
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "SEO Description *",
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "(",
              form.seoDescription.length,
              "/160)"
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              value: form.seoDescription,
              onChange: (e) => update({ seoDescription: e.target.value }),
              placeholder: "e.g. Fast same-day courier services in Cardiff. Collection within 60 minutes...",
              maxLength: 160,
              rows: 3
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Canonical URL" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.canonicalUrl,
              onChange: (e) => update({ canonicalUrl: e.target.value }),
              placeholder: `e.g. https://couriers.foursix46.com/locations/${form.slug || "slug"}`
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "OG Image URL" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.ogImage,
              onChange: (e) => update({ ogImage: e.target.value }),
              placeholder: "e.g. https://cdn.example.com/og-cardiff.jpg"
            }
          ),
          form.ogImage && /* @__PURE__ */ jsx(
            "img",
            {
              src: form.ogImage,
              alt: "OG preview",
              className: "mt-2 h-20 rounded border object-cover",
              onError: (e) => e.currentTarget.style.display = "none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 border rounded-xl", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              id: "noindex-loc",
              checked: form.noindex,
              onCheckedChange: (v) => update({ noindex: !!v })
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              Label,
              {
                htmlFor: "noindex-loc",
                className: "cursor-pointer font-medium",
                children: "No Index"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "e.g. Enable only for draft or test pages — hides from Google" })
          ] })
        ] })
      ] }),
      activeTab === "relations" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(SectionHeader$1, { title: "Relations" }),
        /* @__PURE__ */ jsx(
          TagInput$3,
          {
            label: "Recommended Services * (service slugs)",
            values: form.recommendedServices,
            onChange: (v) => update({ recommendedServices: v }),
            placeholder: "e.g. same-day-courier, next-day-courier"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-amber-600 font-medium", children: "⚠️ At least one recommended service required before publishing." }),
        /* @__PURE__ */ jsx(SectionHeader$1, { title: "FAQs" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "FAQ Heading" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.faqHeading,
              onChange: (e) => update({ faqHeading: e.target.value }),
              placeholder: "e.g. Local FAQs"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          TagInput$3,
          {
            label: "FAQ IDs (Firestore document IDs)",
            values: form.faqIds,
            onChange: (v) => update({ faqIds: v }),
            placeholder: "e.g. Paste FAQ doc ID and press Enter"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "💡 Tip: Go to FAQs section, copy the document ID from the table, and paste it here to link FAQs to this location." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(DialogFooter, { className: "border-t pt-4 gap-2", children: [
      /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClose, disabled: isSaving, children: "Cancel" }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          disabled: isSaving,
          onClick: () => handleSave("draft"),
          children: [
            isSaving && /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 mr-1 animate-spin" }),
            "Save as Draft"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Button,
        {
          className: "bg-[#134467] hover:bg-[#0e3352] text-white",
          disabled: isSaving,
          onClick: () => handleSave("published"),
          children: [
            isSaving && /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 mr-1 animate-spin" }),
            isSaving ? "Saving…" : editingItem ? "Update & Publish" : "Create & Publish"
          ]
        }
      )
    ] })
  ] }) });
}
const blockLabels = {
  textSection: "Text Section",
  bulletSection: "Bullet Section",
  imageLeftTextRight: "Image Left + Text Right",
  imageRightTextLeft: "Image Right + Text Left",
  calloutCard: "Callout Card",
  ctaBanner: "CTA Banner"
};
const defaultForm$1 = {
  locationSlug: "",
  serviceSlug: "",
  status: "draft",
  pageLabel: "",
  heroTitle: "",
  heroSubtitle: "",
  heroImage: "",
  intro: "",
  localProofPoints: [],
  coverageAreasOverride: [],
  serviceDetailsOverride: "",
  contentBlocks: [],
  ctaPrimaryText: "Get a Quote",
  ctaPrimaryLink: "/quick-quote",
  seoTitle: "",
  seoDescription: "",
  canonicalUrl: "",
  ogImage: "",
  noindex: false,
  faqIds: [],
  faqHeading: "FAQs"
};
const SectionHeader = ({ title }) => /* @__PURE__ */ jsx("div", { className: "col-span-2 mt-2", children: /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-widest text-[#134467] border-b-2 border-[#F1C40F] pb-1", children: title }) });
const TagInput$2 = ({
  label,
  values,
  onChange,
  placeholder
}) => {
  const [input, setInput] = useState("");
  const add = () => {
    const t = input.trim();
    if (t && !values.includes(t)) onChange([...values, t]);
    setInput("");
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Label, { className: "mb-1 block", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-2", children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), add()),
          placeholder,
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ jsx(Button, { type: "button", size: "sm", variant: "outline", onClick: add, children: /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: values.map((v) => /* @__PURE__ */ jsxs(
      Badge,
      {
        variant: "secondary",
        className: "flex items-center gap-1 pr-1",
        children: [
          v,
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => onChange(values.filter((x) => x !== v)),
              className: "ml-1 hover:text-red-500",
              children: /* @__PURE__ */ jsx(X, { className: "w-3 h-3" })
            }
          )
        ]
      },
      v
    )) })
  ] });
};
const BlockEditor = ({
  block,
  onChange,
  onRemove
}) => {
  const u = (f) => onChange({ ...block, ...f });
  return /* @__PURE__ */ jsxs("div", { className: "border rounded-xl p-4 space-y-3 bg-muted/30", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(GripVertical, { className: "w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx(Badge, { variant: "outline", children: blockLabels[block.type] })
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "button", size: "sm", variant: "ghost", onClick: onRemove, children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 text-red-500" }) })
    ] }),
    [
      "textSection",
      "bulletSection",
      "imageLeftTextRight",
      "imageRightTextLeft"
    ].includes(block.type) && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Heading" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          value: block.heading ?? "",
          onChange: (e) => u({ heading: e.target.value })
        }
      )
    ] }),
    ["textSection", "imageLeftTextRight", "imageRightTextLeft"].includes(
      block.type
    ) && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Content (HTML)" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          value: block.richText ?? "",
          onChange: (e) => u({ richText: e.target.value }),
          rows: 3
        }
      )
    ] }),
    block.type === "bulletSection" && /* @__PURE__ */ jsx(
      TagInput$2,
      {
        label: "Bullets",
        values: block.bullets ?? [],
        onChange: (v) => u({ bullets: v }),
        placeholder: "Add bullet"
      }
    ),
    ["imageLeftTextRight", "imageRightTextLeft"].includes(block.type) && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Image URL" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          value: block.imageUrl ?? "",
          onChange: (e) => u({ imageUrl: e.target.value })
        }
      )
    ] }),
    block.type === "calloutCard" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Title" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: block.title ?? "",
            onChange: (e) => u({ title: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Short Text" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            value: block.shortText ?? "",
            onChange: (e) => u({ shortText: e.target.value }),
            rows: 2
          }
        )
      ] })
    ] }),
    block.type === "ctaBanner" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Title" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: block.title ?? "",
            onChange: (e) => u({ title: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Text" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            value: block.richText ?? "",
            onChange: (e) => u({ richText: e.target.value }),
            rows: 2
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Button Text" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: block.buttonText ?? "",
              onChange: (e) => u({ buttonText: e.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Button Link" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: block.buttonLink ?? "",
              onChange: (e) => u({ buttonLink: e.target.value })
            }
          )
        ] })
      ] })
    ] })
  ] });
};
function LandingPageFormDialog({
  open,
  editingItem,
  existingPairs = [],
  onClose,
  onSave
}) {
  const [form, setForm] = useState(defaultForm$1);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("core");
  const [newBlockType, setNewBlockType] = useState("textSection");
  useEffect(() => {
    setForm(editingItem ? { ...defaultForm$1, ...editingItem } : defaultForm$1);
    setActiveTab("core");
  }, [editingItem, open]);
  const update = (f) => setForm((p) => ({ ...p, ...f }));
  const addProofPoint = () => {
    update({
      localProofPoints: [
        ...form.localProofPoints,
        { id: `pp_${Date.now()}`, title: "", description: "" }
      ]
    });
  };
  const updateProofPoint = (id, fields) => {
    update({
      localProofPoints: form.localProofPoints.map(
        (p) => p.id === id ? { ...p, ...fields } : p
      )
    });
  };
  const handleSave = async (status) => {
    if (!form.locationSlug || !form.serviceSlug) {
      alert("Location slug and Service slug are required.");
      return;
    }
    if (!form.intro) {
      alert("Intro content is required (must be unique per landing page).");
      return;
    }
    if (!form.seoTitle || !form.seoDescription) {
      alert("SEO Title and Description are required.");
      return;
    }
    const duplicate = existingPairs.find(
      (p) => p.locationSlug === form.locationSlug && p.serviceSlug === form.serviceSlug && p.id !== (editingItem == null ? void 0 : editingItem.id)
    );
    if (duplicate) {
      alert(
        `A landing page for "${form.locationSlug} × ${form.serviceSlug}" already exists. Each location+service combination must be unique.`
      );
      return;
    }
    setIsSaving(true);
    try {
      await onSave({ ...form, status });
    } finally {
      setIsSaving(false);
    }
  };
  const tabs = [
    { key: "core", label: "Core & Hero" },
    { key: "content", label: "Page Content" },
    { key: "seo", label: "SEO" },
    { key: "faqs", label: "FAQs & CTA" }
  ];
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-3xl max-h-[90vh] overflow-hidden flex flex-col", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsxs(DialogTitle, { children: [
      editingItem ? "Edit Landing Page" : "Create Landing Page",
      form.locationSlug && form.serviceSlug && /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "ml-2 font-mono text-xs", children: [
        "/locations/",
        form.locationSlug,
        "/",
        form.serviceSlug
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-1 border-b pb-2 flex-wrap", children: tabs.map((tab) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => setActiveTab(tab.key),
        className: `px-3 py-1.5 text-sm rounded-md font-medium transition-colors ${activeTab === tab.key ? "bg-[#134467] text-white" : "text-muted-foreground hover:bg-muted"}`,
        children: tab.label
      },
      tab.key
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "overflow-y-auto flex-1 pr-2 space-y-4 py-2", children: [
      activeTab === "core" && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx(SectionHeader, { title: "Page Identity" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "Location Slug *",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-xs text-amber-600", children: "(must match existing location)" })
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.locationSlug,
              onChange: (e) => update({
                locationSlug: e.target.value.toLowerCase().replace(/\s+/g, "-")
              }),
              placeholder: "cardiff"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "Service Slug *",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-xs text-amber-600", children: "(must match existing service)" })
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.serviceSlug,
              onChange: (e) => update({
                serviceSlug: e.target.value.toLowerCase().replace(/\s+/g, "-")
              }),
              placeholder: "same-day-courier"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Page Label (internal name)" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.pageLabel,
              onChange: (e) => update({ pageLabel: e.target.value }),
              placeholder: "e.g. Cardiff × Same Day — v2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Status" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: form.status,
              onValueChange: (v) => update({ status: v }),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "draft", children: "Draft" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "published", children: "Published" })
                ] })
              ]
            }
          )
        ] }),
        form.locationSlug && form.serviceSlug && /* @__PURE__ */ jsxs("div", { className: "col-span-2 bg-blue-50 rounded-lg p-3 text-sm", children: [
          "🔗 Will be published at:",
          " ",
          /* @__PURE__ */ jsxs("code", { className: "font-mono text-blue-700", children: [
            "/locations/",
            form.locationSlug,
            "/",
            form.serviceSlug
          ] })
        ] }),
        /* @__PURE__ */ jsx(SectionHeader, { title: "Hero Section" }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Hero Title *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.heroTitle,
              onChange: (e) => update({ heroTitle: e.target.value }),
              placeholder: "Same Day Courier Cardiff"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Hero Subtitle" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.heroSubtitle,
              onChange: (e) => update({ heroSubtitle: e.target.value }),
              placeholder: "Reliable collections across Cardiff within 60 minutes"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Hero Image URL" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.heroImage,
              onChange: (e) => update({ heroImage: e.target.value }),
              placeholder: "https://..."
            }
          ),
          form.heroImage && /* @__PURE__ */ jsx(
            "img",
            {
              src: form.heroImage,
              alt: "preview",
              className: "mt-2 h-24 rounded border object-cover"
            }
          )
        ] })
      ] }),
      activeTab === "content" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "Intro *",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-xs text-amber-600", children: "(must be unique — not copy-pasted from another page)" })
          ] }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              value: form.intro,
              onChange: (e) => update({ intro: e.target.value }),
              rows: 5,
              placeholder: "<p>For same day courier services in Cardiff, Route46 provides...</p>",
              className: "font-mono text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(SectionHeader, { title: "Local Proof Points" }),
        form.localProofPoints.map((pp) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "border rounded-xl p-3 space-y-2 bg-muted/30",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "Proof Point" }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "ghost",
                    onClick: () => update({
                      localProofPoints: form.localProofPoints.filter(
                        (x) => x.id !== pp.id
                      )
                    }),
                    children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 text-red-500" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Title" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    value: pp.title,
                    onChange: (e) => updateProofPoint(pp.id, { title: e.target.value }),
                    placeholder: "5-Star Rated in Cardiff"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Description" }),
                /* @__PURE__ */ jsx(
                  Textarea,
                  {
                    value: pp.description,
                    onChange: (e) => updateProofPoint(pp.id, { description: e.target.value }),
                    rows: 2,
                    placeholder: "Over 200 deliveries completed in the Cardiff area..."
                  }
                )
              ] })
            ]
          },
          pp.id
        )),
        /* @__PURE__ */ jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            onClick: addProofPoint,
            className: "w-full",
            children: [
              /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4 mr-2" }),
              " Add Proof Point"
            ]
          }
        ),
        /* @__PURE__ */ jsx(SectionHeader, { title: "Overrides" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "Coverage Areas Override",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "(if different from base location)" })
          ] }),
          /* @__PURE__ */ jsx(
            TagInput$2,
            {
              label: "",
              values: form.coverageAreasOverride,
              onChange: (v) => update({ coverageAreasOverride: v }),
              placeholder: "e.g. Penylan, Canton"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "Service Details Override",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "(if different from base service)" })
          ] }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              value: form.serviceDetailsOverride,
              onChange: (e) => update({ serviceDetailsOverride: e.target.value }),
              rows: 3,
              placeholder: "<p>For Cardiff specifically, we offer...</p>",
              className: "font-mono text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(SectionHeader, { title: "Content Blocks" }),
        form.contentBlocks.map((block) => /* @__PURE__ */ jsx(
          BlockEditor,
          {
            block,
            onChange: (b) => update({
              contentBlocks: form.contentBlocks.map(
                (x) => x.id === block.id ? b : x
              )
            }),
            onRemove: () => update({
              contentBlocks: form.contentBlocks.filter(
                (x) => x.id !== block.id
              )
            })
          },
          block.id
        )),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pt-2 border-t", children: [
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: newBlockType,
              onValueChange: (v) => setNewBlockType(v),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: "flex-1", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsx(SelectContent, { children: Object.entries(blockLabels).map(([k, v]) => /* @__PURE__ */ jsx(SelectItem, { value: k, children: v }, k)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => update({
                contentBlocks: [
                  ...form.contentBlocks,
                  { id: `block_${Date.now()}`, type: newBlockType }
                ]
              }),
              children: [
                /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4 mr-1" }),
                "Add Block"
              ]
            }
          )
        ] })
      ] }),
      activeTab === "seo" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "SEO Title *",
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "(",
              form.seoTitle.length,
              "/60)"
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.seoTitle,
              onChange: (e) => update({ seoTitle: e.target.value }),
              placeholder: "Same Day Courier Cardiff | Route46 | FourSix46®",
              maxLength: 60
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "SEO Description *",
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "(",
              form.seoDescription.length,
              "/160)"
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              value: form.seoDescription,
              onChange: (e) => update({ seoDescription: e.target.value }),
              placeholder: "Fast same-day courier Cardiff. Route46 | FourSix46® collects within 60 minutes...",
              maxLength: 160,
              rows: 3
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Canonical URL" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.canonicalUrl,
              onChange: (e) => update({ canonicalUrl: e.target.value }),
              placeholder: `https://couriers.route46couriers.co.uk/locations/${form.locationSlug}/${form.serviceSlug}`
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "OG Image URL" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.ogImage,
              onChange: (e) => update({ ogImage: e.target.value }),
              placeholder: "https://..."
            }
          ),
          form.ogImage && /* @__PURE__ */ jsx(
            "img",
            {
              src: form.ogImage,
              alt: "og",
              className: "mt-2 h-20 rounded border object-cover"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 border rounded-xl", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              id: "noindex-lp",
              checked: form.noindex,
              onCheckedChange: (v) => update({ noindex: !!v })
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              Label,
              {
                htmlFor: "noindex-lp",
                className: "cursor-pointer font-medium",
                children: "No Index"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Hides from Google. Use for drafts only." })
          ] })
        ] })
      ] }),
      activeTab === "faqs" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(SectionHeader, { title: "CTA" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "CTA Button Text" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                value: form.ctaPrimaryText,
                onChange: (e) => update({ ctaPrimaryText: e.target.value }),
                placeholder: "Get a Quote"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "CTA Button Link" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                value: form.ctaPrimaryLink,
                onChange: (e) => update({ ctaPrimaryLink: e.target.value }),
                placeholder: "/quick-quote"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(SectionHeader, { title: "FAQs" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "FAQ Section Heading" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              value: form.faqHeading,
              onChange: (e) => update({ faqHeading: e.target.value }),
              placeholder: "FAQs"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          TagInput$2,
          {
            label: "FAQ IDs (Firestore document IDs)",
            values: form.faqIds,
            onChange: (v) => update({ faqIds: v }),
            placeholder: "Paste FAQ doc ID and press Enter"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "💡 Go to FAQs section, copy the Firestore doc ID and paste it here." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(DialogFooter, { className: "border-t pt-4 gap-2", children: [
      /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          disabled: isSaving,
          onClick: () => handleSave("draft"),
          children: "Save as Draft"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          className: "bg-[#134467] hover:bg-[#0e3352]",
          disabled: isSaving,
          onClick: () => handleSave("published"),
          children: isSaving ? "Saving..." : editingItem ? "Update & Publish" : "Create & Publish"
        }
      )
    ] })
  ] }) });
}
const CopyButton = ({ value }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const el = document.createElement("textarea");
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: handleCopy,
      title: copied ? "Copied!" : "Copy to clipboard",
      className: `flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold
        px-3 py-2 rounded-lg border transition-all ${copied ? "bg-green-50 border-green-300 text-green-700" : "bg-white border-slate-200 text-slate-500 hover:border-[#134467] hover:text-[#134467]"}`,
      children: copied ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5" }),
        "Copied!"
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Copy, { className: "w-3.5 h-3.5" }),
        "Copy ID"
      ] })
    }
  );
};
const TagInput$1 = ({
  label,
  values,
  onChange,
  placeholder
}) => {
  const [input, setInput] = useState("");
  const add = () => {
    const t = input.trim().toLowerCase();
    if (t && !values.includes(t)) onChange([...values, t]);
    setInput("");
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Label, { className: "mb-1 block", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-2", children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), add()),
          placeholder,
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ jsx(Button, { type: "button", size: "sm", variant: "outline", onClick: add, children: /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: values.map((v) => /* @__PURE__ */ jsxs(
      Badge,
      {
        variant: "secondary",
        className: "flex items-center gap-1 pr-1 capitalize",
        children: [
          v,
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => onChange(values.filter((x) => x !== v)),
              className: "ml-1 hover:text-red-500",
              children: /* @__PURE__ */ jsx(X, { className: "w-3 h-3" })
            }
          )
        ]
      },
      v
    )) }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Suggested: insurance, pricing, tracking, vehicles, delivery, coverage" })
  ] });
};
const defaultForm = {
  question: "",
  answer: "",
  status: "draft",
  tags: [],
  sortOrder: 0
};
function FaqFormDialog({ open, editingItem, onClose, onSave }) {
  const [form, setForm] = useState(defaultForm);
  const [sortOrderStr, setSortOrderStr] = useState("0");
  const [isSaving, setIsSaving] = useState(false);
  const formRef = useRef(form);
  const onSaveRef = useRef(onSave);
  formRef.current = form;
  onSaveRef.current = onSave;
  const editingId = (editingItem == null ? void 0 : editingItem.id) ?? null;
  useEffect(() => {
    if (!open) return;
    const next = editingItem ? {
      ...defaultForm,
      ...editingItem,
      tags: (editingItem.tags ?? []).map(
        (t) => typeof t === "string" ? t : String(t)
      )
    } : defaultForm;
    setForm(next);
    setSortOrderStr(String(next.sortOrder ?? 0));
  }, [editingId, open]);
  const update = (f) => setForm((p) => ({ ...p, ...f }));
  const handleSortOrderChange = (raw) => {
    setSortOrderStr(raw);
    const parsed = parseInt(raw, 10);
    update({ sortOrder: isNaN(parsed) ? 0 : parsed });
  };
  const handleSave = async (status) => {
    const currentForm = formRef.current;
    const save = onSaveRef.current;
    console.log("[handleSave] currentForm:", currentForm);
    if (!currentForm.question.trim()) {
      alert("Question is required.");
      return;
    }
    if (!currentForm.answer.trim()) {
      alert("Answer is required.");
      return;
    }
    setIsSaving(true);
    try {
      await save({
        ...currentForm,
        status,
        ...(editingItem == null ? void 0 : editingItem.id) ? { id: editingItem.id } : {}
      });
    } finally {
      setIsSaving(false);
    }
  };
  const questionLen = form.question.length;
  const answerLen = form.answer.length;
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
      editingItem ? "Edit FAQ" : "Create FAQ",
      /* @__PURE__ */ jsx(
        Badge,
        {
          variant: form.status === "published" ? "default" : "secondary",
          children: form.status
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "overflow-y-auto flex-1 pr-2 space-y-5 py-2", children: [
      (editingItem == null ? void 0 : editingItem.id) && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-wide mb-1", children: "FAQ Document ID" }),
          /* @__PURE__ */ jsx("code", { className: "text-sm font-mono text-[#134467] break-all select-all", children: editingItem.id })
        ] }),
        /* @__PURE__ */ jsx(CopyButton, { value: editingItem.id })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(Label, { className: "font-semibold", children: [
          "Question *",
          " ",
          /* @__PURE__ */ jsxs(
            "span",
            {
              className: `text-xs font-normal ${questionLen > 200 ? "text-red-500" : "text-muted-foreground"}`,
              children: [
                "(",
                questionLen,
                " chars)"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: form.question,
            onChange: (e) => update({ question: e.target.value }),
            placeholder: "What areas do you cover for same day courier services?",
            className: "mt-1"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(Label, { className: "font-semibold", children: [
          "Answer (HTML / Rich Text) *",
          " ",
          /* @__PURE__ */ jsxs(
            "span",
            {
              className: `text-xs font-normal ${answerLen > 2e3 ? "text-amber-500" : "text-muted-foreground"}`,
              children: [
                "(",
                answerLen,
                " chars)"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            value: form.answer,
            onChange: (e) => update({ answer: e.target.value }),
            rows: 6,
            placeholder: "<p>We cover all major UK cities including Cardiff, London, Bristol...</p>",
            className: "mt-1 font-mono text-sm"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Supports HTML. Rendered in an accordion with FAQPage JSON-LD schema." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Status" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: form.status,
              onValueChange: (v) => update({ status: v }),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "draft", children: "Draft" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "published", children: "Published" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "Sort Order",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "(lower = shown first)" })
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "number",
              value: sortOrderStr,
              onChange: (e) => handleSortOrderChange(e.target.value),
              onBlur: () => {
                const parsed = parseInt(sortOrderStr, 10);
                const safe = isNaN(parsed) ? 0 : parsed;
                setSortOrderStr(String(safe));
                update({ sortOrder: safe });
              },
              min: 0,
              placeholder: "0"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        TagInput$1,
        {
          label: "Tags/FAQ Categories",
          values: form.tags,
          onChange: (v) => update({ tags: v }),
          placeholder: "e.g. pricing, insurance, tracking"
        }
      ),
      form.question && form.answer && /* @__PURE__ */ jsxs("div", { className: "border rounded-xl p-4 space-y-2 bg-blue-50", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-wide text-[#134467]", children: "Accordion Preview" }),
        /* @__PURE__ */ jsxs("details", { children: [
          /* @__PURE__ */ jsx("summary", { className: "cursor-pointer font-medium text-sm", children: form.question }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "mt-2 text-sm text-muted-foreground prose prose-sm max-w-none",
              dangerouslySetInnerHTML: { __html: form.answer }
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(DialogFooter, { className: "border-t pt-4 gap-2", children: [
      /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClose, disabled: isSaving, children: "Cancel" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          disabled: isSaving,
          onClick: () => handleSave("draft"),
          children: "Save as Draft"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          className: "bg-[#134467] hover:bg-[#0e3352] text-white",
          disabled: isSaving,
          onClick: () => handleSave("published"),
          children: isSaving ? "Saving..." : editingItem ? "Update" : "Create & Publish"
        }
      )
    ] })
  ] }) });
}
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
const BLOG_CATEGORIES = [
  { value: "same-day-courier", label: "Same Day Courier" },
  { value: "urgent-delivery", label: "Urgent Delivery" },
  { value: "document-courier", label: "Document Courier" },
  { value: "legal-courier", label: "Legal Courier" },
  { value: "medical-courier", label: "Medical Courier" },
  { value: "courier-cost-guides", label: "Courier Cost Guides" },
  { value: "location-guides", label: "Location Guides" },
  { value: "business-logistics", label: "Business Logistics" }
];
const BLOCK_TYPES = [
  { value: "textSection", label: "📝 Text Section" },
  { value: "bulletSection", label: "• Bullet List" },
  { value: "imageLeftTextRight", label: "🖼️ Image Left + Text Right" },
  { value: "imageRightTextLeft", label: "🖼️ Image Right + Text Left" },
  { value: "calloutCard", label: "📌 Callout Card" },
  { value: "ctaBanner", label: "🎯 CTA Banner" },
  { value: "quoteBlock", label: "💬 Quote Block" },
  { value: "tableBlock", label: "📊 Table Block" },
  { value: "faqSection", label: "❓ FAQ Section" },
  { value: "internalLinkSection", label: "🔗 Internal Link Section" }
];
const slugify = (text) => text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_]+/g, "-").replace(/^-+|-+$/g, "");
const makeBlock = () => ({
  _id: Math.random().toString(36).slice(2),
  type: "textSection",
  heading: "",
  body: "",
  items: [],
  imageUrl: "",
  imageAlt: "",
  ctaText: "",
  ctaUrl: "",
  cite: ""
});
const TagInput = ({
  label,
  tags,
  onChange,
  placeholder = "Type and press Enter",
  hint
}) => {
  const [input, setInput] = useState("");
  const commit = (raw) => {
    const val = raw.trim().replace(/,+$/, "");
    if (val && !tags.includes(val)) onChange([...tags, val]);
    setInput("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      commit(input);
    } else if (e.key === "Backspace" && !input && tags.length > 0) {
      onChange(tags.slice(0, -1));
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsx(Label, { className: "text-sm font-semibold text-[#134467]", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1.5 min-h-[42px] rounded-md border border-input bg-background px-3 py-2 focus-within:ring-2 focus-within:ring-ring", children: [
      tags.map((tag) => /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "gap-1 pr-1 text-xs", children: [
        tag,
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "rounded-full hover:bg-destructive/20 p-0.5",
            onClick: () => onChange(tags.filter((t) => t !== tag)),
            children: /* @__PURE__ */ jsx(X, { className: "w-3 h-3" })
          }
        )
      ] }, tag)),
      /* @__PURE__ */ jsx(
        "input",
        {
          className: "flex-1 min-w-[140px] bg-transparent text-sm outline-none placeholder:text-muted-foreground",
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: handleKeyDown,
          onBlur: () => input.trim() && commit(input),
          placeholder: tags.length === 0 ? placeholder : ""
        }
      )
    ] }),
    hint && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: hint })
  ] });
};
const SectionLabel = ({ children }) => /* @__PURE__ */ jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-[#134467]/50 pt-2 pb-1 border-b border-slate-100 mb-3", children });
const Field = ({
  label,
  required,
  hint,
  children
}) => /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
  /* @__PURE__ */ jsxs(Label, { className: "text-sm font-semibold text-[#134467]", children: [
    label,
    required && /* @__PURE__ */ jsx("span", { className: "text-red-500 ml-0.5", children: "*" })
  ] }),
  children,
  hint && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: hint })
] });
function BlogFormDialog({
  open,
  editingItem,
  onClose,
  onSave
}) {
  const isEdit = !!editingItem;
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");
  const [slugManual, setSlugManual] = useState(false);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [status, setStatus] = useState("draft");
  const [category, setCategory] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [featuredBadge, setFeaturedBadge] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [featuredImageAlt, setFeaturedImageAlt] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [intro, setIntro] = useState("");
  const [contentBlocks, setContentBlocks] = useState([]);
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [canonicalUrl, setCanonicalUrl] = useState("");
  const [ogImage, setOgImage] = useState("");
  const [noindex, setNoindex] = useState(false);
  const [primaryKeyword, setPrimaryKeyword] = useState("");
  const [secondaryKeywords, setSecondaryKeywords] = useState([]);
  const [relatedServiceSlugs, setRelatedServiceSlugs] = useState([]);
  const [relatedLocationSlugs, setRelatedLocationSlugs] = useState(
    []
  );
  const [relatedSectorSlugs, setRelatedSectorSlugs] = useState([]);
  const [faqIds, setFaqIds] = useState([]);
  const [faqHeading, setFaqHeading] = useState("Frequently Asked Questions");
  useEffect(() => {
    if (!open) return;
    if (editingItem) {
      setTitle(editingItem.title ?? "");
      setSlug(editingItem.slug ?? "");
      setSlugManual(true);
      setStatus(editingItem.status ?? "draft");
      setCategory(editingItem.category ?? "");
      setIsFeatured(editingItem.isFeatured ?? false);
      setFeaturedBadge(editingItem.featuredBadge ?? "");
      setFeaturedImage(editingItem.featuredImage ?? "");
      setFeaturedImageAlt(editingItem.featuredImageAlt ?? "");
      setExcerpt(editingItem.excerpt ?? "");
      setAuthorName(editingItem.authorName ?? "");
      setPublishedDate(editingItem.publishedDate ?? "");
      setReadingTime(editingItem.readingTime ?? "");
      setIntro(editingItem.intro ?? "");
      setContentBlocks(
        (editingItem.contentBlocks ?? []).map((b) => ({
          _id: Math.random().toString(36).slice(2),
          heading: "",
          body: "",
          items: [],
          imageUrl: "",
          imageAlt: "",
          ctaText: "",
          ctaUrl: "",
          cite: "",
          ...b
        }))
      );
      setSeoTitle(editingItem.seoTitle ?? "");
      setSeoDescription(editingItem.seoDescription ?? "");
      setCanonicalUrl(editingItem.canonicalUrl ?? "");
      setOgImage(editingItem.ogImage ?? "");
      setNoindex(editingItem.noindex ?? false);
      setPrimaryKeyword(editingItem.primaryKeyword ?? "");
      setSecondaryKeywords(editingItem.secondaryKeywords ?? []);
      setRelatedServiceSlugs(editingItem.relatedServiceSlugs ?? []);
      setRelatedLocationSlugs(editingItem.relatedLocationSlugs ?? []);
      setRelatedSectorSlugs(editingItem.relatedSectorSlugs ?? []);
      setFaqIds(
        (editingItem.faqIds ?? []).map(
          (v) => typeof v === "string" ? v : (v == null ? void 0 : v.id) ?? (v == null ? void 0 : v.slug) ?? String(v ?? "")
        )
      );
      setFaqHeading(editingItem.faqHeading ?? "Frequently Asked Questions");
    } else {
      setTitle("");
      setSlug("");
      setSlugManual(false);
      setStatus("draft");
      setCategory("");
      setIsFeatured(false);
      setFeaturedBadge("");
      setFeaturedImage("");
      setFeaturedImageAlt("");
      setExcerpt("");
      setAuthorName("");
      setPublishedDate("");
      setReadingTime("");
      setIntro("");
      setContentBlocks([]);
      setSeoTitle("");
      setSeoDescription("");
      setCanonicalUrl("");
      setOgImage("");
      setNoindex(false);
      setPrimaryKeyword("");
      setSecondaryKeywords([]);
      setRelatedServiceSlugs([]);
      setRelatedLocationSlugs([]);
      setRelatedSectorSlugs([]);
      setFaqIds([]);
      setFaqHeading("Frequently Asked Questions");
      setActiveTab("basic");
    }
  }, [open, editingItem]);
  useEffect(() => {
    if (!slugManual && title) setSlug(slugify(title));
  }, [title, slugManual]);
  useEffect(() => {
    if (!isEdit && title && !seoTitle) setSeoTitle(title);
  }, [title]);
  const addBlock = () => setContentBlocks((p) => [...p, makeBlock()]);
  const updateBlock = (id, patch) => setContentBlocks(
    (p) => p.map((b) => b._id === id ? { ...b, ...patch } : b)
  );
  const removeBlock = (id) => setContentBlocks((p) => p.filter((b) => b._id !== id));
  const moveBlock = (id, dir) => {
    setContentBlocks((prev) => {
      const idx = prev.findIndex((b) => b._id === id);
      if (idx < 0) return prev;
      const next = [...prev];
      const swap = idx + dir;
      if (swap < 0 || swap >= next.length) return prev;
      [next[idx], next[swap]] = [next[swap], next[idx]];
      return next;
    });
  };
  const validate = () => {
    if (!title.trim()) return "Title is required.";
    if (!slug.trim()) return "Slug is required.";
    if (status === "published") {
      if (!excerpt.trim()) return "Excerpt is required before publishing.";
      if (!seoTitle.trim()) return "SEO Title is required before publishing.";
      if (!seoDescription.trim())
        return "SEO Description is required before publishing.";
    }
    return null;
  };
  const handleSubmit = async () => {
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }
    setIsSaving(true);
    try {
      const cleanBlocks = contentBlocks.map(({ _id, ...rest }) => rest);
      await onSave({
        ...isEdit && (editingItem == null ? void 0 : editingItem.id) ? { id: editingItem.id } : {},
        title: title.trim(),
        slug: slug.trim(),
        status,
        category: category || null,
        isFeatured,
        featuredBadge: featuredBadge.trim() || null,
        featuredImage: featuredImage.trim() || null,
        featuredImageAlt: featuredImageAlt.trim() || null,
        excerpt: excerpt.trim() || null,
        authorName: authorName.trim() || null,
        publishedDate: publishedDate || null,
        readingTime: readingTime.trim() || null,
        intro: intro.trim() || null,
        contentBlocks: cleanBlocks,
        seoTitle: seoTitle.trim() || null,
        seoDescription: seoDescription.trim() || null,
        canonicalUrl: canonicalUrl.trim() || null,
        ogImage: ogImage.trim() || null,
        noindex,
        primaryKeyword: primaryKeyword.trim() || null,
        secondaryKeywords,
        relatedServiceSlugs,
        relatedLocationSlugs,
        relatedSectorSlugs,
        // ── FAQs ── ✅ NEW
        faqIds,
        faqHeading: faqHeading.trim() || "Frequently Asked Questions"
      });
    } catch (e) {
      toast.error(e.message ?? "Save failed");
    } finally {
      setIsSaving(false);
    }
  };
  const renderBlockFields = (block) => {
    const upd = (patch) => updateBlock(block._id, patch);
    const needsImage = ["imageLeftTextRight", "imageRightTextLeft"].includes(
      block.type
    );
    const needsItems = block.type === "bulletSection";
    const needsCta = ["ctaBanner", "calloutCard"].includes(block.type);
    const needsCite = block.type === "quoteBlock";
    const needsFaqIds = block.type === "faqSection";
    const needsBody = !needsItems;
    return /* @__PURE__ */ jsxs("div", { className: "space-y-2.5 mt-2 pl-2 border-l-2 border-slate-200", children: [
      /* @__PURE__ */ jsx(Field, { label: "Heading / Section Title", children: /* @__PURE__ */ jsx(
        Input,
        {
          value: block.heading,
          onChange: (e) => upd({ heading: e.target.value }),
          placeholder: "Section heading (optional)",
          className: "bg-white"
        }
      ) }),
      needsBody && /* @__PURE__ */ jsx(
        Field,
        {
          label: block.type === "quoteBlock" ? "Quote Text" : "Body / HTML Content",
          children: /* @__PURE__ */ jsx(
            Textarea,
            {
              value: block.body,
              onChange: (e) => upd({ body: e.target.value }),
              rows: 3,
              placeholder: block.type === "quoteBlock" ? "Quote text here..." : "Content… HTML supported",
              className: "font-mono text-xs bg-white"
            }
          )
        }
      ),
      needsItems && /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsx(Label, { className: "text-sm font-semibold text-[#134467]", children: "Bullet Items" }),
        block.items.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              value: item,
              onChange: (e) => {
                const next = [...block.items];
                next[i] = e.target.value;
                upd({ items: next });
              },
              placeholder: `Item ${i + 1}`,
              className: "bg-white"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              size: "sm",
              variant: "ghost",
              className: "text-red-500 hover:bg-red-50 shrink-0",
              onClick: () => upd({ items: block.items.filter((_, j) => j !== i) }),
              children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
            }
          )
        ] }, i)),
        /* @__PURE__ */ jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            variant: "outline",
            className: "mt-1",
            onClick: () => upd({ items: [...block.items, ""] }),
            children: [
              /* @__PURE__ */ jsx(Plus, { className: "w-3.5 h-3.5 mr-1" }),
              " Add Item"
            ]
          }
        )
      ] }),
      needsImage && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsx(Field, { label: "Image URL", children: /* @__PURE__ */ jsx(
          Input,
          {
            value: block.imageUrl,
            onChange: (e) => upd({ imageUrl: e.target.value }),
            placeholder: "https://...",
            className: "bg-white"
          }
        ) }),
        /* @__PURE__ */ jsx(Field, { label: "Image Alt Text", children: /* @__PURE__ */ jsx(
          Input,
          {
            value: block.imageAlt,
            onChange: (e) => upd({ imageAlt: e.target.value }),
            placeholder: "Descriptive alt text",
            className: "bg-white"
          }
        ) })
      ] }),
      needsCta && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsx(Field, { label: "CTA Button Text", children: /* @__PURE__ */ jsx(
          Input,
          {
            value: block.ctaText,
            onChange: (e) => upd({ ctaText: e.target.value }),
            placeholder: "e.g. Get a Quote",
            className: "bg-white"
          }
        ) }),
        /* @__PURE__ */ jsx(Field, { label: "CTA URL", children: /* @__PURE__ */ jsx(
          Input,
          {
            value: block.ctaUrl,
            onChange: (e) => upd({ ctaUrl: e.target.value }),
            placeholder: "/get-a-quote",
            className: "bg-white"
          }
        ) })
      ] }),
      needsCite && /* @__PURE__ */ jsx(Field, { label: "Attribution / Citation", children: /* @__PURE__ */ jsx(
        Input,
        {
          value: block.cite,
          onChange: (e) => upd({ cite: e.target.value }),
          placeholder: "— Source or Author Name",
          className: "bg-white"
        }
      ) }),
      needsFaqIds && /* @__PURE__ */ jsx(
        Field,
        {
          label: "FAQ IDs (comma-separated)",
          hint: "Enter Firestore FAQ document IDs to embed in this section",
          children: /* @__PURE__ */ jsx(
            Input,
            {
              value: block.body,
              onChange: (e) => upd({ body: e.target.value }),
              placeholder: "faqId1, faqId2, faqId3",
              className: "font-mono text-xs bg-white"
            }
          )
        }
      )
    ] });
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-4xl max-h-[92vh] flex flex-col p-0 gap-0", children: [
    /* @__PURE__ */ jsx(DialogHeader, { className: "px-6 pt-6 pb-3 border-b shrink-0", children: /* @__PURE__ */ jsx(DialogTitle, { className: "text-[#134467] text-xl font-bold", children: isEdit ? "✏️ Edit Blog Post" : "✨ Create New Blog Post" }) }),
    /* @__PURE__ */ jsxs(
      Tabs,
      {
        value: activeTab,
        onValueChange: setActiveTab,
        className: "flex-1 overflow-hidden flex flex-col px-6",
        children: [
          /* @__PURE__ */ jsxs(TabsList, { className: "shrink-0 grid grid-cols-4 w-full mt-4", children: [
            /* @__PURE__ */ jsx(TabsTrigger, { value: "basic", children: "📋 Basic" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "content", children: "📝 Content" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "seo", children: "🔍 SEO" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "relations", children: "🔗 Relations" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto py-4 pr-1 space-y-0", children: [
            /* @__PURE__ */ jsxs(
              TabsContent,
              {
                value: "basic",
                className: "mt-0 space-y-5 focus-visible:outline-none",
                children: [
                  /* @__PURE__ */ jsx(SectionLabel, { children: "Core Details" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(Field, { label: "Post Title", required: true, children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        value: title,
                        onChange: (e) => setTitle(e.target.value),
                        placeholder: "e.g. Same Day Courier Services in London – Everything You Need to Know",
                        className: "text-base"
                      }
                    ) }) }),
                    /* @__PURE__ */ jsx(
                      Field,
                      {
                        label: "Slug",
                        required: true,
                        hint: "Auto-generated. Edit to override.",
                        children: /* @__PURE__ */ jsx(
                          Input,
                          {
                            value: slug,
                            onChange: (e) => {
                              setSlug(e.target.value);
                              setSlugManual(true);
                            },
                            placeholder: "same-day-courier-london",
                            className: "font-mono text-sm"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsx(Field, { label: "Status", required: true, children: /* @__PURE__ */ jsxs(
                      Select,
                      {
                        value: status,
                        onValueChange: (v) => setStatus(v),
                        children: [
                          /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                          /* @__PURE__ */ jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsx(SelectItem, { value: "draft", children: "🟡 Draft" }),
                            /* @__PURE__ */ jsx(SelectItem, { value: "published", children: "🟢 Published" })
                          ] })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsx(Field, { label: "Category", children: /* @__PURE__ */ jsxs(Select, { value: category, onValueChange: setCategory, children: [
                      /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a category…" }) }),
                      /* @__PURE__ */ jsx(SelectContent, { children: BLOG_CATEGORIES.map((c) => /* @__PURE__ */ jsx(SelectItem, { value: c.value, children: c.label }, c.value)) })
                    ] }) }),
                    /* @__PURE__ */ jsx(Field, { label: "Author Name", children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        value: authorName,
                        onChange: (e) => setAuthorName(e.target.value),
                        placeholder: "FourSix46 Team"
                      }
                    ) }),
                    /* @__PURE__ */ jsx(Field, { label: "Published Date", children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        type: "date",
                        value: publishedDate,
                        onChange: (e) => setPublishedDate(e.target.value)
                      }
                    ) }),
                    /* @__PURE__ */ jsx(Field, { label: "Reading Time", hint: "Shown to readers", children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        value: readingTime,
                        onChange: (e) => setReadingTime(e.target.value),
                        placeholder: "5 min read"
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsx(SectionLabel, { children: "Hero / Listing Card" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxs(
                      Field,
                      {
                        label: "Excerpt",
                        hint: "150–220 characters — shown in listing cards and used as meta fallback",
                        children: [
                          /* @__PURE__ */ jsx(
                            Textarea,
                            {
                              value: excerpt,
                              onChange: (e) => setExcerpt(e.target.value),
                              rows: 3,
                              placeholder: "A short summary of the post shown in the blog index and sharing snippets…"
                            }
                          ),
                          /* @__PURE__ */ jsxs(
                            "p",
                            {
                              className: `text-xs mt-1 ${excerpt.length > 220 ? "text-red-500 font-medium" : "text-muted-foreground"}`,
                              children: [
                                excerpt.length,
                                " / 220 chars"
                              ]
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(Field, { label: "Featured Image URL", children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        value: featuredImage,
                        onChange: (e) => setFeaturedImage(e.target.value),
                        placeholder: "https://cdn.example.com/blog/hero.jpg"
                      }
                    ) }) }),
                    /* @__PURE__ */ jsx(Field, { label: "Featured Image Alt Text", children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        value: featuredImageAlt,
                        onChange: (e) => setFeaturedImageAlt(e.target.value),
                        placeholder: "Courier van driving through London"
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsx(Label, { className: "text-sm font-semibold text-[#134467]", children: "Featured Post?" }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-1.5", children: [
                        /* @__PURE__ */ jsx(
                          Switch,
                          {
                            checked: isFeatured,
                            onCheckedChange: setIsFeatured
                          }
                        ),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: isFeatured ? "✅ Shown in featured slots" : "Not featured" })
                      ] })
                    ] }),
                    isFeatured && /* @__PURE__ */ jsx(
                      Field,
                      {
                        label: "Featured Badge Label",
                        hint: "e.g. Popular · New · Editor's Pick",
                        children: /* @__PURE__ */ jsx(
                          Input,
                          {
                            value: featuredBadge,
                            onChange: (e) => setFeaturedBadge(e.target.value),
                            placeholder: "New"
                          }
                        )
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              TabsContent,
              {
                value: "content",
                className: "mt-0 space-y-5 focus-visible:outline-none",
                children: [
                  /* @__PURE__ */ jsx(SectionLabel, { children: "Introduction" }),
                  /* @__PURE__ */ jsx(
                    Field,
                    {
                      label: "Intro Paragraph(s)",
                      hint: "Displayed directly below the hero image. HTML is supported.",
                      children: /* @__PURE__ */ jsx(
                        Textarea,
                        {
                          value: intro,
                          onChange: (e) => setIntro(e.target.value),
                          rows: 6,
                          placeholder: "Opening paragraphs… <p>You can use HTML tags here.</p>",
                          className: "font-mono text-xs"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxs(SectionLabel, { children: [
                    "Content Blocks ",
                    /* @__PURE__ */ jsxs("span", { className: "text-[#134467] normal-case font-semibold not-italic", children: [
                      "(",
                      contentBlocks.length,
                      ")"
                    ] })
                  ] }),
                  contentBlocks.length === 0 && /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground italic text-center py-6 border border-dashed rounded-xl bg-slate-50", children: [
                    "No blocks yet — click ",
                    /* @__PURE__ */ jsx("strong", { children: "+ Add Content Block" }),
                    " to start building the article body."
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3", children: contentBlocks.map((block, idx) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "border rounded-xl bg-slate-50/60 p-4 hover:border-blue-200 transition-colors",
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0.5 shrink-0", children: [
                            /* @__PURE__ */ jsx(
                              Button,
                              {
                                type: "button",
                                size: "icon",
                                variant: "ghost",
                                className: "h-5 w-5 text-slate-400",
                                disabled: idx === 0,
                                onClick: () => moveBlock(block._id, -1),
                                children: /* @__PURE__ */ jsx(ChevronUp, { className: "w-3.5 h-3.5" })
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              Button,
                              {
                                type: "button",
                                size: "icon",
                                variant: "ghost",
                                className: "h-5 w-5 text-slate-400",
                                disabled: idx === contentBlocks.length - 1,
                                onClick: () => moveBlock(block._id, 1),
                                children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-3.5 h-3.5" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs(
                            Select,
                            {
                              value: block.type,
                              onValueChange: (v) => updateBlock(block._id, { type: v }),
                              children: [
                                /* @__PURE__ */ jsx(SelectTrigger, { className: "bg-white", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                                /* @__PURE__ */ jsx(SelectContent, { children: BLOCK_TYPES.map((t) => /* @__PURE__ */ jsx(SelectItem, { value: t.value, children: t.label }, t.value)) })
                              ]
                            }
                          ) }),
                          /* @__PURE__ */ jsxs(
                            Badge,
                            {
                              variant: "outline",
                              className: "text-xs font-mono shrink-0 border-slate-300",
                              children: [
                                "#",
                                idx + 1
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            Button,
                            {
                              type: "button",
                              size: "icon",
                              variant: "ghost",
                              className: "text-red-400 hover:text-red-600 hover:bg-red-50 h-8 w-8 shrink-0",
                              onClick: () => removeBlock(block._id),
                              children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" })
                            }
                          )
                        ] }),
                        renderBlockFields(block)
                      ]
                    },
                    block._id
                  )) }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      className: "w-full border-dashed border-2 text-[#134467] hover:bg-blue-50 hover:border-blue-300 mt-1",
                      onClick: addBlock,
                      children: [
                        /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4 mr-2" }),
                        " Add Content Block"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              TabsContent,
              {
                value: "seo",
                className: "mt-0 space-y-5 focus-visible:outline-none",
                children: [
                  /* @__PURE__ */ jsx(SectionLabel, { children: "Meta Tags" }),
                  /* @__PURE__ */ jsxs(Field, { label: "SEO Title", hint: "Recommended: 50–60 characters", children: [
                    /* @__PURE__ */ jsx(
                      Input,
                      {
                        value: seoTitle,
                        onChange: (e) => setSeoTitle(e.target.value),
                        placeholder: "Same Day Courier Services London | Route46"
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      "p",
                      {
                        className: `text-xs mt-1 ${seoTitle.length > 60 ? "text-amber-600 font-medium" : "text-muted-foreground"}`,
                        children: [
                          seoTitle.length,
                          " / 60 chars"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs(
                    Field,
                    {
                      label: "SEO Description",
                      hint: "Recommended: 150–160 characters",
                      children: [
                        /* @__PURE__ */ jsx(
                          Textarea,
                          {
                            value: seoDescription,
                            onChange: (e) => setSeoDescription(e.target.value),
                            rows: 3,
                            placeholder: "Discover fast, reliable same day courier services across London with Route46. Book online in minutes…"
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          "p",
                          {
                            className: `text-xs mt-1 ${seoDescription.length > 160 ? "text-amber-600 font-medium" : "text-muted-foreground"}`,
                            children: [
                              seoDescription.length,
                              " / 160 chars"
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsx(
                      Field,
                      {
                        label: "Canonical URL",
                        hint: "Leave blank to use the default page URL",
                        children: /* @__PURE__ */ jsx(
                          Input,
                          {
                            value: canonicalUrl,
                            onChange: (e) => setCanonicalUrl(e.target.value),
                            placeholder: "https://foursix46.com/blog/your-slug",
                            className: "font-mono text-xs"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Field,
                      {
                        label: "OG Image URL",
                        hint: "Used for social sharing previews",
                        children: /* @__PURE__ */ jsx(
                          Input,
                          {
                            value: ogImage,
                            onChange: (e) => setOgImage(e.target.value),
                            placeholder: "https://cdn.example.com/og/blog.jpg"
                          }
                        )
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded-xl border bg-slate-50 p-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-[#134467]", children: "No-Index this page" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Instruct search engines not to index this post (e.g. for drafts or duplicates)" })
                    ] }),
                    /* @__PURE__ */ jsx(Switch, { checked: noindex, onCheckedChange: setNoindex })
                  ] }),
                  /* @__PURE__ */ jsx(SectionLabel, { children: "Keyword Targeting" }),
                  /* @__PURE__ */ jsx(
                    Field,
                    {
                      label: "Primary Keyword",
                      hint: "The main keyword this post is optimised for",
                      children: /* @__PURE__ */ jsx(
                        Input,
                        {
                          value: primaryKeyword,
                          onChange: (e) => setPrimaryKeyword(e.target.value),
                          placeholder: "same day courier london"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    TagInput,
                    {
                      label: "Secondary Keywords",
                      tags: secondaryKeywords,
                      onChange: setSecondaryKeywords,
                      placeholder: "Type keyword, press Enter or comma"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              TabsContent,
              {
                value: "relations",
                className: "mt-0 space-y-6 focus-visible:outline-none",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-blue-50 border border-blue-100 p-4 text-sm text-blue-800", children: [
                    "💡 Add the ",
                    /* @__PURE__ */ jsx("strong", { children: "slugs" }),
                    " of related content to build contextual internal links. Press",
                    " ",
                    /* @__PURE__ */ jsx("kbd", { className: "bg-white border border-blue-200 rounded px-1.5 py-0.5 text-xs font-mono", children: "Enter" }),
                    " ",
                    "or",
                    " ",
                    /* @__PURE__ */ jsx("kbd", { className: "bg-white border border-blue-200 rounded px-1.5 py-0.5 text-xs font-mono", children: "," }),
                    " ",
                    "after each value."
                  ] }),
                  /* @__PURE__ */ jsx(
                    TagInput,
                    {
                      label: "Related Services (slugs)",
                      tags: relatedServiceSlugs,
                      onChange: setRelatedServiceSlugs,
                      placeholder: "e.g. same-day-delivery, urgent-courier"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    TagInput,
                    {
                      label: "Related Locations (slugs)",
                      tags: relatedLocationSlugs,
                      onChange: setRelatedLocationSlugs,
                      placeholder: "e.g. london, manchester, birmingham"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    TagInput,
                    {
                      label: "Related Sectors (slugs)",
                      tags: relatedSectorSlugs,
                      onChange: setRelatedSectorSlugs,
                      placeholder: "e.g. legal-courier, medical-courier"
                    }
                  ),
                  /* @__PURE__ */ jsx(SectionLabel, { children: "FAQs" }),
                  /* @__PURE__ */ jsx(Field, { label: "FAQ Section Heading", children: /* @__PURE__ */ jsx(
                    Input,
                    {
                      value: faqHeading,
                      onChange: (e) => setFaqHeading(e.target.value),
                      placeholder: "Frequently Asked Questions"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    TagInput,
                    {
                      label: "FAQ IDs (enter Firestore FAQ document IDs)",
                      tags: faqIds,
                      onChange: setFaqIds,
                      placeholder: "Paste FAQ document ID and press Enter",
                      hint: "Tip: Go to the FAQs section, copy the document ID from the table, and paste it here to link FAQs to this blog post."
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(DialogFooter, { className: "shrink-0 gap-2 border-t px-6 py-4", children: [
      /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClose, disabled: isSaving, children: "Cancel" }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          onClick: handleSubmit,
          disabled: isSaving,
          className: "bg-[#134467] hover:bg-[#0d2f4a] text-white min-w-[130px]",
          children: [
            isSaving && /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 mr-2 animate-spin" }),
            isEdit ? "Update Post" : "Create Post"
          ]
        }
      )
    ] })
  ] }) });
}
function VatSettingsCard() {
  const { settings, loading, saving, error, saveSettings, refetch } = useVatSettings();
  const [draft, setDraft] = useState(settings);
  useEffect(() => {
    setDraft(settings);
  }, [settings]);
  const isDirty = draft.vatEnabled !== settings.vatEnabled || draft.vatRate !== settings.vatRate;
  const handleSave = async () => {
    if (draft.vatRate < 0 || draft.vatRate > 100) {
      toast.error("VAT rate must be between 0 and 100.");
      return;
    }
    const ok = await saveSettings(draft);
    if (ok) {
      toast.success("VAT settings saved successfully.");
    } else {
      toast.error("Failed to save VAT settings. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxs(Card, { className: "p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-[#134467]/8 flex items-center justify-center", children: /* @__PURE__ */ jsx(Percent, { className: "w-5 h-5 text-[#134467]" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-[#134467] text-base leading-tight", children: "VAT Settings" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Controls VAT display and calculation on the payment page" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        loading && /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin text-muted-foreground" }),
        /* @__PURE__ */ jsx(
          Badge,
          {
            variant: draft.vatEnabled ? "default" : "secondary",
            className: draft.vatEnabled ? "bg-green-100 text-green-800 border-green-200" : "bg-slate-100 text-slate-500 border-slate-200",
            children: draft.vatEnabled ? `VAT ${draft.vatRate}% Active` : "VAT Disabled"
          }
        )
      ] })
    ] }),
    error && /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700", children: [
      "⚠️ ",
      error
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-5 py-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-[#134467]", children: "Enable VAT" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "When enabled, VAT is calculated and displayed on the payment page" })
      ] }),
      /* @__PURE__ */ jsx(
        Switch,
        {
          checked: draft.vatEnabled,
          onCheckedChange: (v) => setDraft((d) => ({ ...d, vatEnabled: v })),
          disabled: loading || saving
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx(
        Label,
        {
          htmlFor: "vatRate",
          className: "text-sm font-semibold text-[#134467]",
          children: "VAT Rate (%)"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "vatRate",
              type: "number",
              min: 0,
              max: 100,
              step: 0.01,
              value: draft.vatRate,
              onChange: (e) => setDraft((d) => ({ ...d, vatRate: Number(e.target.value) })),
              disabled: !draft.vatEnabled || loading || saving,
              className: "pr-8 disabled:opacity-50"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium pointer-events-none", children: "%" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground whitespace-nowrap", children: [
          "e.g.",
          " ",
          /* @__PURE__ */ jsxs("span", { className: "font-mono font-semibold text-[#134467]", children: [
            draft.vatEnabled ? draft.vatRate : "—",
            "%"
          ] })
        ] })
      ] }),
      !draft.vatEnabled && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "VAT rate field is inactive while VAT is disabled." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#134467]/10 bg-[#134467]/5 p-4 space-y-2", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-[#134467]/50 mb-3", children: "Live Preview — how £100 ex-VAT will appear on payment page" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#134467]/70", children: "Net Amount" }),
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "£100.00" })
      ] }),
      draft.vatEnabled ? /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-[#134467]/70", children: [
          "VAT (",
          draft.vatRate,
          "%)"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
          "£",
          (100 * draft.vatRate / 100).toFixed(2)
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { children: "VAT" }),
        /* @__PURE__ */ jsx("span", { children: "Not applicable" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-[#134467]/15 pt-2 flex justify-between font-bold text-sm", children: [
        /* @__PURE__ */ jsx("span", { children: "Total Payable" }),
        /* @__PURE__ */ jsxs("span", { children: [
          "£",
          draft.vatEnabled ? (100 + 100 * draft.vatRate / 100).toFixed(2) : "100.00"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsx(Info, { className: "w-3.5 h-3.5 mt-0.5 shrink-0" }),
      /* @__PURE__ */ jsx("p", { children: "Changes take effect immediately on the live payment page once saved. VAT rate is also passed to the Stripe checkout session for correct invoice generation." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-2 border-t border-slate-100", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "text-muted-foreground",
          onClick: refetch,
          disabled: loading || saving,
          children: [
            loading ? /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 mr-1.5 animate-spin" }) : /* @__PURE__ */ jsx(RefreshCw, { className: "w-4 h-4 mr-1.5" }),
            "Refresh"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: handleSave,
          disabled: !isDirty || loading || saving,
          className: "bg-[#134467] hover:bg-[#0d2f4a] text-white min-w-[120px]",
          size: "sm",
          children: saving ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 mr-1.5 animate-spin" }),
            " Saving…"
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Save, { className: "w-4 h-4 mr-1.5" }),
            " Save Changes"
          ] })
        }
      )
    ] })
  ] });
}
const apiUrl = void 0;
const DeleteConfirmModal = ({
  open,
  entityName,
  onConfirm,
  onCancel
}) => {
  const [typed, setTyped] = useState("");
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: (o) => !o && onCancel(), children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsxs(DialogTitle, { className: "text-red-600", children: [
      "Delete ",
      entityName,
      "?"
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4 py-2", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "⚠️ This action",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-red-600", children: "cannot be undone" }),
        ". The record will be permanently deleted."
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(Label, { className: "text-sm font-medium", children: [
          "Type",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-mono font-bold text-red-600", children: "DELETE" }),
          " ",
          "to confirm:"
        ] }),
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "mt-2",
            value: typed,
            onChange: (e) => setTyped(e.target.value),
            placeholder: "DELETE",
            autoFocus: true
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2", children: [
      /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onCancel, children: "Cancel" }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "destructive",
          disabled: typed !== "DELETE",
          onClick: () => {
            onConfirm();
            setTyped("");
          },
          children: [
            /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 mr-1" }),
            " Permanently Delete"
          ]
        }
      )
    ] })
  ] }) });
};
const FilePreview = ({ url }) => {
  const [show, setShow] = useState(false);
  const lower = url.toLowerCase();
  const isPdf = lower.includes(".pdf");
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", children: /* @__PURE__ */ jsx("a", { href: url, target: "_blank", rel: "noopener noreferrer", children: "Open in new tab" }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: show ? "secondary" : "default",
          size: "sm",
          onClick: () => setShow((v) => !v),
          children: show ? "Hide preview" : "Preview here"
        }
      )
    ] }),
    show && (isPdf ? /* @__PURE__ */ jsx(
      "iframe",
      {
        src: url,
        title: "Document preview",
        className: "w-full h-96 rounded border"
      }
    ) : /* @__PURE__ */ jsx(
      "img",
      {
        src: url,
        alt: "Document preview",
        className: "max-h-96 rounded border"
      }
    ))
  ] });
};
const DetailRow = ({
  label,
  value
}) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl px-4 py-4 mb-3 shadow transition duration-200 border-l-4 border-[#48AEDD] bg-gradient-to-r from-blue-50 via-blue-100 to-[#e0e7ff] hover:from-blue-100 hover:to-blue-200", children: [
  /* @__PURE__ */ jsx(
    "div",
    {
      className: "text-xs font-bold mb-2 uppercase tracking-wide",
      style: { color: "#112D4E" },
      children: label
    }
  ),
  /* @__PURE__ */ jsx(
    "div",
    {
      className: "text-[1rem] font-semibold break-words",
      style: { color: value ? "#F01927" : "#F1C40F" },
      children: value ?? /* @__PURE__ */ jsx("span", { className: "italic", style: { color: "#F1C40F" }, children: "No data" })
    }
  )
] });
const formatDate = (timestamp) => {
  if (!timestamp) return "N/A";
  let date = null;
  if (typeof timestamp.toDate === "function") {
    date = timestamp.toDate();
  } else if (timestamp._seconds !== void 0) {
    date = new Date(timestamp._seconds * 1e3);
  } else if (timestamp.seconds !== void 0) {
    date = new Date(timestamp.seconds * 1e3);
  } else {
    const parsed = new Date(timestamp);
    if (!isNaN(parsed.getTime())) date = parsed;
  }
  if (!date) return "N/A";
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
};
function AdminDashboardPage() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [editingQuote, setEditingQuote] = useState(null);
  const [quoteEditForm, setQuoteEditForm] = useState({
    status: "",
    adminPriceQuote: "",
    adminNotes: ""
  });
  const [pendingApplications, setPendingApplications] = useState([]);
  const [activeDrivers, setActiveDrivers] = useState([]);
  const [pendingShippers, setPendingShippers] = useState([]);
  const [activeShippers, setActiveShippers] = useState(
    []
  );
  const [stats, setStats] = useState({
    pending: 0,
    approved: 0,
    shippers: 0,
    revenue: 0
  });
  const [currentView, setCurrentView] = useState("overview");
  const [selectedApp, setSelectedApp] = useState(null);
  const [normalBookings, setNormalBookings] = useState([]);
  const [businessBookings, setBusinessBookings] = useState([]);
  const [services, setServices] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [locations, setLocations] = useState([]);
  const [landingPages, setLandingPages] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [quickQuotes, setQuickQuotes] = useState([]);
  const [payments, setPayments] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const getTimestamp = (ts) => {
    if (!ts) return 0;
    if (typeof ts.toMillis === "function") return ts.toMillis();
    if (ts.seconds !== void 0) return ts.seconds * 1e3;
    if (ts._seconds !== void 0) return ts._seconds * 1e3;
    const p = new Date(ts);
    return isNaN(p.getTime()) ? 0 : p.getTime();
  };
  const filterAndSort = (data, type) => {
    let filtered = [...data];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter((item) => {
        var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2;
        if (type === "driver") {
          const d = item;
          return ((_a2 = d.firstName) == null ? void 0 : _a2.toLowerCase().includes(q)) || ((_b2 = d.lastName) == null ? void 0 : _b2.toLowerCase().includes(q)) || `${d.firstName} ${d.lastName}`.toLowerCase().includes(q) || ((_c2 = d.email) == null ? void 0 : _c2.toLowerCase().includes(q)) || ((_d2 = d.phone) == null ? void 0 : _d2.includes(q));
        }
        if (type === "business") {
          const b = item;
          return ((_e2 = b.companyName) == null ? void 0 : _e2.toLowerCase().includes(q)) || ((_f2 = b.contactFirstName) == null ? void 0 : _f2.toLowerCase().includes(q)) || ((_g2 = b.contactEmail) == null ? void 0 : _g2.toLowerCase().includes(q));
        }
        if (type === "booking") {
          const k = item;
          return ((_h2 = k.reference) == null ? void 0 : _h2.toLowerCase().includes(q)) || ((_j2 = (_i2 = k.sender) == null ? void 0 : _i2.name) == null ? void 0 : _j2.toLowerCase().includes(q)) || ((_l2 = (_k2 = k.business) == null ? void 0 : _k2.companyName) == null ? void 0 : _l2.toLowerCase().includes(q));
        }
        return false;
      });
    }
    filtered.sort((a, b) => {
      let dateA = 0, dateB = 0, nameA = "", nameB = "";
      if (type === "driver") {
        dateA = getTimestamp(a.submittedAt);
        dateB = getTimestamp(b.submittedAt);
        nameA = a.firstName + " " + a.lastName;
        nameB = b.firstName + " " + b.lastName;
      } else if (type === "business") {
        dateA = getTimestamp(a.submittedAt);
        dateB = getTimestamp(b.submittedAt);
        nameA = a.companyName;
        nameB = b.companyName;
      } else if (type === "booking") {
        dateA = getTimestamp(a.createdAt);
        dateB = getTimestamp(b.createdAt);
        nameA = a.reference ?? "";
        nameB = b.reference ?? "";
      }
      switch (sortOrder) {
        case "newest":
          return dateB - dateA;
        case "oldest":
          return dateA - dateB;
        case "nameasc":
          return nameA.localeCompare(nameB);
        case "namedesc":
          return nameB.localeCompare(nameA);
        default:
          return 0;
      }
    });
    return filtered;
  };
  const filteredPendingApplications = filterAndSort(
    pendingApplications,
    "driver"
  );
  const filteredActiveDrivers = filterAndSort(
    activeDrivers,
    "driver"
  );
  const filteredPendingShippers = filterAndSort(
    pendingShippers,
    "business"
  );
  const filteredActiveShippers = filterAndSort(
    activeShippers,
    "business"
  );
  const filteredNormalBookings = filterAndSort(
    normalBookings,
    "booking"
  );
  const filteredBusinessBookings = filterAndSort(
    businessBookings,
    "booking"
  );
  const totalNormalRevenue = normalBookings.reduce(
    (sum, b) => {
      var _a2;
      return sum + (((_a2 = b.pricing) == null ? void 0 : _a2.finalPrice) ?? 0);
    },
    0
  );
  const totalBusinessRevenue = businessBookings.reduce(
    (sum, b) => {
      var _a2;
      return sum + (((_a2 = b.pricing) == null ? void 0 : _a2.finalPrice) ?? 0);
    },
    0
  );
  const totalPaymentsRevenue = (payments ?? []).filter((p) => p.status === "paid").reduce((sum, p) => sum + (Number(p.totalAmount) || 0), 0);
  const totalRevenue = totalNormalRevenue + totalBusinessRevenue + totalPaymentsRevenue;
  const fetchCMSData = useCallback(async () => {
    try {
      const [
        driversRes,
        svcRes,
        secRes,
        locRes,
        landRes,
        faqRes,
        blogRes,
        // ✅ NEW
        qqRes,
        payRes
      ] = await Promise.all([
        fetch(`${apiUrl}/api/admin/drivers`),
        fetch(`${apiUrl}/api/admin/services`),
        fetch(`${apiUrl}/api/admin/sectors`),
        fetch(`${apiUrl}/api/admin/locations`),
        fetch(`${apiUrl}/api/admin/location-services`),
        fetch(`${apiUrl}/api/admin/faqs`),
        fetch(`${apiUrl}/api/admin/blog`).catch(() => ({
          json: async () => []
        })),
        // ✅ NEW
        fetch(`${apiUrl}/api/admin/quick-quotes`).catch(() => ({
          json: async () => []
        })),
        fetch(`${apiUrl}/api/admin/payments`).catch(() => ({
          json: async () => []
        }))
      ]);
      const driversData = await driversRes.json();
      setDrivers(driversData);
      setPendingApplications(
        driversData.filter((d) => d.status === "pending")
      );
      setActiveDrivers(driversData.filter((d) => d.status === "approved"));
      setStats((prev) => ({
        ...prev,
        pending: driversData.filter((d) => d.status === "pending").length,
        approved: driversData.filter((d) => d.status === "approved").length
      }));
      setServices(await svcRes.json());
      setSectors(await secRes.json());
      setLocations(await locRes.json());
      setLandingPages(await landRes.json());
      setFaqs(await faqRes.json());
      setBlogs(await blogRes.json());
      setQuickQuotes(await qqRes.json());
      setPayments(await payRes.json());
    } catch (err) {
      console.error("CMS fetch error:", err);
      toast.error("Failed to load CMS data");
    }
  }, []);
  const fetchAllData = useCallback(async () => {
    try {
      const pendingShipSnap = await getDocs(
        query(collection(db, "businesses"), where("status", "==", "pending"))
      );
      const pendingShipDocs = pendingShipSnap.docs.map((d) => ({
        id: d.id,
        ...d.data()
      }));
      setPendingShippers(pendingShipDocs);
      setStats((prev) => ({ ...prev, shippers: pendingShipDocs.length }));
      const activeShipSnap = await getDocs(
        query(collection(db, "businesses"), where("status", "==", "approved"))
      );
      const activeShipDocs = activeShipSnap.docs.map((d) => ({
        id: d.id,
        ...d.data()
      }));
      setActiveShippers(activeShipDocs);
      const bookSnap = await getDocs(collection(db, "bookings"));
      const allBookings = bookSnap.docs.map((d) => ({
        id: d.id,
        ...d.data()
      }));
      setNormalBookings(allBookings.filter((b) => b.mode === "normal"));
      setBusinessBookings(allBookings.filter((b) => b.mode === "business"));
    } catch (error) {
      console.error("❌ Firestore fetch error:", error);
      toast.error("Failed to load dashboard data: " + error.message);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);
  const handleQuoteEditSave = async () => {
    if (!editingQuote) return;
    try {
      const res = await fetch(
        `${apiUrl}/api/admin/quick-quotes/${editingQuote.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            status: quoteEditForm.status,
            adminPriceQuote: quoteEditForm.adminPriceQuote,
            adminNotes: quoteEditForm.adminNotes
          })
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      toast.success("Quote updated!");
      setEditingQuote(null);
      fetchCMSData();
    } catch (err) {
      toast.error(err.message ?? "Update failed.");
    }
  };
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user2) => {
      if (user2) {
        setUser(user2);
        try {
          const tokenResult = await user2.getIdTokenResult();
          const isAdminClaim = tokenResult.claims.admin === true;
          setIsAdmin(isAdminClaim);
          if (!isAdminClaim) setIsLoading(false);
        } catch (error) {
          console.error("Error fetching token claims", error);
          setIsAdmin(false);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        navigate("/admin/login");
      }
    });
    return unsubscribeAuth;
  }, [navigate]);
  useEffect(() => {
    if (isAdmin) {
      setIsLoading(true);
      fetchCMSData();
      fetchAllData();
    } else if (!isLoading && user) {
      setIsLoading(false);
    }
  }, [isAdmin]);
  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchCMSData();
    fetchAllData();
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      toast.error("Failed to sign out.");
    }
  };
  const CopyIdBadge = ({ id }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async (e) => {
      e.stopPropagation();
      try {
        await navigator.clipboard.writeText(id);
        setCopied(true);
        setTimeout(() => setCopied(false), 2e3);
      } catch {
        const el = document.createElement("textarea");
        el.value = id;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
        setTimeout(() => setCopied(false), 2e3);
      }
    };
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 group", children: [
      /* @__PURE__ */ jsx("code", { className: "text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded-md max-w-[120px] truncate block", children: id }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleCopy,
          title: copied ? "Copied!" : "Copy ID",
          className: `flex-shrink-0 p-1 rounded transition-colors ${copied ? "text-green-600 bg-green-50" : "text-slate-400 hover:text-[#134467] hover:bg-slate-100"}`,
          children: copied ? /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "w-3.5 h-3.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
              children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" })
            }
          ) : /* @__PURE__ */ jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "w-3.5 h-3.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: [
                /* @__PURE__ */ jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
                /* @__PURE__ */ jsx("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
              ]
            }
          )
        }
      )
    ] });
  };
  const handleApprove = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/drivers/${id}/approve`, {
        method: "POST"
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message ?? "Failed to approve.");
      toast.success(result.message ?? "Application approved!");
      setSelectedApp(null);
      setPendingApplications((prev) => prev.filter((app) => app.id !== id));
      fetchAllData();
    } catch (error) {
      toast.error(error.message ?? "Failed to approve application.");
    }
  };
  const handleReject = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/drivers/${id}/reject`, {
        method: "POST"
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message ?? "Failed to reject.");
      toast.success(result.message ?? "Application rejected.");
      setSelectedApp(null);
      setPendingApplications((prev) => prev.filter((app) => app.id !== id));
      fetchAllData();
    } catch (error) {
      toast.error(error.message ?? "Failed to reject application.");
    }
  };
  const handleApproveShipper = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/businesses/${id}/approve`, {
        method: "POST"
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message ?? "Failed to approve.");
      toast.success(result.message ?? "Business approved!");
      setSelectedApp(null);
      fetchAllData();
    } catch (error) {
      toast.error(error.message ?? "Failed to approve business.");
    }
  };
  const handleRejectShipper = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/businesses/${id}/reject`, {
        method: "POST"
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message ?? "Failed to reject.");
      toast.success(result.message ?? "Business rejected.");
      setSelectedApp(null);
      fetchAllData();
    } catch (error) {
      toast.error(error.message ?? "Failed to reject business.");
    }
  };
  const confirmDelete = (type, id, label) => {
    setDeleteTarget({ type, id, label });
  };
  const handleDelete = async () => {
    if (!deleteTarget) return;
    const { type, id } = deleteTarget;
    setDeleteTarget(null);
    const endpointMap = {
      driver: `${apiUrl}/api/drivers/${id}`,
      business: `${apiUrl}/api/businesses/${id}`,
      booking: `${apiUrl}/api/bookings/${id}`,
      service: `${apiUrl}/api/services/${id}`,
      sector: `${apiUrl}/api/sectors/${id}`,
      location: `${apiUrl}/api/locations/${id}`,
      landingPage: `${apiUrl}/api/location-services/${id}`,
      faq: `${apiUrl}/api/faqs/${id}`,
      blog: `${apiUrl}/api/blog/${id}`,
      // ✅ NEW
      quickQuote: `${apiUrl}/api/admin/quick-quotes/${id}`
    };
    try {
      const res = await fetch(endpointMap[type], { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      toast.success("Deleted successfully");
      setSelectedApp(null);
      fetchCMSData();
      fetchAllData();
    } catch (err) {
      toast.error(err.message ?? "Delete failed.");
    }
  };
  const openCreateForm = () => {
    setEditingItem(null);
    setIsFormOpen(true);
  };
  const openEditForm = (item) => {
    setEditingItem(item);
    setIsFormOpen(true);
  };
  const makeSaveHandler = (createEndpoint, updateEndpoint, successLabel) => async (data) => {
    const isEdit = !!data.id;
    const url = isEdit ? updateEndpoint(data.id) : createEndpoint;
    const { id, ...body } = data;
    console.log("[makeSaveHandler]", {
      isEdit,
      url,
      body
      // ← Check: does body have your updated tags & sortOrder?
    });
    const res = await fetch(url, {
      method: isEdit ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const result = await res.json();
    console.log("[makeSaveHandler] API response:", res.status, result);
    if (!res.ok) throw new Error(result.message ?? "Save failed");
    toast.success(
      isEdit ? `${successLabel} updated!` : `${successLabel} created!`
    );
    setIsFormOpen(false);
    fetchCMSData();
  };
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: "flex h-screen items-center justify-center", children: /* @__PURE__ */ jsx(Loader2, { className: "h-16 w-16 animate-spin text-primary" }) });
  }
  if (user && !isAdmin) {
    return /* @__PURE__ */ jsxs("div", { className: "flex h-screen flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-red-600", children: "Access Denied" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "You do not have permission." }),
      /* @__PURE__ */ jsx(Button, { onClick: handleLogout, variant: "link", className: "mt-4", children: "Go to Login" })
    ] });
  }
  if (!user || !isAdmin) return null;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-muted/40", children: [
    /* @__PURE__ */ jsx(
      DeleteConfirmModal,
      {
        open: !!deleteTarget,
        entityName: (deleteTarget == null ? void 0 : deleteTarget.label) ?? "this item",
        onConfirm: handleDelete,
        onCancel: () => setDeleteTarget(null)
      }
    ),
    /* @__PURE__ */ jsx(
      ServiceFormDialog,
      {
        open: isFormOpen && currentView === "services",
        editingItem: currentView === "services" ? editingItem : null,
        onClose: () => setIsFormOpen(false),
        onSave: makeSaveHandler(
          `${apiUrl}/api/services`,
          (id) => `${apiUrl}/api/services/${id}`,
          "Service"
        )
      }
    ),
    /* @__PURE__ */ jsx(
      SectorFormDialog,
      {
        open: isFormOpen && currentView === "sectors",
        editingItem: currentView === "sectors" ? editingItem : null,
        allFaqs: faqs,
        onClose: () => setIsFormOpen(false),
        onSave: makeSaveHandler(
          `${apiUrl}/api/sectors`,
          (id) => `${apiUrl}/api/sectors/${id}`,
          "Sector"
        )
      }
    ),
    /* @__PURE__ */ jsx(
      LocationFormDialog,
      {
        open: isFormOpen && currentView === "locations",
        editingItem: currentView === "locations" ? editingItem : null,
        onClose: () => setIsFormOpen(false),
        onSave: makeSaveHandler(
          `${apiUrl}/api/locations`,
          (id) => `${apiUrl}/api/locations/${id}`,
          "Location"
        )
      }
    ),
    /* @__PURE__ */ jsx(
      LandingPageFormDialog,
      {
        open: isFormOpen && currentView === "landingPages",
        editingItem: currentView === "landingPages" ? editingItem : null,
        existingPairs: landingPages.map((p) => ({
          locationSlug: p.locationSlug,
          serviceSlug: p.serviceSlug,
          id: p.id
        })),
        onClose: () => setIsFormOpen(false),
        onSave: makeSaveHandler(
          `${apiUrl}/api/location-services`,
          (id) => `${apiUrl}/api/location-services/${id}`,
          "Landing page"
        )
      }
    ),
    /* @__PURE__ */ jsx(
      FaqFormDialog,
      {
        open: isFormOpen && currentView === "faqs",
        editingItem: currentView === "faqs" ? editingItem : null,
        onClose: () => setIsFormOpen(false),
        onSave: makeSaveHandler(
          `${apiUrl}/api/faqs`,
          (id) => `${apiUrl}/api/faqs/${id}`,
          "FAQ"
        )
      }
    ),
    /* @__PURE__ */ jsx(
      BlogFormDialog,
      {
        open: isFormOpen && currentView === "blogs",
        editingItem: currentView === "blogs" ? editingItem : null,
        onClose: () => setIsFormOpen(false),
        onSave: makeSaveHandler(
          `${apiUrl}/api/blog`,
          (id) => `${apiUrl}/api/blog/${id}`,
          "Blog post"
        )
      }
    ),
    currentView === "vatSettings" && /* @__PURE__ */ jsx(VatSettingsCard, {}),
    /* @__PURE__ */ jsxs("header", { className: "flex items-center justify-between p-4 md:p-6 bg-card border-b", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-secondary", children: "FourSix46® Admin" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
          "Welcome, ",
          user == null ? void 0 : user.email
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "outline",
            onClick: handleRefresh,
            disabled: isRefreshing,
            children: [
              /* @__PURE__ */ jsx(
                RefreshCw,
                {
                  className: `w-4 h-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`
                }
              ),
              "Refresh"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(Button, { onClick: handleLogout, variant: "outline", children: [
          /* @__PURE__ */ jsx(LogOut, { className: "w-4 h-4 mr-2" }),
          " Logout"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "p-4 md:p-6 grid gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6", children: [
        {
          view: "bookings",
          label: "Bookings",
          value: normalBookings.length + businessBookings.length,
          icon: /* @__PURE__ */ jsx(PackageCheck, { className: "h-4 w-4 text-blue-600" })
        },
        {
          view: "pending",
          label: "Pending Drivers",
          value: stats.pending,
          icon: /* @__PURE__ */ jsx(Hourglass, { className: "h-4 w-4 text-yellow-600" })
        },
        {
          view: "active",
          label: "Active Drivers",
          value: stats.approved,
          icon: /* @__PURE__ */ jsx(PackageCheck, { className: "h-4 w-4 text-green-600" })
        },
        {
          view: "pendingShippers",
          label: "Pending Shippers",
          value: pendingShippers.length,
          icon: /* @__PURE__ */ jsx(Hourglass, { className: "h-4 w-4 text-yellow-600" })
        },
        {
          view: "activeShippers",
          label: "Active Shippers",
          value: activeShippers.length,
          icon: /* @__PURE__ */ jsx(PackageCheck, { className: "h-4 w-4 text-green-600" })
        },
        {
          view: "revenue",
          label: "Revenue",
          value: `£${totalRevenue.toFixed(2)}`,
          icon: /* @__PURE__ */ jsx(Banknote, { className: "h-4 w-4 text-indigo-600" })
        }
      ].map(({ view, label, value, icon }) => /* @__PURE__ */ jsxs(
        Card,
        {
          className: `cursor-pointer hover:shadow-md transition-shadow ${currentView === view ? "border-red-500 bg-red-50" : ""}`,
          onClick: () => setCurrentView(view),
          children: [
            /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: label }),
              icon
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: value }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Click to view" })
            ] })
          ]
        },
        view
      )) }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-3 lg:grid-cols-8", children: [
        { view: "services", label: "Services", count: services.length },
        { view: "sectors", label: "Sectors", count: sectors.length },
        { view: "locations", label: "Locations", count: locations.length },
        {
          view: "landingPages",
          label: "Landing Pages",
          count: landingPages.length
        },
        { view: "faqs", label: "FAQs", count: faqs.length },
        { view: "blogs", label: "Blog Posts", count: blogs.length },
        // ✅ NEW
        {
          view: "quickQuotes",
          label: "Quick Quotes",
          count: quickQuotes.length
        },
        { view: "payments", label: "Payments", count: payments.length },
        { view: "vatSettings", label: "VAT Settings", count: void 0 }
      ].map(({ view, label, count }) => /* @__PURE__ */ jsxs(
        Card,
        {
          className: `cursor-pointer hover:shadow-md transition-shadow ${currentView === view ? "border-blue-500 bg-blue-50" : ""}`,
          onClick: () => setCurrentView(view),
          children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-sm", children: label }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: count !== void 0 ? count : /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-muted-foreground mt-1" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: count !== void 0 ? `Manage ${label}` : "Configure" })
            ] })
          ]
        },
        view
      )) }),
      currentView !== "overview" && /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 mb-4", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setCurrentView("overview"),
            children: "← Hide Details"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 w-full md:w-auto", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Search...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "max-w-xs"
            }
          ),
          /* @__PURE__ */ jsxs(Select, { value: sortOrder, onValueChange: setSortOrder, children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Sort by" }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "newest", children: "Newest First" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "oldest", children: "Oldest First" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "nameasc", children: "Name A-Z" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "namedesc", children: "Name Z-A" })
            ] })
          ] })
        ] })
      ] }),
      currentView === "pending" && /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxs(CardTitle, { children: [
            "Pending Driver Applications (",
            filteredPendingApplications.length,
            ")"
          ] }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Review and approve or reject new applications." })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHead, { children: "Name" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Email" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Vehicle" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Submitted" }),
            /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsx(TableBody, { children: filteredPendingApplications.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 6, className: "text-center", children: "No pending applications found." }) }) : filteredPendingApplications.map((app) => /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxs(TableCell, { children: [
              app.firstName,
              " ",
              app.lastName
            ] }),
            /* @__PURE__ */ jsx(TableCell, { children: app.email }),
            /* @__PURE__ */ jsx(TableCell, { children: app.vehicleType }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
              Badge,
              {
                variant: "secondary",
                className: "bg-yellow-100 text-yellow-800",
                children: app.status
              }
            ) }),
            /* @__PURE__ */ jsx(TableCell, { children: app.submittedAt ? formatDate(app.submittedAt) : "-" }),
            /* @__PURE__ */ jsxs(TableCell, { className: "text-right space-x-2", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  onClick: () => setSelectedApp(app),
                  children: [
                    /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 mr-1" }),
                    " View"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "text-green-600 border-green-600",
                  onClick: () => handleApprove(app.id),
                  children: [
                    /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 mr-1" }),
                    " Approve"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "sm",
                  variant: "destructive",
                  onClick: () => handleReject(app.id),
                  children: [
                    /* @__PURE__ */ jsx(X, { className: "w-4 h-4 mr-1" }),
                    " Reject"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "sm",
                  variant: "destructive",
                  onClick: () => confirmDelete(
                    "driver",
                    app.id,
                    `${app.firstName} ${app.lastName}`
                  ),
                  children: [
                    /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 mr-1" }),
                    " Delete"
                  ]
                }
              )
            ] })
          ] }, app.id)) })
        ] }) })
      ] }),
      currentView === "active" && /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { children: [
          "Active Drivers (",
          filteredActiveDrivers.length,
          ")"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHead, { children: "Name" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Email" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Phone" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Vehicle" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
            /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsx(TableBody, { children: filteredActiveDrivers.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 6, className: "text-center", children: "No active drivers found." }) }) : filteredActiveDrivers.map((driver) => /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxs(TableCell, { children: [
              driver.firstName,
              " ",
              driver.lastName
            ] }),
            /* @__PURE__ */ jsx(TableCell, { children: driver.email }),
            /* @__PURE__ */ jsx(TableCell, { children: driver.phone }),
            /* @__PURE__ */ jsx(TableCell, { children: driver.vehicleType }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-800", children: driver.status }) }),
            /* @__PURE__ */ jsxs(TableCell, { className: "text-right space-x-2", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  onClick: () => setSelectedApp(driver),
                  children: [
                    /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 mr-1" }),
                    " View"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "sm",
                  variant: "destructive",
                  onClick: () => confirmDelete(
                    "driver",
                    driver.id,
                    `${driver.firstName} ${driver.lastName}`
                  ),
                  children: [
                    /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 mr-1" }),
                    " Delete"
                  ]
                }
              )
            ] })
          ] }, driver.id)) })
        ] }) })
      ] }),
      currentView === "pendingShippers" && /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { children: [
          "Pending Shippers (",
          filteredPendingShippers.length,
          ")"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHead, { children: "Company" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Contact" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Type" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Submitted" }),
            /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsx(TableBody, { children: filteredPendingShippers.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 6, className: "text-center", children: "No pending shippers found." }) }) : filteredPendingShippers.map((biz) => /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { children: biz.companyName }),
            /* @__PURE__ */ jsxs(TableCell, { children: [
              biz.contactFirstName,
              " ",
              biz.contactLastName
            ] }),
            /* @__PURE__ */ jsx(TableCell, { children: biz.businessType }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-100 text-yellow-800", children: biz.status }) }),
            /* @__PURE__ */ jsx(TableCell, { children: biz.submittedAt ? formatDate(biz.submittedAt) : "-" }),
            /* @__PURE__ */ jsxs(TableCell, { className: "text-right space-x-2", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  onClick: () => setSelectedApp(biz),
                  children: [
                    /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 mr-1" }),
                    " View"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "text-green-600 border-green-600",
                  onClick: () => handleApproveShipper(biz.id),
                  children: [
                    /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 mr-1" }),
                    " Approve"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "sm",
                  variant: "destructive",
                  onClick: () => handleRejectShipper(biz.id),
                  children: [
                    /* @__PURE__ */ jsx(X, { className: "w-4 h-4 mr-1" }),
                    " Reject"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "sm",
                  variant: "destructive",
                  onClick: () => confirmDelete("business", biz.id, biz.companyName),
                  children: [
                    /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 mr-1" }),
                    " Delete"
                  ]
                }
              )
            ] })
          ] }, biz.id)) })
        ] }) })
      ] }),
      currentView === "activeShippers" && /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { children: [
          "Active Shippers (",
          filteredActiveShippers.length,
          ")"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHead, { children: "Company" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Contact" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Email" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Type" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
            /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsx(TableBody, { children: filteredActiveShippers.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 6, className: "text-center", children: "No active shippers found." }) }) : filteredActiveShippers.map((biz) => /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { children: biz.companyName }),
            /* @__PURE__ */ jsxs(TableCell, { children: [
              biz.contactFirstName,
              " ",
              biz.contactLastName
            ] }),
            /* @__PURE__ */ jsx(TableCell, { children: biz.contactEmail }),
            /* @__PURE__ */ jsx(TableCell, { children: biz.businessType }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-800", children: biz.status }) }),
            /* @__PURE__ */ jsxs(TableCell, { className: "text-right space-x-2", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  onClick: () => setSelectedApp(biz),
                  children: [
                    /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 mr-1" }),
                    " View"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "sm",
                  variant: "destructive",
                  onClick: () => confirmDelete("business", biz.id, biz.companyName),
                  children: [
                    /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 mr-1" }),
                    " Delete"
                  ]
                }
              )
            ] })
          ] }, biz.id)) })
        ] }) })
      ] }),
      currentView === "bookings" && /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2", children: [
        { title: "Normal Bookings", data: filteredNormalBookings },
        { title: "Business Bookings", data: filteredBusinessBookings }
      ].map(({ title, data }) => /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { children: [
          title,
          " (",
          data.length,
          ")"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHead, { children: "Reference" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Sender/Company" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Date" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
            /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsx(TableBody, { children: data.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 5, className: "text-center", children: "No bookings found." }) }) : data.map((b) => {
            var _a2, _b2;
            return /* @__PURE__ */ jsxs(TableRow, { children: [
              /* @__PURE__ */ jsx(TableCell, { children: b.reference ?? b.id }),
              /* @__PURE__ */ jsx(TableCell, { children: ((_a2 = b.sender) == null ? void 0 : _a2.name) ?? ((_b2 = b.business) == null ? void 0 : _b2.companyName) ?? "-" }),
              /* @__PURE__ */ jsx(TableCell, { children: b.createdAt ? formatDate(b.createdAt) : "-" }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: b.status }) }),
              /* @__PURE__ */ jsxs(TableCell, { className: "text-right space-x-2", children: [
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    onClick: () => setSelectedApp(b),
                    children: [
                      /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 mr-1" }),
                      " View"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "destructive",
                    onClick: () => confirmDelete(
                      "booking",
                      b.id,
                      b.reference ?? b.id
                    ),
                    children: [
                      /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 mr-1" }),
                      " Delete"
                    ]
                  }
                )
              ] })
            ] }, b.id);
          }) })
        ] }) })
      ] }, title)) }),
      currentView === "revenue" && /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Revenue Details" }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold mb-6", children: [
            "£",
            totalRevenue.toFixed(2)
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b pb-2", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
                "Normal Bookings (",
                normalBookings.length,
                ")"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
                "£",
                totalNormalRevenue.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b pb-2", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
                "Business Bookings (",
                businessBookings.length,
                ")"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
                "£",
                totalBusinessRevenue.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b pb-2", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
                "Direct Payments (",
                (payments ?? []).filter((p) => p.status === "paid").length,
                " ",
                "paid)"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
                "£",
                totalPaymentsRevenue.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-1 font-bold text-base", children: [
              /* @__PURE__ */ jsx("span", { children: "Total Revenue" }),
              /* @__PURE__ */ jsxs("span", { children: [
                "£",
                totalRevenue.toFixed(2)
              ] })
            ] })
          ] })
        ] })
      ] }),
      currentView === "quickQuotes" && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          Dialog,
          {
            open: !!editingQuote,
            onOpenChange: (o) => !o && setEditingQuote(null),
            children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-lg", children: [
              /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { className: "text-[#134467]", children: "Edit Quick Quote" }) }),
              editingQuote && /* @__PURE__ */ jsxs("div", { className: "space-y-5 py-2 max-h-[70vh] overflow-y-auto pr-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 bg-slate-50 rounded-xl p-4 text-sm", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-[#134467]/50 uppercase tracking-wide mb-1", children: "Pickup" }),
                    /* @__PURE__ */ jsx("p", { className: "font-semibold", children: (_a = editingQuote.pickup) == null ? void 0 : _a.name }),
                    /* @__PURE__ */ jsx("p", { className: "text-[#134467]/60", children: (_b = editingQuote.pickup) == null ? void 0 : _b.postcode }),
                    /* @__PURE__ */ jsx("p", { className: "text-[#134467]/60", children: (_c = editingQuote.pickup) == null ? void 0 : _c.date }),
                    /* @__PURE__ */ jsxs("p", { className: "text-[#134467]/60", children: [
                      (_d = editingQuote.pickup) == null ? void 0 : _d.timeFrom,
                      " –",
                      " ",
                      (_e = editingQuote.pickup) == null ? void 0 : _e.timeTo
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-[#134467]/50 uppercase tracking-wide mb-1", children: "Drop" }),
                    /* @__PURE__ */ jsx("p", { className: "font-semibold", children: (_f = editingQuote.drop) == null ? void 0 : _f.name }),
                    /* @__PURE__ */ jsx("p", { className: "text-[#134467]/60", children: (_g = editingQuote.drop) == null ? void 0 : _g.postcode }),
                    /* @__PURE__ */ jsx("p", { className: "text-[#134467]/60", children: (_h = editingQuote.drop) == null ? void 0 : _h.date }),
                    /* @__PURE__ */ jsx("p", { className: "text-[#134467]/60", children: (_i = editingQuote.drop) == null ? void 0 : _i.time })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-[#134467]/50 uppercase tracking-wide mb-1", children: "Distance" }),
                    /* @__PURE__ */ jsxs("p", { children: [
                      editingQuote.distanceMiles,
                      " miles"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-[#134467]/50 uppercase tracking-wide mb-1", children: "Vehicle" }),
                    /* @__PURE__ */ jsx("p", { children: editingQuote.suggestedVehicle })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-[#134467]/50 uppercase tracking-wide mb-1", children: "Job Type" }),
                    /* @__PURE__ */ jsx("p", { children: editingQuote.jobDescription })
                  ] }),
                  editingQuote.notes && /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-[#134467]/50 uppercase tracking-wide mb-1", children: "Customer Notes" }),
                    /* @__PURE__ */ jsx("p", { className: "text-[#134467]/70", children: editingQuote.notes })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "col-span-2 border-t border-slate-200 pt-3", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-[#134467]/50 uppercase tracking-wide mb-2", children: "Contact" }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm", children: [
                      /* @__PURE__ */ jsxs("p", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Name:" }),
                        " ",
                        ((_j = editingQuote.contact) == null ? void 0 : _j.name) ?? "—"
                      ] }),
                      /* @__PURE__ */ jsxs("p", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Email:" }),
                        " ",
                        /* @__PURE__ */ jsx(
                          "a",
                          {
                            href: `mailto:${(_k = editingQuote.contact) == null ? void 0 : _k.email}`,
                            className: "text-[#48AEDD] underline",
                            children: ((_l = editingQuote.contact) == null ? void 0 : _l.email) ?? "—"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("p", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Phone:" }),
                        " ",
                        /* @__PURE__ */ jsx(
                          "a",
                          {
                            href: `tel:${(_m = editingQuote.contact) == null ? void 0 : _m.phone}`,
                            className: "text-[#48AEDD] underline",
                            children: ((_n = editingQuote.contact) == null ? void 0 : _n.phone) ?? "—"
                          }
                        )
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsx(Label, { className: "font-semibold text-[#134467]", children: "Status" }),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      value: quoteEditForm.status,
                      onChange: (e) => setQuoteEditForm((p) => ({
                        ...p,
                        status: e.target.value
                      })),
                      className: "w-full border rounded-md p-2 text-sm",
                      children: [
                        /* @__PURE__ */ jsx("option", { value: "new", children: "🔵 New" }),
                        /* @__PURE__ */ jsx("option", { value: "contacted", children: "🟡 Contacted" }),
                        /* @__PURE__ */ jsx("option", { value: "quoted", children: "🟠 Quoted" }),
                        /* @__PURE__ */ jsx("option", { value: "won", children: "🟢 Won" }),
                        /* @__PURE__ */ jsx("option", { value: "lost", children: "🔴 Lost" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsx(Label, { className: "font-semibold text-[#134467]", children: "Admin Price Quote (£)" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      type: "number",
                      placeholder: "e.g. 45.00",
                      min: "0",
                      step: "0.01",
                      value: quoteEditForm.adminPriceQuote,
                      onChange: (e) => setQuoteEditForm((p) => ({
                        ...p,
                        adminPriceQuote: e.target.value
                      }))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsx(Label, { className: "font-semibold text-[#134467]", children: "Admin Notes" }),
                  /* @__PURE__ */ jsx(
                    Textarea,
                    {
                      placeholder: "e.g. Contacted via phone, awaiting confirmation...",
                      rows: 3,
                      value: quoteEditForm.adminNotes,
                      onChange: (e) => setQuoteEditForm((p) => ({
                        ...p,
                        adminNotes: e.target.value
                      }))
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2", children: [
                /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Cancel" }) }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    onClick: handleQuoteEditSave,
                    className: "bg-[#134467] hover:bg-[#0d2f4a] text-white",
                    children: "Save Changes"
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { children: [
            "Quick Quotes (",
            quickQuotes.length,
            ")"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Table, { children: [
            /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
              /* @__PURE__ */ jsx(TableHead, { children: "Pickup" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Drop" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Date / Time Window" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Contact" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Distance" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Vehicle" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Job Type" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Price £" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Submitted" }),
              /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsx(TableBody, { children: quickQuotes.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(
              TableCell,
              {
                colSpan: 10,
                className: "text-center text-muted-foreground py-8",
                children: "No quick quotes yet."
              }
            ) }) : quickQuotes.map((q) => {
              var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2;
              const statusColors = {
                new: "bg-blue-100 text-blue-800",
                contacted: "bg-yellow-100 text-yellow-800",
                quoted: "bg-orange-100 text-orange-800",
                won: "bg-green-100 text-green-800",
                lost: "bg-red-100 text-red-800"
              };
              return /* @__PURE__ */ jsxs(TableRow, { children: [
                /* @__PURE__ */ jsxs(TableCell, { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium", children: (_a2 = q.pickup) == null ? void 0 : _a2.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: (_b2 = q.pickup) == null ? void 0 : _b2.postcode })
                ] }),
                /* @__PURE__ */ jsxs(TableCell, { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium", children: (_c2 = q.drop) == null ? void 0 : _c2.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: (_d2 = q.drop) == null ? void 0 : _d2.postcode })
                ] }),
                /* @__PURE__ */ jsxs(TableCell, { children: [
                  /* @__PURE__ */ jsxs("p", { className: "text-xs", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "P:" }),
                    " ",
                    (_e2 = q.pickup) == null ? void 0 : _e2.date,
                    " ",
                    (_f2 = q.pickup) == null ? void 0 : _f2.timeFrom,
                    "–",
                    (_g2 = q.pickup) == null ? void 0 : _g2.timeTo
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "D:" }),
                    " ",
                    (_h2 = q.drop) == null ? void 0 : _h2.date,
                    " @ ",
                    (_i2 = q.drop) == null ? void 0 : _i2.time
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(TableCell, { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: ((_j2 = q.contact) == null ? void 0 : _j2.name) ?? "—" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: ((_k2 = q.contact) == null ? void 0 : _k2.email) ?? "—" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: ((_l2 = q.contact) == null ? void 0 : _l2.phone) ?? "—" })
                ] }),
                /* @__PURE__ */ jsxs(TableCell, { children: [
                  q.distanceMiles,
                  " mi"
                ] }),
                /* @__PURE__ */ jsx(TableCell, { className: "text-sm", children: q.suggestedVehicle }),
                /* @__PURE__ */ jsx(TableCell, { className: "text-sm", children: q.jobDescription }),
                /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
                  Badge,
                  {
                    className: statusColors[q.status] ?? "bg-gray-100 text-gray-700",
                    children: q.status ?? "new"
                  }
                ) }),
                /* @__PURE__ */ jsx(TableCell, { children: q.adminPriceQuote != null ? /* @__PURE__ */ jsxs("span", { className: "font-semibold text-green-700", children: [
                  "£",
                  Number(q.adminPriceQuote).toFixed(2)
                ] }) : /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-xs", children: "—" }) }),
                /* @__PURE__ */ jsx(TableCell, { className: "text-xs", children: q.createdAt ? formatDate(q.createdAt) : "—" }),
                /* @__PURE__ */ jsxs(TableCell, { className: "text-right space-x-2", children: [
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      onClick: () => {
                        setEditingQuote(q);
                        setQuoteEditForm({
                          status: q.status ?? "new",
                          adminPriceQuote: q.adminPriceQuote != null ? String(q.adminPriceQuote) : "",
                          adminNotes: q.adminNotes ?? ""
                        });
                      },
                      children: "Edit"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "destructive",
                      onClick: () => {
                        var _a3, _b3;
                        return confirmDelete(
                          "quickQuote",
                          q.id,
                          `${(_a3 = q.pickup) == null ? void 0 : _a3.name} → ${(_b3 = q.drop) == null ? void 0 : _b3.name}`
                        );
                      },
                      children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" })
                    }
                  )
                ] })
              ] }, q.id);
            }) })
          ] }) })
        ] })
      ] }),
      currentView === "payments" && /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { children: [
          "Payments (",
          payments.length,
          ")"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHead, { children: "Name" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Email" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Reference" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Net" }),
            /* @__PURE__ */ jsx(TableHead, { children: "VAT" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Total" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Date" })
          ] }) }),
          /* @__PURE__ */ jsx(TableBody, { children: payments.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 8, className: "text-center", children: "No payments yet." }) }) : payments.map((p) => /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { children: p.name }),
            /* @__PURE__ */ jsx(TableCell, { children: p.email }),
            /* @__PURE__ */ jsx(TableCell, { children: p.reference }),
            /* @__PURE__ */ jsxs(TableCell, { children: [
              "£",
              Number(p.netAmount).toFixed(2)
            ] }),
            /* @__PURE__ */ jsxs(TableCell, { children: [
              "£",
              Number(p.vatAmount).toFixed(2)
            ] }),
            /* @__PURE__ */ jsxs(TableCell, { className: "font-bold", children: [
              "£",
              Number(p.totalAmount).toFixed(2)
            ] }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
              Badge,
              {
                variant: p.status === "paid" ? "default" : "secondary",
                children: p.status
              }
            ) }),
            /* @__PURE__ */ jsx(TableCell, { children: p.createdAt ? formatDate(p.createdAt) : "-" })
          ] }, p.id)) })
        ] }) })
      ] }),
      [
        "services",
        "sectors",
        "locations",
        "landingPages",
        "faqs",
        "blogs"
      ].map((view) => {
        if (currentView !== view) return null;
        const dataMap = {
          services,
          sectors,
          locations,
          landingPages,
          faqs,
          blogs
          // ✅ NEW
        };
        const data = dataMap[view];
        const labelMap = {
          services: "Service",
          sectors: "Sector",
          locations: "Location",
          landingPages: "Landing Page",
          faqs: "FAQ",
          blogs: "Blog Post"
          // ✅ NEW
        };
        return /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(CardTitle, { children: [
                labelMap[view],
                "s CMS"
              ] }),
              /* @__PURE__ */ jsxs(CardDescription, { className: "mt-1", children: [
                view === "services" && "Manage courier service pages",
                view === "sectors" && "Manage industry/sector pages",
                view === "locations" && "Manage city/region pages",
                view === "landingPages" && "Manage Location × Service SEO landing pages",
                view === "faqs" && "Manage shared FAQ library",
                view === "blogs" && "Manage blog posts and articles"
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Button, { onClick: openCreateForm, children: [
              "+ Add ",
              labelMap[view]
            ] })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Table, { children: [
            /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsx(TableRow, { children: view === "faqs" ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(TableHead, { children: "Question" }),
              /* @__PURE__ */ jsx(TableHead, { children: "ID" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Tags" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Actions" })
            ] }) : view === "landingPages" ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(TableHead, { children: "Location Slug" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Service Slug" }),
              /* @__PURE__ */ jsx(TableHead, { children: "URL" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Actions" })
            ] }) : view === "blogs" ? (
              // ✅ NEW — Blog columns
              /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(TableHead, { children: "Title" }),
                /* @__PURE__ */ jsx(TableHead, { children: "Slug" }),
                /* @__PURE__ */ jsx(TableHead, { children: "Category" }),
                /* @__PURE__ */ jsx(TableHead, { children: "Author" }),
                /* @__PURE__ */ jsx(TableHead, { children: "Featured" }),
                /* @__PURE__ */ jsx(TableHead, { children: "Published" }),
                /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
                /* @__PURE__ */ jsx(TableHead, { children: "Actions" })
              ] })
            ) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(TableHead, { children: "Name" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Slug" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Actions" })
            ] }) }) }),
            /* @__PURE__ */ jsx(TableBody, { children: data.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsxs(
              TableCell,
              {
                colSpan: 8,
                className: "text-center py-8 text-muted-foreground",
                children: [
                  "No ",
                  labelMap[view].toLowerCase(),
                  's found. Click "+ Add',
                  " ",
                  labelMap[view],
                  '" to create one.'
                ]
              }
            ) }) : data.map((item) => /* @__PURE__ */ jsxs(TableRow, { children: [
              view === "faqs" ? /* @__PURE__ */ jsx(TableCell, { className: "max-w-xs truncate", children: item.question }) : view === "landingPages" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(TableCell, { children: item.locationSlug }),
                /* @__PURE__ */ jsx(TableCell, { children: item.serviceSlug }),
                /* @__PURE__ */ jsxs(TableCell, { className: "font-mono text-xs text-blue-600", children: [
                  "/locations/",
                  item.locationSlug,
                  "/",
                  item.serviceSlug
                ] })
              ] }) : view === "blogs" ? (
                // ✅ NEW — Blog row cells
                /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(TableCell, { className: "font-medium max-w-xs truncate", children: item.title }),
                  /* @__PURE__ */ jsx(TableCell, { className: "font-mono text-sm text-muted-foreground", children: item.slug }),
                  /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: item.category ?? "—" }) }),
                  /* @__PURE__ */ jsx(TableCell, { className: "text-sm", children: item.authorName ?? "—" }),
                  /* @__PURE__ */ jsx(TableCell, { children: item.isFeatured ? /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-100 text-yellow-800 text-xs", children: "Featured" }) : /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-xs", children: "—" }) }),
                  /* @__PURE__ */ jsx(TableCell, { className: "text-xs text-muted-foreground", children: item.publishedDate ?? "—" })
                ] })
              ) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(TableCell, { className: "font-medium", children: item.name }),
                /* @__PURE__ */ jsx(TableCell, { className: "font-mono text-sm text-muted-foreground", children: item.slug })
              ] }),
              view === "faqs" && /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(CopyIdBadge, { id: item.id }) }),
              view === "faqs" && /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: (item.tags ?? []).slice(0, 3).map((t) => /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "outline",
                  className: "text-xs",
                  children: t
                },
                t
              )) }) }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
                Badge,
                {
                  className: item.status === "published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800",
                  children: item.status
                }
              ) }),
              /* @__PURE__ */ jsxs(TableCell, { className: "space-x-2", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    onClick: () => openEditForm(item),
                    children: "Edit"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "destructive",
                    onClick: () => confirmDelete(
                      view === "landingPages" ? "landingPage" : view === "blogs" ? "blog" : view.replace(/s$/, ""),
                      item.id,
                      item.title ?? item.name ?? item.question ?? `${item.locationSlug}/${item.serviceSlug}`
                    ),
                    children: [
                      /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 mr-1" }),
                      " Delete"
                    ]
                  }
                )
              ] })
            ] }, item.id)) })
          ] }) })
        ] }, view);
      })
    ] }),
    /* @__PURE__ */ jsx(
      Dialog,
      {
        open: !!selectedApp,
        onOpenChange: (open) => !open && setSelectedApp(null),
        children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-[600px]", children: [
          /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: selectedApp && "companyName" in selectedApp ? "Business Registration Details" : selectedApp && "mode" in selectedApp ? "Booking Details" : "Driver Application Details" }) }),
          selectedApp && /* @__PURE__ */ jsxs("div", { className: "grid gap-4 py-4 max-h-[70vh] overflow-y-auto pr-6", children: [
            "companyName" in selectedApp && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-lg font-extrabold mb-2 uppercase tracking-wide",
                  style: {
                    color: "#48AEDD",
                    borderBottom: "2px solid #F1C40F"
                  },
                  children: "Company Information"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Company Name",
                  value: selectedApp.companyName
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Business Type",
                  value: selectedApp.businessType
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Registration Number",
                  value: selectedApp.registrationNumber ?? "Not provided"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "VAT Number",
                  value: selectedApp.vatNumber ?? "Not provided"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Company Address",
                  value: selectedApp.companyAddress
                }
              ),
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-lg font-extrabold mt-4 mb-2 uppercase tracking-wide",
                  style: {
                    color: "#48AEDD",
                    borderBottom: "2px solid #F1C40F"
                  },
                  children: "Contact Details"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Contact Person",
                  value: `${selectedApp.contactFirstName} ${selectedApp.contactLastName}`
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Job Title",
                  value: selectedApp.jobTitle
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Email",
                  value: selectedApp.contactEmail
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Phone",
                  value: selectedApp.contactPhone
                }
              ),
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-lg font-extrabold mt-4 mb-2 uppercase tracking-wide",
                  style: {
                    color: "#48AEDD",
                    borderBottom: "2px solid #F1C40F"
                  },
                  children: "Shipping Profile"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Monthly Shipments",
                  value: selectedApp.monthlyShipments
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Parcel Types",
                  value: selectedApp.parcelTypes
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Delivery Areas",
                  value: selectedApp.deliveryAreas
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Special Requirements",
                  value: selectedApp.specialRequirements ?? "None"
                }
              ),
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-lg font-extrabold mt-4 mb-2 uppercase tracking-wide",
                  style: {
                    color: "#48AEDD",
                    borderBottom: "2px solid #F1C40F"
                  },
                  children: "Billing"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Billing Method",
                  value: selectedApp.billingMethod
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Billing Email",
                  value: selectedApp.billingEmail ?? "Same as contact"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Terms Accepted",
                  value: selectedApp.termsAccepted ? "Yes" : "No"
                }
              )
            ] }),
            "mode" in selectedApp && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-lg font-extrabold mb-2 uppercase tracking-wide",
                  style: {
                    color: "#48AEDD",
                    borderBottom: "2px solid #F1C40F"
                  },
                  children: "Booking Details"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Reference",
                  value: selectedApp.reference ?? selectedApp.id
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Mode",
                  value: selectedApp.mode
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Status",
                  value: selectedApp.status
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Date",
                  value: selectedApp.createdAt ? formatDate(selectedApp.createdAt) : "-"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Pickup Address",
                  value: ((_o = selectedApp.delivery) == null ? void 0 : _o.pickupAddress) ?? "-"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Drop-off Address",
                  value: ((_p = selectedApp.delivery) == null ? void 0 : _p.dropoffAddress) ?? "-"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Total incl. VAT",
                  value: ((_q = selectedApp.pricing) == null ? void 0 : _q.finalPrice) ? `£${Number(selectedApp.pricing.finalPrice).toFixed(2)}` : "-"
                }
              )
            ] }),
            !("companyName" in selectedApp) && !("mode" in selectedApp) && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-lg font-extrabold mb-2 uppercase tracking-wide",
                  style: {
                    color: "#48AEDD",
                    borderBottom: "2px solid #F1C40F"
                  },
                  children: "Personal Information"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Name",
                  value: `${selectedApp.firstName} ${selectedApp.lastName}`
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Date of Birth",
                  value: selectedApp.dateOfBirth
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "DBS Requested",
                  value: selectedApp.dbsConfirmed ? "Yes" : "No"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Email",
                  value: selectedApp.email
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Phone",
                  value: selectedApp.phone
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Address",
                  value: `${selectedApp.addressLine1}${selectedApp.addressLine2 ? ", " + selectedApp.addressLine2 : ""}`
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Town/City",
                  value: selectedApp.town
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "County",
                  value: selectedApp.county ?? "-"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Postcode",
                  value: selectedApp.postcode
                }
              ),
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-lg font-extrabold mt-4 mb-2 uppercase tracking-wide",
                  style: {
                    color: "#48AEDD",
                    borderBottom: "2px solid #F1C40F"
                  },
                  children: "Vehicle & Compliance"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Vehicle Type",
                  value: selectedApp.vehicleType
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "License Plate",
                  value: selectedApp.registration
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Make & Model",
                  value: selectedApp.makeModel
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "DVLA Check Code",
                  value: selectedApp.dvlaCheckCode ?? "Not provided"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Year",
                  value: selectedApp.year
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "NI Number",
                  value: selectedApp.niNumber
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "UTR Number",
                  value: selectedApp.utrNumber ?? "Not provided"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Right to Work Code",
                  value: selectedApp.rightToWorkCode
                }
              ),
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-lg font-extrabold mt-4 mb-2 uppercase tracking-wide",
                  style: {
                    color: "#48AEDD",
                    borderBottom: "2px solid #F1C40F"
                  },
                  children: "Documents"
                }
              ),
              !selectedApp.drivingLicenseUrl && !selectedApp.rightToWorkDocUrl && !selectedApp.vehicleInsuranceUrl && !selectedApp.publicLiabilityInsuranceUrl && !selectedApp.goodsInTransitInsuranceUrl ? (
                // ✅ Empty state — shown when driver hasn't uploaded anything yet
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-4 rounded-lg bg-yellow-50 border border-yellow-200 mb-3", children: [
                  /* @__PURE__ */ jsx(Hourglass, { className: "w-5 h-5 text-yellow-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-yellow-800", children: "No documents uploaded yet" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-yellow-700 mt-0.5", children: "The driver has not uploaded any documents. They will be shared via the approval email." })
                  ] })
                ] })
              ) : (
                // ✅ Show available documents
                /* @__PURE__ */ jsxs(Fragment, { children: [
                  selectedApp.drivingLicenseUrl && /* @__PURE__ */ jsx(
                    DetailRow,
                    {
                      label: "Driving License",
                      value: /* @__PURE__ */ jsx(
                        FilePreview,
                        {
                          url: selectedApp.drivingLicenseUrl
                        }
                      )
                    }
                  ),
                  selectedApp.rightToWorkDocUrl && /* @__PURE__ */ jsx(
                    DetailRow,
                    {
                      label: "Right to Work",
                      value: /* @__PURE__ */ jsx(
                        FilePreview,
                        {
                          url: selectedApp.rightToWorkDocUrl
                        }
                      )
                    }
                  ),
                  selectedApp.vehicleInsuranceUrl && /* @__PURE__ */ jsx(
                    DetailRow,
                    {
                      label: "Vehicle Insurance",
                      value: /* @__PURE__ */ jsx(
                        FilePreview,
                        {
                          url: selectedApp.vehicleInsuranceUrl
                        }
                      )
                    }
                  ),
                  selectedApp.publicLiabilityInsuranceUrl && /* @__PURE__ */ jsx(
                    DetailRow,
                    {
                      label: "Public Liability Insurance",
                      value: /* @__PURE__ */ jsx(
                        FilePreview,
                        {
                          url: selectedApp.publicLiabilityInsuranceUrl
                        }
                      )
                    }
                  ),
                  selectedApp.goodsInTransitInsuranceUrl && /* @__PURE__ */ jsx(
                    DetailRow,
                    {
                      label: "Goods In Transit Insurance",
                      value: /* @__PURE__ */ jsx(
                        FilePreview,
                        {
                          url: selectedApp.goodsInTransitInsuranceUrl
                        }
                      )
                    }
                  )
                ] })
              ),
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-lg font-extrabold mt-4 mb-2 uppercase tracking-wide",
                  style: {
                    color: "#48AEDD",
                    borderBottom: "2px solid #F1C40F"
                  },
                  children: "Banking"
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Account Name",
                  value: selectedApp.accountName
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Sort Code",
                  value: selectedApp.sortCode
                }
              ),
              /* @__PURE__ */ jsx(
                DetailRow,
                {
                  label: "Account Number",
                  value: selectedApp.accountNumber
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { type: "button", variant: "secondary", children: "Close" }) }),
            selectedApp && !("companyName" in selectedApp) && !("mode" in selectedApp) && /* @__PURE__ */ jsxs(Fragment, { children: [
              selectedApp.status === "pending" && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    variant: "destructive",
                    onClick: () => handleReject(selectedApp.id),
                    children: [
                      /* @__PURE__ */ jsx(X, { className: "w-4 h-4 mr-1" }),
                      " Reject"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    variant: "outline",
                    className: "text-green-600 border-green-600",
                    onClick: () => handleApprove(selectedApp.id),
                    children: [
                      /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 mr-1" }),
                      " Approve"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "destructive",
                  onClick: () => confirmDelete(
                    "driver",
                    selectedApp.id,
                    `${selectedApp.firstName} ${selectedApp.lastName}`
                  ),
                  children: [
                    /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 mr-1" }),
                    " Delete"
                  ]
                }
              )
            ] }),
            selectedApp && "companyName" in selectedApp && /* @__PURE__ */ jsxs(Fragment, { children: [
              selectedApp.status === "pending" && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    variant: "destructive",
                    onClick: () => handleRejectShipper(
                      selectedApp.id
                    ),
                    children: [
                      /* @__PURE__ */ jsx(X, { className: "w-4 h-4 mr-1" }),
                      " Reject"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    variant: "outline",
                    className: "text-green-600 border-green-600",
                    onClick: () => handleApproveShipper(
                      selectedApp.id
                    ),
                    children: [
                      /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 mr-1" }),
                      " Approve"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "destructive",
                  onClick: () => confirmDelete(
                    "business",
                    selectedApp.id,
                    selectedApp.companyName
                  ),
                  children: [
                    /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 mr-1" }),
                    " Delete"
                  ]
                }
              )
            ] })
          ] })
        ] })
      }
    )
  ] });
}
export {
  AdminDashboardPage as default
};
