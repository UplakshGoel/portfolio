// ============================================================
// Project Model — Placeholder data
// Replace with Mongoose schema when MongoDB is connected:
//
//   import mongoose from 'mongoose';
//   const projectSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: String,
//     techStack: [String],
//     thumbnail: String,
//     githubUrl: String,
//     liveUrl: String,
//     featured: { type: Boolean, default: false },
//   }, { timestamps: true });
//   export default mongoose.model('Project', projectSchema);
// ============================================================

const projects = [
  {
    id: '1',
    title: 'SkillSwap',
    description:
      'A skill based project matchmaking platform for students and professionals where they can find projects and team members according to their skills and interests using graph based database technology.',
    techStack: ['React', 'Node.js', 'Neo4j', 'Tailwind CSS'],
    thumbnail: '',
    githubUrl: 'https://github.com/UplakshGoel/SkillSwap',
    liveUrl: 'https://skill-swap-project-team-finder.vercel.app/',
    featured: true,
  },
  {
    id: '2',
    title: 'Project Beta',
    description:
      'A graph-based social network analysis tool leveraging Neo4j for relationship mapping, pattern detection, and interactive visualization of complex data structures.',
    techStack: ['React', 'Neo4j', 'Node.js', 'D3.js'],
    thumbnail: '',
    githubUrl: 'https://github.com/yourusername/project-beta',
    liveUrl: 'https://project-beta.demo.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Project Gamma',
    description:
      'A modern e-commerce platform with advanced product filtering, Stripe payment integration, order tracking, and a fully responsive storefront.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    thumbnail: '',
    githubUrl: 'https://github.com/yourusername/project-gamma',
    liveUrl: 'https://project-gamma.demo.com',
    featured: true,
  },
  {
    id: '4',
    title: 'Project Delta',
    description:
      'An AI-powered content management system with natural language processing for auto-tagging, smart search, and content recommendations.',
    techStack: ['React', 'Python', 'TensorFlow', 'MongoDB'],
    thumbnail: '',
    githubUrl: 'https://github.com/yourusername/project-delta',
    liveUrl: '',
    featured: false,
  },
];

export const getAllProjects = () => projects;
export const getProjectById = (id) => projects.find((p) => p.id === id);
export const getFeaturedProjects = () => projects.filter((p) => p.featured);
