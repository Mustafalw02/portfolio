import type { SkillCategory } from '../types/portfolio.types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Core Frontend & Languages',
    description: 'Foundational languages and primary framework stack used daily in production.',
    skills: [
      { name: 'React.js', level: 'Core', featured: true },
      { name: 'TypeScript', level: 'Core', featured: true },
      { name: 'JavaScript (ES6+)', level: 'Core', featured: true },
      { name: 'HTML5 Semantic Architecture', level: 'Core', featured: true },
      { name: 'CSS3 & SCSS', level: 'Core', featured: true },
      { name: 'React Native', level: 'Working Knowledge' },
      { name: 'Angular (NgRx, RxJS)', level: 'Working Knowledge' },
      { name: 'Java', level: 'Working Knowledge' },
    ],
  },
  {
    title: 'Performance & Accessibility (A11y)',
    description: 'Specialized practices for crafting fast, universally usable digital products.',
    skills: [
      { name: 'Core Web Vitals Optimization', level: 'Core', featured: true },
      { name: 'WCAG 2.1 / 2.2 AA Compliance', level: 'Core', featured: true },
      { name: 'Render Optimization & Profiling', level: 'Core', featured: true },
      { name: 'Accessible ARIA Landmarks & Focus Management', level: 'Core', featured: true },
      { name: 'Memoization & State Pruning', level: 'Advanced' },
      { name: 'Cumulative Layout Shift (CLS) Mitigation', level: 'Advanced' },
    ],
  },
  {
    title: 'State Architecture & Data Flow',
    description: 'Disciplined application state handling and efficient server integration.',
    skills: [
      { name: 'Redux Toolkit', level: 'Core', featured: true },
      { name: 'Redux (Core)', level: 'Core', featured: true },
      { name: 'React Context API', level: 'Core' },
      { name: 'REST APIs & Data Normalization', level: 'Core', featured: true },
      { name: 'PWA Architecture & Offline Strategy', level: 'Advanced' },
    ],
  },
  {
    title: 'Design Systems & UI Engineering',
    description: 'Building scalable, themeable, cross-browser component systems.',
    skills: [
      { name: 'Reusable Component Libraries', level: 'Core', featured: true },
      { name: 'SCSS Theming & Design Tokens', level: 'Core', featured: true },
      { name: 'Responsive Mobile-First Design', level: 'Core', featured: true },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Material UI & Bootstrap', level: 'Advanced' },
      { name: 'Sencha Ext JS (Legacy Migration)', level: 'Working Knowledge' },
    ],
  },
  {
    title: 'Testing, Experimentation & Tooling',
    description: 'Verification, analytics instrumentation, and continuous integration workflows.',
    skills: [
      { name: 'Jest', level: 'Advanced', featured: true },
      { name: 'React Testing Library', level: 'Advanced', featured: true },
      { name: 'Git & Version Control', level: 'Core', featured: true },
      { name: 'Adobe Analytics Instrumentation', level: 'Advanced', featured: true },
      { name: 'Split.io A/B Experimentation', level: 'Advanced', featured: true },
    ],
  },
];
