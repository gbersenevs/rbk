import type { Metadata } from "next";
import { ClipboardList, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { ServiceCard } from "@/components/service-card";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional building cleaning services in Daugavpils and Latgale region. Daily cleaning, general cleaning, and facility support.",
  openGraph: {
    title: "Services | FDA SERVICE",
    description:
      "Professional building cleaning services in Daugavpils and Latgale region. Daily cleaning, general cleaning, and facility support.",
  },
};

export default function ServicesPage() {
  const { services, home, company } = siteConfig;

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
              <span className="text-sm font-medium text-text-muted">Professional Cleaning Solutions</span>
            </div>
            <h1 className="mb-4">{services.hero.title}</h1>
            <p className="text-xl text-text-muted">{services.hero.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">{services.intro}</p>
        </div>
      </Section>

      {/* Service Cards */}
      <Section background="surface">
        <SectionHeader 
          title="What We Offer" 
          subtitle="Choose the service that fits your needs"
          centered 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {home.services.items.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </Section>

      {/* How Pricing Works */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title={services.pricing.title}
              subtitle={services.pricing.content}
            />
            <Button href="/contact" className="mt-4">
              Get a free quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <Card padding="lg" className="bg-slate-50 border-0">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <ClipboardList className="w-6 h-6 text-primary" />
              </div>
              <CardTitle as="h4">Pricing Factors</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {services.pricing.factors.map((factor, index) => (
                  <li key={factor} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-medium">
                      {index + 1}
                    </div>
                    <span className="text-text-muted">{factor}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Service Areas */}
      <Section background="surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4">Service Areas</h2>
          <p className="text-text-muted text-lg mb-8">
            We provide professional cleaning services throughout the {company.address.region} region, 
            with a focus on {company.address.city} and surrounding areas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {company.serviceAreas.map((area) => (
              <span 
                key={area} 
                className="px-4 py-2 bg-white rounded-full text-text-muted border border-border shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary to-primary-500 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <defs>
              <pattern id="servicesCtaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#servicesCtaGrid)" />
          </svg>
        </div>
        <Container>
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4">Need a customized service package?</h2>
            <p className="text-primary-100 text-lg mb-8">
              Contact us for a free assessment and tailored service proposal for your building.
            </p>
            <Button href="/contact" size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary-50">
              Request a quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
