import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import ProofSection from "@/components/ProofSection";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { site, phoneHref } from "@/lib/site";

const serif = { fontFamily: "var(--font-heading)" };
const darkBg = { background: "linear-gradient(135deg, #0a0a0a 0%, #080f1e 45%, #0c3873 100%)" };

export const metadata = pageMetadata({
  title: "Sell Your Miami Beach Home or Condo | Matt Edwards, ONE Sotheby's",
  description:
    "Selling in South of Fifth or Miami Beach? Get a complimentary valuation and a marketing plan with professional photo, video and the Sotheby's global network.",
  path: "/sell",
});

const steps = [
  {
    title: "Pricing Strategy",
    body: "A detailed analysis of recent sales and active competition in your building or street, so your home launches at the price that attracts serious buyers.",
  },
  {
    title: "Preparation & Staging",
    body: "Practical advice on the small improvements, styling and staging that buyers in your neighborhood actually pay for, coordinated with trusted local vendors.",
  },
  {
    title: "Professional Photography",
    body: "Magazine-quality interior, exterior and twilight photography that makes your listing stand out on every portal and social feed.",
  },
  {
    title: "Cinematic Video & Aerials",
    body: "A cinematic property film and drone footage that tell the story of the home and the lifestyle around it, made to be shared.",
  },
  {
    title: "Targeted Digital Campaigns",
    body: "Paid social and search campaigns aimed at qualified buyers in Miami, across the U.S. and in key international markets.",
  },
  {
    title: "Sotheby's Global Network",
    body: `Exposure through ${site.brokerage} and the worldwide Sotheby's International Realty network, reaching buyers who are relocating or buying a second home.`,
  },
  {
    title: "Private Showings & Negotiation",
    body: "Qualified, accompanied showings and experienced negotiation focused on your price, terms and timeline.",
  },
  {
    title: "Through to Closing",
    body: "Coordination of inspections, appraisal, condo association approvals, title and closing, with regular updates at every step.",
  },
];

export default function SellPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([["Sell", "/sell"]])} />

      {/* ---------- Hero ---------- */}
      <section className="relative pt-32 pb-20 text-white" style={darkBg}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow eyebrow-on-dark eyebrow-left">For Sellers</p>
            <h1 className="mt-5 text-4xl md:text-6xl uppercase leading-[1.05] tracking-[0.04em]" style={serif}>
              Sell Your Miami Beach Home with Matt
            </h1>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
              Modern, video-first marketing, a local&apos;s pricing insight and the reach of the Sotheby&apos;s network,
              built to get your property in front of the right buyers.
            </p>
            <ul className="mt-8 space-y-3 text-gray-200">
              {["Complimentary, confidential valuation", "A written marketing plan for your property", "Cinematic video and professional photography"].map(
                (item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[var(--navy-light)]" aria-hidden="true">&mdash;</span>
                    {item}
                  </li>
                ),
              )}
            </ul>
            <a href={phoneHref} className="mt-8 inline-block text-sm tracking-[0.15em] hover:text-[var(--navy-light)]">
              Prefer to talk? Call {site.phone}
            </a>
          </div>
          <div id="valuation" className="w-full max-w-md lg:justify-self-end scroll-mt-28">
            <LeadForm
              variant="valuation"
              eyebrow="Complimentary Valuation"
              title="What's Your Home Worth?"
              subtitle="Share a few details and Matt will prepare a personal valuation of your property."
              buttonLabel="Request My Valuation"
              source="Seller Valuation"
            />
          </div>
        </div>
      </section>

      {/* ---------- Marketing plan ---------- */}
      <section className="bg-white py-24">
        <div className="text-center mb-14 px-6">
          <p className="eyebrow">The Plan</p>
          <h2 className="section-title text-3xl md:text-5xl text-[var(--ink)] mt-5">How I Market Your Home</h2>
        </div>
        <ol className="max-w-6xl mx-auto px-5 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {steps.map((step, i) => (
            <li key={step.title} className="bg-white p-8">
              <p className="text-4xl text-gray-300" style={serif}>{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-[var(--ink)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- Sotheby's reach ---------- */}
      <section className="bg-[var(--cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Image src="/images/one-sothebys.png" alt="ONE Sotheby's International Realty" width={1013} height={223} className="mx-auto h-12 w-auto" />
          <p className="mt-8 text-lg leading-relaxed text-[var(--muted)]" style={serif}>
            As an advisor with {site.brokerage}, Matt pairs a hyper-local focus on South of Fifth and Miami Beach with a
            brand recognized by luxury buyers around the world.
          </p>
        </div>
      </section>

      <ProofSection />

      {/* ---------- Closing CTA ---------- */}
      <section className="py-20 text-white text-center px-6" style={darkBg}>
        <h2 className="section-title text-3xl md:text-5xl">Thinking About Selling?</h2>
        <p className="mt-5 text-gray-300 max-w-xl mx-auto">
          Start with a private conversation and a no-obligation valuation.
        </p>
        <a href="#valuation" className="btn-navy mt-8 inline-flex">
          Request a Valuation <span aria-hidden="true">→</span>
        </a>
      </section>
    </>
  );
}
