
import { LucideIcon } from 'lucide-react';
import { BookOpen, Building } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavigationLink from './NavigationLink';
import NavigationDropdownItem from './NavigationDropdownItem';

interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

interface DesktopNavigationProps {
  mainNavItems: NavigationItem[];
  resourcesItems: NavigationItem[];
  companyItems: NavigationItem[];
  getResourceDescription: (title: string) => string;
  getCompanyDescription: (title: string) => string;
}

export function DesktopNavigation({
  mainNavItems,
  resourcesItems,
  companyItems,
  getResourceDescription,
  getCompanyDescription
}: DesktopNavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {/* Main Navigation Items */}
        {mainNavItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationLink 
              href={item.href}
              icon={<item.icon className="w-4 h-4" />}
            >
              {item.title}
            </NavigationLink>
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
                <NavigationDropdownItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  description={getResourceDescription(item.title)}
                  icon={<item.icon className="h-4 w-4" />}
                />
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
                <NavigationDropdownItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  description={getCompanyDescription(item.title)}
                  icon={<item.icon className="h-4 w-4" />}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default DesktopNavigation;
