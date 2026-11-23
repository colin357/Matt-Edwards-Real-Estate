import Link from "next/link";
import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { Icon } from "@/components/SocialIcons";
import { faqCategories, allFaqs } from "@/data/faqs";
import { comparisons } from "@/data/comparisons";
import { site } from "@/lib/site";

const serif = { fontFamily: "var(--font-heading)" };

export const metadata: Metadata = {
  title: "Miami & Palm Beach Real Estate FAQ | Matt Edwards",
  description:
    "Answers to the most-asked questions about buying and selling luxury real estate in Miami, Miami Beach, Palm Beach and West Palm Beach: closing costs, property taxes, homestead, condo laws, insurance, international buyers and more.",
  keywords: [
    "Miami real estate FAQ",
    "buying a home in Miami",
    "selling a home in Miami",
    "Florida closing costs",
    "Miami property taxes",
    "Florida homestead exemption",
    "Florida condo law",
    "Palm Beach real estate",
    "Miami luxury real estate agent",
  ],
  openGraph: {
    title: "Miami & Palm Beach Real Estate FAQ",
    description: "Straight answers to the questions buyers and sellers ask most, from Miami luxury advisor Matt Edwards.",
    type: "website",
  },
  alternates: {
    canonical: "/faq",
  },
};

// Structured data so Google and AI assistants can read and cite each answer.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: allFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "RealEstateAgent",
      name: site.name,
      telephone: "+1-214-886-0363",
      email: site.email,
      parentOrganization: { "@type": "Organization", name: site.brokerage },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.addressLine1,
        addressLocality: "Miami Beach",
        addressRegion: "FL",
        postalCode: "33139",
        addressCountry: "US",
      },
      areaServed: [
        "Miami",
        "Miami Beach",
        "South of Fifth",
        "Sunset Harbor",
        "Fisher Island",
        "Brickell",
        "Coconut Grove",
        "Coral Gables",
        "Palm Beach",
        "West Palm Beach",
      ],
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---------- Hero ---------- */}
      <section
        className="pt-36 pb-20 text-white text-center px-6"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #080f1e 45%, #0c3873 100%)" }}
      >
        <p className="eyebrow eyebrow-on-dark">Questions &amp; Answers</p>
        <h1 className="section-title text-4xl md:text-6xl mt-5">Real Estate FAQ</h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-300 leading-relaxed">
          Straight answers to the questions buyers and sellers ask most about Miami, Miami Beach, Palm Beach and West
          Palm Beach real estate.
        </p>
        <nav aria-label="FAQ topics" className="mt-10 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          <a
            href="#compare"
            className="border border-white bg-white text-[var(--ink)] px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase hover:bg-transparent hover:text-white transition-colors"
          >
            Compare Areas
          </a>
          {faqCategories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="border border-white/30 px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase hover:bg-white hover:text-[var(--ink)] transition-colors"
            >
              {c.title}
            </a>
          ))}
        </nav>
      </section>

      {/* ---------- Comparison articles ---------- */}
      <section id="compare" className="bg-white py-20 scroll-mt-20">
        <div className="text-center mb-12 px-6">
          <p className="eyebrow">Side by Side</p>
          <h2 className="section-title text-3xl md:text-5xl text-[var(--ink)] mt-5">Compare Before You Buy</h2>
        </div>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {comparisons.map((c) => (
            <Link key={c.slug} href={`/faq/${c.slug}`} className="group bg-white p-8 hover:bg-[#fafaf8] transition-colors">
              <p className="text-[0.62rem] tracking-[0.25em] uppercase text-[var(--navy)]">
                {c.a} vs {c.b}
              </p>
              <h3 className="mt-3 text-xl leading-snug text-[var(--ink)]" style={serif}>
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] line-clamp-3">{c.intro}</p>
              <span className="mt-5 inline-block text-[0.62rem] tracking-[0.25em] uppercase text-[var(--ink)] group-hover:text-[var(--navy)]">
                Read the Comparison <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- Questions ---------- */}
      <section className="bg-[var(--cream)] py-20">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 space-y-16">
          {faqCategories.map((c) => (
            <div key={c.id} id={c.id} className="scroll-mt-28">
              <h2 className="text-2xl md:text-3xl uppercase tracking-[0.06em] text-[var(--ink)]" style={serif}>
                {c.title}
              </h2>
              <div className="mt-6 border-t border-gray-300">
                {c.faqs.map((f) => (
                  <details key={f.q} className="group border-b border-gray-300 bg-white/0 open:bg-white transition-colors">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-1 sm:px-4 py-5 [&::-webkit-details-marker]:hidden">
                      <h3 className="text-[0.98rem] md:text-lg font-medium leading-snug text-[var(--ink)]">{f.q}</h3>
                      <span
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-2xl leading-none text-[var(--navy)] transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="px-1 sm:px-4 pb-6 text-[0.95rem] leading-[1.85] text-[var(--muted)]">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <p className="text-xs leading-relaxed text-gray-500">
            The information on this page is general in nature and is not legal, tax or financial advice. Laws, tax
            rules and insurance requirements change, so please consult a qualified professional about your situation.
          </p>
        </div>
      </section>

      {/* ---------- Lead capture ---------- */}
      <section
        id="ask"
        className="py-24 text-white scroll-mt-20"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #080f1e 45%, #0c3873 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow eyebrow-on-dark eyebrow-left">Still Have Questions?</p>
            <h2 className="section-title text-4xl md:text-5xl mt-5">Ask Matt Directly</h2>
            <p className="mt-6 text-gray-300 leading-relaxed max-w-lg">
              Every move is different. Tell Matt what you&apos;re planning and get a personal answer, a complimentary home
              valuation or a private list of properties matched to your goals.
            </p>
            <a
              href={site.phoneHref}
              className="mt-8 inline-flex items-center gap-4 hover:text-[var(--navy-light)] transition-colors"
            >
              <Icon name="phone" className="w-5 h-5" />
              <span className="tracking-wider">{site.phone}</span>
            </a>
          </div>
          <div className="w-full max-w-md lg:justify-self-end">
            <LeadForm
              eyebrow="Ask a Question"
              title="Get a Personal Answer"
              subtitle="Share a few details and Matt will follow up personally within 24 hours."
              buttonLabel="Send My Question"
              source="FAQ Page"
            />
          </div>
        </div>
      </section>
    </>
  );
}
