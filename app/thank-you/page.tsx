import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting RBK. We will respond within 1-2 business days.",
};

export default function ThankYouPage() {
  const { company, contact } = siteConfig;

  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 inline-flex items-center justify-center">
            <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-text dark:text-white mb-4">
            Thank you
          </h1>
          
          <p className="text-text-secondary dark:text-neutral-400 mb-2">
            Your message has been received.
          </p>
          
          <p className="text-text-muted dark:text-neutral-500 mb-10">
            {contact.form.successMessage}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button href="/" variant="outline">
              Back to home
            </Button>
            <Button href="/services">
              View services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="inline-flex items-center gap-2 text-sm text-text-muted dark:text-neutral-500">
            <Mail className="w-4 h-4" />
            <span>
              Questions?{" "}
              <a 
                href={`mailto:${company.email}`} 
                className="text-primary hover:text-primary-800 dark:hover:text-primary-400 notranslate"
              >
                {company.email}
              </a>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
