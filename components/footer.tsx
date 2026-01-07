import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Building2, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";

export function Footer() {
  const { company, footer } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <Link href="/" className="inline-block mb-4 notranslate">
                <Image 
                  src="/brand/fda-logo.svg" 
                  alt="FDA SERVICE"
                  width={180}
                  height={130}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-slate-400 text-sm mb-4">
                <span className="notranslate font-semibold">FDA SERVICE</span> — {company.positioning}
              </p>
              {/* Contact info - do not translate */}
              <div className="space-y-2 text-sm text-slate-400 notranslate">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-400" />
                  <span>{company.address.full}</span>
                </div>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-primary-400" />
                  <span>{company.email}</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">{footer.quickLinks.title}</h4>
              <ul className="space-y-2">
                {footer.quickLinks.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">{footer.servicesLinks.title}</h4>
              <ul className="space-y-2">
                {footer.servicesLinks.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Details - do not translate */}
            <div>
              <h4 className="font-semibold mb-4 text-white notranslate">FDA SERVICE</h4>
              <ul className="space-y-2 text-sm text-slate-400 notranslate">
                <li className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-500" />
                  <div>
                    <span className="text-slate-500">Company:</span>{" "}
                    {company.legalName}
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-500" />
                  <div>
                    <span className="text-slate-500">Reg. No:</span>{" "}
                    {company.registrationNumber}
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-500" />
                  <div>
                    <span className="text-slate-500">VAT:</span>{" "}
                    {company.vatNumber}
                  </div>
                </li>
                <li className="pt-2 text-xs text-slate-500">
                  Established {company.establishedDate}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p className="notranslate">
              © {currentYear} {company.legalName}. All rights reserved.
            </p>
            <p className="text-xs text-center md:text-right max-w-md">
              {footer.cookieNotice}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
