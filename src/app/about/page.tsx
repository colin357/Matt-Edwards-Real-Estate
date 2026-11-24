import Image from "next/image";
import Link from "next/link";
import ProofSection from "@/components/ProofSection";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { site, addressLine1, addressLine2, phoneHref } from "@/lib/site";

const serif = { fontFamily: "var(--font-heading)" };

export const metadata = pageMetadata({
  title: "About Matt Edwards | Miami Beach Luxury Real Estate Advisor",
  description:
    "Meet Matt Edwards, a South of Fifth resident and luxury real estate advisor with ONE Sotheby's International Realty in Miami Beach.",
  path: "/about",
});

export default function AboutPage() {
  const { about } = site;
  // Only facts that have real values in lib/site.ts are shown (see TODO(Matt) there).
  const facts = [
    { label: "Brokerage", value: site.brokerage },
    { label: "Office", value: `${addressLine1}, ${addressLine2}` },
    about.southOfFifthSince && { label: "South of Fifth Resident Since", value: about.southOfFifthSince },
    about.inBusinessSince && { label: "In Real Estate Since", value: about.inBusinessSince },
    about.languages.length > 0 && { label: "Languages", value: about.languages.join(", ") },
    about.licenseNumber && { label: "Florida License", value: about.licenseNumber },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <JsonLd data={breadcrumbSchema([["About", "/about"]])} />

      <section
        className="pt-20 text-white"
        style={{ background: "radial-gradient(ellipse at 20% 30%, rgba(26,77,148,0.55) 0%, rgba(8,31,69,0.9) 40%, #080f1e 75%, #0a0a0a 100%)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 relative h-[480px] lg:h-auto lg:min-h-[640px]">
            <Image
              src="/images/headshot.webp"
              alt="Matt Edwards, Miami Beach luxury real estate advisor, standing outdoors in a light gray blazer"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-top"
            />
          </div>
          <div className="lg:col-span-7 px-6 sm:px-10 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
            <p className="text-[0.68rem] tracking-[0.35em] uppercase text-[var(--navy-light)]">About</p>
            <h1 className="mt-5 text-5xl sm:text-6xl uppercase tracking-[0.06em] leading-none" style={serif}>
              Matt Edwards
            </h1>
            <p className="mt-5 text-xl italic text-gray-400" style={serif}>
              Miami Luxury Specialist — Waterfront, Island &amp; Lifestyle Properties
            </p>
            <div className="mt-10 space-y-5 text-[0.95rem] leading-[1.9] text-gray-300 max-w-3xl">
              {about.story.length > 0 ? (
                about.story.map((p) => <p key={p}>{p}</p>)
              ) : (
                <>
                  <p>
                    Matt Edwards is a luxury real estate professional serving high-end buyers and sellers throughout Miami,
                    from the private shores of Fisher Island to the bayfront estates of the Venetian Islands and the
                    boutique towers of South of Fifth, the neighborhood he calls home.
                  </p>
                  <p>
                    He specializes in residential, waterfront and lifestyle-driven properties for clients who expect
                    precision, privacy and performance, pairing a local&apos;s perspective with modern, video-first
                    marketing.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl uppercase tracking-[0.06em] text-[var(--ink)]" style={serif}>
            At a Glance
          </h2>
          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {facts.map((f) => (
              <div key={f.label} className="bg-white p-6">
                <dt className="text-[0.62rem] tracking-[0.25em] uppercase text-[var(--navy)]">{f.label}</dt>
                <dd className="mt-2 text-[var(--ink)]">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href={phoneHref} className="btn-primary text-center">Call {site.phone}</a>
            <Link href="/?intent=buy#contact" className="btn-secondary text-center">Send a Message</Link>
          </div>
        </div>
      </section>

      <ProofSection />
    </>
  );
}
