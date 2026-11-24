/**
 * Central site settings. Everything marked TODO(Matt) needs real information
 * from Matt. Empty values are hidden on the site, never shown as placeholders.
 */
export const site = {
  name: "Matt Edwards",
  tagline: "Miami Beach Luxury Real Estate",
  role: "Luxury Real Estate Advisor",
  brokerage: "ONE Sotheby's International Realty",
  /** Live domain, used for canonical URLs, the sitemap and structured data */
  url: "https://www.mattedwardsrealestate.com",

  // ---------- Contact ----------
  // TODO(Matt): confirm the (214) number is the one to publish, or add a local 305/786 line.
  phone: "(214) 886-0363",
  phoneE164: "+12148860363",
  /** Number used for "Text" buttons (E.164). Empty hides the Text button. */
  smsNumber: "+12148860363",
  /** TODO(Matt): WhatsApp number, digits only with country code (e.g. "13055551234"). Empty hides WhatsApp. */
  whatsapp: "",
  email: "medwards@onesothebysrealty.com",
  address: {
    street: "1680 Michigan Avenue, Suite 100",
    city: "Miami Beach",
    region: "FL",
    postalCode: "33139",
    country: "US",
  },
  /** MLS ID shown in the footer legal line */
  license: "FL MLS #36425",

  /** TODO(Matt): full profile URLs. An empty value hides that icon and leaves it out of sameAs. */
  social: {
    instagram: "",
    youtube: "",
    linkedin: "",
  },

  // ---------- Homepage hero ----------
  /**
   * TODO(Matt): add Matt's own waterfront footage, e.g. "/videos/hero.mp4". While empty, the hero shows
   * the oceanfront photo below with a slow zoom. (The old free Mixkit sunset clip was removed.)
   */
  heroVideoUrl: "",
  /** Oceanfront condo towers on Miami Beach (Continuum, South Pointe) */
  heroPoster: "https://images.unsplash.com/photo-1589083130544-0d6a2926e519?w=1920&q=75",
  heroAlt: "Oceanfront condominium towers on the water in Miami Beach",

  // ---------- Lead form ----------
  /** true: budget dropdown includes "Under $1M". false: the form is labeled "Properties from $1M". */
  showUnderOneMillion: true,
  /**
   * Where lead forms are sent: any URL accepting a JSON POST (Formspree, Zapier/Make webhook, CRM webhook).
   * Set NEXT_PUBLIC_LEAD_ENDPOINT in Vercel. Until then the form opens a pre-filled email to Matt.
   */
  leadEndpoint: process.env.NEXT_PUBLIC_LEAD_ENDPOINT || "",

  // ---------- IDX listings ----------
  idx: {
    /** TODO(Matt): IDX vendor name (e.g. "Showcase IDX", "IDX Broker") */
    vendor: "",
    /** TODO(Matt): the vendor's embed script URL. Empty = no listings widgets anywhere. */
    scriptUrl: "",
  },

  // ---------- About ----------
  about: {
    /** TODO(Matt): 2–4 paragraphs of personal story */
    story: [] as string[],
    /** TODO(Matt): e.g. "2018" (year he moved to South of Fifth) */
    southOfFifthSince: "",
    /** TODO(Matt): e.g. ["English", "Spanish"] */
    languages: [] as string[],
    /** TODO(Matt): Florida real estate license number, e.g. "SL1234567" */
    licenseNumber: "",
    /** TODO(Matt): e.g. "2015" (year he started in real estate) */
    inBusinessSince: "",
  },

  areasServed: [
    "South of Fifth",
    "Sunset Harbour",
    "Miami Beach",
    "Fisher Island",
    "Brickell",
    "Coconut Grove",
    "Coral Gables",
    "Palm Beach",
    "West Palm Beach",
  ],
};

/** Social proof. Each part stays hidden until it has real entries. */
export const proof = {
  /** TODO(Matt): real client reviews (Google, Zillow…). { quote, name, context?, sourceUrl? } */
  testimonials: [] as { quote: string; name: string; context?: string; sourceUrl?: string }[],
  /** TODO(Matt): closed deals. { title, role, detail? } e.g. { title: "Continuum North, 2-bed", role: "Represented buyer" } */
  deals: [] as { title: string; role: string; detail?: string }[],
};

export const phoneHref = `tel:${site.phoneE164}`;
export const smsHref = site.smsNumber ? `sms:${site.smsNumber}` : "";
export const whatsappHref = site.whatsapp ? `https://wa.me/${site.whatsapp}` : "";
export const addressLine1 = site.address.street;
export const addressLine2 = `${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

export const socialLinks = (Object.entries(site.social) as [keyof typeof site.social, string][])
  .filter(([, href]) => href && href !== "#")
  .map(([name, href]) => ({ name, href }));

/** Years in business, computed from about.inBusinessSince (empty if unknown). */
export function yearsInBusiness(): number | null {
  const y = parseInt(site.about.inBusinessSince, 10);
  return y ? new Date().getFullYear() - y : null;
}
