import { sendGAEvent } from "@next/third-parties/google";

export const gaId = process.env.NEXT_PUBLIC_GA_ID || "";

/** Sends a GA4 event. Does nothing when NEXT_PUBLIC_GA_ID is not set. */
export function trackEvent(name: string, params: Record<string, string | undefined> = {}) {
  if (!gaId || typeof window === "undefined") return;
  sendGAEvent("event", name, params);
}
