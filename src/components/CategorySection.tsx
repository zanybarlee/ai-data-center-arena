
import { useState, useRef, useEffect } from 'react';
import { AgentCard, AgentCardProps } from './AgentCard';
import { cn } from "@/lib/utils";

interface CategorySectionProps {
  title: string;
  subtitle: string;
  agents: AgentCardProps[];
  className?: string;
}

export function CategorySection({ title, subtitle, agents, className }: CategorySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={cn("py-20 px-6", className)}
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}>
            {title}
          </h2>
          <p className={cn(
            "text-lg text-foreground/70 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}>
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {agents.map((agent, index) => (
            <div 
              key={agent.id}
              className={cn(
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                isVisible && `delay-[${(index + 1) * 100}ms]`
              )}
            >
              <AgentCard {...agent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
