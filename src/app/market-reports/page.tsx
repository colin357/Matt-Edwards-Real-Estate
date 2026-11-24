import Link from "next/link";
import { marketReports, publishedReports, reportTitle } from "@/data/marketReports";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "South of Fifth & Miami Beach Market Reports | Matt Edwards",
  description: "Monthly South of Fifth and Miami Beach luxury condo market reports: sales, prices, $/sq ft and inventory, with analysis from Matt Edwards.",
  path: "/market-reports",
  // Stays out of Google until at least one report is published.
  noindex: publishedReports().length === 0,
});

export default function MarketReportsIndex() {
  const reports = [...marketReports].sort((a, b) => b.month.localeCompare(a.month));
  return (
    <section className="pt-36 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <p className="eyebrow eyebrow-left">Market Reports</p>
        <h1 className="section-title text-4xl md:text-5xl text-[var(--ink)] mt-5">South of Fifth Market Reports</h1>
        <ul className="mt-10 border-t border-gray-200">
          {reports.map((r) => (
            <li key={r.month} className="border-b border-gray-200">
              <Link href={`/market-reports/${r.month}`} className="flex items-center justify-between gap-4 py-5 hover:text-[var(--navy)]">
                <span>{reportTitle(r)}</span>
                {r.draft && <span className="text-[0.6rem] tracking-[0.2em] uppercase bg-amber-100 text-amber-800 px-2 py-1">Draft</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
