import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNeighborhoodBySlug, getAllNeighborhoodSlugs, neighborhoods } from "@/data/neighborhoods";
import { getComparisonsForNeighborhood } from "@/data/comparisons";
import ListingsEmbed from "@/components/ListingsEmbed";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { site, phoneHref } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);
  if (!neighborhood) return {};

  return pageMetadata({
    title: `${neighborhood.name} Real Estate & Homes for Sale | Matt Edwards`,
    description: `${neighborhood.name}: ${neighborhood.tagline}. Neighborhood guide, lifestyle and local insight from Matt Edwards, ${site.brokerage}.`.slice(0, 160),
    path: `/neighborhoods/${neighborhood.slug}`,
    image: neighborhood.heroImage,
  });
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

  const related = getComparisonsForNeighborhood(neighborhood.name);
  const others = neighborhoods.filter((n) => n.slug !== neighborhood.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          ["Neighborhoods", "/#communities"],
          [neighborhood.name, `/neighborhoods/${neighborhood.slug}`],
        ])}
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={neighborhood.heroImage}
            alt={neighborhood.imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 w-full">
          <Link href="/#communities" className="inline-flex items-center text-gray-300 hover:text-white text-sm tracking-wide mb-6 transition-colors">
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

      {/* Neighborhood Video */}
      {neighborhood.videoUrl && (
        <section className="py-16 bg-[var(--cream)]">
          <div className={`mx-auto px-6 lg:px-8 ${neighborhood.videoIsShort ? 'max-w-sm' : 'max-w-4xl'}`}>
            <div className={`relative overflow-hidden shadow-lg ${neighborhood.videoIsShort ? 'aspect-[9/16]' : 'aspect-video'}`}>
              <iframe
                src={`${neighborhood.videoUrl}?rel=0`}
                title={`${neighborhood.name} Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </section>
      )}

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

      <ListingsEmbed area={neighborhood.name} title={`${neighborhood.name} Listings`} />

      {/* Comparisons that involve this neighborhood */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">Compare</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--charcoal)] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              How {neighborhood.name} Compares
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
              {related.map((c) => (
                <li key={c.slug}>
                  <Link href={`/faq/${c.slug}`} className="block h-full bg-white p-5 text-[var(--ink)] hover:text-[var(--navy)]">
                    {c.title} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

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
            <a href={phoneHref} className="btn-primary text-center">
              Call Matt {site.phone}
            </a>
            <Link href="/?intent=buy#contact" className="btn-secondary text-center">
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      {/* Related neighborhoods */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl uppercase tracking-[0.1em] text-[var(--ink)] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Related Neighborhoods
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
            {others.map((n) => (
              <li key={n.slug}>
                <Link href={`/neighborhoods/${n.slug}`} className="block h-full bg-white p-5 hover:bg-[#fafaf8]">
                  <span className="block text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[var(--ink)]">{n.name}</span>
                  <span className="block mt-1 text-sm italic text-[var(--navy)]" style={{ fontFamily: "var(--font-heading)" }}>
                    {n.tagline}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
