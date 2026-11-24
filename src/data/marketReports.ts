export interface MarketReport {
  /** yyyy-mm, used in the URL: /market-reports/2026-11 */
  month: string;
  area: string;
  /** Drafts are shown with a banner, set to noindex and kept out of the sitemap. */
  draft: boolean;
  summary: string;
  stats: { label: string; value: string; change?: string }[];
  sections: { heading: string; body: string }[];
  /** e.g. "MLS data as of Dec 1, 2026" */
  source: string;
}

export const marketReports: MarketReport[] = [
  {
    // TODO(Matt): EXAMPLE ONLY. Every number below is a placeholder. Replace with real MLS data
    // and set draft: false to publish. Add a new entry each month.
    month: "2026-11",
    area: "South of Fifth",
    draft: true,
    summary:
      "PLACEHOLDER: a two- or three-sentence summary of how the South of Fifth condo market moved this month.",
    stats: [
      { label: "Closed Sales", value: "00", change: "+0% vs last year" },
      { label: "Median Sale Price", value: "$0.0M", change: "+0% vs last year" },
      { label: "Median $ / Sq Ft", value: "$0,000", change: "+0% vs last year" },
      { label: "Median Days on Market", value: "00", change: "+0 days" },
      { label: "Active Listings", value: "00" },
      { label: "Months of Inventory", value: "0.0" },
    ],
    sections: [
      { heading: "Notable Sales", body: "PLACEHOLDER: the month's notable closings by building." },
      { heading: "What It Means for Buyers", body: "PLACEHOLDER: Matt's advice for buyers." },
      { heading: "What It Means for Sellers", body: "PLACEHOLDER: Matt's advice for sellers." },
    ],
    source: "PLACEHOLDER: data source and date",
  },
];

export function getReport(month: string) {
  return marketReports.find((r) => r.month === month);
}

export function reportTitle(r: MarketReport) {
  const date = new Date(`${r.month}-01T12:00:00Z`);
  const label = date.toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
  return `${r.area} Market Report — ${label}`;
}

export const publishedReports = () => marketReports.filter((r) => !r.draft);
