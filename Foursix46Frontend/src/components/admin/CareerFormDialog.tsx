import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* ─── Types ─── */
// "closed" = Application closed: the job stays visible on the website with a
// "Closed – cannot apply" label and its Apply button is disabled.
export type CareerStatus = "draft" | "published" | "closed";

const STATUS_LABEL: Record<CareerStatus, string> = {
  draft: "Draft",
  published: "Published",
  closed: "Application closed",
};

interface CareerFormData {
  id?: string;
  title: string;
  location: string;
  employmentType: string;
  description: string;
  requirements: string;
  status: CareerStatus;
  sortOrder: number;
}

const defaultForm: CareerFormData = {
  title: "",
  location: "",
  employmentType: "Full-time",
  description: "",
  requirements: "",
  status: "draft",
  sortOrder: 0,
};

interface Props {
  open: boolean;
  editingItem: any | null;
  onClose: () => void;
  onSave: (data: CareerFormData) => Promise<void>;
}

/* ─── CareerFormDialog ─── */
export function CareerFormDialog({ open, editingItem, onClose, onSave }: Props) {
  const [form, setForm] = useState<CareerFormData>(defaultForm);
  const [sortOrderStr, setSortOrderStr] = useState("0");
  const [isSaving, setIsSaving] = useState(false);

  const formRef = useRef(form);
  const onSaveRef = useRef(onSave);
  formRef.current = form;
  onSaveRef.current = onSave;

  const editingId = editingItem?.id ?? null;

  useEffect(() => {
    if (!open) return;
    const next: CareerFormData = editingItem
      ? { ...defaultForm, ...editingItem }
      : defaultForm;
    setForm(next);
    setSortOrderStr(String(next.sortOrder ?? 0));
  }, [editingId, open]);

  const update = (f: Partial<CareerFormData>) => setForm((p) => ({ ...p, ...f }));

  const handleSortOrderChange = (raw: string) => {
    setSortOrderStr(raw);
    const parsed = parseInt(raw, 10);
    update({ sortOrder: isNaN(parsed) ? 0 : parsed });
  };

  const handleSave = async (status: CareerStatus) => {
    const currentForm = formRef.current;
    const save = onSaveRef.current;

    if (!currentForm.title.trim()) {
      alert("Job title is required.");
      return;
    }
    if (!currentForm.location.trim()) {
      alert("Location is required.");
      return;
    }
    if (!currentForm.description.trim()) {
      alert("Description is required.");
      return;
    }

    setIsSaving(true);
    try {
      await save({
        ...currentForm,
        status,
        ...(editingItem?.id ? { id: editingItem.id } : {}),
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {editingItem ? "Edit Career Listing" : "Create Career Listing"}
            <Badge
              variant={form.status === "draft" ? "secondary" : "default"}
              className={form.status === "closed" ? "bg-red-600 hover:bg-red-600" : ""}
            >
              {STATUS_LABEL[form.status] ?? form.status}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-y-auto flex-1 pr-2 space-y-5 py-2">
          {/* Job Title */}
          <div>
            <Label className="font-semibold">Job Title *</Label>
            <Input
              value={form.title}
              onChange={(e) => update({ title: e.target.value })}
              placeholder="e.g. Delivery Driver, Warehouse Operative"
              className="mt-1"
            />
          </div>

          {/* Location & Employment Type */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="font-semibold">Location *</Label>
              <Input
                value={form.location}
                onChange={(e) => update({ location: e.target.value })}
                placeholder="e.g. Cardiff, UK"
                className="mt-1"
              />
            </div>
            <div>
              <Label className="font-semibold">Employment Type</Label>
              <Select
                value={form.employmentType}
                onValueChange={(v) => update({ employmentType: v })}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Freelance">Freelance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Description */}
          <div>
            <Label className="font-semibold">Description *</Label>
            <Textarea
              value={form.description}
              onChange={(e) => update({ description: e.target.value })}
              rows={5}
              placeholder="Describe the role, responsibilities, and what the job involves..."
              className="mt-1"
            />
          </div>

          {/* Requirements */}
          <div>
            <Label className="font-semibold">
              Requirements{" "}
              <span className="text-xs font-normal text-muted-foreground">
                (optional, one per line)
              </span>
            </Label>
            <Textarea
              value={form.requirements}
              onChange={(e) => update({ requirements: e.target.value })}
              rows={4}
              placeholder={"Full UK driving licence\n2+ years experience\nRight to work in the UK"}
              className="mt-1"
            />
          </div>

          {/* Status & Sort Order */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Status</Label>
              <Select
                value={form.status}
                onValueChange={(v) => update({ status: v as CareerStatus })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="closed">Application closed</SelectItem>
                </SelectContent>
              </Select>
              {form.status === "closed" && (
                <p className="text-xs text-muted-foreground mt-1">
                  Stays visible on the website, labelled "Closed – cannot
                  apply", with applying disabled.
                </p>
              )}
            </div>
            <div>
              <Label>
                Sort Order{" "}
                <span className="text-xs text-muted-foreground">
                  (lower = shown first)
                </span>
              </Label>
              <Input
                type="number"
                value={sortOrderStr}
                onChange={(e) => handleSortOrderChange(e.target.value)}
                onBlur={() => {
                  const parsed = parseInt(sortOrderStr, 10);
                  const safe = isNaN(parsed) ? 0 : parsed;
                  setSortOrderStr(String(safe));
                  update({ sortOrder: safe });
                }}
                min={0}
                placeholder="0"
              />
            </div>
          </div>
        </div>

        <DialogFooter className="border-t pt-4 gap-2">
          <Button variant="outline" onClick={onClose} disabled={isSaving}>
            Cancel
          </Button>
          <Button
            variant="outline"
            disabled={isSaving}
            onClick={() => handleSave("draft")}
          >
            Save as Draft
          </Button>
          <Button
            className="bg-[#134467] hover:bg-[#0e3352] text-white"
            disabled={isSaving}
            // Keeps "Application closed" when that is the selected status;
            // otherwise publishes (draft → published, as before).
            onClick={() =>
              handleSave(form.status === "closed" ? "closed" : "published")
            }
          >
            {isSaving
              ? "Saving..."
              : form.status === "closed"
                ? editingItem
                  ? "Update (Closed)"
                  : "Create as Closed"
                : editingItem
                  ? "Update & Publish"
                  : "Create & Publish"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
