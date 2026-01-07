import { ArrowRight, Check, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function HomePage() {
  const { home } = siteConfig;

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-white via-primary-50/30 to-mint-50/30 dark:from-neutral-950 dark:via-neutral-900 dark:to-primary-950/30">
        <Container>
          <div className="max-w-3xl">
            {/* Gradient accent line */}
            <div className="accent-line mb-8" />
            
            {/* Main headline */}
            <h1 className="mb-6">
              <span className="block">{home.hero.headline}</span>
              {home.hero.sublines.map((line, i) => (
                <span key={i} className="block text-neutral-500 dark:text-neutral-400">{line}</span>
              ))}
            </h1>
            
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl leading-relaxed">
              {home.hero.description}
            </p>
            
            <Button href={home.hero.cta.href} size="lg" variant="secondary">
              {home.hero.cta.label}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-20 bg-neutral-50 dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-900 dark:to-primary-950/20 border-y border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="max-w-3xl">
            <h2 className="mb-6">{home.approach.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
              {home.approach.intro}
            </p>
            <p className="font-medium text-neutral-900 dark:text-white">
              {home.approach.goal}
            </p>
          </div>
        </Container>
      </section>

      {/* Three Principles Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gradient-to-b dark:from-neutral-950 dark:via-neutral-900/50 dark:to-neutral-950">
        <Container>
          <h2 className="mb-12">{home.principles.title}</h2>
          
          <div className="space-y-16">
            {home.principles.items.map((principle, index) => (
              <div key={principle.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Number and Title */}
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-5xl font-semibold text-gradient">{index + 1}</span>
                    <h3 className="text-2xl">{principle.title}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:col-span-8">
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {principle.description}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500">
                    {principle.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What We Do / Don't Do Section */}
      <section className="py-16 md:py-24 bg-neutral-50 dark:bg-gradient-to-br dark:from-neutral-900 dark:via-primary-950/10 dark:to-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* What We Do */}
            <div>
              <h2 className="mb-6">{home.whatWeDo.title}</h2>
              <ul className="space-y-3 mb-6">
                {home.whatWeDo.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-mint-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-600 dark:text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-neutral-500 border-l-2 border-mint-500 pl-4">
                {home.whatWeDo.closing}
              </p>
            </div>

            {/* What We Don't Do */}
            <div>
              <h2 className="mb-6">{home.whatWeDoNot.title}</h2>
              <ul className="space-y-3 mb-6">
                {home.whatWeDoNot.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-neutral-400 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-600 dark:text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-neutral-500 border-l-2 border-neutral-300 dark:border-neutral-700 pl-4">
                {home.whatWeDoNot.closing}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Ideal Client Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gradient-to-b dark:from-neutral-950 dark:to-neutral-900">
        <Container>
          <div className="max-w-2xl">
            <h2 className="mb-4">{home.idealClient.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">{home.idealClient.intro}</p>
            <ul className="space-y-3">
              {home.idealClient.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-neutral-600 dark:text-neutral-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-neutral-100 dark:bg-gradient-to-br dark:from-neutral-900 dark:via-primary-950/20 dark:to-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="max-w-2xl">
            <h2 className="mb-4">{home.cta.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              {home.cta.description}
            </p>
            <Button 
              href={home.cta.buttonHref}
              variant="secondary"
              size="lg"
            >
              {home.cta.buttonLabel}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
