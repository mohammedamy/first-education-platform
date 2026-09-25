import React from 'react';
import type { Teacher } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Badge } from '../ui/Badge';
import { Star, Award, BookOpen } from 'lucide-react';

interface TeacherCardProps {
  teacher: Teacher;
  onViewProfile: () => void;
}

export const TeacherCard: React.FC<TeacherCardProps> = ({ teacher, onViewProfile }) => {
  const { language, t } = useLanguage();

  const isAr = language === 'ar';
  const name = isAr ? teacher.nameAr : teacher.nameEn;
  const title = isAr ? teacher.titleAr : teacher.titleEn;
  const subjectName = isAr ? teacher.subjectNameAr : teacher.subjectNameEn;
  const specialty = isAr ? teacher.specialtyAr : teacher.specialtyEn;
  const experience = isAr ? teacher.experienceAr : teacher.experienceEn;
  const demoBadge = isAr ? teacher.demoBadgeAr : teacher.demoBadgeEn;

  return (
    <div className="group relative flex flex-col rounded-3xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 text-start hover:-translate-y-1.5">
      {/* Teacher Portrait */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-950">
        <img
          src={teacher.avatar}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

        {/* Mandatory Demo Content Tag */}
        <div className="absolute top-4 start-4">
          <Badge variant="amber" size="sm" dot>
            {demoBadge}
          </Badge>
        </div>

        {/* Subject Pill */}
        <div className="absolute bottom-3 start-4 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md">
          <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-xs font-bold text-white">{subjectName}</span>
        </div>
      </div>

      {/* Teacher Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h4 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
            {name}
          </h4>
          <span className="flex items-center gap-1 text-xs font-semibold text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded-md border border-amber-500/20 shrink-0">
            <Star className="w-3 h-3 fill-amber-400" />
            <span>4.9</span>
          </span>
        </div>

        <p className="text-xs text-emerald-400 font-semibold mb-3">
          {title}
        </p>

        {/* Specialty */}
        <div className="mb-3 text-xs">
          <span className="text-slate-400 font-medium block mb-0.5">
            {t.teachers.specialtyLabel}
          </span>
          <span className="text-slate-200 leading-snug block">
            {specialty}
          </span>
        </div>

        {/* Experience Notice */}
        <div className="mt-auto pt-3 border-t border-slate-800 text-[11px] text-slate-400 mb-4 flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate">{experience}</span>
        </div>

        <button
          type="button"
          onClick={onViewProfile}
          className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700/90 border border-slate-700 transition-colors cursor-pointer"
        >
          {isAr ? 'عرض الملف التجريبي' : 'View Demo Profile'}
        </button>
      </div>
    </div>
  );
};
