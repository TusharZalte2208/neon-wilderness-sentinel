
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-teal to-neon-blue flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white font-bold">
              AI
            </div>
          </div>
          <span className="text-gray-800 font-bold text-xl">WildlifeAI</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Features', 'Map', 'Blog', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-neon-teal transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-teal transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-neon-teal to-neon-blue text-white font-medium py-2 px-6 rounded-full hover:shadow-neon-teal transition-all duration-300 flex items-center space-x-1">
            <span>Get Started</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-light-100/95 backdrop-blur-md z-40 animate-fade-in">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {['Home', 'About', 'Features', 'Map', 'Blog', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-neon-teal transition-colors duration-300 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-gradient-to-r from-neon-teal to-neon-blue text-white font-medium py-2 px-6 mt-4 rounded-full hover:shadow-neon-teal transition-all duration-300 flex items-center space-x-1">
              <span>Get Started</span>
              <ChevronRight size={16} />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
