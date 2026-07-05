import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    id: 'orda',
    title: 'Python Production Engineer (Founder)',
    company: 'Orda Enterprise',
    period: 'Sep 2025 – Present',
    bullets: [
      'Architected and own production stack for OrdaDelivery — event-driven order management platform handling concurrent lifecycle state transitions across restaurant, driver, and customer roles with real-time state propagation and zero race conditions.',
      'Built production observability layer with structured logging, error tracking, and zero-downtime deployment pipeline.',
    ],
    technologies: ['Python', 'Event-Driven Architecture', 'Observability', 'CI/CD'],
  },
  {
    id: 'freelance',
    title: 'Python Backend & ML Engineer',
    company: 'Freelance — Production Systems',
    period: '2022 – Present',
    bullets: [
      'Designed and shipped production Python systems spanning Kafka-native biometric authentication, OSS supply chain attack detection, and real-time code intelligence tooling.',
    ],
    projects: [
      {
        name: 'FaceSentinel — Kafka-Native Production Pipeline',
        detail: 'Sub-350ms end-to-end SLA under concurrent load; three-tier decision engine with dead-letter queues, HMAC-SHA256 signed audit trail, Avro/Schema Registry, and KEDA autoscaling (2–50 replicas) on Kubernetes.',
        href: 'https://github.com/TemiKayode/FaceSentinel',
      },
      {
        name: 'Harbinger — Real-Time Production Monitoring',
        detail: 'Tracks trust signals across 6 package registries with <15-minute anomaly-to-CI/CD-hold latency via Kafka → Neo4j → Apache Flink, Temporal-orchestrated hold/release workflows.',
        href: 'https://github.com/TemiKayode/harbinger',
      },
      {
        name: 'Live System Intelligence Graph',
        detail: 'Real-time AST-to-execution trace mapper generating cryptographically signed Change Impact Certificates in under 60 seconds per PR.',
        href: 'https://github.com/TemiKayode/live-system-intelligence-graph',
      },
    ],
    technologies: ['Kafka', 'Qdrant', 'KEDA', 'Kubernetes', 'OpenTelemetry', 'Apache Flink', 'Neo4j', 'Temporal'],
  },
  {
    id: 'woods-air',
    title: 'Product Owner / Full Stack Developer',
    company: 'Woods Air Movement, UK (On-site)',
    period: 'Nov 2024 – Jun 2025',
    bullets: [
      'Deployed and owned production helpdesk platform achieving sub-1-minute response SLA for field engineers in a time-critical operational environment.',
      'Improved on-time delivery rate to 95%; customer satisfaction +20%.',
    ],
    technologies: ['Product Management', 'Full Stack', 'Agile', 'Stakeholder Management'],
  },
  {
    id: 'hoope',
    title: 'Full Stack Developer',
    company: 'Hoope, Nigeria',
    period: 'Jun 2024 – Nov 2024',
    bullets: [
      'Shipped production features for health and education platforms; reduced server latency by 40% through API optimisation and third-party integration redesign.',
    ],
    technologies: ['Full Stack', 'API Optimisation', 'Integrations'],
  },
  {
    id: 'security-contract',
    title: 'Security Engineer (Contract)',
    company: 'Remote',
    period: 'Jun 2022 – Nov 2023',
    bullets: [
      'Enforced GDPR compliance and reduced vulnerability exposure across client production platforms using data-driven monitoring and audit tooling.',
    ],
    technologies: ['GDPR', 'Security Auditing', 'Monitoring'],
  },
  {
    id: 'mechanical',
    title: 'Mechanical Engineer / Junior Developer',
    company: 'Loladeji & Sons, Nigeria',
    period: 'Nov 2020 – May 2022',
    bullets: [
      'Built Python automation systems reducing operational costs by £50,000+; applied mechanical failure-mode analysis to software architecture from day one.',
    ],
    technologies: ['Python', 'Automation', 'Systems Thinking'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title mb-6">Five years, one throughline: own it end-to-end.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From mechanical engineering to Python production systems — architecture, deployment,
            observability, and incident response, at every layer of the stack.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="absolute left-2.5 top-8 w-3 h-3 rounded-full bg-primary hidden md:block" />

                  <div className="card-surface md:ml-16 p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium text-sm">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar size={15} className="mr-1.5" />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="text-muted-foreground text-sm leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {exp.projects && (
                      <div className="space-y-3 mb-4 border-l-2 border-border pl-4">
                        {exp.projects.map((project) => (
                          <div key={project.name}>
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-foreground font-medium text-sm hover:text-primary transition-colors"
                            >
                              {project.name}
                              <ExternalLink size={13} />
                            </a>
                            <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                              {project.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
