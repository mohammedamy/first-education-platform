import type { PaymentProviderConfig } from '../types';

export const BRAND_CONFIG = {
  // Brand Identifier
  nameEn: 'Next Target',
  nameAr: 'نكست تارجت',
  legalName: 'شركة نكست تارجت للتدريب والاستشارات (Next Target for Training & Consultancy)',
  taglineAr: 'منصتك الذكية لاجتياز التحصيلي، القدرات، والتميز الجامعي — حدد هدفك وتفوق',
  taglineEn: 'Your premier platform for Tahsili, Qudrat, and University Academic Excellence — Hit Your Target',
  shortBioAr: 'منصة تعليمية سعودية مصممة لمساعدة الطلاب على التفوق في اختبارات قياس والمساقات الجامعية من خلال مسارات ذكية وتدريب موجه نحو هدفك القادم.',
  shortBioEn: 'A modern Saudi educational platform designed to empower students in standardized testing and university courses to achieve their target scores.',
  supportEmail: 'contact@nexttarget.sa',
  supportPhone: '+966 11 000 0000',
  city: 'Riyadh, Saudi Arabia / الرياض، المملكة العربية السعودية',
  foundedYear: 2026,
  copyrightYear: 2026,

  // Official Brand Assets Catalog
  assets: {
    logoDark: 'brand/next_target_logo_dark.png',
    logoLight: 'brand/next_target_logo_light.png',
    logoTransparent: 'brand/next_target_logo_transparent.png',
    taglineDark: 'brand/next_target_tagline_dark.png',
    taglineLight: 'brand/next_target_tagline_light.png',
    showcaseTablet: 'brand/next_target_showcase_tablet.png',
  },

  // Architecture versioning
  version: '1.0.0-phase1',

  // Social Links
  social: {
    twitter: 'https://twitter.com/nexttarget_sa',
    instagram: 'https://instagram.com/nexttarget_sa',
    linkedin: 'https://linkedin.com/company/nexttarget-edu',
    youtube: 'https://youtube.com/@nexttarget_sa',
    telegram: 'https://t.me/nexttarget_sa',
  },

  // Color Tokens
  colors: {
    primary: '#0B132B',       // Deep Royal Midnight Navy
    primaryDark: '#060B18',   // Obsidian Abyss
    emerald: '#059669',       // Core Vibrant Emerald
    emeraldLight: '#10B981',  // Electric Mint
    emeraldDark: '#047857',   // Deep Forest Emerald
    amber: '#F59E0B',         // Warm Golden Amber
    amberLight: '#FBBF24',
    surfaceDark: '#0E172A',
    surfaceCard: '#131E38',
    surfaceBorder: 'rgba(255, 255, 255, 0.08)',
  },

  // Future Saudi Payment Providers (Architectural abstraction - Phase 7)
  supportedFuturePaymentProviders: [
    {
      id: 'mada',
      nameAr: 'مدى',
      nameEn: 'Mada',
      logo: '/icons/mada.svg',
      isSaudiLocal: true,
      enabled: false,
      phase: 7,
    },
    {
      id: 'apple_pay',
      nameAr: 'أبل باي',
      nameEn: 'Apple Pay',
      logo: '/icons/applepay.svg',
      isSaudiLocal: false,
      enabled: false,
      phase: 7,
    },
    {
      id: 'visa_mastercard',
      nameAr: 'فيزا وماستركارد',
      nameEn: 'Visa / Mastercard',
      logo: '/icons/visa.svg',
      isSaudiLocal: false,
      enabled: false,
      phase: 7,
    },
    {
      id: 'stc_pay',
      nameAr: 'إس تي سي باي',
      nameEn: 'stc pay',
      logo: '/icons/stcpay.svg',
      isSaudiLocal: true,
      enabled: false,
      phase: 7,
    },
    {
      id: 'tamara',
      nameAr: 'تمارا (تقسيط)',
      nameEn: 'Tamara (BNPL)',
      logo: '/icons/tamara.svg',
      isSaudiLocal: true,
      enabled: false,
      phase: 7,
    },
  ] as PaymentProviderConfig[],
};
