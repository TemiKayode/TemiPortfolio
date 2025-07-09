
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-accent/20 relative overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full animate-float blur-3xl" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/10 rounded-full animate-float blur-2xl" style={{animationDelay: '6s'}}></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
