import { cn } from "@/lib/utils";

function Skeleton({ className, bg = "rgb(235 235 235 / 53%)", ...props }) {
  return (
    <div
      style={{ background: bg }}
      className={cn("rounded-md animate-pulse", className)}
      {...props}
    />
  );
}

export { Skeleton };
