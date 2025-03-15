
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { LucideIcon } from "lucide-react";

interface NavigationDropdownItemProps {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
}

export function NavigationDropdownItem({ title, href, icon: Icon, description }: NavigationDropdownItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            <Icon className="h-4 w-4" />
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
