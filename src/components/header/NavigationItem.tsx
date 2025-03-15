
import { ReactNode } from "react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { LucideIcon } from "lucide-react";

interface NavigationItemProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}

export function NavigationItem({ title, icon: Icon, children }: NavigationItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4" />
          <span>{title}</span>
        </div>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        {children}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
