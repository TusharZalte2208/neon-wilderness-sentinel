
import { useEffect, useRef, useState } from 'react';
import { AlertCircle, Layers, Maximize, Minimize } from 'lucide-react';

const MapVisualization = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeLayer, setActiveLayer] = useState('heatmap');

  // This would be replaced by actual data in a real implementation
  const mockHotspots = [
    { id: 1, lat: 30, lng: 40, severity: 'high', animal: 'Elephant', date: '2023-06-12' },
    { id: 2, lat: -10, lng: 30, severity: 'medium', animal: 'Lion', date: '2023-06-10' },
    { id: 3, lat: 10, lng: -30, severity: 'low', animal: 'Tiger', date: '2023-06-08' },
  ];

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="map" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full glass-panel border border-neon-teal/30">
            <span className="text-neon-teal text-sm font-medium">Interactive Map</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wildlife Conflict Tracker
          </h2>
          
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore our real-time map showing wildlife movements, conflict hotspots, and AI-powered predictions to prevent dangerous encounters.
          </p>
        </div>
        
        {/* Map Container */}
        <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 p-4' : ''}`}>
          <div 
            ref={mapRef} 
            className={`
              aspect-[16/9] ${isFullscreen ? 'h-full aspect-auto' : ''} 
              rounded-xl overflow-hidden border border-white/10 
              relative glass-panel
            `}
          >
            {/* Map Placeholder - would be replaced with actual map implementation */}
            <div className="absolute inset-0 bg-dark-200 flex items-center justify-center">
              {/* Map Grid Lines */}
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-6">
                {Array.from({ length: 13 }).map((_, i) => (
                  <div key={`v-${i}`} className="col-span-1 h-full border-r border-white/5" />
                ))}
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={`h-${i}`} className="row-span-1 w-full border-b border-white/5" />
                ))}
              </div>
              
              {/* Map Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full border border-neon-teal/30 animate-pulse-glow">
                  <div className="w-full h-full rounded-full border-2 border-dashed border-neon-blue/20 animate-spin" style={{ animationDuration: '30s' }} />
                </div>
                
                {/* Hotspots */}
                {activeLayer === 'heatmap' && mockHotspots.map((hotspot) => (
                  <div 
                    key={hotspot.id}
                    className={`
                      absolute w-4 h-4 rounded-full 
                      ${hotspot.severity === 'high' ? 'bg-red-500' : hotspot.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}
                    `}
                    style={{ 
                      left: `calc(50% + ${hotspot.lng * 1.5}px)`,
                      top: `calc(50% + ${hotspot.lat * -1.5}px)`,
                    }}
                  >
                    <div className={`
                      absolute inset-0 rounded-full 
                      ${hotspot.severity === 'high' ? 'bg-red-500' : hotspot.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}
                      animate-ping-slow opacity-70
                    `} />
                  </div>
                ))}
                
                {/* Text Overlay */}
                <div className="text-center text-white/50">
                  <p>Interactive map placeholder</p>
                  <p className="text-xs">(Actual implementation would use Mapbox or similar service)</p>
                </div>
              </div>
            </div>
            
            {/* Map Controls */}
            <div className="absolute top-4 right-4 space-y-2">
              <button 
                onClick={toggleFullscreen}
                className="p-2 glass-panel rounded-lg text-white hover:border-neon-teal/50 transition-all"
              >
                {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
              </button>
              
              <button 
                onClick={() => setActiveLayer('heatmap')}
                className={`p-2 glass-panel rounded-lg text-white transition-all ${activeLayer === 'heatmap' ? 'border-neon-teal' : 'hover:border-neon-teal/50'}`}
              >
                <Layers size={18} />
              </button>
            </div>
            
            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 glass-panel p-3 rounded-lg text-xs">
              <div className="flex flex-col space-y-2">
                <div className="font-medium text-white mb-1">Conflict Severity</div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-gray-300">High</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="text-gray-300">Medium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-gray-300">Low</span>
                </div>
              </div>
            </div>
            
            {/* Alert Message */}
            <div className="absolute top-4 left-4 glass-panel p-3 rounded-lg max-w-xs animate-pulse-glow">
              <div className="flex items-start space-x-2">
                <AlertCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white text-xs font-medium">High Alert: Elephant Herd</h4>
                  <p className="text-gray-400 text-xs">Moving toward eastern village perimeter. Estimated arrival: 2 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Data Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="glass-panel rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-medium">Active Trackers</h4>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            </div>
            <p className="text-3xl font-bold text-white mt-2">248</p>
            <p className="text-xs text-gray-400 mt-1">Across 12 regions</p>
          </div>
          
          <div className="glass-panel rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-medium">Conflict Alerts (24h)</h4>
              <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
            </div>
            <p className="text-3xl font-bold text-white mt-2">17</p>
            <p className="text-xs text-gray-400 mt-1">3 high priority, 14 medium</p>
          </div>
          
          <div className="glass-panel rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-medium">AI Prediction Accuracy</h4>
              <div className="w-3 h-3 rounded-full bg-neon-teal animate-pulse" />
            </div>
            <p className="text-3xl font-bold text-white mt-2">94.7%</p>
            <p className="text-xs text-gray-400 mt-1">Based on historical data analysis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapVisualization;
