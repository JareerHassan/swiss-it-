import Link from 'next/link';
import { routing } from '@/i18n/routing';

/**
 * Root-level 404 fallback. Used when no segment-level not-found.tsx
 * is in the route tree (e.g. edge cases outside [locale]).
 * For normal 404s under /en, /de, /fr use app/[locale]/not-found.tsx.
 */
export default function RootNotFound() {
  const defaultLocale = routing.defaultLocale;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0b0507] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#221115]/50 via-transparent to-[#0b0507]" />

      <section className="relative z-10 w-full max-w-2xl mx-auto px-6 sm:px-8 py-16 sm:py-20 text-center">
        <div className="relative mb-8 sm:mb-10">
          <span
            className="block text-[10rem] sm:text-[14rem] font-bold leading-none tracking-tighter text-white/5 select-none"
            aria-hidden
          >
            404
          </span>
        </div>

        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
          Page not found
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          This page could not be found
        </h1>
        <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-10">
          The link you followed may be broken, or the page may have been moved
          or removed. Return to the homepage to find your way.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/${defaultLocale}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e3000f] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/30 hover:bg-red-600 transition-all hover:shadow-red-900/40"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
