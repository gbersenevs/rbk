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
      {/* Hero Section - with gradient */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-white via-primary-50/30 to-mint-50/30 dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-900 dark:to-primary-950/30">
        <Container>
          <div className="max-w-3xl">
            <div className="accent-line mb-8" />
            <h1 className="mb-4">
              {about.hero.title}
              <span className="notranslate">RBK</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">{about.hero.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Overview - plain dark */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-950">
        <Container>
          <div className="max-w-3xl">
            <h2 className="mb-6">{about.overview.title}</h2>
            {about.overview.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Brand Rule - plain dark */}
      <section className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="max-w-3xl">
            <h2 className="mb-6">{about.brandRule.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">{about.brandRule.intro}</p>
            
            <div className="space-y-4 mb-6">
              {about.brandRule.questions.map((question, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="w-6 h-6 bg-gradient-to-br from-primary to-mint-500 text-white rounded text-sm font-medium flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-neutral-900 dark:text-white">{question}</p>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-neutral-500 border-l-2 border-primary pl-4">
              {about.brandRule.closing}
            </p>
          </div>
        </Container>
      </section>

      {/* Values - plain dark */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-950">
        <Container>
          <h2 className="mb-12">{about.values.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {about.values.items.map((value, index) => (
              <div key={value.title} className="relative">
                <div className="absolute -left-4 top-0 w-1 h-8 bg-gradient-to-b from-primary to-mint-500 rounded-full opacity-60" />
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Company Info - plain dark */}
      <section className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-medium text-neutral-500 mb-2">Company</h4>
              <p className="text-neutral-900 dark:text-white notranslate">{company.legalName}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-500 mb-2">Location</h4>
              <p className="text-neutral-900 dark:text-white notranslate">{company.address.city}, {company.address.country}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-500 mb-2">Established</h4>
              <p className="text-neutral-900 dark:text-white">{company.establishedYear}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section - plain dark */}
      <section className="py-16 md:py-24 bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="max-w-2xl">
            <h2 className="mb-4">Let&apos;s talk</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Have a question or want to discuss how we might help your business? Start with a conversation.
            </p>
            <Button 
              href="/contact"
              variant="secondary"
              size="lg"
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
