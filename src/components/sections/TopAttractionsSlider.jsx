'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MoveRight } from 'lucide-react';
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
    }, 400);
  }, [total]);

  const handlePrev = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + total) % total);
      setIsExiting(false);
    }, 400);
  }, [total]);

  if (!current) return null;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black p-4 md:p-10">
      <div className="relative w-full max-w-9xl aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
        
        {/* Background Image */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${isExiting ? 'opacity-40' : 'opacity-100'}`}>
          <Image
            src={current.imageSrc}
            alt={current.title}
            fill
            className="object-cover transition-transform duration-[10000ms] scale-105 group-hover:scale-100"
            priority
          />
          {/* Dark Overlay - Image ki tarah dark feel ke liye */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content Card (Bottom Left) */}
        <div className="absolute bottom-10 left-6 md:left-12 z-20 max-w-md lg:max-w-lg">
          <div 
            className={`bg-[#1a0a0d]/90 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/5 transition-all duration-500 ${
              isExiting ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="text-white/70 italic text-sm mb-2 font-light">Top attractions</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {current.title}
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 font-light">
              {current.description}
            </p>
            
            {/* Red Arrow Link */}
            <button className="group flex items-center transition-transform hover:translate-x-2">
              <MoveRight className="text-red-500 w-8 h-8 stroke-[1.5px]" />
            </button>
          </div>
        </div>

        {/* Navigation Arrows (Bottom Right) - Image design match */}
        <div className="absolute bottom-0 right-0 z-30 flex">
          <button
            onClick={handlePrev}
            className="bg-[#1a0a0d]/80 hover:bg-[#2a1a1d] text-white p-6 transition-colors border-t border-l border-white/10"
          >
            <ChevronLeft className="w-6 h-6 opacity-60" />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#1a0a0d]/80 hover:bg-[#2a1a1d] text-white p-6 transition-colors border-t border-l border-white/10"
          >
            <ChevronRight className="w-6 h-6 opacity-60" />
          </button>
        </div>

      </div>
    </section>
  );
}