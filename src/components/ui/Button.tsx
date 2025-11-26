import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-white text-black hover:scale-[1.02] active:scale-[0.98]": variant === "primary",
            "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700": variant === "secondary",
            "bg-transparent text-zinc-400 hover:text-white": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-sm": size === "md",
            "h-14 px-8 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
