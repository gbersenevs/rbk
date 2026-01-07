import { ArrowRight } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function NotFoundPage() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-neutral-950">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-6xl font-semibold text-gradient mb-4">404</p>
          
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Page not found
          </h1>
          
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          
          <Button href="/">
            Back to homepage
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
