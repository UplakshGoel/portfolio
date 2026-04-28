/**
 * All placeholder data for the portfolio.
 * Edit these values to customise the portfolio with your real information.
 */

export const personalInfo = {
  name: 'Uplaksh Goel',
  firstName: 'Uplaksh',
  lastName: 'Goel',
  tagline: 'Full Stack Developer',
  roles: [
    'Full Stack Developer',
    'React Enthusiast',
    'Node.js Engineer',
    'Database Architect',
    'UI/UX Thinker',
  ],
  email: 'goeluplaksh@example.com',
  phone: '+919027554150',
  location: 'Greater Noida, India',
  bio: `I'm a passionate full-stack developer who loves building scalable web applications
with modern technologies. I specialise in the MERN stack and graph databases,
combining clean code with beautiful user interfaces. When I'm not coding,
you'll find me exploring new technologies and contributing to open-source projects.`,
  resumeUrl: '#',
  social: {
    github: 'https://github.com/UplakshGoel',
    linkedin: 'https://www.linkedin.com/in/uplaksh-goel/',

  },
  stats: [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Cups of Coffee', value: '∞' },
  ],
};

export const skills = [
  { id: '1', name: 'React', category: 'Frontend', proficiency: 90, icon: 'react', color: '#61DAFB' },
  { id: '2', name: 'Tailwind CSS', category: 'Frontend', proficiency: 88, icon: 'tailwind', color: '#06B6D4' },
  { id: '3', name: 'JavaScript', category: 'Language', proficiency: 92, icon: 'javascript', color: '#F7DF1E' },
  { id: '4', name: 'Node.js', category: 'Backend', proficiency: 85, icon: 'nodejs', color: '#339933' },
  { id: '5', name: 'Express', category: 'Backend', proficiency: 82, icon: 'express', color: '#ffffff' },
  { id: '6', name: 'MongoDB', category: 'Database', proficiency: 80, icon: 'mongodb', color: '#47A248' },
  { id: '7', name: 'Neo4j', category: 'Database', proficiency: 85, icon: 'neo4j', color: '#4581C3' },
  { id: '8', name: 'Git', category: 'Tools', proficiency: 85, icon: 'git', color: '#F05032' },
  { id: '9', name: 'Three.js', category: 'Frontend', proficiency: 70, icon: 'threejs', color: '#ffffff' },
  { id: '10', name: 'TypeScript', category: 'Language', proficiency: 72, icon: 'typescript', color: '#3178C6' },
];

export const projects = [
  {
    id: '1',
    title: 'Project Alpha',
    description:
      'A full-stack web application built with React and Node.js featuring real-time data processing, interactive dashboards, and a responsive design system.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/project-alpha',
    liveUrl: 'https://project-alpha.demo.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Project Beta',
    description:
      'A graph-based analysis tool leveraging Neo4j for relationship mapping, pattern detection, and interactive visualization of complex data structures.',
    techStack: ['React', 'Neo4j', 'Node.js', 'D3.js'],
    githubUrl: 'https://github.com/yourusername/project-beta',
    liveUrl: 'https://project-beta.demo.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Project Gamma',
    description:
      'A modern e-commerce platform with advanced product filtering, Stripe payment integration, order management, and a fully responsive storefront.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/project-gamma',
    liveUrl: 'https://project-gamma.demo.com',
    featured: true,
  },
  {
    id: '4',
    title: 'Project Delta',
    description:
      'An AI-powered content management system with NLP for auto-tagging, smart search, and intelligent content recommendations.',
    techStack: ['React', 'Python', 'TensorFlow', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/project-delta',
    liveUrl: '',
    featured: false,
  },
];

export const certificates = [
  {
    id: '1',
    name: 'Neo4j',
    issuer: 'Neo4j Graph Academy',
    date: '2026-01-22',
    credentialUrl: 'https://graphacademy.neo4j.com/u/7438803a-8276-41c4-907f-c14156a57c5a/',
  },
  {
    id: '2',
    name: 'Coursera Certification',
    issuer: 'Coursera',
    date: '2026-03-08',
    credentialUrl: 'https://drive.google.com/drive/folders/1k21qBn40JvQpllhaLKu9S2sCVJY_5NMu?usp=sharing',
  },
  {
    id: '3',
    name: 'Software Engineering',
    issuer: 'NPTEL',
    date: 'Jul-Oct 2025',
    credentialUrl: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS108S56340017010500143',
  },
  {
    id: '4',
    name: 'MATLAB',
    issuer: 'MATLAB',
    date: '24 March 2025',
    credentialUrl: 'https://drive.google.com/drive/folders/1SO7lZtRMeobSRkQkK5-adY_mtPNbmsqN?usp=sharing',
  },
];

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];
