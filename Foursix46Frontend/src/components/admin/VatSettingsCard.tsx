// src/components/admin/VatSettingsCard.tsx
// Drop this card into any admin settings/dashboard page.
// It reads & writes to GET/POST /api/settings/vat

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Loader2, Percent, Save, RefreshCw, Info } from "lucide-react";
import { toast } from "sonner";
import { useVatSettings } from "@/hooks/useVatSettings";

export function VatSettingsCard() {
  const { settings, loading, saving, error, saveSettings, refetch } =
    useVatSettings();

  /* local draft — only committed on Save */
  const [draft, setDraft] = useState(settings);

  /* sync draft when remote settings load */
  useEffect(() => {
    setDraft(settings);
  }, [settings]);

  const isDirty =
    draft.vatEnabled !== settings.vatEnabled ||
    draft.vatRate !== settings.vatRate;

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

  return (
    <Card className="p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
      {/* ── Header ── */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#134467]/8 flex items-center justify-center">
            <Percent className="w-5 h-5 text-[#134467]" />
          </div>
          <div>
            <h3 className="font-bold text-[#134467] text-base leading-tight">
              VAT Settings
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Controls VAT display and calculation on the payment page
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {loading && (
            <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
          )}
          <Badge
            variant={draft.vatEnabled ? "default" : "secondary"}
            className={
              draft.vatEnabled
                ? "bg-green-100 text-green-800 border-green-200"
                : "bg-slate-100 text-slate-500 border-slate-200"
            }
          >
            {draft.vatEnabled ? `VAT ${draft.vatRate}% Active` : "VAT Disabled"}
          </Badge>
        </div>
      </div>

      {/* ── Error banner ── */}
      {error && (
        <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
          ⚠️ {error}
        </div>
      )}

      {/* ── VAT Toggle ── */}
      <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-[#134467]">Enable VAT</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            When enabled, VAT is calculated and displayed on the payment page
          </p>
        </div>
        <Switch
          checked={draft.vatEnabled}
          onCheckedChange={(v) => setDraft((d) => ({ ...d, vatEnabled: v }))}
          disabled={loading || saving}
        />
      </div>

      {/* ── VAT Rate ── */}
      <div className="space-y-2">
        <Label
          htmlFor="vatRate"
          className="text-sm font-semibold text-[#134467]"
        >
          VAT Rate (%)
        </Label>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Input
              id="vatRate"
              type="number"
              min={0}
              max={100}
              step={0.01}
              value={draft.vatRate}
              onChange={(e) =>
                setDraft((d) => ({ ...d, vatRate: Number(e.target.value) }))
              }
              disabled={!draft.vatEnabled || loading || saving}
              className="pr-8 disabled:opacity-50"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium pointer-events-none">
              %
            </span>
          </div>
          <div className="text-sm text-muted-foreground whitespace-nowrap">
            e.g.{" "}
            <span className="font-mono font-semibold text-[#134467]">
              {draft.vatEnabled ? draft.vatRate : "—"}%
            </span>
          </div>
        </div>
        {!draft.vatEnabled && (
          <p className="text-xs text-muted-foreground">
            VAT rate field is inactive while VAT is disabled.
          </p>
        )}
      </div>

      {/* ── Live Preview ── */}
      <div className="rounded-xl border border-[#134467]/10 bg-[#134467]/5 p-4 space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-[#134467]/50 mb-3">
          Live Preview — how £100 ex-VAT will appear on payment page
        </p>
        <div className="flex justify-between text-sm">
          <span className="text-[#134467]/70">Net Amount</span>
          <span className="font-medium">£100.00</span>
        </div>
        {draft.vatEnabled ? (
          <div className="flex justify-between text-sm">
            <span className="text-[#134467]/70">VAT ({draft.vatRate}%)</span>
            <span className="font-medium">
              £{((100 * draft.vatRate) / 100).toFixed(2)}
            </span>
          </div>
        ) : (
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>VAT</span>
            <span>Not applicable</span>
          </div>
        )}
        <div className="border-t border-[#134467]/15 pt-2 flex justify-between font-bold text-sm">
          <span>Total Payable</span>
          <span>
            £
            {draft.vatEnabled
              ? (100 + (100 * draft.vatRate) / 100).toFixed(2)
              : "100.00"}
          </span>
        </div>
      </div>

      {/* ── Info note ── */}
      <div className="flex items-start gap-2 text-xs text-muted-foreground">
        <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
        <p>
          Changes take effect immediately on the live payment page once saved.
          VAT rate is also passed to the Stripe checkout session for correct
          invoice generation.
        </p>
      </div>

      {/* ── Actions ── */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          onClick={refetch}
          disabled={loading || saving}
        >
          {loading ? (
            <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4 mr-1.5" />
          )}
          Refresh
        </Button>

        <Button
          onClick={handleSave}
          disabled={!isDirty || loading || saving}
          className="bg-[#134467] hover:bg-[#0d2f4a] text-white min-w-[120px]"
          size="sm"
        >
          {saving ? (
            <>
              <Loader2 className="w-4 h-4 mr-1.5 animate-spin" /> Saving…
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-1.5" /> Save Changes
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}
