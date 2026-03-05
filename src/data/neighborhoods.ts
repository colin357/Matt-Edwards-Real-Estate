export interface Neighborhood {
  name: string;
  slug: string;
  tagline: string;
  heroImage: string;
  description: string[];
  videoUrl?: string;
  videoIsShort?: boolean;
  whatToDo: {
    title: string;
    description: string;
  }[];
  mattsTake: string[];
}

export const neighborhoods: Neighborhood[] = [
  {
    name: "South of Fifth",
    slug: "south-of-fifth",
    tagline: "Miami Beach's Most Exclusive Enclave",
    heroImage: "https://plus.unsplash.com/premium_photo-1697730215093-baeae8060bfe?w=1920&q=80",
    description: [
      "South of Fifth, known as SoFi, is the crown jewel of Miami Beach. Located at the southernmost tip of the island, this intimate neighborhood is home to some of the most prestigious residences in all of South Florida. With the Atlantic Ocean on one side and Biscayne Bay on the other, SoFi offers a rare combination of urban sophistication and waterfront living.",
      "The neighborhood is defined by its world-class condominium towers, including Apogee, Continuum, and Murano Grande, which offer panoramic views and resort-style amenities. Tree-lined streets, art deco architecture, and a walkable layout give SoFi a village-like feel that sets it apart from the rest of Miami Beach.",
      "South Pointe Park, at the very tip of the island, is one of Miami's most beautiful green spaces, offering views of cruise ships, Fisher Island, and the downtown skyline. SoFi is where Miami's most discerning residents choose to call home."
    ],
    videoUrl: "https://www.youtube.com/embed/OZ_iOjluN6Y",
    videoIsShort: true,
    whatToDo: [
      {
        title: "South Pointe Park",
        description: "A stunning 17-acre waterfront park with walking paths, a playground, and unobstructed views of Government Cut, Fisher Island, and the downtown skyline."
      },
      {
        title: "Joe's Stone Crab",
        description: "A Miami institution since 1913, Joe's is the quintessential South Beach dining experience. Expect stone crabs, key lime pie, and a legendary wait."
      },
      {
        title: "Prime Italian",
        description: "Located in the Setai, this upscale Italian steakhouse by the Myles Restaurant Group is a favorite among locals and visitors alike."
      },
      {
        title: "South Pointe Pier",
        description: "Walk out to the end of the pier for some of the best views in all of Miami. A perfect spot for sunrise or watching the cruise ships pass."
      },
      {
        title: "First Street Beach",
        description: "A quieter, less crowded stretch of sand compared to the more touristy beaches further north. Locals love it for morning walks and weekend relaxation."
      },
      {
        title: "Pura Vida",
        description: "A beloved neighborhood café and restaurant serving health-conscious, vibrant dishes. A go-to spot for locals starting their morning or grabbing a post-workout bite."
      }
    ],
    mattsTake: [
      "South of Fifth is where I send clients who want the best of the best without the noise. It's Miami Beach for people who actually live here, not just visit. The neighborhood has a residential quality that you won't find anywhere else on the island.",
      "What I love about SoFi is the walkability, the wellness, and the community. The average age is 55, but everyone is entrepreneurial and there's a lot of energy. You can grab a coffee at Pura Vida, walk your dog through South Pointe Park, have dinner at Smith and Wollensky, and never get in your car. For a city built around driving, that's unique.",
      "From an investment perspective, SoFi has consistently outperformed the rest of Miami Beach. It's where I also choose to live. The limited inventory, prime location, and high barriers to entry mean that properties here hold their value exceptionally well. If you're looking for a trophy asset in Miami, this is where to start."
    ]
  },
  {
    name: "Sunset Harbor",
    slug: "sunset-harbor",
    tagline: "Miami Beach's Best-Kept Secret",
    heroImage: "https://images.unsplash.com/photo-1704236600122-56a1401023d3?w=1920&q=80",
    description: [
      "Sunset Harbour is a small but vibrant neighborhood tucked between the Intracoastal Waterway and Dade Boulevard on the west side of Miami Beach. Once an overlooked industrial area, it has transformed into one of the most desirable pockets on the island, known for its boutique fitness studios, chef-driven restaurants, and laid-back waterfront lifestyle.",
      "The neighborhood's appeal lies in its authenticity. Unlike the flashier parts of Miami Beach, Sunset Harbour attracts a community of health-conscious professionals, young families, and creatives who value quality of life over spectacle. The streets are walkable, the restaurants are locally owned, and the energy is distinctly neighborhood-oriented.",
      "Residential options range from renovated mid-century condos to newer luxury developments. Many units offer bay views and direct access to the neighborhood's dining and fitness scene, making Sunset Harbour one of Miami Beach's most livable addresses."
    ],
    whatToDo: [
      {
        title: "Onda by Michael Schwartz",
        description: "Award-winning chef Michael Schwartz brings coastal Italian cuisine to this waterfront restaurant with beautiful bay views."
      },
      {
        title: "SoulCycle & Barry's Bootcamp",
        description: "Sunset Harbour is Miami's unofficial fitness capital. Multiple boutique studios line the streets, making it easy to build a healthy routine."
      },
      {
        title: "Sunset Harbour Marina",
        description: "Rent a paddleboard, take a boat out, or simply enjoy watching the sunset over the Intracoastal from the marina's waterfront."
      },
      {
        title: "Icebox Cafe",
        description: "A neighborhood staple known for its brunch, baked goods, and relaxed atmosphere. A must-visit on weekend mornings."
      },
      {
        title: "Greenmonkey Yoga",
        description: "One of the most popular yoga studios in Miami, offering a variety of classes in a serene, open-air setting."
      }
    ],
    mattsTake: [
      "Sunset Harbour is the neighborhood I recommend to clients who want the Miami Beach zip code without the South Beach chaos. It's where the people who actually live and work on the island spend their time.",
      "The food scene here punches way above its weight. You've got everything from Onda to Lucali to casual poke bowls, all within a few blocks. And because it's not on the tourist radar, you can actually get a table.",
      "For buyers, Sunset Harbour represents strong value relative to the rest of Miami Beach. You get waterfront proximity, walkability, and a genuine neighborhood feel. I've seen tremendous appreciation here over the past five years, and I think there's still room to grow as the area continues to evolve."
    ]
  },
  {
    name: "Brickell",
    slug: "brickell",
    tagline: "Miami's Financial District Meets Urban Living",
    heroImage: "https://images.unsplash.com/photo-1704080864842-2577d94ebb1c?w=1920&q=80",
    description: [
      "Brickell is Miami's most dynamic urban neighborhood. Known as the financial district of South Florida, it has evolved far beyond its corporate roots into a vibrant residential community with world-class dining, nightlife, and retail. The skyline is defined by sleek glass towers that house some of the city's most sought-after condominiums.",
      "Brickell City Centre, a $1.05 billion mixed-use development, serves as the neighborhood's central hub, offering luxury shopping, restaurants, and a climate-controlled open-air design. The surrounding streets are lined with cafes, cocktail bars, and international restaurants that cater to the neighborhood's cosmopolitan population.",
      "The Brickell waterfront along Biscayne Bay provides a scenic backdrop for your morning walk, meals, or work. Many of the buildings are extremely amenity-driven — with pools, gyms, spas, coworking spaces, and restaurants all on-site — so you don't need to leave the building if you don't want to."
    ],
    whatToDo: [
      {
        title: "Brickell City Centre",
        description: "A sprawling mixed-use complex with high-end retail, dining, and a cinema."
      },
      {
        title: "Amazónico",
        description: "A stunning Amazonian-themed restaurant serving South American cuisine with theatrical flair. One of the hottest tables in Miami."
      },
      {
        title: "Casa Tua Cucina",
        description: "An elegant Italian restaurant inside Brickell City Centre known for its intimate atmosphere, housemade pastas, and exceptional wine list."
      },
      {
        title: "Brickell Key",
        description: "A small island connected by bridge, offering a quieter residential vibe with waterfront parks and stunning skyline views."
      },
      {
        title: "Equinox",
        description: "Brickell is home to two Equinox gyms, making it one of the best neighborhoods in Miami for fitness enthusiasts who want world-class facilities steps from home."
      },
      {
        title: "Sugar Rooftop",
        description: "A rooftop bar and garden atop the EAST Miami hotel with sweeping views of Brickell and Biscayne Bay. A perfect spot for sunset drinks."
      },
      {
        title: "Delilah",
        description: "A glamorous supper club bringing old-Hollywood dining and entertainment to Brickell, with live performances and a curated menu in a lavish setting."
      }
    ],
    mattsTake: [
      "Brickell is Miami's New York on the water. If you want to live in the center of everything and enjoy the high-rise condo lifestyle, this is the neighborhood. The energy here is unmatched and the new-development condos are the highlight of the area that continue to draw new buyers to Miami.",
      "I work with a lot of young professionals and retired buyers who are drawn to Brickell's lifestyle. The ability to walk to work, hit a world-class restaurant, and be home to enjoy the beautiful ocean views is genuinely compelling and hard to do outside of New York City. It's Manhattan-style living with Miami weather.",
      "From a market perspective, Brickell inventory moves fast, especially with the new-developments. The combination of strong demand and international buyer interest creates a strong investment opportunity."
    ]
  },
  {
    name: "Coconut Grove",
    slug: "coconut-grove",
    tagline: "Miami's Original Neighborhood",
    heroImage: "https://images.unsplash.com/photo-1595111571848-fdf33cfb6cff?w=1920&q=80",
    description: [
      "Coconut Grove is Miami's most historic neighborhood. The Grove has waterfront charm and a residential community feel, making it family friendly while still youthful.",
      "The neighborhood centers around CocoWalk, a recently reimagined area with boutique shopping, dining, and bars. Beyond the village center, Coconut Grove is defined by its tree-lined streets, historic estates, and proximity to Biscayne Bay.",
      "The Grove is also home to some of Miami's most important cultural institutions, including the Vizcaya Museum and Gardens and the Coconut Grove Arts Festival. For families, the neighborhood offers top-rated schools and a safe, walkable environment with a strong sense of community."
    ],
    videoUrl: "https://www.youtube.com/embed/MSi7N3Zs0To",
    videoIsShort: true,
    whatToDo: [
      {
        title: "Vizcaya Museum & Gardens",
        description: "A stunning Italian Renaissance-style villa and formal gardens on Biscayne Bay. One of Miami's most important historic landmarks and a popular venue for events."
      },
      {
        title: "CocoWalk",
        description: "The recently redeveloped heart of the Grove, featuring upscale dining, shopping, a luxury cinema, and a lively outdoor atmosphere."
      },
      {
        title: "Sailing & Watersports",
        description: "Coconut Grove is Miami's sailing capital. The Coral Reef Yacht Club and Coconut Grove Sailing Club offer access to Biscayne Bay for sailing, kayaking, and paddleboarding."
      },
      {
        title: "Regatta Grove",
        description: "A vibrant waterfront park and event space along Biscayne Bay, perfect for outdoor dining, live music, and weekend events with stunning water views."
      },
      {
        title: "Coconut Grove Farmers Market",
        description: "A beloved weekend tradition featuring local produce, artisan goods, and prepared foods in an open-air setting. A great way to experience the Grove's community spirit."
      },
      {
        title: "Anatomy",
        description: "One of Miami's premier boutique gyms, offering state-of-the-art equipment and classes in a beautifully designed space that has become a social hub for the Grove community."
      }
    ],
    mattsTake: [
      "Coconut Grove is the neighborhood I recommend to clients who want a strong, family-friendly place to live. When you walk through the Grove, you can feel the roots.",
      "The Grove is family friendly and there's a real community here. Neighbors know each other and the pace of life is slower. The Grove has a European feel which attracts a lot of buyers.",
      "The real estate in the Grove ranges from historic waterfront estates to modern new construction. Billionaires are flocking to the Grove to establish themselves. The area will only become more valuable over time and is a great place to raise a family."
    ]
  },
  {
    name: "Fisher Island",
    slug: "fisher-island",
    tagline: "America's Wealthiest Zip Code",
    heroImage: "https://images.unsplash.com/photo-1589083130544-0d6a2926e519?w=1920&q=80",
    description: [
      "Fisher Island is a 216-acre private island located just south of Miami Beach, accessible only by ferry. With a population of fewer than 1000 residents, it is one of the most exclusive residential communities in the world, consistently ranked among America's wealthiest zip codes. Most residents use Fisher Island as their second or third home, drawn by the unmatched privacy it offers.",
      "The island features a private beach club, a world-class golf course, a deep-water marina, multiple restaurants, a spa, and tennis courts. Every amenity is designed for residents only, creating an environment of privacy and exclusivity.",
      "Residences on Fisher Island range from elegant condominiums to grand single-family estates, many with direct ocean or bay views. The island is also home to one of the top-rated private schools in South Florida, making it a surprisingly wonderful choice for families looking for a secure, world-class environment to raise children."
    ],
    videoUrl: "https://www.youtube.com/embed/vbNVlaWzjks",
    whatToDo: [
      {
        title: "Fisher Island Beach Club",
        description: "A pristine private beach with imported Bahamian sand, full-service cabanas, and a beachfront restaurant. One of the most exclusive beach experiences in the country."
      },
      {
        title: "The Links at Fisher Island",
        description: "A 9-hole championship golf course designed by P.B. Dye, offering stunning water views and a challenging layout for golfers of all levels."
      },
      {
        title: "Fisher Island Marina",
        description: "A deep-water marina accommodating vessels up to 200 feet. Perfect for day trips to the Keys, Bahamas, or simply cruising Biscayne Bay."
      },
      {
        title: "The Spa Internazionale",
        description: "A full-service luxury spa offering treatments, fitness classes, and wellness programs in a serene island setting."
      },
      {
        title: "Private Dining",
        description: "Multiple on-island restaurants serve everything from casual poolside fare to formal fine dining, all exclusively for residents and their guests."
      }
    ],
    mattsTake: [
      "Fisher Island is in a category of its own. There's nowhere else in Miami, or frankly in the country, that offers this level of privacy, security, and exclusivity. When I bring clients over on the ferry for the first time, the reaction is always the same: they can't believe this exists just minutes from South Beach.",
      "The community on Fisher Island is genuinely special. Because it's so small and private, residents actually know each other. There's a neighborly quality that you wouldn't expect in a place of this caliber. It's a real community, just an extraordinarily exclusive one."
    ]
  },
  {
    name: "Coral Gables",
    slug: "coral-gables",
    tagline: "The City Beautiful",
    heroImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80",
    description: [
      "Coral Gables is one of South Florida's most distinguished communities. It remains one of the most desired residential addresses in Miami due to its all-encompassing neighborhood feel. It's family friendly with nearby parks, recreation, walkable streets, and shops along with the restaurants on Miracle Mile and the historic Biltmore Hotel for golf, tennis, and events.",
      "The neighborhood is anchored by the iconic Biltmore Hotel, a National Historic Landmark. Miracle Mile is the city's main commercial corridor, featuring boutique shopping, fine dining, and art galleries that reflect the community's cultivated character.",
      "Residential offerings in Coral Gables range from historic Mediterranean estates on sprawling lots to modern new construction condos. The area is home to the University of Miami and boasts some of the best public and private schools in the state, making it a top choice for families seeking both prestige and quality of life."
    ],
    videoUrl: "https://www.youtube.com/embed/lMwvevFSfxk",
    videoIsShort: true,
    whatToDo: [
      {
        title: "Biltmore Hotel",
        description: "A landmark 1926 hotel featuring a world-class golf course, spa, and stunning architecture. The Sunday brunch is a Coral Gables institution."
      },
      {
        title: "Shops at Merrick Park",
        description: "An upscale open-air mall featuring luxury retailers, fine dining, and boutique shops in a beautiful Mediterranean-inspired setting."
      },
      {
        title: "Miracle Mile",
        description: "Coral Gables' charming main street lined with boutique shops, acclaimed restaurants, and wine bars. A walkable destination that defines the neighborhood's character."
      },
      {
        title: "Fairchild Tropical Botanic Garden",
        description: "An 83-acre tropical garden showcasing rare plants, butterfly exhibits, and world-class horticultural collections along Biscayne Bay."
      },
      {
        title: "Equinox",
        description: "A world-class Equinox gym conveniently located in Coral Gables, offering premium fitness facilities and classes for residents who prioritize wellness."
      },
      {
        title: "Riviera Country Club",
        description: "One of the most prestigious private clubs in South Florida, offering golf, tennis, dining, and social events in an elegant setting."
      }
    ],
    mattsTake: [
      "Coral Gables is where I send clients who want a sense of permanence and prestige. The architecture, the tree canopy, the wide boulevards — everything here was designed with intention.",
      "For families, Coral Gables is exceptional. The schools are among the best in Miami-Dade County, the streets are safe and beautifully maintained, and there's a genuine sense of community. It's the kind of place where kids grow up riding bikes followed by a dinner on Miracle Mile.",
      "From a real estate standpoint, Coral Gables has incredible staying power. The strict zoning, architectural standards, and limited inventory mean that values here are remarkably stable. Historic estates on large lots are increasingly rare, and new construction in prime locations commands top dollar. If you're looking for a legacy property in Miami, Coral Gables should be on your list."
    ]
  }
];

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}

export function getAllNeighborhoodSlugs(): string[] {
  return neighborhoods.map((n) => n.slug);
}
