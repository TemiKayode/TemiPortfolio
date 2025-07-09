
import React from 'react';
import { ExternalLink, Github, ShoppingCart, Home, GraduationCap, Users, Clock, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import pheranLogo from '../assets/pheran-logo.png';
import ordaLogo from '../assets/orda-logo.png';

const Projects = () => {
  const projects = [
    {
      id: 'pheran-clothing',
      title: 'Pheran – Clothing Website',
      description: 'A full-featured e-commerce fashion store with shopping cart, Paystack payments, inventory tracking, and backend CMS.',
      image: pheranLogo,
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Firebase', 'Paystack'],
      status: 'Completed',
      role: 'Full Stack Developer',
      icon: ShoppingCart,
      challenges: 'Integrated complex payment flows and inventory management',
      outcomes: 'Increased client sales by 40% with seamless checkout experience',
      github: '#',
      demo: '#'
    },
    {
      id: 'tenant-screening',
      title: 'Tenant Screening & Rent Management',
      description: 'Web platform to screen tenants, collect rent, and manage the complete tenancy lifecycle with KYC integration.',
      image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=400&fit=crop',
      technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Firebase Auth', 'Flutterwave', 'VerifyMe'],
      status: 'In Progress',
      role: 'Full Stack Developer & Product Owner',
      icon: Home,
      challenges: 'Complex KYC integration and multi-tenant architecture',
      outcomes: 'Streamlined property management for 50+ landlords',
      github: '#',
      demo: '#'
    },
    {
      id: 'tuition-manager',
      title: 'Tuition & School Fee Manager',
      description: 'Platform used by low-cost schools for fee tracking, debt management, receipt generation, and parent notifications.',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=400&fit=crop',
      technologies: ['React', 'Vue.js', 'Firebase', 'Supabase', 'Remita', 'Paystack'],
      status: 'Completed',
      role: 'Lead Developer',
      icon: GraduationCap,
      challenges: 'Handling complex fee structures and payment schedules',
      outcomes: 'Reduced administrative overhead by 60% for partner schools',
      github: '#',
      demo: '#'
    },
    {
      id: 'property-listing',
      title: 'Property Listing Platform',
      description: 'Zoopla-inspired property platform with advanced search, mapping integration, and agent management system.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Mapbox', 'AWS S3'],
      status: 'Completed',
      role: 'Full Stack Developer',
      icon: Home,
      challenges: 'Real-time property updates and geolocation features',
      outcomes: 'Connected 200+ agents with thousands of property seekers',
      github: '#',
      demo: '#'
    },
    {
      id: 'task-manager',
      title: 'Real-time Task Manager',
      description: 'Collaborative task management platform with real-time updates, team collaboration, and project tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
      technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'Redis'],
      status: 'Completed',
      role: 'Full Stack Developer',
      icon: Clock,
      challenges: 'Real-time synchronization across multiple users',
      outcomes: 'Improved team productivity by 35% for client organizations',
      github: '#',
      demo: '#'
    },
    {
      id: 'orda-delivery',
      title: 'Orda – Local Food Delivery',
      description: 'Local food delivery platform connecting restaurants with customers, featuring order tracking and payment integration.',
      image: ordaLogo,
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe', 'Google Maps API'],
      status: 'Completed',
      role: 'Mobile & Backend Developer',
      icon: Truck,
      challenges: 'Real-time order tracking and driver coordination',
      outcomes: 'Facilitated 1000+ successful food deliveries',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, from e-commerce platforms to management systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="primary-gradient w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <project.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                    <p className="text-sm text-primary font-medium">{project.role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Challenges</h4>
                    <p className="text-sm text-muted-foreground">{project.challenges}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Outcomes</h4>
                    <p className="text-sm text-muted-foreground">{project.outcomes}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary/10"
                  >
                    <Github className="mr-2" size={16} />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 primary-gradient text-white hover:scale-105 transition-transform duration-200"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
