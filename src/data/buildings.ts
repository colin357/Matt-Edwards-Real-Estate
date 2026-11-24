export interface Building {
  name: string;
  slug: string;
  address: string;
  /** TODO(Matt) */
  yearBuilt: string;
  /** TODO(Matt) */
  floors: string;
  /** TODO(Matt) */
  units: string;
  /** TODO(Matt): 2–3 paragraphs */
  description: string[];
  /** TODO(Matt) */
  amenities: string[];
  /** TODO(Matt) */
  petPolicy: string;
  /** TODO(Matt): minimum lease term, short-term rental rules */
  rentalPolicy: string;
  /** TODO(Matt): building-specific IDX search/embed code or URL, once an IDX vendor is chosen */
  idxEmbed: string;
  /** TODO(Matt): YouTube embed URL for a building tour */
  videoUrl: string;
  /** TODO(Matt): Matt's take, 1–3 paragraphs */
  mattsTake: string[];
}

const empty = {
  yearBuilt: "",
  floors: "",
  units: "",
  description: [],
  amenities: [],
  petPolicy: "",
  rentalPolicy: "",
  idxEmbed: "",
  videoUrl: "",
  mattsTake: [],
};

// TODO(Matt): fill in each building's details. A page stays out of Google (noindex)
// and out of the sitemap until it has a description.
export const buildings: Building[] = [
  { name: "Continuum", slug: "continuum", address: "100 South Pointe Drive, Miami Beach, FL 33139", ...empty },
  { name: "Apogee", slug: "apogee", address: "800 South Pointe Drive, Miami Beach, FL 33139", ...empty },
  { name: "Murano Grande", slug: "murano-grande", address: "400 Alton Road, Miami Beach, FL 33139", ...empty },
  { name: "The Setai Residences", slug: "the-setai-residences", address: "101 20th Street, Miami Beach, FL 33139", ...empty },
  { name: "Icon South Beach", slug: "icon-south-beach", address: "450 Alton Road, Miami Beach, FL 33139", ...empty },
  { name: "Portofino", slug: "portofino", address: "300 South Pointe Drive, Miami Beach, FL 33139", ...empty },
  { name: "Glass", slug: "glass", address: "120 Ocean Drive, Miami Beach, FL 33139", ...empty },
  { name: "Five Park", slug: "five-park", address: "500 Alton Road, Miami Beach, FL 33139", ...empty },
];

export function getBuildingBySlug(slug: string) {
  return buildings.find((b) => b.slug === slug);
}

/** A building page is ready for Google once it has real content. */
export function isBuildingPublished(b: Building) {
  return b.description.length > 0;
}
