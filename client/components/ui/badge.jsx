import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-1.5 text-[11px] py-0.5 text-xs font-semibold transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "border-transparent bg-light-gray text-deep-green text-[11px]",
        warning: "border-transparent bg-light-orange text-orange text-[11px]",
      },
      width: {
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, width, ...props }) {
  return (
    <div
      className={cn(badgeVariants({ variant, width }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
