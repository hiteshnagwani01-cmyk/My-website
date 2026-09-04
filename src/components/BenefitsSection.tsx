import React from 'react';
import { BENEFITS } from '../data';
import { Clock, RefreshCw, MessageSquare, TrendingUp, FolderCheck, CheckCircle2 } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const getBenefitIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Clock className="w-5 h-5 text-blue-600" />;
      case 1:
        return <RefreshCw className="w-5 h-5 text-indigo-600" />;
      case 2:
        return <MessageSquare className="w-5 h-5 text-sky-600" />;
      case 3:
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      case 4:
        return <FolderCheck className="w-5 h-5 text-purple-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            Measurable Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why high-performing teams choose Flowly
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            Real operational advantages that compound every week across your entire organization.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BENEFITS.map((item, idx) => (
            <div
              key={item.title}
              className={`bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:shadow-xl hover:shadow-blue-100/40 hover:border-blue-200 transition-all duration-200 flex flex-col justify-between group ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {getBenefitIcon(idx)}
                  </div>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Stat Metric Callout */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {item.stat}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {item.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
