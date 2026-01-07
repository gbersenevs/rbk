"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
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
  { code: "lv", label: "LV", name: "Latvian" },
  { code: "en", label: "EN", name: "English" },
  { code: "ru", label: "RU", name: "Russian" },
];

// Get current language from cookie
function getCurrentLanguage(): string {
  if (typeof document === "undefined") return "en";
  
  const cookies = document.cookie.split("; ");
  const googtrans = cookies.find((c) => c.startsWith("googtrans="));
  
  if (googtrans) {
    const value = decodeURIComponent(googtrans.split("=")[1] || "");
    // Cookie format: /en/lv or /auto/lv
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

  // Clear all existing googtrans cookies
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname}`;
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname}`;

  if (langCode !== "en") {
    // Set the translation cookie
    const cookieValue = `/en/${langCode}`;
    document.cookie = `googtrans=${cookieValue}; expires=${expiryStr}; path=/`;
    document.cookie = `googtrans=${cookieValue}; expires=${expiryStr}; path=/; domain=${hostname}`;
    document.cookie = `googtrans=${cookieValue}; expires=${expiryStr}; path=/; domain=.${hostname}`;
  }
}

export function GoogleTranslate() {
  const [currentLang, setCurrentLang] = useState("en");
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Initialize on mount
  useEffect(() => {
    setCurrentLang(getCurrentLanguage());

    // Set up the Google Translate initialization function
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
      }
    };

    // Function to remove Google Translate banner
    const removeBanner = () => {
      // Remove the banner frame
      const banners = document.querySelectorAll(
        ".goog-te-banner-frame, iframe.goog-te-banner-frame, body > .skiptranslate iframe"
      );
      banners.forEach((banner) => {
        banner.remove();
      });

      // Reset body position
      document.body.style.top = "0";
      document.body.style.position = "static";
    };

    // Re-detect language and remove banner periodically
    const interval = setInterval(() => {
      const detected = getCurrentLanguage();
      setCurrentLang(detected);
      removeBanner();
    }, 500);

    // Also run immediately
    setTimeout(removeBanner, 100);
    setTimeout(removeBanner, 500);
    setTimeout(removeBanner, 1000);

    return () => clearInterval(interval);
  }, []);

  // Function to change language
  const changeLanguage = (langCode: string) => {
    if (langCode === currentLang) return;

    // Try to use the Google Translate select first
    const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    
    if (selectElement && selectElement.options.length > 0) {
      // Find the option with the matching language
      for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === langCode) {
          selectElement.selectedIndex = i;
          selectElement.dispatchEvent(new Event("change", { bubbles: true }));
          setCurrentLang(langCode);
          
          // For switching to English, we need to reset
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
    window.location.reload();
  };

  return (
    <>
      {/* Google Translate Script */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />

      {/* Hidden Google Translate widget - needed for functionality */}
      <div
        id="google_translate_element"
        className="google-translate-widget"
        aria-hidden="true"
      />

      {/* Custom language buttons */}
      <div className="flex items-center gap-1 notranslate" translate="no">
        {languages.map((lang) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => changeLanguage(lang.code)}
            className={cn(
              "notranslate px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
              currentLang === lang.code
                ? "bg-primary text-white shadow-sm"
                : "text-text-muted hover:text-primary hover:bg-surface"
            )}
            aria-label={`Translate to ${lang.name}`}
            translate="no"
          >
            {lang.label}
          </button>
        ))}
      </div>
    </>
  );
}
