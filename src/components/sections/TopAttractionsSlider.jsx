'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, MoveRight } from 'lucide-react';
import { topAttractionsSlides } from '@/data/top-attractions';

export default function TopAttractionsSlider() {
  const params = useParams();
  const localeParam = params?.locale;
  const locale =
    typeof localeParam === 'string'
      ? localeParam
      : Array.isArray(localeParam)
      ? localeParam[0]
      : 'en';

  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const total = topAttractionsSlides.length;
  const current = topAttractionsSlides[index];

  const detailHref =
    current && locale ? `/${locale}/experiences/${current.id}` : '#';

  const handleNext = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % total);
      setIsExiting(false);
    }, 400);
  }, [total, isExiting]);

  const handlePrev = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + total) % total);
      setIsExiting(false);
    }, 400);
  }, [total, isExiting]);

  if (!current) return null;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#221115] p-2 sm:p-4 md:p-10">
      <div className="relative w-full max-w-9xl h-[70vh] min-h-[500px] md:h-auto md:aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
        
        {/* Background Image */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${isExiting ? 'opacity-40' : 'opacity-100'}`}>
          <Image
            src={current.imageSrc}
            alt={current.title}
            fill
            className="object-cover transition-transform duration-[10000ms] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:bg-black/30" />
        </div>

        {/* Content Card */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:bottom-10 md:left-12 md:right-auto z-20 w-full md:max-w-md lg:max-w-lg">
          <div 
            className={`bg-[#1a0a0d]/90 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl border border-white/5 transition-all duration-500 ${
              isExiting ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="text-white/70 italic text-xs sm:text-sm mb-1 sm:mb-2 font-light">Top attractions</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              {current.title}
            </h2>
            <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 font-light line-clamp-3 md:line-clamp-none">
              {current.description}
            </p>

            <Link
              href={detailHref}
              className="group inline-flex items-center transition-transform hover:translate-x-2"
            >
              <MoveRight className="text-red-500 w-6 h-6 sm:w-8 sm:h-8 stroke-[1.5px]" />
            </Link>
          </div>
        </div>

        {/* Optimized Navigation Arrows */}
        <div className="absolute bottom-4 right-4 flex gap-0.5 z-30 md:bottom-0 md:right-0">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center bg-[#1a0a0d]/80 hover:bg-[#2a1a1d] text-white w-12 h-12 md:w-16 md:h-16 transition-colors border border-white/10 md:border-t md:border-l rounded-l-xl md:rounded-none group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center bg-[#1a0a0d]/80 hover:bg-[#2a1a1d] text-white w-12 h-12 md:w-16 md:h-16 transition-colors border border-white/10 md:border-t md:border-l rounded-r-xl md:rounded-none group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

      </div>
    </section>
  );
}