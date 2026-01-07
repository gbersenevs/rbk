import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "About",
  description: "RBK is a business-first automation and systems consultancy. We help businesses review their operations, build reliable systems, and keep control.",
  openGraph: {
    title: "About | RBK",
    description: "RBK is a business-first automation and systems consultancy. We help businesses review their operations, build reliable systems, and keep control.",
  },
};

export default function AboutPage() {
  const { about, company } = siteConfig;

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-primary rounded-full mb-8" />
            <h1 className="text-text dark:text-white mb-4">
              {about.hero.title}
              <span className="notranslate">RBK</span>
            </h1>
            <p className="text-xl text-text-secondary dark:text-neutral-400">{about.hero.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-text dark:text-white mb-6">{about.overview.title}</h2>
            {about.overview.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-text-secondary dark:text-neutral-400 leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Brand Rule */}
      <section className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-900 border-y border-border dark:border-neutral-800">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-text dark:text-white mb-6">{about.brandRule.title}</h2>
            <p className="text-text-secondary dark:text-neutral-400 mb-6">{about.brandRule.intro}</p>
            
            <div className="space-y-4 mb-6">
              {about.brandRule.questions.map((question, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="w-6 h-6 bg-primary text-white rounded text-sm font-medium flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-text dark:text-white">{question}</p>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-text-muted dark:text-neutral-500 border-l-2 border-primary pl-4">
              {about.brandRule.closing}
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-text dark:text-white mb-12">{about.values.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {about.values.items.map((value) => (
              <div key={value.title}>
                <h3 className="text-lg font-semibold text-text dark:text-white mb-2">{value.title}</h3>
                <p className="text-text-secondary dark:text-neutral-400">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Company Info */}
      <section className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-900 border-y border-border dark:border-neutral-800">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-medium text-text-muted dark:text-neutral-500 mb-2">Company</h4>
              <p className="text-text dark:text-white notranslate">{company.legalName}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-text-muted dark:text-neutral-500 mb-2">Location</h4>
              <p className="text-text dark:text-white notranslate">{company.address.city}, {company.address.country}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-text-muted dark:text-neutral-500 mb-2">Established</h4>
              <p className="text-text dark:text-white">{company.establishedYear}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-neutral-900 dark:bg-neutral-950 border-t border-neutral-800">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-white mb-4">Let's talk</h2>
            <p className="text-neutral-400 mb-8">
              Have a question or want to discuss how we might help your business? Start with a conversation.
            </p>
            <Button 
              href="/contact"
              variant="outline"
              size="lg"
              className="bg-white text-neutral-900 border-white hover:bg-neutral-100 hover:border-neutral-100"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
