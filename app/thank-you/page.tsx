import type { Metadata } from "next";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your message has been sent successfully. We will be in touch soon.",
};

export default function ThankYouPage() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white via-primary-50/30 to-mint-50/30 dark:from-neutral-950 dark:via-primary-950/20 dark:to-mint-900/10">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-mint-100 dark:bg-mint-900/30 rounded-full mb-6">
            <CheckCircle2 className="w-8 h-8 text-mint-600 dark:text-mint-400" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Thank you
          </h1>
          
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            Your message has been sent successfully. We will review your inquiry and get back to you within 1-2 business days.
          </p>
          
          <Button href="/" variant="outline">
            Back to homepage
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
