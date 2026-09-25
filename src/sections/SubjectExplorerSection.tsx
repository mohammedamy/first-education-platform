import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTrackSelection } from '../context/TrackSelectionContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { SubjectCard } from '../components/cards/SubjectCard';
import { SUBJECTS_DATA } from '../data/subjects';
import { TRACKS_DATA } from '../data/tracks';
import type { Subject } from '../types';

export const SubjectExplorerSection: React.FC = () => {
  const { language, t } = useLanguage();
  const { selectedTrackId, setSelectedTrackId, setActiveSubjectModal } = useTrackSelection();

  const isAr = language === 'ar';

  const filterTabs = [
    { id: 'all', label: t.subjects.allCategory },
    ...TRACKS_DATA.map((tr) => ({
      id: tr.id,
      label: isAr ? tr.nameAr : tr.nameEn,
    })),
  ];

  const filteredSubjects =
    selectedTrackId === 'all'
      ? SUBJECTS_DATA
      : SUBJECTS_DATA.filter((s) => s.tracks.includes(selectedTrackId));

  return (
    <section id="subjects" className="py-20 sm:py-28 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.subjects.sectionBadge}
          title={t.subjects.title}
          subtitle={t.subjects.subtitle}
        />

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = selectedTrackId === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedTrackId(tab.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSubjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onExplore={() => setActiveSubjectModal(subject)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
