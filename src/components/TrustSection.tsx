import React from 'react';
import { TRUSTED_COMPANIES } from '../data';
import { ShieldCheck, Award, Zap } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100" id="trust-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">
            Trusted by high-performance teams worldwide
          </p>
        </div>

        {/* Fictional Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center grayscale opacity-60 hover:opacity-90 transition-opacity">
          {TRUSTED_COMPANIES.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-2.5 px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors group cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center font-black text-xs text-slate-700 tracking-tighter">
                {company.logoCode}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-black tracking-tight text-slate-700 italic leading-none">
                  {company.name}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold mt-0.5">
                  {company.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary trust badges */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>SOC2 Type II Certified & GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600" />
            <span>Top Rated Workflow Platform</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-600" />
            <span>99.98% Enterprise Uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
};
