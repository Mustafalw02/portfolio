export interface PersonalInfo {
  name: string;
  preferredName?: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  phone?: string;
  linkedin: string;
  github?: string;
  availability?: string;
  summary: string;
  yearsOfExperience: string;
}

export interface MetricHighlight {
  value: string;
  label: string;
  detail: string;
}

export interface ExperienceRole {
  title: string;
  period: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  period: string;
  roles: ExperienceRole[];
  technologies: string[];
  summary: string;
  isCurrent?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  domain: string;
  role: string;
  clientContext?: string;
  period?: string;
  shortDescription: string;
  problemStatement: string;
  solution: string;
  keyContributions: string[];
  impactMetrics: string[];
  technologies: string[];
  confidentialityNote?: string;
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Working Knowledge';
    featured?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
}

export interface ContactConfig {
  email: string;
  phone?: string;
  linkedinUrl: string;
  githubUrl?: string;
  location: string;
  formEndpoint?: string; // Optional real endpoint (e.g. Formspree/custom webhook)
}
