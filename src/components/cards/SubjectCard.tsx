import React from 'react';
import type { Subject } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { IconHelper } from '../ui/IconHelper';
import { Clock, HelpCircle, BookOpen, ArrowLeft, ArrowRight } from 'lucide-react';
import { TRACKS_DATA } from '../../data/tracks';

interface SubjectCardProps {
  subject: Subject;
  onExplore: () => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onExplore }) => {
  const { language, direction, t } = useLanguage();

  const isAr = language === 'ar';
  const name = isAr ? subject.nameAr : subject.nameEn;
  const description = isAr ? subject.descriptionAr : subject.descriptionEn;

  // Resolve matching tracks
  const matchedTracks = TRACKS_DATA.filter((tr) => subject.tracks.includes(tr.id));

  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="group relative flex flex-col rounded-3xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 text-start hover:-translate-y-1.5">
      {/* Subject Visual Header */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-950">
        <img
          src={subject.image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

        {/* Floating Subject Icon Badge */}
        <div className="absolute bottom-3 start-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md">
          <IconHelper name={subject.iconName} className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold text-white">{name}</span>
        </div>
      </div>

      {/* Subject Details */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2 mb-2">
          <h4 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
            {name}
          </h4>
          <span className="text-xs text-slate-400 font-medium">
            {isAr ? subject.nameEn : subject.nameAr}
          </span>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>

        {/* Tracks mapping tags */}
        <div className="mb-4">
          <span className="block text-[11px] text-slate-400 font-semibold mb-1.5">
            {t.subjects.inTracks}
          </span>
          <div className="flex flex-wrap gap-1">
            {matchedTracks.map((tr) => (
              <span
                key={tr.id}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
              >
                {isAr ? tr.nameAr : tr.nameEn}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800/50 border border-slate-700/40 mt-auto mb-4 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-1 text-slate-400 text-[10px]">
              <Clock className="w-3 h-3 text-emerald-400" />
              <span>{isAr ? 'ساعات' : 'Hours'}</span>
            </div>
            <span className="text-xs font-bold text-white mt-0.5">
              {subject.estimatedHours}h
            </span>
          </div>

          <div className="flex flex-col items-center justify-center border-x border-slate-700/60">
            <div className="flex items-center gap-1 text-slate-400 text-[10px]">
              <HelpCircle className="w-3 h-3 text-sky-400" />
              <span>{isAr ? 'تمارين' : 'Questions'}</span>
            </div>
            <span className="text-xs font-bold text-white mt-0.5">
              +{subject.sampleQuestionCount}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-1 text-slate-400 text-[10px]">
              <BookOpen className="w-3 h-3 text-amber-400" />
              <span>{isAr ? 'وحدات' : 'Units'}</span>
            </div>
            <span className="text-xs font-bold text-white mt-0.5">
              {subject.topics.length}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={onExplore}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-800 hover:bg-emerald-500 text-slate-200 hover:text-slate-950 border border-slate-700 hover:border-emerald-400 transition-all duration-200 cursor-pointer"
        >
          <span>{t.subjects.exploreCurriculum}</span>
          <ArrowIcon className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
