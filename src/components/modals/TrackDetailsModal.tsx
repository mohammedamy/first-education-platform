import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { IconHelper } from '../ui/IconHelper';
import { useLanguage } from '../../context/LanguageContext';
import { useTrackSelection } from '../../context/TrackSelectionContext';
import { SUBJECTS_DATA } from '../../data/subjects';
import { CheckCircle2, Clock, Users, ArrowRight, ArrowLeft } from 'lucide-react';

export const TrackDetailsModal: React.FC = () => {
  const { language, direction, t } = useLanguage();
  const { activeTrackModal, setActiveTrackModal, setSelectedTrackId } = useTrackSelection();

  if (!activeTrackModal) return null;

  const isAr = language === 'ar';
  const name = isAr ? activeTrackModal.nameAr : activeTrackModal.nameEn;
  const description = isAr ? activeTrackModal.descriptionAr : activeTrackModal.descriptionEn;
  const features = isAr ? activeTrackModal.featuresAr : activeTrackModal.featuresEn;
  const targetAudience = isAr ? activeTrackModal.targetAudienceAr : activeTrackModal.targetAudienceEn;

  const includedSubjects = SUBJECTS_DATA.filter((s) => activeTrackModal.subjects.includes(s.id));
  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const handleEnrollTrack = () => {
    setSelectedTrackId(activeTrackModal.id);
    setActiveTrackModal(null);
    const element = document.querySelector('#subjects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Modal
      isOpen={!!activeTrackModal}
      onClose={() => setActiveTrackModal(null)}
      title={name}
      subtitle={isAr ? activeTrackModal.taglineAr : activeTrackModal.taglineEn}
      maxWidth="xl"
    >
      <div className="space-y-6">
        {/* Banner with stats */}
        <div className="relative rounded-2xl overflow-hidden h-44 bg-slate-950 border border-slate-800">
          <img
            src={activeTrackModal.image}
            alt={name}
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between">
            <Badge variant="emerald" dot>
              {isAr ? activeTrackModal.badgeAr : activeTrackModal.badgeEn}
            </Badge>
            <div className="flex gap-2">
              {activeTrackModal.stats.map((st, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-[11px] font-bold text-white border border-slate-700/80 backdrop-blur-md"
                >
                  {st.value}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
            {isAr ? 'عن المسار الأكاديمي' : 'About Track Curriculum'}
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Target Audience */}
        <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
          <span className="block text-xs font-bold text-emerald-400 mb-1">
            {t.tracks.targetAudienceLabel}
          </span>
          <p className="text-xs text-slate-300">
            {targetAudience}
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
            {isAr ? 'ماذا ستحقق في هذا المسار؟' : 'Track Outcomes'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 text-xs text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Included Subjects */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
            {t.tracks.exploreSubjects}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {includedSubjects.map((subj) => (
              <div
                key={subj.id}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/70 border border-slate-700"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <IconHelper name={subj.iconName} className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="font-bold text-white text-xs truncate">
                    {isAr ? subj.nameAr : subj.nameEn}
                  </h5>
                  <span className="text-[11px] text-slate-400">
                    {subj.topics.length} {isAr ? 'وحدات تدريبية' : 'Curriculum Units'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Action */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <Button
            variant="secondary"
            size="md"
            onClick={() => setActiveTrackModal(null)}
          >
            {t.modals.close}
          </Button>

          <Button
            variant="primary"
            size="md"
            onClick={handleEnrollTrack}
            rightIcon={<ArrowIcon className="w-4 h-4" />}
          >
            {isAr ? 'اختيار المسار واستكشاف مواده' : 'Select Track & View Subjects'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
