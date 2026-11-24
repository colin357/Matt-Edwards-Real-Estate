"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { site, phoneHref } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

export type Intent = "buy" | "sell" | "both" | "lease";
const INTENTS: Intent[] = ["buy", "sell", "both", "lease"];

interface LeadFormProps {
  /** Optional eyebrow label shown above the form title */
  eyebrow?: string;
  /** Form heading */
  title?: string;
  /** Supporting copy under the heading */
  subtitle?: string;
  /** Text for the submit button */
  buttonLabel?: string;
  /** Form name, sent with the lead and as the GA4 generate_lead "form_name" */
  source?: string;
  /** Which "I'm looking to" option is pre-selected */
  defaultIntent?: Intent;
  /** "contact" (default) or "valuation" (seller form: address, property type, timeline) */
  variant?: "contact" | "valuation";
}

const inputClass =
  "w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors bg-white";
const labelClass = "block text-xs uppercase tracking-wide text-[var(--muted)] mb-2";

export default function LeadForm({
  eyebrow,
  title = "Get the Private South of Fifth Condo List",
  subtitle = "See available and off-market residences before they hit the wider market.",
  buttonLabel = "Send Me the List",
  source = "South of Fifth Condos Landing Page",
  defaultIntent = "buy",
  variant = "contact",
}: LeadFormProps) {
  const id = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [intent, setIntent] = useState<Intent>(variant === "valuation" ? "sell" : defaultIntent);

  // Pre-select intent from ?intent=sell in the URL, or from a hero button on the same page.
  useEffect(() => {
    if (variant === "valuation") return;
    const fromUrl = new URLSearchParams(window.location.search).get("intent") as Intent | null;
    if (fromUrl && INTENTS.includes(fromUrl)) setIntent(fromUrl);
    const onIntent = (e: Event) => {
      const next = (e as CustomEvent<Intent>).detail;
      if (INTENTS.includes(next)) setIntent(next);
    };
    window.addEventListener("lead-intent", onIntent);
    return () => window.removeEventListener("lead-intent", onIntent);
  }, [variant]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    // Spam trap: real visitors never fill the hidden "company" field.
    if (data.company) return;
    delete data.company;
    const payload = { ...data, page: window.location.href, _subject: `New website lead: ${source}` };

    setStatus("sending");
    try {
      if (site.leadEndpoint) {
        const res = await fetch(site.leadEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Lead endpoint returned ${res.status}`);
      } else {
        // No lead destination configured yet: open a pre-filled email to Matt so the enquiry is not lost.
        const body = Object.entries(payload)
          .filter(([k]) => k !== "_subject")
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n");
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`;
      }
      trackEvent("generate_lead", { form_name: source, intent: data.intent, budget: data.budget });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-white p-8 lg:p-10 shadow-xl text-center text-[var(--ink)]">
        <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[var(--gold)]/15 flex items-center justify-center">
          <svg className="w-7 h-7 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-[var(--charcoal)] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
          Thank you
        </h3>
        <p className="text-[var(--muted)] leading-relaxed mb-6">Your message is in. Matt will be in touch personally.</p>
        <a href={phoneHref} className="btn-primary inline-block">
          Or Call Matt: {site.phone}
        </a>
      </div>
    );
  }

  const selling = intent === "sell";

  return (
    <div className="bg-white p-8 lg:p-10 shadow-xl text-[var(--ink)]">
      {eyebrow && <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3">{eyebrow}</p>}
      <h3 className="text-2xl font-semibold text-[var(--charcoal)] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
        {title}
      </h3>
      <p className="text-[var(--muted)] text-sm mb-6 leading-relaxed">
        {subtitle}
        {!site.showUnderOneMillion && variant === "contact" && " Properties from $1M."}
      </p>

      <form className="space-y-4" onSubmit={handleSubmit} aria-label={source}>
        <input type="hidden" name="source" value={source} />
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        {variant === "contact" ? (
          <fieldset>
            <legend className={labelClass}>I&apos;m Looking To</legend>
            <div className="grid grid-cols-4 border border-gray-200">
              {INTENTS.map((opt) => (
                <label
                  key={opt}
                  className={`cursor-pointer text-center py-2.5 text-[0.64rem] font-semibold tracking-[0.12em] uppercase border-r border-gray-200 last:border-r-0 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 ${
                    intent === opt ? "bg-[var(--ink)] text-white" : "text-[var(--muted)] hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="intent"
                    value={opt}
                    checked={intent === opt}
                    onChange={() => setIntent(opt)}
                    className="sr-only"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </fieldset>
        ) : (
          <>
            <input type="hidden" name="intent" value="sell" />
            <div>
              <label htmlFor={`${id}-address`} className={labelClass}>Property Address</label>
              <input type="text" id={`${id}-address`} name="propertyAddress" autoComplete="street-address" className={inputClass} required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`${id}-type`} className={labelClass}>Property Type</label>
                <select id={`${id}-type`} name="propertyType" className={inputClass} defaultValue="" required>
                  <option value="" disabled>Select</option>
                  <option>Condo</option>
                  <option>Single-family home</option>
                  <option>Townhome</option>
                  <option>Waterfront estate</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor={`${id}-timeline`} className={labelClass}>Timeline</label>
                <select id={`${id}-timeline`} name="timeline" className={inputClass} defaultValue="" required>
                  <option value="" disabled>Select</option>
                  <option>As soon as possible</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>6–12 months</option>
                  <option>Just curious about value</option>
                </select>
              </div>
            </div>
          </>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${id}-firstName`} className={labelClass}>First Name</label>
            <input type="text" id={`${id}-firstName`} name="firstName" autoComplete="given-name" className={inputClass} required />
          </div>
          <div>
            <label htmlFor={`${id}-lastName`} className={labelClass}>Last Name</label>
            <input type="text" id={`${id}-lastName`} name="lastName" autoComplete="family-name" className={inputClass} required />
          </div>
        </div>

        <div>
          <label htmlFor={`${id}-email`} className={labelClass}>Email</label>
          <input type="email" id={`${id}-email`} name="email" autoComplete="email" className={inputClass} required />
        </div>

        <div>
          <label htmlFor={`${id}-phone`} className={labelClass}>Phone</label>
          <input type="tel" id={`${id}-phone`} name="phone" autoComplete="tel" className={inputClass} required />
        </div>

        {variant === "contact" && intent !== "lease" && (
          <div>
            <label htmlFor={`${id}-budget`} className={labelClass}>{selling ? "Estimated Value" : "Price Range"}</label>
            <select id={`${id}-budget`} name="budget" className={inputClass} defaultValue="">
              <option value="" disabled>Select a range</option>
              {site.showUnderOneMillion && <option value="Under $1M">Under $1M</option>}
              <option value="$1M – $3M">$1M &ndash; $3M</option>
              <option value="$3M – $5M">$3M &ndash; $5M</option>
              <option value="$5M – $10M">$5M &ndash; $10M</option>
              <option value="$10M – $20M">$10M &ndash; $20M</option>
              <option value="$20M+">$20M+</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor={`${id}-message`} className={labelClass}>Message (optional)</label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={3}
            placeholder={selling ? "Anything Matt should know about the property…" : "Neighborhoods, buildings, timing…"}
            className={`${inputClass} resize-y`}
          />
        </div>

        <button type="submit" className="btn-primary w-full disabled:opacity-60" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : buttonLabel}
        </button>

        {status === "error" && (
          <p className="text-sm text-red-700 text-center" role="alert">
            Something went wrong. Please call or text Matt at{" "}
            <a href={phoneHref} className="underline">{site.phone}</a>.
          </p>
        )}

        <p className="text-[11px] text-[var(--muted)] text-center leading-relaxed">
          By submitting, you agree to be contacted by Matt Edwards about your inquiry by phone, text or email. See our{" "}
          <Link href="/privacy-policy" className="underline hover:text-[var(--ink)]">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
