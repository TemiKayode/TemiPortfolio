
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { sendEmail } from '@/lib/email-service';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendEmail(formData);
      toast({
        title: 'Message Sent!',
        description: 'I will get back to you as soon as possible.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'temitayokayode5@gmail.com',
      href: 'mailto:temitayokayode5@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'TemiKayode',
      href: 'https://github.com/TemiKayode'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'temitayo-kayode',
      href: 'https://www.linkedin.com/in/temitayo-kayode/'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="terminal-window max-w-2xl mx-auto mb-8">
            <div className="terminal-prompt text-left">
              <span className="text-green-500">temi@portfolio</span>:<span className="text-blue-400">~</span>$ <span className="terminal-command">./contact.sh</span>
            </div>
          </div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono">
            $ Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="terminal-window p-6">
              <h3 className="text-2xl font-mono font-bold mb-6 text-green-400">$ Get in Touch</h3>
              <p className="text-green-300 leading-relaxed mb-8 font-mono">
                $ I'm always interested in hearing about new opportunities, 
                whether it's a full-time position, consulting work, or 
                collaborative projects. Let's create something amazing together!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="terminal-window p-4 flex items-center gap-4 hover:border-green-500/60 transition-all duration-300 group three-d-card"
                >
                  <div className="w-12 h-12 rounded-lg border border-green-500/50 bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200" style={{
                    boxShadow: '0 0 15px rgba(0, 255, 65, 0.2)'
                  }}>
                    <info.icon size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="font-mono font-semibold text-green-400">{info.label}</p>
                    <p className="text-green-300 font-mono">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="terminal-window p-6 border-green-500/40">
              <h4 className="font-mono font-semibold text-green-400 mb-3">$ Quick Response</h4>
              <p className="text-green-300 text-sm font-mono">
                $ I typically respond to messages within 24 hours. 
                For urgent inquiries, feel free to reach out directly via email or LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="terminal-window p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono font-medium text-green-400 mb-2">
                    $ Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-black/50 border-green-500/30 text-green-300 font-mono focus:border-green-500 focus:ring-green-500/20 placeholder:text-green-500/50"
                    placeholder="your_name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-mono font-medium text-green-400 mb-2">
                    $ Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-black/50 border-green-500/30 text-green-300 font-mono focus:border-green-500 focus:ring-green-500/20 placeholder:text-green-500/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-mono font-medium text-green-400 mb-2">
                  $ Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-black/50 border-green-500/30 text-green-300 font-mono focus:border-green-500 focus:ring-green-500/20 placeholder:text-green-500/50"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono font-medium text-green-400 mb-2">
                  $ Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-black/50 border-green-500/30 text-green-300 font-mono focus:border-green-500 focus:ring-green-500/20 placeholder:text-green-500/50 resize-none"
                  placeholder="Tell me about your project or what you have in mind..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/50 font-mono hover:scale-105 transition-transform duration-200 three-d-card"
                disabled={isSubmitting}
              >
                {isSubmitting ? '$ Sending...' : <><Send className="mr-2" size={20} />$ ./send_message</>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
