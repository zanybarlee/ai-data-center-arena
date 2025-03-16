
import { ReactNode } from 'react';
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

interface NavigationDropdownItemProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  onClick?: () => void;
}

export function NavigationDropdownItem({ title, href, icon, description, onClick }: NavigationDropdownItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          onClick={onClick}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon}
            <span>{title}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

export default NavigationDropdownItem;
