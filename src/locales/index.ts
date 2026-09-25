import { ar } from './ar';
import { en } from './en';
import type { Language } from '../types';

export const translations = {
  ar,
  en,
} as const;

export type TranslationKeys = typeof ar;

export const getTranslation = (lang: Language): TranslationKeys => {
  return translations[lang] || translations.ar;
};
