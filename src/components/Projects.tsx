
import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, ShoppingCart, Home, GraduationCap, Users, Clock, Truck, Search, Zap, Wallet, Package, MessageSquare, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import pheranLogo from '../assets/pheran-logo.png';
import ordaLogo from '../assets/logoo.png';


const Projects = () => {
  const allProjects = [
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
      title: 'OrdaDelivery – Local Food Delivery',
      description: 'Local food delivery platform connecting restaurants with customers, featuring order tracking and payment integration.',
      image: ordaLogo,
      isLogo: true,
      technologies: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Stripe', 'Google Maps API'],
      status: 'Completed',
      role: 'Mobile & Backend Developer',
      category: 'Full Stack',
      icon: Truck,
      challenges: 'Real-time order tracking and driver coordination',
      outcomes: 'Facilitated 1000+ successful food deliveries',
      github: 'https://github.com/TemiKayode/OrdaDelivery',
      demo: 'https://ordadelivery.com'
    },
    {
      id: 'turbo-software',
      title: 'Turbo Software – Full-Stack SaaS',
      description: 'A comprehensive full-stack SaaS application built with React, TypeScript, Supabase, and Stripe for modern businesses.',
      image: null,
      firstLetter: 'T',
      technologies: ['React', 'TypeScript', 'Supabase', 'Stripe', 'Tailwind CSS'],
      status: 'Completed',
      role: 'Full Stack Developer',
      category: 'Full Stack',
      icon: Zap,
      challenges: 'Building scalable SaaS infrastructure with payment integration',
      outcomes: 'Delivered production-ready SaaS platform with subscription management',
      github: 'https://github.com/TemiKayode/turbo-sofware',
      demo: 'https://turbo-software.netlify.app'
    },
    {
      id: 'turbo-chat',
      title: 'Turbo Chat – Real-time Platform',
      description: 'Real-time chat platform showcasing backend concurrency in Go, high-performance Rust microservice for file uploads, Next.js frontend, Docker/K8s deployment, and CI/CD via GitLab.',
      image: null,
      firstLetter: 'T',
      technologies: ['Go', 'Rust', 'Next.js', 'TypeScript', 'Docker', 'Kubernetes', 'GitLab CI/CD'],
      status: 'Completed',
      role: 'Full Stack & DevOps Engineer',
      category: 'Backend',
      icon: MessageSquare,
      challenges: 'High-performance backend concurrency and microservices architecture',
      outcomes: 'Scalable real-time platform with containerized deployment',
      github: 'https://github.com/TemiKayode/turbo',
      demo: 'https://turbochaty.netlify.app'
    },
    {
      id: 'wumikay-ventures',
      title: 'WumiKay Ventures – Order Management',
      description: 'A modern, secure order management system built with React, TypeScript, and Supabase for WumiKay Ventures beverage business.',
      image: null,
      firstLetter: 'W',
      technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      status: 'Completed',
      role: 'Full Stack Developer',
      category: 'Full Stack',
      icon: Package,
      challenges: 'Secure order processing and inventory management',
      outcomes: 'Streamlined beverage business operations with automated order management',
      github: 'https://github.com/TemiKayode/wumikay-ventures',
      demo: 'https://wumikay.netlify.app'
    },
    {
      id: 'wallet-discovery',
      title: 'Wallet Discovery – Crypto Toolkit',
      description: 'A comprehensive Python toolkit for discovering, analyzing, and monitoring cryptocurrency wallet addresses across multiple blockchains.',
      image: null,
      firstLetter: 'W',
      technologies: ['Python', 'Blockchain', 'Web3', 'Data Analysis'],
      status: 'Completed',
      role: 'Backend Developer',
      category: 'Backend',
      icon: Wallet,
      challenges: 'Cross-chain wallet analysis and monitoring',
      outcomes: 'Comprehensive toolkit for blockchain wallet discovery and analytics',
      github: 'https://github.com/TemiKayode/wallet-discovery',
      demo: null
    },
    {
      id: 'tenant-screening',
      title: 'Tenant Screening & Rent Management',
      description: 'Web platform to screen tenants, collect rent, and manage the complete tenancy lifecycle with KYC integration.',
      image: null,
      firstLetter: 'T',
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
      firstLetter: 'T',
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
      firstLetter: 'P',
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
      firstLetter: 'T',
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

  const categories = useMemo(() => ['All', 'Full Stack', 'Frontend', 'Backend'], []);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleProjects, setVisibleProjects] = useState(4);

  const filteredProjects = useMemo(() => {
    return allProjects
      .filter(project => {
        const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
        const searchMatch = searchTerm === '' || 
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
      });
  }, [allProjects, selectedCategory, searchTerm]);

  const projectsToShow = useMemo(() => filteredProjects.slice(0, visibleProjects), [filteredProjects, visibleProjects]);

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 4);
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden three-d-container">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="terminal-window max-w-2xl mx-auto mb-8">
            <div className="terminal-prompt text-left">
              <span className="text-green-500">temi@portfolio</span>:<span className="text-blue-400">~</span>$ <span className="terminal-command">ls projects/</span>
            </div>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-xl text-green-300 max-w-3xl mx-auto mb-8 font-mono">
            $ A showcase of my recent work, from e-commerce platforms to management systems.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded text-sm font-mono transition-all duration-300 three-d-card ${
                    selectedCategory === category
                      ? 'bg-green-500/20 text-green-400 border-2 border-green-500 shadow-lg'
                      : 'bg-black/50 text-green-300 border border-green-500/30 hover:bg-green-500/10 hover:border-green-500/50'
                  }`}
                  style={{
                    boxShadow: selectedCategory === category ? '0 0 15px rgba(0, 255, 65, 0.3)' : undefined
                  }}
                >
                  $ {category}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400" size={20} />
              <Input 
                type="text"
                placeholder="grep projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full bg-black/50 border-green-500/30 text-green-300 font-mono focus:border-green-500 focus:ring-green-500/20 placeholder:text-green-500/50"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projectsToShow.map((project, index) => (
            <div 
              key={project.id} 
              className="terminal-window group p-6 transition-all duration-300 flex flex-col justify-between three-d-card hover:scale-[1.02]"
              style={{
                transform: `perspective(1000px) translateZ(${index * 5}px)`
              }}
            >
              <div>
                {/* Project Image/Icon - Enhanced and Prominent */}
                <div className="mb-6">
                  {project.image ? (
                    project.isLogo ? (
                      <div className="w-40 h-40 mx-auto mb-4 rounded-lg border-2 border-green-500/50 bg-black/50 p-5 hover:border-green-500 hover:scale-105 transition-all duration-300" style={{
                        boxShadow: '0 0 25px rgba(0, 255, 65, 0.3), inset 0 0 25px rgba(0, 255, 65, 0.05)'
                      }}>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-contain rounded transition-transform duration-300 hover:scale-110" 
                          onError={(e) => {
                            console.error(`Failed to load image for ${project.title}:`, project.image);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-56 mb-4 rounded-lg border-2 border-green-500/50 bg-black/50 overflow-hidden hover:border-green-500 transition-all duration-300 group-hover:scale-[1.02]" style={{
                        boxShadow: '0 0 20px rgba(0, 255, 65, 0.2), inset 0 0 20px rgba(0, 255, 65, 0.05)'
                      }}>
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    )
                  ) : project.firstLetter ? (
                    <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center text-6xl font-mono font-bold text-green-400 bg-green-500/10 rounded-lg border-2 border-green-500/50 hover:border-green-500 hover:scale-105 transition-all duration-300" style={{
                      boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)',
                      textShadow: '0 0 15px rgba(0, 255, 65, 0.5)'
                    }}>
                      {project.firstLetter}
                    </div>
                  ) : project.placeholder ? (
                    <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center text-5xl bg-green-500/10 rounded-lg border-2 border-green-500/50 hover:border-green-500 hover:scale-105 transition-all duration-300" style={{
                      boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)'
                    }}>
                      {project.placeholder}
                    </div>
                  ) : (
                    <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center text-green-400 bg-green-500/10 rounded-lg border-2 border-green-500/50 hover:border-green-500 hover:scale-105 transition-all duration-300" style={{
                      boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)'
                    }}>
                      {project.icon && <project.icon size={56} strokeWidth={1.5} />}
                    </div>
                  )}
                </div>

                {/* Project Title and Status */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-mono font-semibold text-green-400 mb-2 hover:text-green-300 transition-colors">{project.title}</h3>
                  <p className={`text-sm font-mono ${project.status === 'Completed' ? 'text-green-500' : 'text-yellow-400'}`}>
                    $ {project.status} - {project.role}
                  </p>
                </div>
                <p className="text-green-300 mb-4 text-sm font-mono leading-relaxed text-center">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.challenges && (
                  <p className="text-sm text-green-400 mb-2 font-mono italic">$ Challenges: {project.challenges}</p>
                )}
                {project.outcomes && (
                  <p className="text-sm text-green-400 font-mono italic">$ Outcomes: {project.outcomes}</p>
                )}
              </div>
              <div className="flex justify-end gap-3 mt-6">
                {project.github && (
                  <Button asChild variant="outline" size="sm" className="rounded border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono bg-black/50">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                      <Github size={16} className="mr-1" /> ./github
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild size="sm" className="rounded bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/50 font-mono transition-transform duration-200">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>
                      $ ./demo <ExternalLink size={16} className="ml-1" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button onClick={handleLoadMore} size="lg" className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/50 font-mono hover:scale-105 transition-transform duration-200 three-d-card">
              $ load --more
            </Button>
          </div>
        )}

        {projectsToShow.length === 0 && (
          <div className="text-center mt-12 text-green-500 font-mono">
            <p>$ No projects found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
