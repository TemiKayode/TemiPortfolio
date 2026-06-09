
import React from 'react';
import { Shield, Brain, Server, Code } from 'lucide-react';

const About = () => {
  const coreSkills = [
    'Python', 'Kafka', 'Qdrant', 'Docker', 'Kubernetes',
    'ArcFace / InsightFace', 'Machine Learning', 'OpenTelemetry',
    'Security Engineering', 'Go', 'Rust', 'PostgreSQL',
    'Redis', 'Node.js', 'TypeScript', 'React / Next.js',
    'FastAPI', 'Streamlit', 'Pandas / NumPy', 'AWS / GCP',
    'CI/CD (GitLab · GitHub Actions)', 'Avro / Schema Registry',
  ];

  const highlights = [
    {
      icon: Brain,
      title: 'ML & Data Pipelines',
      description: 'End-to-end ML systems: vector search, embeddings, real-time inference, and analytics at scale'
    },
    {
      icon: Shield,
      title: 'Security Engineering',
      description: 'Biometric auth, supply chain attack detection, HMAC audit trails, and privacy tooling'
    },
    {
      icon: Server,
      title: 'Backend & DevOps',
      description: 'Kafka streaming, Kubernetes orchestration, KEDA autoscaling, and distributed systems'
    },
    {
      icon: Code,
      title: 'Full Stack',
      description: 'Production web apps with React, Next.js, Node.js, and modern databases — shipped and live'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="terminal-window max-w-2xl mx-auto mb-8">
            <div className="terminal-prompt text-left">
              <span className="text-green-500">temi@portfolio</span>:<span className="text-blue-400">~</span>$ <span className="terminal-command">cat about.txt</span>
            </div>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono">
            $ Python Backend &amp; ML Engineer building intelligence-grade systems — from biometric
            pipelines to supply chain security tooling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="terminal-window p-6 text-left">
                <p className="text-lg text-green-300 leading-relaxed font-mono">
                  $ I build production-grade Python backend systems that sit at the intersection
                  of machine learning, security, and distributed data pipelines. My work spans
                  Kafka-native biometric authentication, OSS supply chain attack detection,
                  and real-time ML analytics platforms.
                </p>
              </div>

              <div className="terminal-window p-6 text-left">
                <p className="text-lg text-green-300 leading-relaxed font-mono">
                  $ My background in mechanical engineering gave me a systems-first mindset —
                  I think in constraints, failure modes, and observability before I think in
                  frameworks. That translates into software that is reliable under pressure,
                  not just in demos.
                </p>
              </div>

              <div className="terminal-window p-6 text-left">
                <p className="text-lg text-green-300 leading-relaxed font-mono">
                  $ I am available for remote roles worldwide and open to relocation.
                  I have shipped full products end-to-end — from Kafka consumers and vector
                  databases to React frontends and Kubernetes deployments.
                </p>
              </div>
            </div>

            <div className="mt-8 terminal-window p-6">
              <h3 className="text-xl font-mono font-semibold mb-4 text-green-400">$ Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="terminal-window p-6 three-d-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded border border-green-500/50 bg-green-500/10 flex items-center justify-center mb-4" style={{
                  boxShadow: '0 0 15px rgba(0, 255, 65, 0.2)'
                }}>
                  <highlight.icon size={24} className="text-green-400" />
                </div>
                <h3 className="font-mono font-semibold text-green-400 mb-2">{highlight.title}</h3>
                <p className="text-green-300 text-sm font-mono">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
