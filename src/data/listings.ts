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
  features: string[];
  images: string[];
  videoUrl?: string;
  status: 'available' | 'pending' | 'sold';
  propertyType: 'single-family' | 'condo' | 'penthouse' | 'waterfront' | 'estate';
  yearBuilt?: number;
  lotSize?: string;
  featured: boolean;
}

// Sample listings - replace with real data or CMS integration
export const listings: Listing[] = [
  {
    id: '1',
    slug: 'oceanfront-estate-key-biscayne',
    title: 'Oceanfront Estate',
    address: '100 Ocean Lane',
    neighborhood: 'Key Biscayne',
    price: 24500000,
    priceFormatted: '$24,500,000',
    bedrooms: 7,
    bathrooms: 9,
    sqft: 12500,
    sqftFormatted: '12,500',
    shortDescription: 'A masterpiece of modern architecture with panoramic ocean views and private beach access.',
    description: `This extraordinary oceanfront estate represents the pinnacle of luxury living in Key Biscayne. Spanning over 12,500 square feet of meticulously designed living space, this residence offers an unparalleled lifestyle where indoor and outdoor spaces seamlessly merge.

The home features floor-to-ceiling windows that capture breathtaking panoramic views of the Atlantic Ocean, a private beach with direct access, and a resort-style infinity pool that appears to flow directly into the sea.

Every detail has been thoughtfully considered, from the imported Italian marble flooring to the custom millwork and smart home automation throughout. The gourmet kitchen is equipped with top-of-the-line Gaggenau appliances, while the primary suite offers a spa-like bathroom with ocean views and a private terrace.

Additional features include a home theater, wine cellar, gym, staff quarters, and a 4-car garage. The lush tropical landscaping provides privacy while maintaining the spectacular views that make this property truly exceptional.`,
    features: [
      'Private beach access',
      'Infinity pool overlooking ocean',
      'Smart home automation',
      'Home theater',
      'Wine cellar',
      'Gym & spa',
      '4-car garage',
      'Staff quarters',
      'Hurricane-impact windows',
      'Generator backup'
    ],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
    ],
    status: 'available',
    propertyType: 'waterfront',
    yearBuilt: 2022,
    lotSize: '1.2 acres',
    featured: true,
  },
  {
    id: '2',
    slug: 'penthouse-brickell-skyline',
    title: 'Brickell Skyline Penthouse',
    address: '1000 Brickell Avenue, PH1',
    neighborhood: 'Brickell',
    price: 8900000,
    priceFormatted: '$8,900,000',
    bedrooms: 4,
    bathrooms: 5,
    sqft: 5200,
    sqftFormatted: '5,200',
    shortDescription: 'Stunning full-floor penthouse with 360-degree views of Miami skyline and Biscayne Bay.',
    description: `Perched atop one of Brickell's most prestigious towers, this full-floor penthouse offers an extraordinary living experience with 360-degree views encompassing the Miami skyline, Biscayne Bay, and the Atlantic Ocean.

The residence features a grand open floor plan with 12-foot ceilings, creating an atmosphere of light and space. The living areas flow seamlessly to multiple terraces, perfect for entertaining or enjoying Miami's spectacular sunsets.

The custom Italian kitchen features Miele appliances, marble countertops, and a butler's pantry. The primary suite is a private retreat with a sitting area, dual walk-in closets, and a spa bathroom with soaking tub overlooking the bay.

Building amenities include a rooftop pool, full-service spa, state-of-the-art fitness center, residents' lounge, and 24-hour concierge service.`,
    features: [
      '360-degree views',
      'Full-floor residence',
      'Private elevator',
      'Multiple terraces',
      'Custom Italian kitchen',
      'Primary suite with bay views',
      'Building spa & fitness center',
      '24-hour concierge',
      'Valet parking',
      '2 dedicated parking spaces'
    ],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
    ],
    status: 'available',
    propertyType: 'penthouse',
    yearBuilt: 2019,
    featured: true,
  },
  {
    id: '3',
    slug: 'coral-gables-mediterranean-estate',
    title: 'Mediterranean Revival Estate',
    address: '4500 Granada Boulevard',
    neighborhood: 'Coral Gables',
    price: 15750000,
    priceFormatted: '$15,750,000',
    bedrooms: 6,
    bathrooms: 8,
    sqft: 9800,
    sqftFormatted: '9,800',
    shortDescription: 'Exquisite Mediterranean estate on a lush acre with historic charm and modern amenities.',
    description: `This magnificent Mediterranean Revival estate represents the finest of Coral Gables living. Set on a lush, manicured acre, the home masterfully blends historic architectural details with contemporary luxury and technology.

Original features including hand-painted ceiling murals, intricate ironwork, and coral stone fireplaces have been meticulously preserved, while the home has been completely updated with modern systems and amenities.

The grounds feature mature tropical landscaping, a resort-style pool with cabana, outdoor kitchen, and tennis court. The property offers exceptional privacy while being moments from the shops and restaurants of Miracle Mile.

A true entertainer's dream, the home includes a formal living room, dining room, library, family room, and a spectacular great room that opens to the pool terrace.`,
    features: [
      'Historic Mediterranean architecture',
      '1-acre gated lot',
      'Pool with cabana',
      'Tennis court',
      'Outdoor kitchen',
      'Library & study',
      'Wine cellar',
      'Guest house',
      'Mature tropical landscaping',
      '3-car garage'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200',
    ],
    status: 'available',
    propertyType: 'estate',
    yearBuilt: 1928,
    lotSize: '1 acre',
    featured: true,
  },
  {
    id: '4',
    slug: 'miami-beach-art-deco-villa',
    title: 'Art Deco Villa',
    address: '2400 Pine Tree Drive',
    neighborhood: 'Miami Beach',
    price: 11200000,
    priceFormatted: '$11,200,000',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 6800,
    sqftFormatted: '6,800',
    shortDescription: 'Restored Art Deco gem with waterfront views and private dock in prestigious Miami Beach.',
    description: `A rare opportunity to own a piece of Miami Beach history. This stunning Art Deco villa has been impeccably restored and updated to offer the best of both worlds: timeless architectural beauty and modern luxury living.

Located on prestigious Pine Tree Drive, the home offers waterfront views with a private dock capable of accommodating a 60-foot yacht. The interior showcases original Art Deco details including terrazzo floors, curved walls, and porthole windows, all beautifully complemented by contemporary finishes.

The open floor plan is ideal for entertaining, with the living spaces flowing to an expansive pool deck overlooking the water. The chef's kitchen features custom cabinetry and professional-grade appliances.

The primary suite occupies the entire second floor, offering water views, a sitting area, and a luxurious bathroom. Four additional bedroom suites provide comfort for family and guests.`,
    features: [
      'Restored Art Deco architecture',
      'Waterfront with private dock',
      'Pool overlooking water',
      'Original terrazzo floors',
      'Chef\'s kitchen',
      'Primary suite floor',
      'Impact windows throughout',
      'New roof & systems',
      'Lush landscaping',
      '2-car garage'
    ],
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200',
    ],
    status: 'available',
    propertyType: 'waterfront',
    yearBuilt: 1935,
    lotSize: '15,000 sq ft',
    featured: false,
  },
  {
    id: '5',
    slug: 'coconut-grove-modern-retreat',
    title: 'Modern Grove Retreat',
    address: '3200 Devon Road',
    neighborhood: 'Coconut Grove',
    price: 7450000,
    priceFormatted: '$7,450,000',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 5500,
    sqftFormatted: '5,500',
    shortDescription: 'Architectural masterpiece featuring clean lines, natural materials, and seamless indoor-outdoor living.',
    description: `This contemporary architectural masterpiece in Coconut Grove represents the perfect fusion of modern design and tropical living. Designed by a renowned Miami architect, the home features clean lines, soaring ceilings, and walls of glass that blur the boundaries between inside and out.

Natural materials including ipe wood, coral stone, and floor-to-ceiling windows create a warm, sophisticated atmosphere. The open floor plan centers on a spectacular great room with 20-foot ceilings and sliding glass walls that open completely to the outdoor living areas.

The grounds feature a heated infinity pool, summer kitchen, and lush tropical gardens designed for privacy. A separate guest suite with its own entrance provides flexibility for extended family or visitors.

Located in the heart of Coconut Grove, the home is walking distance to boutiques, galleries, cafes, and the waterfront parks that define this beloved neighborhood.`,
    features: [
      'Contemporary architecture',
      '20-foot ceilings',
      'Walls of glass',
      'Infinity pool',
      'Summer kitchen',
      'Private guest suite',
      'Smart home technology',
      'Tropical gardens',
      'Walking distance to village',
      'Gated entry'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
    ],
    status: 'available',
    propertyType: 'single-family',
    yearBuilt: 2021,
    lotSize: '18,000 sq ft',
    featured: false,
  },
  {
    id: '6',
    slug: 'fisher-island-waterfront-condo',
    title: 'Fisher Island Waterfront',
    address: '7000 Fisher Island Drive, #7042',
    neighborhood: 'Fisher Island',
    price: 19500000,
    priceFormatted: '$19,500,000',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 7200,
    sqftFormatted: '7,200',
    shortDescription: 'Ultra-exclusive Fisher Island residence with direct ocean views and world-class amenities.',
    description: `Experience the ultimate in exclusive island living with this extraordinary residence on Fisher Island, accessible only by ferry or private yacht. This exceptional home offers sweeping views of the Atlantic Ocean, Government Cut, and the Miami skyline.

Recently renovated to the highest standards, the residence features an open floor plan with seamless flow between living spaces. Floor-to-ceiling windows maximize the spectacular views from every room. The gourmet kitchen is equipped with Gaggenau appliances and features a large center island perfect for casual dining.

The expansive primary suite includes a sitting area, dual walk-in closets, and a spa-like bathroom with ocean views. Four additional bedroom suites offer comfort and privacy for family and guests.

Fisher Island offers unparalleled amenities including a private beach club, world-class golf course, deep-water marina, tennis center, spa, and multiple dining venues.`,
    features: [
      'Fisher Island exclusivity',
      'Direct ocean views',
      'Recently renovated',
      'Gaggenau appliances',
      'Private beach club access',
      'Golf & tennis',
      'Deep-water marina',
      'Full-service spa',
      '24-hour security',
      'Multiple parking spaces'
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
    ],
    status: 'available',
    propertyType: 'condo',
    yearBuilt: 2015,
    featured: true,
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
