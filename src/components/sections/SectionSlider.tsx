'use client';

import { useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import type { SectionSliderProps } from './types';

const SCROLL_OFFSET = 400;

export function SectionSlider({
  title,
  learnMoreHref,
  learnMoreLabel = 'Learn more',
  children,
  className,
}: SectionSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const delta = direction === 'next' ? SCROLL_OFFSET : -SCROLL_OFFSET;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  }, []);

  return (
    <section
      className={cn(
        'bg-[#221115] py-12 md:py-16 text-white',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {title}
            </h2>
            {learnMoreHref && (
              <Link
                href={learnMoreHref}
                className="inline-flex items-center gap-1 mt-2 text-[#e3000f] font-medium hover:underline focus:outline-none focus:underline"
              >
                {learnMoreLabel}
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            )}
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-2" aria-label={`${title} slider navigation`}>
            <button
              type="button"
              onClick={() => scroll('prev')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('next')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto overflow-y-hidden pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6 snap-x snap-mandatory scroll-smooth scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
