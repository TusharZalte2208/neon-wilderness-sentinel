
import { Brain, BarChart3, BellRing, Users } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Our sophisticated algorithms analyze wildlife behavior patterns and predict potential conflict zones with high accuracy.',
      icon: Brain,
      color: 'teal' as const,
    },
    {
      title: 'Wildlife Tracking',
      description: 'Real-time tracking of animal movements and migration patterns to identify potential risk areas before conflicts occur.',
      icon: BarChart3,
      color: 'blue' as const,
    },
    {
      title: 'Dynamic Alerts',
      description: 'Instant notifications and warnings to communities and authorities when wildlife approaches populated areas.',
      icon: BellRing,
      color: 'purple' as const,
    },
    {
      title: 'Community Engagement',
      description: 'Collaborative tools that empower local communities to participate in wildlife protection and conflict prevention.',
      icon: Users,
      color: 'pink' as const,
    },
  ];

  return (
    <section id="features" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-neon-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full glass-panel border border-neon-purple/30">
            <span className="text-neon-purple text-sm font-medium">Key Features & Benefits</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cutting-Edge Technology for Wildlife Protection
          </h2>
          
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our comprehensive solution integrates advanced features to effectively monitor, predict, and prevent human-wildlife conflicts.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              index={index}
            />
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 glass-panel rounded-xl p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-teal to-neon-blue">95%</h3>
              <p className="text-gray-400 mt-2">Reduction in wildlife conflicts</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">24/7</h3>
              <p className="text-gray-400 mt-2">Real-time monitoring</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-pink">50+</h3>
              <p className="text-gray-400 mt-2">Wildlife species tracked</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-teal">100+</h3>
              <p className="text-gray-400 mt-2">Communities protected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
