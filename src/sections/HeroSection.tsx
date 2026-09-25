import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ArrowLeft, ArrowRight, Sparkles, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';
import { BRAND_CONFIG } from '../config/brand';

export const HeroSection: React.FC = () => {
  const { language, direction, t } = useLanguage();

  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden"
    >
      {/* Background Ambient Glows and Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 start-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-emerald-500/15 via-teal-500/5 to-transparent blur-3xl -z-10" />
        <div className="absolute top-1/3 -start-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/2 -end-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10" />

        {/* Subtle Architectural Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] -z-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-start z-10">
            {/* Top Subtitle Pill */}
            <Badge
              variant="emerald"
              size="md"
              dot
              icon={<Sparkles className="w-3.5 h-3.5" />}
              className="mb-6 animate-in fade-in slide-in-from-top-3 duration-500"
            >
              {t.hero.badge}
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
              <span>{t.hero.titleLine1} </span>
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed font-normal max-w-2xl mb-8 sm:mb-10">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10">
              <Button
                size="lg"
                variant="primary"
                onClick={() => scrollTo('#tracks')}
                rightIcon={<ArrowIcon className="w-4 h-4" />}
                className="shadow-[0_0_25px_rgba(16,185,129,0.35)]"
              >
                {t.hero.primaryCta}
              </Button>

              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollTo('#tracks')}
                leftIcon={<Compass className="w-4 h-4 text-emerald-400" />}
              >
                {t.hero.secondaryCta}
              </Button>
            </div>

            {/* Trust Badges Strip Under CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80 w-full text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{language === 'ar' ? 'مسارات التحصيلي والقدرات' : 'Tahsili & Qudrat Tracks'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{language === 'ar' ? 'مقررات السنة التحضيرية والجامعية' : 'Prep Year & University STEM'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>{language === 'ar' ? 'معلمون متخصصون باحتياجاتك' : 'Vetted Specialized Instructors'}</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Main Visual Frame */}
            <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-slate-700/40 via-slate-800/20 to-emerald-500/20 shadow-2xl backdrop-blur-sm border border-slate-700/60 group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-slate-950">
                <img
                  src={getAssetUrl('images/first_hero_student.jpg')}
                  alt="Saudi Student using Next Target Education Platform"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between text-xs text-white backdrop-blur-md bg-slate-900/80 p-3 rounded-xl border border-slate-700/70">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-bold">{t.hero.activeTrackCounter}</span>
                  </div>
                  <span className="text-emerald-400 font-semibold text-[11px]">{BRAND_CONFIG.nameEn}</span>
                </div>
              </div>

              {/* Floating Interactive Badge 1 (Top End) */}
              <div className="absolute -top-4 -end-4 hidden sm:flex items-center gap-2.5 p-3 rounded-2xl bg-slate-900/90 border border-emerald-500/40 shadow-xl backdrop-blur-md animate-bounce duration-1000 motion-reduce:animate-none">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <span className="block text-xs font-bold text-white">
                    {t.hero.floatingTargetBadge}
                  </span>
                  <span className="block text-[10px] text-emerald-400">
                    {language === 'ar' ? 'خطة مذاكرة ذكية' : 'Smart Plan'}
                  </span>
                </div>
              </div>

              {/* Floating Interactive Badge 2 (Bottom Start) */}
              <div className="absolute -bottom-4 -start-4 hidden sm:flex items-center gap-2.5 p-3 rounded-2xl bg-slate-900/95 border border-slate-700 shadow-xl backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <span className="block text-xs font-bold text-white">
                    {t.hero.floatingMentorBadge}
                  </span>
                  <span className="block text-[10px] text-slate-400">
                    {language === 'ar' ? 'نخبة الكفاءات الأكاديمية' : 'Verified Mentors'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
