
import React from 'react';
import { Code, UserCheck, Settings, Calendar, Cpu } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: "founder-dev",
      title: "Full Stack Developer & Founder",
      company: "Orda Enterprise",
      period: "September 2025 - Present",
      description: "Founded and built OrdaDelivery — a food delivery platform connecting local restaurants with customers. Designed the full system architecture, built the React/TypeScript frontend, Node.js backend, real-time order tracking with Socket.io, and MongoDB data layer. Owns the entire technical stack end-to-end.",
      technologies: ["Python", "TypeScript", "React", "Node.js", "MongoDB", "Socket.io", "Docker", "Google Maps API", "Stripe"],
      icon: Code,
      color: "green"
    },
    {
      id: "python-ml-engineer",
      title: "Python Backend & ML Engineer",
      company: "Freelance — Client & Open Source Projects",
      period: "2022 - Present",
      description: "Designed and shipped production Python systems across multiple domains: a Kafka-native biometric authentication pipeline (ArcFace + Qdrant), an OSS supply chain attack detection platform (Harbinger), a live system intelligence graph with signed Change Impact Certificates, and ML-powered football scouting analytics covering 36 leagues and 20,000+ players.",
      technologies: ["Python", "Kafka", "ArcFace / InsightFace", "Qdrant", "Docker", "Kubernetes", "OpenTelemetry", "Machine Learning", "Streamlit", "FastAPI", "Go", "Rust"],
      icon: Cpu,
      color: "blue"
    },
    {
      id: "product-owner",
      title: "Product Owner",
      company: "Woods Air Movement",
      period: "2024 - 2025",
      description: "Led product strategy and backlog management for HVAC-focused software teams. Worked directly with engineering leads to define sprint goals, acceptance criteria, and release roadmaps in Agile environments. Bridged business requirements and technical delivery.",
      technologies: ["Product Management", "Agile", "Scrum", "Stakeholder Management", "Roadmapping"],
      icon: UserCheck,
      color: "purple"
    },
    {
      id: "engineering",
      title: "Mechanical Engineer",
      company: "Loladeji & Sons",
      period: "2020 - 2022",
      description: "Applied engineering principles to HVAC system design and maintenance. Developed a systems-first, failure-mode-aware approach to problem solving that directly shapes how I design software architecture and distributed systems today.",
      technologies: ["HVAC Systems", "Engineering Design", "Systems Thinking"],
      icon: Settings,
      color: "yellow"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="terminal-window max-w-2xl mx-auto mb-8">
            <div className="terminal-prompt text-left">
              <span className="text-green-500">temi@portfolio</span>:<span className="text-blue-400">~</span>$ <span className="terminal-command">tail -f experience.log</span>
            </div>
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono">
            $ From mechanical engineering to Python ML systems — building production-grade
            software at every layer of the stack.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-green-600 hidden md:block" style={{
              boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
            }}></div>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-green-400 rounded-full border-4 border-black shadow-lg hidden md:block" style={{
                    boxShadow: '0 0 15px rgba(0, 255, 65, 0.8)'
                  }}></div>

                  <div className="experience-card md:ml-20 three-d-card">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl border border-green-500/50 bg-green-500/10 flex items-center justify-center flex-shrink-0" style={{
                        boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)'
                      }}>
                        <exp.icon size={28} className="text-green-400" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-mono font-bold text-green-400">{exp.title}</h3>
                            <p className="text-green-500 font-mono font-semibold">$ {exp.company}</p>
                          </div>
                          <div className="flex items-center text-green-300 text-sm mt-1 md:mt-0 font-mono">
                            <Calendar size={16} className="mr-1" />
                            {exp.period}
                          </div>
                        </div>

                        <p className="text-green-300 mb-4 leading-relaxed font-mono">
                          $ {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="tech-tag font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
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
