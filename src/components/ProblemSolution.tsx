import React from 'react';
import { PROBLEM_SOLUTIONS } from '../data';
import { Layers, Zap, Users, Eye, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-indigo-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-sky-600" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-blue-700" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50/50 border-b border-slate-100" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            The Problem & The Solution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work shouldn't feel like managing chaos.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            Modern teams are drowning in disconnected tools, manual status updates, and hidden blockers.
            Flowly replaces the friction with complete operational flow.
          </p>
        </div>

        {/* 4 Problem vs Solution Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROBLEM_SOLUTIONS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Result Metric */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
                    {item.metric}
                  </span>
                </div>

                {/* Problem Box */}
                <div className="mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-600 uppercase tracking-wide mb-1.5">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>The Struggle</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {item.problemTitle}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                    {item.problemDesc}
                  </p>
                </div>

                {/* Flowly Solution Box */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wide mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>The Flowly Solution</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    {item.solutionTitle}
                  </h4>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {item.solutionDesc}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                <span>Explore workflow templates</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform duration-150" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
