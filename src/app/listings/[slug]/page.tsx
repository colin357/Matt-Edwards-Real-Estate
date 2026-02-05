import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getListingBySlug, getAllListings } from "@/data/listings";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListingBySlug(slug);

  if (!listing) {
    return {
      title: "Property Not Found | Matt Edwards",
    };
  }

  return {
    title: `${listing.title} | Matt Edwards Luxury Real Estate`,
    description: listing.shortDescription,
    openGraph: {
      title: listing.title,
      description: listing.shortDescription,
      images: [listing.images[0]],
    },
  };
}

export async function generateStaticParams() {
  const listings = getAllListings();
  return listings.map((listing) => ({
    slug: listing.slug,
  }));
}

export default async function ListingPage({ params }: Props) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);

  if (!listing) {
    notFound();
  }

  return (
    <>
      {/* Hero Image Gallery */}
      <section className="pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[70vh] min-h-[500px]">
          {/* Main Image */}
          <div className="relative h-full">
            <Image
              src={listing.images[0]}
              alt={listing.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Secondary Images */}
          <div className="hidden lg:grid grid-cols-2 grid-rows-2">
            {listing.images.slice(1, 5).map((image, index) => (
              <div key={index} className="relative">
                <Image
                  src={image || listing.images[0]}
                  alt={`${listing.title} - Image ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Breadcrumb */}
              <nav className="mb-6">
                <ol className="flex items-center space-x-2 text-sm">
                  <li>
                    <Link href="/" className="text-[var(--muted)] hover:text-[var(--gold)]">
                      Home
                    </Link>
                  </li>
                  <li className="text-[var(--muted)]">/</li>
                  <li>
                    <Link href="/listings" className="text-[var(--muted)] hover:text-[var(--gold)]">
                      Listings
                    </Link>
                  </li>
                  <li className="text-[var(--muted)]">/</li>
                  <li className="text-[var(--charcoal)]">{listing.title}</li>
                </ol>
              </nav>

              {/* Title & Location */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {listing.title}
                </h1>
                <p className="text-lg text-[var(--muted)]">
                  {listing.address}, {listing.neighborhood}
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-gray-200">
                <div>
                  <p className="text-2xl font-semibold text-[var(--charcoal)]">{listing.bedrooms}</p>
                  <p className="text-sm text-[var(--muted)]">Bedrooms</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[var(--charcoal)]">{listing.bathrooms}</p>
                  <p className="text-sm text-[var(--muted)]">Bathrooms</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[var(--charcoal)]">{listing.sqftFormatted}</p>
                  <p className="text-sm text-[var(--muted)]">Square Feet</p>
                </div>
                {listing.yearBuilt && (
                  <div>
                    <p className="text-2xl font-semibold text-[var(--charcoal)]">{listing.yearBuilt}</p>
                    <p className="text-sm text-[var(--muted)]">Year Built</p>
                  </div>
                )}
                {listing.lotSize && (
                  <div>
                    <p className="text-2xl font-semibold text-[var(--charcoal)]">{listing.lotSize}</p>
                    <p className="text-sm text-[var(--muted)]">Lot Size</p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-12">
                <h2 className="text-xl font-semibold text-[var(--charcoal)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                  About This Property
                </h2>
                <div className="prose prose-gray max-w-none">
                  {listing.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-[var(--muted)] leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Video Section (if available) */}
              {listing.videoUrl && (
                <div className="mb-12">
                  <h2 className="text-xl font-semibold text-[var(--charcoal)] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Property Video Tour
                  </h2>
                  <div className="relative aspect-video bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 bg-[var(--gold)] rounded-full flex items-center justify-center hover:bg-[var(--gold-light)] transition-colors">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                {/* Price Card */}
                <div className="bg-[var(--cream)] p-8 mb-6">
                  <p className="text-sm text-[var(--muted)] uppercase tracking-wide mb-2">Asking Price</p>
                  <p className="text-3xl font-semibold text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {listing.priceFormatted}
                  </p>
                  {listing.status !== 'available' && (
                    <span className={`inline-block mt-2 px-3 py-1 text-xs uppercase tracking-wider font-medium ${
                      listing.status === 'pending' ? 'bg-[var(--gold)] text-white' : 'bg-[var(--charcoal)] text-white'
                    }`}>
                      {listing.status}
                    </span>
                  )}
                </div>

                {/* Contact Card */}
                <div className="bg-white border border-gray-200 p-8">
                  <h3 className="text-lg font-semibold text-[var(--charcoal)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Interested in this property?
                  </h3>
                  <p className="text-sm text-[var(--muted)] mb-6">
                    Contact Matt Edwards for a private showing or more information about this exceptional property.
                  </p>

                  <div className="space-y-4 mb-6">
                    <a
                      href="tel:+13055551234"
                      className="flex items-center text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors"
                    >
                      <svg className="w-5 h-5 mr-3 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      (305) 555-1234
                    </a>
                    <a
                      href="mailto:matt@mattedwards.com"
                      className="flex items-center text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors"
                    >
                      <svg className="w-5 h-5 mr-3 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      matt@mattedwards.com
                    </a>
                  </div>

                  <Link href="/#contact" className="btn-primary w-full text-center block">
                    Request Private Showing
                  </Link>
                </div>

                {/* Share */}
                <div className="mt-6 flex items-center justify-center space-x-4">
                  <span className="text-sm text-[var(--muted)]">Share:</span>
                  <button className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors" aria-label="Share on Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors" aria-label="Share on Twitter">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors" aria-label="Share via Email">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Listings */}
      <section className="py-12 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Link href="/listings" className="btn-secondary inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to All Listings
          </Link>
        </div>
      </section>
    </>
  );
}
