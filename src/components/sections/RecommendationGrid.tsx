'use client';

import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { RecommendationCard } from './RecommendationCard';
import type { RecommendationGridProps } from './types';

export function RecommendationGrid({ title, items, className }: RecommendationGridProps) {
  const gridItems = useMemo(() => 
    items.map((item, index) => {
      // Determine row index (assume 3 items per row)
      const rowIndex = Math.floor(index / 3);

      // Alternate row pattern logic
      // Even rows → middle card wider (colSpan2)
      // Odd rows → first card wider
      let colSpan2 = false;
      if (rowIndex % 2 === 0 && index % 3 === 1) colSpan2 = true; // middle card in even row
      if (rowIndex % 2 === 1 && index % 3 === 0) colSpan2 = true; // first card in odd row

      return <RecommendationCard key={item.id} item={{ ...item, colSpan2 }} />;
    }),
    [items]
  );

  return (
    <section className={cn('bg-[#221115] py-12 md:py-16 text-white', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">{title}</h2>

        {/* Grid: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {gridItems}
        </div>
      </div>
    </section>
  );
}