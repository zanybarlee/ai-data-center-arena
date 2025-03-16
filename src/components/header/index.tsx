
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Store, TestTube, Upload, FileText, Calendar, BookOpen, BookText, GraduationCap, Building, Users, Newspaper, BriefcaseBusiness, Mail, Handshake, Bot } from 'lucide-react';
import { useGetStartedContext, useScheduleDemoContext } from '@/App';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import HeaderActions from './HeaderActions';

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
          <Logo />
        </div>

        <DesktopNavigation 
          mainNavItems={mainNavItems}
          resourcesItems={resourcesItems}
          companyItems={companyItems}
          getResourceDescription={getResourceDescription}
          getCompanyDescription={getCompanyDescription}
        />

        <HeaderActions 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          handleAkiraClick={handleAkiraClick}
          openScheduleDemo={openScheduleDemo}
          openGetStarted={openGetStarted}
        />
      </div>

      <MobileNavigation 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        mainNavItems={mainNavItems}
        resourcesItems={resourcesItems}
        companyItems={companyItems}
        openScheduleDemo={openScheduleDemo}
        openGetStarted={openGetStarted}
      />
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
