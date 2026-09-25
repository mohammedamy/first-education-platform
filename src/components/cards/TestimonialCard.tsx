import React from 'react';
import type { Testimonial } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Badge } from '../ui/Badge';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { language } = useLanguage();

  const isAr = language === 'ar';
  const studentName = isAr ? testimonial.studentNameAr : testimonial.studentNameEn;
  const track = isAr ? testimonial.trackAr : testimonial.trackEn;
  const targetSchool = isAr ? testimonial.targetSchoolOrMajorAr : testimonial.targetSchoolOrMajorEn;
  const quote = isAr ? testimonial.quoteAr : testimonial.quoteEn;
  const scoreHighlight = isAr ? testimonial.scoreHighlightAr : testimonial.scoreHighlightEn;
  const prototypeNotice = isAr ? testimonial.prototypeNoticeAr : testimonial.prototypeNoticeEn;

  return (
    <div className="relative flex flex-col p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 text-start">
      {/* Top Header Strip with Prototype Tag */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <Badge variant="amber" size="sm" dot>
          {isAr ? 'تجربة استعراضية تجريبية' : 'Prototype Testimonial'}
        </Badge>
        {scoreHighlight && (
          <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-500/20">
            {scoreHighlight}
          </span>
        )}
      </div>

      {/* Quote Icon & Body */}
      <div className="mb-6 flex-1">
        <Quote className="w-8 h-8 text-emerald-500/30 mb-2 rotate-180" />
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
          {quote}
        </p>
      </div>

      {/* Student Persona Details */}
      <div className="pt-4 border-t border-slate-800/80">
        <h5 className="font-bold text-white text-sm">{studentName}</h5>
        <p className="text-xs text-emerald-400 font-medium mt-0.5">{track}</p>
        <p className="text-[11px] text-slate-400 mt-0.5">{targetSchool}</p>

        {/* Prototype Disclaimer */}
        <p className="text-[10px] text-slate-400 mt-3 italic border-t border-slate-800/50 pt-2">
          * {prototypeNotice}
        </p>
      </div>
    </div>
  );
};
