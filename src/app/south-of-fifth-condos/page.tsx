import Image from "next/image";
import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Luxury Condos in South of Fifth, Miami Beach | Matt Edwards",
  description:
    "Buy a luxury condo in South of Fifth (SoFi), Miami Beach's most exclusive oceanfront enclave. Continuum, Apogee, Murano Grande, The Setai & more. Work with Matt Edwards, a SoFi resident and specialist.",
  keywords: [
    "South of Fifth condos",
    "SoFi Miami Beach",
    "Miami Beach luxury condos",
    "Continuum condos for sale",
    "Apogee South Beach",
    "Murano Grande",
    "The Setai residences",
    "Miami Beach real estate agent",
  ],
  openGraph: {
    title: "Luxury Condos in South of Fifth, Miami Beach",
    description:
      "Miami Beach's most exclusive oceanfront enclave. Get a private list of available and off-market South of Fifth condos.",
    type: "website",
  },
  alternates: {
    canonical: "/south-of-fifth-condos",
  },
};

const signatureBuildings = [
  {
    name: "Continuum",
    detail: "Twin oceanfront towers on the largest private beachfront in SoFi, with 12 acres of resort amenities.",
  },
  {
    name: "Apogee",
    detail: "Just 67 residences with private two-car garages on each floor — the definition of boutique luxury.",
  },
  {
    name: "Murano Grande",
    detail: "Bayfront living with floor-to-ceiling glass, a private marina, and sweeping Government Cut views.",
  },
  {
    name: "The Setai Residences",
    detail: "Five-star hotel service, Art Deco heritage, and one of South Beach's most coveted addresses.",
  },
  {
    name: "Icon South Beach",
    detail: "Philippe Starck design on the bay with a dramatic pool deck and full-service amenities.",
  },
  {
    name: "Portofino & Murano at Portofino",
    detail: "Established bayfront towers anchoring the western edge of the neighborhood, marina access included.",
  },
];

const valueProps = [
  {
    title: "Ocean on one side, bay on the other",
    description:
      "SoFi sits at the southern tip of Miami Beach, wrapped by the Atlantic and Biscayne Bay. It's the rare address where you can watch the sunrise over the ocean and the cruise ships glide through Government Cut.",
  },
  {
    title: "A true walkable village",
    description:
      "Coffee at Pura Vida, dinner at Prime Italian, a stroll through South Pointe Park with the dog — all without touching your car. In a city built for driving, SoFi's walkability is genuinely rare.",
  },
  {
    title: "Limited inventory, lasting value",
    description:
      "High barriers to entry and a fixed footprint mean SoFi has consistently outperformed the rest of Miami Beach. These are trophy assets that hold their value.",
  },
  {
    title: "Resort amenities at home",
    description:
      "Private beach clubs, spas, pools, fitness centers, and concierge service come standard in SoFi's signature towers — full-service living behind the gate.",
  },
];

const lifestyle = [
  {
    title: "South Pointe Park",
    description:
      "17 waterfront acres with walking paths and unobstructed views of Fisher Island, the ocean, and the downtown skyline.",
  },
  {
    title: "Joe's Stone Crab",
    description:
      "A Miami institution since 1913 — stone crabs, key lime pie, and the quintessential South Beach dining experience, right in the neighborhood.",
  },
  {
    title: "Prime Italian & Smith and Wollensky",
    description:
      "Marquee steakhouses and waterfront dining within a few blocks of home, plus the neighborhood's beloved local cafés.",
  },
  {
    title: "First Street Beach",
    description:
      "A quieter, less crowded stretch of sand that locals prefer for morning walks and weekend relaxation.",
  },
];

const faqs = [
  {
    q: "What do luxury condos in South of Fifth cost?",
    a: "SoFi condos generally start around $1M for a well-located residence and climb well past $20M for oceanfront penthouses in buildings like Continuum and Apogee. Matt can pinpoint the right buildings for your budget and lifestyle.",
  },
  {
    q: "Which buildings should I be looking at?",
    a: "It depends on what you value. Continuum and Apogee lead for oceanfront prestige; Murano Grande and Icon offer bayfront views and a lively scene; The Setai brings five-star hotel service. Matt will shortlist the buildings that fit how you actually want to live.",
  },
  {
    q: "Are there off-market opportunities?",
    a: "Yes. Many of the best SoFi residences trade quietly. As a resident and active specialist in the neighborhood, Matt regularly hears about listings before they reach the public market.",
  },
  {
    q: "Can you help with financing and closing?",
    a: "Absolutely. Matt works with trusted lenders, attorneys, and inspectors who specialize in Miami Beach luxury condominiums and can guide you through every step — including for international buyers.",
  },
];

export default function SouthOfFifthCondosPage() {
  return (
    <>
      {/* Hero + Lead Form */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://plus.unsplash.com/premium_photo-1697730215093-baeae8060bfe?w=1920&q=80"
            alt="South of Fifth, Miami Beach oceanfront condos"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Headline */}
            <div>
              <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
                South of Fifth &bull; Miami Beach
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Luxury Condos in Miami Beach&apos;s Most Exclusive Enclave
              </h1>
              <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                Oceanfront towers, bayfront penthouses, and a walkable village at the southern tip of South Beach. Get a private, curated list of available and off-market South of Fifth condos.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Continuum, Apogee, Murano Grande, The Setai & more",
                  "Guided by a South of Fifth resident and specialist",
                  "Access to quiet, off-market opportunities",
                ].map((item) => (
                  <li key={item} className="flex items-start text-gray-200">
                    <span className="text-[var(--gold)] mr-3 mt-0.5 flex-shrink-0 font-medium">&mdash;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#inquire" className="bg-white text-[var(--charcoal)] border border-white hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-white text-center px-10 py-4 font-medium tracking-[0.05em] uppercase text-sm transition-all duration-300">
                  See Available Condos
                </a>
                <a href="tel:+12148860363" className="btn-secondary bg-transparent text-white border-white hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-white text-center px-8 py-4 text-sm">
                  Call (214) 886-0363
                </a>
              </div>
            </div>

            {/* Lead Form */}
            <div id="inquire" className="lg:justify-self-end w-full max-w-md scroll-mt-28">
              <LeadForm eyebrow="Start Your Search" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Stats Bar */}
      <section className="bg-[var(--charcoal)] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "SoFi", label: "Resident & Specialist" },
              { stat: "$1M–$50M+", label: "Condo Price Range" },
              { stat: "10+", label: "Signature Towers" },
              { stat: "24 hrs", label: "Personal Response" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl md:text-3xl font-semibold text-[var(--gold)] mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {item.stat}
                </p>
                <p className="text-xs md:text-sm text-gray-300 tracking-wide uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why South of Fifth */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
              Why South of Fifth
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              The Crown Jewel of Miami Beach
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
              Known simply as SoFi, this intimate neighborhood pairs urban sophistication with rare waterfront living — the address Miami&apos;s most discerning residents choose to call home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueProps.map((prop) => (
              <div key={prop.title} className="bg-[var(--cream)] p-8">
                <div className="flex items-center mb-3">
                  <span className="text-[var(--gold)] mr-3 font-medium">&mdash;</span>
                  <h3 className="text-lg font-semibold text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {prop.title}
                  </h3>
                </div>
                <p className="text-[var(--muted)] leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Buildings */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
            alt=""
            fill
            className="object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
              The Towers
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Signature South of Fifth Buildings
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              From boutique oceanfront residences to full-service bayfront towers, these are the addresses that define the neighborhood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatureBuildings.map((building) => (
              <div key={building.name} className="border border-white/20 bg-white/5 backdrop-blur-sm p-8">
                <h3 className="text-xl font-semibold mb-3 text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {building.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {building.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a href="#inquire" className="bg-white text-[var(--charcoal)] border border-white hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-white inline-block px-10 py-4 font-medium tracking-[0.05em] uppercase text-sm transition-all duration-300">
              Ask About a Specific Building
            </a>
          </div>
        </div>
      </section>

      {/* About Matt */}
      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[460px] lg:h-[560px]">
                <Image
                  src="/images/headshot.webp"
                  alt="Matt Edwards, South of Fifth real estate specialist"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[var(--gold)] hidden lg:block" />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
                Your Local Advantage
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-6 gold-underline" style={{ fontFamily: 'var(--font-playfair)' }}>
                A Specialist Who Actually Lives Here
              </h2>
              <div className="space-y-4 text-[var(--muted)] leading-relaxed">
                <p>
                  South of Fifth is where Matt Edwards sends clients who want the best of the best without the noise — and it&apos;s where he chooses to live himself. That resident&apos;s perspective is the difference between touring a building and truly understanding it.
                </p>
                <p>
                  &ldquo;What I love about SoFi is the walkability, the wellness, and the community. You can grab a coffee at Pura Vida, walk your dog through South Pointe Park, have dinner at Smith and Wollensky, and never get in your car. For a city built around driving, that&apos;s unique.&rdquo;
                </p>
                <p>
                  From an investment standpoint, SoFi has consistently outperformed the rest of Miami Beach. The limited inventory, prime location, and high barriers to entry mean properties here hold their value exceptionally well. If you&apos;re looking for a trophy asset in Miami, this is where to start.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#inquire" className="btn-primary text-center">
                  Start Your Search
                </a>
                <a href="tel:+12148860363" className="btn-secondary text-center">
                  Call (214) 886-0363
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
              The Lifestyle
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Life at the Tip of the Island
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
              Everything that makes South of Fifth the most sought-after few blocks in Miami Beach — steps from your front door.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lifestyle.map((item) => (
              <div key={item.title}>
                <div className="w-10 h-1 bg-[var(--gold)] mb-5" />
                <h3 className="text-lg font-semibold text-[var(--charcoal)] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {item.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
              Good to Know
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-playfair)' }}>
              South of Fifth Buyer Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-[var(--charcoal)] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {faq.q}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA + Form */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589083130544-0d6a2926e519?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--charcoal)]/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
                Ready When You Are
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                Find Your Place in South of Fifth
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                Tell Matt what you&apos;re looking for and he&apos;ll send a curated list of condos — including quiet, off-market opportunities — matched to your budget and lifestyle. No pressure, just a knowledgeable local in your corner.
              </p>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Call or Text</p>
                  <a href="tel:+12148860363" className="text-xl font-medium hover:text-[var(--gold)] transition-colors">
                    (214) 886-0363
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-md lg:justify-self-end">
              <LeadForm
                eyebrow="Get Started"
                title="Request Your Curated Condo List"
                subtitle="Share a few details and Matt will follow up personally within 24 hours."
                buttonLabel="Request My List"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
