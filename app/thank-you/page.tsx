import type { Metadata } from "next";
import { CheckCircle, Home, Mail } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting FDA SERVICE. We will get back to you soon.",
};

export default function ThankYouPage() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <Container>
        <div className="relative max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-50 rounded-full mb-8">
            <CheckCircle className="w-16 h-16 text-green-500" strokeWidth={1.5} />
          </div>
          
          {/* Thank You Message */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-text-muted mb-8">
            Your message has been received successfully.
          </p>
          
          {/* Details Card */}
          <div className="bg-slate-50 border border-border rounded-2xl p-8 mb-8 text-left">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text mb-2">What happens next?</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  We will review your inquiry and get back to you within 1-2 business days. 
                  You will receive a response via email with more details about our services 
                  and a customized quote if applicable.
                </p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-text-muted">
                We appreciate your patience and look forward to serving you.
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" size="lg">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

