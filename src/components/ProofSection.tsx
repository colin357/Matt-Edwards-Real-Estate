import Image from "next/image";
import { proof, site, yearsInBusiness } from "@/lib/site";

const serif = { fontFamily: "var(--font-heading)" };

/**
 * Reviews, deal highlights, years in business, license number and the Sotheby's network.
 * Fed from lib/site.ts. Renders nothing until at least one item has real data,
 * so no placeholder proof ever appears on the site.
 */
export default function ProofSection({ className = "" }: { className?: string }) {
  const years = yearsInBusiness();
  const facts = [
    years ? { value: `${years}+`, label: "Years in Real Estate" } : null,
    proof.deals.length ? { value: String(proof.deals.length), label: "Featured Transactions" } : null,
    site.about.southOfFifthSince ? { value: site.about.southOfFifthSince, label: "South of Fifth Resident Since" } : null,
    site.about.licenseNumber ? { value: site.about.licenseNumber, label: "Florida License" } : null,
  ].filter(Boolean) as { value: string; label: string }[];

  const hasRealData = proof.testimonials.length > 0 || proof.deals.length > 0 || facts.length > 0;
  if (!hasRealData) return null;

  return (
    <section className={`bg-white py-20 ${className}`} aria-labelledby="proof-heading">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow">Track Record</p>
          <h2 id="proof-heading" className="section-title text-3xl md:text-5xl text-[var(--ink)] mt-5">
            Trusted by Buyers &amp; Sellers
          </h2>
        </div>

        {facts.length > 0 && (
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200 mb-12">
            {facts.map((f) => (
              <div key={f.label} className="bg-white p-6 text-center">
                <dd className="text-3xl text-[var(--navy)]" style={serif}>{f.value}</dd>
                <dt className="mt-2 text-[0.62rem] tracking-[0.2em] uppercase text-[var(--muted)]">{f.label}</dt>
              </div>
            ))}
          </dl>
        )}

        {proof.testimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {proof.testimonials.map((t) => (
              <figure key={t.quote} className="bg-[var(--cream)] p-8">
                <blockquote className="text-lg italic leading-relaxed text-[var(--ink)]" style={serif}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-[0.66rem] tracking-[0.2em] uppercase text-[var(--muted)]">
                  {t.name}
                  {t.context ? ` · ${t.context}` : ""}
                  {t.sourceUrl && (
                    <>
                      {" · "}
                      <a href={t.sourceUrl} target="_blank" rel="noopener" className="underline">Source</a>
                    </>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {proof.deals.length > 0 && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 mb-12">
            {proof.deals.map((d) => (
              <li key={d.title} className="bg-white p-6">
                <p className="text-[0.62rem] tracking-[0.2em] uppercase text-[var(--navy)]">{d.role}</p>
                <p className="mt-2 text-lg text-[var(--ink)]" style={serif}>{d.title}</p>
                {d.detail && <p className="mt-1 text-sm text-[var(--muted)]">{d.detail}</p>}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-center sm:text-left border-t border-gray-200 pt-10">
          <Image src="/images/one-sothebys.png" alt="" aria-hidden="true" width={1013} height={223} className="h-9 w-auto" />
          <p className="text-sm text-[var(--muted)] max-w-xl leading-relaxed">
            Backed by {site.brokerage} and the worldwide Sotheby&apos;s International Realty network, putting your
            property in front of qualified buyers in Miami and around the world.
          </p>
        </div>
      </div>
    </section>
  );
}
