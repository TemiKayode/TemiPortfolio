
import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
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

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({ title: 'Error', description: 'Please fill in all fields.', variant: 'destructive' });
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(formData.email)) {
      toast({ title: 'Error', description: 'Please enter a valid email address.', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    try {
      await sendEmail(formData);
      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out — I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : String(error);
      console.error('[Contact] Email delivery failed:', msg);
      toast({
        title: 'Delivery failed',
        description: `Could not send message (${msg}). Email me directly at Temitayokayode5@gmail.com`,
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
    <section id="contact" className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title mb-6">Let's work together.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Open to remote roles worldwide and relocation opportunities. Whether it's a full-time
            position, consulting work, or a collaborative project — let's talk.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-surface-hover p-4 flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <info.icon size={19} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{info.label}</p>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="card-surface p-6">
              <h4 className="font-semibold text-foreground mb-2">Quick response</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I typically respond within 24 hours. For urgent inquiries, reach out directly via
                email or LinkedIn.
              </p>
            </div>
          </div>

          <div className="card-surface p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="resize-none"
                  placeholder="Tell me about your project or what you have in mind..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : <><Send className="mr-2" size={18} />Send Message</>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
