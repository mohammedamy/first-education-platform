import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Compass, Users, CheckCircle, TrendingUp } from 'lucide-react';

export const TrustBarSection: React.FC = () => {
  const { t } = useLanguage();

  const trustItems = [
    {
      title: t.trustBar.item1Title,
      desc: t.trustBar.item1Desc,
      icon: Compass,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
    },
    {
      title: t.trustBar.item2Title,
      desc: t.trustBar.item2Desc,
      icon: Users,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-500/20',
    },
    {
      title: t.trustBar.item3Title,
      desc: t.trustBar.item3Desc,
      icon: CheckCircle,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
    },
    {
      title: t.trustBar.item4Title,
      desc: t.trustBar.item4Desc,
      icon: TrendingUp,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-slate-700/80 transition-all text-start"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.bgColor} border ${item.borderColor}`}
                >
                  <IconComponent className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
