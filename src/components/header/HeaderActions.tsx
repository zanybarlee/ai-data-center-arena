
import { Button } from "@/components/ui/button";
import { Bot, Calendar } from "lucide-react";

interface HeaderActionsProps {
  onAkiraClick: () => void;
  onScheduleDemo: () => void;
  onGetStarted: () => void;
  onMobileMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

export function HeaderActions({
  onAkiraClick,
  onScheduleDemo,
  onGetStarted,
  onMobileMenuToggle,
  isMobileMenuOpen
}: HeaderActionsProps) {
  return (
    <div className="flex items-center space-x-4">
      <Button 
        variant="outline"
        className="hidden md:flex items-center justify-center h-10 px-6 rounded-full text-sm font-medium transition-all"
        onClick={onAkiraClick}
      >
        <Bot className="w-4 h-4 mr-2" />
        Call Akira Generative
      </Button>
      
      <Button 
        variant="outline"
        className="hidden md:flex items-center justify-center h-10 px-6 rounded-full text-sm font-medium transition-all"
        onClick={onScheduleDemo}
      >
        <Calendar className="w-4 h-4 mr-2" />
        Schedule Demo
      </Button>
      
      <Button 
        className="hidden md:flex items-center justify-center h-10 px-6 rounded-full bg-primary text-white text-sm font-medium transition-all hover:bg-primary/90 hover:shadow-md"
        onClick={onGetStarted}
      >
        Get Started
      </Button>
      
      <button 
        className="md:hidden p-2"
        onClick={onMobileMenuToggle}
        aria-label="Toggle menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="transition-all duration-200"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
