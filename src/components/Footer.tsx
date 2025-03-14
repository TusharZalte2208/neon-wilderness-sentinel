
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-10 px-4 relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-teal to-neon-blue flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white font-bold">
                  AI
                </div>
              </div>
              <span className="text-white font-bold text-xl">WildlifeAI</span>
            </div>
            
            <p className="text-gray-400 text-sm mb-6">
              Revolutionary AI-powered wildlife conflict management system, protecting both communities and animals through advanced technology.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Features', 'Map', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-teal transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                'Documentation', 
                'API Reference', 
                'Case Studies', 
                'Research Papers', 
                'Privacy Policy', 
                'Terms of Service'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-neon-teal transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white font-medium mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates on AI wildlife conservation.
            </p>
            
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow bg-dark-200 border border-white/10 rounded-l-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-teal/50 focus:ring-1 focus:ring-neon-teal/50 transition-all"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-neon-teal to-neon-blue text-black font-medium py-2 px-4 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/5 my-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WildlifeAI. All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass-panel border border-white/10 text-white hover:border-neon-teal/50 hover:shadow-neon-teal transition-all"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
