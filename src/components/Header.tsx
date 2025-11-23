
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { ModeToggle } from "./mode-toggle";

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
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 border-b border-green-500/30 shadow-lg' : 'bg-transparent'
            }`} style={{
            boxShadow: isScrolled ? '0 0 30px rgba(0, 255, 65, 0.2)' : undefined
        }}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left Navigation - About & Experience */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a
                            href="#about"
                            className="text-green-300 hover:text-green-400 transition-all duration-300 font-mono hover:scale-105"
                        >
                            $ ./about
                        </a>
                        <a
                            href="#experience"
                            className="text-green-300 hover:text-green-400 transition-all duration-300 font-mono hover:scale-105"
                        >
                            $ ./experience
                        </a>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1"></div>

                    {/* Right Navigation - Projects & Contact */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a
                            href="#projects"
                            className="text-green-300 hover:text-green-400 transition-all duration-300 font-mono hover:scale-105"
                        >
                            $ ./projects
                        </a>
                        <a
                            href="#contact"
                            className="text-green-300 hover:text-green-400 transition-all duration-300 font-mono hover:scale-105"
                        >
                            $ ./contact
                        </a>
                        <ModeToggle/>
                        <div className="flex items-center space-x-4 ml-8">
                            <a
                                href="https://github.com/TemiKayode"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 hover:text-green-300 transition-colors border border-green-500/30 rounded p-2 hover:bg-green-500/10"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/temitayo-kayode/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 hover:text-green-300 transition-colors border border-green-500/30 rounded p-2 hover:bg-green-500/10"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:temitayokayode5@gmail.com"
                                className="text-green-400 hover:text-green-300 transition-colors border border-green-500/30 rounded p-2 hover:bg-green-500/10"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-green-400 hover:text-green-300 border border-green-500/30 rounded p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-t border-green-500/30 shadow-lg">
                        <div className="px-6 py-4 space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="block text-green-300 hover:text-green-400 transition-colors font-mono"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    $ ./{item.label.toLowerCase()}
                                </a>
                            ))}

                            <div className="flex items-center space-x-4 pt-4 border-t border-green-500/30">
                                <a
                                    href="https://github.com/TemiKayode"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-400 hover:text-green-300 transition-colors border border-green-500/30 rounded p-2"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/temitayo-kayode/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-400 hover:text-green-300 transition-colors border border-green-500/30 rounded p-2"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="mailto:temitayokayode5@gmail.com"
                                    className="text-green-400 hover:text-green-300 transition-colors border border-green-500/30 rounded p-2"
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
