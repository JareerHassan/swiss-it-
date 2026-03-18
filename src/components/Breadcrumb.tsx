import { Link } from '@/i18n/routing';
import React from 'react';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type HeroBreadcrumbProps = {
  items: BreadcrumbItem[];
  title: string;
  subtitle?: string;
  description?: string;
};

export default function HeroSection({ items, title, subtitle, description }: HeroBreadcrumbProps) {
  const lastIndex = items.length - 1;

  return (
    <div className="relative w-full min-h-[500px] flex items-center overflow-hidden pt-28">

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 " />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 py-24">
        <div className="max-w-2xl">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center text-sm font-medium text-white/80">
              {items.map((item, index) => {
                const isLast = index === lastIndex;
                const isHome = index === 0;

                return (
                  <li key={index} className="flex items-center">
                    {isLast || !item.href ? (
                      <span className="flex items-center gap-2 text-white">
                        {isHome}
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 hover:text-red-500 transition-colors"
                      >
                        {isHome}
                        {item.label}
                      </Link>
                    )}

                    {index < lastIndex && (
                      <span className="mx-2 text-white/40">/</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight uppercase tracking-tight mb-4">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/90 font-medium mb-2">
            {subtitle}
          </p>

          {/* Accent Line */}
          <div className="w-12 h-[3px] bg-red-600 mb-6"></div>

          {/* Description */}
          <p className="text-white/80 max-w-lg mb-10 leading-relaxed">
            {description}
          </p>

          {/* Buttons */}
          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="/services" className="bg-white text-black px-8 py-4 rounded-sm font-bold hover:bg-gray-200 transition inline-block">
              Turn your vision into success!
            </Link>

            <Link href="/contact" className="bg-red-600 text-white px-8 py-4 rounded-sm font-bold hover:bg-red-700 transition inline-block">
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}