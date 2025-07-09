
import React from 'react';
import { ArrowDown, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 lime-gradient rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 lime-gradient-soft rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-animation rounded-full opacity-10 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="lime-gradient-text">Temi Kayode</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            <span className="block mb-2">Full Stack Developer & Product Owner</span>
            <span className="text-lg text-lime-600 font-medium">
              Building scalable solutions with modern technologies
            </span>
          </div>

          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            From Mechanical Engineer to Full Stack Developer, I create innovative web applications 
            and lead product development with a focus on user experience and scalable architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="lime-gradient hover:scale-105 transition-transform duration-300 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-lime-400 text-lime-700 hover:bg-lime-50 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-full font-semibold"
            >
              <MessageCircle className="mr-2" size={20} />
              Let's Talk
            </Button>
          </div>

          <div className="animate-bounce">
            <a href="#about" className="inline-block text-lime-600 hover:text-lime-700 transition-colors">
              <ArrowDown size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
