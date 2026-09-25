import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTrackSelection } from '../context/TrackSelectionContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { STEPS_DATA } from '../data/steps';
import { IconHelper } from '../components/ui/IconHelper';
import { Button } from '../components/ui/Button';
import { Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const { language, direction, t } = useLanguage();
  const { setIsAssessmentModalOpen } = useTrackSelection();

  const isAr = language === 'ar';
  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section id="how-it-works" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Subtle Wave */}
      <div className="absolute top-1/2 -start-60 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.howItWorks.sectionBadge}
          title={t.howItWorks.title}
          subtitle={t.howItWorks.subtitle}
        />

        {/* 4-Step Connected Journey */}
        <div className="relative">
          {/* Subtle Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 start-8 end-8 h-0.5 bg-gradient-to-r from-emerald-500/10 via-emerald-500/40 to-teal-500/10 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {STEPS_DATA.map((step) => {
              const title = isAr ? step.titleAr : step.titleEn;
              const desc = isAr ? step.descriptionAr : step.descriptionEn;
              const badge = isAr ? step.badgeAr : step.badgeEn;

              return (
                <div
                  key={step.number}
                  className="group relative flex flex-col p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 text-start hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-mono text-3xl font-black text-emerald-400/90 bg-emerald-950/60 px-3 py-1 rounded-xl border border-emerald-500/30">
                      {step.number}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-slate-800/80 group-hover:bg-emerald-500/20 border border-slate-700 group-hover:border-emerald-500/40 flex items-center justify-center text-emerald-400 transition-colors">
                      <IconHelper name={step.iconName} className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-emerald-400 mb-2">
                    {badge}
                  </span>

                  <h3 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors mb-3">
                    {title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Diagnostic Quiz Demo Callout */}
        <div className="mt-14 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center sm:text-start">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                {isAr ? 'تجربة تفاعلية مباشرة' : 'Interactive Live Demo'}
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              {isAr ? 'هل تريد تجربة نموذج تحديد المستوى فوراً؟' : 'Want to try a sample diagnostic quiz now?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {isAr
                ? 'سؤال واحد يوضح لك كيف يكتشف نظام Next Target نقاط ضعفك بدقة.'
                : 'A single question demonstrates how Next Target pinpoints your improvement areas.'}
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => setIsAssessmentModalOpen(true)}
            rightIcon={<ArrowIcon className="w-4 h-4" />}
            className="shrink-0"
          >
            {t.howItWorks.tryAssessmentCta}
          </Button>
        </div>
      </div>
    </section>
  );
};
