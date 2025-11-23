
import React from 'react';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const skills = [
    'React & Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB',
    'Tailwind CSS', 'Product Management', 'Agile/Scrum', 'Firebase', 'Supabase'
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building end-to-end solutions with modern web technologies'
    },
    {
      icon: Users,
      title: 'Product Ownership',
      description: 'Leading cross-functional teams and product strategy'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Creative solutions from engineering background'
    },
    {
      icon: Target,
      title: 'User-Focused',
      description: 'Prioritizing user experience and business value'
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
            $ A passionate developer who transitioned from mechanical engineering to create 
            digital solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="terminal-window p-6 text-left">
                <p className="text-lg text-green-300 leading-relaxed font-mono">
                  $ My journey began in mechanical engineering, where I developed strong 
                  problem-solving skills and attention to detail. This foundation has been 
                  invaluable in my transition to software development.
                </p>
              </div>
              
              <div className="terminal-window p-6 text-left">
                <p className="text-lg text-green-300 leading-relaxed font-mono">
                  $ Today, I specialize in building scalable web applications and leading 
                  product development teams. I'm passionate about creating solutions that 
                  combine technical excellence with outstanding user experience.
                </p>
              </div>
              
              <div className="terminal-window p-6 text-left">
                <p className="text-lg text-green-300 leading-relaxed font-mono">
                  $ When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or mentoring aspiring developers.
                </p>
              </div>
            </div>

            <div className="mt-8 terminal-window p-6">
              <h3 className="text-xl font-mono font-semibold mb-4 text-green-400">$ Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
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
