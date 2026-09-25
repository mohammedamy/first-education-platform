import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { useTrackSelection } from '../../context/TrackSelectionContext';
import { CheckCircle2, Send, User, Mail, Phone, BookOpen } from 'lucide-react';
import { SUBJECTS_DATA } from '../../data/subjects';

export const TeacherApplicationModal: React.FC = () => {
  const { language, t } = useLanguage();
  const { isJoinTeacherModalOpen, setIsJoinTeacherModalOpen } = useTrackSelection();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'math',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isAr = language === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setIsJoinTeacherModalOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'math',
        notes: '',
      });
    }, 300);
  };

  return (
    <Modal
      isOpen={isJoinTeacherModalOpen}
      onClose={handleClose}
      title={t.modals.teacherApplyTitle}
      subtitle={t.modals.teacherApplySubtitle}
      maxWidth="md"
    >
      {isSubmitted ? (
        <div className="py-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">
            {isAr ? 'تم استلام طلبك بنجاح!' : 'Application Received!'}
          </h4>
          <p className="text-sm text-slate-300 max-w-sm mb-6 leading-relaxed">
            {t.modals.applicationSuccess}
          </p>
          <Button variant="primary" size="md" onClick={handleClose}>
            {t.modals.close}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              {t.modals.namePlaceholder} <span className="text-emerald-400">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute top-3 start-3" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={isAr ? 'د. محمد العتيبي' : 'Dr. Mohammed Al-Otaibi'}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl py-2.5 ps-10 pe-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.modals.emailPlaceholder} <span className="text-emerald-400">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute top-3 start-3" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="teacher@example.com"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl py-2.5 ps-10 pe-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.modals.phonePlaceholder} <span className="text-emerald-400">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute top-3 start-3" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="050xxxxxxx"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl py-2.5 ps-10 pe-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              {t.modals.subjectSelect} <span className="text-emerald-400">*</span>
            </label>
            <div className="relative">
              <BookOpen className="w-4 h-4 text-slate-400 absolute top-3 start-3" />
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl py-2.5 ps-10 pe-4 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 cursor-pointer"
              >
                {SUBJECTS_DATA.map((s) => (
                  <option key={s.id} value={s.id}>
                    {isAr ? s.nameAr : s.nameEn}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              {isAr ? 'نبذة عن خبرتك التدريسية وسنوات التدريب' : 'Teaching & Tutoring Experience'}
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder={
                isAr
                  ? 'سنوات الخبرة، طبيعة التدريس (تحصيلي، قدرات، جامعي)، والشهادات المهنية...'
                  : 'Years of experience in Saudi standardized tests or university tutoring...'
              }
              className="w-full bg-slate-950 border border-slate-700 rounded-xl py-2.5 px-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
            <Button variant="secondary" size="md" type="button" onClick={handleClose}>
              {t.modals.close}
            </Button>
            <Button
              variant="emerald"
              size="md"
              type="submit"
              isLoading={isLoading}
              rightIcon={<Send className="w-4 h-4" />}
            >
              {t.modals.submitApplication}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
