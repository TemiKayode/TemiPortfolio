import React from 'react';
import { Shield, Brain, Server, Code } from 'lucide-react';

const coreSkills = [
  'Python', 'Kafka', 'Apache Flink', 'Qdrant', 'Docker', 'Kubernetes',
  'KEDA Autoscaling', 'ArcFace / InsightFace', 'Machine Learning', 'OpenTelemetry',
  'Go', 'Rust', 'TypeScript', 'PostgreSQL', 'Redis', 'MongoDB', 'TimescaleDB',
  'FastAPI', 'React / Next.js', 'Node.js', 'AWS / Azure / GCP',
  'GitHub Actions', 'GitLab CI/CD', 'Avro / Schema Registry',
];

const highlights = [
  {
    icon: Server,
    title: 'Event-Driven Backend',
    description: 'Kafka-native pipelines enforcing sub-350ms SLAs, dead-letter queues, schema evolution, and consumer group management at production scale.',
  },
  {
    icon: Brain,
    title: 'ML & Data Systems',
    description: 'Vector search, embeddings, and real-time anomaly detection — from biometric verification to ML-ranked analytics platforms.',
  },
  {
    icon: Shield,
    title: 'Security & Observability',
    description: 'HMAC-signed audit trails, GDPR-compliant pipelines, and full OpenTelemetry instrumentation across every execution path.',
  },
  {
    icon: Code,
    title: 'Infrastructure & Full Stack',
    description: 'Kubernetes with KEDA autoscaling, GitOps CI/CD, and production web apps shipped end-to-end with React, Next.js, and Node.js.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="section-eyebrow">About</p>
          <h2 className="section-title mb-6">
            I build production systems that hold under real load.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Python engineer with 5+ years building and owning event-driven systems where
            correctness, latency, and reliability are non-negotiable. A background in mechanical
            engineering instils a failure-mode-aware, constraints-first approach — I think in edge
            cases and production failure before frameworks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden border border-border flex-shrink-0">
                <img
                  src="/images/profile.jpg"
                  alt="Temitayo Kayode"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-foreground font-semibold mb-1">Temitayo Kayode</p>
                <p className="text-muted-foreground text-sm mb-3">
                  Python Production Engineer — Real-Time Distributed Systems
                </p>
                <p className="text-muted-foreground text-sm">
                  Relocation ready · New York / Osun, Nigeria · Open to remote roles worldwide
                </p>
              </div>
            </div>

            <div className="card-surface p-6">
              <p className="text-foreground leading-relaxed">
                I build production-grade Python backend systems that sit at the intersection of
                machine learning, security, and distributed data pipelines — Kafka-native
                biometric authentication, OSS supply chain attack detection, and real-time ML
                analytics platforms.
              </p>
            </div>

            <div className="card-surface p-6">
              <p className="text-foreground leading-relaxed">
                I've shipped full products end-to-end: Kafka consumers and vector databases,
                Kubernetes deployments with KEDA autoscaling, and the React frontends that sit on
                top.
              </p>
            </div>

            <div className="card-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="card-surface-hover p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <highlight.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
