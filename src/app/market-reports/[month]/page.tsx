import { notFound } from "next/navigation";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { marketReports, getReport, reportTitle } from "@/data/marketReports";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const serif = { fontFamily: "var(--font-heading)" };

type Props = { params: Promise<{ month: string }> };

export async function generateStaticParams() {
  return marketReports.map((r) => ({ month: r.month }));
}

export async function generateMetadata({ params }: Props) {
  const { month } = await params;
  const r = getReport(month);
  if (!r) return {};
  return pageMetadata({
    title: `${reportTitle(r)} | Matt Edwards`,
    description: r.summary.slice(0, 155),
    path: `/market-reports/${r.month}`,
    type: "article",
    noindex: r.draft,
  });
}

export default async function MarketReportPage({ params }: Props) {
  const { month } = await params;
  const r = getReport(month);
  if (!r) notFound();

  return (
    <>
      <JsonLd data={breadcrumbSchema([["Market Reports", "/market-reports"], [reportTitle(r), `/market-reports/${r.month}`]])} />
      {r.draft && (
        <div className="fixed top-20 inset-x-0 z-40 bg-amber-100 text-amber-900 text-center text-sm py-2 px-4">
          DRAFT — placeholder numbers, not for publication. Hidden from Google until published.
        </div>
      )}
      <section className="pt-40 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="eyebrow eyebrow-left">Market Report</p>
          <h1 className="mt-5 text-4xl md:text-5xl uppercase tracking-[0.05em] text-[var(--ink)]" style={serif}>
            {reportTitle(r)}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">{r.summary}</p>

          <dl className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {r.stats.map((s) => (
              <div key={s.label} className="bg-white p-6">
                <dt className="text-[0.62rem] tracking-[0.2em] uppercase text-[var(--muted)]">{s.label}</dt>
                <dd className="mt-2 text-3xl text-[var(--ink)]" style={serif}>{s.value}</dd>
                {s.change && <dd className="mt-1 text-xs text-[var(--navy)]">{s.change}</dd>}
              </div>
            ))}
          </dl>

          {r.sections.map((sec) => (
            <div key={sec.heading} className="mt-12">
              <h2 className="text-2xl uppercase tracking-[0.06em] text-[var(--ink)]" style={serif}>{sec.heading}</h2>
              <p className="mt-4 leading-[1.9] text-[var(--muted)]">{sec.body}</p>
            </div>
          ))}

          <p className="mt-12 text-xs text-gray-500">Source: {r.source}</p>
        </div>
      </section>
      <section className="bg-[var(--cream)] py-16">
        <div className="max-w-md mx-auto px-6">
          <LeadForm
            eyebrow="Monthly Report"
            title="Get the Report by Email"
            subtitle="Matt will send each month's South of Fifth report, plus a personal take on what it means for you."
            buttonLabel="Send Me the Report"
            source={`Market Report ${r.month}`}
          />
        </div>
      </section>
    </>
  );
}
