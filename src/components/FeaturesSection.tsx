import React from 'react';
import { FEATURES } from '../data';
import {
  Workflow,
  MessageSquareShare,
  BarChart3,
  Cpu,
  FolderKanban,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-blue-600" />;
      case 'MessageSquareShare':
        return <MessageSquareShare className="w-6 h-6 text-indigo-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-sky-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-700" />;
      case 'FolderKanban':
        return <FolderKanban className="w-6 h-6 text-indigo-700" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-violet-600" />;
      default:
        return <Workflow className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered for speed, clarity, and scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            Everything your team needs to plan, automate, execute, and evaluate workflows without friction.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="relative p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:shadow-blue-100/40 hover:border-blue-200 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                {/* Icon and Tag Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {getFeatureIcon(feat.icon)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                    {feat.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {feat.title}
                </h3>

                {/* Explanation */}
                <p className="mt-2 text-sm text-slate-500 leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>

              {/* Bottom Interactive Link */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
