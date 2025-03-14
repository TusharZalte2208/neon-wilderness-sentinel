
import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '../components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would connect to a backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neon-teal/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full glass-panel border border-neon-blue/30">
            <span className="text-neon-blue text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact & Collaboration
          </h2>
          
          <p className="text-gray-300 max-w-3xl mx-auto">
            Have questions about our AI Wildlife Conflict Management System? Interested in implementing it in your region? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-panel rounded-xl p-6 border border-white/10 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-neon-teal/10 text-neon-teal">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-400 text-sm">contact@wildlifeai.example</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-neon-blue/10 text-neon-blue">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-gray-400 text-sm">+1 (888) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-neon-purple/10 text-neon-purple">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Office</h4>
                    <p className="text-gray-400 text-sm">100 Conservation Way<br />Wildlife Valley, CA 94103</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-white font-medium mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {['twitter', 'linkedin', 'facebook', 'github'].map((platform) => (
                    <a 
                      key={platform} 
                      href="#" 
                      className="w-10 h-10 rounded-full glass-panel flex items-center justify-center border border-white/10 hover:border-neon-teal/50 hover:shadow-neon-teal transition-all"
                    >
                      <span className="sr-only">{platform}</span>
                      <div className="w-5 h-5 bg-gray-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass-panel rounded-xl p-6 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark-200 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-teal/50 focus:ring-1 focus:ring-neon-teal/50 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-dark-200 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-teal/50 focus:ring-1 focus:ring-neon-teal/50 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-dark-200 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-teal/50 focus:ring-1 focus:ring-neon-teal/50 transition-all"
                  required
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Implementation">Implementation</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Technical Support">Technical Support</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-dark-200 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-teal/50 focus:ring-1 focus:ring-neon-teal/50 transition-all"
                  placeholder="Tell us about your project, question, or request..."
                  required
                />
              </div>
              
              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-neon-teal to-neon-blue text-black font-medium rounded-full hover:shadow-neon-teal transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
