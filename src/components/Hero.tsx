
import React from 'react';
import { ArrowDown, Download, MessageCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const videos = [
    {
      title: "Modern Web Development",
      subtitle: "React & TypeScript",
      description: "Building scalable applications with modern frameworks"
    },
    {
      title: "Full Stack Solutions",
      subtitle: "End-to-End Development",
      description: "From database design to user interface"
    },
    {
      title: "Product Management",
      subtitle: "Strategy & Execution", 
      description: "Leading teams to deliver exceptional products"
    }
  ];

  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 w-32 h-32 bg-primary/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-20 right-10 w-48 h-48 bg-secondary/30 rounded-full animate-float blur-xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full animate-float blur-2xl" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-secondary/20 rounded-full animate-float blur-xl" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Profile Image and Badge */}
          <div className="relative mx-auto w-32 h-32 mb-6">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold primary-gradient-text">TK</span>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
              Available
            </div>
          </div>

          <div className="text-sm text-primary font-medium mb-4">
            Full Stack Developer & Product Owner
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="primary-gradient-text">Temi Kayode</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            5+ years Full Stack Developer specializing in React, Node.js and modern web technologies. 
            Building scalable solutions with focus on user experience and performance.
          </p>

          {/* Achievement Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              ⚡ 5+ Years Experience
            </div>
            <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium border border-secondary/20">
              🚀 React & Node.js
            </div>
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              💼 Product Owner
            </div>
            <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium border border-secondary/20">
              🎯 10+ Projects
            </div>
          </div>

          {/* Video Carousel */}
          <div className="mb-8">
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-3xl mx-auto"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {videos.map((video, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20 flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                        <div className="text-center p-6">
                          <div className="w-16 h-16 mx-auto mb-4 primary-gradient rounded-full flex items-center justify-center">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">{video.title}</h3>
                          <p className="text-primary font-semibold mb-3">{video.subtitle}</p>
                          <p className="text-muted-foreground text-sm max-w-xs mx-auto">{video.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="primary-gradient hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-full shadow-lg"
            >
              <Download className="mr-2" size={18} />
              Download CV
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary bg-primary/5 text-primary hover:bg-primary/15 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full font-semibold"
            >
              <MessageCircle className="mr-2" size={18} />
              WhatsApp Contact
            </Button>
          </div>

          <div className="animate-bounce">
            <a href="#about" className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown size={24} />
              <span className="text-xs mt-1">Discover More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
