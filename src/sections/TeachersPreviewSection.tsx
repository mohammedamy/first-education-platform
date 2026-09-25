import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTrackSelection } from '../context/TrackSelectionContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TeacherCard } from '../components/cards/TeacherCard';
import { Button } from '../components/ui/Button';
import { TEACHERS_DATA } from '../data/teachers';
import { UserPlus, AlertCircle } from 'lucide-react';
import type { Teacher } from '../types';

export const TeachersPreviewSection: React.FC = () => {
  const { t } = useLanguage();
  const { setActiveTeacherModal, setIsJoinTeacherModalOpen } = useTrackSelection();

  const handleViewProfile = (teacher: Teacher) => {
    setActiveTeacherModal(teacher);
  };

  return (
    <section id="teachers" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.teachers.sectionBadge}
          title={t.teachers.title}
          subtitle={t.teachers.subtitle}
        />

        {/* Demo Notice Disclaimer Bar */}
        <div className="max-w-2xl mx-auto -mt-6 mb-12 p-3 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-center gap-2 text-center text-xs text-amber-300">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
          <span>{t.teachers.demoNotice}</span>
        </div>

        {/* Teachers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-14">
          {TEACHERS_DATA.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
              onViewProfile={() => handleViewProfile(teacher)}
            />
          ))}
        </div>

        {/* Join As Teacher Recruitment Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/60 border border-slate-800 hover:border-emerald-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-start transition-all">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">
              {t.teachers.joinAsTeacherTitle}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.teachers.joinAsTeacherDesc}
            </p>
          </div>

          <Button
            variant="emerald"
            size="lg"
            onClick={() => setIsJoinTeacherModalOpen(true)}
            leftIcon={<UserPlus className="w-4 h-4" />}
            className="shrink-0 cursor-pointer"
          >
            {t.teachers.joinAsTeacherBtn}
          </Button>
        </div>
      </div>
    </section>
  );
};
