
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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, 
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
                  className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-lime-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="lime-gradient w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <info.icon size={20} className="text-gray-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{info.label}</p>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-br from-lime-100 to-yellow-100 rounded-2xl p-6 border border-lime-200">
              <h4 className="font-semibold text-gray-800 mb-3">Quick Response</h4>
              <p className="text-gray-700 text-sm">
                I typically respond to messages within 24 hours. 
                For urgent inquiries, feel free to reach out directly via email or LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-lime-200 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-lime-200 focus:border-lime-400 focus:ring-lime-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-lime-200 focus:border-lime-400 focus:ring-lime-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="border-lime-200 focus:border-lime-400 focus:ring-lime-400"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="border-lime-200 focus:border-lime-400 focus:ring-lime-400 resize-none"
                  placeholder="Tell me about your project or what you have in mind..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full lime-gradient text-gray-900 font-semibold hover:scale-105 transition-transform duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : <><Send className="mr-2" size={20} />Send Message</>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
