"use client";

import { useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { gaId, trackEvent } from "@/lib/analytics";

/**
 * GA4 via @next/third-parties, loaded only when NEXT_PUBLIC_GA_ID is set.
 * Tracks click_to_call (tel:), click_to_text (sms: and WhatsApp) and email_click (mailto:).
 * Form submissions are sent from LeadForm as generate_lead.
 */
export default function Analytics() {
  useEffect(() => {
    if (!gaId) return;
    const onClick = (e: MouseEvent) => {
      const href = (e.target as HTMLElement | null)?.closest?.("a")?.getAttribute("href") || "";
      const page = window.location.pathname;
      if (href.startsWith("tel:")) trackEvent("click_to_call", { link_url: href, page_path: page });
      else if (href.startsWith("sms:")) trackEvent("click_to_text", { method: "sms", link_url: href, page_path: page });
      else if (href.includes("wa.me/")) trackEvent("click_to_text", { method: "whatsapp", link_url: href, page_path: page });
      else if (href.startsWith("mailto:")) trackEvent("email_click", { link_url: href, page_path: page });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return gaId ? <GoogleAnalytics gaId={gaId} /> : null;
}
