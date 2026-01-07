import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
}

const paddings = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  padding = "md",
  hover = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-card",
        paddings[padding],
        hover && "transition-all duration-300 hover:shadow-soft hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h3" | "h4";
}

export function CardTitle({ children, className, as: Component = "h3" }: CardTitleProps) {
  return (
    <Component className={cn("text-neutral-900 dark:text-white font-semibold", className)}>
      {children}
    </Component>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn("text-neutral-600 dark:text-neutral-400", className)}>{children}</div>;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return <div className={cn("mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800", className)}>{children}</div>;
}
