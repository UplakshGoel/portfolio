// ============================================================
// Certificate Model — Placeholder data
// ============================================================

const certificates = [
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

export const getAllCertificates = () => certificates;
export const getCertificateById = (id) => certificates.find((c) => c.id === id);
