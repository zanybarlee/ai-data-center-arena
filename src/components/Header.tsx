
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { 
  Store, TestTube, Upload, FileText, Calendar, 
  BookOpen, BookText, GraduationCap, Building, 
  Users, Newspaper, BriefcaseBusiness, Mail, 
  Handshake, ChevronDown, Bot 
} from 'lucide-react';
import { useGetStartedContext } from '@/App';
import { useScheduleDemoContext } from '@/App';
import { Button } from '@/components/ui/button';
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Logo } from './header/Logo';
import { HeaderActions } from './header/HeaderActions';
import { DesktopNavigation } from './header/DesktopNavigation';
import { MobileNavigation } from './header/MobileNavigation';

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
        <Logo />

        <DesktopNavigation />

        <HeaderActions 
          onAkiraClick={handleAkiraClick}
          onScheduleDemo={openScheduleDemo}
          onGetStarted={openGetStarted}
          onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </div>

      {/* Mobile Menu */}
      <MobileNavigation 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        mainNavItems={mainNavItems}
        resourcesItems={resourcesItems}
        companyItems={companyItems}
      />
    </header>
  );
}

export default Header;
