import { pageMetadata } from "@/lib/metadata";
import { site, addressLine1, addressLine2 } from "@/lib/site";

// TODO(Matt): replace this placeholder with a privacy policy reviewed by ONE Sotheby's compliance or an attorney.
export const metadata = pageMetadata({
  title: "Privacy Policy | Matt Edwards",
  description: "How Matt Edwards collects and uses information submitted through this website.",
  path: "/privacy-policy",
  noindex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-36 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-[var(--muted)] leading-relaxed space-y-5">
        <h1 className="text-4xl uppercase tracking-[0.06em] text-[var(--ink)]" style={{ fontFamily: "var(--font-heading)" }}>
          Privacy Policy
        </h1>
        <p className="text-sm italic">This policy is being finalized. Last updated: pending.</p>
        <p>
          When you submit a form on this website, we collect the details you provide (such as your name, email address,
          phone number and message) and use them only to respond to your inquiry and provide real estate services. We do
          not sell your personal information.
        </p>
        <p>
          This site may use analytics tools, such as Google Analytics, to understand how visitors use the site. These tools
          may set cookies and collect information such as pages visited and device type.
        </p>
        <p>
          To ask about or update the information we hold about you, contact {site.name} at{" "}
          <a href={`mailto:${site.email}`} className="underline">{site.email}</a> or {addressLine1}, {addressLine2}.
        </p>
      </div>
    </section>
  );
}
