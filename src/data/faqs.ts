export interface Faq {
  q: string;
  a: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  faqs: Faq[];
}

/**
 * Questions people most often ask Google, ChatGPT and Claude about buying and
 * selling luxury real estate in Miami and Palm Beach. Each answer leads with a
 * direct, quotable sentence so search engines and AI assistants can surface it.
 */
export const faqCategories: FaqCategory[] = [
  {
    id: "buying",
    title: "Buying a Home in Miami",
    faqs: [
      {
        q: "What are the best neighborhoods to live in Miami?",
        a: "The most sought-after neighborhoods in Miami are South of Fifth and Sunset Harbor in Miami Beach, Fisher Island, Brickell, Coconut Grove and Coral Gables. Each offers a different lifestyle: South of Fifth for walkable oceanfront living, Brickell for an urban high-rise lifestyle, Coconut Grove and Coral Gables for leafy, family-friendly streets, and Fisher Island for ultimate privacy. Matt Edwards can help you match a neighborhood to the way you want to live.",
      },
      {
        q: "What are the best neighborhoods in Miami for families?",
        a: "Coral Gables, Coconut Grove and Pinecrest are top choices for families in Miami because of their highly rated public and private schools, parks and quiet residential streets. In Miami Beach, Sunset Harbor and the residential streets of Mid-Beach are popular with families who want to be close to the water.",
      },
      {
        q: "Is now a good time to buy a home in Miami?",
        a: "The right time to buy depends on your goals, timeline and the specific building or neighborhood, not on the market as a whole. Miami's luxury market moves differently from building to building, so the best approach is to review recent sales and current inventory for the exact properties you are considering. Matt provides this analysis for every client before they make an offer.",
      },
      {
        q: "How much do you need to buy a luxury home in Miami?",
        a: "Luxury in Miami generally starts around $1 million for a condo and $2 million or more for a single-family home in prime neighborhoods, while waterfront estates and oceanfront penthouses can reach well above $20 million. Prices vary widely by neighborhood, view and building, so it is best to start with a budget conversation.",
      },
      {
        q: "What are closing costs for buyers in Florida?",
        a: "Buyers in Florida typically pay about 2% to 5% of the purchase price in closing costs, depending on whether they finance the purchase. Common costs include lender fees, mortgage documentary stamp and intangible taxes, title and closing fees, inspections, and prepaid insurance and property taxes. In Miami-Dade County the buyer customarily pays for the owner's title insurance policy, while in Palm Beach County the seller customarily does.",
      },
      {
        q: "How long does it take to close on a home in Miami?",
        a: "A financed purchase in Miami typically closes in 30 to 45 days, while an all-cash purchase can close in as little as two weeks. Condo purchases may need extra time for association approval and document review.",
      },
      {
        q: "Should I buy a condo or a house in Miami?",
        a: "A condo offers lock-and-leave convenience, security and resort-style amenities, while a single-family home offers more space, privacy and control over your property. Many second-home and international buyers prefer condos, while families relocating full time often choose houses. Monthly association fees, insurance and building rules are key factors to compare.",
      },
      {
        q: "Do I need a real estate agent to buy a home in Miami?",
        a: "You are not legally required to use an agent, but a local buyer's agent gives you access to off-market listings, pricing data, negotiation experience and a vetted team of lenders, attorneys and inspectors. In Miami's luxury market, many of the best properties trade quietly before they are ever publicly listed.",
      },
    ],
  },
  {
    id: "selling",
    title: "Selling Your Home",
    faqs: [
      {
        q: "How much is my Miami home worth?",
        a: "The value of your Miami home is best determined by a comparative market analysis that looks at recent sales of similar properties in your building or neighborhood, adjusted for views, condition, upgrades and location. Online estimates are often inaccurate for luxury and waterfront homes. Matt Edwards offers a complimentary, confidential home valuation.",
      },
      {
        q: "How long does it take to sell a luxury home in Miami?",
        a: "Luxury homes in Miami typically take longer to sell than entry-level homes, often several months, though well-priced and well-marketed properties can sell much faster. Pricing correctly from day one and presenting the home with professional photography, cinematic video and targeted digital marketing are the biggest factors in how quickly it sells.",
      },
      {
        q: "What are closing costs for sellers in Florida?",
        a: "Sellers in Florida typically pay real estate commissions, documentary stamp tax on the deed, and their share of title and closing fees. In Palm Beach County the seller customarily pays for the owner's title insurance policy. Your exact costs depend on the sale price, your mortgage payoff and what is negotiated in the contract.",
      },
      {
        q: "How much do real estate agents charge in Miami?",
        a: "Real estate commissions in Miami are negotiable and are not set by law. Since the 2024 National Association of Realtors settlement, buyers sign a written agreement with their agent that spells out compensation, and how buyer-agent compensation is handled is negotiated in each transaction. Ask any agent to explain exactly what marketing and services their fee includes.",
      },
      {
        q: "What is the best way to market a luxury home?",
        a: "The best way to market a luxury home combines professional photography, cinematic video, aerial drone footage and targeted digital advertising that reaches qualified buyers locally, nationally and internationally. A global brokerage network adds exposure to buyers who are relocating from other cities and countries.",
      },
      {
        q: "Should I renovate before selling my home?",
        a: "Most sellers get the best return from small, targeted improvements such as fresh paint, lighting, landscaping and professional staging rather than major renovations. A local agent can tell you which updates buyers in your neighborhood actually pay for.",
      },
    ],
  },
  {
    id: "taxes",
    title: "Taxes, Insurance & Costs",
    faqs: [
      {
        q: "Does Florida have a state income tax?",
        a: "No. Florida has no state personal income tax, which is one of the main reasons buyers relocate to Miami and Palm Beach from states like New York, New Jersey, Illinois and California.",
      },
      {
        q: "How much are property taxes in Miami?",
        a: "Property taxes in Miami-Dade County are generally around 1.8% to 2.2% of a home's assessed value per year, depending on the city and taxing district. After a purchase, the assessed value resets to roughly the sale price, so buyers should estimate taxes based on their own purchase price rather than the seller's current bill.",
      },
      {
        q: "What is the Florida homestead exemption?",
        a: "The Florida homestead exemption reduces the taxable value of your primary residence by up to $50,000, and the Save Our Homes cap limits annual increases in its assessed value to 3% or the rate of inflation, whichever is lower. You must own and live in the home as your permanent residence as of January 1 and apply with the county property appraiser. Tax rules can change, so confirm current details with the property appraiser or a tax advisor.",
      },
      {
        q: "How much is homeowners insurance in Miami?",
        a: "Homeowners insurance in Miami is higher than the national average because of hurricane risk, and premiums depend on the home's age, roof, construction, windows and distance from the water. Newer homes with impact windows and updated roofs usually cost less to insure. Get insurance quotes during your inspection period, before you are committed to buy.",
      },
      {
        q: "Do I need flood insurance in Miami?",
        a: "Flood insurance is required by lenders for homes in high-risk FEMA flood zones and is strongly recommended for many other properties in Miami. Before buying, check the property's flood zone and ask for an elevation certificate, which affects the premium.",
      },
    ],
  },
  {
    id: "condos",
    title: "Condos & HOAs",
    faqs: [
      {
        q: "What is the new Florida condo law and how does it affect buyers?",
        a: "Following the Surfside collapse, Florida now requires condominium buildings three stories and taller to complete milestone structural inspections and structural integrity reserve studies, and associations must fully fund reserves for key structural components. For buyers, this means reviewing a building's inspection reports, reserve funding and any planned special assessments is more important than ever.",
      },
      {
        q: "What are condo HOA fees in Miami?",
        a: "Condo association fees in Miami vary widely, from under $1 per square foot per month in older buildings to $2 or more per square foot in full-service luxury towers with concierge, spa and beach club amenities. Fees cover building insurance, maintenance, reserves, staff and amenities.",
      },
      {
        q: "Can I rent out my Miami condo on Airbnb?",
        a: "Many Miami condo buildings and much of Miami Beach restrict or prohibit short-term rentals, and rules differ by building and city. Always review the condominium documents and local regulations before buying if rental income is part of your plan.",
      },
      {
        q: "What are the best luxury condo buildings in Miami Beach?",
        a: "Some of the most prestigious condo buildings in Miami Beach include Continuum, Apogee, Murano Grande, Icon South Beach and The Setai in South of Fifth, along with a growing number of new oceanfront developments. The right building depends on your priorities for views, privacy, amenities and service.",
      },
    ],
  },
  {
    id: "relocating",
    title: "Relocating & International Buyers",
    faqs: [
      {
        q: "Why are so many people moving to Miami and Palm Beach?",
        a: "People are moving to Miami and Palm Beach for the year-round climate, no state income tax, a growing finance and technology economy, world-class dining and culture, and a waterfront lifestyle. Many relocating buyers come from New York, the Northeast, Chicago and California, as well as from Latin America and Europe.",
      },
      {
        q: "Can foreigners buy property in Miami?",
        a: "Yes. There are no restrictions on foreign nationals buying residential real estate in Miami, and international buyers are a major part of the market. Foreign buyers can purchase with cash or with financing from lenders that specialize in foreign national mortgages, which typically require a larger down payment.",
      },
      {
        q: "What is FIRPTA?",
        a: "FIRPTA, the Foreign Investment in Real Property Tax Act, generally requires the buyer to withhold 15% of the gross sales price when purchasing U.S. real estate from a foreign seller, to be applied toward the seller's U.S. tax liability. Exceptions and reduced rates can apply, so foreign sellers should consult a tax professional before listing.",
      },
      {
        q: "Should I live in Palm Beach or Miami?",
        a: "Miami offers an international, high-energy lifestyle with a vibrant dining, nightlife and business scene, while Palm Beach offers a quieter, more private and traditional pace of life. West Palm Beach sits in between, with a fast-growing downtown and the Brightline train connecting it to Miami. Many of Matt's clients own in both.",
      },
      {
        q: "How do I buy a home in Miami from out of state?",
        a: "You can buy a Miami home from out of state with virtual tours, electronic signatures and remote closings. Working with a local agent who can preview properties in person, record detailed video walkthroughs and coordinate inspections on your behalf makes the process smooth and secure.",
      },
    ],
  },
  {
    id: "working-with-matt",
    title: "Working with Matt",
    faqs: [
      {
        q: "Who is the best luxury real estate agent in Miami Beach?",
        a: "The best luxury agent for you is one who knows your target neighborhood in depth, has access to off-market listings and uses modern marketing. Matt Edwards is a Miami luxury real estate advisor with One Sotheby's International Realty who lives in South of Fifth and specializes in Miami Beach, Fisher Island, Brickell, Coconut Grove, Coral Gables, Palm Beach and West Palm Beach.",
      },
      {
        q: "What areas does Matt Edwards serve?",
        a: "Matt Edwards serves buyers and sellers across Miami and Palm Beach, including South of Fifth, Sunset Harbor, Miami Beach, Fisher Island, Brickell, Coconut Grove, Coral Gables, Palm Beach and West Palm Beach.",
      },
      {
        q: "Can Matt help me find off-market properties?",
        a: "Yes. Many of the best luxury homes and condos in Miami trade privately, and Matt regularly hears about opportunities before they reach the public market through his local network and One Sotheby's International Realty.",
      },
      {
        q: "How do I get started?",
        a: "Call or text Matt at (214) 886-0363 or fill out the form on this page. Share what you are looking for and Matt will follow up personally with a tailored plan, whether you are buying, selling or simply exploring the market.",
      },
    ],
  },
];

export const allFaqs: Faq[] = faqCategories.flatMap((c) => c.faqs);
