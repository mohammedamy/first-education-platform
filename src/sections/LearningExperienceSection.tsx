import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import {
  Play,
  CheckCircle2,
  XCircle,
  Clock,
  Calendar,
  BrainCircuit,
  ArrowRight,
  ArrowLeft,
  Award,
} from 'lucide-react';

export const LearningExperienceSection: React.FC = () => {
  const { language, direction, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'quiz' | 'masterclass'>('overview');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);

  const isAr = language === 'ar';
  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
  };

  const handleResetQuiz = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
  };

  return (
    <section id="learning-experience" className="py-20 sm:py-28 bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.learningExp.sectionBadge}
          title={t.learningExp.title}
          subtitle={t.learningExp.subtitle}
        />

        {/* Device Image Feature Showcase */}
        <div className="relative mb-14 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
          <div className="relative aspect-[16/9] w-full max-h-[550px] overflow-hidden bg-slate-950">
            <img
              src="/images/first_learning_mockup.jpg"
              alt="First Student Learning Cockpit Mockup"
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-101 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Bottom floating explanation bar */}
            <div className="absolute bottom-6 start-6 end-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md">
              <div className="text-start">
                <span className="text-xs font-bold text-emerald-400 block">
                  {isAr ? 'بيئة التعلّم الذكية — محاكاة تجريبية' : 'Smart Learning Environment — UI Prototype'}
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                  {isAr
                    ? 'صممت واجهة الطالب لتدمج بين الرسوم البيانية لقياس إتقان المهارات والحل الفوري للأسئلة.'
                    : 'The student interface unifies skill mastery radar metrics, video lectures, and instant drill feedback.'}
                </p>
              </div>
              <Badge variant="emerald" dot className="shrink-0">
                {isAr ? 'الجيل القادم' : 'Next-Gen UI'}
              </Badge>
            </div>
          </div>
        </div>

        {/* Live Interactive Cockpit Widget Preview */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          {/* Cockpit Mode Tabs */}
          <div className="flex items-center justify-center sm:justify-start flex-wrap gap-2 pb-6 mb-6 border-b border-slate-800">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white'
              }`}
            >
              {t.learningExp.tabOverview}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('quiz')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white'
              }`}
            >
              {t.learningExp.tabQuiz}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('masterclass')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'masterclass'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white'
              }`}
            >
              {t.learningExp.tabMasterclass}
            </button>
          </div>

          {/* TAB 1: OVERVIEW COCKPIT */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-start animate-in fade-in duration-300">
              {/* Progress Summary Card */}
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-slate-400">
                      {t.learningExp.courseProgressTitle}
                    </span>
                    <Badge variant="emerald" size="sm">
                      +95% Target
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-black text-white">78%</span>
                    <span className="text-xs text-emerald-400 font-semibold">
                      {isAr ? 'مستوى الإتقان التراكمي' : 'Cumulative Mastery'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden mb-6">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full w-[78%]" />
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800 pt-4">
                  <div className="flex justify-between">
                    <span>{isAr ? 'الرياضيات والكمي' : 'Math & Quantitative'}:</span>
                    <span className="font-bold text-white">88%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isAr ? 'الفيزياء والميكانيكا' : 'Physics & Mechanics'}:</span>
                    <span className="font-bold text-white">82%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isAr ? 'الكيمياء والأحياء' : 'Chemistry & Biology'}:</span>
                    <span className="font-bold text-white">74%</span>
                  </div>
                </div>
              </div>

              {/* Upcoming Lesson Card */}
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-400">
                      {t.learningExp.upcomingLessonTitle}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/20">
                      <Clock className="w-3 h-3" />
                      <span>{isAr ? 'اليوم 8:00 مساءً' : 'Today 8:00 PM'}</span>
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {isAr
                      ? 'ماستركلاس: استراتيجيات حل أسئلة التفاضل والتكامل السريعة'
                      : 'Masterclass: High-Speed Calculus & Derivatives Strategies'}
                  </h4>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    {isAr
                      ? 'مع أ. سارة القحطاني — مناقشة 25 نمطاً متكرراً في تجميعات التحصيلي الحديثة.'
                      : 'With Sarah Al-Qahtani — Deconstructing 25 high-yield patterns from recent Tahsili papers.'}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-slate-800">
                  <Button variant="emerald" size="sm" leftIcon={<Play className="w-3.5 h-3.5" />}>
                    {isAr ? 'دخول البث المباشر' : 'Join Live Class'}
                  </Button>
                  <span className="text-[11px] text-slate-400">
                    {isAr ? 'محاضرة تفاعلية' : 'Interactive'}
                  </span>
                </div>
              </div>

              {/* Recommended Next Step Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-slate-950/80 border border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BrainCircuit className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      {t.learningExp.recommendedNextStepTitle}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {isAr ? 'اختبار تقييمي قصير في قوانين الحركة' : 'Diagnostic Drill: Newton’s Laws of Motion'}
                  </h4>
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    {t.learningExp.recommendedNextStepDesc}
                  </p>
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setActiveTab('quiz')}
                  rightIcon={<ArrowIcon className="w-3.5 h-3.5" />}
                >
                  {t.learningExp.startPracticeNow}
                </Button>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE PRACTICE QUIZ */}
          {activeTab === 'quiz' && (
            <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-start animate-in fade-in duration-300">
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    {isAr ? 'التحصيلي • الرياضيات' : 'Tahsili • Math'}
                  </span>
                  <span className="text-xs text-slate-400">
                    {isAr ? 'سؤال تفاعلي حي' : 'Live Interactive Question'}
                  </span>
                </div>
                <span className="text-xs text-slate-400">1 / 1</span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-white mb-6 leading-relaxed">
                {isAr
                  ? 'إذا كانت الدالة د(س) = 3س² - 6س + 4، فما هي النقطة الحرجة للدالة؟'
                  : 'For the function f(x) = 3x² - 6x + 4, what is the critical x-value?'}
              </h4>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {[
                  { id: 0, text: isAr ? 'س = 1' : 'x = 1', isCorrect: true },
                  { id: 1, text: isAr ? 'س = 2' : 'x = 2', isCorrect: false },
                  { id: 2, text: isAr ? 'س = -1' : 'x = -1', isCorrect: false },
                  { id: 3, text: isAr ? 'س = 3' : 'x = 3', isCorrect: false },
                ].map((opt) => {
                  let optionStyles = 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700';

                  if (selectedOption === opt.id) {
                    optionStyles = 'bg-emerald-950/60 border-emerald-500 text-white ring-1 ring-emerald-500';
                  }

                  if (isAnswerSubmitted) {
                    if (opt.isCorrect) {
                      optionStyles = 'bg-emerald-950/80 border-emerald-400 text-emerald-200 ring-2 ring-emerald-400';
                    } else if (selectedOption === opt.id && !opt.isCorrect) {
                      optionStyles = 'bg-red-950/80 border-red-500 text-red-200';
                    }
                  }

                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${optionStyles}`}
                    >
                      <span className="font-semibold text-sm">{opt.text}</span>
                      {isAnswerSubmitted && opt.isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      )}
                      {isAnswerSubmitted && selectedOption === opt.id && !opt.isCorrect && (
                        <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Action and Instant Feedback */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-800">
                {!isAnswerSubmitted ? (
                  <Button
                    variant="primary"
                    size="md"
                    disabled={selectedOption === null}
                    onClick={handleSubmitAnswer}
                  >
                    {t.learningExp.submitAnswer}
                  </Button>
                ) : (
                  <Button variant="secondary" size="md" onClick={handleResetQuiz}>
                    {isAr ? 'إعادة تجربة السؤال' : 'Retry Question'}
                  </Button>
                )}

                {isAnswerSubmitted && (
                  <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      {isAr
                        ? 'إجابة صحيحة! نجد النقطة الحرجة بمساواة المشتقة الأولى بالصفر: 6س - 6 = 0 ⇒ س = 1.'
                        : 'Correct! Set f\'(x) = 0: 6x - 6 = 0 ⇒ x = 1.'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: MASTERCLASS DETAILS */}
          {activeTab === 'masterclass' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start animate-in fade-in duration-300">
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
                <Badge variant="purple" size="sm" className="mb-3">
                  {isAr ? 'بث مباشر تفاعلي' : 'Live Interactive Session'}
                </Badge>
                <h4 className="text-xl font-bold text-white mb-2">
                  {isAr
                    ? 'ورشة تفكيك أنماط تجميعات القدرات (القسم الكمي)'
                    : 'Qudrat Quantitative Pattern Deconstruction Workshop'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {isAr
                    ? 'جلسة حية مكثفة نراجع فيها أحدث 50 سؤالاً من الاختبارات المحوسبة والورقية مع استراتيجيات الحل الذهني الخاطف.'
                    : 'Intensive masterclass dissecting 50 recent computerized aptitude exam patterns with mental shortcuts.'}
                </p>

                <div className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>{isAr ? 'الخميس القادم • 7:30 مساءً' : 'Next Thursday • 7:30 PM'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <span>{isAr ? 'المدة: 90 دقيقة تدريبية' : 'Duration: 90 Minutes'}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-400 block mb-2">
                    {isAr ? 'المحاضر المعتمد للماستركلاس' : 'Masterclass Instructor'}
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="/images/first_teacher_khalid.jpg"
                      alt="Teacher"
                      className="w-12 h-12 rounded-xl object-cover border border-slate-700"
                    />
                    <div>
                      <h5 className="font-bold text-white text-sm">
                        {isAr ? 'أ. خالد المطيري' : 'Khalid Al-Mutairi'}
                      </h5>
                      <span className="text-xs text-emerald-400">
                        {isAr ? 'خبير القدرات — نموذج تجريبي' : 'Aptitude Mentor — Demo'}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {isAr
                      ? 'يشمل الماستركلاس ملزمة PDF حصرية للتمارين وبنك أسئلة رقمي تفاعلي لكل طالب.'
                      : 'Includes exclusive PDF drill sheet and instant companion digital quiz.'}
                  </p>
                </div>

                <Button variant="emerald" size="md" leftIcon={<Award className="w-4 h-4" />}>
                  {isAr ? 'حجز مقعد تجريبي' : 'Reserve Demo Seat'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
