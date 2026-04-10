import { useState, useCallback, useEffect } from "react";
const API_URL = "https://route46.couriers.uk";
const DEFAULTS = { vatEnabled: true, vatRate: 20 };
function useVatSettings() {
  const [settings, setSettings] = useState(DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const fetchSettings = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${API_URL}/api/settings/vat`);
      if (!res.ok) throw new Error("Failed to load VAT settings");
      const data = await res.json();
      setSettings({
        vatEnabled: data.vatEnabled ?? DEFAULTS.vatEnabled,
        vatRate: Number(data.vatRate ?? DEFAULTS.vatRate)
      });
    } catch (e) {
      setError(e.message ?? "Unknown error");
      setSettings(DEFAULTS);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);
  const saveSettings = async (updated) => {
    try {
      setSaving(true);
      setError(null);
      const res = await fetch(`${API_URL}/api/settings/vat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated)
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? "Failed to save VAT settings");
      }
      setSettings(updated);
      return true;
    } catch (e) {
      setError(e.message ?? "Unknown error");
      return false;
    } finally {
      setSaving(false);
    }
  };
  return { settings, loading, saving, error, saveSettings, refetch: fetchSettings };
}
export {
  useVatSettings as u
};
