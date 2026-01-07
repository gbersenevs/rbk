import { Check, Users, Clock, Shield, ArrowRight, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { Container } from "@/components/container";

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  included: string[];
  whoFor: string[];
  frequency: {
    title: string;
    content: string;
  };
  qualityControl: {
    title: string;
    content: string;
  };
}

export function ServicePageTemplate({
  title,
  subtitle,
  description,
  included,
  whoFor,
  frequency,
  qualityControl,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-primary-50 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        <Container>
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-text-muted">Professional Service</span>
            </div>
            <h1 className="mb-4">{title}</h1>
            <p className="text-xl text-text-muted">{subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Description */}
      <Section>
        <div className="max-w-4xl">
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">{description}</p>
        </div>
      </Section>

      {/* What is Included */}
      <Section background="surface">
        <SectionHeader title="What's Included" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {included.map((item, index) => (
            <div key={item} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-border/50">
              <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-text-muted">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Who It's For */}
      <Section>
        <SectionHeader title="Who This Service Is For" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {whoFor.map((item, index) => (
            <div key={item} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <div className="w-6 h-6 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-medium">
                {index + 1}
              </div>
              <span className="text-text-muted">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Frequency and Quality Control */}
      <Section background="surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card padding="lg" className="border-t-4 border-t-primary">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <CardTitle as="h3">{frequency.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{frequency.content}</p>
            </CardContent>
          </Card>

          <Card padding="lg" className="border-t-4 border-t-primary">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle as="h3">{qualityControl.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{qualityControl.content}</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary to-primary-500 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <defs>
              <pattern id="serviceCtaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#serviceCtaGrid)" />
          </svg>
        </div>
        <Container>
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4">Request a Quote</h2>
            <p className="text-primary-100 text-lg mb-8">
              Contact us to discuss your specific requirements and receive a
              tailored service proposal.
            </p>
            <Button href="/contact" size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary-50">
              Get a quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
