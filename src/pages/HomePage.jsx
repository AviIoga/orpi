import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../useAOS';
import { Icon } from '../components/Icon';
import { PENTHOUSES, AMENITIES, FAQ_ITEMS, listingBadgeCopy } from '../data/penthouses';

export default function HomePage() {
  useAOS();
  const [faqOpen, setFaqOpen] = useState(0);

  return (
    <main className="text-slate-800">
        {/* Hero */}
        <section
          id="home"
          className="relative min-h-[88vh] overflow-hidden"
          data-aos="fade-in"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/55 to-slate-900/30" />
          <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24">
            <p
              className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-200 backdrop-blur-sm"
              data-aos="fade-up"
            >
              Skyline penthouses · Sale & rent
            </p>
            <h1
              className="max-w-3xl font-[family-name:Instrument_Serif] text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              Penthouses designed for views, light, and elevated living.
            </h1>
            <p
              className="mt-5 max-w-2xl text-lg text-stone-200 sm:text-xl"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              Duplex and simplex layouts, generous terraces, and full-building amenities—choose ownership or a premium lease.
            </p>
            <div
              className="mt-8 flex flex-wrap items-center gap-3"
              data-aos="fade-up"
              data-aos-delay="160"
            >
              <a
                href="#penthouses"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-amber-400"
              >
                View penthouses
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Schedule a private tour
              </a>
            </div>
            <dl
              className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-stone-400">Homes</dt>
                <dd className="mt-1 font-[family-name:Instrument_Serif] text-2xl text-white">3–5 BR</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-stone-400">Built-up</dt>
                <dd className="mt-1 font-[family-name:Instrument_Serif] text-2xl text-white">3.4k–5.1k sq.ft</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-stone-400">Handover</dt>
                <dd className="mt-1 font-[family-name:Instrument_Serif] text-2xl text-white">Q4 2027*</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-stone-400">Tower</dt>
                <dd className="mt-1 font-[family-name:Instrument_Serif] text-2xl text-white">Boutique</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-stone-400">*Indicative timeline; refer to your sales agreement.</p>
          </div>
        </section>

        {/* Intro */}
        <section id="about" className="border-b border-stone-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div data-aos="fade-right">
                <h2 className="font-[family-name:Instrument_Serif] text-3xl tracking-tight text-slate-900 sm:text-4xl">
                  A complete lifestyle—not just a new address.
                </h2>
                <p className="mt-4 text-slate-600">
                  Orpi Development brings together skyline architecture, generous terraces, and everyday convenience. Each penthouse is positioned for natural light and privacy, with clear separation between living, sleeping, and service zones.
                </p>
                <p className="mt-3 text-slate-600">
                  The master plan prioritizes walkability, shaded outdoor routes, and views toward landscaped corridors—so the community feels calm even at full occupancy.
                </p>
                <ul className="mt-8 space-y-3 text-slate-700">
                  {[
                    'Developer-led quality control and staged snagging',
                    'Dedicated community management and resident app',
                    'Transparent specifications and upgrade options',
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <Icon className="mt-0.5 w-5 h-5 text-emerald-600">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </Icon>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative" data-aos="fade-left">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                    alt="Open-plan living with terrace views"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-2 max-w-xs rounded-xl border border-stone-200 bg-white p-4 shadow-lg sm:-right-6">
                  <p className="text-sm font-semibold text-slate-900">Designed for GCC families</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Formal reception options, service quarters, and generous storage across all penthouse types.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Penthouses */}
        <section id="penthouses" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl" data-aos="fade-up">
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">Inventory</p>
              <h2 className="mt-2 font-[family-name:Instrument_Serif] text-3xl text-slate-900 sm:text-4xl">
                Choose the penthouse that fits your lifestyle.
              </h2>
              <p className="mt-3 text-slate-600">
                Each residence is offered for sale, for rent, or both—depending on unit release. Pricing is indicative and subject to floor level, exposure, and availability.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {PENTHOUSES.map((v, i) => (
                <article
                  key={v.name}
                  className={`flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md ${
                    v.featured ? 'border-amber-400/80 ring-2 ring-amber-400/30' : 'border-stone-200'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div className="relative aspect-[16/11]">
                    <img src={v.img} alt="" className="h-full w-full object-cover" />
                    <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                      {listingBadgeCopy(v.listing).map((b) => (
                        <span
                          key={b.key}
                          className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                            b.key === 'sale'
                              ? 'bg-emerald-500 text-emerald-950'
                              : 'bg-sky-500 text-sky-950'
                          }`}
                        >
                          {b.label}
                        </span>
                      ))}
                      {v.featured && (
                        <span className="rounded-full bg-amber-500 px-2.5 py-0.5 text-xs font-bold text-slate-900">
                          {v.tag}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-[family-name:Instrument_Serif] text-2xl text-slate-900">{v.name}</h3>
                    {!v.featured && (
                      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{v.tag}</p>
                    )}
                    <div className="mt-3 space-y-1 text-sm">
                      {v.salePrice && (
                        <p>
                          <span className="text-slate-500">Sale </span>
                          <span className="font-semibold text-slate-900">{v.salePrice}</span>
                        </p>
                      )}
                      {v.rentPrice && (
                        <p>
                          <span className="text-slate-500">Rent </span>
                          <span className="font-semibold text-slate-900">{v.rentPrice}</span>
                        </p>
                      )}
                    </div>
                    <dl className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-600">
                      <div>
                        <dt className="text-slate-400">Bedrooms</dt>
                        <dd className="font-medium text-slate-900">{v.beds}</dd>
                      </div>
                      <div>
                        <dt className="text-slate-400">Bathrooms</dt>
                        <dd className="font-medium text-slate-900">{v.baths}+</dd>
                      </div>
                      <div>
                        <dt className="text-slate-400">Built-up</dt>
                        <dd className="font-medium text-slate-900">{v.builtUp}</dd>
                      </div>
                      <div>
                        <dt className="text-slate-400">Terrace</dt>
                        <dd className="font-medium text-slate-900">{v.terrace}</dd>
                      </div>
                    </dl>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {v.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-3">
                      <Link
                        to={`/penthouses/${v.slug}`}
                        className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        View details
                      </Link>
                      <a
                        href="#contact"
                        className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-stone-50"
                      >
                        Enquire
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Specs + finishes */}
        <section className="border-y border-stone-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              className="font-[family-name:Instrument_Serif] text-3xl text-slate-900 sm:text-4xl"
              data-aos="fade-up"
            >
              Specifications & finishes
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600" data-aos="fade-up">
              A concise snapshot of what you can expect at handover. Full technical schedules are provided with the disclosure pack.
            </p>
            <div className="mt-10 grid gap-8 lg:grid-cols-2" data-aos="fade-up">
              <div className="overflow-hidden rounded-2xl border border-stone-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-stone-100 text-slate-700">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Category</th>
                      <th className="px-4 py-3 font-semibold">Detail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-slate-600">
                    {[
                      ['Structure', 'RCC frame; premium insulation'],
                      ['Windows', 'Double-glazed, low-E where specified'],
                      ['Kitchen', 'European appliances; stone counters'],
                      ['Flooring', 'Large-format porcelain in main areas'],
                      ['Outdoor', 'Private pool options; deck drainage'],
                      ['Parking', 'Covered bays + visitor allocation'],
                      ['MEP', 'Central AC; solar water heating ready'],
                      ['Smart', 'Lighting scenes; CCTV pre-wire; app-ready'],
                    ].map(([a, b]) => (
                      <tr key={a}>
                        <td className="px-4 py-3 font-medium text-slate-800">{a}</td>
                        <td className="px-4 py-3">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="space-y-4 rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
                <h3 className="font-[family-name:Instrument_Serif] text-xl text-slate-900">Optional upgrades</h3>
                <p className="text-sm text-slate-600">
                  Elevate your penthouse with curated packages: upgraded kitchen appliances, wood flooring in bedrooms, extended smart automation, terrace lighting, and pool heat pumps.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="text-amber-700">•</span>
                    Interior design partners available for turnkey furnishing.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-700">•</span>
                    EV charger provisions in select plots.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-700">•</span>
                    Extended warranty programs on select MEP packages.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl" data-aos="fade-up">
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">Amenities</p>
              <h2 className="mt-2 font-[family-name:Instrument_Serif] text-3xl text-slate-900 sm:text-4xl">
                Resort-style living at your doorstep.
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {AMENITIES.map((a, i) => (
                <div
                  key={a.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  <h3 className="font-[family-name:Instrument_Serif] text-lg text-slate-900">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="border-y border-stone-200 bg-slate-900 py-16 text-stone-100 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div data-aos="fade-right">
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">Location</p>
                <h2 className="mt-2 font-[family-name:Instrument_Serif] text-3xl text-white sm:text-4xl">
                  Connected to daily essentials—without the noise.
                </h2>
                <p className="mt-4 text-stone-300">
                  Set in Mauritius with easy links to main roads, business hubs, and the coast. Exact pin and approach roads are shared during your site visit.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    ['Port Louis CBD & retail', '~10–15 min drive'],
                    ['Ebene / Moka corridor', '~8–12 min'],
                    ['SSR International Airport (MRU)', '~35–45 min'],
                    ['North / west coast leisure', '~20–35 min'],
                  ].map(([label, time]) => (
                    <li key={label} className="flex items-center justify-between border-b border-white/10 pb-3 text-sm">
                      <span className="text-stone-400">{label}</span>
                      <span className="font-semibold text-white">{time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-stone-500">
                  Travel times are approximate outside peak hours; verified during your consultation.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10" data-aos="fade-left">
                <iframe
                  title="Mauritius — central area (illustrative)"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=57.42%2C-20.42%2C57.72%2C-20.08&amp;layer=mapnik"
                  className="h-72 w-full border-0 sm:h-full sm:min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <p className="bg-slate-950 px-3 py-2 text-center text-xs text-stone-500">
                  OpenStreetMap — central Mauritius (Port Louis–Ebene–Moka area). Exact site pin shared on enquiry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sale & rent */}
        <section id="sale-rent" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div data-aos="fade-up">
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">Sale & rent</p>
                <h2 className="mt-2 font-[family-name:Instrument_Serif] text-3xl text-slate-900 sm:text-4xl">
                  Purchase or lease—with clarity at every step.
                </h2>
                <ol className="mt-8 space-y-6 border-l-2 border-amber-200 pl-6">
                  {[
                    ['Consultation', 'Review layouts, sale vs rent availability, and pricing.'],
                    ['Reservation', 'For purchases: refundable booking subject to KYC. For rent: holding deposit per policy.'],
                    ['Agreement', 'Sign SPA (sale) or lease agreement (rent) with agreed terms.'],
                    ['Fit-out', 'Progress updates, optional upgrade window, snagging before handover.'],
                    ['Handover', 'Inspection, keys, registration or Ejari as applicable.'],
                  ].map(([title, desc], idx) => (
                    <li key={title} className="relative">
                      <span className="absolute -left-[29px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-slate-900">
                        {idx + 1}
                      </span>
                      <h3 className="font-semibold text-slate-900">{title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{desc}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="font-[family-name:Instrument_Serif] text-2xl text-slate-900">Payment overview</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Illustrative schedule for planning purposes only; your official offer lists exact percentages and dates.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {[
                    ['On booking', '10%'],
                    ['During construction', '50% across milestones'],
                    ['On handover', '40%'],
                  ].map(([k, v]) => (
                    <li key={k} className="flex justify-between border-b border-stone-100 pb-2">
                      <span>{k}</span>
                      <span className="font-semibold text-slate-900">{v}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-lg bg-amber-50 p-4 text-xs text-amber-950">
                  Mortgages may be available for qualified buyers; tenants should confirm security deposit, chiller treatment, and Ejari steps with the leasing team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="border-y border-stone-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:Instrument_Serif] text-3xl text-slate-900 sm:text-4xl" data-aos="fade-up">
              Gallery
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600" data-aos="fade-up">
              Renders and show-home photography for inspiration; materials and views vary by floor and unit.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {[
                'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=600&q=80',
              ].map((src, i) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-xl shadow-sm ring-1 ring-stone-200/80"
                  data-aos="zoom-in"
                  data-aos-delay={i * 40}
                >
                  <img
                    src={src}
                    alt=""
                    className="aspect-[4/3] h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:Instrument_Serif] text-3xl text-slate-900 sm:text-4xl" data-aos="fade-up">
              What our clients say
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  quote:
                    'We compared several towers—the penthouse layouts and payment schedule were explained clearly with no pressure.',
                  name: 'Sarah K.',
                  role: 'Buyer',
                },
                {
                  quote:
                    'We leased a duplex penthouse for a year—the handover was smooth and the concierge team is genuinely helpful.',
                  name: 'Ahmed R.',
                  role: 'Tenant',
                },
                {
                  quote:
                    'Site visits were organized professionally, and we could see real build quality—not just marketing.',
                  name: 'Priya S.',
                  role: 'Buyer',
                },
              ].map((t, i) => (
                <blockquote
                  key={t.name}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <p className="text-slate-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4 border-t border-stone-100 pt-4">
                    <cite className="not-italic font-semibold text-slate-900">{t.name}</cite>
                    <span className="mt-0.5 block text-xs text-slate-500">{t.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-stone-200 bg-stone-100/80 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-[family-name:Instrument_Serif] text-3xl text-slate-900 sm:text-4xl" data-aos="fade-up">
              Frequently asked questions
            </h2>
            <div className="mt-10 space-y-2">
              {FAQ_ITEMS.map((item, i) => {
                const open = faqOpen === i;
                return (
                  <div
                    key={item.q}
                    className="overflow-hidden rounded-xl border border-stone-200 bg-white"
                    data-aos="fade-up"
                    data-aos-delay={i * 40}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold text-slate-900 sm:px-5 sm:text-base"
                      onClick={() => setFaqOpen(open ? -1 : i)}
                      aria-expanded={open}
                    >
                      {item.q}
                      <span className={`shrink-0 transition ${open ? 'rotate-180' : ''}`} aria-hidden>
                        <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>
                    {open && (
                      <div className="border-t border-stone-100 px-4 pb-4 pt-0 text-sm leading-relaxed text-slate-600 sm:px-5">
                        <p className="pt-3">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact + brochure */}
        <section id="contact" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5" data-aos="fade-right">
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">Contact</p>
                <h2 className="mt-2 font-[family-name:Instrument_Serif] text-3xl text-slate-900 sm:text-4xl">
                  Book a private consultation.
                </h2>
                <p className="mt-3 text-slate-600">
                  Share your preferences and we will confirm availability, share floor plans, and arrange a guided tour of the sales gallery or site (subject to schedule).
                </p>
                <dl className="mt-8 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-slate-900">Sales suite</dt>
                    <dd className="text-slate-600">Sun–Thu, 10:00–18:00 · Fri–Sat by appointment</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Phone</dt>
                    <dd>
                      <a href="tel:+23080029494" className="text-amber-800 underline-offset-2 hover:underline">
                        +230 800 2949
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Email</dt>
                    <dd>
                      <a href="mailto:penthouses@orpidevelopment.com" className="text-amber-800 underline-offset-2 hover:underline">
                        penthouses@orpidevelopment.com
                      </a>
                    </dd>
                  </div>
                </dl>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-stone-50"
                  download
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download project brochure (PDF)
                </a>
                <p className="mt-2 text-xs text-slate-500">Link your hosted PDF when ready.</p>
              </div>
              <div className="lg:col-span-7" data-aos="fade-left">
                <form
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-left text-sm font-medium text-slate-700">
                      Full name
                      <input
                        type="text"
                        required
                        className="mt-1.5 w-full rounded-lg border border-stone-200 px-3 py-2.5 text-slate-900 outline-none ring-amber-500/0 transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                        placeholder="As on ID"
                      />
                    </label>
                    <label className="block text-left text-sm font-medium text-slate-700">
                      Phone / WhatsApp
                      <input
                        type="tel"
                        required
                        className="mt-1.5 w-full rounded-lg border border-stone-200 px-3 py-2.5 text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                        placeholder="+230 …"
                      />
                    </label>
                    <label className="block text-left text-sm font-medium text-slate-700 sm:col-span-2">
                      Email
                      <input
                        type="email"
                        required
                        className="mt-1.5 w-full rounded-lg border border-stone-200 px-3 py-2.5 text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                        placeholder="you@example.com"
                      />
                    </label>
                    <label className="block text-left text-sm font-medium text-slate-700 sm:col-span-2">
                      I am interested in
                      <select className="mt-1.5 w-full rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20">
                        <option>Serenity penthouse — 3 BR (sale)</option>
                        <option>Horizon penthouse — 4 BR (rent)</option>
                        <option>Grandeur penthouse — 5 BR (sale & rent)</option>
                        <option>Not sure yet / compare options</option>
                      </select>
                    </label>
                    <label className="block text-left text-sm font-medium text-slate-700 sm:col-span-2">
                      Message
                      <textarea
                        rows={4}
                        required
                        className="mt-1.5 w-full resize-y rounded-lg border border-stone-200 px-3 py-2.5 text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                        placeholder="Preferred visit times, budget range, questions…"
                      />
                    </label>
                  </div>
                  <label className="mt-4 flex items-start gap-2 text-left text-xs text-slate-600">
                    <input type="checkbox" required className="mt-1 rounded border-stone-300 text-amber-600 focus:ring-amber-500" />
                    I agree to be contacted about this project and understand that pricing and availability may change.
                  </label>
                  <button
                    type="submit"
                    className="mt-6 w-full rounded-full bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Submit enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
