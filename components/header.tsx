"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";
import { GoogleTranslate } from "./google-translate";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { navigation, company } = siteConfig;

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-950 border-b border-border dark:border-neutral-800 transition-colors">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="notranslate flex items-center" aria-label={`${company.name} Home`}>
            <Image 
              src="/brand/rbk-logo.svg" 
              alt="RBK"
              width={80}
              height={30}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary dark:text-neutral-400 hover:text-text dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Google Translate Widget */}
            <GoogleTranslate />

            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-800 transition-colors"
            >
              Contact
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 text-text dark:text-white hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border dark:border-neutral-800">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-text-secondary dark:text-neutral-400 hover:text-text dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border dark:border-neutral-800">
              <Link
                href="/contact"
                className="block w-full bg-primary text-white text-center px-4 py-2.5 rounded-lg font-medium hover:bg-primary-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
