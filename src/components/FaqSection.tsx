import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { ModalType } from '../types';

interface FaqProps {
  onOpenModal: (type: ModalType) => void;
}

export const FaqSection: React.FC<FaqProps> = ({ onOpenModal }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything you need to know about Flowly
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            Have questions about plans, security, or integrations? We've got answers.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-14 space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-xl border border-slate-200 overflow-hidden transition-all duration-150 bg-white shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-500 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Secondary Help Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Still have questions?</div>
              <div className="text-xs text-slate-500">Our product specialist team is available 24/5 to assist you.</div>
            </div>
          </div>

          <button
            onClick={() => onOpenModal('demo')}
            className="text-xs font-semibold text-slate-900 bg-white hover:bg-slate-50 hover:border-blue-200 hover:text-blue-600 px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            Speak with an Expert
          </button>
        </div>
      </div>
    </section>
  );
};
