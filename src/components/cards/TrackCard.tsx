import React from 'react';
import type { Track } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { IconHelper } from '../ui/IconHelper';
import { Badge } from '../ui/Badge';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { SUBJECTS_DATA } from '../../data/subjects';

interface TrackCardProps {
  track: Track;
  isSelected?: boolean;
  onSelect: () => void;
  onViewDetails: () => void;
}

export const TrackCard: React.FC<TrackCardProps> = ({
  track,
  isSelected = false,
  onSelect,
  onViewDetails,
}) => {
  const { language, direction, t } = useLanguage();

  const isAr = language === 'ar';
  const name = isAr ? track.nameAr : track.nameEn;
  const tagline = isAr ? track.taglineAr : track.taglineEn;
  const description = isAr ? track.descriptionAr : track.descriptionEn;
  const badge = isAr ? track.badgeAr : track.badgeEn;
  const targetAudience = isAr ? track.targetAudienceAr : track.targetAudienceEn;
  const cta = isAr ? track.ctaAr : track.ctaEn;

  // Resolve subjects for this track
  const trackSubjects = SUBJECTS_DATA.filter((s) => track.subjects.includes(s.id));

  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;
  const ChevronIcon = direction === 'rtl' ? ChevronLeft : ChevronRight;

  return (
    <div
      className={`group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 border text-start ${
        isSelected
          ? 'bg-slate-900/95 border-emerald-500 shadow-[0_0_35px_rgba(16,185,129,0.25)] ring-2 ring-emerald-500/30 -translate-y-2'
          : 'bg-slate-900/80 border-slate-800 hover:border-slate-600/80 hover:bg-slate-900 hover:-translate-y-1.5 hover:shadow-2xl'
      }`}
    >
      {/* Top Banner Image with Gradient Overlay */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-950">
        <img
          src={track.image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

        {/* Category Badge & Icon */}
        <div className="absolute top-4 start-4 end-4 flex items-center justify-between">
          <Badge variant="emerald" dot>
            {badge}
          </Badge>
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/15 shadow-lg"
            style={{ backgroundColor: `${track.accentColor}25` }}
          >
            <IconHelper name={track.iconName} className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Selected Indicator Pill */}
        {isSelected && (
          <div className="absolute bottom-3 start-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold shadow-lg">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isAr ? 'المسار المحدد حالياً' : 'Active Selection'}</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        {/* Title & Tagline */}
        <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">
          {name}
        </h3>
        <p className="text-emerald-400/90 text-sm font-semibold mt-1 mb-3">
          {tagline}
        </p>
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 mb-5">
          {description}
        </p>

        {/* Stats Strip */}
        <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/50 mb-5">
          {track.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <span className="block text-xs font-bold text-white">
                {stat.value}
              </span>
              <span className="block text-[11px] text-slate-400 mt-0.5">
                {isAr ? stat.labelAr : stat.labelEn}
              </span>
            </div>
          ))}
        </div>

        {/* Included Subjects Interactive Pills */}
        <div className="mb-6">
          <span className="block text-xs font-semibold text-slate-400 mb-2.5">
            {t.tracks.exploreSubjects}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {trackSubjects.map((s) => (
              <span
                key={s.id}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700/70 group-hover:border-slate-600 transition-colors"
              >
                <IconHelper name={s.iconName} className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isAr ? s.nameAr : s.nameEn}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Target Audience Hint */}
        <div className="mt-auto pt-4 border-t border-slate-800/80 mb-5">
          <span className="block text-[11px] text-slate-400 font-semibold mb-1">
            {t.tracks.targetAudienceLabel}
          </span>
          <span className="block text-xs text-slate-300 leading-snug">
            {targetAudience}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={onSelect}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              isSelected
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 border border-emerald-500/30'
            }`}
          >
            <span>{cta}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={onViewDetails}
            className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all cursor-pointer"
          >
            <span>{t.tracks.viewDetails}</span>
            <ChevronIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
