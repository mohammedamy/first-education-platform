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
      aria-label="Next Target Platform Logo"
    >
      {/* Modern Geometric Next Target Symbol */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={dimensions.icon}
          height={dimensions.icon}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_4px_16px_rgba(16,185,129,0.3)]"
        >
          {/* Subtle Outer Shield */}
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="12"
            fill="url(#target_bg_gradient)"
            stroke="url(#target_border_gradient)"
            strokeWidth="1.5"
          />

          {/* Outer Radar Target Arc */}
          <circle
            cx="22"
            cy="22"
            r="13"
            stroke="url(#target_outer_stroke)"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            opacity="0.6"
          />

          {/* Inner Precision Target Ring */}
          <circle
            cx="22"
            cy="22"
            r="7.5"
            stroke="#10B981"
            strokeWidth="1.5"
          />

          {/* Crosshairs Accent Marks */}
          <line x1="22" y1="5" x2="22" y2="8" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="22" y1="36" x2="22" y2="39" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="5" y1="22" x2="8" y2="22" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="36" y1="22" x2="39" y2="22" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />

          {/* Dynamic Forward Chevron Arrow into Center Target */}
          <path
            d="M11 22H21"
            stroke="url(#target_arrow_gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M16 16L22 22L16 28"
            stroke="url(#target_arrow_gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bullseye Core Center */}
          <circle cx="22" cy="22" r="3" fill="#F59E0B" />
          <circle cx="22" cy="22" r="1.5" fill="#FFFFFF" />

          {/* Gradients */}
          <defs>
            <linearGradient id="target_bg_gradient" x1="2" y1="2" x2="42" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B132B" />
              <stop offset="1" stopColor="#1E293B" />
            </linearGradient>
            <linearGradient id="target_border_gradient" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981" />
              <stop offset="0.5" stopColor="#38BDF8" />
              <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="target_outer_stroke" x1="9" y1="9" x2="35" y2="35" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34D399" />
              <stop offset="1" stopColor="#38BDF8" />
            </linearGradient>
            <linearGradient id="target_arrow_gradient" x1="11" y1="22" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
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
