
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface MobileNavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
  mainNavItems: Array<{
    title: string;
    href: string;
    icon: LucideIcon;
  }>;
  resourcesItems: Array<{
    title: string;
    href: string;
    icon: LucideIcon;
  }>;
  companyItems: Array<{
    title: string;
    href: string;
    icon: LucideIcon;
  }>;
  openScheduleDemo: () => void;
  openGetStarted: () => void;
}

export function MobileNavigation({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  mainNavItems,
  resourcesItems,
  companyItems,
  openScheduleDemo,
  openGetStarted
}: MobileNavigationProps) {
  return (
    <div className={cn(
      "md:hidden fixed inset-0 z-50 bg-background/90 backdrop-blur-sm transition-all duration-300 flex flex-col justify-center items-center",
      isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    )}>
      <button
        className="absolute top-6 right-6 p-2"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-label="Close menu"
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
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      
      <div className="mb-8">
        <img 
          src="/lovable-uploads/bb2cfa8c-c134-4d11-a895-7bc15dde2b1e.png" 
          alt="Akira Logo" 
          className="h-8 w-auto dark:invert" 
        />
      </div>
      
      <nav className="flex flex-col items-center space-y-6 w-full px-6">
        {/* Main Navigation Items */}
        {mainNavItems.map((item, index) => (
          <a 
            key={item.title}
            href={item.href}
            className={cn(
              "text-xl font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-2",
              `animate-slide-down opacity-0`,
              isMobileMenuOpen && `animate-delay-${index * 100}`
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.title}</span>
          </a>
        ))}
        
        {/* Resources Section */}
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-3 text-center">Resources</h3>
          <div className="flex flex-col items-center space-y-3">
            {resourcesItems.map(item => (
              <a 
                key={item.title}
                href={item.href}
                className="text-base text-foreground/80 hover:text-primary transition-colors flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Company Section */}
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-3 text-center">Company</h3>
          <div className="flex flex-col items-center space-y-3">
            {companyItems.map(item => (
              <a 
                key={item.title}
                href={item.href}
                className="text-base text-foreground/80 hover:text-primary transition-colors flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
        
        <Button 
          variant="outline"
          className="mt-4 flex items-center justify-center h-12 px-8 rounded-full text-base font-medium transition-all animate-slide-up opacity-0"
          onClick={() => {
            setIsMobileMenuOpen(false);
            openScheduleDemo();
          }}
        >
          <Calendar className="w-5 h-5 mr-2" />
          Schedule Demo
        </Button>
        
        <Button 
          className="mt-4 flex items-center justify-center h-12 px-8 rounded-full bg-primary text-white text-base font-medium transition-all hover:bg-primary/90 animate-slide-up opacity-0"
          onClick={() => {
            setIsMobileMenuOpen(false);
            openGetStarted();
          }}
        >
          Get Started
        </Button>
      </nav>
    </div>
  );
}

export default MobileNavigation;
