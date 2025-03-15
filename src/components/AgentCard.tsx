
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

export interface AgentCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  price?: string;
  className?: string;
}

export function AgentCard({
  id,
  name,
  description,
  category,
  rating,
  reviews,
  image,
  tags,
  price = "Free",
  className
}: AgentCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Create path for product detail page
  const getProductPath = () => {
    const productNameToPath = {
      "ThreatShield AI": "/products/threatshield-ai",
      "FailurePredictor Pro": "/products/failurepredictor-pro",
      "ServerGuard AI": "/products/serverguard-ai",
      "NetworkHealth Monitor": "/products/networkhealth-monitor",
      "PowerFlow Optimizer": "/products/powerflow-optimizer",
      "CoolingSmart AI": "/products/coolingsmart-ai",
      "WorkloadBalancer": "/products/workloadbalancer"
    };
    
    return productNameToPath[name] || "#";
  };

  return (
    <div 
      className={cn(
        "relative h-full rounded-2xl overflow-hidden transition-all duration-300 border border-border",
        isHovered ? "shadow-card-hover transform translate-y-[-4px]" : "shadow-card",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ 
            backgroundImage: `url(${image})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="flex justify-between items-end">
            <div>
              <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded">
                {category}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-white">{name}</h3>
            </div>
            <div className="flex items-center gap-1 text-xs text-white/90 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-yellow-400"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>{rating} ({reviews})</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-foreground/80 line-clamp-2 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-2xs px-2 py-0.5 rounded-full bg-secondary text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="font-medium">
            {price === "Free" ? (
              <span className="text-green-600">Free</span>
            ) : (
              price
            )}
          </span>
          
          <Link to={getProductPath()}>
            <button 
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                isHovered 
                  ? "bg-primary text-white" 
                  : "bg-transparent text-primary border border-primary/30"
              )}
            >
              {isHovered ? "Deploy Now" : "View Details"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AgentCard;
