import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';
import { personalInfo } from '../../data/placeholder';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-glass-border bg-dark-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#hero" className="text-lg font-bold text-gradient">
              &lt;{personalInfo.firstName} /&gt;
            </a>
            <p className="text-xs text-gray-500 mt-1">
              Built with <HiHeart className="inline text-cyber-magenta" /> using
              React, Three.js &amp; Node.js
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {personalInfo.social.github && (
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
            )}
            {personalInfo.social.linkedin && (
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-gray-500 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
            )}

          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
