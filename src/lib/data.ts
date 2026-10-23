export const personal = {
  name: 'Apeksha Ulvekar',
  title: 'Full Stack Developer',
  role: 'Associate Consultant at Oracle Financial Services Software',
  location: 'Bengaluru',
  intro:
    'Building and enhancing enterprise applications with Java, Spring Boot, React, and SQL.',
  email: 'apekshaulvekar55@gmail.com',
  github: 'https://github.com/ApekshaUl',
  linkedin: 'https://www.linkedin.com/in/apekshaulvekar/',
  leetcode: 'https://leetcode.com/u/Apeksha_Ulvekar/',
  resumeHref: '/Apeksha_Ulvekar_Resume.pdf',
  availability: 'Available for engineering opportunities',
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const experience = [
  {
    company: 'Oracle Financial Services Software (OFSS)',
    role: 'Associate Consultant',
    location: 'Bengaluru',
    period: 'August 2024 – Present',
    points: [
      'Develop and enhance Java/Spring Boot modules and extractor processes for database-driven data processing, file generation, and client delivery.',
      'Automate file-transfer workflows using AutoSys, batch jobs, and Managed File Transfer configurations, including file mappings and whitelisting.',
      'Built a React and Spring Boot checksum-validation tool to compare source and destination files and identify discrepancies.',
      'Enhance extractor logging and automated missing-file email alerts.',
      'Support internal API integrations, dashboard enhancements, debugging, and DEV/UAT release preparation.',
    ],
  },
  {
    company: 'Tradeshala',
    role: 'Capital Market Analyst',
    location: 'Remote',
    period: 'February 2024 – July 2024',
    points: [
      'Analyzed cryptocurrency market trends to identify patterns and support strategy formulation.',
    ],
  },
  {
    company: 'IIHMR-B',
    role: 'Data Science Intern',
    location: 'Bengaluru',
    period: 'June 2023 – November 2023',
    points: [
      'Collected and processed approximately 5,000 Google reviews using web scraping.',
      'Contributed to a research study involving data labeling and Python-based aspect-based sentiment analysis.',
    ],
  },
];

export const projects = [
  {
    name: 'Wealth Management API',
    status: 'In Progress',
    category: 'Featured Project',
    summary:
      'A full-stack wealth management application with a React frontend and Java Spring Boot backend, backed by PostgreSQL.',
    overview:
      'Building a full-stack wealth management application with a React frontend and Java Spring Boot backend, backed by PostgreSQL. Developing structured REST APIs with DTOs, validation, centralized exception handling, and pagination, while applying dependency injection, AOP-based logging, and correlation-ID interceptors.',
    tech: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'JDBC'],
    repo: 'https://github.com/ApekshaUl/wealth-management',
    live: null,
    featured: true,
    implemented: [
      'REST APIs using Spring Boot',
      'DTO-based request and response handling',
      'Request validation',
      'Centralized exception handling',
      'Pagination',
      'Dependency injection',
      'AOP-based logging',
      'Correlation-ID interceptors',
      'API testing with Postman and Swagger/OpenAPI',
    ],
  },
  {
    name: 'Cinemate',
    status: 'Live',
    category: 'Movie Discovery App',
    summary: 'A responsive movie-discovery application with external API integration and user-specific lists.',
    overview:
      'A movie discovery and watchlist experience built around external API data, responsive UI patterns, and user authentication.',
    tech: ['React.js', 'Java', 'Firebase'],
    repo: 'https://github.com/ApekshaUl/cinemate',
    live: 'https://cinemate-apex.netlify.app/',
    featured: false,
    implemented: [
      'Responsive movie discovery',
      'External API integration',
      'Dynamic search',
      'User authentication',
      'Watchlist management',
    ],
  },
  {
    name: 'Codebook',
    status: 'Live',
    category: 'Web App',
    summary: 'A learning and reference-oriented application for bookmarking and organizing useful technical knowledge.',
    overview:
      'A focused, practical front-end project that presents key notes and resources in a structured, easy-to-navigate format.',
    tech: ['React', 'JavaScript', 'Netlify'],
    repo: 'https://github.com/ApekshaUl/codebook',
    live: 'https://codebook-apex.netlify.app/',
    featured: false,
    implemented: ['Responsive layout', 'Reference content organization', 'Clean user interface'],
  },
  {
    name: 'WriteNode',
    status: 'Live',
    category: 'Web App',
    summary: 'A writing-focused web application with a polished editorial interface.',
    overview:
      'A clean content-oriented application designed to support writing workflows in a simple, user-friendly interface.',
    tech: ['React', 'JavaScript', 'Netlify'],
    repo: 'https://github.com/ApekshaUl',
    live: 'https://writenode-apex.netlify.app/',
    featured: false,
    implemented: ['Responsive interface', 'Content-first UX', 'Deployment-ready frontend'],
  },
  {
    name: 'ShopMate Redux',
    status: 'Repository',
    category: 'Frontend Project',
    summary: 'A Redux-based shopping interface and state-management practice project.',
    overview:
      'A front-end e-commerce learning project built around structured state management and shopping flow interactions.',
    tech: ['React.js', 'Redux', 'JavaScript'],
    repo: 'https://github.com/ApekshaUl/shopmate-redux',
    live: null,
    featured: false,
    implemented: ['State-driven shopping flow', 'Redux patterns', 'Product browsing experience'],
  },
  {
    name: 'TaskMate',
    status: 'Project dashboard',
    category: 'Management Dashboard',
    summary: 'A project-management dashboard application built for task organization and planning workflows.',
    overview:
      'A Netlify-hosted project management dashboard focused on planning and tracking tasks in a cleaner workspace.',
    tech: ['React', 'JavaScript'],
    repo: 'https://app.netlify.com/projects/taskmate-apex/overview',
    live: 'https://app.netlify.com/projects/taskmate-apex/overview',
    featured: false,
    implemented: ['Task-oriented dashboard', 'Project workflow tracking'],
  },
];

export const skillGroups = [
  {
    title: 'Programming and Web',
    items: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    items: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'Spring Security', 'REST APIs', 'JDBC'],
  },
  {
    title: 'Frontend',
    items: ['React.js'],
  },
  {
    title: 'Testing',
    items: ['JUnit', 'Mockito', 'Postman'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'Tools and Platforms',
    items: ['Git', 'Maven', 'Jenkins', 'AutoSys', 'JFrog', 'Linux', 'OCI', 'Swagger/OpenAPI'],
  },
];

export type Certification = {
  title: string;
  href?: string;
};

export const certifications: Certification[] = [
  {
    title: 'Oracle Certified Professional: Java SE 17 Developer',
    href: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=4813955B13053E4C708C727C9E2EC882DB520664925A2A3306299B1D9DA0C4C4',
  },
  {
    title: 'Oracle Certified Professional, Java EE 7 Application Developer',
  },
  {
    title: 'Oracle Database 23ai: SQL Workshop',
    href: '/Oracle Database 23ai- SQL Workshop.pdf',
  },
  {
    title: 'Unix and Linux Essentials',
    href: '/UNIX and Linux Essentials.pdf',
  },
  {
    title: 'SQL (Intermediate) — HackerRank',
    href: 'https://www.hackerrank.com/certificates/4672f757f2f0',
  },
  {
    title: 'React JS Masterclass',
    href: 'https://www.credly.com/earner/earned/badge/945ffce1-1b43-4ed0-a1dd-0f9f6dae0d34',
  },
  {
    title: 'AWS Cloud Practitioner Course',
    href: 'https://www.credly.com/earner/earned/badge/7d9c293d-5d20-48af-be82-6533ba55d9a6',
  },
  {
    title: 'Introduction to Generative AI',
    href: 'https://www.skills.google/public_profiles/5ae47fdc-76fd-472e-90aa-3f4ef421d703/badges/4586785?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
  },
  {
    title: 'Core Spring',
    href: '/Core Spring.pdf',
  },
  {
    title: 'Spring Boot Fundamentals',
    href: '/Spring Boot Fundamentals.pdf',
  },
  {
    title: 'FSGIU Core Spring and Spring MVC',
    href: '/FSGIU Core Spring and Spring MVC.pdf',
  },
  {
    title: 'Functional Testing with Java, Selenium and SoapUI',
    href: '/Functional Testing with Java, Selenium and SoapUI.pdf',
  },
  {
    title: 'Kafka',
    href: '/Kafka.pdf',
  },
  {
    title: 'Introduction to DevOps',
    href: '/Introduction to DevOps.pdf',
  },
  {
    title: 'OCI Generative AI',
    href: '/OCI Generative AI.pdf',
  },
  {
    title: 'Oracle Database 19c - PLSQL Workshop',
    href: '/Oracle Database 19c -PLSQL Workshop.pdf',
  },
  {
    title: 'FSGBU Banking Fundamentals',
    href: '/FSGBU Banking Fundamentals.pdf',
  },
];

export const education = [
  {
    school: 'B.N.M. Institute of Technology',
    degree: 'B.E. in Computer Science Engineering',
    period: 'December 2020 – June 2024',
  },
];

export const highlights = [
  'Enterprise Java and Spring Boot delivery',
  'React + data-driven UI work',
  'Process automation in banking workflows',
];
