
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-green-500/30 text-green-400 py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="terminal-window p-6">
            <h3 className="text-2xl font-mono font-bold text-green-400 mb-4" style={{
              textShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
            }}>
              $ Temi Kayode
            </h3>
            <p className="text-green-300 leading-relaxed font-mono">
              $ Full Stack Developer & Product Owner passionate about creating 
              innovative solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="terminal-window p-6">
            <h4 className="text-lg font-mono font-semibold mb-4 text-green-400">$ Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-green-300 hover:text-green-400 transition-colors font-mono"
                  >
                    $ ./{link.toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="terminal-window p-6">
            <h4 className="text-lg font-mono font-semibold mb-4 text-green-400">$ Let's Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/TemiKayode"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/50 hover:bg-green-500/10 w-10 h-10 rounded border border-green-500/30 flex items-center justify-center transition-colors hover:border-green-500"
              >
                <Github size={20} className="text-green-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/temitayo-kayode/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/50 hover:bg-green-500/10 w-10 h-10 rounded border border-green-500/30 flex items-center justify-center transition-colors hover:border-green-500"
              >
                <Linkedin size={20} className="text-green-400" />
              </a>
              <a
                href="mailto:temitayokayode5@gmail.com"
                className="bg-black/50 hover:bg-green-500/10 w-10 h-10 rounded border border-green-500/30 flex items-center justify-center transition-colors hover:border-green-500"
              >
                <Mail size={20} className="text-green-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-500/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-300 text-sm mb-4 md:mb-0 font-mono">
            $ © {currentYear} Temi Kayode. All rights reserved.
          </p>
          <p className="text-green-300 text-sm flex items-center font-mono">
            $ Built with <Heart size={16} className="mx-1 text-green-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
