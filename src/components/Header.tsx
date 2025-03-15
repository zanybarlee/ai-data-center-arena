
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { Store, TestTube, Upload, FileText, Rocket } from 'lucide-react';
import { useActionModals } from '@/hooks/use-action-modals';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openGetStarted } = useActionModals();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with icons
  const navItems = [
    { title: 'Agent Store', href: '/#agent-store', icon: Store },
    { title: 'Testing Sandbox', href: '/#testing-sandbox', icon: TestTube },
    { title: 'Deployment', href: '/#deployment', icon: Upload },
    { title: 'Documentation', href: '/#documentation', icon: FileText }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4",
      isScrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-subtle" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            MCP
          </Link>
          <div className="hidden md:block ml-1 px-2 py-0.5 bg-primary/10 rounded text-primary text-xs font-medium">
            BETA
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-2"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.title}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            className="hidden md:flex items-center justify-center h-10 px-6 rounded-full bg-primary text-white text-sm font-medium transition-all hover:bg-primary/90 hover:shadow-md"
            onClick={() => openGetStarted()}
          >
            <Rocket className="mr-2 h-4 w-4" />
            Get Started
          </button>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              className={cn("transition-all duration-200", isMobileMenuOpen ? "opacity-0" : "opacity-100")}
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
        
        <nav className="flex flex-col items-center space-y-6">
          {navItems.map((item, index) => (
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
          
          <button 
            className="mt-4 flex items-center justify-center h-12 px-8 rounded-full bg-primary text-white text-base font-medium transition-all hover:bg-primary/90 animate-slide-up opacity-0"
            onClick={() => {
              setIsMobileMenuOpen(false);
              openGetStarted();
            }}
          >
            <Rocket className="mr-2 h-5 w-5" />
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
