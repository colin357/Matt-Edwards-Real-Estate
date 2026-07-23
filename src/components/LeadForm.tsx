"use client";

import { useState } from "react";

interface LeadFormProps {
  /** Optional eyebrow label shown above the form title */
  eyebrow?: string;
  /** Form heading */
  title?: string;
  /** Supporting copy under the heading */
  subtitle?: string;
  /** Text for the submit button */
  buttonLabel?: string;
  /** Hidden source tag so leads can be attributed to this campaign */
  source?: string;
}

export default function LeadForm({
  eyebrow,
  title = "Get the Private South of Fifth Condo List",
  subtitle = "See available and off-market residences before they hit the wider market.",
  buttonLabel = "Send Me the List",
  source = "South of Fifth Condos Landing Page",
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // No backend is wired up yet, so we confirm on the client and prompt a call.
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 lg:p-10 shadow-xl text-center">
        <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[var(--gold)]/15 flex items-center justify-center">
          <svg className="w-7 h-7 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-[var(--charcoal)] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
          Thank you
        </h3>
        <p className="text-[var(--muted)] leading-relaxed mb-6">
          Your request is in. Matt will reach out personally within 24 hours with a curated list of South of Fifth condos matched to your criteria.
        </p>
        <a href="tel:+12148860363" className="btn-primary inline-block">
          Or Call Matt Now: (214) 886-0363
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 lg:p-10 shadow-xl">
      {eyebrow && (
        <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h3 className="text-2xl font-semibold text-[var(--charcoal)] mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
        {title}
      </h3>
      <p className="text-[var(--muted)] text-sm mb-6 leading-relaxed">
        {subtitle}
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="hidden" name="source" value={source} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lf-firstName" className="block text-xs uppercase tracking-wide text-[var(--muted)] mb-2">
              First Name
            </label>
            <input
              type="text"
              id="lf-firstName"
              name="firstName"
              autoComplete="given-name"
              className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="lf-lastName" className="block text-xs uppercase tracking-wide text-[var(--muted)] mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lf-lastName"
              name="lastName"
              autoComplete="family-name"
              className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="lf-email" className="block text-xs uppercase tracking-wide text-[var(--muted)] mb-2">
            Email
          </label>
          <input
            type="email"
            id="lf-email"
            name="email"
            autoComplete="email"
            className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="lf-phone" className="block text-xs uppercase tracking-wide text-[var(--muted)] mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="lf-phone"
            name="phone"
            autoComplete="tel"
            className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="lf-budget" className="block text-xs uppercase tracking-wide text-[var(--muted)] mb-2">
            Budget
          </label>
          <select
            id="lf-budget"
            name="budget"
            className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors bg-white"
            defaultValue=""
          >
            <option value="" disabled>Select a range</option>
            <option value="1-3m">$1M &ndash; $3M</option>
            <option value="3-5m">$3M &ndash; $5M</option>
            <option value="5-10m">$5M &ndash; $10M</option>
            <option value="10-20m">$10M &ndash; $20M</option>
            <option value="20m-plus">$20M+</option>
          </select>
        </div>

        <button type="submit" className="btn-primary w-full">
          {buttonLabel}
        </button>

        <p className="text-[11px] text-[var(--muted)] text-center leading-relaxed">
          Private &amp; confidential. No spam &mdash; just a personal follow-up from Matt.
        </p>
      </form>
    </div>
  );
}
