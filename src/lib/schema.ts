import { site, socialLinks } from "@/lib/site";

const agentId = `${site.url}/#agent`;
const personId = `${site.url}/#matt-edwards`;

/** Site-wide structured data: Matt as a RealEstateAgent business and as a Person. */
export function siteSchema() {
  const sameAs = socialLinks.map((s) => s.href);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": agentId,
        name: `${site.name} | ${site.brokerage}`,
        url: site.url,
        image: `${site.url}/images/headshot.jpg`,
        logo: `${site.url}/images/logo.png`,
        telephone: site.phoneE164,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        areaServed: site.areasServed.map((name) => ({ "@type": "Place", name })),
        parentOrganization: { "@type": "Organization", name: site.brokerage },
        employee: { "@id": personId },
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        jobTitle: site.role,
        url: site.url,
        image: `${site.url}/images/headshot.jpg`,
        telephone: site.phoneE164,
        email: site.email,
        worksFor: { "@type": "Organization", name: site.brokerage },
        knowsAbout: ["Luxury real estate", "Miami Beach condos", "Waterfront homes", ...site.areasServed],
        ...(sameAs.length ? { sameAs } : {}),
      },
    ],
  };
}

/** BreadcrumbList for inner pages. Pass [name, path] pairs after Home. */
export function breadcrumbSchema(items: [string, string][]) {
  const all: [string, string][] = [["Home", ""], ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${site.url}${path}`,
    })),
  };
}

export function JsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
