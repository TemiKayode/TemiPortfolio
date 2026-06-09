
import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, ShoppingCart, Home, GraduationCap, Clock, Truck, Search, Zap, Wallet, Package, MessageSquare, School, Trophy, Bot, Hotel, TrendingUp, Shield, Globe, Activity, Lock, Fingerprint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import pheranLogo from '../assets/pheran-logo.png';
import ordaLogo from '../assets/logoo.png';
import africaLiveEyeImg from '../assets/africa-live-eye.png';


const Projects = () => {
  const allProjects = [
    {
      id: 'africa-live-eye',
      title: 'Africa Live Eye — Real-Time Satellite Monitor',
      description: 'Command-centre satellite monitoring platform for the African continent. Streams live fire hotspots (NASA FIRMS), real-time lightning strikes (Blitzortung WebSocket), M2.5+ earthquakes (USGS), cyclones (GDACS), aircraft positions (OpenSky), and GPM precipitation — all on an interactive Leaflet map with time animation, split-screen date comparison, analytics charts, polygon alert zones with browser notifications, and one-click PDF situation reports.',
      image: africaLiveEyeImg,
      isLogo: false,
      technologies: ['Node.js', 'Express', 'Socket.IO', 'Leaflet.js', 'NASA FIRMS', 'NASA GIBS', 'Chart.js', 'jsPDF', 'WebSocket', 'JavaScript'],
      status: 'Completed',
      role: 'Full Stack Developer',
      category: 'Full Stack',
      icon: Globe,
      challenges: 'Merging 6 simultaneous real-time data streams (lightning, aircraft, fire, earthquakes, cyclones, precipitation) without UI blocking; pixel-exact dual-map split-screen sync; PDF generation from live map canvas state; synthetic lightning fallback when Blitzortung rate-limits server connections',
      outcomes: 'Monitors 24,000+ active fire hotspots and live events across Africa in real-time; PDF export adopted for NGO/journalist field reporting; full feature suite works in demo mode without any API keys',
      github: 'https://github.com/TemiKayode/Africa-Live-Eye',
      demo: null
    },
    {
      id: 'face-sentinel',
      title: 'FaceSentinel – Biometric Auth Pipeline',
      description: 'Kafka-native consent-based face verification for high-security environments. ArcFace 1:1 verification, Qdrant vector search, three security tiers (STANDARD/ENHANCED/CRITICAL), HMAC-signed audit trail, GDPR right-to-be-forgotten, anomaly detection, and OpenTelemetry observability.',
      image: null,
      firstLetter: 'F',
      technologies: ['Python', 'Kafka', 'ArcFace', 'InsightFace', 'Qdrant', 'Docker', 'Kubernetes', 'OpenTelemetry', 'GDPR'],
      status: 'Completed',
      role: 'AI Security Engineer',
      category: 'Security',
      icon: Fingerprint,
      challenges: 'Twin-risk disambiguation, HMAC audit signing, per-tenant Qdrant isolation, inference timeout guarding',
      outcomes: 'Intelligence-grade pipeline: GRANTED/DENIED in <350ms with full consent lifecycle and tamper-evident audit trail',
      github: 'https://github.com/TemiKayode/FaceSentinel',
      demo: null
    },
    {
      id: 'harbinger',
      title: 'Harbinger – OSS Supply Chain Intelligence',
      description: 'Detects software supply chain attacks at the maintainer identity layer before malicious code reaches your CI pipeline. Monitors OSS maintainer trust signals across GitHub, npm, and PyPI to surface compromised or hijacked packages early.',
      image: null,
      firstLetter: 'H',
      technologies: ['Python', 'Security', 'Supply Chain', 'GitHub API', 'npm', 'PyPI', 'CI/CD'],
      status: 'Completed',
      role: 'Security Engineer',
      category: 'Security',
      icon: Shield,
      challenges: 'Mapping maintainer identity across multiple registries and detecting subtle takeover signals without false positives',
      outcomes: 'Catches compromised maintainer accounts before malicious releases propagate downstream',
      github: 'https://github.com/TemiKayode/harbinger',
      demo: null
    },
    {
      id: 'live-system-intelligence-graph',
      title: 'Live System Intelligence Graph',
      description: 'Maps production execution traces to AST nodes in real-time. Generates a signed Change Impact Certificate in under 60 seconds on every PR, bridging runtime behaviour and source code to catch breaking changes before they ship.',
      image: null,
      firstLetter: 'L',
      technologies: ['Python', 'AST', 'Distributed Tracing', 'CI/CD', 'OpenTelemetry', 'Code Intelligence'],
      status: 'Completed',
      role: 'Platform Engineer',
      category: 'Security',
      icon: Activity,
      challenges: 'Real-time AST-to-trace mapping at production scale with sub-60s certificate generation',
      outcomes: 'Signed Change Impact Certificate on every PR, reducing undetected breaking changes in production',
      github: 'https://github.com/TemiKayode/live-system-intelligence-graph',
      demo: null
    },
    {
      id: 'paranoid-edition',
      title: 'Paranoid Edition – Windows Privacy Toolkit',
      description: 'One-command Windows privacy tool for total anonymity. Bulletproof telemetry blocking, identity hardening, and network privacy — everything locked down from a single script for security-conscious users and researchers.',
      image: null,
      firstLetter: 'P',
      technologies: ['Python', 'Windows', 'Privacy', 'Security', 'Automation', 'PowerShell'],
      status: 'Completed',
      role: 'Security Tools Developer',
      category: 'Security',
      icon: Lock,
      challenges: 'Comprehensive telemetry removal without breaking Windows Update and core system functionality',
      outcomes: 'Full Windows anonymisation in a single command with reversible rollback',
      github: 'https://github.com/TemiKayode/paranoid-edition',
      demo: null
    },
    {
      id: 'global-football-scouting',
      title: 'Global Football Scouting Analytics Platform',
      description: 'Full-stack football intelligence tool covering 36 leagues and 20,000+ players with FBref-style per-90 statistics. Uses machine learning to rank transfer targets, surface hidden gems from lower leagues, and model squad health — all in a single dashboard.',
      image: null,
      firstLetter: 'G',
      technologies: ['Python', 'Streamlit', 'Machine Learning', 'Pandas', 'NumPy', 'FBref', 'Data Analytics'],
      status: 'Completed',
      role: 'Data Engineer & ML Developer',
      category: 'Backend',
      icon: Globe,
      challenges: 'Normalising per-90 statistics across 36 leagues with varying data quality and coverage',
      outcomes: 'Scouts 20,000+ players across men\'s and women\'s football with ML-ranked transfer recommendations',
      github: 'https://github.com/TemiKayode/Global-Football-Scouting-Analytics-Platform',
      demo: null
    },
    {
      id: 'school-management-system',
      title: 'SchoolMS – School Management System',
      description: 'Full-stack school management platform with role-based dashboards for Admin, Teacher, Student, and Parent. Features attendance tracking, grade management, fee payments, timetables, and real-time notifications.',
      image: null,
      firstLetter: 'S',
      technologies: ['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Prisma', 'Docker', 'Kubernetes', 'Sentry', 'Netlify', 'Render'],
      status: 'Completed',
      role: 'Full Stack & DevOps Engineer',
      category: 'Full Stack',
      icon: School,
      challenges: 'Multi-role JWT auth, Neon serverless Postgres, Redis caching, K8s container orchestration and Sentry error monitoring',
      outcomes: 'Production-deployed with 4 role dashboards, CI/CD pipeline, and full observability stack',
      github: 'https://github.com/TemiKayode/School-Management-System',
      demo: 'https://schoolmsgit.netlify.app'
    },
    {
      id: 'football-pro',
      title: 'Football Pro – Match Prediction Dashboard',
      description: 'Advanced football analytics and match prediction dashboard using xG models, Poisson distribution, and real-time odds data. Live odds, Kelly staking, accumulator builder, and automated value-bet insights.',
      image: null,
      firstLetter: 'F',
      technologies: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Odds API', 'Machine Learning'],
      status: 'Completed',
      role: 'Data Engineer & ML Developer',
      category: 'Backend',
      icon: Trophy,
      challenges: 'Building accurate Poisson distribution models with live odds API integration',
      outcomes: 'Prediction accuracy above market baseline with automated insight generation',
      github: 'https://github.com/TemiKayode/football_pro',
      demo: null
    },
    {
      id: 'ceo-finder',
      title: 'CEO Finder – AI-Powered Lead Tool',
      description: 'Automated CSV pipeline that enriches company lists with CEO names and contact information using Tavily AI search. One search per domain with resumable caching, deduplication, and strict name-cleaning.',
      image: null,
      firstLetter: 'C',
      technologies: ['Python', 'Tavily AI', 'CSV Processing', 'REST APIs', 'Automation'],
      status: 'Completed',
      role: 'Backend Developer & Automation Engineer',
      category: 'Backend',
      icon: Bot,
      challenges: 'Reliable AI-driven data extraction at scale with deduplication and rate limiting',
      outcomes: 'Reduced manual research time by 90% for executive lead discovery workflows',
      github: 'https://github.com/TemiKayode/CEO-finder',
      demo: null
    },
    {
      id: 'mars-place-hotel',
      title: 'Mars Place Hotel – Booking Platform',
      description: 'Full-featured hotel booking and management platform with room listings, availability calendar, reservation system, and admin dashboard for property management.',
      image: null,
      firstLetter: 'M',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      status: 'Completed',
      role: 'Full Stack Developer',
      category: 'Full Stack',
      icon: Hotel,
      challenges: 'Real-time availability management and conflict-free reservation scheduling',
      outcomes: 'Live production platform powering hotel bookings at marsplacehotel.com',
      github: 'https://github.com/TemiKayode/MarsPlaceHotel',
      demo: 'https://marsplacehotel.com'
    },
    {
      id: 'crypto-prediction-tool',
      title: 'Crypto Prediction Tool – Automated Trading Bot',
      description: 'Streamlit-based crypto analytics dashboard with an integrated automated trading bot. Uses technical indicators and price action models to generate trade signals with real-time dashboard monitoring.',
      image: null,
      firstLetter: 'C',
      technologies: ['Python', 'Streamlit', 'Pandas', 'TA-Lib', 'Crypto APIs', 'Automation'],
      status: 'Completed',
      role: 'Quant Developer',
      category: 'Backend',
      icon: TrendingUp,
      challenges: 'Accurate signal generation under volatile market conditions with live data feeds',
      outcomes: 'Automated signal pipeline with real-time dashboard monitoring and trade execution',
      github: 'https://github.com/TemiKayode/Crypto',
      demo: null
    },
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
      github: 'https://github.com/TemiKayode/Orda',
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
      github: 'https://github.com/TemiKayode/Turbo-sofware',
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
      github: 'https://github.com/TemiKayode/Turbo',
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
      demo: null
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
      demo: null
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
      demo: null
    }
  ];

  const categories = useMemo(() => ['All', 'Full Stack', 'Backend', 'Security', 'Frontend'], []);
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
            $ A showcase of my recent work, from biometric security pipelines to e-commerce platforms.
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
