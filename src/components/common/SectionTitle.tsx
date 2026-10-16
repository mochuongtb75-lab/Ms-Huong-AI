import React from 'react';
import { Badge } from './Badge';

interface SectionTitleProps {
  badge?: string;
  badgeVariant?: 'blue' | 'cyan' | 'gold';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  id?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  badgeVariant = 'cyan',
  title,
  subtitle,
  align = 'center',
  className = '',
  id
}) => {
  const isCenter = align === 'center';

  return (
    <div
      id={id}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'} ${className}`}
    >
      {badge && (
        <div className={`mb-3.5 ${isCenter ? 'flex justify-center' : ''}`}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl font-black uppercase tracking-tight text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-[#D5DCF8] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
