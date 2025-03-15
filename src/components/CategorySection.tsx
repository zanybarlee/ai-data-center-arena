
import { useState, useRef, useEffect } from 'react';
import { AgentCard, AgentCardProps } from './AgentCard';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

interface CategorySectionProps {
  title: string;
  subtitle: string;
  agents: AgentCardProps[];
  className?: string;
  showAkiraButton?: boolean;
}

export function CategorySection({ title, subtitle, agents, className, showAkiraButton = false }: CategorySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFrameOpen, setIsFrameOpen] = useState(false);
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

  const handleOpenAkira = () => {
    console.log("Opening Akira dialog");
    setIsFrameOpen(true);
  };

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
          
          {showAkiraButton && (
            <div className={cn(
              "mt-8 transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}>
              <Button 
                onClick={handleOpenAkira}
                className="h-12 px-8 bg-primary hover:bg-primary/90"
                variant="default"
                size="lg"
              >
                <span className="flex items-center">
                  Call Akira Generative Engineering
                  <ExternalLink className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </div>
          )}
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
      
      <Dialog open={isFrameOpen} onOpenChange={setIsFrameOpen}>
        <DialogContent className="max-w-4xl h-[80vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>Akira Generative Engineering</DialogTitle>
            <DialogDescription className="sr-only">
              Interactive interface for Akira Generative Engineering
            </DialogDescription>
          </DialogHeader>
          <div className="p-0 h-full">
            <iframe 
              src="http://localhost:999" 
              className="w-full h-[calc(80vh-80px)]"
              title="Akira Generative Engineering" 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default CategorySection;
