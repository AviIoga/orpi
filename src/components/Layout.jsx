import { Outlet } from 'react-router-dom';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 antialiased">
      <ScrollToTop />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
}
