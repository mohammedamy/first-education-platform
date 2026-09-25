import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useLanguage } from '../../context/LanguageContext';
import { useTrackSelection } from '../../context/TrackSelectionContext';
import { CheckCircle2, User, Users, GraduationCap, Bell } from 'lucide-react';

export const FutureAccountModal: React.FC = () => {
  const { language, t } = useLanguage();
  const { futureAccountModal, closeFutureAccountModal } = useTrackSelection();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  if (!futureAccountModal.isOpen) return null;

  const isAr = language === 'ar';
  const role = futureAccountModal.role;

  const roleDetails = {
    student: {
      phase: 'Phase 2',
      titleAr: 'بوابة الطالب الذكية',
      titleEn: 'Student Learning Portal',
      icon: GraduationCap,
      featuresAr: [
        'خطة دراسية شخصية متكيفة مع موعد اختبارك في قياس',
        'مكتبة الدروس التفاعلية وشروحات التجميعات المسجلة',
        'بنك أسئلة متدرج الصعوبة مع تحليلات فورية للسرعة والدقة',
        'جدول الحصص المباشرة والماستركلاس مع كبار المعلمين',
      ],
      featuresEn: [
        'Adaptive personalized study roadmap calibrated to your Qiyas test date',
        'Interactive on-demand video vault of micro-lessons and past exam solves',
        'Adaptive tiered question bank with real-time accuracy and pacing benchmarks',
        'Live masterclass scheduler and interactive tutoring office hours',
      ],
    },
    parent: {
      phase: 'Phase 6',
      titleAr: 'بوابة ولي الأمر للمتابعة',
      titleEn: 'Parent Monitoring Portal',
      icon: Users,
      featuresAr: [
        'تقارير أسبوعية وشهرية توضح معدل إنجاز وساعات مذاكرة الأبناء',
        'مؤشرات جاهزية الطالب لاختبارات التحصيلي والقدرات بالأرقام',
        'إشعارات فورية بنتائج الاختبارات التجريبية ومحاكاة قياس',
        'إمكانية إدارة الاشتراكات وخيارات الدفع السعودية بسهولة',
      ],
      featuresEn: [
        'Weekly and monthly reports detailing study hours and completion velocity',
        'Real-time readiness indices for Tahsili and Qudrat exam percentiles',
        'Instant alerts on simulated mock exam scores and diagnostic gains',
        'Frictionless subscription and payment management for family accounts',
      ],
    },
    teacher: {
      phase: 'Phase 3',
      titleAr: 'بوابة المعلم والمعلمة',
      titleEn: 'Teacher & Mentor Console',
      icon: User,
      featuresAr: [
        'إدارة الحصص المباشرة وفصول البث التفاعلي',
        'رفع الواجبات وبنوك الأسئلة والشروحات الرقمية',
        'متابعة أداء الطلاب والرد على استفساراتهم الأكاديمية',
        'لوحة تحكم لإدارة الجداول والمكافآت والتقييمات',
      ],
      featuresEn: [
        'Manage live streaming sessions and interactive digital classrooms',
        'Publish proprietary drill banks, assignments, and revision notes',
        'Monitor cohort analytics and answer direct academic student queries',
        'Comprehensive dashboard for scheduling, payouts, and student feedback',
      ],
    },
  }[role];

  const IconComponent = roleDetails.icon;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
  };

  return (
    <Modal
      isOpen={futureAccountModal.isOpen}
      onClose={closeFutureAccountModal}
      title={isAr ? roleDetails.titleAr : roleDetails.titleEn}
      subtitle={t.modals.futureAccountDesc}
      maxWidth="md"
    >
      <div className="space-y-6 text-start">
        {/* Header Capsule */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">
                {isAr ? roleDetails.titleAr : roleDetails.titleEn}
              </h4>
              <span className="text-xs text-slate-400">
                {isAr ? 'قيد التطوير النشط' : 'In Active Development'}
              </span>
            </div>
          </div>

          <Badge variant="emerald" size="sm" dot>
            {roleDetails.phase}
          </Badge>
        </div>

        {/* Feature List */}
        <div>
          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            {isAr ? 'أبرز مميزات البوابة القادمة' : 'Key Portal Capabilities'}
          </h5>
          <div className="space-y-2.5">
            {(isAr ? roleDetails.featuresAr : roleDetails.featuresEn).map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 text-xs text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Early Access Notification Box */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-500/30">
          <div className="flex items-center gap-2 mb-2">
            <Bell className="w-4 h-4 text-emerald-400" />
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">
              {isAr ? 'كن أول من يعلم عند الإطلاق' : 'Get Notified on Launch'}
            </h5>
          </div>

          {isSubscribed ? (
            <p className="text-xs text-emerald-300 font-semibold py-1">
              {isAr
                ? 'تم تسجيل بريدك الإلكتروني بنجاح! سنرسل لك إشعاراً حصرياً فور جاهزية البوابة.'
                : 'Email registered successfully! You will receive an exclusive early invite.'}
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <Button variant="emerald" size="sm" type="submit">
                {isAr ? 'إشعارني' : 'Notify Me'}
              </Button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-3 border-t border-slate-800">
          <Button variant="secondary" size="md" onClick={closeFutureAccountModal}>
            {t.modals.close}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
