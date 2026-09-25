import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useLanguage } from '../../context/LanguageContext';
import { useTrackSelection } from '../../context/TrackSelectionContext';
import { Star, Award, BookOpen, AlertCircle, Calendar } from 'lucide-react';
import { getAssetUrl } from '../../utils/assets';

export const TeacherProfileModal: React.FC = () => {
  const { language, t } = useLanguage();
  const { activeTeacherModal, setActiveTeacherModal } = useTrackSelection();

  if (!activeTeacherModal) return null;

  const isAr = language === 'ar';
  const name = isAr ? activeTeacherModal.nameAr : activeTeacherModal.nameEn;
  const title = isAr ? activeTeacherModal.titleAr : activeTeacherModal.titleEn;
  const specialty = isAr ? activeTeacherModal.specialtyAr : activeTeacherModal.specialtyEn;
  const experience = isAr ? activeTeacherModal.experienceAr : activeTeacherModal.experienceEn;
  const subjectName = isAr ? activeTeacherModal.subjectNameAr : activeTeacherModal.subjectNameEn;

  return (
    <Modal
      isOpen={!!activeTeacherModal}
      onClose={() => setActiveTeacherModal(null)}
      title={name}
      subtitle={title}
      maxWidth="md"
    >
      <div className="space-y-6 text-start">
        {/* Profile Card Header */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
          <img
            src={getAssetUrl(activeTeacherModal.avatar)}
            alt={name}
            className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-500/30 shrink-0"
          />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="amber" size="sm" dot>
                {isAr ? 'نموذج تجريبي' : 'Demo Profile'}
              </Badge>
              <span className="flex items-center gap-1 text-xs font-bold text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>4.9</span>
              </span>
            </div>
            <h4 className="text-lg font-black text-white">{name}</h4>
            <p className="text-xs text-emerald-400 font-semibold">{subjectName}</p>
          </div>
        </div>

        {/* Demo Disclaimer */}
        <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center gap-2 text-xs text-amber-300">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
          <span>
            {isAr
              ? 'هذا الملف التعريفي هو نموذج استعراضي للمرحلة التأسيسية، وسيتم ربطه بملفات المعلمين المعتمدين عند إطلاق بوابة المعلم.'
              : 'This profile is an illustrative demonstration for Phase 1 and will link to verified educator profiles upon portal launch.'}
          </span>
        </div>

        {/* Specialty & Teaching Focus */}
        <div>
          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
            {t.teachers.specialtyLabel}
          </h5>
          <p className="text-sm text-slate-200 leading-relaxed bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
            {specialty}
          </p>
        </div>

        {/* Experience Notice */}
        <div>
          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
            {t.teachers.experienceLabel}
          </h5>
          <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
            <Award className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{experience}</span>
          </div>
        </div>

        {/* Upcoming Teaching Sessions */}
        <div>
          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            {isAr ? 'المقررات وورش العمل القادمة' : 'Upcoming Courses & Workshops'}
          </h5>
          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span className="text-white font-medium">
                  {isAr ? `تأسيس ${subjectName} للتحصيلي` : `${subjectName} Foundation for Tahsili`}
                </span>
              </div>
              <span className="text-slate-400 text-[11px]">
                {isAr ? 'قريباً' : 'Coming Soon'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sky-400" />
                <span className="text-white font-medium">
                  {isAr ? 'ورشة تفكيك أنماط التجميعات الحديثة' : 'Modern Past Papers Workshop'}
                </span>
              </div>
              <span className="text-emerald-400 text-[11px] font-semibold">
                {isAr ? 'بث مباشر' : 'Live Stream'}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <Button variant="secondary" size="md" onClick={() => setActiveTeacherModal(null)}>
            {t.modals.close}
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={() => {
              setActiveTeacherModal(null);
              const el = document.querySelector('#learning-experience');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {isAr ? 'استعراض ورشة العمل التجريبية' : 'Preview Demo Workshop'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
