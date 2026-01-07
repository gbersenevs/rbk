import type { Metadata } from "next";
import { Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with RBK. Start with a conversation about your business and what you are trying to solve.",
  openGraph: {
    title: "Contact | RBK",
    description: "Get in touch with RBK. Start with a conversation about your business and what you are trying to solve.",
  },
};

export default function ContactPage() {
  const { contact, company } = siteConfig;

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-primary rounded-full mb-8" />
            <h1 className="mb-4">{contact.hero.title}</h1>
            <p className="text-xl text-text-secondary">{contact.hero.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Intro & Form Section */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <p className="text-text-secondary mb-8 leading-relaxed">
                {contact.intro}
              </p>
              
              <div className="bg-neutral-50 border border-border rounded-lg p-6 md:p-8">
                <h2 className="text-xl font-semibold text-text mb-6">{contact.form.title}</h2>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-neutral-50 border border-border rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <h3 className="font-medium text-text text-sm">{contact.info.email.label}</h3>
                </div>
                <a 
                  href={`mailto:${contact.info.email.value}`}
                  className="text-primary hover:text-primary-800 transition-colors notranslate"
                >
                  {contact.info.email.value}
                </a>
              </div>

              {/* Response Time */}
              <div className="bg-neutral-50 border border-border rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-4 h-4 text-text-muted" />
                  <h3 className="font-medium text-text text-sm">{contact.info.response.label}</h3>
                </div>
                <p className="text-text-secondary text-sm">{contact.info.response.value}</p>
              </div>

              {/* Location */}
              <div className="bg-neutral-50 border border-border rounded-lg p-5">
                <h3 className="font-medium text-text text-sm mb-2">Location</h3>
                <p className="text-text-secondary text-sm notranslate">
                  {company.address.city}, {company.address.country}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
