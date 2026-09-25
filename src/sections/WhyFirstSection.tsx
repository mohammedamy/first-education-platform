import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { VALUE_PILLARS } from '../data/features';
import { IconHelper } from '../components/ui/IconHelper';

export const WhyFirstSection: React.FC = () => {
  const { language, t } = useLanguage();

  const isAr = language === 'ar';

  return (
    <section id="why-first" className="py-20 sm:py-28 bg-slate-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.whyFirst.sectionBadge}
          title={t.whyFirst.title}
          subtitle={t.whyFirst.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VALUE_PILLARS.map((pillar) => {
            const title = isAr ? pillar.titleAr : pillar.titleEn;
            const desc = isAr ? pillar.descriptionAr : pillar.descriptionEn;
            const tag = isAr ? pillar.tagAr : pillar.tagEn;

            return (
              <div
                key={pillar.id}
                className="group relative flex flex-col p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition-all duration-300 text-start hover:-translate-y-1.5"
              >
                {/* Icon & Tag */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 flex items-center justify-center text-emerald-400 transition-colors">
                    <IconHelper name={pillar.iconName} className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60">
                    {tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2.5">
                  {title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
