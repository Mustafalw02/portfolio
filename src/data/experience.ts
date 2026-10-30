import type { ExperienceItem } from '../types/portfolio.types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'epam-systems',
    company: 'EPAM Systems',
    location: 'Pune, India',
    period: 'Apr 2026 – Present',
    isCurrent: true,
    summary:
      'Leading enterprise frontend modernization and building accessible component architecture for business-critical operational platforms.',
    roles: [
      {
        title: 'Senior Software Engineer',
        period: 'Apr 2026 – Present',
        highlights: [
          'Accelerated daily business workflows by architecting bulk checklist approvals and surfacing critical decision metrics directly on operational dashboards, eliminating tedious data-hunting.',
          'Migrated legacy Sencha Ext JS enterprise modules to modern React with TypeScript, Hooks, and Redux Toolkit, modernizing mission-critical workflows while strictly preserving complex business logic.',
          'Built accessible, responsive, WCAG 2.1-compliant React and SCSS components contributing to an enterprise-wide shared frontend design system.',
        ],
      },
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'SCSS',
      'WCAG 2.1',
      'Design Systems',
      'Sencha Ext JS',
    ],
  },
  {
    id: 'globant',
    company: 'Globant',
    location: 'Pune, India',
    period: 'May 2024 – Apr 2026',
    summary:
      'Delivered mobile-first flight booking experiences and standardized accessible component architecture for a tier-1 travel platform.',
    roles: [
      {
        title: 'Senior Software Engineer',
        period: 'May 2024 – Apr 2026',
        highlights: [
          'Led the frontend redesign of a mobile-first flight booking application, engineering modular React components, robust state management, and eliminating redundant re-renders for fluid checkout flows.',
          'Decreased sort-by filter clicks by 40% through rigorous Adobe Analytics instrumentation across flight search queries, view behaviors, and bookings, shipping a high-intent recommended-flights filter.',
          'Orchestrated safe feature rollouts and data-driven A/B experiments using Split.io to evaluate new flight booking capabilities prior to full production release.',
          'Cut team UI development turnaround time by 35% by designing and maintaining a comprehensive, WCAG 2.1-compliant React component library with tokenized SCSS theming.',
        ],
      },
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'SCSS Theming',
      'Adobe Analytics',
      'Split.io',
      'WCAG 2.1',
      'A/B Testing',
    ],
  },
  {
    id: 'infosys',
    company: 'Infosys Limited',
    location: 'Pune, India',
    period: 'Oct 2021 – May 2024',
    summary:
      'Engineered enterprise support platforms, real-time vendor collaboration systems, and ML-assisted document processing suites.',
    roles: [
      {
        title: 'Specialist Programmer',
        period: 'Oct 2022 – May 2024',
        highlights: [
          'Designed and developed an end-to-end support ticket management platform enabling internal users to raise issues and external vendors to track, prioritize, and resolve them seamlessly.',
          'Built responsive role-based dashboards and a real-time unread/seen notification system bridging users and support vendors.',
          'Mitigated the impact of API latency by 30% across data-heavy ticket lists and detail views through memoization patterns and selective re-rendering.',
        ],
      },
      {
        title: 'Digital Specialist Engineer',
        period: 'Oct 2021 – Oct 2022',
        highlights: [
          'Reduced manual document inspection and categorization for operational teams by engineering React dashboards that summarize, classify, and extract actionable insights via cloud ML SDKs.',
          'Streamlined bulk document processing with an intent-driven workflow where non-technical operators define business goals while backend orchestration selects suitable ML models.',
        ],
      },
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Redux',
      'PWA',
      'REST APIs',
      'Cloud ML SDKs',
      'Performance Optimization',
      'State Management',
    ],
  },
  {
    id: 'deqode',
    company: 'Deqode',
    location: 'India',
    period: 'Jan 2021 – Oct 2021',
    summary:
      'Developed core mobile discovery experiences and interactive mapping features for the openigloo civic housing platform.',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Jan 2021 – Oct 2021',
        highlights: [
          'Improved property discovery and navigation efficiency by 30% through a mobile list/map dual-view built on Google Maps APIs.',
          'Solved complex bi-directional UI state synchronization between interactive map markers and the property cards carousel for smooth spatial browsing.',
        ],
      },
    ],
    technologies: [
      'React Native / React',
      'JavaScript (ES6+)',
      'Google Maps API',
      'State Synchronization',
      'Mobile UX',
    ],
  },
];
