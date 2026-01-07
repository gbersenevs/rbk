import { Check, Building2, Home as HomeIcon, Store, Phone, MapPin, Sparkles, Clock, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { ServiceCard } from "@/components/service-card";
import { Collapsible } from "@/components/collapsible";
import { Container } from "@/components/container";

export default function HomePage() {
  const { home, company } = siteConfig;

  const valueIcons = [Shield, Sparkles, Building2, MapPin];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-slate-50 to-primary-50/30 py-16 md:py-24 lg:py-28 overflow-hidden">
        <Container>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2 mb-6">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-text-muted">{company.trustLine}</span>
              </div>
              <h1 className="mb-6 text-text leading-tight">
                {home.hero.headline}
              </h1>
              <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
                {home.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button href={home.hero.primaryCta.href} size="lg">
                  {home.hero.primaryCta.label}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href={home.hero.secondaryCta.href} variant="outline" size="lg">
                  {home.hero.secondaryCta.label}
                </Button>
              </div>
              
              {/* Stats */}
              {home.hero.stats && (
                <div className="flex flex-wrap gap-8 lg:gap-10">
                  {home.hero.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-3xl md:text-4xl font-bold text-primary notranslate">{stat.value}</div>
                      <div className="text-sm text-text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Right Visual - Modern Office Building */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Modern Office Building - Professional Look */}
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop&q=80"
                  alt="Modern office building"
                  className="w-full h-auto object-cover rounded-2xl"
                  width={600}
                  height={450}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                
                {/* Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-slate-700 px-3 py-2 rounded-lg text-sm font-medium shadow-lg">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Available Now
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-slate-700 px-3 py-2 rounded-lg text-sm font-medium shadow-lg notranslate">
                    {company.address.region}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <SectionHeader title={home.mission.title} centered />
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">{home.mission.content}</p>
        </div>
      </Section>

      {/* Vision Section */}
      <Section background="surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader title={home.vision.title} />
            <ul className="space-y-4 mb-6">
              {home.vision.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-text-muted">{bullet}</span>
                </li>
              ))}
            </ul>
            <Collapsible>
              <p className="text-text-muted">{home.vision.expandedContent}</p>
            </Collapsible>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=500&h=500&fit=crop&q=80"
                alt="Clean office building"
                className="w-full h-auto object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <SectionHeader title={home.values.title} centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {home.values.items.map((value, index) => {
            const Icon = valueIcons[index] || Check;
            return (
              <Card key={value.title} padding="lg" className="text-center hover:shadow-soft transition-shadow duration-300 border-border/50">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle as="h4">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Services Section */}
      <Section background="surface">
        <SectionHeader 
          title={home.services.title} 
          subtitle="Comprehensive cleaning solutions tailored to your needs"
          centered 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Objects We Serve Section */}
      <Section>
        <SectionHeader 
          title={home.objects.title} 
          subtitle="From offices to residential buildings, we clean them all"
          centered 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {home.objects.categories.map((category, index) => {
            const icons = [Building2, HomeIcon, Store];
            const Icon = icons[index] || Building2;
            return (
              <Card key={category.title} padding="lg" className="hover:shadow-soft transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle as="h4">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                        <span className="text-sm text-text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Why Choose Section */}
      <Section background="surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader title={home.whyChoose.title} />
            <ul className="space-y-4">
              {home.whyChoose.items.map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-medium">
                    {index + 1}
                  </div>
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop&q=80"
                alt="Professional cleaning equipment"
                className="w-full h-auto object-cover"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Compliance Section */}
      <Section>
        <SectionHeader title={home.compliance.title} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-text-muted mb-6 leading-relaxed">{home.compliance.content}</p>
          </div>
          <Card padding="lg" className="bg-slate-50 border-0">
            <div className="space-y-4 notranslate">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Registration number</p>
                  <p className="font-semibold text-text">{company.registrationNumber}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">VAT number</p>
                  <p className="font-semibold text-text">{company.vatNumber}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Legal address</p>
                  <p className="font-semibold text-text">{company.address.full}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary to-primary-500 py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <defs>
                <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>
          </div>
        </div>
        <Container>
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4">{home.cta.title}</h2>
            <p className="text-primary-100 text-lg mb-8">{home.cta.content}</p>
            <Button href={home.cta.buttonHref} size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary-50">
              {home.cta.buttonLabel}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
