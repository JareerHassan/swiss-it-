import type { ReactNode } from 'react';

/**
 * Shared types for section slider components.
 */

export interface SliderCardItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  label: string;
  href?: string;
}

export interface SectionSliderProps {
  title: string;
  learnMoreHref?: string;
  learnMoreLabel?: string;
  children: ReactNode;
  className?: string;
}

/** Grid card for Recommendation winter/summer sections */
export interface RecommendationGridItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  label: string;
  href?: string;
  /** Span 2 columns (wider card). Default false. */
  colSpan2?: boolean;
}

export interface RecommendationGridProps {
  title: string;
  items: RecommendationGridItem[];
  className?: string;
}
