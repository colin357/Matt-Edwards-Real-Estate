import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNeighborhoodBySlug, getAllNeighborhoodSlugs } from "@/data/neighborhoods";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);
  if (!neighborhood) return {};

  return {
    title: `${neighborhood.name} | Matt Edwards Luxury Real Estate`,
    description: `Explore ${neighborhood.name} with Matt Edwards. ${neighborhood.tagline}. Luxury real estate in Miami's most exclusive neighborhoods.`,
  };
}

export async function generateStaticParams() {
  return getAllNeighborhoodSlugs().map((slug) => ({ slug }));
}

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);

  if (!neighborhood) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={neighborhood.heroImage}
            alt={neighborhood.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 w-full">
          <Link href="/#neighborhoods" className="inline-flex items-center text-gray-300 hover:text-white text-sm tracking-wide mb-6 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Neighborhoods
          </Link>
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-3">
            {neighborhood.tagline}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
            {neighborhood.name}
          </h1>
        </div>
      </section>

      {/* About the Neighborhood */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
            The Neighborhood
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-8 gold-underline" style={{ fontFamily: 'var(--font-playfair)' }}>
            About {neighborhood.name}
          </h2>
          <div className="space-y-5 text-[var(--muted)] leading-relaxed text-lg">
            {neighborhood.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What To Do */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
              Explore
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              What to Do in {neighborhood.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhood.whatToDo.map((item, index) => (
              <div key={index} className="bg-white p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="text-[var(--gold)] mr-3 font-medium">&mdash;</span>
                  <h3 className="text-lg font-semibold text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matt's Take */}
      <section className="py-20 bg-[var(--charcoal)] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
            Local Perspective
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            Matt&apos;s Take
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
            {neighborhood.mattsTake.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Interested in {neighborhood.name}?
          </h2>
          <p className="text-[var(--muted)] leading-relaxed mb-8">
            Let Matt help you find the perfect property in {neighborhood.name}. With deep local expertise and a commitment to personalized service, Matt can guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="btn-primary text-center">
              Call Me
            </Link>
            <Link href="/#listings" className="btn-secondary text-center">
              View Listings
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
