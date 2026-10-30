import type { ProjectItem } from '../types/portfolio.types';

export const projectsData: ProjectItem[] = [
  {
    id: 'flight-booking-platform',
    title: 'Mobile-First Flight Booking Experience',
    domain: 'Travel & FinTech Ecosystem',
    role: 'Senior Frontend Engineer (Globant)',
    clientContext: 'Tier-1 Consumer Flight Booking Platform',
    period: '2024 – 2026',
    badge: '40% Filter Efficiency Gain',
    shortDescription:
      'A high-performance, mobile-first flight booking interface redesigned for smooth exploration, rapid seat and fare selection, and minimal re-render latency.',
    problemStatement:
      'Mobile travelers faced cluttered result lists and high interaction friction, relying on cumbersome multi-step sorting and repetitive filter adjustments that caused high bounce rates on smaller screens.',
    solution:
      'Architected a modular React interface with streamlined state boundaries to eliminate unnecessary re-renders. Instrumented granular Adobe Analytics tracking across search-to-book funnels and released an intent-aware recommended-flights filter validated through Split.io A/B experimentation.',
    keyContributions: [
      'Engineered mobile-first React component architecture focused on quick fare comparisons and legible flight timelines.',
      'Instrumented Adobe Analytics across flight search queries, impression cards, and seat picks to decode friction points.',
      'Shipped an intelligent recommended-flights filter based on observed booking behavior, reducing decision fatigue.',
      'Created and maintained a WCAG 2.1-compliant SCSS component library that cut frontend delivery cycles across the engineering team.',
      'Managed zero-downtime feature rollouts and multivariate experiments using Split.io.',
    ],
    impactMetrics: [
      '40% reduction in sort-by filter clicks following the rollout of the recommended-flights filter.',
      '35% reduction in UI development time across the team using the shared WCAG-compliant design system.',
      'Significant reduction in redundant re-renders across dynamic flight filter modifications.',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'SCSS Theming',
      'Adobe Analytics',
      'Split.io',
      'WCAG 2.1 AA',
      'Performance Optimization',
    ],
    confidentialityNote:
      'Developed under NDA for a major consumer travel platform; sensitive client identifiers and internal endpoints are omitted.',
  },
  {
    id: 'ticket-management-pwa',
    title: 'Enterprise Support & Ticket Management PWA',
    domain: 'Enterprise Operations & Vendor Workflows',
    role: 'Specialist Programmer (Infosys)',
    clientContext: 'Enterprise B2B Incident & Vendor Platform',
    period: '2022 – 2024',
    badge: '30% Latency Impact Cut',
    shortDescription:
      'A Progressive Web Application (PWA) bridging internal business operators with third-party vendors for low-latency support triage and real-time resolution.',
    problemStatement:
      'Enterprise teams struggled with sluggish ticket updating, missing status alerts between external vendors, and high API latency over variable corporate networks during peak hours.',
    solution:
      'Engineered an accessible, role-based PWA utilizing React, Redux, and TypeScript. Implemented fine-grained memoization and selective re-rendering strategies to insulate the interface from slow API responses, complemented by a real-time unread/seen notification layer.',
    keyContributions: [
      'Architected distinct role-based views and permission matrices for internal employees and vendor support engineers.',
      'Designed a live unread/seen notification system to guarantee immediate visibility on urgent ticket updates.',
      'Implemented custom React memoization selectors and localized state trees to prevent broad tree re-renders.',
      'Packaged the tool as a robust Progressive Web App (PWA) with offline readiness and predictable caching.',
    ],
    impactMetrics: [
      '30% reduction in the perceptual impact of API latency across mission-critical ticket queues.',
      'Seamless multi-vendor collaboration with verified zero cross-role notification drop rates.',
      'Sub-second UI responsiveness maintained across tables containing hundreds of active support threads.',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Redux',
      'PWA Architecture',
      'REST APIs',
      'Memoization Patterns',
      'Responsive Design',
    ],
    confidentialityNote:
      'Enterprise internal platform delivered under NDA; project architecture details presented in accordance with non-disclosure guidelines.',
  },
  {
    id: 'ml-document-processing',
    title: 'Intelligent Document Processing & Insights Hub',
    domain: 'Enterprise AI & Cognitive Automation',
    role: 'Digital Specialist Engineer (Infosys)',
    clientContext: 'Automated Document Intelligence Pipeline',
    period: '2021 – 2022',
    badge: 'Workflow Automation',
    shortDescription:
      'An enterprise React dashboard that summarizes, categorizes, and extracts structured insights from massive unstructured business document repositories using cloud ML SDKs.',
    problemStatement:
      'Business analysis teams were overwhelmed by manual data entry, manual document classification, and hours lost deciphering complex documents without automated summarization.',
    solution:
      'Built an intuitive, intent-driven React dashboard that directly interfaces with cloud machine learning SDKs. Created a streamlined bulk-upload workflow where users specify their business objective and the frontend orchestrates model execution and summaries.',
    keyContributions: [
      'Designed interactive React dashboards displaying OCR previews, automated summaries, and extracted metadata cards.',
      'Created an intent-driven bulk processing workflow, eliminating the need for operators to understand ML hyperparameters.',
      'Integrated resilient cloud ML service SDKs with real-time job status polling, progress meters, and error fallbacks.',
      'Structured clear export pipelines for parsed JSON, CSV, and tabular document insights.',
    ],
    impactMetrics: [
      'Replaced time-consuming manual document categorization with automated bulk analysis.',
      'Drastically shortened business turnaround times for document segregation and compliance verification.',
      'Provided clear visual insight confidence scoring directly to operational analysts.',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Cloud ML SDKs',
      'REST APIs',
      'Document Parsing',
      'State Management',
      'Data Visualization',
    ],
    confidentialityNote:
      'Proprietary machine learning operations system developed under client NDA; workflow patterns represented without proprietary client IP.',
  },
  {
    id: 'openigloo-mobile-discovery',
    title: 'openigloo — Mobile Property Discovery & Civic Housing',
    domain: 'PropTech & Civic Housing Transparency',
    role: 'Software Engineer (Deqode)',
    clientContext: 'openigloo Public Application',
    period: '2021',
    badge: '30% Discovery Efficiency',
    shortDescription:
      'A mobile discovery and civic housing interface enabling urban renters to explore apartment reviews, building violations, and property listings through a synchronized map/list dual view.',
    problemStatement:
      'Urban apartment seekers found it difficult to correlate physical map locations with building ratings and landlord reviews when switching between scrolling lists and map pins.',
    solution:
      'Engineered an interactive mobile dual-view utilizing the Google Maps API with synchronized bi-directional state: scrolling through property cards immediately centers and spotlights the corresponding map pin, and selecting a pin scrolls smoothly to the card.',
    keyContributions: [
      'Built a mobile-first list and map dual-view layout optimized for rapid spatial scanning and touch ergonomics.',
      'Engineered rock-solid bi-directional state synchronization between Google Maps pins and the horizontal property carousel.',
      'Minimized layout shifts and frame drops during fast panning and marker clustering on low-spec mobile devices.',
      'Ensured fluid transitions between summary building cards and deep tenant review threads.',
    ],
    impactMetrics: [
      '30% improvement in property discovery and search efficiency across mobile sessions.',
      'Eliminated UI desynchronization glitches between active map markers and card carousels.',
      'Delivered smooth 60fps touch interactions during map panning and card browsing.',
    ],
    technologies: [
      'React Native / React',
      'JavaScript (ES6+)',
      'Google Maps API',
      'Mobile UX',
      'State Synchronization',
      'Performance Profiling',
    ],
    liveUrl: 'https://www.openigloo.com',
  },
];
