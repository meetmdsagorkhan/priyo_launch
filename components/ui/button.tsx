import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full border text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-[linear-gradient(135deg,#00e68a,#7bffcb)] px-5 py-3 text-[#04120c] shadow-glow hover:-translate-y-0.5 hover:brightness-110",
        secondary:
          "border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur-xl hover:border-primary/40 hover:bg-white/10",
        ghost: "border-transparent bg-transparent px-3 py-2 text-muted hover:text-white",
      },
      size: {
        md: "h-11",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

