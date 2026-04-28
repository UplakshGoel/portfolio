import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import SectionTitle from '../components/ui/SectionTitle';
import SkillSpheres from '../components/three/SkillSpheres';
import { skills } from '../data/placeholder';

export default function Skills() {
  // Group skills by category for the bar display
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-purple/20 to-transparent" />

      <div className="section-container">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="An interactive constellation of my technical toolkit — hover to explore"
        />

        {/* 3D Skill Constellation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1 }}
          className="h-[350px] sm:h-[420px] lg:h-[480px] mb-16 glass-card overflow-hidden"
        >
          <Canvas
            camera={{ position: [0, 0, 4], fov: 55 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
          >
            <SkillSpheres skills={skills} />
          </Canvas>
        </motion.div>

        {/* Skill bars by category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyber-cyan" />
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, i) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-gray-500">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-dark-700 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: i * 0.08 + 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-purple"
                          style={{
                            boxShadow: '0 0 12px rgba(6, 182, 212, 0.4)',
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
