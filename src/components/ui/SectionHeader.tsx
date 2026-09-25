import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'emerald' | 'cyan' | 'amber' | 'purple' | 'slate';
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  align?: 'center' | 'start';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'emerald',
  badgeIcon,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`flex flex-col mb-12 sm:mb-16 ${
        isCenter ? 'items-center text-center max-w-3xl mx-auto' : 'items-start text-start max-w-3xl'
      } ${className}`}
    >
      {badge && (
        <Badge
          variant={badgeVariant}
          icon={badgeIcon}
          dot
          className="mb-4 select-none"
        >
          {badge}
        </Badge>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.2] mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
