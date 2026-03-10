'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { topAttractionsSlides } from '@/data/top-attractions';

export default function TopAttractionsSlider() {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const total = topAttractionsSlides.length;
  const current = topAttractionsSlides[index];

  const handleNext = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % total);
      setIsExiting(false);
    }, 300); // Matches transition duration
  }, [total]);

  const handlePrev = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + total) % total);
      setIsExiting(false);
    }, 300);
  }, [total]);

  // Auto-advance progress logic
  useEffect(() => {
    const timer = setTimeout(handleNext, 8000);
    return () => clearTimeout(timer);
  }, [index, handleNext]);

  if (!current) return null;

  return (
    <section className="bg-[#1a0d10] py-16 md:py-24 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="group relative aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden rounded-[40px] shadow-2xl bg-neutral-900">
          
          {/* Background Image with Ken Burns Effect */}
          <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
            <Image
              src={current.imageSrc}
              alt={current.imageAlt}
              fill
              priority
              className="object-cover transition-transform duration-[8000ms] ease-linear group-hover:scale-110"
            />
            {/* Sophisticated Dual Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d10] via-transparent to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent hidden md:block" />
          </div>

          {/* Floating Content Card */}
          <div className="relative z-10 h-full flex flex-col justify-end md:justify-center p-6 md:p-20">
            <div 
              className={`max-w-xl transition-all duration-500 transform ${
                isExiting ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              } bg-black/20 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-8 bg-red-600" />
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                  {current.category}
                </p>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                {current.title}
              </h2>
              
              <p className="text-lg text-white/70 leading-relaxed mb-10 line-clamp-2 md:line-clamp-3">
                {current.description}
              </p>

              {current.href && (
                <Link
                  href={current.href}
                  className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold transition-all hover:bg-red-600 hover:text-white hover:shadow-[0_0_30px_rgba(227,0,15,0.4)] active:scale-95"
                >
                  Explore Destination
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="absolute bottom-10 left-10 right-10 z-20 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Visual Pagination Lines */}
            <div className="flex gap-3">
              {topAttractionsSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="group py-4"
                >
                  <div className={`h-1 rounded-full transition-all duration-500 ${
                    i === index ? 'w-12 bg-red-600' : 'w-6 bg-white/20 group-hover:bg-white/40'
                  }`} />
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 bg-black/30 backdrop-blur-md p-2 rounded-full border border-white/5">
              <span className="pl-6 pr-4 text-sm font-mono tracking-widest text-white/50">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <div className="flex gap-1">
                <button
                  onClick={handlePrev}
                  className="p-4 rounded-full bg-white/5 hover:bg-white/20 transition-colors border border-white/5"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-4 rounded-full bg-red-600 hover:bg-red-500 transition-colors border border-white/10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}