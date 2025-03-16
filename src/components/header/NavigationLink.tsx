
import { ReactNode } from 'react';
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

interface NavigationLinkProps {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  onClick?: () => void;
}

export function NavigationLink({ href, icon, children, onClick }: NavigationLinkProps) {
  return (
    <a 
      href={href}
      className={navigationMenuTriggerStyle()}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span>{children}</span>
      </div>
    </a>
  );
}

export default NavigationLink;
