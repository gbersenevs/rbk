import type { Metadata } from "next";
import { Check, Users, ClipboardCheck, MessageSquare, Shield, MapPin, Calendar, Building2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { Collapsible } from "@/components/collapsible";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "About FDA SERVICE",
  description:
    "Learn about FDA SERVICE, a professional building cleaning company in Daugavpils providing cleaning services since 2015.",
  openGraph: {
    title: "About FDA SERVICE",
    description:
      "Learn about FDA SERVICE, a professional building cleaning company in Daugavpils providing cleaning services since 2015.",
  },
};

export default function AboutPage() {
  const { about, home, company } = siteConfig;

  const highlightIcons = [Building2, MapPin, Shield, Users];

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
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-text-muted">Since {company.establishedYear}</span>
            </div>
            <h1 className="mb-4 notranslate">
              FDA SERVICE
            </h1>
            <p className="text-xl text-text-muted">{about.hero.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Highlights Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.highlights.map((highlight, index) => {
            const Icon = highlightIcons[index] || Check;
            return (
              <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  {highlight}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Company Overview */}
      <Section background="surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader title={about.overview.title} />
            <div className="space-y-4">
              {about.overview.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-border/50">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1 notranslate">
                    10+
                  </div>
                  <div className="text-sm text-text-muted">Years Active</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-text-muted">Latvian Company</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">81.21</div>
                  <div className="text-sm text-text-muted">NACE Code</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">VAT</div>
                  <div className="text-sm text-text-muted">Registered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission, Vision, Values */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mission */}
          <Card padding="lg" className="border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle as="h3">{home.mission.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{home.mission.content}</p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card padding="lg" className="border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle as="h3">{home.vision.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-4">
                {home.vision.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>
              <Collapsible triggerText="Read more">
                <p className="text-sm">{home.vision.expandedContent}</p>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Values */}
          <Card padding="lg" className="border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle as="h3">{home.values.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {home.values.items.map((value) => (
                  <li key={value.title}>
                    <p className="font-medium text-text text-sm">
                      {value.title}
                    </p>
                    <p className="text-sm">{value.description}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* How We Work */}
      <Section background="surface">
        <SectionHeader title={about.howWeWork.title} centered />
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-8">
              {about.howWeWork.steps.map((step) => (
                <div key={step.number} className="relative flex gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-lg z-10 shadow-lg shadow-primary/20">
                    {step.number}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-8 bg-white rounded-xl p-6 shadow-card border border-border/50">
                    <h4 className="text-lg font-semibold text-text mb-2">
                      {step.title}
                    </h4>
                    <p className="text-text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Experience and Trust */}
      <Section>
        <SectionHeader title={about.experience.title} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-text-muted mb-6 leading-relaxed">{about.experience.content}</p>
            <p className="text-sm text-text-muted italic bg-slate-50 p-4 rounded-lg border-l-4 border-primary/30">
              {about.experience.clientLogosPlaceholder}
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center">
              <p className="text-7xl font-bold text-primary mb-2 notranslate">
                10+
              </p>
              <p className="text-primary-700 font-medium">Years of Experience</p>
              <p className="text-sm text-primary-600 mt-2 notranslate">Serving {company.address.region}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary to-primary-500 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <defs>
              <pattern id="aboutCtaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#aboutCtaGrid)" />
          </svg>
        </div>
        <Container>
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4">Ready to work with us?</h2>
            <p className="text-primary-100 text-lg mb-8">
              Contact us to discuss how FDA SERVICE can support your building cleaning needs in {company.address.region}.
            </p>
            <Button href="/contact" size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary-50">
              Get in touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
