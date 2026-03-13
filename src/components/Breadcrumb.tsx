import { Link } from '@/i18n/routing';
import React from 'react';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  if (!items.length) return null;

  const lastIndex = items.length - 1;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center list-none p-0 m-0">
        {items.map((item, index) => {
          const isLast = index === lastIndex;
          const showSeparator = index < lastIndex;
          const isHome = index === 0;

          const content = isLast || !item.href ? (
            <span
              aria-current={isLast ? 'page' : undefined}
              className={`flex items-center gap-2 truncate transition-colors ${
                isLast ? 'text-white' : 'text-white/40'
              }`}
            >
              {isHome && <HomeIcon />}
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="group flex items-center gap-2 hover:text-red-400 transition-colors duration-300"
            >
              {isHome && <HomeIcon className="group-hover:text-red-400" />}
              {item.label}
            </Link>
          );

          return (
            <li key={`${item.label}-${index}`} className="flex items-center">
              {content}
              {showSeparator && (
                <span className="mx-3 text-white/20 select-none" aria-hidden="true">
                  <span className="text-[10px] font-light">/</span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// Minimalist Home Icon Component
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={`w-3.5 h-3.5 transition-colors ${className || 'text-white/40'}`} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}