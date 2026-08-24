import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useSiteSettings } from '@/lib/hooks';
import { useEffect } from 'react';

// Applies the brand colors from settings to CSS variables on mount.
function useApplyTheme() {
  const { data: settings } = useSiteSettings();
  useEffect(() => {
    if (!settings) return;
    const root = document.documentElement;
    root.style.setProperty('--color-primary', settings.primaryColor);
    root.style.setProperty('--color-accent', settings.accentColor);
  }, [settings]);
}

export function PublicLayout() {
  useApplyTheme();
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
