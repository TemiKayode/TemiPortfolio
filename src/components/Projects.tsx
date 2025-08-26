
import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, ShoppingCart, Home, GraduationCap, Users, Clock, Truck, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import pheranLogo from '../assets/pheran-logo.png';
import ordaLogo from '../assets/orda-logo.png';


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
    <section id="projects" className="py-20 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my recent work, from e-commerce platforms to management systems.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
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

            {/* Search Input */}
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input 
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full border-primary/20 focus:border-primary"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projectsToShow.map((project, index) => (
            <div key={project.id} className="interactive-card group bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  {project.image ? (
                    project.isLogo ? (
                      <img src={project.image} alt={project.title} className="w-10 h-10 object-contain rounded-full" />
                    ) : (
                      <img src={project.image} alt={project.title} className="w-20 h-auto object-cover rounded-lg" />
                    )
                  ) : project.placeholder ? (
                    <div className="w-10 h-10 flex items-center justify-center text-2xl bg-primary/10 rounded-full">{project.placeholder}</div>
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center text-primary bg-primary/10 rounded-full">
                      {project.icon && <project.icon size={24} />}
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <p className={`text-sm ${project.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                      {project.status} - {project.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.challenges && (
                  <p className="text-sm text-foreground mb-2 italic">Challenges: {project.challenges}</p>
                )}
                {project.outcomes && (
                  <p className="text-sm text-foreground italic">Outcomes: {project.outcomes}</p>
                )}
              </div>
              <div className="flex justify-end gap-3 mt-6">
                {project.github && (
                  <Button asChild variant="outline" size="sm" className="rounded-full border-primary/20 text-primary hover:bg-primary/10">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                      <Github size={16} className="mr-1" /> GitHub
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild size="sm" className="rounded-full primary-gradient text-white hover:scale-105 transition-transform duration-200">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>View Live <ExternalLink size={16} className="ml-1" /></a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button onClick={handleLoadMore} size="lg" className="primary-gradient text-white hover:scale-105 transition-transform duration-200">
              Load More Projects
            </Button>
          </div>
        )}

        {projectsToShow.length === 0 && (
          <div className="text-center mt-12 text-muted-foreground">
            <p>No projects found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
