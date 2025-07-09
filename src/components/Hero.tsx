
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 primary-gradient rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 primary-gradient-soft rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-animation rounded-full opacity-10 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="primary-gradient-text">Temi Kayode</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            <span className="block mb-2">Full Stack Developer & Product Owner</span>
            <span className="text-lg text-primary font-medium">
              Building scalable solutions with modern technologies
            </span>
          </div>

          {/* Video Carousel */}
          <div className="mb-12">
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-4xl mx-auto"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {videos.map((video, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-primary/20 flex items-center justify-center backdrop-blur-sm">
                        <div className="text-center p-8">
                          <div className="w-20 h-20 mx-auto mb-6 primary-gradient rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">{video.title}</h3>
                          <p className="text-lg text-primary font-semibold mb-4">{video.subtitle}</p>
                          <p className="text-muted-foreground max-w-md mx-auto">{video.description}</p>
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

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            From Mechanical Engineer to Full Stack Developer, I create innovative web applications 
            and lead product development with a focus on user experience and scalable architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="primary-gradient hover:scale-105 transition-transform duration-300 text-white font-semibold px-8 py-3 rounded-full shadow-lg"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-full font-semibold"
            >
              <MessageCircle className="mr-2" size={20} />
              Let's Talk
            </Button>
          </div>

          <div className="animate-bounce">
            <a href="#about" className="inline-block text-primary hover:text-primary/80 transition-colors">
              <ArrowDown size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
