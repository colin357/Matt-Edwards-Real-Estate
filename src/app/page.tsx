import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ListingCarousel from "@/components/ListingCarousel";
import { Icon } from "@/components/SocialIcons";
import { getListingImages, listings } from "@/data/listings";
import { neighborhoods } from "@/data/neighborhoods";
import { site } from "@/lib/site";

const serif = { fontFamily: "var(--font-heading)" };

export default function Home() {
  const sortedListings = [...listings].sort((a, b) => b.price - a.price);

  const carouselListings = sortedListings.map((l) => ({
    slug: l.slug,
    title: l.title,
    neighborhood: l.neighborhood,
    priceFormatted: l.priceFormatted,
    propertyType: l.propertyType,
    bedrooms: l.bedrooms,
    bathrooms: l.bathrooms,
    sqftFormatted: l.sqftFormatted,
    image: getListingImages(l)[0],
  }));

  const chips = [
    ...neighborhoods.map((n) => ({ label: n.name, href: `/neighborhoods/${n.slug}` })),
    { label: "Venetian Islands", href: "/listings" },
    { label: "Waterfront Estates", href: "/listings" },
    { label: "Luxury Condos", href: "/south-of-fifth-condos" },
  ];

  return (
    <>
      {/* ---------- Hero: full-bleed aerial video ---------- */}
      <section className="relative h-[92vh] min-h-[620px] bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1589083130544-0d6a2926e519?w=1920"
        >
          <source src="https://assets.mixkit.co/videos/24555/24555-720.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--ink)] to-transparent" />
        <a
          href="#intro"
          aria-label="Scroll to introduction"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 hover:text-white animate-bounce"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </section>

      {/* ---------- Intro: portrait + bio ---------- */}
      <section
        id="intro"
        className="relative text-white overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(26,77,148,0.55) 0%, rgba(8,31,69,0.9) 40%, #080f1e 75%, #0a0a0a 100%)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Portrait */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative h-[520px] lg:h-auto lg:flex-1 lg:min-h-[640px]">
              <Image
                src="/images/headshot.webp"
                alt="Matt Edwards, Miami luxury real estate advisor"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081f45]/70 via-transparent to-transparent" />
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7 px-6 sm:px-10 lg:px-14 xl:px-20 py-16 lg:py-24 flex flex-col justify-center">
            <p className="text-[0.68rem] tracking-[0.35em] uppercase text-[var(--navy-light)] mb-6">
              {site.brokerage} · Miami Beach
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl uppercase tracking-[0.06em] leading-none" style={serif}>
              Matt Edwards
            </h1>
            <p className="mt-5 text-xl sm:text-2xl italic tracking-[0.08em] text-gray-400" style={serif}>
              Miami Luxury Specialist — Waterfront, Island &amp; Lifestyle Properties
            </p>

            <div className="mt-10 space-y-5 text-[0.95rem] leading-[1.9] text-gray-300 max-w-3xl">
              <p>
                Matt Edwards is a luxury real estate professional serving high-end buyers and sellers throughout Miami —
                from the private shores of <em className="text-white">Fisher Island</em> to the bayfront estates of the{" "}
                <em className="text-white">Venetian Islands</em> and the boutique towers of{" "}
                <em className="text-white">South of Fifth</em>, the neighborhood he calls home.
              </p>
              <p>
                He specializes in residential, waterfront and lifestyle-driven properties for clients who expect
                precision, privacy and performance, pairing a local&apos;s-only perspective with modern, video-first
                marketing that drives eyes to your property and increases its future sale value.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {chips.map((c) => (
                <Link key={c.label} href={c.href} className="tag-chip">
                  {c.label}
                </Link>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-3">
              <Link href="#about" className="btn-navy">
                Meet Matt <span aria-hidden="true">→</span>
              </Link>
              <Link href="#contact" className="btn-navy">
                Contact <Icon name="email" className="w-3 h-3" />
              </Link>
              <Link href="/listings" className="btn-outline-light">
                View Listings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Exclusive listings carousel ---------- */}
      <section id="listings" className="bg-[var(--cream)] py-20">
        <div className="text-center mb-12 px-6">
          <p className="eyebrow">Exclusive Listings</p>
          <h2 className="section-title text-4xl md:text-5xl text-[var(--ink)] mt-5">Featured Properties</h2>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
          <ListingCarousel listings={carouselListings} />
        </div>
        <div className="text-center mt-12">
          <Link href="/listings" className="btn-outline-dark">
            View All Listings
          </Link>
        </div>
      </section>

      {/* ---------- Showcase communities mosaic ---------- */}
      <section id="communities" className="bg-white pt-20">
        <div className="text-center mb-12 px-6">
          <p className="eyebrow">Explore the Area</p>
          <h2 className="section-title text-4xl md:text-5xl text-[var(--ink)] mt-5">Showcase Communities</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-2">
          {neighborhoods.map((n, i) => {
            const span =
              i === 0
                ? "col-span-2 lg:col-span-6 h-[260px] lg:h-[340px]"
                : i < 3
                  ? "col-span-1 lg:col-span-3 h-[200px] lg:h-[340px]"
                  : "col-span-1 lg:col-span-4 h-[200px] lg:h-[260px]";
            return (
              <Link key={n.slug} href={`/neighborhoods/${n.slug}`} className={`group relative overflow-hidden ${span}`}>
                <Image
                  src={n.heroImage}
                  alt={n.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-[#081f45]/80 transition-colors" />
                <span
                  className="absolute left-5 bottom-5 text-white text-xl lg:text-2xl uppercase tracking-[0.1em]"
                  style={serif}
                >
                  {n.name}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.35em] uppercase text-[var(--navy)]">About Matt Edwards</p>
            <h2 className="mt-4 text-3xl md:text-4xl uppercase leading-tight text-[var(--ink)]" style={serif}>
              A Local&apos;s Perspective on Miami Luxury
            </h2>
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-5 text-[0.95rem] leading-[1.9] text-[var(--muted)]">
              <p className="italic">
                Written by Matt Edwards — Miami luxury real estate advisor with {site.brokerage}.
              </p>
              <p>
                Matt knows Miami inside and out and can provide locals-only information and experiences. From the
                historic estates of <strong className="text-[var(--ink)]">Coral Gables</strong> to the sleek penthouses of{" "}
                <strong className="text-[var(--ink)]">Brickell</strong>, from the exclusive enclave of{" "}
                <strong className="text-[var(--ink)]">Fisher Island</strong> to the vibrant streets of{" "}
                <strong className="text-[var(--ink)]">Coconut Grove</strong>, to Miami Beach and his own neighborhood in{" "}
                <strong className="text-[var(--ink)]">South of Fifth</strong>, his intimate knowledge of each
                neighborhood ensures clients find not just a property, but the perfect lifestyle.
              </p>
              <p>
                What sets Matt apart is his commitment to modern marketing and personalized service — cinematic video,
                professional photography and targeted digital campaigns that drive eyes to your property and increase its
                future sale value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Numbered neighborhood guide ---------- */}
      <section className="bg-[var(--cream)] py-24">
        <div className="text-center mb-14 px-6">
          <p className="eyebrow">Neighborhood Guide</p>
          <h2 className="section-title text-4xl md:text-5xl text-[var(--ink)] mt-5">Where Matt Works</h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {neighborhoods.map((n, i) => (
              <Link key={n.slug} href={`/neighborhoods/${n.slug}`} className="group bg-white p-8 lg:p-10 hover:bg-[#fafaf8] transition-colors">
                <p className="text-4xl text-gray-300 group-hover:text-[var(--navy)] transition-colors" style={serif}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[0.72rem] font-semibold tracking-[0.25em] uppercase text-[var(--ink)]">{n.name}</h3>
                <p className="mt-1 text-sm italic text-[var(--navy)]" style={serif}>
                  {n.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] line-clamp-5">{n.description[0]}</p>
                <span className="mt-5 inline-block text-[0.62rem] tracking-[0.25em] uppercase text-[var(--ink)] group-hover:text-[var(--navy)]">
                  Explore <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section
        id="contact"
        className="py-24 text-white"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #080f1e 45%, #0c3873 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow eyebrow-on-dark">Get in Touch</p>
            <h2 className="section-title text-4xl md:text-5xl mt-5">Let&apos;s Discuss Your Real Estate Goals</h2>
            <p className="mt-6 text-gray-400 leading-relaxed max-w-md">
              Whether you&apos;re buying, selling or investing in Miami, Matt delivers a private, tailored experience from
              first conversation to closing.
            </p>
            <ul className="mt-10 space-y-5">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-4 hover:text-[var(--navy-light)] transition-colors">
                  <span className="w-11 h-11 border border-white/20 flex items-center justify-center">
                    <Icon name="phone" className="w-4 h-4" />
                  </span>
                  <span className="tracking-wider">{site.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-4 hover:text-[var(--navy-light)] transition-colors">
                  <span className="w-11 h-11 border border-white/20 flex items-center justify-center">
                    <Icon name="email" className="w-4 h-4" />
                  </span>
                  <span className="tracking-wider">{site.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-11 h-11 border border-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="tracking-wider text-gray-300">
                  {site.addressLine1}, {site.addressLine2}
                </span>
              </li>
            </ul>
          </div>
          <div className="text-[var(--ink)]">
            <LeadForm
              eyebrow="Private Consultation"
              title="Schedule a Conversation"
              subtitle="Tell Matt what you're looking for and he'll be in touch personally."
              buttonLabel="Send Message"
              source="Homepage Contact"
            />
          </div>
        </div>
      </section>
    </>
  );
}
