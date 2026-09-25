import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BRAND_CONFIG } from '../../config/brand';
import { getAssetUrl } from '../../utils/assets';

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
    sm: { imgHeight: 'h-8 sm:h-9', sub: 'text-[10px]' },
    md: { imgHeight: 'h-10 sm:h-11', sub: 'text-xs' },
    lg: { imgHeight: 'h-14 sm:h-16', sub: 'text-sm' },
    xl: { imgHeight: 'h-18 sm:h-20', sub: 'text-base' },
  }[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none transition-all duration-300 ${
        onClick ? 'cursor-pointer hover:opacity-95 active:scale-95' : ''
      } ${className}`}
      role={onClick ? 'button' : 'banner'}
      aria-label="Next Target Platform Logo"
    >
      {/* Official Next Target Logo */}
      <div className="relative flex items-center justify-center shrink-0 rounded-2xl overflow-hidden p-1 bg-[#021835]/90 border border-emerald-500/25 shadow-[0_4px_20px_rgba(16,185,129,0.2)] hover:border-emerald-400/50 transition-colors">
        <img
          src={getAssetUrl('images/next_target_logo_dark.png')}
          alt="Next Target"
          className={`${dimensions.imgHeight} w-auto object-contain rounded-xl`}
        />
      </div>

      {/* Brand Text Architecture */}
      <div className="flex flex-col text-start">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-bold opacity-90 text-xs px-2 py-0.5 rounded-md bg-emerald-950/70 border border-emerald-500/30 shadow-sm">
            {BRAND_CONFIG.nameAr}
          </span>
          {size !== 'sm' && (
            <span className="text-[10px] text-slate-400 font-medium hidden sm:inline-block">
              {language === 'ar' ? 'منصة تعليمية' : 'EdTech Platform'}
            </span>
          )}
        </div>

        {showTagline && (
          <span className={`text-slate-400 font-medium mt-1 ${dimensions.sub}`}>
            {language === 'ar' ? BRAND_CONFIG.taglineAr : BRAND_CONFIG.taglineEn}
          </span>
        )}
      </div>
    </div>
  );
};
