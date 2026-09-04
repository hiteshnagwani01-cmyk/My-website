import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Play } from 'lucide-react';
import { ModalType } from '../types';

interface FinalCtaProps {
  onOpenModal: (type: ModalType) => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenModal }) => {
  return (
    <section className="py-20 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-slate-900 text-white p-8 sm:p-14 md:p-16 border border-slate-800 shadow-xl overflow-hidden text-center">
          {/* Subtle ambient lighting inside card */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none -z-0" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Started in Under 2 Minutes</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to simplify the way your team works?
            </h2>

            {/* Supporting text */}
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              Start organizing, automating and growing with Flowly.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <button
                onClick={() => onOpenModal('signup')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-150 cursor-pointer group"
                id="final-cta-btn"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
              </button>
              <button
                onClick={() => onOpenModal('demo')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all duration-150 cursor-pointer"
              >
                <Play className="w-4 h-4 text-blue-400 fill-blue-400/20" />
                <span>Book a Guided Demo</span>
              </button>
            </div>

            {/* Trust Micro-indicators */}
            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400 flex-wrap font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Free forever Starter plan
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                No credit card required
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
