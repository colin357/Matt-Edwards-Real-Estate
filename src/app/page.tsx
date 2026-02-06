import Image from "next/image";
import Link from "next/link";
import ListingCard from "@/components/ListingCard";
import { getFeaturedListings } from "@/data/listings";

export default function Home() {
  const featuredListings = getFeaturedListings();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920"
          >
            <source src="/videos/hero-aerial.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
              Miami Luxury Real Estate
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight mb-6 animate-fade-in delay-100" style={{ fontFamily: 'var(--font-playfair)' }}>
              Exceptional Properties for Discerning Clients
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed animate-fade-in delay-200">
              Precision, privacy, and performance in every transaction. Experience Miami&apos;s most exclusive properties with personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
              <Link href="#listings" className="btn-primary text-center">
                View Listings
              </Link>
              <Link href="#contact" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-[var(--charcoal)] text-center">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section id="listings" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Featured Properties
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              A curated selection of Miami&apos;s most exceptional residences, each representing the pinnacle of luxury living.
            </p>
          </div>

          {/* Featured Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredListings.slice(0, 4).map((listing) => (
              <ListingCard key={listing.id} listing={listing} featured />
            ))}
          </div>

          {/* View All Listings */}
          <div className="text-center">
            <Link href="/listings" className="btn-secondary inline-block">
              View All Listings
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative h-[500px] lg:h-[600px]">
                <Image
                  src="/images/headshot.jpg"
                  alt="Miami luxury real estate"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[var(--gold)] hidden lg:block" />
            </div>

            {/* Content */}
            <div>
              <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
                About
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-6 gold-underline" style={{ fontFamily: 'var(--font-playfair)' }}>
                Matt Edwards
              </h2>
              <div className="space-y-4 text-[var(--muted)] leading-relaxed">
                <p>
                  Matt Edwards is a luxury real estate professional serving high-end buyers and sellers throughout Miami. With deep expertise in the local market, Matt specializes in residential, waterfront, and lifestyle-driven properties for clients who expect precision, privacy, and performance.
                </p>
                <p>
                  What sets Matt apart is his commitment to modern marketing and high-quality content creation. Every property receives a bespoke marketing strategy designed for today&apos;s discerning buyers, with video tours and cinematic presentations that showcase each home at its absolute best.
                </p>
                <p>
                  Matt knows Miami inside and out. From the historic estates of Coral Gables to the sleek penthouses of Brickell, from the exclusive enclaves of Fisher Island to the vibrant streets of Coconut Grove, his intimate knowledge of each neighborhood ensures clients find not just a property, but the perfect lifestyle.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-semibold text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-playfair)' }}>$200M+</p>
                  <p className="text-sm text-[var(--muted)] mt-1">Sales Volume</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-playfair)' }}>150+</p>
                  <p className="text-sm text-[var(--muted)] mt-1">Properties Sold</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-playfair)' }}>15+</p>
                  <p className="text-sm text-[var(--muted)] mt-1">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Marketing Section */}
      <section className="py-24 bg-[var(--charcoal)] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
                Modern Marketing
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Properties Presented for the Modern Era
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                In today&apos;s market, exceptional properties deserve exceptional presentation. Matt leverages cutting-edge video production, cinematic photography, and strategic digital marketing to ensure your property reaches qualified buyers worldwide.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--gold)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Cinematic property videos and virtual tours</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--gold)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Professional photography and drone footage</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--gold)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Targeted social media and digital campaigns</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--gold)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Global network of luxury real estate connections</span>
                </li>
              </ul>
            </div>

            {/* Video Placeholder */}
            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] bg-gray-800 overflow-hidden">
                <Image
                  src="https://drive.google.com/file/d/1ZH8_x0DBGFK6vpCUnvEKMiON-TgJ0f1O/view?usp=drive_link"
                  alt="Property video production"
                  fill
                  className="object-cover opacity-80"
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-[var(--gold)] rounded-full flex items-center justify-center hover:bg-[var(--gold-light)] transition-colors">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
              Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Miami Neighborhoods
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              From historic estates to modern penthouses, Matt&apos;s expertise spans Miami&apos;s most sought-after communities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Brickell', image: 'https://images.unsplash.com/photo-1704080864842-2577d94ebb1c?w=600' },
              { name: 'Coral Gables', image: 'https://images.unsplash.com/photo-1704236600122-56a1401023d3?w=600' },
              { name: 'Coconut Grove', image: 'https://images.unsplash.com/photo-1595111571848-fdf33cfb6cff?w=600' },
              { name: 'Miami Beach', image: 'https://plus.unsplash.com/premium_photo-1697730215093-baeae8060bfe?w=600' },
            ].map((neighborhood) => (
              <div key={neighborhood.name} className="group relative h-48 overflow-hidden cursor-pointer">
                <Image
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-sm font-medium tracking-wide text-center px-2">
                    {neighborhood.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
                Get in Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Let&apos;s Discuss Your Real Estate Goals
              </h2>
              <p className="text-[var(--muted)] leading-relaxed mb-8">
                Whether you&apos;re looking to buy, sell, or simply explore the Miami luxury market, Matt provides the personalized guidance and market expertise you need to make confident decisions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--charcoal)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-[var(--muted)] uppercase tracking-wide">Phone</p>
                    <a href="tel:+13055551234" className="text-[var(--charcoal)] font-medium hover:text-[var(--gold)] transition-colors">
                      (305) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--charcoal)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-[var(--muted)] uppercase tracking-wide">Email</p>
                    <a href="mailto:matt@mattedwards.com" className="text-[var(--charcoal)] font-medium hover:text-[var(--gold)] transition-colors">
                      matt@mattedwards.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--charcoal)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-[var(--muted)] uppercase tracking-wide">Location</p>
                    <p className="text-[var(--charcoal)] font-medium">
                      Miami, Florida
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-10 shadow-lg">
              <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Schedule a Consultation
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs uppercase tracking-wide text-[var(--muted)] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs uppercase tracking-wide text-[var(--muted)] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wide text-[var(--muted)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wide text-[var(--muted)] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-xs uppercase tracking-wide text-[var(--muted)] mb-2">
                    I&apos;m Interested In
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="buying">Buying a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="both">Both Buying &amp; Selling</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wide text-[var(--muted)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
