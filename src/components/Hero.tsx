
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-desert-26070-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 primary-gradient opacity-30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-10 left-5 w-32 h-32 bg-primary/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-20 right-10 w-48 h-48 bg-secondary/30 rounded-full animate-float blur-xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full animate-float blur-2xl" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-secondary/20 rounded-full animate-float blur-xl" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Large Profile Image Placeholder */}
          <div className="relative mx-auto w-48 h-48 mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-primary/30 flex items-center justify-center group hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">📸</span>
                </div>
                <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  Click to add photo
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold animate-bounce">
              Available for hire
            </div>
          </div>

          {/* Profile Image Carousel */}
          <div className="relative mx-auto w-32 h-32 mb-6">
            <Carousel
              plugins={[plugin.current]}
              className="w-full h-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-pulse-slow">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-3xl font-bold primary-gradient-text">TK</span>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-primary p-1 animate-pulse-slow">
                    <div className="w-full h-full rounded-full bg-background/90 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl font-bold primary-gradient-text">TEMI</span>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-pulse-slow">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-xl font-bold primary-gradient-text">KAYODE</span>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>

          <div className="text-sm text-primary font-medium mb-4 animate-fade-in">
            Full Stack Developer & Product Owner
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in">
            <span className="primary-gradient-text">Temi Kayode</span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            5+ years Full Stack Developer specializing in React, Node.js and modern web technologies. 
            Building scalable solutions with focus on user experience and performance.
          </p>

          {/* Achievement Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 animate-fade-in">
            <div className="bg-primary/10 text-primary px-3 py-2 rounded-full text-sm font-medium border border-primary/20 hover:scale-105 transition-transform">
              ⚡ 5+ Years Experience
            </div>
            <div className="bg-secondary/10 text-secondary px-3 py-2 rounded-full text-sm font-medium border border-secondary/20 hover:scale-105 transition-transform">
              🚀 React & Node.js
            </div>
            <div className="bg-primary/10 text-primary px-3 py-2 rounded-full text-sm font-medium border border-primary/20 hover:scale-105 transition-transform">
              💼 Product Owner
            </div>
            <div className="bg-secondary/10 text-secondary px-3 py-2 rounded-full text-sm font-medium border border-secondary/20 hover:scale-105 transition-transform">
              🎯 10+ Projects
            </div>
          </div>

          {/* Video Carousel */}
          <div className="mb-6">
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-2xl mx-auto"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {videos.map((video, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20 flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                        <div className="text-center p-4">
                          <div className="w-12 h-12 mx-auto mb-3 primary-gradient rounded-full flex items-center justify-center">
                            <Play className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">{video.title}</h3>
                          <p className="text-primary font-semibold mb-2 text-sm">{video.subtitle}</p>
                          <p className="text-muted-foreground text-xs max-w-xs mx-auto">{video.description}</p>
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

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="primary-gradient hover:scale-105 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-full shadow-lg"
            >
              <Download className="mr-2" size={16} />
              Download CV
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary bg-primary/5 text-primary hover:bg-primary/15 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-full font-semibold"
            >
              <MessageCircle className="mr-2" size={16} />
              WhatsApp Contact
            </Button>
          </div>

          <div className="animate-bounce">
            <a href="#about" className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown size={20} />
              <span className="text-xs mt-1">Discover More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
