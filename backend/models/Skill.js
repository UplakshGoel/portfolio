// ============================================================
// Skill Model — Placeholder data
// ============================================================

const skills = [
  { id: '1', name: 'React', category: 'Frontend', proficiency: 90, icon: 'react' },
  { id: '2', name: 'Tailwind CSS', category: 'Frontend', proficiency: 88, icon: 'tailwind' },
  { id: '3', name: 'JavaScript', category: 'Language', proficiency: 92, icon: 'javascript' },
  { id: '4', name: 'Node.js', category: 'Backend', proficiency: 85, icon: 'nodejs' },
  { id: '5', name: 'Express', category: 'Backend', proficiency: 82, icon: 'express' },
  { id: '6', name: 'MongoDB', category: 'Database', proficiency: 80, icon: 'mongodb' },
  { id: '7', name: 'Neo4j', category: 'Database', proficiency: 85, icon: 'neo4j' },
  { id: '8', name: 'Git', category: 'Tools', proficiency: 85, icon: 'git' },
  { id: '9', name: 'Three.js', category: 'Frontend', proficiency: 70, icon: 'threejs' },
  { id: '10', name: 'TypeScript', category: 'Language', proficiency: 72, icon: 'typescript' },
];

export const getAllSkills = () => skills;
export const getSkillsByCategory = (category) =>
  skills.filter((s) => s.category === category);
