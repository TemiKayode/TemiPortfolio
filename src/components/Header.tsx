
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation - About & Experience */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Experience
            </a>
          </div>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center hover:scale-105 transition-all duration-300">
              <span className="text-xl">📸</span>
            </div>
          </div>

          {/* Right Navigation - Projects & Contact */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Contact
            </a>
            
            <div className="flex items-center space-x-4 ml-8">
              <a
                href="https://github.com/TemiKayode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-lime-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/temitayo-kayode/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-lime-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:temitayokayode5@gmail.com"
                className="text-gray-700 hover:text-lime-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-lime-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-effect border-t border-lime-200 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-lime-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex items-center space-x-4 pt-4 border-t border-lime-200">
                <a
                  href="https://github.com/TemiKayode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-lime-600 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/temitayo-kayode/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-lime-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:temitayokayode5@gmail.com"
                  className="text-gray-700 hover:text-lime-600 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
