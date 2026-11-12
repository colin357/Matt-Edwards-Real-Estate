import { Metadata } from "next";
import Link from "next/link";
import ListingCard from "@/components/ListingCard";
import { getAllListings } from "@/data/listings";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Listings | Matt Edwards Luxury Real Estate Miami",
  description: "Browse Matt Edwards' portfolio of luxury properties in Miami. From waterfront estates to penthouses, find your dream home.",
};

export default function ListingsPage() {
  const listings = getAllListings();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-[var(--charcoal)] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Luxury Listings
            </h1>
            <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg">
              Explore Miami&apos;s finest properties, each carefully selected to meet the highest standards of luxury living.
            </p>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {listings.length === 0 ? (
            <div className="text-center max-w-2xl mx-auto py-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--charcoal)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                New Listings Coming Soon
              </h2>
              <p className="text-[var(--muted)] text-lg">
                Matt&apos;s newest properties with {site.brokerage} will be featured here shortly. In the meantime, reach out to hear about current and off-market opportunities.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--charcoal)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Looking for Something Specific?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Matt has access to off-market listings and upcoming properties that aren&apos;t publicly listed. Schedule a consultation to discuss your specific requirements.
          </p>
          <Link href="/#contact" className="btn-primary bg-[var(--gold)] border-[var(--gold)] hover:bg-[var(--gold-light)] hover:border-[var(--gold-light)] inline-block">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
