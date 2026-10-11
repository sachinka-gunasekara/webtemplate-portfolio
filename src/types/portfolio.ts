export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  visualType: 'saas-dashboard' | 'ai-editor' | 'creative-studio' | 'task-board';
  demoUrl?: string;
  repoUrl?: string;
}

export interface SkillGroup {
  category: string;
  skills: {
    name: string;
    tag?: string;
  }[];
}

export interface Service {
  number: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface ValueCard {
  title: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  availability: string;
  headline: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  shortDescription: string;
  aboutHeadline: string;
  aboutBio: string[];
  approachCards: ValueCard[];
  email: string;
  github: string;
  linkedin: string;
  ctaText: string;
}
