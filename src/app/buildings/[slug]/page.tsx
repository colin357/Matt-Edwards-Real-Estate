import Link from "next/link";
import { notFound } from "next/navigation";
import LeadForm from "@/components/LeadForm";
import ListingsEmbed from "@/components/ListingsEmbed";
import JsonLd from "@/components/JsonLd";
import { buildings, getBuildingBySlug, isBuildingPublished } from "@/data/buildings";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { site, phoneHref } from "@/lib/site";

const serif = { fontFamily: "var(--font-heading)" };
const darkBg = { background: "linear-gradient(135deg, #0a0a0a 0%, #080f1e 45%, #0c3873 100%)" };

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return buildings.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const b = getBuildingBySlug(slug);
  if (!b) return {};
  return pageMetadata({
    title: `${b.name} Condos for Sale | South of Fifth, Miami Beach`,
    description: `${b.name} condos for sale at ${b.address}. Building details, amenities, policies and current listings with Matt Edwards, ${site.brokerage}.`.slice(0, 160),
    path: `/buildings/${b.slug}`,
    noindex: !isBuildingPublished(b),
  });
}

export default async function BuildingPage({ params }: Props) {
  const { slug } = await params;
  const b = getBuildingBySlug(slug);
  if (!b) notFound();

  const facts = [
    { label: "Address", value: b.address },
    b.yearBuilt && { label: "Year Built", value: b.yearBuilt },
    b.floors && { label: "Floors", value: b.floors },
    b.units && { label: "Residences", value: b.units },
    b.petPolicy && { label: "Pet Policy", value: b.petPolicy },
    b.rentalPolicy && { label: "Rental Policy", value: b.rentalPolicy },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          ["South of Fifth Condos", "/south-of-fifth-condos"],
          [b.name, `/buildings/${b.slug}`],
        ])}
      />

      <section className="pt-36 pb-16 text-white px-6" style={darkBg}>
        <div className="max-w-5xl mx-auto">
          <Link href="/south-of-fifth-condos" className="text-[0.62rem] tracking-[0.25em] uppercase text-gray-400 hover:text-white">
            ← South of Fifth Condos
          </Link>
          <h1 className="mt-6 text-4xl md:text-6xl uppercase tracking-[0.05em] leading-tight" style={serif}>
            {b.name} Condos for Sale
          </h1>
          <p className="mt-4 text-gray-300">{b.address}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-10">
            {b.description.length > 0 && (
              <div className="space-y-5 leading-[1.9] text-[var(--muted)]">
                {b.description.map((p) => <p key={p}>{p}</p>)}
              </div>
            )}

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
              {facts.map((f) => (
                <div key={f.label} className="bg-white p-5">
                  <dt className="text-[0.62rem] tracking-[0.25em] uppercase text-[var(--navy)]">{f.label}</dt>
                  <dd className="mt-1.5 text-[var(--ink)]">{f.value}</dd>
                </div>
              ))}
            </dl>

            {b.amenities.length > 0 && (
              <div>
                <h2 className="text-2xl uppercase tracking-[0.06em] text-[var(--ink)]" style={serif}>Amenities</h2>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[var(--muted)]">
                  {b.amenities.map((a) => <li key={a}>— {a}</li>)}
                </ul>
              </div>
            )}

            {b.videoUrl && (
              <div className="relative aspect-video">
                <iframe
                  src={`${b.videoUrl}?rel=0`}
                  title={`${b.name} building tour`}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            )}

            {b.mattsTake.length > 0 && (
              <div className="p-8 text-white" style={darkBg}>
                <p className="eyebrow eyebrow-on-dark eyebrow-left">Matt&apos;s Take</p>
                <div className="mt-4 space-y-4 text-gray-200 leading-relaxed">
                  {b.mattsTake.map((p) => <p key={p}>{p}</p>)}
                </div>
              </div>
            )}

            {b.description.length === 0 && (
              <p className="text-[var(--muted)] leading-relaxed">
                Ask Matt about current availability, recent sales and off-market opportunities at {b.name}. Call{" "}
                <a href={phoneHref} className="underline">{site.phone}</a> or use the form.
              </p>
            )}
          </div>

          <div className="lg:col-span-2">
            <LeadForm
              eyebrow={b.name}
              title={`Ask About ${b.name}`}
              subtitle="Availability, recent sales and off-market residences, sent personally by Matt."
              buttonLabel="Send My Request"
              source={`Building: ${b.name}`}
            />
          </div>
        </div>
      </section>

      <ListingsEmbed area={b.name} title={`${b.name} Listings`} />
    </>
  );
}
