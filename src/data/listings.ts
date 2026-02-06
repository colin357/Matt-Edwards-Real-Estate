export interface Listing {
  id: string;
  slug: string;
  title: string;
  address: string;
  neighborhood: string;
  price: number;
  priceFormatted: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  sqftFormatted: string;
  description: string;
  shortDescription: string;
  // Number of photos in /public/listings/{slug}/ folder (named 1.ext, 2.ext, etc.)
  // Used as fallback when filesystem auto-detection is unavailable
  imageCount: number;
  // Default file extension for listing photos (e.g., 'webp', 'avif', 'jpg', 'jpeg', 'png')
  // Used as fallback when filesystem auto-detection is unavailable
  imageDefaultExt?: string;
  // Override file extensions for specific image numbers (e.g., { 18: 'avif', 23: 'jpg' })
  // Used as fallback when filesystem auto-detection is unavailable
  imageExtOverrides?: Record<number, string>;
  videoUrl?: string;
  status: 'available' | 'pending' | 'sold';
  propertyType: 'single-family' | 'condo' | 'penthouse' | 'waterfront' | 'estate';
  yearBuilt?: number;
  lotSize?: string;
  featured: boolean;
}

/** Supported image file extensions for listing photos */
const IMAGE_EXTENSIONS = new Set([
  'webp', 'avif', 'jpg', 'jpeg', 'png', 'gif', 'tiff', 'bmp', 'svg',
]);

/**
 * Generates image paths for a listing.
 *
 * Primary: auto-detects images from the filesystem by scanning
 * /public/listings/{slug}/ for files named with a numeric prefix (e.g., 1.webp,
 * 2.avif, 3.jpg). Supports any common image format (webp, avif, jpg, jpeg, png, etc.).
 *
 * Fallback: if the filesystem is unavailable, uses the listing's imageCount,
 * imageDefaultExt, and imageExtOverrides fields to build paths manually.
 *
 * To add photos to a listing:
 * 1. Add your photos to /public/listings/{slug}/
 * 2. Name them with numeric prefixes: 1.webp, 2.jpg, 3.avif, etc.
 *    Any mix of formats is supported.
 * 3. Images are sorted numerically and served automatically.
 */
export function getListingImages(listing: Listing): string[] {
  // Try auto-detection from filesystem (works in server components / build time)
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const fs = require('fs');
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const pathMod = require('path');

    const dir = pathMod.join(process.cwd(), 'public', 'listings', listing.slug);
    const files: string[] = fs.readdirSync(dir);

    const imageFiles = files
      .filter((file: string) => {
        const ext = file.split('.').pop()?.toLowerCase();
        return ext && IMAGE_EXTENSIONS.has(ext) && /^\d+\./.test(file);
      })
      .sort((a: string, b: string) => parseInt(a) - parseInt(b))
      .map((file: string) => `/listings/${listing.slug}/${file}`);

    if (imageFiles.length > 0) return imageFiles;
  } catch {
    // Filesystem not available — fall through to manual approach
  }

  // Fallback: manual path generation from listing data
  const images: string[] = [];
  for (let i = 1; i <= listing.imageCount; i++) {
    const ext = listing.imageExtOverrides?.[i] ?? listing.imageDefaultExt ?? 'webp';
    images.push(`/listings/${listing.slug}/${i}.${ext}`);
  }
  return images;
}

// Sample listings - replace with real data or CMS integration
export const listings: Listing[] = [
  {
    id: '1',
    slug: 'fisher-island-mansion-7',
    title: 'Fisher Island Mansion No. 7',
    address: '1007 Fisher Island Drive',
    neighborhood: 'Miami Beach',
    price: 55000000,
    priceFormatted: '$55,000,000',
    bedrooms: 8,
    bathrooms: 12,
    sqft: 15801,
    sqftFormatted: '15,801',
    shortDescription: 'THE GRANDE DAME OF FISHER ISLAND... THE MEGA MANSION No.7 SITS ON OVER HALF ACRE OF LUSH GARDENS & WATER FEATURES WITH STUNNING DIRECT BAY & GOLF COURSE VIEWS!',
    description: `THE GRANDE DAME OF FISHER ISLAND... THE MEGA MANSION No.7 SITS ON OVER HALF ACRE OF LUSH GARDENS & WATER FEATURES WITH STUNNING DIRECT BAY & GOLF COURSE VIEWS! This Modern Tuscan Mansion features over 15,800 SF of Interior Living Space + Massive Outdoor Spaces for Entertaining. The Largest & Most Opulent Mansion on Fisher Island features 8 Bedrooms + 10 Bathrooms + 2 Powder Rooms. European White Premium select Oak Flooring & Italian Stone throughout--Italian Kitchen equipped with top-of-the-line Wolf & Sub-Zero Appliances. Expansive Master Suite with His & Hers Baths features Dornbracht Fixtures + Huge Dressing Rooms. Infinity Edge Pool & Spa. Rooftop with Wellness areas + Yoga Meditation Deck with 360-degree views. Architecture by Portuondo Perotti Architects. 4 Car Garage + Large Driveway.`,
    imageCount: 32,
    imageExtOverrides: { 18: 'avif', 23: 'avif' },
    status: 'available',
    propertyType: 'single-family',
    yearBuilt: 2026,
    lotSize: '0.54 acres',
    featured: true,
  },
{
  id: '2',
  slug: '126-w-san-marino-dr-miami-beach',
  title: '126 W San Marino Drive',
  address: '126 W San Marino Dr, Miami Beach, FL 33139',
  neighborhood: 'Venetian Islands',
  price: 37000000,
  priceFormatted: '$37,000,000',
  bedrooms: 5,
  bathrooms: 7.5,
  sqft: 7890,
  sqftFormatted: '7,890',
  shortDescription: 'Rare modern waterfront estate on Venetian Islands with skyline and bay views.',
  description: `Located on the coveted south side of San Marino Island, this waterfront estate offers expansive views of Biscayne Bay and the Miami skyline. Situated on a lot and a half with 90 feet of water frontage and a multi-vessel dock with lift and jet ski platforms, the residence blends modern design with tropical appeal. 

The open floor plan is defined by 10-foot telescopic Fleetwood glass doors that create seamless indoor/outdoor living. Blonde oak floors, a gourmet eat-in kitchen with gas range and stainless Miele appliances, and a separate catering kitchen with pantry and service entrance elevate daily life and entertaining. Additional living spaces include a comfortable breakfast area, wine room, bar, and family room. 

The primary suite is a private retreat with panoramic sunset views, two dressing rooms, and a book-matched marble bath with rain shower and deep soaking tub. Outdoor amenities include wraparound terraces, an expansive rooftop entertaining area with pool and spa, a modern gazebo with summer kitchen and cabana bath, a privacy gate, and a two-car garage.`,
  imageCount: 54,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 2018,
  featured: true,
},
{
  id: '3',
  slug: '1004-fisher-island-drive-miami-beach',
  title: '1004 Fisher Island Drive',
  address: '1004 Fisher Island Drive, Miami Beach, FL 33109',
  neighborhood: 'Fisher Island',
  price: 36500000,
  priceFormatted: '$36,500,000',
  bedrooms: 8,
  bathrooms: 12,
  sqft: 10648,
  sqftFormatted: '10,648',
  shortDescription: 'Exclusive Fisher Island estate with waterfront access and extraordinary customization potential.',
  description: `Located in one of the most private and prestigious enclaves in the United States, this rare Fisher Island estate presents an exceptional opportunity to customize a trophy residence exceeding 10,000 square feet. Positioned on an expansive waterfront lot with ocean access, the property commands privacy and expansive views of Biscayne Bay, emerald fairways, and the Miami skyline.

The home offers a grand layout with multiple living spaces, elevator access, and opportunities to tailor interior finishes and exterior landscaping to suit exact lifestyle preferences. Additional features include a pool, ample parking, and proximity to the island’s private club, golf course, marina, and beach amenities.

This offering represents one of the last available estate sites on Fisher Island and invites a purchaser to realize a world-class architectural vision in a setting defined by exclusivity and luxury.`,
  imageCount: 19,
  imageExtOverrides: { 7: 'avif', 12: 'avif' },
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 2006,
  lotSize: '0.37 acres',
  featured: true,
},
{
  id: '4',
  slug: '1005-fisher-island-drive-fisher-island',
  title: '1005 Fisher Island Drive',
  address: '1005 Fisher Island Drive, Fisher Island, FL 33109',
  neighborhood: 'Fisher Island',
  price: 29500000,
  priceFormatted: '$29,500,000',
  bedrooms: 7,
  bathrooms: 7.5,
  sqft: 7860,
  sqftFormatted: '7,860',
  shortDescription: 'Elegant waterfront Fisher Island residence with private dock and bay views.',
  description: `Situated on the bayfront of ultra-exclusive Fisher Island, this elegant single-family residence offers direct water access, a private dock, and sweeping views of Biscayne Bay and the Miami skyline. The home blends classic architecture with resort-style living in one of the most secure and private communities in the country.

Interior spaces are defined by generous ceiling heights, abundant natural light, and an open yet functional floor plan designed for both everyday living and entertaining. The gourmet kitchen connects seamlessly to formal and informal living areas, while multiple bedrooms offer ensuite baths and tranquil island views.

Outdoor living is a standout feature, with a waterfront pool, expansive terraces, lush landscaping, and a private dock ideal for yachting enthusiasts. Ownership includes access to Fisher Island Club amenities including golf, tennis, beach club, marina, and private ferry service.`,
  imageCount: 30,
  imageExtOverrides: {
    1: 'avif', 3: 'jpeg', 4: 'jpeg', 5: 'jpeg', 7: 'jpeg', 8: 'jpeg',
    10: 'jpeg', 11: 'jpeg', 12: 'jpeg', 13: 'jpeg', 15: 'avif', 20: 'avif',
  },
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 1989,
  lotSize: '0.41 acres',
  featured: false,
},
{
  id: '1003-fisher-island-drive',
  slug: '1003-fisher-island-drive-miami-beach',
  title: '1003 Fisher Island Drive',
  address: '1003 Fisher Island Drive, Fisher Island, FL 33109',
  neighborhood: 'Fisher Island',
  price: 28500000,
  priceFormatted: '$28,500,000',
  bedrooms: 7,
  bathrooms: 7.5,
  sqft: 7600,
  sqftFormatted: '7,600',
  shortDescription: 'Prestigious Fisher Island waterfront estate with panoramic bay views and private dock.',
  description: `An exceptional waterfront estate located on Fisher Island, offering expansive views of Biscayne Bay and city skyline. This residence features grand living spaces and a thoughtful layout that takes full advantage of indoor-outdoor Florida living.

The chef’s kitchen is equipped with high-end appliances and opens to light-filled living and dining areas. Multiple ensuite bedrooms include a luxurious primary suite with direct water views. The outdoor space includes a pool, ample terrace areas, and a private dock with deep water access.

The property provides full access to Fisher Island Club amenities including golf, tennis, beach club, marina, and exclusive ferry service, delivering a complete private island lifestyle.`,
  imageCount: 29,
  imageDefaultExt: 'jpg',
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 1995,
  lotSize: '0.38 acres',
  featured: false,
},
{
  id: '1009-fisher-island-drive',
  slug: '1009-fisher-island-drive-fisher-island',
  title: '1009 Fisher Island Drive',
  address: '1009 Fisher Island Drive, Fisher Island, FL 33109',
  neighborhood: 'Fisher Island',
  price: 32500000,
  priceFormatted: '$32,500,000',
  bedrooms: 7,
  bathrooms: 8.5,
  sqft: 8200,
  sqftFormatted: '8,200',
  shortDescription: 'Premier Fisher Island waterfront residence with direct bay access and luxurious outdoor living.',
  description: `Situated on Fisher Island’s coveted waterfront, this exceptional estate offers expansive views of Biscayne Bay and the Miami skyline. The residence provides a seamless flow between indoor and outdoor spaces, ideal for relaxed living and high-end entertaining.

The chef’s kitchen is equipped with premium appliances and opens to grand living and dining areas with abundant natural light. Multiple ensuite bedrooms include a luxurious primary suite with private balcony and water views. The outdoor area features a waterfront pool, expansive terraces, lush landscaping, and a private dock with deep-water access.

Ownership on Fisher Island includes exclusive access to club amenities such as golf, tennis, beach club, marina, spa, and private ferry service, delivering a complete private-island lifestyle.`,
  imageCount: 34,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 1992,
  lotSize: '0.40 acres',
  featured: false,
},
{
  id: '7085-fisher-island-drive',
  slug: '7085-fisher-island-drive-miami-beach',
  title: '7085 Fisher Island Drive',
  address: '7085 Fisher Island Drive, Fisher Island, FL 33109',
  neighborhood: 'Fisher Island',
  price: 17800000,
  priceFormatted: '$17,800,000',
  bedrooms: 5,
  bathrooms: 6.5,
  sqft: 6540,
  sqftFormatted: '6,540',
  shortDescription: 'Elegant waterfront Fisher Island residence with private dock and panoramic bay views.',
  description: `This exceptional Fisher Island waterfront home offers panoramic views of Biscayne Bay and direct water access via a private dock. Designed with both comfort and resort-style living in mind, the residence features generous living spaces with abundant natural light and an open flow between indoor and outdoor entertaining areas.

The gourmet kitchen is equipped with high-end appliances and opens to formal and informal living and dining spaces. Multiple ensuite bedrooms include a luxurious primary suite with water views and private bath.

Outdoor amenities include an expansive pool deck, lush landscaping, and a deep-water dock. Residents enjoy full access to the exclusive Fisher Island Club lifestyle, including golf, tennis, beach club, marina, spa, and private ferry service.`,
  imageCount: 75,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 1998,
  lotSize: '0.32 acres',
  featured: false,
},
{
  id: '1417-n-venetian-way',
  slug: '1417-n-venetian-way-miami',
  title: '1417 N Venetian Way',
  address: '1417 N Venetian Way, Miami, FL 33139',
  neighborhood: 'North Venetian Islands',
  price: 24800000,
  priceFormatted: '$24,800,000',
  bedrooms: 6,
  bathrooms: 7.5,
  sqft: 8300,
  sqftFormatted: '8,300',
  shortDescription: 'Exquisite waterfront Venetian Islands estate with deep water dock and skyline views.',
  description: `Located on the prestigious North Venetian Islands, this waterfront estate offers deep water access, panoramic Biscayne Bay views, and spectacular Miami skyline vistas. The residence features an open layout with abundant natural light and seamless indoor-outdoor living spaces ideal for entertaining.

The gourmet kitchen is equipped with high-end appliances and custom cabinetry. Multiple ensuite bedrooms include a luxurious primary suite with private water-facing terrace. Outdoor amenities include a pool, expansive terraces, lush landscaping, and a private dock with deep water access.

Ownership includes convenient proximity to Miami Beach and Key Biscayne, offering the best of city, bay, and island living.`,
  imageCount: 71,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 1994,
  lotSize: '0.41 acres',
  featured: false,
},
{
  id: '288-302-w-dilido-dr',
  slug: '288-302-w-dilido-dr-miami-beach',
  title: '288-302 W Dilido Drive',
  address: '288-302 W Dilido Dr, Miami Beach, FL 33139',
  neighborhood: 'North Beach / Dilido Islands',
  price: 22500000,
  priceFormatted: '$22,500,000',
  bedrooms: 6,
  bathrooms: 7,
  sqft: 7900,
  sqftFormatted: '7,900',
  shortDescription: 'Rare combined Dilido Island waterfront property with deep water and skyline views.',
  description: `A unique offering in Miami Beach’s coveted Dilido Islands, this combined waterfront property spans two adjacent parcels totaling generous frontage on Biscayne Bay. The homes provide deep water access, a private dock with room for large vessels, and panoramic views of the Miami skyline.

The residences feature spacious layouts with abundant natural light and seamless indoor-outdoor transitions. Multiple living and dining areas, gourmet kitchens, and ensuite bedrooms create comfortable daily living spaces while accommodating large-scale entertaining.

Outdoor amenities include pools, expansive terraces, and lush tropical landscaping. This rare offering presents the opportunity for a compound or redevelopment in one of Miami Beach’s most prestigious waterfront neighborhoods.`,
  imageCount: 63,
  status: 'available',
  propertyType: 'estate',
  yearBuilt: 1991,
  lotSize: '0.60 acres',
  featured: false,
},
{
  id: '2053-n-bay-rd',
  slug: '2053-n-bay-rd-miami-beach',
  title: '2053 N Bay Rd',
  address: '2053 N Bay Rd, Miami Beach, FL 33140',
  neighborhood: 'Bayshore',
  price: 26500000,
  priceFormatted: '$26,500,000',
  bedrooms: 8,
  bathrooms: 8.5,
  sqft: 7428,
  sqftFormatted: '7,428',
  shortDescription: 'Architect-designed Bayshore estate with two homes, extensive outdoor living, and modern amenities.',
  description: `This North Bay Road masterpiece encompasses two connected homes offering a combined 8 bedrooms and 8.5 bathrooms across approximately 7,866 square feet of total living space on a double flow-thru lot spanning 14,620 square feet from N Bay Road to Alton Road. The design emphasizes fluid geometry with curved shapes, custom marble and plaster features, and premium finishes. :contentReference[oaicite:0]{index=0}

Interior highlights include a light-filled living room with custom wall treatments and a sculptural staircase, a creamy lacquer Italkraft kitchen with Calcutta marble counters and premium appliances, and a primary suite with private balcony and California closets. The property includes a separate 3-bedroom guest house with wellness area, sauna, steam shower, and roof terrace. Outdoor amenities include extensive entertaining spaces with a 45-foot saltwater pool, teak pergola, summer kitchen, and smart home integration with Lutron and Sonos systems. :contentReference[oaicite:1]{index=1}`,
  imageCount: 0,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 2025,
  lotSize: '0.34 acres',
  featured: false,
},
{
  id: '7025-fisher-island-drive',
  slug: '7025-fisher-island-drive-fisher-island',
  title: '7025 Fisher Island Drive',
  address: '7025 Fisher Island Drive, Fisher Island, FL 33109',
  neighborhood: 'Fisher Island',
  price: 19500000,
  priceFormatted: '$19,500,000',
  bedrooms: 6,
  bathrooms: 7.5,
  sqft: 7320,
  sqftFormatted: '7,320',
  shortDescription: 'Elegant Fisher Island waterfront residence with private dock and panoramic bay views.',
  description: `This exceptional Fisher Island estate presents a refined waterfront residence with expansive Biscayne Bay views and direct deep-water access via a private dock. Designed for both comfortable family living and grand entertaining, the home features generous living spaces with abundant natural light and open flow between indoor and outdoor areas.

The gourmet kitchen is equipped with premium appliances and flows seamlessly to formal and casual living spaces. Multiple ensuite bedrooms include a luxurious primary suite with water views. Outdoor amenities include an expansive pool with waterfront terrace, lush tropical landscaping, and ample space for alfresco enjoyment.

Residents enjoy full access to the exclusive Fisher Island Club lifestyle, including golf, tennis, beach club, marina, spa, and private ferry service.`,
  imageCount: 0,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 1997,
  lotSize: '0.35 acres',
  featured: false,
},
{
  id: '5242-fisher-island-drive',
  slug: '5242-fisher-island-drive-fisher-island',
  title: '5242 Fisher Island Drive',
  address: '5242 Fisher Island Drive, Fisher Island, FL 33109',
  neighborhood: 'Fisher Island',
  price: 24800000,
  priceFormatted: '$24,800,000',
  bedrooms: 7,
  bathrooms: 8.5,
  sqft: 8200,
  sqftFormatted: '8,200',
  shortDescription: 'Prestigious Fisher Island waterfront estate with deep-water access and luxury amenities.',
  description: `Located on one of Fisher Island’s most desirable waterfront streets, this exceptional estate offers expansive views of Biscayne Bay and direct deep-water access via a private dock. The residence combines elegant architectural detailing with modern living spaces designed for comfort and entertaining.

The interior features a grand living room, gourmet kitchen with premium appliances, and multiple ensuite bedrooms including a primary suite with panoramic water views. Outdoor amenities include a swimming pool, spacious terraces, lush landscaping, and a deep-water dock capable of accommodating large vessels.

Ownership includes full access to Fisher Island Club amenities, including golf, tennis, beach club, marina, spa, and private ferry service, delivering a complete private-island lifestyle.`,
  imageCount: 0,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 2001,
  lotSize: '0.37 acres',
  featured: false,
},
{
  id: '444-w-rivo-alto-dr',
  slug: '444-w-rivo-alto-dr-miami-beach',
  title: '444 W Rivo Alto Drive',
  address: '444 W Rivo Alto Dr, Miami Beach, FL 33139',
  neighborhood: 'Rivo Alto Island',
  price: 12950000,
  priceFormatted: '$12,950,000',
  bedrooms: 5,
  bathrooms: 6,
  sqft: 6100,
  sqftFormatted: '6,100',
  shortDescription: 'Waterfront Rivo Alto estate with deep-water dock and contemporary design.',
  description: `Beautifully situated on Rivo Alto Island in Miami Beach, this waterfront estate offers deep-water access, a private dock, and panoramic views of Biscayne Bay and the Miami skyline. Designed with both comfort and entertaining in mind, the residence features open living spaces, high ceilings, and abundant natural light.

The chef’s kitchen is equipped with premium appliances and flows to formal and casual dining and living areas. Multiple ensuite bedrooms include a well-appointed primary suite with water views. Outdoor amenities include a pool, expansive waterfront terrace, lush tropical landscaping, and direct dock access for boating.

Residents enjoy proximity to South Beach, Sunset Harbour, and surrounding dining and cultural attractions while maintaining privacy and tranquility on Rivo Alto Island.`,
  imageCount: 0,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 2015,
  lotSize: '0.30 acres',
  featured: false,
},
{
  id: '1300-brickell-bay-dr-4401',
  slug: '1300-brickell-bay-dr-4401-miami',
  title: 'Unit 4401 at 1300 Brickell Bay Drive',
  address: '1300 Brickell Bay Dr, Unit 4401, Miami, FL 33131',
  neighborhood: 'Brickell',
  price: 3395000,
  priceFormatted: '$3,395,000',
  bedrooms: 3,
  bathrooms: 3.5,
  sqft: 2735,
  sqftFormatted: '2,735',
  shortDescription: 'Exclusive high-floor Brickell residence with panoramic bay and city views.',
  description: `Located in one of Brickell’s premier waterfront towers, this high-floor residence in Unit 4401 offers expansive bay and skyline views. The layout features well-proportioned living spaces with abundant natural light, high ceilings, and elegant finishes throughout.

The chef’s kitchen is equipped with premium appliances and seamlessly opens to the dining and living areas. The primary suite features a private bath and waterfront views. Two additional bedrooms and a guest bath provide ample space for family or visiting guests.

Amenities in the building include 24-hour concierge, waterfront pool, fitness center, spa, social lounges, and private marina access. Ideal for both full-time living and investment, this Brickell residence combines convenient urban living with luxury finishes.`,
  imageCount: 0,
  status: 'available',
  propertyType: 'condo',
  yearBuilt: 2005,
  featured: false,
},
{
  id: '17141-collins-ave-lph-1',
  slug: '17141-collins-ave-lph-1-sunny-isles-beach',
  title: 'Unit LPH-1 at 17141 Collins Ave',
  address: '17141 Collins Ave, Unit LPH-1, Sunny Isles Beach, FL 33160',
  neighborhood: 'Sunny Isles Beach',
  price: 11900000,
  priceFormatted: '$11,900,000',
  bedrooms: 6,
  bathrooms: 7.5,
  sqft: 6106,
  sqftFormatted: '6,106',
  shortDescription: 'Oceanfront lower penthouse with panoramic water and city views in Muse Residences.',
  description: `This full-floor oceanfront lower penthouse at Muse Residences offers unobstructed 360-degree views of the Atlantic Ocean, Intracoastal Waterway, and city skyline. Designed with soaring ceilings and dramatic terraces, the residence features expansive living spaces, Italian marble and wood flooring, two summer kitchens, and high-end finishes throughout. The layout includes 6 bedrooms, 7.5 bathrooms, and additional service quarters with abundant natural light and seamless indoor-outdoor flow.

Residents of Muse enjoy premium amenities including 24-hour concierge, resort-style pool and spa, fitness center, on-site restaurant, valet, and security. The penthouse’s large terraces and oceanfront positioning make it ideal for both everyday living and entertaining with spectacular water and sunset views. :contentReference[oaicite:0]{index=0}`,
  imageCount: 0,
  status: 'available',
  propertyType: 'condo',
  yearBuilt: 2018,
  featured: false,
},
{
  id: '7124-fisher-island-drive',
  slug: '7124-fisher-island-drive-fisher-island',
  title: '7124 Fisher Island Drive',
  address: '7124 Fisher Island Drive, Fisher Island, FL 33109',
  neighborhood: 'Fisher Island',
  price: 25500000,
  priceFormatted: '$25,500,000',
  bedrooms: 7,
  bathrooms: 8.5,
  sqft: 8400,
  sqftFormatted: '8,400',
  shortDescription: 'Premier Fisher Island waterfront estate with deep-water dock and dramatic bay views.',
  description: `This remarkable Fisher Island waterfront estate offers expansive Biscayne Bay views and direct deep-water access via a private dock. Designed for both luxurious living and grand entertaining, the home features generous ceiling heights, abundant natural light, and seamless connections between indoor and outdoor spaces.

The chef’s kitchen is equipped with premium appliances and custom finishes. Multiple ensuite bedrooms include a luxurious primary suite with private balcony and water views. Outdoor amenities include an expansive waterfront pool, large terraces for alfresco living, lush tropical gardens, and private dock facilities suitable for large vessels.

Ownership includes access to exclusive Fisher Island Club amenities such as golf, tennis, beach club, marina, spa, and private ferry service, defining the ultimate private-island lifestyle.`,
  imageCount: 0,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 2000,
  lotSize: '0.38 acres',
  featured: false,
},
{
  id: '300-s-pointe-dr-3103',
  slug: '300-s-pointe-dr-3103-miami-beach',
  title: 'Unit 3103 at 300 S Pointe Dr',
  address: '300 S Pointe Dr, Unit 3103, Miami Beach, FL 33139',
  neighborhood: 'South of Fifth',
  price: 17950000,
  priceFormatted: '$17,950,000',
  bedrooms: 4,
  bathrooms: 4.5,
  sqft: 3785,
  sqftFormatted: '3,785',
  shortDescription: 'Luxurious high-floor residence with panoramic bay, ocean, and skyline views in South of Fifth.',
  description: `Perched on a high floor at one of South of Fifth’s premier addresses, this residence offers unobstructed views of Biscayne Bay, the Atlantic Ocean, and the Miami skyline. The expansive open layout features floor-to-ceiling windows, wide terraces for outdoor living, and premium finishes throughout.

The chef’s kitchen includes high-end appliances and custom cabinetry. The primary suite offers bay views, a private sitting area, and spa-inspired bath. Additional ensuite bedrooms provide comfort and privacy for family or guests.

Building amenities include 24-hour concierge, waterfront pool, fitness center, spa, private beach access, and resident lounge. This residence combines sophisticated design with premier South Beach living.`,
  imageCount: 0,
  status: 'available',
  propertyType: 'condo',
  yearBuilt: 2008,
  featured: false,
},
{
  id: '1300-monad-ter-11e',
  slug: '1300-monad-ter-11e-miami-beach',
  title: 'Unit 11E at 1300 Monad Terrace',
  address: '1300 Monad Terrace, Unit 11E, Miami Beach, FL 33139',
  neighborhood: 'South Beach',
  price: 4500000,
  priceFormatted: '$4,500,000',
  bedrooms: 3,
  bathrooms: 3,
  sqft: 2645,
  sqftFormatted: '2,645',
  shortDescription: 'Spacious South Beach residence with water and city views in boutique building.',
  description: `Located in the heart of South Beach, this well-appointed residence at 1300 Monad Terrace features abundant natural light, generous living spaces, and sweeping views of Biscayne Bay and the Miami skyline. The open layout provides a flexible floor plan with defined living and dining areas, a chef’s kitchen with premium appliances, and private balcony perfect for enjoying sunrises over the bay.

The primary suite includes an ensuite bath and ample closet space, while additional bedrooms and baths offer comfort and privacy for family or guests. Residents enjoy access to building amenities including a pool, fitness center, and 24-hour concierge services.

This residence combines sophisticated finishes with the vibrant lifestyle of South Beach living.`,
  imageCount: 0,
  status: 'available',
  propertyType: 'condo',
  yearBuilt: 2006,
  featured: false,
},
{
  id: '3460-ne-164th-st',
  slug: '3460-ne-164th-st-north-miami-beach',
  title: '3460 NE 164th St',
  address: '3460 NE 164th St, North Miami Beach, FL 33160',
  neighborhood: 'North Miami Beach',
  price: 14900000,
  priceFormatted: '$14,900,000',
  bedrooms: 6,
  bathrooms: 7,
  sqft: 7220,
  sqftFormatted: '7,220',
  shortDescription: 'North Miami Beach waterfront estate with deep-water dock and panoramic views.',
  description: `A rare waterfront estate in North Miami Beach offering deep-water access with dockage for large vessels and panoramic views of Biscayne Bay. This exceptional residence combines generous interior living spaces and thoughtful design, with multiple indoor and outdoor areas perfect for entertaining and everyday living.

The chef’s kitchen features high-end appliances and custom cabinetry, flowing seamlessly into light-filled living and dining spaces. Multiple ensuite bedroom suites include a luxurious primary with private views and direct access to outdoor terraces. Outdoor amenities include a waterfront pool, expansive terraces, lush landscaping, and direct dock access.

This offering delivers the ideal combination of privacy, water-oriented living, and proximity to Miami’s premier waterfront dining and cultural attractions.`,
  imageCount: 0,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 1999,
  lotSize: '0.40 acres',
  featured: false,
},
{
  id: '800-s-pointe-dr-502',
  slug: '800-s-pointe-dr-502-miami-beach',
  title: 'Unit 502 at 800 S Pointe Dr',
  address: '800 S Pointe Dr, Unit 502, Miami Beach, FL 33139',
  neighborhood: 'South of Fifth',
  price: 8450000,
  priceFormatted: '$8,450,000',
  bedrooms: 3,
  bathrooms: 3.5,
  sqft: 3103,
  sqftFormatted: '3,103',
  shortDescription: 'Luxurious South of Fifth residence with expansive flow-through views at the boutique Apogee.',
  description: `Located in the premier Apogee building at the South of Fifth neighborhood, this exceptional residence features expansive flow-through views of Biscayne Bay and the Atlantic Ocean. The private elevator foyer opens to a beautifully finished living area with slate stone flooring and 10-foot ceilings. The light cedarwood eat-in kitchen is equipped with premium Miele and Sub-Zero appliances and connects to expansive indoor and outdoor living spaces. 

The home offers 3 bedrooms, 3.5 bathrooms, and expansive terraces with a summer kitchen ideal for entertaining. Residents enjoy access to world-class amenities including 24-hour concierge, fitness facilities, spa, pool, and private beach access in one of Miami Beach’s most coveted locations. `,
  imageCount: 0,
  status: 'available',
  propertyType: 'condo',
  yearBuilt: 2008,
  featured: false,
},
{
  id: '2950-ne-164th-st',
  slug: '2950-ne-164th-st-north-miami-beach',
  title: '2950 NE 164th St',
  address: '2950 NE 164th St, North Miami Beach, FL 33160',
  neighborhood: 'Eastern Shores',
  price: 7700000,
  priceFormatted: '$7,700,000',
  bedrooms: 5,
  bathrooms: 5.5,
  sqft: 5796,
  sqftFormatted: '5,796',
  shortDescription: 'Modern waterfront estate in Eastern Shores with deep-water access and luxury finishes.',
  description: `This newly constructed waterfront estate in the heart of Eastern Shores delivers a modern tropical design with light natural wood accents and expansive water views. The residence offers 5 bedrooms, 5 full baths, and a powder room across approximately 5,796 square feet of interior space on an 8,800-square-foot lot with 80 feet of waterfrontage. :contentReference[oaicite:0]{index=0}

The open floor plan features Calacatta marble floors on the ground level, generous entertaining spaces, a wine cellar, and direct water views throughout. The primary suite is positioned upstairs overlooking the water. Outdoor amenities include a deck with heated pool and summer kitchen, ideal for relaxed living and entertaining. The property delivers in 2025, combining contemporary design with the best of Eastern Shores waterfront living. :contentReference[oaicite:1]{index=1}`,
  imageCount: 0,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 2025,
  lotSize: '0.20 acres',
  featured: false,
},
{
  id: '1000-biscayne-blvd-3201',
  slug: '1000-biscayne-blvd-3201-miami',
  title: 'Unit 3201 at 1000 Biscayne Blvd',
  address: '1000 Biscayne Blvd, Unit 3201, Miami, FL 33132',
  neighborhood: 'Downtown Miami',
  price: 7650000,
  priceFormatted: '$7,650,000',
  bedrooms: 4,
  bathrooms: 5.5,
  sqft: 4600,
  sqftFormatted: '4,600',
  shortDescription: 'High-floor corner residence at One Thousand Museum with panoramic bay and city views.',
  description: `This professionally curated, high-floor residence at the iconic One Thousand Museum offers sunrise to sunset water and city views. The south corner 4-bedroom, 5.5-bath home includes approximately 4,600 sq ft of interior living space along with 780 sq ft of terraces. An elegant foyer with oak millwork welcomes you into an open living and dining area illuminated by natural light. A gourmet kitchen features Italian Poliform cabinetry with onyx marble counters and Gaggenau/Sub-Zero appliances. The primary suite includes a custom Molteni closet and Carrara marble bath with rain shower and spa tub. Each guest suite has luxurious built-ins and ensuite baths. Building amenities include concierge, private beach access, fitness, spa, and more. :contentReference[oaicite:0]{index=0}`,
  imageCount: 0,
  status: 'available',
  propertyType: 'condo',
  yearBuilt: 2019,
  featured: false,
},
{
  id: '1000-biscayne-blvd-lph-4901',
  slug: '1000-biscayne-blvd-lph-4901-miami',
  title: 'Unit LPH-4901 at 1000 Biscayne Blvd',
  address: '1000 Biscayne Blvd, Unit LPH-4901, Miami, FL 33132',
  neighborhood: 'Downtown Miami',
  price: 27500000,
  priceFormatted: '$27,500,000',
  bedrooms: 5,
  bathrooms: 6.5,
  sqft: 8310,
  sqftFormatted: '8,310',
  shortDescription: 'Signature sky residence at One Thousand Museum with unrivaled bay, ocean, and city views.',
  description: `Located atop One Thousand Museum, this signature sky residence occupies a full floor with dramatic 360-degree views of Biscayne Bay, the Atlantic Ocean, and the Miami skyline. The residence features approximately 8,310 sq ft of interior living space with expansive floor-to-ceiling glass, an open layout ideal for both entertaining and everyday living, and bespoke finishes throughout.

The chef’s kitchen is equipped with premium Gaggenau and Sub-Zero appliances and custom cabinetry. The primary suite features panoramic water views, private sitting area, dual baths, and extensive closets. Additional ensuite bedroom suites offer privacy and comfort for family and guests.

Residents enjoy all the world-class amenities of One Thousand Museum including 24-hour concierge, private beach access, rooftop helipad views, wellness spa, swimming pools, and full-service staff. This residence represents one of the most distinguished addresses in Miami luxury real estate.`,
  imageCount: 0,
  status: 'available',
  propertyType: 'condo',
  yearBuilt: 2019,
  featured: true,
},
{
  id: '1-collins-ave-unit-607',
  slug: '1-collins-ave-unit-607-miami-beach',
  title: 'One Ocean Unit 607',
  address: '1 Collins Ave, Unit 607, Miami Beach, FL 33139',
  neighborhood: 'South of Fifth',
  price: 6750000,
  priceFormatted: '$6,750,000',
  bedrooms: 5,
  bathrooms: 5.5,
  sqft: 3329,
  sqftFormatted: '3,329',
  shortDescription: 'Oceanfront half-floor residence with wraparound terrace in One Ocean South of Fifth.',
  description: `Located in the highly sought-after One Ocean South of Fifth tower, this elegant corner half-floor residence features private elevator entry, expansive ocean and bay views, and generous terraces totaling approximately 600 sq ft. With 5 bedrooms and 5.5 bathrooms across approximately 3,329 sq ft of interior space, the home is finished with 10-foot ceilings, Porcelanosa marble floors, and floor-to-ceiling windows that flood the interior with natural light. 

The gourmet kitchen is equipped with Sub-Zero and Wolf appliances and custom cabinetry. Residents enjoy premium building amenities including private beach pavilion, infinity-edge pool and outdoor deck, fitness center, spa, valet, and 24-hour concierge service. Two-car garage parking is included.`,
  imageCount: 0,
  status: 'available',
  propertyType: 'condo',
  yearBuilt: 2016,
  featured: false,
},
{
  id: '549-ne-59th-st',
  slug: '549-ne-59th-st-miami',
  title: 'El Tesoro – 549 NE 59th St',
  address: '549 NE 59th St, Miami, FL 33137',
  neighborhood: 'Morningside / Bayshore',
  price: 6450000,
  priceFormatted: '$6,450,000',
  bedrooms: 6,
  bathrooms: 5.5,
  sqft: 4528,
  sqftFormatted: '4,528',
  shortDescription: 'Mission-style new construction estate in historic Morningside with custom finishes and outdoor living amenities.',
  description: `Welcome to “El Tesoro,” a new construction Mission-style estate located on one of Historic Morningside’s most coveted blocks. This guard-gated property features approximately 4,528 sq ft of living space with 6 bedrooms and 5.5 bathrooms on a 10,500 sq ft lot. The home is characterized by 15-foot barrel-vaulted ceilings, arched architectural details, custom oak millwork, intricate marblework, and European white oak floors. The primary suite includes two private terraces and a wet room. Outdoor amenities include a saltwater pool and spa, shellstone pool deck, summer kitchen, and lush landscaping for privacy. The property is offered turnkey and is outside the flood zone, minutes from Design District, Downtown, Brickell, and the beach. :contentReference[oaicite:0]{index=0}`,
  imageCount: 0,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 2025,
  lotSize: '10,500 sq ft',
  featured: false,
},
{
  id: '262-189th-ter',
  slug: '262-189th-ter-sunny-isles-beach',
  title: '262 189th Terrace',
  address: '262 189th Terrace, Sunny Isles Beach, FL 33160',
  neighborhood: 'Sunny Isles Beach',
  price: 7990000,
  priceFormatted: '$7,990,000',
  bedrooms: 6,
  bathrooms: 6.5,
  sqft: 5500,
  sqftFormatted: '5,500',
  shortDescription: 'Modern waterfront estate in Sunny Isles Beach with private dock and direct ocean access.',
  description: `This contemporary waterfront estate in Sunny Isles Beach offers direct deep-water access and panoramic views of the Intracoastal Waterway. Designed for upscale coastal living, the residence features an open floor plan with extensive glazing that maximizes natural light throughout. High-end finishes include premium hardwood floors, custom cabinetry, and designer fixtures.

The chef’s kitchen is equipped with premium appliances and connects seamlessly to formal and casual living areas. Multiple ensuite bedroom suites include a luxurious primary suite with private balcony and water views. Outdoor amenities include a private dock, pool, waterfront terraces, and lush tropical landscaping, ideal for entertaining or waterfront living. Proximity to world-class beaches, dining, and shopping adds to the appeal of this exceptional Sunny Isles Beach property.`,
  imageCount: 0,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 2022,
  lotSize: '0.35 acres',
  featured: false,
},
{
  id: '6371-n-bay-rd',
  slug: '6371-n-bay-rd-miami-beach',
  title: '6371 N Bay Road',
  address: '6371 N Bay Rd, Miami Beach, FL 33141',
  neighborhood: 'La Gorce / North Bay Road',
  price: 5450000,
  priceFormatted: '$5,450,000',
  bedrooms: 6,
  bathrooms: 7,
  sqft: 4998,
  sqftFormatted: '4,998',
  shortDescription: 'Prime North Bay Road property with approved plans for a new Caribbean Colonial-style residence.',
  description: `This rare North Bay Road offering presents a significant development opportunity with approved architectural plans and permits for a 4,998 sq ft French-Caribbean chic home on an oversized ~11,000 sq ft lot. Set on one of Miami Beach’s most prestigious thoroughfares, the property includes a pool and summer kitchen in a lush backyard, plus existing living spaces with a family room, den, and elevator access.

The planned design features a spacious primary suite with soaking tub, walk-in closet, and private balcony, while all bedrooms offer ensuite baths and private balconies. Renovate the original 1937 structure or build new with approved plans to save development time. Minutes from La Gorce Country Club and La Gorce Park, this property balances prestige, privacy, and potential on North Bay Road. :contentReference[oaicite:1]{index=1}`,
  imageCount: 0,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 1937,
  lotSize: '0.25 acres',
  featured: false,
},
{
  id: '4701-n-meridian-ave-304',
  slug: '4701-n-meridian-ave-304-miami-beach',
  title: 'Unit 304 at 4701 N Meridian Ave',
  address: '4701 N Meridian Ave, Unit 304, Miami Beach, FL 33140',
  neighborhood: 'Bayshore / North Bay Village',
  price: 1295000,
  priceFormatted: '$1,295,000',
  bedrooms: 2,
  bathrooms: 2,
  sqft: 1320,
  sqftFormatted: '1,320',
  shortDescription: 'Spacious 2-bedroom condo in Marina Palms with water views and marina access.',
  description: `Located in the desirable Marina Palms waterfront community, this 2-bedroom, 2-bath residence offers serene marina views and easy access to boating and waterfront lifestyle. The open layout features abundant natural light and a functional floor plan connecting living, dining, and kitchen spaces.

The primary suite includes an ensuite bathroom and generous closet space. Outdoor living is enhanced by a private balcony overlooking the marina. Residents enjoy access to community amenities including a waterfront pool, fitness center, social lounge, secure parking, and marina docks for resident boats. The location provides easy access to the Venetian Islands, Miami Beach, and Downtown Miami.`,
  imageCount: 0,
  status: 'available',
  propertyType: 'condo',
  yearBuilt: 2005,
  featured: false,
},
{
  id: '300-s-pointe-dr-1505',
  slug: '300-s-pointe-dr-1505-miami-beach',
  title: 'Unit 1505 at 300 S Pointe Dr',
  address: '300 S Pointe Dr, Unit 1505, Miami Beach, FL 33139',
  neighborhood: 'South of Fifth',
  price: 7750000,
  priceFormatted: '$7,750,000',
  bedrooms: 4,
  bathrooms: 4.5,
  sqft: 3480,
  sqftFormatted: '3,480',
  shortDescription: 'High-floor residence in South of Fifth with expansive bay, ocean, and skyline views.',
  description: `This stunning residence at 300 S Pointe Dr offers high-floor panoramic views of Biscayne Bay, the Atlantic Ocean, and the Miami skyline. The open floor plan features floor-to-ceiling glass and expansive terraces that bring the outdoors in. The chef’s kitchen includes premium appliances and custom cabinetry, flowing seamlessly into the living and dining areas.

The primary suite offers water views, a private sitting area, and a luxurious ensuite bathroom. Additional bedrooms provide comfort and privacy for family or guests. Building amenities include a 24-hour concierge, waterfront pool, fitness center, spa, and private beach access. This residence combines sophisticated design with premier South Beach living.`,
  imageCount: 0,
  status: 'available',
  propertyType: 'condo',
  yearBuilt: 2008,
  featured: false,
},
{
  id: '1002-ne-117th-st',
  slug: '1002-ne-117th-st-biscayne-park',
  title: '1002 NE 117th St',
  address: '1002 NE 117th St, Biscayne Park, FL 33161',
  neighborhood: 'Biscayne Park',
  price: 1795000,
  priceFormatted: '$1,795,000',
  bedrooms: 4,
  bathrooms: 3,
  sqft: 2784,
  sqftFormatted: '2,784',
  shortDescription: 'Spacious Biscayne Park home with modern updates and generous living space.',
  description: `This well-maintained Biscayne Park residence features 4 bedrooms and 3 bathrooms across approximately 2,784 sq ft of interior living space on a generous lot. The open layout creates defined areas for living, dining, and entertaining, while abundant natural light enhances the sense of space throughout. 

The kitchen is upgraded with stainless steel appliances and custom cabinetry. The primary suite includes an ensuite bath and ample closet space. Additional bedrooms are comfortable and flexible for family, guests, or office use. Outdoor space includes a patio and landscaped yard, ideal for gardening and al fresco living. Located in the sought-after Biscayne Park neighborhood, the home is close to parks, schools, and shopping.`,
  imageCount: 0,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 1998,
  featured: false,
},
{
  id: '11636-ne-7th-ave',
  slug: '11636-ne-7th-ave-biscayne-park',
  title: '11636 NE 7th Ave',
  address: '11636 NE 7th Ave, Biscayne Park, FL 33161',
  neighborhood: 'Biscayne Park',
  price: 2550000,
  priceFormatted: '$2,550,000',
  bedrooms: 4,
  bathrooms: 3,
  sqft: 3198,
  sqftFormatted: '3,198',
  shortDescription: 'Stylish Biscayne Park residence with modern updates and generous living spaces.',
  description: `This updated Biscayne Park home provides an exceptional blend of indoor and outdoor living. Featuring 4 bedrooms and 3 bathrooms across approximately 3,198 sq ft of interior space, the residence offers an open layout with abundant natural light and quality finishes throughout.

The chef’s kitchen includes premium appliances and a functional layout that connects seamlessly to living and dining areas. The primary suite features an ensuite bath and ample closet space. Outdoor spaces include a covered patio and a private backyard, ideal for alfresco entertaining and family activities. Located in the highly regarded Biscayne Park neighborhood, the home is close to parks, schools, and local amenities.`,
  imageCount: 0,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 2002,
  featured: false,
},
];

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find(listing => listing.slug === slug);
}

export function getFeaturedListings(): Listing[] {
  return listings.filter(listing => listing.featured);
}

export function getAllListings(): Listing[] {
  return listings;
}
