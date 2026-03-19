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
    current && locale ? `/${locale}/services/${current.id}` : '#';

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
    <section className="relative w-full flex items-center justify-center bg-bg-soft px-3 sm:px-5 md:px-10 py-6 sm:py-8 md:py-12">
      
      <div className="
        relative w-full 
        max-w-[1400px] 
        h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh]
        min-h-[420px] sm:min-h-[480px] md:min-h-[520px]
        overflow-hidden rounded-2xl
      ">
        
        {/* Background Image */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${isExiting ? 'opacity-40' : 'opacity-100'}`}>
          <Image
            src={current.imageSrc}
            alt={current.title}
            fill
            className="object-cover transition-transform duration-[10000ms] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent md:bg-black/30" />
        </div>

        {/* Content Card */}
        <div className="
          absolute 
          bottom-4 left-4 right-4
          sm:bottom-6 sm:left-6 sm:right-6
          md:bottom-10 md:left-10 md:right-auto
          z-20 
          w-auto 
          md:max-w-md lg:max-w-lg
        ">
          <div 
            className={`bg-[#1a0a0d]/90 backdrop-blur-md 
              p-5 sm:p-6 md:p-8 lg:p-10 
              rounded-2xl border border-white/5 
              transition-all duration-500 ${
                isExiting ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
          >
            <p className="text-white/70 italic text-xs sm:text-sm mb-1 sm:mb-2 font-light">
              Top attractions
            </p>

            <h2 className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
              font-bold text-white 
              mb-3 sm:mb-4 md:mb-6 
              tracking-tight leading-tight
            ">
              {current.title}
            </h2>

            <p className="
              text-white/80 
              text-xs sm:text-sm md:text-base 
              leading-relaxed 
              mb-5 sm:mb-6 md:mb-8 
              font-light 
              line-clamp-3 sm:line-clamp-3 md:line-clamp-none
            ">
              {current.description}
            </p>

            <Link
              href={detailHref}
              className="group inline-flex items-center transition-transform hover:translate-x-2"
            >
              <MoveRight className="text-accent-red w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 stroke-[1.5px]" />
            </Link>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="
          absolute 
          bottom-3 right-3 
          sm:bottom-4 sm:right-4 
          md:bottom-0 md:right-0 
          flex gap-0.5 z-30
        ">
          <button
            onClick={handlePrev}
            className="
              flex items-center justify-center 
              bg-black/60 hover:bg-black/80 
              text-white 
              w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 
              transition-colors 
              border border-white/20 
              md:border-t md:border-l 
              rounded-l-xl md:rounded-none 
              group
            "
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={handleNext}
            className="
              flex items-center justify-center 
              bg-black/60 hover:bg-black/80 
              text-white 
              w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 
              transition-colors 
              border border-white/20 
              md:border-t md:border-l 
              rounded-r-xl md:rounded-none 
              group
            "
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

      </div>
    </section>
  );
}