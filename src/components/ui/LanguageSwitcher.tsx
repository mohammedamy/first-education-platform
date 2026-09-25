import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  variant = 'full',
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'compact') {
    return (
      <button
        onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all active:scale-95 ${className}`}
        aria-label="Toggle language between Arabic and English"
      >
        <Globe className="w-3.5 h-3.5 text-emerald-400" />
        <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
      </button>
    );
  }

  return (
    <div
      className={`inline-flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 shadow-inner backdrop-blur-md ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLanguage('ar')}
        className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
          language === 'ar'
            ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold shadow-sm'
            : 'text-slate-400 hover:text-slate-200'
        }`}
        aria-pressed={language === 'ar'}
      >
        العربية
      </button>

      <span className="text-slate-700 text-xs px-0.5">|</span>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
          language === 'en'
            ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold shadow-sm'
            : 'text-slate-400 hover:text-slate-200'
        }`}
        aria-pressed={language === 'en'}
      >
        English
      </button>
    </div>
  );
};
