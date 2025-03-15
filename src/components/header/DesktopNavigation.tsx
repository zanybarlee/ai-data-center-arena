
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { 
  BookOpen, Building, Store, TestTube, Upload, 
  FileText, BookText, GraduationCap, Newspaper, 
  BriefcaseBusiness, Mail, Handshake 
} from "lucide-react";
import { NavigationLink } from "./NavigationLink";
import { NavigationItem } from "./NavigationItem";
import { NavigationDropdownItem } from "./NavigationDropdownItem";
import { getResourceDescription, getCompanyDescription } from "./utils";

// Define navigation items
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

export function DesktopNavigation() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {/* Main Navigation Items */}
        {mainNavItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationLink title={item.title} href={item.href} icon={item.icon} />
          </NavigationMenuItem>
        ))}
        
        {/* Resources Dropdown */}
        <NavigationItem title="Resources" icon={BookOpen}>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {resourcesItems.map((item) => (
              <NavigationDropdownItem
                key={item.title}
                title={item.title}
                href={item.href}
                icon={item.icon}
                description={getResourceDescription(item.title)}
              />
            ))}
          </ul>
        </NavigationItem>
        
        {/* Company Dropdown */}
        <NavigationItem title="Company" icon={Building}>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {companyItems.map((item) => (
              <NavigationDropdownItem
                key={item.title}
                title={item.title}
                href={item.href}
                icon={item.icon}
                description={getCompanyDescription(item.title)}
              />
            ))}
          </ul>
        </NavigationItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
