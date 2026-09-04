import React, { useState } from 'react';
import {
  FolderKanban,
  Workflow,
  BarChart3,
  CheckCircle2,
  Clock,
  Zap,
  Users,
  GitBranch,
  ArrowRight,
  TrendingUp,
  Filter,
  MoreHorizontal,
  Plus,
  Shield,
  Activity,
  Layers
} from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'workflows' | 'kanban' | 'analytics'>('kanban');

  return (
    <section className="py-20 bg-slate-50/50 border-y border-slate-100 text-slate-900 relative overflow-hidden" id="product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            Product Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Designed for the way high-velocity teams work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            A frictionless interface that balances extreme power with complete simplicity.
            No bloat, no confusing menus — just pure productive momentum.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-xl bg-white border border-slate-200 shadow-xs gap-1.5 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('kanban')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'kanban'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FolderKanban className="w-4 h-4" />
              <span>Project & Kanban View</span>
            </button>
            <button
              onClick={() => setActiveTab('workflows')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'workflows'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Workflow className="w-4 h-4" />
              <span>Visual Workflow Builder</span>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Real-Time Team Analytics</span>
            </button>
          </div>
        </div>

        {/* The SaaS Interface Showcase Container */}
        <div className="mt-10 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-blue-100/40 overflow-hidden">
          {/* Top Window Bar */}
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              </div>
              <div className="h-4 w-px bg-slate-200 mx-2 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-md text-[10px] text-slate-500 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>flowly.app/workspace/enterprise-hub</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-emerald-600 font-mono text-[11px] flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Sync (12ms)
              </span>
              <div className="hidden md:flex items-center gap-2 text-slate-500 border-l border-slate-200 pl-3">
                <span>Acme Org</span>
                <span className="text-slate-300">/</span>
                <span className="text-slate-800 font-medium">Growth Core</span>
              </div>
            </div>
          </div>

          {/* SaaS Interface Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Sidebar Navigation */}
            <div className="hidden lg:flex lg:col-span-3 bg-slate-50/60 border-r border-slate-200 p-4 flex-col justify-between">
              <div className="space-y-6">
                {/* Project selector */}
                <div className="bg-white border border-slate-200 p-2.5 rounded-xl flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
                      FL
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Global Product Q3</div>
                      <div className="text-[10px] text-slate-500">18 active contributors</div>
                    </div>
                  </div>
                </div>

                {/* Navigation list */}
                <div className="space-y-1 text-xs">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 px-2 py-1">
                    Workspaces
                  </div>
                  <button
                    onClick={() => setActiveTab('kanban')}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                      activeTab === 'kanban'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <FolderKanban className="w-4 h-4" />
                      Sprint Roadmap
                    </span>
                    <span className="text-[10px] font-bold bg-slate-200/60 text-slate-700 px-1.5 py-0.5 rounded">
                      24
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveTab('workflows')}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                      activeTab === 'workflows'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Workflow className="w-4 h-4" />
                      Automation Rules
                    </span>
                    <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                      Live
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveTab('analytics')}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                      activeTab === 'analytics'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Velocity & Health
                    </span>
                  </button>
                </div>
              </div>

              {/* Live Team Pulse */}
              <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-2xs">
                <div className="flex items-center justify-between text-[11px] text-slate-600 mb-2">
                  <span className="font-semibold text-slate-800">Sprint Health Score</span>
                  <span className="text-emerald-600 font-bold">96%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[96%]" />
                </div>
                <div className="mt-2 text-[10px] text-slate-500 flex items-center justify-between">
                  <span>Zero blocking bottlenecks</span>
                  <span className="text-emerald-600 font-medium">Optimal</span>
                </div>
              </div>
            </div>

            {/* Main Stage Panel */}
            <div className="lg:col-span-6 p-4 sm:p-6 bg-slate-50/30 flex flex-col justify-between">
              {/* Tab 1: Kanban Board */}
              {activeTab === 'kanban' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                        <span>Sprint 24: Core Infrastructure</span>
                        <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-semibold">
                          In Flight
                        </span>
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Target completion: Friday, 5:00 PM • 36 story points delivered
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="text-xs bg-white text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center gap-1.5 shadow-2xs">
                        <Filter className="w-3 h-3" />
                        <span>Filter</span>
                      </button>
                    </div>
                  </div>

                  {/* Task Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    {/* Card 1 */}
                    <div className="bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md p-3.5 rounded-xl transition-all">
                      <div className="flex items-center justify-between text-[11px] mb-2">
                        <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-mono font-bold">
                          ENG-319
                        </span>
                        <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px] font-semibold">
                          High Priority
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                        Migrate event bus to distributed streaming queue
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Handles 25,000 webhook events/sec with guaranteed delivery.
                      </p>
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>Due Tomorrow</span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-blue-600 text-[10px] font-bold flex items-center justify-center text-white">
                          MV
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md p-3.5 rounded-xl transition-all">
                      <div className="flex items-center justify-between text-[11px] mb-2">
                        <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded font-mono font-bold">
                          DES-142
                        </span>
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-semibold">
                          Ready for Review
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                        Design interactive rule triggers for custom fields
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Figma components verified with accessibility color specs.
                      </p>
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 text-emerald-600 text-[11px] font-medium">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>All specs linked</span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-purple-600 text-[10px] font-bold flex items-center justify-center text-white">
                          SL
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md p-3.5 rounded-xl transition-all">
                      <div className="flex items-center justify-between text-[11px] mb-2">
                        <span className="text-sky-700 bg-sky-50 px-2 py-0.5 rounded font-mono font-bold">
                          OPS-88
                        </span>
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-semibold">
                          Automated
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                        SOC2 Continuous Access Audit Log Export
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Automated weekly compliance snapshot to encrypted bucket.
                      </p>
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 text-blue-600 text-[11px] font-medium">
                          <Zap className="w-3 h-3" />
                          <span>Flowly Bot Triggered</span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-emerald-600 text-[10px] font-bold flex items-center justify-center text-white">
                          ER
                        </div>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md p-3.5 rounded-xl transition-all">
                      <div className="flex items-center justify-between text-[11px] mb-2">
                        <span className="text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-mono font-bold">
                          PROD-91
                        </span>
                        <span className="text-slate-600 bg-slate-100 px-2 py-0.5 rounded text-[10px] font-semibold">
                          In QA Testing
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                        Customer Self-Serve Onboarding Checklist
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        A/B test cohort enabled across 500 initial team signups.
                      </p>
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 text-slate-600 text-[11px]">
                          <TrendingUp className="w-3 h-3 text-emerald-600" />
                          <span>+18% conversion</span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-amber-600 text-[10px] font-bold flex items-center justify-center text-white">
                          TK
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Visual Workflow Builder */}
              {activeTab === 'workflows' && (
                <div className="space-y-4">
                  <div className="pb-3 border-b border-slate-200">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Workflow className="w-4 h-4 text-blue-600" />
                      <span>Rule #104: Production Release Orchestrator</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Triggers whenever a deployment tag is pushed to production branch.
                    </p>
                  </div>

                  {/* Visual Step Workflow Node Chain */}
                  <div className="space-y-3 pt-2">
                    {/* Step 1 */}
                    <div className="p-3.5 rounded-xl bg-white border border-blue-200 shadow-2xs relative">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                          01 • TRIGGER
                        </span>
                        <span className="text-[11px] text-emerald-600 font-mono font-medium">Listening</span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-1.5">
                        GitHub Pull Request Merged to 'main'
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Filters: Repository == 'core-app' AND Branch == 'main'
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="p-3.5 rounded-xl bg-white border border-indigo-200 shadow-2xs relative">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                          02 • CONDITIONAL LOGIC
                        </span>
                        <span className="text-[11px] text-indigo-600 font-mono font-medium">Evaluated</span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-1.5">
                        If PR contains label 'security-audit' OR 'release-v3'
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="p-3.5 rounded-xl bg-white border border-emerald-200 shadow-2xs relative">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          03 • PARALLEL ACTIONS (3)
                        </span>
                        <span className="text-[11px] text-emerald-600 font-mono font-medium">Success</span>
                      </div>
                      <div className="mt-2 space-y-1.5 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>Post automated changelog summary to Slack #releases</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>Advance linked Jira / GitHub issues to 'Deployed'</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>Trigger synthetic uptime health checks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Real-Time Analytics */}
              {activeTab === 'analytics' && (
                <div className="space-y-4">
                  <div className="pb-3 border-b border-slate-200 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Sprint Velocity & Burndown</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Real-time throughput metrics over last 6 sprints</p>
                    </div>
                    <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-lg font-semibold">
                      +32% Efficiency
                    </span>
                  </div>

                  {/* Visual Chart Bar Representation */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                    <div className="text-xs font-semibold text-slate-500 mb-3 flex items-center justify-between">
                      <span>Weekly Story Points Delivered</span>
                      <span className="text-blue-600 font-medium">Target: 40 pts</span>
                    </div>

                    {/* Chart Bars */}
                    <div className="h-32 flex items-end justify-between gap-3 pt-4 px-2">
                      <div className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full bg-slate-200 rounded-t h-16 hover:bg-blue-500 transition-colors" />
                        <span className="text-[10px] text-slate-400">Sprint 19</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full bg-slate-200 rounded-t h-20 hover:bg-blue-500 transition-colors" />
                        <span className="text-[10px] text-slate-400">Sprint 20</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full bg-slate-200 rounded-t h-22 hover:bg-blue-500 transition-colors" />
                        <span className="text-[10px] text-slate-400">Sprint 21</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full bg-slate-200 rounded-t h-24 hover:bg-blue-500 transition-colors" />
                        <span className="text-[10px] text-slate-400">Sprint 22</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full bg-blue-300 rounded-t h-28" />
                        <span className="text-[10px] text-slate-400">Sprint 23</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full bg-blue-600 rounded-t h-32" />
                        <span className="text-[10px] text-blue-600 font-bold">Current</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Metric Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                      <span className="text-[11px] text-slate-500 font-medium">Average Cycle Time</span>
                      <div className="text-lg font-bold text-slate-900 mt-0.5">1.8 Days</div>
                      <span className="text-[10px] text-emerald-600 font-semibold">-52% vs industry avg</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                      <span className="text-[11px] text-slate-500 font-medium">Meeting Hours Saved</span>
                      <div className="text-lg font-bold text-slate-900 mt-0.5">38.5 hrs / mo</div>
                      <span className="text-[10px] text-blue-600 font-semibold">Async daily check-ins</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Quick Action Strip */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-blue-600" />
                  Enterprise security policies applied
                </span>
                <span className="text-slate-700 font-medium">99.98% SLA Guaranteed</span>
              </div>
            </div>

            {/* Right Activity Feed */}
            <div className="hidden lg:flex lg:col-span-3 bg-slate-50/60 border-l border-slate-200 p-4 flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 pb-3 border-b border-slate-200">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-blue-600" />
                    Team Activity
                  </span>
                  <span className="text-[10px] text-emerald-600 font-mono font-medium">Live</span>
                </div>

                {/* Stream Items */}
                <div className="mt-3 space-y-3.5 text-xs">
                  <div className="flex gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      MV
                    </div>
                    <div>
                      <p className="text-slate-700 leading-snug">
                        <strong className="text-slate-900 font-semibold">Marcus V.</strong> approved PR #204 (API Gateway)
                      </p>
                      <span className="text-[10px] text-slate-400">6 minutes ago</span>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      <Zap className="w-3 h-3" />
                    </div>
                    <div>
                      <p className="text-slate-700 leading-snug">
                        <strong className="text-emerald-600 font-semibold">Flowly Bot</strong> auto-assigned QA ticket to Elena R.
                      </p>
                      <span className="text-[10px] text-slate-400">14 minutes ago</span>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      SL
                    </div>
                    <div>
                      <p className="text-slate-700 leading-snug">
                        <strong className="text-slate-900 font-semibold">Sarah L.</strong> completed Design System Specs v3.2
                      </p>
                      <span className="text-[10px] text-slate-400">32 minutes ago</span>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-amber-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      ER
                    </div>
                    <div>
                      <p className="text-slate-700 leading-snug">
                        <strong className="text-slate-900 font-semibold">Elena R.</strong> released Sprint 24 Milestone to staging
                      </p>
                      <span className="text-[10px] text-slate-400">1 hour ago</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom team member presence */}
              <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Active now: 14 engineers</span>
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-blue-500 border border-white" />
                  <div className="w-5 h-5 rounded-full bg-purple-500 border border-white" />
                  <div className="w-5 h-5 rounded-full bg-emerald-500 border border-white" />
                  <div className="w-5 h-5 rounded-full bg-amber-500 border border-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
