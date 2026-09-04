import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-brand px-5 py-3 text-center text-sm font-bold leading-tight transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-ocean disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-ocean text-white shadow-soft hover:bg-[#10666c]",
        secondary: "bg-sun text-ink hover:bg-[#dca13e]",
        outline: "border border-ink/15 bg-white/70 text-ink hover:border-ocean hover:text-ocean",
        ghost: "text-ink hover:bg-ink/5",
        dark: "bg-ink text-white hover:bg-black",
        light: "bg-white text-ink hover:bg-paper",
        donate: "bg-clay text-white shadow-soft hover:bg-[#a93f2e]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  icon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild, isLoading, icon, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp className={cn(buttonVariants({ variant }), className)} disabled={disabled || isLoading} ref={ref} {...props}>
        {isLoading ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" /> : icon}
        {asChild ? <Slottable>{children}</Slottable> : children}
      </Comp>
    );
  },
);

Button.displayName = "Button";
