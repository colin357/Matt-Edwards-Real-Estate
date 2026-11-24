"use client";

import Link from "next/link";
import type { Intent } from "@/components/LeadForm";

/** A link that also pre-selects the contact form's "I'm looking to" option on the same page. */
export default function IntentLink({
  intent,
  href = "#contact",
  className,
  children,
}: {
  intent: Intent;
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent("lead-intent", { detail: intent }))}
    >
      {children}
    </Link>
  );
}
