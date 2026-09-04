import React from 'react';
import {
  Layers,
  Twitter,
  Github,
  Linkedin,
  Youtube,
  Globe,
  CheckCircle2,
  Mail,
  ArrowUp
} from 'lucide-react';
import { ModalType } from '../types';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Layers className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1">
                Flowly
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mb-1"></span>
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Flowly unifies tasks, automated workflows, and team intelligence into one simple platform designed for modern high-performance teams.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a
                href="#footer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors border border-slate-800 text-slate-400"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#footer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors border border-slate-800 text-slate-400"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#footer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors border border-slate-800 text-slate-400"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#footer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors border border-slate-800 text-slate-400"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Live Operational Status */}
            <div className="pt-2 flex items-center gap-2 text-[11px] text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational (99.98%)</span>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Product
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#product" className="hover:text-white transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Smart Workflows
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-white transition-colors">
                  Kanban & Sprint
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Automation Engine
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-white transition-colors">
                  Real-time Analytics
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Changelog & Releases
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Solutions
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Engineering Teams
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Product & Design
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Operations & PMO
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Agile Startups
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Enterprise Scale
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Resources
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Help Center & FAQ
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Workflow Templates
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#trust-section" className="hover:text-white transition-colors">
                  Security & SOC2
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Company
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#trust-section" className="hover:text-white transition-colors">
                  About Flowly
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('demo')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Careers (We're hiring)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Legal Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} Flowly SaaS Inc. All rights reserved. Fictional product concept for illustration.
          </div>

          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-slate-300 transition-colors">Privacy</a>
            <a href="#faq" className="hover:text-slate-300 transition-colors">Terms</a>
            <a href="#faq" className="hover:text-slate-300 transition-colors">Security</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-slate-400"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
