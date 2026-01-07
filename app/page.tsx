import { ArrowRight, Check, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function HomePage() {
  const { home } = siteConfig;

  return (
    <>
      {/* Hero Section - with gradient */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-white via-primary-50/30 to-mint-50/30 dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-900 dark:to-primary-950/30">
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

      {/* Approach Section - plain dark */}
      <section className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
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

      {/* Three Principles Section - plain dark */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-950">
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

      {/* What We Do / Don't Do Section - plain dark */}
      <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
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

      {/* Ideal Client Section - plain dark */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-950">
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

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h2>Portfolio</h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              These examples frame how RBK reviews operations, builds systems, and keeps control. Each item represents a structured engagement—covered with placeholder visuals today and precise detail about the work.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              Read each example with the operational context in mind: what reviewed inputs were mapped, where automation or tooling was introduced, and how ownership was preserved. The visuals are placeholders, indicating the shape of the work rather than showing finished product UIs.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              Placeholder imagery is used here to mark where real screenshots from client engagements or internal projects will appear. We replace these abstract views with actual workflow shots as soon as permissions and materials are ready.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Make.com workflows",
                description:
                  "Structured automation scenarios designed to connect tools, reduce manual steps, and handle repetitive operational tasks in a controlled and transparent way.",
              },
              {
                title: "n8n workflows",
                description:
                  "Self-hosted and logic-driven automation flows built for flexibility, data control, and deeper customization when standard tools are not sufficient.",
              },
              {
                title: "Cursor logic and code",
                description:
                  "Custom logic, scripts, and integration code written to support automation workflows and business-specific requirements beyond no-code tools.",
              },
              {
                title: "Websites and internal tools",
                description:
                  "Web interfaces built to support automation, improve information flow, or provide clear interaction points that clarify ownership and outcomes.",
              },
            ].map((item) => (
              <article key={item.title} className="space-y-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6">
                <div className="relative overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900/50">
                  <div className="h-40 w-full bg-neutral-200 dark:bg-neutral-900 relative">
                    <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(41,214,170,0.3),_transparent_55%)]" />
                    <div className="absolute inset-0 opacity-40 bg-[linear-gradient(145deg,_rgba(109,40,217,0.5),_rgba(17,24,39,0.8))]" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><path d=\"M0 80h160\" stroke=\"rgba(255,255,255,0.1)\" stroke-width=\"1\" /><path d=\"M80 0v160\" stroke=\"rgba(255,255,255,0.1)\" stroke-width=\"1\" /></svg>')] bg-[length:160px_160px] opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Coming soon</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.description}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">
                    Placeholder visuals above will be replaced with real screenshots from client work and internal projects once they are available.
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm text-neutral-500 dark:text-neutral-400">
            The portfolio is organized around RBK’s principle: review how work flows, build clear systems, and keep control of the outcomes at every step. Review. Build. Keep control.
          </p>
        </Container>
      </section>

      {/* CTA Section - plain dark */}
      <section className="py-16 md:py-24 bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
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
