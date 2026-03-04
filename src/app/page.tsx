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
            poster="https://images.unsplash.com/photo-1589083130544-0d6a2926e519?w=1920"
          >
            <source src="https://assets.mixkit.co/videos/24555/24555-720.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
              Miami Luxury Real Estate
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight mb-6 animate-fade-in delay-100" style={{ fontFamily: 'var(--font-playfair)' }}>
              Exceptional Lifestyle Properties for High-Net Worth Clients
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed animate-fade-in delay-200">
              Experience Miami&apos;s exclusive properties from a local&apos;s-only perspective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
              <Link href="#listings" className="bg-white text-[var(--charcoal)] border border-white hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-white text-center px-10 py-4 font-medium tracking-[0.05em] uppercase text-sm transition-all duration-300">
                View Listings
              </Link>
              <Link href="#contact" className="btn-secondary bg-transparent text-white border-white hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-white text-center px-8 py-4 text-sm">
                Call Me
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

      {/* About Section */}
      <section id="about" className="py-24 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative">
              <div className="relative h-[500px] lg:h-[600px]">
                <Image
                  src="/images/headshot.webp"
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
                  What sets Matt apart is his commitment to modern marketing and personalized service, to drive eyes to your property and increase its value.
                </p>
                <p>
                  Matt knows Miami inside and out. From the historic estates of Coral Gables to the sleek penthouses of Brickell, from the exclusive enclaves of Fisher Island to the vibrant streets of Coconut Grove, his intimate knowledge of each neighborhood ensures clients find not just a property, but the perfect lifestyle.
                </p>
              </div>
            </div>
          </div>

          {/* VSL Video */}
          <div className="mt-16">
            <div className="relative aspect-video max-w-4xl mx-auto bg-gray-100 overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/qMcIVQBrKuo?rel=0"
                title="Matt Edwards - Miami Luxury Real Estate"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
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

      {/* Video Marketing Section */}
      <section className="relative py-24 text-white overflow-hidden">
        {/* Ocean Background with blur and dark tint */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
            alt=""
            fill
            className="object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
                Modern Marketing
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Properties Presented for the Modern Era
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                In today&apos;s market, exceptional properties deserve exceptional presentation. Matt leverages cutting-edge video production, cinematic photography, and strategic digital marketing to ensure your property reaches qualified buyers worldwide.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[var(--gold)] mr-3 mt-0.5 flex-shrink-0 font-medium">&mdash;</span>
                  <span className="text-gray-300">Cinematic property videos and virtual tours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--gold)] mr-3 mt-0.5 flex-shrink-0 font-medium">&mdash;</span>
                  <span className="text-gray-300">Professional photography and drone footage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--gold)] mr-3 mt-0.5 flex-shrink-0 font-medium">&mdash;</span>
                  <span className="text-gray-300">Targeted social media and digital campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--gold)] mr-3 mt-0.5 flex-shrink-0 font-medium">&mdash;</span>
                  <span className="text-gray-300">Global network of luxury real estate connections</span>
                </li>
              </ul>
            </div>

            {/* YouTube Video */}
            <div className="relative">
              <div className="relative aspect-video bg-gray-800 overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/CuiIn449ypA?rel=0"
                  title="Matt Edwards - Luxury Real Estate Marketing"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section id="neighborhoods" className="py-24 bg-white">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'South of Fifth', slug: 'south-of-fifth', image: 'https://plus.unsplash.com/premium_photo-1697730215093-baeae8060bfe?w=600' },
              { name: 'Fisher Island', slug: 'fisher-island', image: 'https://images.unsplash.com/photo-1589083130544-0d6a2926e519?w=600' },
              { name: 'Brickell', slug: 'brickell', image: 'https://images.unsplash.com/photo-1704080864842-2577d94ebb1c?w=600' },
              { name: 'Coconut Grove', slug: 'coconut-grove', image: 'https://images.unsplash.com/photo-1595111571848-fdf33cfb6cff?w=600' },
              { name: 'Coral Gables', slug: 'coral-gables', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600' },
            ].map((neighborhood) => (
              <Link key={neighborhood.name} href={`/neighborhoods/${neighborhood.slug}`} className="group relative h-48 overflow-hidden block">
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
              </Link>
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
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                Let&apos;s Discuss Your Real Estate Goals
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--charcoal)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-[var(--muted)] uppercase tracking-wide">Phone</p>
                    <a href="tel:+12148860363" className="text-[var(--charcoal)] font-medium hover:text-[var(--gold)] transition-colors">
                      (214) 886-0363
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
                    <a href="mailto:matt@luxelivingmiami.com" className="text-[var(--charcoal)] font-medium hover:text-[var(--gold)] transition-colors">
                      matt@luxelivingmiami.com
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
                Call Me
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
