
import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, Truck, Search, Zap, Wallet, Package, MessageSquare, School, Trophy, Bot, Hotel, TrendingUp, Shield, Globe, Activity, Lock, Fingerprint, Box, MessageCircle, ShieldCheck, Gauge, FileSearch, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ordaLogo from '../assets/logoo.png';
import africaLiveEyeImg from '../assets/africa-live-eye.png';


const Projects = () => {
  const allProjects = [
    {
      id: 'cad',
      title: 'CAD — Collaborative Browser CAD Engine',
      description: 'A pure-Python, browser-based CAD engine that models geometry as CRDTs for real-time, offline-first collaboration. Peers can edit simultaneously — even fully disconnected — and merge conflict-free on reconnect, with a Time-Travel Merge panel that visualises exactly what changed on every branch.',
      image: null,
      firstLetter: 'C',
      technologies: ['Python', 'CRDTs', 'WebAssembly', 'Distributed Systems', 'Geometry Engine'],
      status: 'Completed',
      role: 'Systems Engineer',
      category: 'Backend',
      icon: Box,
      challenges: 'Modelling arbitrary CAD geometry as conflict-free replicated data types while preserving deterministic merge semantics across concurrent edits',
      outcomes: 'Fully offline-capable collaborative CAD editing with guaranteed conflict-free merges and a visual diff of every branch',
      github: 'https://github.com/TemiKayode/cad',
      demo: null
    },
    {
      id: 'unichat',
      title: 'Unichat — Unified Messaging Platform',
      description: 'Production-ready customer messaging platform unifying Facebook Messenger, Instagram DMs, WhatsApp Business, and TikTok messages into a single real-time dashboard, with encrypted token storage and a full webhook ingestion pipeline.',
      image: null,
      firstLetter: 'U',
      technologies: ['Node.js', 'Socket.IO', 'Webhooks', 'OAuth', 'Real-Time Systems'],
      status: 'Completed',
      role: 'Full Stack Developer',
      category: 'Full Stack',
      icon: MessageCircle,
      challenges: 'Normalising four divergent messaging-platform webhook formats into one real-time event stream without dropping or duplicating messages',
      outcomes: 'Single dashboard replacing four separate inboxes, with encrypted credential storage and live Socket.IO delivery',
      github: 'https://github.com/TemiKayode/unichat',
      demo: null
    },
    {
      id: 'sentinelci',
      title: 'SentinelCI — Unified Security Scanner',
      description: 'Runs Semgrep, Trivy, Gitleaks, Checkov, and Grype concurrently in CI, normalises findings into a common schema, and routes HIGH/CRITICAL issues to an LLM for exact code-level fix diffs — all within a 60-second, CI-friendly exit budget.',
      image: null,
      firstLetter: 'S',
      technologies: ['Python', 'Semgrep', 'Trivy', 'Gitleaks', 'Checkov', 'Grype', 'CI/CD'],
      status: 'Completed',
      role: 'Security Engineer',
      category: 'Security',
      icon: ShieldCheck,
      challenges: 'Running five heterogeneous scanners concurrently and reconciling their differing output schemas into one de-duplicated report under a tight CI time budget',
      outcomes: 'Consolidated five security tools into a single sub-60-second CI gate with automated, LLM-generated fix suggestions',
      github: 'https://github.com/TemiKayode/SentinelCI',
      demo: null
    },
    {
      id: 'infralens',
      title: 'InfraLens — Observability Platform',
      description: 'A horizontally scalable observability platform ingesting logs, metrics, and traces via OpenTelemetry into a custom columnar LSM storage engine, queryable with a SQL-like language and paired with an AI copilot for root-cause analysis.',
      image: null,
      firstLetter: 'I',
      technologies: ['Python', 'OpenTelemetry', 'LSM Storage Engine', 'SQL', 'Distributed Systems'],
      status: 'Completed',
      role: 'Platform Engineer',
      category: 'Backend',
      icon: Gauge,
      challenges: 'Designing a custom columnar LSM engine that stays horizontally scalable under high-cardinality metric and trace ingestion',
      outcomes: 'Self-hosted observability stack with SQL-like querying and AI-assisted root-cause analysis, with no vendor lock-in',
      github: 'https://github.com/TemiKayode/infralens',
      demo: null
    },
    {
      id: 'sec-rag',
      title: 'SEC-RAG — Trustworthy Filings Q&A',
      description: "Retrieval-augmented Q&A over SEC 10-K/10-Q filings with span-level citations, machine-verified faithfulness checks, and graceful abstention when the filings don't support an answer.",
      image: null,
      firstLetter: 'S',
      technologies: ['Python', 'RAG', 'LLM', 'Vector Search', 'Financial NLP'],
      status: 'Completed',
      role: 'ML Engineer',
      category: 'Backend',
      icon: FileSearch,
      challenges: 'Enforcing machine-verified faithfulness and citation-level grounding to prevent hallucinated answers over dense financial filings',
      outcomes: 'Answers financial filing questions with span-level source citations and abstains rather than guessing when evidence is insufficient',
      github: 'https://github.com/TemiKayode/sec-rag',
      demo: null
    },
    {
      id: 'ghetto-lagos',
      title: 'Ghetto Lagos — Narrative RPG',
      description: 'An open-world narrative RPG set across 10 seasons of Lagos life (2004–2014), built entirely in Godot 4.6 with procedural 3D geometry and no external art assets.',
      image: null,
      firstLetter: 'G',
      technologies: ['Godot 4.6', 'GDScript', 'Procedural Generation', '3D Geometry'],
      status: 'Completed',
      role: 'Game Developer',
      category: 'Full Stack',
      icon: Gamepad2,
      challenges: 'Generating an entire open-world city procedurally in 3D without any external art assets, while keeping performance stable across 10 narrative seasons',
      outcomes: 'A fully playable, asset-free open-world RPG demonstrating procedural generation at city scale',
      github: 'https://github.com/TemiKayode/ghetto-lagos',
      demo: null
    },
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
      description: 'A single-script Windows privacy hardening tool that disables telemetry, reduces identity exposure, and locks down network privacy settings for security-conscious users and researchers.',
      image: null,
      firstLetter: 'P',
      technologies: ['Python', 'Windows', 'Privacy', 'Security', 'Automation', 'PowerShell'],
      status: 'Completed',
      role: 'Security Tools Developer',
      category: 'Security',
      icon: Lock,
      challenges: 'Comprehensive telemetry removal without breaking Windows Update and core system functionality',
      outcomes: 'Full Windows privacy hardening in a single command with reversible rollback',
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
      outcomes: 'Booking platform with live availability calendar and admin dashboard for property management',
      github: 'https://github.com/TemiKayode/MarsPlaceHotel',
      demo: null
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
      title: 'Wallet Discovery – Blockchain Analytics Toolkit',
      description: 'A Python toolkit for blockchain analytics — clustering, labelling, and monitoring wallet activity across multiple chains for compliance and research use cases.',
      image: null,
      firstLetter: 'W',
      technologies: ['Python', 'Blockchain', 'Web3', 'Data Analysis'],
      status: 'Completed',
      role: 'Backend Developer',
      category: 'Backend',
      icon: Wallet,
      challenges: 'Cross-chain wallet clustering and monitoring at scale',
      outcomes: 'Analytics toolkit for blockchain wallet clustering, labelling, and monitoring',
      github: 'https://github.com/TemiKayode/wallet-discovery',
      demo: null
    },
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
    <section id="projects" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-12">
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title mb-6">A showcase of shipped, production work.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From biometric security pipelines to full-stack platforms — {allProjects.length} projects,
            filterable by category.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {projectsToShow.map((project) => (
            <div
              key={project.id}
              className="card-surface-hover group p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">
                  {project.image ? (
                    project.isLogo ? (
                      <div className="w-28 h-28 mx-auto mb-4 rounded-2xl border border-border bg-muted/40 p-5 group-hover:border-primary/40 transition-colors duration-300">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-52 mb-4 rounded-2xl border border-border bg-muted/40 overflow-hidden group-hover:border-primary/40 transition-colors duration-300">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      </div>
                    )
                  ) : project.firstLetter ? (
                    <div className="w-16 h-16 flex items-center justify-center text-2xl font-display text-primary bg-primary/10 rounded-2xl border border-border group-hover:border-primary/40 transition-colors duration-300">
                      {project.firstLetter}
                    </div>
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center text-primary bg-primary/10 rounded-2xl border border-border group-hover:border-primary/40 transition-colors duration-300">
                      {project.icon && <project.icon size={30} strokeWidth={1.5} />}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className={`text-xs font-medium uppercase tracking-wide ${project.status === 'Completed' ? 'text-muted-foreground' : 'text-primary'}`}>
                    {project.status} · {project.role}
                  </p>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.challenges && (
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="text-foreground font-medium">Challenges: </span>{project.challenges}
                  </p>
                )}
                {project.outcomes && (
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Outcomes: </span>{project.outcomes}
                  </p>
                )}
              </div>
              <div className="flex justify-end gap-3 mt-6">
                {project.github && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                      <Github size={16} className="mr-1.5" /> Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild size="sm">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>
                      Live Demo <ExternalLink size={16} className="ml-1.5" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button onClick={handleLoadMore} size="lg" variant="outline">
              Load More
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
