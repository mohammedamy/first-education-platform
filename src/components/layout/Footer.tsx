import React from 'react';
import { BrandLogo } from '../ui/BrandLogo';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import { useTrackSelection } from '../../context/TrackSelectionContext';
import { BRAND_CONFIG } from '../../config/brand';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const { openFutureAccountModal, setIsJoinTeacherModalOpen } = useTrackSelection();

  const isAr = language === 'ar';

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <BrandLogo size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.statement}
            </p>

            <div className="flex flex-col gap-2 mt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{BRAND_CONFIG.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${BRAND_CONFIG.supportEmail}`} className="hover:text-emerald-400 transition-colors">
                  {BRAND_CONFIG.supportEmail}
                </a>
              </div>
            </div>

            <div className="mt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] bg-slate-900 border border-slate-800 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.footer.saudiVisionNotice}</span>
              </span>
            </div>
          </div>

          {/* Explore Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              {t.footer.colExplore}
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#tracks')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {isAr ? 'المسارات الدراسية' : 'Academic Tracks'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#subjects')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {isAr ? 'المواد والمناهج' : 'Subjects & Curriculum'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#teachers')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {isAr ? 'نخبة المعلمين' : 'Faculty & Mentors'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#learning-experience')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {isAr ? 'بيئة التعلّم الرقمية' : 'Digital Learning Cockpit'}
                </button>
              </li>
            </ul>
          </div>

          {/* Future Accounts Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              {t.footer.colAccounts}
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => openFutureAccountModal('student')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>{t.nav.studentAccount}</span>
                  <span className="text-[10px] text-emerald-400/80 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    Phase 2
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openFutureAccountModal('parent')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>{t.nav.parentAccount}</span>
                  <span className="text-[10px] text-sky-400/80 bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-500/20">
                    Phase 6
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsJoinTeacherModalOpen(true)}
                  className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>{t.nav.teacherAccount}</span>
                  <span className="text-[10px] text-amber-400/80 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-500/20">
                    Phase 3
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              {t.footer.colCompany}
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#why-first')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {isAr ? 'عن المنصة وفلسفتنا' : 'About Platform'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#faq')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t.nav.faq}
                </button>
              </li>
              <li>
                <a href="#privacy" className="hover:text-emerald-400 transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-emerald-400 transition-colors">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-start">
            <p>{t.footer.copyright}</p>
            <p className="text-slate-400 mt-0.5">{t.footer.temporaryNotice}</p>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};
