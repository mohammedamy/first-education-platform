import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/Button';
import { ArrowLeft, ArrowRight, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export const FinalCtaSection: React.FC = () => {
  const { language, direction, t } = useLanguage();

  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.2)] bg-slate-950">
          {/* Background Image with Cinematic Overlay */}
          <div className="absolute inset-0">
            <img
              src={getAssetUrl('images/first_cta_bg.jpg')}
              alt="Next Target Futuristic Education Center"
              loading="lazy"
              className="w-full h-full object-cover object-center opacity-40 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
            <div className="absolute inset-0 bg-emerald-950/20 mix-blend-overlay" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-20 flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Top Micro-badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.finalCta.satisfactionPledge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.2] mb-6">
              {t.finalCta.title}
            </h2>

            <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl mb-10 font-normal">
              {t.finalCta.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                variant="primary"
                onClick={() => scrollTo('#tracks')}
                rightIcon={<ArrowIcon className="w-4 h-4" />}
                className="shadow-[0_0_30px_rgba(16,185,129,0.4)]"
              >
                {t.finalCta.primaryBtn}
              </Button>

              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollTo('#tracks')}
                leftIcon={<Compass className="w-4 h-4 text-emerald-400" />}
              >
                {t.finalCta.secondaryBtn}
              </Button>
            </div>

            {/* Guarantee points */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{language === 'ar' ? 'مسار تأسيسي متدرج' : 'Step-by-step Foundation'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{language === 'ar' ? 'حلول تفصيلية للتجميعات' : 'Detailed Past Paper Solves'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{language === 'ar' ? 'متابعة ذكية لمعدل الإتقان' : 'Smart Mastery Analytics'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
