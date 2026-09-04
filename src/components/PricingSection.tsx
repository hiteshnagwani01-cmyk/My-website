import React, { useState } from 'react';
import { PRICING_PLANS } from '../data';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { ModalType } from '../types';

interface PricingProps {
  onOpenModal: (type: ModalType) => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onOpenModal }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <section className="py-20 bg-slate-50/50 border-t border-slate-100" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Predictable plans that scale with your team
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            Start free for small projects, then upgrade as your team's workflow automation expands.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span
              className={`text-sm font-semibold cursor-pointer transition-colors ${
                billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly billing
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className={`w-12 h-6.5 rounded-full p-0.5 transition-colors duration-200 cursor-pointer relative focus:outline-hidden focus:ring-2 focus:ring-blue-500 ${
                billingCycle === 'annual' ? 'bg-blue-600' : 'bg-slate-300'
              }`}
              aria-label="Toggle billing cycle"
            >
              <div
                className={`w-5.5 h-5.5 bg-white rounded-full shadow-xs transition-transform duration-200 ${
                  billingCycle === 'annual' ? 'translate-x-5.5' : 'translate-x-0'
                }`}
              />
            </button>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setBillingCycle('annual')}
            >
              <span
                className={`text-sm font-semibold transition-colors ${
                  billingCycle === 'annual' ? 'text-slate-900' : 'text-slate-500'
                }`}
              >
                Annual billing
              </span>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const isPro = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-200 ${
                  isPro
                    ? 'bg-slate-900 text-white border-2 border-blue-600 shadow-xl shadow-blue-900/10 lg:-translate-y-2 p-8'
                    : 'bg-white text-slate-900 border border-slate-200 shadow-xs hover:shadow-xl hover:shadow-blue-100/40 hover:border-blue-200 p-8'
                }`}
              >
                {/* Popular Pill */}
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-extrabold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold tracking-wider uppercase">
                      {plan.name}
                    </h3>
                  </div>

                  <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${isPro ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">
                      ${price}
                    </span>
                    <span className={`text-xs font-semibold ${isPro ? 'text-slate-400' : 'text-slate-500'}`}>
                      /user/month
                    </span>
                  </div>
                  <div className={`text-[11px] font-medium mt-1 ${isPro ? 'text-blue-400' : 'text-slate-400'}`}>
                    {billingCycle === 'annual' && plan.monthlyPrice > 0
                      ? `Billed annually ($${price * 12}/yr)`
                      : 'Billed monthly'}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onOpenModal('signup')}
                    className={`mt-8 w-full py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all duration-150 ${
                      isPro
                        ? 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-md shadow-blue-600/20'
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs hover:bg-blue-600'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Feature Checkmarks Header */}
                  <div className={`mt-8 pt-6 border-t text-xs font-bold uppercase tracking-wider ${
                    isPro ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
                  }`}>
                    What's included:
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-4 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPro ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span className={isPro ? 'text-slate-300' : 'text-slate-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer note */}
                <div className={`mt-8 pt-4 border-t text-[11px] text-center ${
                  isPro ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-400'
                }`}>
                  Instant setup • No credit card required
                </div>
              </div>
            );
          })}
        </div>

        {/* Illustrative Disclaimer specified by user prompt */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <p className="font-semibold">Prices shown are illustrative.</p>
          <p className="mt-1">All plans include standard TLS 1.3 encryption, automatic updates, and 99.98% platform uptime guarantee.</p>
        </div>
      </div>
    </section>
  );
};
