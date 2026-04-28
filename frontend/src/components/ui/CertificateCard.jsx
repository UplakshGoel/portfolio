import { motion } from 'framer-motion';
import { HiAcademicCap, HiExternalLink } from 'react-icons/hi';

export default function CertificateCard({ cert, index = 0 }) {
  const formattedDate = new Date(cert.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card glow-border p-6 flex flex-col h-full group"
    >
      <div className="p-3 rounded-xl bg-cyber-purple/10 text-cyber-purple w-fit mb-4">
        <HiAcademicCap size={24} />
      </div>

      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyber-purple transition-colors duration-300">
        {cert.name}
      </h3>

      <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
      <p className="text-xs text-gray-500 mb-5 font-mono">{formattedDate}</p>

      <div className="mt-auto relative z-20 pointer-events-auto">
        {cert.credentialUrl && (
          <button
            onClick={() => window.open(cert.credentialUrl, '_blank', 'noopener,noreferrer')}
            className="inline-flex items-center gap-2 text-sm text-cyber-purple hover:text-cyber-cyan transition-colors duration-300 pointer-events-auto cursor-pointer"
          >
            View Credential <HiExternalLink />
          </button>
        )}
      </div>
    </motion.div>
  );
}
