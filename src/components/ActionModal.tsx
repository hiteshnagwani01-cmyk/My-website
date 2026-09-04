import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Lock, Calendar, Users } from 'lucide-react';
import { ModalType } from '../types';

interface ActionModalProps {
  type: ModalType;
  onClose: () => void;
}

export const ActionModal: React.FC<ActionModalProps> = ({ type, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [teamSize, setTeamSize] = useState('11-50');

  if (!type) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation state */
          <div className="p-8 sm:p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              {type === 'demo' ? 'Demo Request Received!' : 'Welcome to Flowly!'}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              {type === 'demo'
                ? `Thank you, ${name || 'there'}. We have reserved your spot and sent a calendar invite to ${email || 'your email'}.`
                : `We've provisioned your workspace environment. Check ${email || 'your inbox'} for your instant access link.`}
            </p>

            <div className="mt-8">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-slate-900 text-white font-semibold rounded-xl text-sm hover:bg-slate-800 transition-colors"
              >
                Back to Website
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-slate-900 text-lg">Flowly</span>
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mt-3">
              {type === 'signup' && 'Create your free workspace'}
              {type === 'demo' && 'Schedule a 1-on-1 team demo'}
              {type === 'login' && 'Sign in to Flowly'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {type === 'signup' && 'Get started free with your team in less than 2 minutes.'}
              {type === 'demo' && 'Discover how custom automations can save your team 4+ hrs/week.'}
              {type === 'login' && 'Enter your company credentials to access your dashboards.'}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {type !== 'login' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Work Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              {type === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Team Size
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="1-10">1 – 10 people</option>
                    <option value="11-50">11 – 50 people</option>
                    <option value="51-200">51 – 200 people</option>
                    <option value="201+">201+ enterprise</option>
                  </select>
                </div>
              )}

              {type === 'login' && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Password
                    </label>
                    <a href="#faq" className="text-xs text-blue-600 hover:underline">
                      Forgot?
                    </a>
                  </div>
                  <input
                    type="password"
                    required
                    defaultValue="••••••••••••"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full mt-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>
                  {type === 'signup' && 'Create Workspace & Launch'}
                  {type === 'demo' && 'Confirm Demo Request'}
                  {type === 'login' && 'Sign In to Workspace'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] text-slate-400 text-center">
              Protected with TLS 1.3 encryption • No credit card required
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
