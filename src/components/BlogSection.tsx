
import { ArrowRight } from 'lucide-react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  index: number;
}

const BlogPost = ({ title, excerpt, category, date, image, index }: BlogPostProps) => {
  return (
    <div 
      className="glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:shadow-neon-teal/20 border border-white/10 hover:border-neon-teal/30 group animate-fade-in"
      style={{ '--index': index + 2 } as React.CSSProperties}
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <div 
          className="w-full h-full bg-gradient-to-br from-dark-200 to-dark-300 transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent" />
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs px-3 py-1 rounded-full glass-panel text-neon-teal border border-neon-teal/30">
            {category}
          </span>
          <span className="text-xs text-gray-400">{date}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-teal transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4">{excerpt}</p>
        
        <div className="flex justify-end">
          <button className="text-neon-teal text-sm flex items-center space-x-1 group-hover:underline">
            <span>Read more</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'AI and Wildlife Protection: The Future of Conservation',
      excerpt: 'How artificial intelligence is revolutionizing wildlife conservation efforts worldwide.',
      category: 'AI Technology',
      date: 'June 12, 2023',
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef3?q=80&w=1074&auto=format&fit=crop'
    },
    {
      title: 'Predictive Analytics for Wildlife Movement Patterns',
      excerpt: 'Using data-driven approaches to understand and predict animal migration routes.',
      category: 'Research',
      date: 'May 28, 2023',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1168&auto=format&fit=crop'
    },
    {
      title: 'Success Story: Elephant Conflict Reduction in Tanzania',
      excerpt: 'How our AI system helped local communities reduce human-elephant conflicts by 87%.',
      category: 'Case Study',
      date: 'May 15, 2023',
      image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1032&auto=format&fit=crop'
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block px-3 py-1 mb-4 rounded-full glass-panel border border-neon-pink/30">
            <span className="text-neon-pink text-sm font-medium">Blog & Case Studies</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Latest Insights & Success Stories
          </h2>
          
          <p className="text-gray-300 max-w-3xl mx-auto">
            Discover the latest research, technology advancements, and real-world impact of our AI Wildlife Conflict Management System.
          </p>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={post.title}
              {...post}
              index={index}
            />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 rounded-full glass-panel border border-white/10 text-white hover:border-neon-teal/50 hover:shadow-neon-teal transition-all duration-300 inline-flex items-center space-x-2">
            <span>View All Articles</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
