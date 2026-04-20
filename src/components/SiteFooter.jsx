import { Link } from 'react-router-dom';
import { NAV } from '../data/penthouses';

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-slate-950 text-stone-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="font-[family-name:Instrument_Serif] text-2xl text-white">
              Orpi
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Premium penthouse residences by Orpi Development. Marketing information is indicative; lease and sale terms vary by unit.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV.slice(0, 5).map((n) => (
                <li key={n.href}>
                  <Link to={n.href} className="hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Buyer disclosure
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">Sales</h3>
            <p className="mt-3 text-sm text-stone-300">
              +230 800 2949
              <br />
              penthouses@orpidevelopment.com
            </p>
            <p className="mt-4 text-xs text-stone-500">© {new Date().getFullYear()} Orpi Development. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
