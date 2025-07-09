
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold lime-gradient-text mb-4">
              Temi Kayode
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer & Product Owner passionate about creating 
              innovative solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-lime-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/TemiKayode"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-lime-500 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/temitayo-kayode/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-lime-500 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:temitayokayode5@gmail.com"
                className="bg-gray-700 hover:bg-lime-500 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Temi Kayode. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Built with <Heart size={16} className="mx-1 text-lime-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
