import { cn } from "@/lib/utils";

export function Card({
  className,
  hover = false,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface/50 p-6",
        hover && "card-elevate hover:border-navy-600/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
