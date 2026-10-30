import type { PersonalInfo, ContactConfig, MetricHighlight } from '../types/portfolio.types';

export const personalInfo: PersonalInfo = {
  name: 'Mustafa Lightwala',
  preferredName: 'Mustafa',
  role: 'Frontend Engineer',
  headline: 'Specializing in React, TypeScript, Performance & Accessibility',
  location: 'Pune, India',
  email: 'mustafa.lightwala99@gmail.com',
  phone: '+91-9479573141',
  linkedin: 'https://www.linkedin.com/in/mustafa-lightwala',
  availability: 'Open to high-impact Senior Frontend & Product Engineering roles',
  yearsOfExperience: '5+ Years',
  summary:
    'React and TypeScript frontend engineer with 5+ years of experience engineering accessible, high-performance web applications across enterprise and consumer domains. Proven track record of shipping analytics-driven UI features that reduced filter interactions by 40%, architecting reusable WCAG 2.1-compliant design systems, and systematically eliminating redundant re-renders to deliver fluid digital experiences.',
};

export const verifiedMetrics: MetricHighlight[] = [
  {
    value: '40%',
    label: 'Filter Click Reduction',
    detail: 'Instrumented Adobe Analytics and engineered smart recommended-flights filtering.',
  },
  {
    value: '35%',
    label: 'UI Dev Acceleration',
    detail: 'Designed & maintained WCAG 2.1-compliant reusable React/SCSS design system.',
  },
  {
    value: '30%',
    label: 'API Latency Impact Cut',
    detail: 'Applied disciplined memoization and selective re-rendering across ticket workflows.',
  },
  {
    value: '30%',
    label: 'Discovery Efficiency',
    detail: 'Engineered bi-directional list/map dual-view state synchronization on Google Maps.',
  },
];

export const contactConfig: ContactConfig = {
  email: personalInfo.email,
  phone: personalInfo.phone,
  linkedinUrl: personalInfo.linkedin,
  location: personalInfo.location,
  // If user sets up a Formspree / endpoint in .env, Vite will pick it up here:
  formEndpoint: import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '',
};

export const siteMetadata = {
  title: 'Mustafa Lightwala | Senior Frontend Engineer · React & TypeScript',
  description:
    'Personal portfolio of Mustafa Lightwala — Senior Frontend Engineer with 5+ years building accessible, high-performance web applications using React, TypeScript, and modern web architectures.',
  siteUrl: 'https://mustafalightwala.dev',
  ogImage: '/og-image.png',
  locale: 'en_US',
};
