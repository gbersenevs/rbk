"use client";

import { useEffect, useState, useCallback } from "react";
import Script from "next/script";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "lv", label: "LV", name: "Latvian" },
  { code: "ru", label: "RU", name: "Russian" },
];

// Get current language from cookie
function getCurrentLanguage(): string {
  if (typeof document === "undefined") return "en";
  
  const cookies = document.cookie.split("; ");
  const googtrans = cookies.find((c) => c.startsWith("googtrans="));
  
  if (googtrans) {
    const value = decodeURIComponent(googtrans.split("=")[1] || "");
    const parts = value.split("/").filter(Boolean);
    const lang = parts[parts.length - 1];
    if (lang && languages.some((l) => l.code === lang)) {
      return lang;
    }
  }
  return "en";
}

// Set translation cookies
function setTranslationCookie(langCode: string) {
  const hostname = window.location.hostname;
  const expiry = new Date();
  expiry.setFullYear(expiry.getFullYear() + 1);
  const expiryStr = expiry.toUTCString();

  // Clear existing cookies
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname}`;
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname}`;

  if (langCode !== "en") {
    const cookieValue = `/en/${langCode}`;
    document.cookie = `googtrans=${cookieValue}; expires=${expiryStr}; path=/`;
    document.cookie = `googtrans=${cookieValue}; expires=${expiryStr}; path=/; domain=${hostname}`;
    document.cookie = `googtrans=${cookieValue}; expires=${expiryStr}; path=/; domain=.${hostname}`;
  }
}

export function GoogleTranslate() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Remove Google Translate banner
  const removeBanner = useCallback(() => {
    const banners = document.querySelectorAll(
      ".goog-te-banner-frame, iframe.goog-te-banner-frame, body > .skiptranslate iframe"
    );
    banners.forEach((banner) => banner.remove());
    document.body.style.top = "0";
    document.body.style.position = "static";
  }, []);

  useEffect(() => {
    setCurrentLang(getCurrentLanguage());

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,lv,ru",
            autoDisplay: false,
          },
          "google_translate_element"
        );
        setIsReady(true);
      }
    };

    // Periodically check for language changes and remove banner
    const interval = setInterval(() => {
      const detected = getCurrentLanguage();
      if (detected !== currentLang) {
        setCurrentLang(detected);
      }
      removeBanner();
    }, 500);

    // Initial cleanup
    setTimeout(removeBanner, 100);
    setTimeout(removeBanner, 500);
    setTimeout(removeBanner, 1000);

    return () => clearInterval(interval);
  }, [currentLang, removeBanner]);

  // Change language
  const changeLanguage = (langCode: string) => {
    if (langCode === currentLang) {
      setIsOpen(false);
      return;
    }

    // Try using Google Translate's select element
    const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    
    if (selectElement && selectElement.options.length > 0) {
      for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === langCode) {
          selectElement.selectedIndex = i;
          selectElement.dispatchEvent(new Event("change", { bubbles: true }));
          setCurrentLang(langCode);
          setIsOpen(false);
          
          if (langCode === "en") {
            setTranslationCookie("en");
            setTimeout(() => window.location.reload(), 100);
          }
          return;
        }
      }
    }

    // Fallback: Set cookie and reload
    setTranslationCookie(langCode);
    setIsOpen(false);
    window.location.reload();
  };

  const currentLanguage = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <>
      {/* Google Translate Script */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* Hidden Google Translate element */}
      <div
        id="google_translate_element"
        style={{
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          visibility: "hidden",
        }}
      />

      {/* Language Selector */}
      <div className="relative notranslate" translate="no">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-2 py-1.5 text-sm text-text-secondary hover:text-text rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Select language"
        >
          <Globe className="w-4 h-4" />
          <span className="font-medium">{currentLanguage.label}</span>
        </button>

        {/* Dropdown */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <div className="absolute right-0 top-full mt-1 z-50 bg-white dark:bg-neutral-900 border border-border dark:border-neutral-700 rounded-lg shadow-lg py-1 min-w-[120px]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => changeLanguage(lang.code)}
                  className={cn(
                    "w-full px-3 py-2 text-left text-sm transition-colors",
                    currentLang === lang.code
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-text-secondary hover:bg-neutral-50 dark:hover:bg-neutral-800"
                  )}
                >
                  <span className="font-medium mr-2">{lang.label}</span>
                  <span className="text-text-muted">{lang.name}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
