import { motion } from 'framer-motion';

/**
 * Reusable section title with animated gradient underline.
 */
export default function SectionTitle({ title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-16 ${alignClass}`}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-1 w-20 rounded-full bg-cyber-gradient ${
          align === 'left' ? '' : 'mx-auto'
        }`}
      />
    </motion.div>
  );
}
