import { PersonalInfo, Project, SkillGroup, Service, ProcessStep } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Alex Morgan',
  role: 'Software Developer & UI/UX Engineer',
  location: 'Based in Sri Lanka · Working worldwide',
  availability: 'Available for select projects',
  headline: {
    prefix: 'I build digital experiences that ',
    highlight: 'make ideas work.',
    suffix: ''
  },
  shortDescription: "I'm a software developer focused on building clean, responsive, and user-friendly web applications for businesses and startups.",
  aboutHeadline: 'A little about me',
  aboutBio: [
    "I'm a developer who enjoys turning ideas into useful, well-crafted digital products. I care about clean interfaces, thoughtful user experiences, and writing code that is easy to understand and maintain.",
    "I enjoy working through challenges, learning new technologies, and finding practical ways to turn complex ideas into simple experiences."
  ],
  approachCards: [
    {
      title: 'My Approach',
      description: 'User-focused, practical, detail-oriented'
    },
    {
      title: 'My Focus',
      description: 'Responsive interfaces and web applications'
    },
    {
      title: 'My Mindset',
      description: 'Continuous learning and thoughtful problem-solving'
    }
  ],
  email: 'alex.morgan.dev@example.com',
  github: 'https://github.com/alex-morgan-dev',
  linkedin: 'https://linkedin.com/in/alex-morgan-dev',
  ctaText: "Let's Talk"
};

export const projects: Project[] = [
  {
    id: 'project-1',
    number: '01',
    title: 'SaaS Analytics Dashboard',
    category: 'Web Application',
    description: 'A clean analytics dashboard with interactive charts, data tables, and a responsive layout.',
    detailedDescription: 'Designed and built an enterprise-grade analytics overview with real-time revenue breakdowns, customer retention metrics, customizable time filters, and export capabilities. Engineered with type-safe state management and high-performance CSS grid layouts.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    features: [
      'Interactive key performance indicator cards with trend analysis',
      'Real-time revenue & engagement metric visualizations',
      'Adaptive data grid with column filtering and sorting',
      'Instant dark/light contrast optimization'
    ],
    visualType: 'saas-dashboard',
    demoUrl: '#demo-saas',
    repoUrl: 'https://github.com/alex-morgan-dev/saas-dashboard'
  },
  {
    id: 'project-2',
    number: '02',
    title: 'AI Writing Assistant',
    category: 'AI Web App',
    description: 'An interface for generating, organizing, and refining written content using AI-powered features.',
    detailedDescription: 'A distraction-free writing environment integrating modern generative AI APIs. Features context-aware tone adjustments, smart outline generation, citation assistance, and seamless markdown export for digital creators.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI API'],
    features: [
      'Multi-tone suggestions (Professional, Casual, Punchy, Technical)',
      'Inline prompt completions with non-blocking streaming feedback',
      'Document workspace with autosave and revision timeline',
      'One-click markdown and HTML export'
    ],
    visualType: 'ai-editor',
    demoUrl: '#demo-ai-editor',
    repoUrl: 'https://github.com/alex-morgan-dev/ai-writer'
  },
  {
    id: 'project-3',
    number: '03',
    title: 'Creative Studio Website',
    category: 'Business Website',
    description: 'A bold, minimal website for a creative studio, designed to communicate its services and attract new clients.',
    detailedDescription: 'An editorial-driven digital presence created for an independent branding studio. Emphasizes refined typography, structured white space, smooth micro-interactions, and engaging case study presentations.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Editorial layout with bespoke typographic rhythm',
      'Dynamic project showcase with filterable case studies',
      'Smooth viewport transitions and accessible navigation',
      'Sub-second first contentful paint and SEO optimizations'
    ],
    visualType: 'creative-studio',
    demoUrl: '#demo-studio',
    repoUrl: 'https://github.com/alex-morgan-dev/creative-studio'
  },
  {
    id: 'project-4',
    number: '04',
    title: 'Task Management App',
    category: 'Productivity',
    description: 'A task management interface with project organization, progress tracking, and an intuitive workflow.',
    detailedDescription: 'A streamlined workflow board engineered for agile sprint planning and personal task tracking. Incorporates drag-and-drop status lanes, priority badges, deadline counters, and team tag assignments.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'State Management'],
    features: [
      'Interactive Kanban lanes with instant status updates',
      'Priority tags and deadline indicators',
      'Fast keyboard shortcuts for task creation and search',
      'Fully responsive for quick mobile triage'
    ],
    visualType: 'task-board',
    demoUrl: '#demo-task-board',
    repoUrl: 'https://github.com/alex-morgan-dev/task-management'
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', tag: 'UI Library' },
      { name: 'Next.js', tag: 'Framework' },
      { name: 'TypeScript', tag: 'Type-Safe' },
      { name: 'JavaScript', tag: 'Core' },
      { name: 'HTML & CSS', tag: 'Semantic' },
      { name: 'Tailwind CSS', tag: 'Styling' }
    ]
  },
  {
    category: 'Backend & Integrations',
    skills: [
      { name: 'Node.js', tag: 'Runtime' },
      { name: 'REST APIs', tag: 'Architecture' },
      { name: 'Database Integration', tag: 'SQL & NoSQL' },
      { name: 'AI API Integration', tag: 'LLM Pipelines' }
    ]
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'Git', tag: 'VCS' },
      { name: 'GitHub', tag: 'Collaboration' },
      { name: 'Figma', tag: 'UI Design' },
      { name: 'Responsive Design', tag: 'Cross-Device' },
      { name: 'AI-Assisted Dev', tag: 'Productivity' }
    ]
  }
];

export const services: Service[] = [
  {
    number: '01',
    title: 'Website Development',
    description: 'Responsive landing pages and business websites with a clean, professional design.',
    highlights: [
      'High-converting landing page layouts',
      'Fast loading speed & SEO structure',
      'Pixel-perfect mobile responsiveness',
      'Clean, maintainable source code'
    ]
  },
  {
    number: '02',
    title: 'Web Application Development',
    description: 'Interactive dashboards, custom web applications, and SaaS MVP interfaces.',
    highlights: [
      'Component-based scalable architecture',
      'Interactive data visualization & dashboards',
      'State management & responsive UI logic',
      'Type-safe React & TypeScript foundation'
    ]
  },
  {
    number: '03',
    title: 'AI Integration',
    description: 'Integrating AI APIs into web applications to support useful features and workflows.',
    highlights: [
      'LLM & generative API implementation',
      'Prompt refinement and streaming response UI',
      'Practical productivity automations',
      'Secure API key handling and fallback handling'
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Discuss the idea, goals, requirements, and intended users.',
    deliverable: 'Scope clarity & project brief'
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Agree on the scope, key features, visual direction, and deliverables.',
    deliverable: 'Architecture & component wireframe'
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop the interface, implement functionality, and test responsiveness.',
    deliverable: 'Clean, production-ready code'
  },
  {
    number: '04',
    title: 'Refine',
    description: 'Review feedback, fix issues, and prepare the completed project for handover.',
    deliverable: 'Deployment & documentation'
  }
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' }
];
