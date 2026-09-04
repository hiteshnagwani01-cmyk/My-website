import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            User Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved by leaders who value execution
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            See how forward-thinking product, engineering, and operations teams accelerate their outcomes.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:shadow-xl hover:shadow-blue-100/40 hover:border-blue-200 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Author Profile */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-3.5">
                <div
                  className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-xs shrink-0`}
                >
                  {item.avatarInitials}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {item.role}
                  </div>
                  <div className="text-[11px] text-blue-600 font-semibold mt-0.5">
                    {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-slate-400">
          *Illustrative fictional team reviews for product demonstration.
        </div>
      </div>
    </section>
  );
};
