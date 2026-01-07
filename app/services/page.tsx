import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Services",
  description: "RBK helps businesses review their operations, build practical automation, and keep control over their systems.",
  openGraph: {
    title: "Services | RBK",
    description: "RBK helps businesses review their operations, build practical automation, and keep control over their systems.",
  },
};

export default function ServicesPage() {
  const { services } = siteConfig;

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-primary rounded-full mb-8" />
            <h1 className="text-text dark:text-white mb-6">{services.hero.title}</h1>
            <p className="text-xl text-text-secondary dark:text-neutral-400">{services.hero.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="pb-16 md:pb-20">
        <Container>
          <p className="text-lg text-text-secondary dark:text-neutral-400 max-w-3xl leading-relaxed">
            {services.intro}
          </p>
        </Container>
      </section>

      {/* Three Phases */}
      <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900 border-y border-border dark:border-neutral-800">
        <Container>
          <div className="space-y-20">
            {services.phases.map((phase, index) => (
              <div key={phase.title}>
                {/* Phase Header */}
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-6xl font-semibold text-primary">{index + 1}</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl text-text dark:text-white mb-1">{phase.title}</h2>
                    <p className="text-text-secondary dark:text-neutral-400">{phase.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Description */}
                  <div>
                    <p className="text-text-secondary dark:text-neutral-400 leading-relaxed mb-6">
                      {phase.description}
                    </p>
                    
                    {/* Outcome */}
                    <div className="bg-white dark:bg-neutral-800 border border-border dark:border-neutral-700 rounded-lg p-5">
                      <p className="text-sm font-medium text-text dark:text-white mb-1">Outcome</p>
                      <p className="text-sm text-text-secondary dark:text-neutral-400">{phase.outcome}</p>
                    </div>
                  </div>

                  {/* Includes */}
                  <div>
                    <p className="text-sm font-medium text-text dark:text-white mb-4">This phase covers:</p>
                    <ul className="space-y-3">
                      {phase.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-text-secondary dark:text-neutral-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Divider (except last) */}
                {index < services.phases.length - 1 && (
                  <div className="border-b border-border dark:border-neutral-700 mt-20" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-text dark:text-white mb-4">{services.technologies.title}</h2>
            <p className="text-text-secondary dark:text-neutral-400">{services.technologies.intro}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {services.technologies.categories.map((category) => (
              <div key={category.title}>
                <h4 className="text-sm font-medium text-text dark:text-white mb-3">{category.title}</h4>
                <ul className="space-y-1">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-text-muted dark:text-neutral-500">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-neutral-900 dark:bg-neutral-950 border-t border-neutral-800">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-white mb-4">Ready to review your operations?</h2>
            <p className="text-neutral-400 mb-8">
              Start with a conversation. We will discuss where your business is today and how we might help.
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
