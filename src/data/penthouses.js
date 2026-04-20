export const NAV = [
  { label: 'About', href: '/#about' },
  { label: 'Penthouses', href: '/#penthouses' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Location', href: '/#location' },
  { label: 'Sale & rent', href: '/#sale-rent' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

/** @typedef {'sale' | 'rent' | 'both'} ListingType */

export const PENTHOUSES = [
  {
    slug: 'serenity',
    name: 'Serenity',
    listing: 'sale',
    salePrice: 'MUR 48,000,000',
    rentPrice: null,
    beds: 3,
    baths: 4,
    builtUp: '3,450 sq.ft',
    terrace: '880 sq.ft terrace',
    tag: 'Ideal for young families',
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80',
    highlights: ['Maid’s room', 'Study', '2 parking', 'Skyline terrace'],
    summary:
      'A bright three-bedroom simplex penthouse with an open kitchen and dining flow, a quiet study, and a deep terrace for city-skyline views.',
    longDescription: [
      'Serenity is designed for buyers who want top-floor privacy and light without maintaining a large multi-storey home. Living and dining sit in one generous volume with full-height glazing opening to the terrace.',
      'The master suite is set apart from secondary bedrooms for peace and quiet. Service zones—maid’s room, laundry, and storage—are grouped to keep the main living areas uncluttered.',
    ],
    spaces: [
      'Living: foyer, formal lounge, open kitchen & dining, powder room',
      'Sleeping: master suite with walk-in, two bedrooms, shared bath, study',
      'Outdoor: wraparound terrace with pergola option, two covered parking spaces',
    ],
    orientation: 'Skyline and community-pool views vary by stack; corner units offer dual-aspect light.',
    floorPlanNote:
      'Typical simplex layout; exact dimensions vary by level. Latest CAD and balcony schedules are shared after qualification.',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    ],
    included: [
      'Smart home pre-wiring and video door entry',
      'Built-in wardrobes in all bedrooms (per unit schedule)',
      'Terrace tiling and drainage as per specification',
      'Utility & common-area provisions per tower schedule',
    ],
  },
  {
    slug: 'horizon',
    name: 'Horizon',
    listing: 'rent',
    salePrice: null,
    rentPrice: 'MUR 385,000 / month',
    beds: 4,
    baths: 5,
    builtUp: '4,200 sq.ft',
    terrace: '1,100 sq.ft terraces',
    tag: 'Most popular',
    featured: true,
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
    highlights: ['Duplex', 'Formal dining', 'Private pool deck', 'Smart home pack'],
    summary:
      'A duplex four-bedroom penthouse with formal reception, show kitchen, and a private pool deck—available furnished or unfurnished on an annual lease.',
    longDescription: [
      'Horizon suits tenants who need space for family and entertaining without committing to purchase. Lower level holds guest-facing rooms; upper level keeps bedrooms and a family lounge private.',
      'The rear terrace is sized for a plunge pool and outdoor dining, with services concealed in dedicated utility zones.',
    ],
    spaces: [
      'Lower: double-height foyer, formal majlis, family living, show kitchen, dining, guest powder, maid’s room',
      'Upper: master suite, three bedrooms (two ensuite), family lounge, terrace access',
      'Outdoor: pool deck, pergola-ready zones, two covered parking spaces',
    ],
    orientation: 'Pool-deck and skyline orientation depends on stack; corner units available subject to availability.',
    floorPlanNote:
      'Lease terms: typically 12-month renewable; security deposit and lease registration per local requirements. Furniture packages optional.',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1200&q=80',
    ],
    included: [
      'Extended smart home pack: scenes, IP intercom, CCTV pre-wire',
      'Premium kitchen appliances (brand per lease schedule)',
      'Pool equipment room with landlord-maintained shell where applicable',
      'Chiller allocation per tower BMS',
    ],
  },
  {
    slug: 'grandeur',
    name: 'Grandeur',
    listing: 'both',
    salePrice: 'MUR 78,000,000',
    rentPrice: 'from MUR 595,000 / month',
    beds: 5,
    baths: 6,
    builtUp: '5,100 sq.ft',
    terrace: '1,450 sq.ft terraces',
    tag: 'Estate in the sky',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    highlights: ['Cinema lounge', 'Chef’s kitchen', 'Guest suite', 'Triple parking'],
    summary:
      'Our flagship five-bedroom penthouse—gallery-style circulation, optional cinema lounge, and expansive terraces for entertaining at scale.',
    longDescription: [
      'Grandeur is offered for premium sale or select long-term lease. The plan wraps formal and family zones around a central gallery with views through to the main terrace.',
      'A ground-floor-style guest suite and staff accommodation keep extended visits comfortable while upper levels preserve privacy for the family wing.',
    ],
    spaces: [
      'Main: gallery foyer, formal & informal living, chef’s kitchen with island, dining, guest suite, staff suite',
      'Upper: master wing, four further bedrooms (select ensuite), bridge lounge',
      'Outdoor: triple parking, wide terraces, optional outdoor kitchen / bar upgrade',
    ],
    orientation: 'Limited release per floor; panoramic corner inventory moves quickly.',
    floorPlanNote:
      'Buyers may select upgrade packages pre-handover; lease inventory may include bespoke landlord fit-out on longer terms.',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    ],
    included: [
      'Façade and lobby-standard entry upgrade path',
      'Triple parking with EV rough-in',
      'Master suite spa-bath and dressing options',
      'Larger terrace envelope with extended glazing package',
    ],
  },
];

export const AMENITIES = [
  { title: 'Sky lounge & residents’ salon', desc: 'Private dining and meeting rooms with views—ideal for hosting without leaving the tower.' },
  { title: 'Wellness & fitness', desc: 'Temperature-controlled pool, spa, sauna, and a fully equipped gym exclusive to residents.' },
  { title: 'Outdoor lifestyle', desc: 'Podium gardens, jogging track, and children’s play with shaded seating.' },
  { title: 'Work & convenience', desc: 'Co-working pods, business lounge, concierge, and parcel room.' },
  { title: 'Security & privacy', desc: 'Controlled lobby access, CCTV, and smart lift-to-floor pairing where enabled.' },
  { title: 'Sustainability', desc: 'Efficient glazing, LED lighting, and central cooling optimization across common areas.' },
];

export const FAQ_ITEMS = [
  {
    q: 'What is included in a penthouse handover (sale)?',
    a: 'Finishes as per the specification schedule, smart home pre-wiring, terrace drainage and tiling as defined, and utility connections per the sale agreement. Pool or spa features depend on the upgrade package selected.',
  },
  {
    q: 'Are penthouses available for rent?',
    a: 'Yes. Select units are offered on annual lease. Ask for current availability, furnished options, and how service charges are treated under the lease.',
  },
  {
    q: 'Are there payment plans for buyers?',
    a: 'We offer staged plans linked to construction milestones where applicable, plus mortgage introductions through partner banks for qualified buyers.',
  },
  {
    q: 'Can I customize interiors before handover?',
    a: 'During the pre-handover window, buyers may choose curated upgrade packages for kitchens, flooring, and automation. Structural changes are limited after design freeze.',
  },
  {
    q: 'What are the estimated service charges?',
    a: 'Indicative charges are in the disclosure pack and vary by tower and unit size. Final figures are confirmed before SPA or lease signing.',
  },
];

export function getPenthouseBySlug(slug) {
  return PENTHOUSES.find((p) => p.slug === slug);
}

/** Labels for UI badges */
export function listingBadgeCopy(listing) {
  if (listing === 'sale') return [{ key: 'sale', label: 'For sale' }];
  if (listing === 'rent') return [{ key: 'rent', label: 'For rent' }];
  return [
    { key: 'sale', label: 'For sale' },
    { key: 'rent', label: 'For rent' },
  ];
}
