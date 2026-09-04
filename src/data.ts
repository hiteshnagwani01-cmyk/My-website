import { FeatureItem, ProblemSolutionItem, TestimonialItem, PricingPlan, FaqItem } from './types';

export const TRUSTED_COMPANIES = [
  { name: 'Vectra Labs', logoCode: 'VL', category: 'Cloud Infrastructure' },
  { name: 'Kinetix Media', logoCode: 'KM', category: 'Digital Media' },
  { name: 'Synapse Global', logoCode: 'SG', category: 'HealthTech' },
  { name: 'ApexPoint', logoCode: 'AP', category: 'FinTech Platform' },
  { name: 'PulseCore', logoCode: 'PC', category: 'DevOps Solutions' },
  { name: 'OmniFlow', logoCode: 'OF', category: 'Enterprise Logistics' },
];

export const PROBLEM_SOLUTIONS: ProblemSolutionItem[] = [
  {
    id: 'scattered-tools',
    problemTitle: 'Work scattered across 10+ disconnected apps',
    problemDesc: 'Teams waste 3.8 hours weekly toggling between spreadsheets, chat threads, and disparate trackers.',
    solutionTitle: 'Unified workspace for all work streams',
    solutionDesc: 'Flowly brings projects, documentation, communication, and timelines into one single source of truth.',
    metric: '42% less tool-switching',
    iconName: 'Layers',
  },
  {
    id: 'manual-processes',
    problemTitle: 'Endless repetitive manual handoffs',
    problemDesc: 'Manual data re-entry and copy-pasting statuses creates delays, human error, and team burnout.',
    solutionTitle: 'No-code event-driven automation',
    solutionDesc: 'Trigger actions across tasks, assign owners automatically, and sync updates instantly without writing code.',
    metric: '12 hrs saved / week',
    iconName: 'Zap',
  },
  {
    id: 'difficult-collaboration',
    problemTitle: 'Friction in cross-functional collaboration',
    problemDesc: 'Misaligned roadmaps, buried feedback, and disjointed handoffs between design, product, and engineering.',
    solutionTitle: 'Real-time contextual collaboration',
    solutionDesc: 'Comment directly on tasks, co-author documents in real time, and share live interactive sprint boards.',
    metric: '3x faster consensus',
    iconName: 'Users',
  },
  {
    id: 'lack-visibility',
    problemTitle: 'Zero visibility into actual progress & blockers',
    problemDesc: 'Leaders rely on outdated slide decks and manual status meetings to guess project delivery dates.',
    solutionTitle: 'Live executive dashboards & analytics',
    solutionDesc: 'Instant clarity on team capacity, sprint velocity, and critical path blockers with predictive forecasting.',
    metric: '100% live visibility',
    iconName: 'Eye',
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'smart-workflows',
    title: 'Smart Workflows',
    description: 'Design dynamic step-by-step processes that automatically route work to the right person based on priority, workload, and skills.',
    icon: 'Workflow',
    tag: 'Orchestration',
  },
  {
    id: 'team-collaboration',
    title: 'Team Collaboration',
    description: 'Keep discussions connected to the work. In-context chat, shared documents, and live multi-cursor boards eliminate communication silos.',
    icon: 'MessageSquareShare',
    tag: 'Teamwork',
  },
  {
    id: 'real-time-analytics',
    title: 'Real-time Analytics',
    description: 'Track cycle time, completion rates, and team throughput with instant customizable visual dashboards and exportable reports.',
    icon: 'BarChart3',
    tag: 'Intelligence',
  },
  {
    id: 'task-automation',
    title: 'Task Automation',
    description: 'Automate handoffs, notifications, priority escalations, and due-date reminders with our visual IF-THIS-THEN-THAT builder.',
    icon: 'Cpu',
    tag: 'Efficiency',
  },
  {
    id: 'centralized-workspace',
    title: 'Centralized Workspace',
    description: 'Consolidate roadmaps, kanban boards, docs, files, and checklists into customized team spaces accessible anywhere.',
    icon: 'FolderKanban',
    tag: 'Consolidation',
  },
  {
    id: 'productivity-insights',
    title: 'Productivity Insights',
    description: 'Spot resource bottlenecks, monitor team health, and gain actionable recommendations to optimize team velocity sustainably.',
    icon: 'Sparkles',
    tag: 'Optimization',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Connect your workflow',
    description: 'Import your existing projects in minutes or start with battle-tested templates tailored for your engineering, design, or business team.',
    details: ['1-click integrations', 'Custom field mappings', 'Instant team provisioning'],
  },
  {
    step: '02',
    title: 'Automate your work',
    description: 'Set up visual automation triggers for status updates, reviewer assignments, and cross-platform alerts without touching a line of code.',
    details: ['Pre-built trigger library', 'Conditional branch logic', 'Instant error protection'],
  },
  {
    step: '03',
    title: 'Track your progress',
    description: 'Monitor real-time progress through intuitive Kanban boards, Gantt timelines, and executive dashboards with predictive burndown.',
    details: ['Live velocity metrics', 'Capacity management', 'Automated sprint reports'],
  },
];

export const BENEFITS = [
  {
    title: 'Save time every single day',
    description: 'Cut up to 4.2 hours of repetitive busywork per team member each week, freeing valuable hours for core strategic execution.',
    stat: '4.2 hrs',
    statLabel: 'Saved per employee / week',
    badge: 'Time Savings',
  },
  {
    title: 'Reduce repetitive manual work',
    description: 'Replace tedious email chains, status updates, and spreadsheet copying with automated background triggers.',
    stat: '85%',
    statLabel: 'Reduction in manual handoffs',
    badge: 'Automation',
  },
  {
    title: 'Improve team communication',
    description: 'Centralize conversations where the actual work happens, drastically cutting down endless message threads.',
    stat: '72%',
    statLabel: 'Fewer synchronous meetings',
    badge: 'Clarity',
  },
  {
    title: 'Make better, data-driven decisions',
    description: 'Accurate, live forecasting helps leadership allocate resources predictably without guessing delivery deadlines.',
    stat: '3.4x',
    statLabel: 'Faster roadmap execution',
    badge: 'Insights',
  },
  {
    title: 'Keep everything organized in one place',
    description: 'No more lost documents or broken links. Maintain a single, reliable repository for team knowledge and deliverable assets.',
    stat: '99.9%',
    statLabel: 'Asset accessibility score',
    badge: 'Organization',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Flowly transformed how our distributed product teams operate. We reduced our weekly status meetings by 70% and cut delivery cycles by 3 weeks.',
    name: 'Sarah Lin',
    role: 'VP of Product Operations',
    company: 'Kinetix Software (Fictional)',
    avatarInitials: 'SL',
    avatarBg: 'bg-blue-600',
  },
  {
    id: 'test-2',
    quote: 'The automation builder is genuinely game-changing. Our engineering leads spend their time building software instead of re-entering ticket metadata.',
    name: 'Marcus Vance',
    role: 'Head of Engineering',
    company: 'PulseCore Technologies (Fictional)',
    avatarInitials: 'MV',
    avatarBg: 'bg-indigo-600',
  },
  {
    id: 'test-3',
    quote: 'For the first time, our executive team has real-time visibility into cross-functional project health. The ROI on Flowly was immediate in month one.',
    name: 'Elena Rostova',
    role: 'Chief Operating Officer',
    company: 'ApexPoint Global (Fictional)',
    avatarInitials: 'ER',
    avatarBg: 'bg-slate-700',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'For individuals and small teams getting started with structured workflows.',
    ctaText: 'Start Free Forever',
    features: [
      'Up to 5 team members',
      'Unlimited personal boards & lists',
      'Basic workflow automation (100 runs/mo)',
      '1 GB secure cloud storage',
      'Community support & templates',
      'Mobile apps (iOS & Android)',
    ],
  },
  {
    id: 'pro',
    name: 'PRO',
    monthlyPrice: 19,
    annualPrice: 15,
    description: 'For growing teams requiring robust automation, analytics, and custom collaboration.',
    isPopular: true,
    ctaText: 'Start 14-Day Free Trial',
    features: [
      'Unlimited team members',
      'Advanced multi-step automations (5,000 runs/mo)',
      'Real-time analytics & custom charts',
      'Gantt charts & timeline view',
      '50 GB cloud storage per seat',
      'Guest access & granular permissions',
      'Priority email & chat support',
    ],
  },
  {
    id: 'business',
    name: 'BUSINESS',
    monthlyPrice: 49,
    annualPrice: 39,
    description: 'For larger teams and enterprises needing advanced compliance, security, and scale.',
    ctaText: 'Contact Sales',
    features: [
      'Everything in Pro included',
      'Unlimited automation runs',
      'SAML SSO & Okta integration',
      'Custom audit logs & enterprise SLA (99.99%)',
      'Dedicated Customer Success Manager',
      'Role-based granular access control (RBAC)',
      'Custom data residency & HIPAA compliance',
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is Flowly?',
    answer: 'Flowly is a modern team workflow and productivity platform that unifies project tracking, task automation, team communication, and live performance analytics into one intuitive interface.',
  },
  {
    id: 'faq-2',
    question: 'Is there a free plan?',
    answer: 'Yes! Our Starter plan is completely free forever for teams up to 5 members with unlimited boards, core task management, and basic automation rules.',
  },
  {
    id: 'faq-3',
    question: 'Can I invite my team?',
    answer: 'Absolutely. You can invite teammates via email, Slack, or shareable link with customizable roles (Viewer, Editor, Admin) so everyone has appropriate access.',
  },
  {
    id: 'faq-4',
    question: 'Can Flowly integrate with other tools?',
    answer: 'Yes, Flowly connects seamlessly with popular tools like Slack, GitHub, Google Workspace, Figma, Jira, Zoom, and Zapier, as well as REST APIs and webhooks.',
  },
  {
    id: 'faq-5',
    question: 'Is my data secure?',
    answer: 'Security is paramount. We employ AES-256 encryption at rest, TLS 1.3 in transit, SOC2 Type II compliance standards, and continuous automated vulnerability monitoring.',
  },
  {
    id: 'faq-6',
    question: 'Can I cancel anytime?',
    answer: 'Yes, there are no long-term lock-in contracts. You can upgrade, downgrade, or cancel your subscription at any time directly from your workspace billing dashboard.',
  },
  {
    id: 'faq-7',
    question: 'Do you offer business plans?',
    answer: 'Yes, our Business and Enterprise plans offer tailored onboarding, custom SLAs, dedicated Customer Success managers, SAML SSO, and volume licensing discounts.',
  },
  {
    id: 'faq-8',
    question: 'How do I get started?',
    answer: 'Getting started takes under 2 minutes. Click "Start for free", sign up with your work email or Google account, select a template, and invite your colleagues.',
  },
];
