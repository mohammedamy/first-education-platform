import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { FAQ_DATA } from '../data/faq';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const FaqSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const isAr = language === 'ar';

  const categories = [
    { id: 'all', labelAr: 'جميع الأسئلة', labelEn: 'All Questions' },
    { id: 'general', labelAr: 'عن المنصة', labelEn: 'About First' },
    { id: 'tracks', labelAr: 'المسارات والمواد', labelEn: 'Tracks & Subjects' },
    { id: 'learning', labelAr: 'الدروس والتعلم', labelEn: 'Learning & Mentors' },
    { id: 'accounts', labelAr: 'الحسابات', labelEn: 'Accounts' },
    { id: 'payments', labelAr: 'الدفع والاشتراكات', labelEn: 'Payments' },
  ];

  const filteredFaqs =
    selectedCategory === 'all'
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-950/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.faq.sectionBadge}
          title={t.faq.title}
          subtitle={t.faq.subtitle}
        />

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {isAr ? cat.labelAr : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-14 text-start">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const question = isAr ? faq.questionAr : faq.questionEn;
            const answer = isAr ? faq.answerAr : faq.answerEn;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-emerald-500/50 shadow-lg'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-emerald-400' : 'text-slate-400'}`} />
                    <span className="text-base sm:text-lg font-bold text-white">
                      {question}
                    </span>
                  </div>

                  <span className={`p-1.5 rounded-lg bg-slate-800 shrink-0 text-slate-300 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 animate-in fade-in duration-200">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Prompt */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div>
            <h4 className="font-bold text-white text-base">
              {t.faq.contactPrompt}
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              {isAr
                ? 'فريق الدعم الأكاديمي جاهز للإجابة على جميع استفساراتك حول المنصة.'
                : 'Our academic advisory team is ready to answer any questions about First.'}
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            leftIcon={<MessageSquare className="w-4 h-4 text-emerald-400" />}
            onClick={() => {
              window.location.href = 'mailto:contact@first-edu.sa?subject=First Inquiry';
            }}
          >
            {t.faq.contactBtn}
          </Button>
        </div>
      </div>
    </section>
  );
};
