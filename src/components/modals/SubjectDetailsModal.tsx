import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useLanguage } from '../../context/LanguageContext';
import { useTrackSelection } from '../../context/TrackSelectionContext';
import { Clock, HelpCircle, BookOpen } from 'lucide-react';
import { TRACKS_DATA } from '../../data/tracks';
import { getAssetUrl } from '../../utils/assets';

export const SubjectDetailsModal: React.FC = () => {
  const { language, t } = useLanguage();
  const { activeSubjectModal, setActiveSubjectModal } = useTrackSelection();

  if (!activeSubjectModal) return null;

  const isAr = language === 'ar';
  const name = isAr ? activeSubjectModal.nameAr : activeSubjectModal.nameEn;
  const description = isAr ? activeSubjectModal.descriptionAr : activeSubjectModal.descriptionEn;
  const matchedTracks = TRACKS_DATA.filter((tr) => activeSubjectModal.tracks.includes(tr.id));

  return (
    <Modal
      isOpen={!!activeSubjectModal}
      onClose={() => setActiveSubjectModal(null)}
      title={name}
      subtitle={isAr ? `الخطة التعليمية الشاملة لمادة ${name}` : `Comprehensive Syllabus for ${name}`}
      maxWidth="lg"
    >
      <div className="space-y-6">
        {/* Visual Banner */}
        <div className="relative rounded-2xl overflow-hidden h-40 bg-slate-950 border border-slate-800">
          <img
            src={getAssetUrl(activeSubjectModal.image)}
            alt={name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          <div className="absolute bottom-3 start-4 flex items-center gap-2">
            {matchedTracks.map((tr) => (
              <Badge key={tr.id} variant="emerald" size="sm">
                {isAr ? tr.nameAr : tr.nameEn}
              </Badge>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed">
          {description}
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
          <div>
            <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isAr ? 'ساعات مقترحة' : 'Hours'}</span>
            </div>
            <span className="text-sm font-bold text-white mt-0.5 block">
              {activeSubjectModal.estimatedHours} {isAr ? 'ساعة' : 'hrs'}
            </span>
          </div>

          <div className="border-x border-slate-800">
            <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
              <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
              <span>{isAr ? 'بنك الأسئلة' : 'Questions'}</span>
            </div>
            <span className="text-sm font-bold text-white mt-0.5 block">
              +{activeSubjectModal.sampleQuestionCount} {isAr ? 'سؤال' : 'drills'}
            </span>
          </div>

          <div>
            <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>{isAr ? 'الوحدات' : 'Units'}</span>
            </div>
            <span className="text-sm font-bold text-white mt-0.5 block">
              {activeSubjectModal.topics.length} {isAr ? 'وحدات' : 'units'}
            </span>
          </div>
        </div>

        {/* Detailed Curriculum Units List */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
            {isAr ? 'الوحدات والموضوعات التدريبية' : 'Curriculum Units & Topics'}
          </h4>
          <div className="space-y-2.5">
            {activeSubjectModal.topics.map((topic, index) => {
              const topicTitle = isAr ? topic.titleAr : topic.titleEn;
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-200"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-[11px]">
                      {index + 1}
                    </span>
                    <span className="font-semibold">{topicTitle}</span>
                  </div>
                  <span className="text-slate-400 text-[11px] shrink-0">
                    {topic.lessonsCount} {isAr ? 'درس وورشة' : 'lessons'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <Button
            variant="secondary"
            size="md"
            onClick={() => setActiveSubjectModal(null)}
          >
            {t.modals.close}
          </Button>

          <Button
            variant="primary"
            size="md"
            onClick={() => {
              setActiveSubjectModal(null);
              const el = document.querySelector('#learning-experience');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {isAr ? 'تجربة التمارين العملية' : 'Practice Subject Drills'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
