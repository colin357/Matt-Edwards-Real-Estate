import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { Icon } from "@/components/SocialIcons";
import { comparisons, getComparisonBySlug } from "@/data/comparisons";
import { site, phoneHref } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

const serif = { fontFamily: "var(--font-heading)" };
const darkBg = { background: "linear-gradient(135deg, #0a0a0a 0%, #080f1e 45%, #0c3873 100%)" };

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getComparisonBySlug(slug);
  if (!c) return {};
  return pageMetadata({ title: `${c.title} | Matt Edwards`, description: c.metaDescription, path: `/faq/${c.slug}`, type: "article" });
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const c = getComparisonBySlug(slug);
  if (!c) notFound();

  const whichQ = `Should I choose ${c.a} or ${c.b}?`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: c.title,
        description: c.metaDescription,
        author: { "@type": "Person", "@id": `${site.url}/#matt-edwards`, name: site.name },
        publisher: { "@id": `${site.url}/#agent` },
        image: `${site.url}/images/og-default.jpg`,
        mainEntityOfPage: `${site.url}/faq/${c.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: whichQ,
            acceptedAnswer: { "@type": "Answer", text: `Choose ${c.a} if ${lower(c.chooseA)} Choose ${c.b} if ${lower(c.chooseB)}` },
          },
          ...c.sections.map((s) => ({
            "@type": "Question",
            name: `How do ${c.a} and ${c.b} compare on ${s.heading.toLowerCase()}?`,
            acceptedAnswer: { "@type": "Answer", text: s.body },
          })),
        ],
      },
    ],
  };

  const others = comparisons.filter((o) => o.slug !== c.slug);

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={breadcrumbSchema([
          ["Real Estate FAQ", "/faq"],
          [c.title, `/faq/${c.slug}`],
        ])}
      />

      {/* ---------- Hero ---------- */}
      <section className="pt-36 pb-16 text-white px-6" style={darkBg}>
        <div className="max-w-4xl mx-auto">
          <Link href="/faq#compare" className="text-[0.62rem] tracking-[0.25em] uppercase text-gray-400 hover:text-white">
            ← Real Estate FAQ
          </Link>
          <h1 className="mt-6 text-3xl md:text-5xl uppercase leading-tight" style={serif}>
            {c.title}
          </h1>
          <p className="mt-6 text-gray-300 leading-relaxed">{c.intro}</p>
          <p className="mt-6 text-sm text-gray-400">
            By {site.name}, {site.brokerage}
          </p>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          {/* ---------- Comparison table ---------- */}
          <h2 className="text-2xl md:text-3xl uppercase tracking-[0.06em] text-[var(--ink)]" style={serif}>
            At a Glance
          </h2>
          <div className="mt-6 overflow-x-auto border border-gray-200">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-[var(--ink)] text-white">
                <tr>
                  <th className="p-4 w-1/4 font-medium" scope="col">
                    <span className="sr-only">Category</span>
                  </th>
                  <th className="p-4 text-[0.7rem] tracking-[0.2em] uppercase font-semibold" scope="col">{c.a}</th>
                  <th className="p-4 text-[0.7rem] tracking-[0.2em] uppercase font-semibold" scope="col">{c.b}</th>
                </tr>
              </thead>
              <tbody>
                {c.table.map((row) => (
                  <tr key={row.label} className="border-t border-gray-200 even:bg-[var(--cream)]">
                    <th scope="row" className="p-4 align-top font-semibold text-[var(--ink)]">{row.label}</th>
                    <td className="p-4 align-top text-[var(--muted)]">{row.a}</td>
                    <td className="p-4 align-top text-[var(--muted)]">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ---------- Sections ---------- */}
          {c.sections.map((s) => (
            <section key={s.heading} className="mt-14">
              <h2 className="text-2xl md:text-3xl uppercase tracking-[0.06em] text-[var(--ink)]" style={serif}>
                {s.heading}
              </h2>
              <p className="mt-4 leading-[1.9] text-[var(--muted)]">{s.body}</p>
            </section>
          ))}

          {/* ---------- Verdict ---------- */}
          <section className="mt-14">
            <h2 className="text-2xl md:text-3xl uppercase tracking-[0.06em] text-[var(--ink)]" style={serif}>
              Which Is Right for You?
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-t-2 border-[var(--navy)] bg-[var(--cream)] p-6">
                <h3 className="text-[0.72rem] font-semibold tracking-[0.25em] uppercase text-[var(--ink)]">Choose {c.a} if</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{c.chooseA}</p>
              </div>
              <div className="border-t-2 border-[var(--navy)] bg-[var(--cream)] p-6">
                <h3 className="text-[0.72rem] font-semibold tracking-[0.25em] uppercase text-[var(--ink)]">Choose {c.b} if</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{c.chooseB}</p>
              </div>
            </div>
          </section>

          {/* ---------- Matt's take + call ---------- */}
          <section className="mt-14 p-8 md:p-10 text-white" style={darkBg}>
            <p className="eyebrow eyebrow-on-dark eyebrow-left">Matt&apos;s Take</p>
            <p className="mt-5 text-lg leading-relaxed italic" style={serif}>
              &ldquo;{c.mattsTake}&rdquo;
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={phoneHref} className="btn-navy justify-center">
                <Icon name="phone" className="w-3.5 h-3.5" /> Call Matt {site.phone}
              </a>
              <a
                href="#ask"
                className="border border-white/40 px-6 py-3 text-center text-[0.68rem] tracking-[0.2em] uppercase hover:bg-white hover:text-[var(--ink)] transition-colors"
              >
                Request a Private Tour
              </a>
            </div>
          </section>
        </div>
      </article>

      {/* ---------- More comparisons ---------- */}
      <section className="bg-[var(--cream)] py-16">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <h2 className="text-xl uppercase tracking-[0.08em] text-[var(--ink)]" style={serif}>
            More Comparisons
          </h2>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/faq/${o.slug}`} className="block h-full bg-white p-5 text-sm text-[var(--ink)] hover:text-[var(--navy)]">
                  {o.title} <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Lead form ---------- */}
      <section id="ask" className="py-24 text-white scroll-mt-20" style={darkBg}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow eyebrow-on-dark eyebrow-left">Still Deciding?</p>
            <h2 className="section-title text-4xl md:text-5xl mt-5">
              Tour {c.a} &amp; {c.b} with Matt
            </h2>
            <p className="mt-6 text-gray-300 leading-relaxed max-w-lg">
              See both side by side with someone who knows them inside and out. Matt will put together a short list of
              homes in each so you can compare in person.
            </p>
            <a href={phoneHref} className="mt-8 inline-flex items-center gap-4 hover:text-[var(--navy-light)] transition-colors">
              <Icon name="phone" className="w-5 h-5" />
              <span className="tracking-wider">{site.phone}</span>
            </a>
          </div>
          <div className="w-full max-w-md lg:justify-self-end">
            <LeadForm
              eyebrow="Compare in Person"
              title="Request a Private Tour"
              subtitle="Share a few details and Matt will follow up personally within 24 hours."
              buttonLabel="Request My Tour"
              source={`Comparison: ${c.title}`}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function lower(s: string) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}
