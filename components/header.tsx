"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";
import { GoogleTranslate } from "./google-translate";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const { navigation, company } = siteConfig;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="notranslate flex items-center" aria-label={`${company.name} Home`}>
            <img 
              src="/brand/fda-logo.svg" 
              alt="FDA SERVICE"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.main.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <>
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-4 py-2 text-text hover:text-primary transition-colors rounded-lg hover:bg-surface"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    {activeDropdown === item.href && (
                      <div className="absolute top-full left-0 bg-white border border-border rounded-xl shadow-soft py-2 min-w-[200px] mt-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-text-muted hover:text-primary hover:bg-surface transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-text hover:text-primary transition-colors rounded-lg hover:bg-surface"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Google Translate Widget */}
            <GoogleTranslate />

            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-600 transition-colors text-sm"
            >
              Get a quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 text-text hover:text-primary transition-colors rounded-lg hover:bg-surface"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navigation.main.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-text hover:text-primary transition-colors"
                  onClick={() => !item.children && setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 border-l-2 border-primary/20 ml-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-text-muted hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-border">
              <Link
                href="/contact"
                className="block w-full bg-primary text-white text-center px-5 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a quote
              </Link>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
