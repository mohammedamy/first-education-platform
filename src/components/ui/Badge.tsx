import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'cyan' | 'amber' | 'purple' | 'slate' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'emerald',
  size = 'md',
  icon,
  className = '',
  dot = false,
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3.5 py-1 gap-2',
  }[size];

  const variantStyles = {
    emerald:
      'bg-emerald-950/60 text-emerald-300 border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]',
    cyan:
      'bg-sky-950/60 text-sky-300 border-sky-500/30 shadow-[0_0_12px_rgba(14,165,233,0.15)]',
    amber:
      'bg-amber-950/60 text-amber-300 border-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.15)]',
    purple:
      'bg-purple-950/60 text-purple-300 border-purple-500/30 shadow-[0_0_12px_rgba(168,85,247,0.15)]',
    slate:
      'bg-slate-800/80 text-slate-300 border-slate-700/80',
    outline:
      'bg-transparent text-slate-200 border-slate-700',
  }[variant];

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border backdrop-blur-md transition-colors ${sizeStyles} ${variantStyles} ${className}`}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
