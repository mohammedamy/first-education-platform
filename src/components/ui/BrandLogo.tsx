import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BRAND_CONFIG } from '../../config/brand';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  variant?: 'light' | 'dark' | 'auto';
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
  variant = 'auto',
  onClick,
}) => {
  const { language } = useLanguage();

  const dimensions = {
    sm: { icon: 28, text: 'text-lg', badge: 'text-[9px]', sub: 'text-[10px]' },
    md: { icon: 38, text: 'text-2xl', badge: 'text-[10px]', sub: 'text-xs' },
    lg: { icon: 48, text: 'text-3xl', badge: 'text-xs', sub: 'text-sm' },
    xl: { icon: 60, text: 'text-4xl', badge: 'text-xs', sub: 'text-base' },
  }[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none transition-all duration-300 ${
        onClick ? 'cursor-pointer hover:opacity-90 active:scale-95' : ''
      } ${className}`}
      role={onClick ? 'button' : 'banner'}
      aria-label="First Platform Logo"
    >
      {/* Modern Geometric Modular Symbol */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={dimensions.icon}
          height={dimensions.icon}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_4px_16px_rgba(16,185,129,0.25)]"
        >
          {/* Subtle Outer Hexagonal Ring / Diamond Shield */}
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="12"
            fill="url(#brand_bg_gradient)"
            stroke="url(#brand_border_gradient)"
            strokeWidth="1.5"
          />

          {/* Dynamic "1" Morphing into Forward Arrow & Open Book Prism */}
          <path
            d="M14 28.5L22 13L30 28.5H25L22 21L19 28.5H14Z"
            fill="url(#brand_glyph_gradient)"
          />
          <path
            d="M22 13V31"
            stroke="url(#brand_core_stroke)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="22" cy="11.5" r="2.5" fill="#34D399" />

          {/* Gradients */}
          <defs>
            <linearGradient id="brand_bg_gradient" x1="2" y1="2" x2="42" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B132B" />
              <stop offset="1" stopColor="#1E293B" />
            </linearGradient>
            <linearGradient id="brand_border_gradient" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981" />
              <stop offset="0.5" stopColor="#38BDF8" />
              <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="brand_glyph_gradient" x1="14" y1="13" x2="30" y2="31" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="brand_core_stroke" x1="22" y1="13" x2="22" y2="31" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient subtle beacon */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse opacity-75" />
      </div>

      {/* Brand Text Architecture */}
      <div className="flex flex-col text-start">
        <div className="flex items-center gap-2">
          <span
            className={`font-black tracking-tight text-white font-sans ${dimensions.text}`}
          >
            {BRAND_CONFIG.nameEn}
          </span>
          <span className="text-emerald-400 font-bold opacity-80 text-xs px-1.5 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/20">
            {BRAND_CONFIG.nameAr}
          </span>
        </div>

        {showTagline && (
          <span className={`text-slate-400 font-medium ${dimensions.sub}`}>
            {language === 'ar' ? BRAND_CONFIG.taglineAr : BRAND_CONFIG.taglineEn}
          </span>
        )}
      </div>
    </div>
  );
};
