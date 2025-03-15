
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { Store, TestTube, Upload, FileText, Calendar, BookOpen, BookText, GraduationCap, Building, Users, Newspaper, BriefcaseBusiness, Mail, Handshake, ChevronDown, Bot } from 'lucide-react';
import { useGetStartedContext } from '@/App';
import { useScheduleDemoContext } from '@/App';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAkiraFrame, setShowAkiraFrame] = useState(false);
  const { openGetStarted } = useGetStartedContext();
  const { openScheduleDemo } = useScheduleDemoContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAkiraClick = () => {
    setShowAkiraFrame(true);
    window.open('http://localhost:9999/', 'akira', 'width=800,height=600');
  };

  // Navigation items with icons
  const mainNavItems = [{
    title: 'Agent Store',
    href: '/#agent-store',
    icon: Store
  }, {
    title: 'Testing Sandbox',
    href: '/#testing-sandbox',
    icon: TestTube
  }, {
    title: 'Deployment',
    href: '/#deployment',
    icon: Upload
  }];

  // Resources dropdown items
  const resourcesItems = [{
    title: 'Documentation',
    href: '/resources/documentation',
    icon: BookOpen
  }, {
    title: 'API Reference',
    href: '/resources/api-reference',
    icon: FileText
  }, {
    title: 'Case Studies',
    href: '/resources/case-studies',
    icon: BookText
  }, {
    title: 'Knowledge Base',
    href: '/resources/knowledge-base',
    icon: BookText
  }, {
    title: 'Tutorials',
    href: '/resources/tutorials',
    icon: GraduationCap
  }];

  // Company dropdown items
  const companyItems = [{
    title: 'About Us',
    href: '/company/about',
    icon: Building
  }, {
    title: 'Blog',
    href: '/company/blog',
    icon: Newspaper
  }, {
    title: 'Careers',
    href: '/company/careers',
    icon: BriefcaseBusiness
  }, {
    title: 'Contact Us',
    href: '/company/contact',
    icon: Mail
  }, {
    title: 'Partner Program',
    href: '/company/partners',
    icon: Handshake
  }];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4",
      isScrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-subtle" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/bb2cfa8c-c134-4d11-a895-7bc15dde2b1e.png" 
              alt="Akira Logo" 
              className="h-6 w-auto dark:invert" 
            />
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* Main Navigation Items */}
            {mainNavItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <a 
                  href={item.href}
                  className={navigationMenuTriggerStyle()}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </div>
                </a>
              </NavigationMenuItem>
            ))}
            
            {/* Resources Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Resources</span>
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {resourcesItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2 text-sm font-medium leading-none">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {getResourceDescription(item.title)}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* Company Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  <span>Company</span>
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {companyItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2 text-sm font-medium leading-none">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {getCompanyDescription(item.title)}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button 
            variant="outline"
            className="hidden md:flex items-center justify-center h-10 px-6 rounded-full text-sm font-medium transition-all"
            onClick={handleAkiraClick}
          >
            <Bot className="w-4 h-4 mr-2" />
            Call Akira Generative
          </Button>
          
          <Button 
            variant="outline"
            className="hidden md:flex items-center justify-center h-10 px-6 rounded-full text-sm font-medium transition-all"
            onClick={openScheduleDemo}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Demo
          </Button>
          
          <Button 
            className="hidden md:flex items-center justify-center h-10 px-6 rounded-full bg-primary text-white text-sm font-medium transition-all hover:bg-primary/90 hover:shadow-md"
            onClick={openGetStarted}
          >
            Get Started
          </Button>
          
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
    </header>
  );
}

// Helper functions to get descriptions for menu items
function getResourceDescription(title: string): string {
  switch (title) {
    case 'Documentation':
      return 'Comprehensive guides and reference documentation for MCP platform.';
    case 'API Reference':
      return 'Detailed API documentation for integrating with MCP services.';
    case 'Case Studies':
      return 'Real-world examples of how organizations use MCP to transform their data centers.';
    case 'Knowledge Base':
      return 'Articles and solutions to common questions about MCP platform.';
    case 'Tutorials':
      return 'Step-by-step guides to help you get started with MCP features.';
    default:
      return '';
  }
}

function getCompanyDescription(title: string): string {
  switch (title) {
    case 'About Us':
      return 'Learn about our mission, vision, and the team behind MCP.';
    case 'Blog':
      return 'Latest news, updates, and insights from the MCP team.';
    case 'Careers':
      return 'Join our team and help shape the future of AI in data centers.';
    case 'Contact Us':
      return 'Get in touch with our sales, support, or partnership teams.';
    case 'Partner Program':
      return 'Collaborate with MCP to deliver innovative solutions to customers.';
    default:
      return '';
  }
}

export default Header;
