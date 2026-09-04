import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            Simple Onboarding
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get up and running in three effortless steps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            No complex installations or months of configuration. Flowly adapts to how your team already works.
          </p>
        </div>

        {/* 3 Step Process Container */}
        <div className="mt-16 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-24 right-24 h-px bg-slate-200 -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {HOW_IT_WORKS_STEPS.map((item, index) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:shadow-xl hover:shadow-blue-100/40 hover:border-blue-200 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-lg shadow-sm group-hover:bg-blue-600 transition-all duration-200">
                      {item.step}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Step {index + 1} of 3
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Sub-points */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                  {item.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
