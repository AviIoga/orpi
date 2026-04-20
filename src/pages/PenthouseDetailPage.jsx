import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useAOS } from '../useAOS';
import { getPenthouseBySlug, listingBadgeCopy } from '../data/penthouses';

const DEFAULT_TITLE = 'Orpi Development | Luxury Penthouses for Sale & Rent';

export default function PenthouseDetailPage() {
  const { slug } = useParams();
  const p = slug ? getPenthouseBySlug(slug) : undefined;
  useAOS();

  useEffect(() => {
    if (p) {
      document.title = `${p.name} Penthouse | Orpi Development`;
    }
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [p]);

  if (!p) {
    return <Navigate to="/" replace />;
  }

  const badges = listingBadgeCopy(p.listing);

  return (
    <main className="text-slate-800">
      <section className="relative min-h-[52vh] overflow-hidden sm:min-h-[56vh]">
        <img src={p.img} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-slate-900/25" />
        <div className="relative mx-auto flex min-h-[52vh] max-w-7xl flex-col justify-end px-4 pb-12 pt-24 sm:min-h-[56vh] sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-stone-300" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-stone-500">/</span>
            <Link to="/#penthouses" className="hover:text-white">
              Penthouses
            </Link>
            <span className="mx-2 text-stone-500">/</span>
            <span className="text-white">{p.name}</span>
          </nav>
          <div className="mb-3 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b.key}
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  b.key === 'sale'
                    ? 'bg-emerald-400/90 text-emerald-950'
                    : 'bg-sky-400/90 text-sky-950'
                }`}
              >
                {b.label}
              </span>
            ))}
            {p.featured && (
              <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-slate-900">{p.tag}</span>
            )}
          </div>
          {!p.featured && (
            <span className="mb-3 inline-flex w-fit rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-amber-100 backdrop-blur-sm">
              {p.tag}
            </span>
          )}
          <h1 className="font-[family-name:Instrument_Serif] text-4xl text-white sm:text-5xl">{p.name}</h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-200">{p.summary}</p>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            {p.salePrice && (
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                Sale: {p.salePrice}
              </span>
            )}
            {p.rentPrice && (
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                Rent: {p.rentPrice}
              </span>
            )}
            <span className="text-sm text-stone-300">
              {p.beds} bed · {p.baths}+ bath · {p.builtUp} · {p.terrace}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-[family-name:Instrument_Serif] text-2xl text-slate-900 sm:text-3xl">Overview</h2>
            <div className="mt-4 space-y-4 text-slate-600">
              {p.longDescription.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <h3 className="mt-10 font-[family-name:Instrument_Serif] text-xl text-slate-900">Layout & spaces</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              {p.spaces.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-[family-name:Instrument_Serif] text-xl text-slate-900">Highlights</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full bg-stone-200/80 px-3 py-1 text-sm font-medium text-slate-800"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6" data-aos="fade-up">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">Quick facts</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-stone-100 pb-2">
                  <dt className="text-slate-500">Listing</dt>
                  <dd className="text-right font-medium text-slate-900">
                    {badges.map((b) => b.label).join(' · ')}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-stone-100 pb-2">
                  <dt className="text-slate-500">Bedrooms</dt>
                  <dd className="font-medium text-slate-900">{p.beds}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-stone-100 pb-2">
                  <dt className="text-slate-500">Bathrooms</dt>
                  <dd className="font-medium text-slate-900">{p.baths}+</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-stone-100 pb-2">
                  <dt className="text-slate-500">Built-up</dt>
                  <dd className="font-medium text-slate-900">{p.builtUp}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Terrace</dt>
                  <dd className="text-right font-medium text-slate-900">{p.terrace}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-slate-500">{p.orientation}</p>
            </div>

            <div className="rounded-2xl border border-amber-200/80 bg-amber-50/80 p-6">
              <h3 className="font-semibold text-slate-900">Included</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {p.included.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-amber-700">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <Link
                to="/#contact"
                className="inline-flex justify-center rounded-full bg-slate-900 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Enquire about {p.name}
              </Link>
              <Link
                to="/#penthouses"
                className="inline-flex justify-center rounded-full border border-stone-200 bg-white py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-stone-50"
              >
                ← All penthouses
              </Link>
            </div>
          </aside>
        </div>

        <section className="mt-16 border-t border-stone-200 pt-12" data-aos="fade-up">
          <h2 className="font-[family-name:Instrument_Serif] text-2xl text-slate-900 sm:text-3xl">Gallery</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Indicative imagery; finishes and views depend on floor level and exposure.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {p.gallery.map((src) => (
              <div key={src} className="overflow-hidden rounded-xl ring-1 ring-stone-200/80">
                <img src={src} alt="" className="aspect-[4/3] h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-stone-200 bg-stone-100/50 p-6 sm:p-8" data-aos="fade-up">
          <h3 className="font-[family-name:Instrument_Serif] text-xl text-slate-900">Plans & terms</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.floorPlanNote}</p>
        </section>
      </div>
    </main>
  );
}
