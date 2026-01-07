import type { Metadata } from "next";
import { Phone, Mail, MapPin, Building2, Clock, FileText, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Section, SectionHeader } from "@/components/section";
import { Card } from "@/components/card";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with FDA SERVICE for professional building cleaning services in Daugavpils. Request a free quote or ask about our services.",
  openGraph: {
    title: "Contact FDA SERVICE",
    description:
      "Get in touch with FDA SERVICE for professional building cleaning services in Daugavpils. Request a free quote or ask about our services.",
  },
};

export default function ContactPage() {
  const { contact, company } = siteConfig;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-primary-50 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        <Container>
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6 shadow-sm">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-text-muted">We respond within 24 hours</span>
            </div>
            <h1 className="mb-4">{contact.hero.title}</h1>
            <p className="text-xl text-text-muted">{contact.hero.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Contact Details & Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Details - with notranslate to prevent Google Translate */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold mb-6">Company Details</h2>
            <Card padding="lg" className="bg-slate-50 border-0 mb-6">
              <div className="space-y-5 notranslate">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Company</p>
                    <p className="font-medium text-text">{company.legalName}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Registration No.</p>
                    <p className="font-medium text-text">{company.registrationNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">VAT Number</p>
                    <p className="font-medium text-text">{company.vatNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Address</p>
                    <p className="font-medium text-text">
                      {company.address.street}
                      <br />
                      {company.address.city}, {company.address.postalCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Email</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="font-medium text-text hover:text-primary transition-colors"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>

                {company.workingHours && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Working Hours</p>
                      <p className="font-medium text-text">{company.workingHours}</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-6">{contact.form.title}</h2>
            <Card padding="lg" className="border-border/50">
              <ContactForm />
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="surface">
        <SectionHeader title="Our Location" subtitle={`Based in ${company.address.city}, serving the ${company.address.region} region`} />
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-border/50 shadow-soft">
          <iframe
            src={contact.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="FDA SERVICE Location"
            className="absolute inset-0"
          ></iframe>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-text-muted notranslate">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{company.address.full}</span>
          </div>
        </div>
      </Section>
    </>
  );
}
