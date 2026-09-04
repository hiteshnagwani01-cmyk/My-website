import React, { useState } from 'react';
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Sparkles,
  Zap,
  TrendingUp,
  Clock,
  ChevronRight,
  Search,
  Bell,
  Plus,
  FolderKanban,
  CheckSquare,
  Workflow,
  BarChart3,
  Settings,
  Users,
  AlertCircle,
  Calendar,
  Layers,
  Sliders
} from 'lucide-react';
import { ModalType } from '../types';

interface HeroProps {
  onOpenModal: (type: ModalType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [mockupTab, setMockupTab] = useState<'board' | 'automation' | 'metrics'>('board');

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Text Content */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>New: Automated Sprint Workflows</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Work smarter.{' '}
            <br className="hidden sm:inline" />
            Move faster.{' '}
            <br className="hidden sm:inline" />
            <span className="text-blue-600">
              Grow together.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Flowly brings your team's work, workflows, and productivity into one simple platform. Built for modern teams that demand more.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={() => onOpenModal('signup')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base sm:text-lg font-bold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 rounded-xl shadow-xl shadow-slate-200 transition-all duration-150 cursor-pointer group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              id="hero-primary-cta"
            >
              <span>Start for free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150 text-blue-300" />
            </button>
            <button
              onClick={() => onOpenModal('demo')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all duration-150 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-400"
              id="hero-secondary-cta"
            >
              <Play className="w-4 h-4 text-blue-600 fill-blue-600/20" />
              <span>Book a demo</span>
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-400 font-medium flex-wrap">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Free 14-day Pro trial
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              No credit card required
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Setup in under 2 minutes
            </span>
          </div>
        </div>

        {/* Premium Product Mockup */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Outer Minimalist Container from Design HTML */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-2 sm:p-4 shadow-2xl shadow-blue-100/50">
            {/* Window Container */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
              {/* Window Top Chrome */}
              <div className="h-10 border-b border-slate-100 px-4 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <div className="h-4 w-px bg-slate-200 mx-2 hidden sm:block" />
                  <div className="hidden sm:flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-md text-[10px] text-slate-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>flowly.app/workspace/sprint-04</span>
                  </div>
                </div>

              {/* View Switcher in Mockup */}
              <div className="flex items-center gap-1 bg-slate-200/60 p-0.5 rounded-lg text-xs font-semibold text-slate-600">
                <button
                  onClick={() => setMockupTab('board')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    mockupTab === 'board'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  Tasks Board
                </button>
                <button
                  onClick={() => setMockupTab('automation')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    mockupTab === 'automation'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  Automations (3)
                </button>
                <button
                  onClick={() => setMockupTab('metrics')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    mockupTab === 'metrics'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  Analytics
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center -space-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                    SL
                  </div>
                  <div className="w-6 h-6 rounded-full bg-purple-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                    MV
                  </div>
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                    ER
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500" title="All systems live" />
              </div>
            </div>

            {/* Dashboard Inner Workspace */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px] bg-slate-50/50">
              {/* Sidebar Navigation */}
              <div className="hidden md:flex md:col-span-3 lg:col-span-2 bg-white border-r border-slate-200/80 p-3.5 flex-col justify-between">
                <div className="space-y-4">
                  {/* Workspace switcher */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 truncate">
                      <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                        A
                      </div>
                      <span className="text-xs font-bold text-slate-900 truncate">Acme Sprint 24</span>
                    </div>
                  </div>

                  {/* Nav links */}
                  <div className="space-y-1 text-xs font-medium text-slate-600">
                    <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md bg-blue-50 text-blue-700 font-semibold">
                      <FolderKanban className="w-3.5 h-3.5" />
                      <span>Sprint Board</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md hover:bg-slate-100 text-slate-600">
                      <Workflow className="w-3.5 h-3.5" />
                      <span>Workflows</span>
                      <span className="ml-auto text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.2 rounded-full font-bold">
                        3
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md hover:bg-slate-100 text-slate-600">
                      <BarChart3 className="w-3.5 h-3.5" />
                      <span>Analytics</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md hover:bg-slate-100 text-slate-600">
                      <Users className="w-3.5 h-3.5" />
                      <span>Team Pulse</span>
                    </div>
                  </div>
                </div>

                {/* Team Storage Indicator */}
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1 font-medium">
                    <span>Sprint Cycle</span>
                    <span className="text-blue-600 font-bold">84%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full w-[84%]" />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1.5">3 days remaining</p>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="md:col-span-9 lg:col-span-10 p-4 sm:p-6 flex flex-col justify-between">
                {/* Header within dashboard */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base sm:text-lg font-bold text-slate-900">
                        {mockupTab === 'board' && 'Q3 Platform Launch • Sprint 24'}
                        {mockupTab === 'automation' && 'Active Workflow Automations'}
                        {mockupTab === 'metrics' && 'Real-time Velocity & Health Insights'}
                      </h2>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                        On Track
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      18 of 22 issues resolved • Velocity trending +14% above baseline
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        readOnly
                        value="Filter cards..."
                        className="text-xs bg-white border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-slate-500 w-32 sm:w-40 focus:outline-hidden"
                      />
                    </div>
                    <button className="flex items-center gap-1.5 text-xs font-semibold bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-2xs hover:bg-blue-700">
                      <Plus className="w-3.5 h-3.5" />
                      <span>New Task</span>
                    </button>
                  </div>
                </div>

                {/* Tab Specific Content */}
                {mockupTab === 'board' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-4">
                    {/* Column 1: In Progress */}
                    <div className="bg-slate-100/70 p-3 rounded-xl border border-slate-200/70 flex flex-col gap-2.5">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          In Progress
                        </span>
                        <span className="text-slate-400 text-[11px]">2</span>
                      </div>

                      {/* Card 1 */}
                      <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                            Design System
                          </span>
                          <span className="text-[10px] font-semibold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">
                            High
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-900 leading-snug">
                          Refactor multi-step checkout workflow UI
                        </p>
                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                          <div className="flex items-center gap-1">
                            <CheckSquare className="w-3 h-3 text-slate-400" />
                            <span>4/5</span>
                          </div>
                          <div className="w-5 h-5 rounded-full bg-purple-500 text-white text-[9px] font-bold flex items-center justify-center">
                            SL
                          </div>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded">
                            API Backend
                          </span>
                          <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                            Medium
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-900 leading-snug">
                          Implement idempotency key for payment triggers
                        </p>
                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                          <div className="flex items-center gap-1">
                            <CheckSquare className="w-3 h-3 text-slate-400" />
                            <span>2/3</span>
                          </div>
                          <div className="w-5 h-5 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center">
                            MV
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: In Review */}
                    <div className="bg-slate-100/70 p-3 rounded-xl border border-slate-200/70 flex flex-col gap-2.5">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                          In Review
                        </span>
                        <span className="text-slate-400 text-[11px]">1</span>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-2xs hover:border-amber-300 transition-colors">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">
                            Automation
                          </span>
                          <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                            Ready
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-900 leading-snug">
                          Connect GitHub PR webhook with Slack notifications
                        </p>
                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                          <div className="flex items-center gap-1 text-emerald-600 font-medium">
                            <Zap className="w-3 h-3" />
                            <span>Automated</span>
                          </div>
                          <div className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[9px] font-bold flex items-center justify-center">
                            ER
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 3: Done */}
                    <div className="bg-slate-100/70 p-3 rounded-xl border border-slate-200/70 flex flex-col gap-2.5">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          Completed (15)
                        </span>
                        <span className="text-emerald-700 text-[11px] font-semibold">100%</span>
                      </div>

                      {/* Card 4 */}
                      <div className="bg-white/80 p-3 rounded-lg border border-emerald-200/70 shadow-2xs">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                            Security
                          </span>
                          <span className="text-[10px] font-semibold text-emerald-600">Passed</span>
                        </div>
                        <p className="text-xs font-semibold text-slate-700 line-through">
                          SOC2 Type II access policy synchronization
                        </p>
                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                          <span className="flex items-center gap-1 text-emerald-600 font-medium text-[10px]">
                            <CheckCircle2 className="w-3 h-3" />
                            Verified
                          </span>
                          <span className="text-[10px]">2h ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {mockupTab === 'automation' && (
                  <div className="my-4 space-y-2.5">
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900">
                              GitHub PR Merged ➔ Move card to QA Stage
                            </span>
                            <span className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-semibold">
                              Active
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500">
                            Ran 48 times today • 0 errors • Triggered by webhooks
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                        100% Success
                      </span>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900">
                              Due Date &lt; 24h ➔ Send Slack reminder to Assignee
                            </span>
                            <span className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-semibold">
                              Active
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500">
                            Saved ~3.4 hours in manual check-ins this week
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                        Real-time
                      </span>
                    </div>
                  </div>
                )}

                {mockupTab === 'metrics' && (
                  <div className="my-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                      <div className="text-xs font-medium text-slate-500">Sprint Throughput</div>
                      <div className="text-2xl font-black text-slate-900 mt-1">42 Pts</div>
                      <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>+28% vs previous cycle</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                      <div className="text-xs font-medium text-slate-500">Avg. Cycle Time</div>
                      <div className="text-2xl font-black text-slate-900 mt-1">1.8 Days</div>
                      <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Reduced from 4.1 days</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                      <div className="text-xs font-medium text-slate-500">Automated Actions</div>
                      <div className="text-2xl font-black text-slate-900 mt-1">1,280</div>
                      <div className="flex items-center gap-1 text-[11px] text-blue-600 font-semibold mt-1">
                        <Zap className="w-3.5 h-3.5" />
                        <span>14.5 hours saved</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer status bar in Mockup */}
                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-medium text-slate-700">Live sync active:</span>
                    <span className="hidden sm:inline text-slate-500">All 14 workspace members connected</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-blue-600 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      AI Workflow Optimizer Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating efficiency rate card from Clean Minimalism design theme */}
        <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white border border-slate-200 p-4 rounded-xl shadow-xl w-48 text-left z-20">
            <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">Efficiency rate</div>
            <div className="flex items-end gap-2">
              <div className="text-2xl font-bold text-slate-900">94.2%</div>
              <div className="text-[10px] text-emerald-500 font-bold mb-1">↑ 12%</div>
            </div>
            <div className="mt-2 flex gap-1.5 items-end h-8">
              <div className="w-2.5 bg-blue-100 h-1/2 rounded-t"></div>
              <div className="w-2.5 bg-blue-200 h-2/3 rounded-t"></div>
              <div className="w-2.5 bg-blue-600 h-full rounded-t"></div>
              <div className="w-2.5 bg-blue-300 h-3/4 rounded-t"></div>
              <div className="w-2.5 bg-blue-500 h-5/6 rounded-t"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
