
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
    <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate developer who transitioned from mechanical engineering to create 
            digital solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey began in mechanical engineering, where I developed strong 
                problem-solving skills and attention to detail. This foundation has been 
                invaluable in my transition to software development.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, I specialize in building scalable web applications and leading 
                product development teams. I'm passionate about creating solutions that 
                combine technical excellence with outstanding user experience.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or mentoring aspiring developers.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Skills</h3>
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
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-lime-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="lime-gradient w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon size={24} className="text-gray-800" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
