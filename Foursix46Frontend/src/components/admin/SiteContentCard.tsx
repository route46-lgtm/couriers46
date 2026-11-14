/* ─────────────────────────────────────────────────────────────────────────────
   src/components/admin/SiteContentCard.tsx
   Admin → Site Content. Edits the settings/siteContent document:
     • Page text + footer text (every field listed in content/siteContent.ts)
     • Stats row (value + label)
     • Testimonials (name, company, quote, photo, "consent given")
     • "Trusted by" strip (logo + name, "customer confirmed")
     • Social links (incl. Crunchbase)
     • SEO titles and descriptions for the static pages
   Saved with the admin's Firebase ID token (PUT /api/admin/site-content).
───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  ArrowDown,
  ArrowUp,
  Loader2,
  Plus,
  RotateCcw,
  Save,
  Trash2,
} from "lucide-react";
import { auth } from "@/firebase";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ImageUploadField from "@/components/admin/ImageUploadField";
import { useSiteContent } from "@/content/SiteContentProvider";
import { SEO_PAGES, normaliseSiteContent } from "@/content/siteContent";
import {
  allTextGroups,
  seoOriginal,
  toDraft,
  toPayload,
  type Draft,
} from "./siteContentDraft";

const apiUrl = import.meta.env.VITE_API_URL;


async function authHeaders(): Promise<Record<string, string>> {
  const token = await auth.currentUser?.getIdToken();
  if (!token) throw new Error("You are signed out. Please sign in again.");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

function move<T>(list: T[], i: number, dir: -1 | 1): T[] {
  const j = i + dir;
  if (j < 0 || j >= list.length) return list;
  const next = [...list];
  [next[i], next[j]] = [next[j], next[i]];
  return next;
}

const RowControls = ({
  index,
  total,
  onMove,
  onRemove,
}: {
  index: number;
  total: number;
  onMove: (dir: -1 | 1) => void;
  onRemove?: () => void;
}) => (
  <div className="flex items-center gap-1">
    <Button
      type="button"
      size="icon"
      variant="ghost"
      disabled={index === 0}
      onClick={() => onMove(-1)}
      aria-label="Move up"
    >
      <ArrowUp className="w-4 h-4" />
    </Button>
    <Button
      type="button"
      size="icon"
      variant="ghost"
      disabled={index === total - 1}
      onClick={() => onMove(1)}
      aria-label="Move down"
    >
      <ArrowDown className="w-4 h-4" />
    </Button>
    {onRemove && (
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="text-red-600 hover:text-red-700"
        onClick={onRemove}
        aria-label="Remove"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    )}
  </div>
);

export function SiteContentCard() {
  const { reload } = useSiteContent();
  const [draft, setDraft] = useState<Draft | null>(null);
  const [savedJson, setSavedJson] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [textQuery, setTextQuery] = useState("");

  const load = async () => {
    setLoading(true);
    setLoadError(null);
    try {
      const res = await fetch(`${apiUrl}/api/admin/site-content`, {
        headers: await authHeaders(),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.message || `HTTP ${res.status}`);
      const d = toDraft(normaliseSiteContent(json));
      setDraft(d);
      setSavedJson(JSON.stringify(d));
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : "Failed to load site content.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const dirty = useMemo(
    () => !!draft && JSON.stringify(draft) !== savedJson,
    [draft, savedJson],
  );

  const save = async () => {
    if (!draft) return;
    setSaving(true);
    try {
      const res = await fetch(`${apiUrl}/api/admin/site-content`, {
        method: "PUT",
        headers: await authHeaders(),
        body: JSON.stringify(toPayload(draft)),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.message || `HTTP ${res.status}`);
      const d = toDraft(normaliseSiteContent(json.content));
      setDraft(d);
      setSavedJson(JSON.stringify(d));
      await reload();
      toast.success("Site content saved — live on the website now.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save site content.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-16">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  if (loadError || !draft) {
    return (
      <Card>
        <CardContent className="py-10 text-center space-y-4">
          <p className="text-red-600 font-medium">{loadError}</p>
          <Button variant="outline" onClick={load}>
            Try again
          </Button>
        </CardContent>
      </Card>
    );
  }

  const set = (patch: Partial<Draft>) => setDraft({ ...draft, ...patch });
  const setText = (key: string, value: string) =>
    set({ text: { ...draft.text, [key]: value } });

  const updateAt = <K extends keyof Draft>(
    key: K,
    i: number,
    patch: Partial<Draft[K] extends (infer U)[] ? U : never>,
  ) => {
    const list = [...(draft[key] as unknown as Record<string, unknown>[])];
    list[i] = { ...list[i], ...(patch as Record<string, unknown>) };
    set({ [key]: list } as Partial<Draft>);
  };

  return (
    <Card>
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <CardTitle>Site Content</CardTitle>
          <CardDescription className="mt-1">
            Edit website text, stats, testimonials, the "Trusted by" strip,
            social links and search titles. Changes go live as soon as you
            save. Every field shows the text currently on the website — edit
            it in place.
          </CardDescription>
        </div>
        <div className="flex items-center gap-2">
          {dirty && (
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
              Unsaved changes
            </Badge>
          )}
          <Button
            variant="outline"
            disabled={!dirty || saving}
            onClick={() => setDraft(JSON.parse(savedJson))}
          >
            <RotateCcw className="w-4 h-4 mr-2" /> Discard
          </Button>
          <Button
            className="bg-[#134467] hover:bg-[#0e3352] text-white"
            disabled={!dirty || saving}
            onClick={save}
          >
            {saving ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Save className="w-4 h-4 mr-2" />
            )}
            Save
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="text">
          <TabsList className="flex flex-wrap h-auto">
            <TabsTrigger value="text">Page text & footer</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="trusted">Trusted by</TabsTrigger>
            <TabsTrigger value="social">Social links</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>

          {/* ── Page text ─────────────────────────────────────────────── */}
          <TabsContent value="text" className="pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <Input
                value={textQuery}
                onChange={(e) => setTextQuery(e.target.value)}
                placeholder="Search page text… (e.g. refund, insurance, contact)"
                className="sm:max-w-md"
              />
              <span className="text-xs text-muted-foreground">
                Every page's text is listed below in page order. Open a page,
                change the text in a field, then Save.
              </span>
            </div>
            <Accordion type="multiple" className="w-full">
              {allTextGroups.map((group) => {
                const q = textQuery.trim().toLowerCase();
                const fields = q
                  ? group.fields.filter(
                      (fl) =>
                        fl.default.toLowerCase().includes(q) ||
                        fl.label.toLowerCase().includes(q) ||
                        (draft.text[fl.key] ?? "").toLowerCase().includes(q),
                    )
                  : group.fields;
                if (q && fields.length === 0) return null;
                const edited = group.fields.filter(
                  (fl) => (draft.text[fl.key] ?? "").trim() !== fl.default.trim(),
                ).length;
                let lastSection = "";
                return (
                  <AccordionItem key={group.id} value={group.id}>
                    <AccordionTrigger className="hover:no-underline">
                      <span className="flex flex-wrap items-center gap-2 text-left">
                        {group.label}
                        <span className="text-xs font-normal text-muted-foreground">
                          {q ? `${fields.length} match` : `${group.fields.length} fields`}
                        </span>
                        {edited > 0 && (
                          <Badge variant="secondary" className="text-xs">
                            {edited} edited
                          </Badge>
                        )}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-2">
                      {fields.map((fl) => {
                        const original = fl.default.trim();
                        const value = draft.text[fl.key] ?? original;
                        const changed = value.trim() !== original;
                        const section =
                          "section" in fl && fl.section !== lastSection
                            ? (lastSection = fl.section as string)
                            : null;
                        const multiline = fl.multiline || fl.default.length > 90;
                        return (
                          <div key={fl.key}>
                            {section && (
                              <p className="text-xs font-bold uppercase tracking-wider text-[#134467] border-b pb-1 mb-3 mt-6 first:mt-0">
                                {section}
                              </p>
                            )}
                            <div className="flex items-center justify-between gap-2">
                              <Label className="font-semibold">{fl.label}</Label>
                              {changed && (
                                <button
                                  type="button"
                                  className="text-xs text-muted-foreground hover:text-foreground underline"
                                  onClick={() => setText(fl.key, original)}
                                >
                                  Reset to original
                                </button>
                              )}
                            </div>
                            {multiline ? (
                              <Textarea
                                rows={Math.min(8, Math.max(3, Math.ceil(fl.default.length / 110)))}
                                value={value}
                                className={changed ? "mt-1 border-amber-400" : "mt-1"}
                                onChange={(e) => setText(fl.key, e.target.value)}
                              />
                            ) : (
                              <Input
                                value={value}
                                className={changed ? "mt-1 border-amber-400" : "mt-1"}
                                onChange={(e) => setText(fl.key, e.target.value)}
                              />
                            )}
                            {changed && (
                              <p className="text-[11px] text-muted-foreground mt-1">
                                {value.trim()
                                  ? <>Original: {original}</>
                                  : "Empty — the original text will be kept."}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
            <p className="text-xs text-muted-foreground mt-4">
              The footer lines "Route46 Couriers is a trading name of
              FourSix46® Global Ltd" and the company number are fixed and not
              editable here. Form error messages (e.g. "Invalid email
              address") are part of the form checks and stay in the code.
            </p>
          </TabsContent>

          {/* ── Stats ─────────────────────────────────────────────────── */}
          <TabsContent value="stats" className="pt-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              Shown in the stats row of the home page call-to-action (up to 4).
              Only add figures you can prove.
            </p>
            {draft.stats.map((s, i) => (
              <div
                key={i}
                className="grid gap-3 md:grid-cols-[1fr_2fr_auto_auto] items-end border rounded-lg p-3"
              >
                <div>
                  <Label>Value</Label>
                  <Input
                    className="mt-1"
                    value={s.value}
                    placeholder="e.g. 24/7"
                    onChange={(e) => updateAt("stats", i, { value: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Label</Label>
                  <Input
                    className="mt-1"
                    value={s.label}
                    placeholder="e.g. Service operating across the UK"
                    onChange={(e) => updateAt("stats", i, { label: e.target.value })}
                  />
                </div>
                <label className="flex items-center gap-2 text-sm pb-2">
                  <Switch
                    checked={s.enabled}
                    onCheckedChange={(v) => updateAt("stats", i, { enabled: v })}
                  />
                  Show
                </label>
                <RowControls
                  index={i}
                  total={draft.stats.length}
                  onMove={(d) => set({ stats: move(draft.stats, i, d) })}
                  onRemove={() =>
                    set({ stats: draft.stats.filter((_, k) => k !== i) })
                  }
                />
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() =>
                set({
                  stats: [...draft.stats, { value: "", label: "", enabled: true }],
                })
              }
            >
              <Plus className="w-4 h-4 mr-2" /> Add stat
            </Button>
          </TabsContent>

          {/* ── Testimonials ──────────────────────────────────────────── */}
          <TabsContent value="testimonials" className="pt-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              A testimonial appears on the website <strong>only</strong> when
              "Consent given" is ticked. With none ticked, the testimonials
              section and page are hidden.
            </p>
            {draft.testimonials.length === 0 && (
              <p className="text-sm text-muted-foreground italic">
                No testimonials yet.
              </p>
            )}
            {draft.testimonials.map((tm, i) => (
              <div key={i} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge
                    className={
                      tm.consent
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-100"
                    }
                  >
                    {tm.consent ? "Live on website" : "Hidden — no consent"}
                  </Badge>
                  <RowControls
                    index={i}
                    total={draft.testimonials.length}
                    onMove={(d) =>
                      set({ testimonials: move(draft.testimonials, i, d) })
                    }
                    onRemove={() =>
                      set({
                        testimonials: draft.testimonials.filter((_, k) => k !== i),
                      })
                    }
                  />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <Label>Name</Label>
                    <Input
                      className="mt-1"
                      value={tm.name}
                      onChange={(e) =>
                        updateAt("testimonials", i, { name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label>Company</Label>
                    <Input
                      className="mt-1"
                      value={tm.company}
                      onChange={(e) =>
                        updateAt("testimonials", i, { company: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label>Quote</Label>
                  <Textarea
                    className="mt-1"
                    rows={3}
                    value={tm.quote}
                    onChange={(e) =>
                      updateAt("testimonials", i, { quote: e.target.value })
                    }
                  />
                </div>
                <ImageUploadField
                  label="Photo (optional)"
                  folder="testimonials"
                  value={tm.photo}
                  onChange={(url) => updateAt("testimonials", i, { photo: url })}
                />
                <label className="flex items-center gap-2 text-sm font-medium">
                  <Checkbox
                    checked={tm.consent}
                    onCheckedChange={(v) =>
                      updateAt("testimonials", i, { consent: v === true })
                    }
                  />
                  Consent given — the customer agreed to this being published
                </label>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() =>
                set({
                  testimonials: [
                    ...draft.testimonials,
                    { name: "", company: "", quote: "", photo: "", consent: false },
                  ],
                })
              }
            >
              <Plus className="w-4 h-4 mr-2" /> Add testimonial
            </Button>
          </TabsContent>

          {/* ── Trusted by ────────────────────────────────────────────── */}
          <TabsContent value="trusted" className="pt-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              A logo appears in the "Trusted by" strip <strong>only</strong>{" "}
              when "Customer confirmed" is ticked. With none ticked, the strip
              is hidden.
            </p>
            {draft.trustedBy.length === 0 && (
              <p className="text-sm text-muted-foreground italic">
                No logos yet.
              </p>
            )}
            {draft.trustedBy.map((lg, i) => (
              <div key={i} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge
                    className={
                      lg.confirmed
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-100"
                    }
                  >
                    {lg.confirmed ? "Live on website" : "Hidden — not confirmed"}
                  </Badge>
                  <RowControls
                    index={i}
                    total={draft.trustedBy.length}
                    onMove={(d) => set({ trustedBy: move(draft.trustedBy, i, d) })}
                    onRemove={() =>
                      set({ trustedBy: draft.trustedBy.filter((_, k) => k !== i) })
                    }
                  />
                </div>
                <div>
                  <Label>Name</Label>
                  <Input
                    className="mt-1"
                    value={lg.name}
                    onChange={(e) =>
                      updateAt("trustedBy", i, { name: e.target.value })
                    }
                  />
                </div>
                <ImageUploadField
                  label="Logo"
                  folder="trusted-by"
                  value={lg.logo}
                  onChange={(url) => updateAt("trustedBy", i, { logo: url })}
                />
                <label className="flex items-center gap-2 text-sm font-medium">
                  <Checkbox
                    checked={lg.confirmed}
                    onCheckedChange={(v) =>
                      updateAt("trustedBy", i, { confirmed: v === true })
                    }
                  />
                  Customer confirmed — they agreed to their logo being shown
                </label>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() =>
                set({
                  trustedBy: [
                    ...draft.trustedBy,
                    { name: "", logo: "", confirmed: false },
                  ],
                })
              }
            >
              <Plus className="w-4 h-4 mr-2" /> Add logo
            </Button>
          </TabsContent>

          {/* ── Social links ──────────────────────────────────────────── */}
          <TabsContent value="social" className="pt-4 space-y-3">
            <p className="text-sm text-muted-foreground">
              Icons in the site menu ("The Route46 Verse"), in this order.
            </p>
            {draft.socialLinks.map((sl, i) => (
              <div
                key={sl.id}
                className="grid gap-3 md:grid-cols-[140px_1fr_auto_auto] items-center border rounded-lg p-3"
              >
                <span className="font-semibold text-sm">{sl.label}</span>
                <Input
                  value={sl.url}
                  placeholder="https://…"
                  onChange={(e) =>
                    updateAt("socialLinks", i, { url: e.target.value })
                  }
                />
                <label className="flex items-center gap-2 text-sm">
                  <Switch
                    checked={sl.enabled}
                    onCheckedChange={(v) =>
                      updateAt("socialLinks", i, { enabled: v })
                    }
                  />
                  Show
                </label>
                <RowControls
                  index={i}
                  total={draft.socialLinks.length}
                  onMove={(d) =>
                    set({ socialLinks: move(draft.socialLinks, i, d) })
                  }
                />
              </div>
            ))}
          </TabsContent>

          {/* ── SEO ───────────────────────────────────────────────────── */}
          <TabsContent value="seo" className="pt-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              Search titles and descriptions for the main pages, filled with
              what each page uses today. " | Route46 Couriers" is added
              to titles automatically. Services, sectors, locations and blog
              posts keep their own SEO fields in their editors.
            </p>
            {SEO_PAGES.map((pg) => {
              const v = draft.seo[pg.path] ?? seoOriginal(pg.path);
              const setSeo = (patch: Partial<typeof v>) =>
                set({ seo: { ...draft.seo, [pg.path]: { ...v, ...patch } } });
              return (
                <div key={pg.path} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{pg.label}</span>
                    <code className="text-xs text-muted-foreground">{pg.path}</code>
                  </div>
                  <div>
                    <Label>
                      Title{" "}
                      <span className="text-xs text-muted-foreground">
                        ({v.title.length}/60)
                      </span>
                    </Label>
                    <Input
                      className="mt-1"
                      value={v.title}
                      maxLength={200}
                      onChange={(e) => setSeo({ title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>
                      Description{" "}
                      <span className="text-xs text-muted-foreground">
                        ({v.description.length}/160)
                      </span>
                    </Label>
                    <Textarea
                      className="mt-1"
                      rows={2}
                      value={v.description}
                      maxLength={500}
                      onChange={(e) => setSeo({ description: e.target.value })}
                    />
                  </div>
                </div>
              );
            })}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
