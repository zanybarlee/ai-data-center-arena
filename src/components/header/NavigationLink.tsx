
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { LucideIcon } from "lucide-react";

interface NavigationLinkProps {
  title: string;
  href: string;
  icon: LucideIcon;
}

export function NavigationLink({ title, href, icon: Icon }: NavigationLinkProps) {
  return (
    <a href={href} className={navigationMenuTriggerStyle()}>
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4" />
        <span>{title}</span>
      </div>
    </a>
  );
}
