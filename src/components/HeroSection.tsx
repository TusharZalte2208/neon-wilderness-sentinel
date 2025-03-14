
import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };
      connected: boolean;
    }[] = [];
    
    const colors = ['#0cffe1', '#4361ee', '#7209b7'];
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      const radius = Math.random() * 2 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const velocity = {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5
      };
      
      particles.push({ x, y, radius, color, velocity, connected: false });
    }
    
    // Connect particles if they are close enough
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const opacity = 1 - distance / 200;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(12, 255, 225, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            
            particles[i].connected = true;
            particles[j].connected = true;
          }
        }
      }
    };
    
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particles
      particles.forEach((particle) => {
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        
        // Bounce off edges
        if (particle.x + particle.radius > canvas.width || particle.x - particle.radius < 0) {
          particle.velocity.x *= -1;
        }
        
        if (particle.y + particle.radius > canvas.height || particle.y - particle.radius < 0) {
          particle.velocity.y *= -1;
        }
        
        // Draw particles
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.connected ? particle.color : 'rgba(255, 255, 255, 0.3)';
        ctx.fill();
        
        // Reset connected flag
        particle.connected = false;
      });
      
      connectParticles();
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ opacity: 0.6 }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-dark-300 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <div className="inline-block px-3 py-1 mb-6 rounded-full glass-panel border border-neon-teal/30 animate-fade-in" style={{ '--index': 0 } as React.CSSProperties}>
          <span className="text-neon-teal text-sm font-medium">Next-Gen Wildlife Protection</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ '--index': 1 } as React.CSSProperties}>
          <span className="text-white">AI-Powered </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-teal via-neon-blue to-neon-purple text-glow">Wildlife Conflict</span>
          <br />
          <span className="text-white">Management System</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-fade-in" style={{ '--index': 2 } as React.CSSProperties}>
          Revolutionizing conservation with artificial intelligence. Our system monitors, predicts, and prevents human-wildlife conflicts in real-time.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center animate-fade-in" style={{ '--index': 3 } as React.CSSProperties}>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-teal to-neon-blue text-black font-medium transition-all duration-300 hover:shadow-neon-teal hover:scale-105 flex items-center justify-center space-x-2">
            <span>Explore Now</span>
            <ArrowRight size={18} />
          </button>
          
          <button className="px-8 py-3 rounded-full glass-panel text-white border border-white/10 transition-all duration-300 hover:border-neon-teal/50 hover:shadow-neon-teal flex items-center justify-center space-x-2">
            <Play size={18} className="text-neon-teal" />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-20">
        <div className="w-8 h-12 rounded-full border-2 border-gray-400 flex justify-center">
          <div className="w-1 h-3 bg-neon-teal rounded-full mt-2 animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
