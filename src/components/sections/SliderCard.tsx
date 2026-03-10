'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import type { SliderCardItem } from './types';

const CARD_ASPECT = 'aspect-[4/3]';

export interface SliderCardProps {
  item: SliderCardItem;
  className?: string;
}

export function SliderCard({ item, className }: SliderCardProps) {
  const content = (
    <>
      <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 85vw, 380px"
          className="object-cover rounded-xl transition-opacity duration-300 group-hover:brightness-110"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 group-hover:from-black/80" />
      </div>

      <span className="absolute bottom-4 left-5 right-0 text-start text-xl font-semibold text-white drop-shadow-md transition-all duration-300 group-hover:translate-x-1.5">
        {item.label}
      </span>
    </>
  );

  const cardClasses = cn(
    'group',                           // ← important for group-hover
    'relative flex-shrink-0',
    'w-[min(85vw,380px)]',
    'h-[380px]',
    'overflow-hidden rounded-xl',
    CARD_ASPECT,
    'snap-center',
    'transition-all duration-300',
    'hover:shadow-2xl hover:shadow-black/30', // optional depth
    className
  );

  if (item.href) {
    return (
      <Link href={item.href} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return <article className={cardClasses}>{content}</article>;
}