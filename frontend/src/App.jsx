import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ParticleField from './components/three/ParticleField';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Global 3D particle background */}
      <ParticleField />

      {/* Subtle grid overlay */}
      <div className="fixed inset-0 bg-subtle-grid bg-grid opacity-40 pointer-events-none z-0" />

      {/* Content */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
