import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "white" | "surface";
  id?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  background = "white",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20 lg:py-24",
        background === "surface" 
          ? "bg-neutral-50 dark:bg-neutral-900" 
          : "bg-white dark:bg-neutral-950",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2 className="text-neutral-900 dark:text-white mb-4">{title}</h2>
      {subtitle && (
        <p className={cn(
          "text-neutral-600 dark:text-neutral-400 text-lg max-w-3xl",
          centered && "mx-auto"
        )}>{subtitle}</p>
      )}
    </div>
  );
}
