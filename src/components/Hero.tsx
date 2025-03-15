
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { useGetStartedContext } from '@/App';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { openGetStarted } = useGetStartedContext();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-60 animate-float animate-delay-300" />
      </div>

      {/* Geometric shapes */}
      <div className="absolute -top-10 -left-10 opacity-10">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute -bottom-10 -right-10 opacity-10">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="0.5" />
          <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.5" />
          <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl z-10">
        <div className="text-center">
          <div className={cn(
            "inline-block transition-all duration-700 mb-4",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              AI Data Center Arena
            </span>
          </div>
          
          <h1 className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight transition-all duration-700 delay-100 max-w-4xl mx-auto",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-primary">MCP</span> AI Agents Marketplace
          </h1>
          
          <p className={cn(
            "text-xl text-foreground/80 mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Discover certified AI agents designed to revolutionize data center operations with predictive maintenance, energy optimization, security, and compliance solutions.
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <Button 
              size="lg"
              className="w-full sm:w-auto h-14 px-8 rounded-full bg-primary text-white font-medium text-lg transition-all hover:bg-primary/90 hover:shadow-lg"
              onClick={openGetStarted}
            >
              Explore Agents
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-14 px-8 rounded-full bg-white dark:bg-black border border-input text-foreground font-medium text-lg transition-all hover:bg-secondary hover:shadow-lg"
            >
              Testing Sandbox
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className={cn(
          "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16 md:mt-24 transition-all duration-700 delay-400",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          {[
            { value: "25+", label: "Certified Agents" },
            { value: "99.9%", label: "Reliability Score" },
            { value: "30%", label: "Energy Savings" },
            { value: "15min", label: "Integration Time" }
          ].map((stat, index) => (
            <div key={index} className="glass-panel rounded-xl p-4 md:p-6 text-center">
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-primary">{stat.value}</div>
              <div className="text-sm md:text-base text-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={cn(
        "absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-700 delay-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        <span className="text-sm text-foreground/60 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
