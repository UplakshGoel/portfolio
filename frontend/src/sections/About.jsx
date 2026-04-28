import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import SectionTitle from '../components/ui/SectionTitle';
import TechCube from '../components/three/TechCube';
import { personalInfo } from '../data/placeholder';

export default function About() {
  return (
    <section id="about" className="relative">
      {/* Decorative divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent" />

      <div className="section-container">
        <SectionTitle
          title="About Me"
          subtitle="A glimpse into who I am and what drives me to build"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 3D Cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-[300px] sm:h-[350px] lg:h-[400px] order-2 lg:order-1"
          >
            <Canvas
              camera={{ position: [0, 0, 4.5], fov: 45 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
            >
              <TechCube />
            </Canvas>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="glass-card p-6 sm:p-8 mb-8">
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg whitespace-pre-line">
                {personalInfo.bio}
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personalInfo.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card p-4 text-center group"
                >
                  <div className="text-2xl sm:text-3xl font-black text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
