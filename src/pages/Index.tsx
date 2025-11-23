
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
    <div className="min-h-screen bg-black relative overflow-hidden three-d-container">
      {/* 3D Terminal Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: 'perspective(2000px) rotateX(75deg) translateZ(-500px) scale(2)',
            transformOrigin: 'center center'
          }}
        ></div>
        
        {/* Floating 3D terminal windows */}
        <div 
          className="absolute top-20 left-10 w-96 h-64 border border-green-500/10 rounded bg-black/20 blur-md animate-float"
          style={{
            transform: 'perspective(1500px) rotateY(-25deg) rotateX(10deg) translateZ(-200px)',
            boxShadow: '0 0 100px rgba(0, 255, 65, 0.1)'
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-[500px] h-72 border border-green-500/10 rounded bg-black/20 blur-md animate-float"
          style={{
            animationDelay: '3s',
            transform: 'perspective(1500px) rotateY(25deg) rotateX(-10deg) translateZ(-200px)',
            boxShadow: '0 0 100px rgba(0, 255, 65, 0.1)'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/3 w-80 h-56 border border-green-500/10 rounded bg-black/20 blur-md animate-float"
          style={{
            animationDelay: '6s',
            transform: 'perspective(1500px) rotateX(-15deg) translateZ(-300px)',
            boxShadow: '0 0 100px rgba(0, 255, 65, 0.1)'
          }}
        ></div>
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
