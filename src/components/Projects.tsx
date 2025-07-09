
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
      isLogo: true,
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Firebase', 'Paystack'],
      status: 'Completed',
      role: 'Full Stack Developer',
      category: 'Full Stack',
      icon: ShoppingCart,
      challenges: 'Integrated complex payment flows and inventory management',
      outcomes: 'Increased client sales by 40% with seamless checkout experience',
      github: 'https://github.com/TemiKayode/pheran-clothing',
      demo: 'https://pheran-clothing.vercel.app'
    },
    {
      id: 'orda-delivery',
      title: 'Orda – Local Food Delivery',
      description: 'Local food delivery platform connecting restaurants with customers, featuring order tracking and payment integration.',
      image: ordaLogo,
      isLogo: true,
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe', 'Google Maps API'],
      status: 'Completed',
      role: 'Mobile & Backend Developer',
      category: 'Full Stack',
      icon: Truck,
      challenges: 'Real-time order tracking and driver coordination',
      outcomes: 'Facilitated 1000+ successful food deliveries',
      github: 'https://github.com/TemiKayode/orda-delivery',
      demo: 'https://orda-delivery.app'
    },
    {
      id: 'tenant-screening',
      title: 'Tenant Screening & Rent Management',
      description: 'Web platform to screen tenants, collect rent, and manage the complete tenancy lifecycle with KYC integration.',
      image: null,
      placeholder: '🏢 Tenant Management',
      technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Firebase Auth', 'Flutterwave', 'VerifyMe'],
      status: 'In Progress',
      role: 'Full Stack Developer & Product Owner',
      category: 'Full Stack',
      icon: Home,
      challenges: 'Complex KYC integration and multi-tenant architecture',
      outcomes: 'Streamlined property management for 50+ landlords',
      github: 'https://github.com/TemiKayode/tenant-screening',
      demo: 'https://tenant-screening.demo.app'
    },
    {
      id: 'tuition-manager',
      title: 'Tuition & School Fee Manager',
      description: 'Platform used by low-cost schools for fee tracking, debt management, receipt generation, and parent notifications.',
      image: null,
      placeholder: '🎓 School Fee Manager',
      technologies: ['React', 'Vue.js', 'Firebase', 'Supabase', 'Remita', 'Paystack'],
      status: 'Completed',
      role: 'Lead Developer',
      category: 'Full Stack',
      icon: GraduationCap,
      challenges: 'Handling complex fee structures and payment schedules',
      outcomes: 'Reduced administrative overhead by 60% for partner schools',
      github: 'https://github.com/TemiKayode/tuition-manager',
      demo: 'https://tuition-manager.app'
    },
    {
      id: 'property-listing',
      title: 'Property Listing Platform',
      description: 'Zoopla-inspired property platform with advanced search, mapping integration, and agent management system.',
      image: null,
      placeholder: '🏠 Property Platform',
      technologies: ['React', 'Node.js', 'MongoDB', 'Mapbox', 'AWS S3'],
      status: 'Completed',
      role: 'Full Stack Developer',
      category: 'Frontend',
      icon: Home,
      challenges: 'Real-time property updates and geolocation features',
      outcomes: 'Connected 200+ agents with thousands of property seekers',
      github: 'https://github.com/TemiKayode/property-listing',
      demo: 'https://property-platform.demo.app'
    },
    {
      id: 'task-manager',
      title: 'Real-time Task Manager',
      description: 'Collaborative task management platform with real-time updates, team collaboration, and project tracking.',
      image: null,
      placeholder: '⚡ Real-time Tasks',
      technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'Redis'],
      status: 'Completed',
      role: 'Full Stack Developer',
      category: 'Backend',
      icon: Clock,
      challenges: 'Real-time synchronization across multiple users',
      outcomes: 'Improved team productivity by 35% for client organizations',
      github: 'https://github.com/TemiKayode/task-manager',
      demo: 'https://task-manager.demo.app'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my recent work, from e-commerce platforms to management systems.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'primary-gradient text-white shadow-lg'
                    : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="interactive-card group bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-lg">
              <div className="relative overflow-hidden rounded-xl mb-6 h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                {project.image ? (
                  project.isLogo ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  )
                ) : (
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">{project.placeholder?.split(' ')[0]}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{project.placeholder?.split(' ').slice(1).join(' ')}</span>
                    <div className="mt-2 text-xs text-primary/60">Click to add image</div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary border border-secondary/30">
                    {project.category}
                  </span>
                </div>
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
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2" size={16} />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 primary-gradient text-white hover:scale-105 transition-transform duration-200"
                    onClick={() => window.open(project.demo, '_blank')}
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
