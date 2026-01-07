import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/container";

export function Footer() {
  const { company, footer } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-block mb-4 notranslate">
                <Image 
                  src="/brand/rbk-logo.svg" 
                  alt="RBK"
                  width={100}
                  height={38}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 max-w-sm">
                {footer.tagline}
              </p>
              <div className="space-y-2 text-sm text-neutral-500">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 hover:text-primary transition-colors notranslate"
                >
                  <Mail className="w-4 h-4" />
                  {company.email}
                </a>
                <div className="flex items-start gap-2 notranslate">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{company.address.city}, {company.address.country}</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-medium text-neutral-900 dark:text-white mb-4 text-sm">{footer.quickLinks.title}</h4>
              <ul className="space-y-2">
                {footer.quickLinks.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-medium text-neutral-900 dark:text-white mb-4 text-sm notranslate">RBK</h4>
              <ul className="space-y-2 text-sm text-neutral-500 notranslate">
                <li>{company.legalName}</li>
                <li>Reg: {company.registrationNumber}</li>
                <li>VAT: {company.vatNumber}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-4 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-neutral-500">
            <p className="notranslate">© {currentYear} {company.legalName}</p>
            <p>{footer.cookieNotice}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
