import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useLanguage } from '../../context/LanguageContext';
import { useTrackSelection } from '../../context/TrackSelectionContext';
import { CheckCircle2, XCircle, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

export const AssessmentQuizModal: React.FC = () => {
  const { language, direction, t } = useLanguage();
  const { isAssessmentModalOpen, setIsAssessmentModalOpen } = useTrackSelection();

  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isAr = language === 'ar';
  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const options = [
    { id: 0, text: t.quizModal.optionA, isCorrect: true },
    { id: 1, text: t.quizModal.optionB, isCorrect: false },
    { id: 2, text: t.quizModal.optionC, isCorrect: false },
    { id: 3, text: t.quizModal.optionD, isCorrect: false },
  ];

  const handleClose = () => {
    setIsAssessmentModalOpen(false);
    setTimeout(() => {
      setSelectedOpt(null);
      setSubmitted(false);
    }, 300);
  };

  return (
    <Modal
      isOpen={isAssessmentModalOpen}
      onClose={handleClose}
      title={t.quizModal.title}
      subtitle={t.quizModal.subtitle}
      maxWidth="md"
    >
      <div className="space-y-6 text-start">
        {/* Sample Question Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
          <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-800 text-xs">
            <Badge variant="emerald" size="sm" dot>
              {isAr ? 'التحصيلي العلمي • الرياضيات' : 'Tahsili Science • Math'}
            </Badge>
            <span className="text-slate-400">
              {isAr ? 'سؤال تشخيصي نموذجي' : 'Diagnostic Model'}
            </span>
          </div>

          <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
            {t.quizModal.questionMath}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          {options.map((opt) => {
            let optionStyles = 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700';

            if (selectedOpt === opt.id) {
              optionStyles = 'bg-emerald-950/60 border-emerald-500 text-white ring-1 ring-emerald-500';
            }

            if (submitted) {
              if (opt.isCorrect) {
                optionStyles = 'bg-emerald-950/80 border-emerald-400 text-emerald-200 ring-2 ring-emerald-400';
              } else if (selectedOpt === opt.id && !opt.isCorrect) {
                optionStyles = 'bg-red-950/80 border-red-500 text-red-200';
              }
            }

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => !submitted && setSelectedOpt(opt.id)}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${optionStyles}`}
              >
                <span>{opt.text}</span>
                {submitted && opt.isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                )}
                {submitted && selectedOpt === opt.id && !opt.isCorrect && (
                  <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation upon submission */}
        {submitted && (
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 text-xs text-slate-200 leading-relaxed animate-in fade-in duration-300">
            <div className="flex items-center gap-1.5 font-bold text-emerald-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>{t.quizModal.congrats}</span>
            </div>
            <p className="mb-2">{t.quizModal.correctExplanation}</p>
            <p className="text-slate-400 text-[11px] border-t border-slate-700/60 pt-2">
              {t.quizModal.encouragement}
            </p>
          </div>
        )}

        {/* Modal Controls */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800">
          <Button variant="secondary" size="md" onClick={handleClose}>
            {t.modals.close}
          </Button>

          {!submitted ? (
            <Button
              variant="primary"
              size="md"
              disabled={selectedOpt === null}
              onClick={() => selectedOpt !== null && setSubmitted(true)}
            >
              {t.quizModal.submit}
            </Button>
          ) : (
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                handleClose();
                const el = document.querySelector('#tracks');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              rightIcon={<ArrowIcon className="w-4 h-4" />}
            >
              {isAr ? 'اختر مسارك الآن' : 'Choose Your Track'}
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};
