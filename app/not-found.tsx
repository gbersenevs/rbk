import { ArrowRight } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          {/* 404 */}
          <div className="mb-8">
            <span className="text-8xl font-semibold text-primary">404</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-text dark:text-white mb-4">
            Page not found
          </h1>
          
          <p className="text-text-secondary dark:text-neutral-400 mb-10">
            The page you are looking for does not exist or has been moved.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/">
              Go to home
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button href="/contact" variant="outline">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
