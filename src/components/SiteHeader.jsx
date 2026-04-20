import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { NAV } from '../data/penthouses';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2" onClick={closeMenu}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold tracking-tight text-amber-400">
            O
          </span>
          <span className="text-left font-[family-name:Instrument_Serif] text-xl tracking-tight text-slate-900">
            Orpi
            <span className="block text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-slate-500">
              Development
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-stone-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+23080029494"
            className="hidden items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm sm:inline-flex"
          >
            <Icon className="w-4 h-4">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.608-1.288.55-3.374-.38-6.345-2.3-8.292-5.15-.513-.682-.79-1.512-.79-2.372V6.75z"
                />
              </svg>
            </Icon>
              800 2949
          </a>
          <Link
            to="/#contact"
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 sm:inline-block"
          >
            Book a viewing
          </Link>
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-slate-700 hover:bg-stone-100 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="border-t border-stone-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-stone-50"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="mt-2 rounded-full bg-slate-900 py-3 text-center text-sm font-semibold text-white"
              onClick={closeMenu}
            >
              Book a viewing
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
