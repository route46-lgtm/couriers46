// src/hooks/useVatSettings.ts
// Shared hook — fetches VAT config from backend.
// Used by PayPage (read-only) and VatSettingsCard (read + write).

import { useState, useEffect, useCallback } from "react";

const API_URL = import.meta.env.VITE_API_URL || "https://route46.couriers.uk";

export interface VatSettings {
  vatEnabled: boolean;
  vatRate: number; // e.g. 20 for 20%
}

const DEFAULTS: VatSettings = { vatEnabled: true, vatRate: 20 };

export function useVatSettings() {
  const [settings, setSettings] = useState<VatSettings>(DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${API_URL}/api/settings/vat`);
      if (!res.ok) throw new Error("Failed to load VAT settings");
      const data = await res.json();
      setSettings({
        vatEnabled: data.vatEnabled ?? DEFAULTS.vatEnabled,
        vatRate: Number(data.vatRate ?? DEFAULTS.vatRate),
      });
    } catch (e: any) {
      setError(e.message ?? "Unknown error");
      // Fall back to defaults so the pay page still works
      setSettings(DEFAULTS);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  const saveSettings = async (updated: VatSettings): Promise<boolean> => {
    try {
      setSaving(true);
      setError(null);
      const res = await fetch(`${API_URL}/api/settings/vat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? "Failed to save VAT settings");
      }
      setSettings(updated);
      return true;
    } catch (e: any) {
      setError(e.message ?? "Unknown error");
      return false;
    } finally {
      setSaving(false);
    }
  };

  return { settings, loading, saving, error, saveSettings, refetch: fetchSettings };
}