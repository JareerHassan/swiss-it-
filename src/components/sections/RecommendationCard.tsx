'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import type { RecommendationGridItem } from './types';

export interface RecommendationCardProps {
  item: RecommendationGridItem;
  className?: string;
}

export function RecommendationCard({ item, className }: RecommendationCardProps) {
  const content = (
    <>
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-400 group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/85" />
      </div>

      <span className="absolute bottom-5 left-5 right-5 text-xl md:text-2xl font-semibold text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
        {item.label}
      </span>
    </>
  );

  // Base card style
  const cardClasses = cn(
    'group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl hover:shadow-black/30 transition-all duration-300',
    'w-full aspect-[5/7] sm:aspect-[4/6] md:aspect-auto md:min-h-[280px] lg:min-h-[340px]',
    item.colSpan2 ? 'md:col-span-2' : 'md:col-span-1', // Wider card if colSpan2 is true
    className
  );

  // Link to detail page: use item.href if set (e.g. /experiences/winter-holidays), otherwise /experiences/{id}
  const detailHref = item.href ?? `/experiences/${item.id}`;
  return <Link href={detailHref} className={cardClasses}>{content}</Link>;
}