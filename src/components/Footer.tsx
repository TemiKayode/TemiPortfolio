
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = ['About', 'Experience', 'Projects', 'Contact'];

  const socials = [
    { icon: Github, href: 'https://github.com/TemiKayode', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/temitayo-kayode/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:temitayokayode5@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-background border-t border-border py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-display uppercase text-xl text-foreground mb-3">
              Temitayo Kayode
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
              Python Production Engineer building event-driven, real-time distributed systems.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Let's Connect
            </h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Temitayo Kayode. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
