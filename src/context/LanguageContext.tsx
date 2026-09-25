import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language, Direction } from '../types';
import { translations } from '../locales';
import type { TranslationKeys } from '../locales';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  t: TranslationKeys;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('first_edu_lang') as Language;
    return saved === 'en' ? 'en' : 'ar';
  });

  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    localStorage.setItem('first_edu_lang', language);

    if (language === 'ar') {
      document.body.classList.remove('font-sans-en');
      document.body.classList.add('font-sans-ar');
    } else {
      document.body.classList.remove('font-sans-ar');
      document.body.classList.add('font-sans-en');
    }
  }, [language, direction]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        t,
        setLanguage,
        toggleLanguage,
      }}
    >
      <div dir={direction} className={language === 'ar' ? 'font-sans-ar' : 'font-sans-en'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
