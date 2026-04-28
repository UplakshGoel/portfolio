import SectionTitle from '../components/ui/SectionTitle';
import CertificateCard from '../components/ui/CertificateCard';
import { certificates } from '../data/placeholder';

export default function Certificates() {
  return (
    <section id="certificates" className="relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-purple/20 to-transparent" />

      <div className="section-container">
        <SectionTitle
          title="Certificates"
          subtitle="Continuous learning and professional development credentials"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <CertificateCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
