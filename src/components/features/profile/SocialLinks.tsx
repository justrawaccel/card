import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center p-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
      aria-label={label}
    >
      <Icon className="w-7 h-7 text-zinc-500 transition-colors duration-300 group-hover:text-white" />
    </a>
  );
}
