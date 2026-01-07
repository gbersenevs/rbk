import Link from "next/link";
import { ArrowRight, Sparkles, Building2, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

const serviceIcons: Record<string, React.ReactNode> = {
  "Daily Cleaning": <Sparkles className="w-6 h-6" />,
  "General Cleaning": <Building2 className="w-6 h-6" />,
  "Facility Support": <Wrench className="w-6 h-6" />,
};

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  const defaultIcon = serviceIcons[title] || <Sparkles className="w-6 h-6" />;
  
  return (
    <Card hover className="h-full flex flex-col group">
      <CardHeader>
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {icon || defaultIcon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="mb-4 text-text-muted">{description}</p>
      </CardContent>
      <div className="mt-auto pt-4 border-t border-border/50">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-medium transition-colors group-hover:gap-3"
        >
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
}
