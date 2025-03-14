
import { Brain, Shield, AlertTriangle, Eye } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-neon-teal/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block px-3 py-1 mb-4 rounded-full glass-panel border border-neon-blue/30">
            <span className="text-neon-blue text-sm font-medium">About the Project</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Intelligent Wildlife Management
          </h2>
          
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our AI-powered system uses advanced algorithms to monitor, predict, and prevent conflicts between humans and wildlife, creating harmony between communities and nature.
          </p>
          
          <div className="absolute -top-10 -left-10 w-20 h-20 border border-neon-teal/20 rounded-full animate-ping-slow opacity-20" />
          <div className="absolute -bottom-5 -right-5 w-10 h-10 border border-neon-blue/20 rounded-full animate-ping-slow opacity-10" />
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-xl glass-panel p-1">
              <div className="w-full h-full bg-gradient-to-br from-dark-200 to-dark-300 rounded-lg flex items-center justify-center relative">
                {/* Placeholder for an actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-neon-teal/10 animate-pulse-glow flex items-center justify-center">
                    <Eye size={30} className="text-neon-teal" />
                  </div>
                </div>
                
                {/* Image Caption */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel py-2 px-4 text-sm text-center text-gray-300">
                  AI-powered monitoring system scanning wildlife movements
                </div>
                
                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-neon-teal/50 rounded-tl-lg" />
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-neon-teal/50 rounded-br-lg" />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-5 -right-5 glass-panel px-4 py-2 rounded-lg border border-neon-blue/30 animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse-glow" />
                <span className="text-white text-sm font-medium">Live Monitoring</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Text & Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">
              What is the AI Wildlife Conflict Management System?
            </h3>
            
            <p className="text-gray-300">
              Our system integrates cutting-edge AI technology with wildlife conservation efforts to create a harmonious coexistence between humans and animals. By analyzing patterns, predicting movements, and alerting communities, we prevent dangerous encounters before they happen.
            </p>
            
            {/* Feature List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 p-2 rounded-lg bg-neon-teal/10 text-neon-teal">
                  <Brain size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Intelligent Prediction</h4>
                  <p className="text-gray-400 text-sm">Our AI algorithms learn from historical data to predict wildlife movement patterns with remarkable accuracy.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1 p-2 rounded-lg bg-neon-blue/10 text-neon-blue">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Community Protection</h4>
                  <p className="text-gray-400 text-sm">Real-time alerts and notifications help communities take proactive measures to avoid conflicts.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1 p-2 rounded-lg bg-neon-purple/10 text-neon-purple">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Early Warning System</h4>
                  <p className="text-gray-400 text-sm">Detects potential conflict zones and sends alerts before encounters occur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
