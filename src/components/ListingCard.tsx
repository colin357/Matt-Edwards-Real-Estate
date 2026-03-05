import Image from "next/image";
import Link from "next/link";
import { Listing, getListingImages } from "@/data/listings";

interface ListingCardProps {
  listing: Listing;
  featured?: boolean;
}

export default function ListingCard({ listing, featured = false }: ListingCardProps) {
  const images = getListingImages(listing);
  const hasImages = images.length > 0;

  return (
    <Link href={`/listings/${listing.slug}`} className="group block">
      <article className={`bg-white overflow-hidden transition-shadow duration-300 hover:shadow-xl ${featured ? 'shadow-lg' : 'shadow-md'}`}>
        {/* Image Container */}
        <div className={`relative overflow-hidden ${featured ? 'h-80' : 'h-64'} ${!hasImages ? 'bg-gray-200 flex items-center justify-center' : ''}`}>
          {hasImages ? (
          <Image
            src={images[0]}
            alt={listing.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          ) : (
            <div className="text-gray-400 text-center p-4">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">Photos coming soon</span>
            </div>
          )}
          {/* Status Badge */}
          {listing.status !== 'available' && (
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 text-xs uppercase tracking-wider font-medium ${
                listing.status === 'pending' ? 'bg-[var(--gold)] text-white' : 'bg-[var(--charcoal)] text-white'
              }`}>
                {listing.status}
              </span>
            </div>
          )}
          {/* Price Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <span className="text-white text-xl font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
              {listing.priceFormatted}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-1 group-hover:text-[var(--gold)] transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>
            {listing.title}
          </h3>
          <p className="text-[var(--muted)] text-sm mb-4">
            {listing.neighborhood}
          </p>

          {/* Stats */}
          <div className="flex items-center space-x-4 text-sm text-[var(--charcoal)]">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1.5 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>{listing.bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1.5 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <span>{listing.bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1.5 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span>{listing.sqftFormatted} SF</span>
            </div>
          </div>

          {/* Short Description */}
          {featured && (
            <p className="mt-4 text-sm text-[var(--muted)] line-clamp-2">
              {listing.shortDescription}
            </p>
          )}

          {/* View Details Link */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/images/Luxe Living.png"
                alt="Luxe Living Realty"
                width={20}
                height={20}
                className="h-5 w-auto"
              />
              <span className="text-[10px] text-[var(--muted)] tracking-wide">Listed by Dora Puig</span>
            </div>
            <span className="text-xs uppercase tracking-wider text-[var(--charcoal)] group-hover:text-[var(--gold)] transition-colors flex items-center">
              View Property
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
