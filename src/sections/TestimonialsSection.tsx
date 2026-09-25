import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TestimonialCard } from '../components/cards/TestimonialCard';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { AlertCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.testimonials.sectionBadge}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        {/* Prototype Notice */}
        <div className="max-w-2xl mx-auto -mt-6 mb-12 p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center gap-2.5 text-center text-xs text-slate-400">
          <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{t.testimonials.demoNotice}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
