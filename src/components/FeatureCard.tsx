
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'teal' | 'blue' | 'purple' | 'pink';
  index: number;
}

const FeatureCard = ({ title, description, icon: Icon, color, index }: FeatureCardProps) => {
  const colorClasses = {
    teal: 'from-neon-teal/20 to-transparent border-neon-teal/30 hover:border-neon-teal/50 hover:shadow-neon-teal',
    blue: 'from-neon-blue/20 to-transparent border-neon-blue/30 hover:border-neon-blue/50 hover:shadow-neon-blue',
    purple: 'from-neon-purple/20 to-transparent border-neon-purple/30 hover:border-neon-purple/50 hover:shadow-neon-purple',
    pink: 'from-neon-pink/20 to-transparent border-neon-pink/30 hover:border-neon-pink/50 hover:shadow-neon-pink',
  };

  const iconColors = {
    teal: 'text-neon-teal',
    blue: 'text-neon-blue',
    purple: 'text-neon-purple',
    pink: 'text-neon-pink',
  };

  return (
    <div 
      className={cn(
        "glass-panel rounded-xl p-6 border transition-all duration-300 h-full",
        "bg-gradient-to-b",
        colorClasses[color],
        "animate-fade-in"
      )}
      style={{ '--index': index } as React.CSSProperties}
    >
      <div className="flex flex-col h-full">
        <div className={cn("p-3 rounded-lg mb-4 w-12 h-12 flex items-center justify-center", `bg-${color === 'teal' ? 'neon-teal' : color === 'blue' ? 'neon-blue' : color === 'purple' ? 'neon-purple' : 'neon-pink'}/10`)}>
          <Icon className={iconColors[color]} size={24} />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">{title}</h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">{description}</p>
        
        <div className={cn("mt-6 w-8 h-1 rounded", `bg-${color === 'teal' ? 'neon-teal' : color === 'blue' ? 'neon-blue' : color === 'purple' ? 'neon-purple' : 'neon-pink'}/50`)} />
      </div>
    </div>
  );
};

export default FeatureCard;
