"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Script from "next/script";
import { Globe, ChevronDown } from "lucide-react";
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const removeBanner = useCallback(() => {
    // Remove Google Translate banner
    const frames = document.querySelectorAll(".goog-te-banner-frame, .skiptranslate iframe");
    frames.forEach((frame) => {
      if (frame instanceof HTMLElement) {
        frame.style.display = "none";
      }
    });
    
    // Reset body position
    document.body.style.top = "0px";
    document.body.style.position = "static";
    
    // Hide the default widget
    const widget = document.getElementById("google_translate_element");
    if (widget) {
      widget.style.display = "none";
    }
  }, []);

  useEffect(() => {
    setCurrentLang(getCurrentLanguage());

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

    // Poll to detect language changes and remove banner
    const interval = setInterval(() => {
      const detected = getCurrentLanguage();
      if (detected !== currentLang) {
        setCurrentLang(detected);
      }
      removeBanner();
    }, 300);

    // Initial banner removal attempts
    const timeouts = [100, 300, 500, 1000, 2000].map(ms => 
      setTimeout(removeBanner, ms)
    );

    // Close dropdown on outside click
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [currentLang, removeBanner]);

  const changeLanguage = (langCode: string) => {
    if (langCode === currentLang) {
      setIsOpen(false);
      return;
    }

    // Try to use the Google Translate dropdown
    const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    
    if (selectElement && selectElement.options.length > 0) {
      // Find and select the language
      for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === langCode) {
          selectElement.selectedIndex = i;
          selectElement.dispatchEvent(new Event("change", { bubbles: true }));
          setCurrentLang(langCode);
          setIsOpen(false);
          return;
        }
      }
    }

    // Fallback: set cookie and reload
    setTranslationCookie(langCode);
    setIsOpen(false);
    window.location.reload();
  };

  const currentLanguage = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <>
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
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
      />

      {/* Custom language selector */}
      <div ref={dropdownRef} className="relative notranslate" translate="no">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-2 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Select language"
          aria-expanded={isOpen}
        >
          <Globe className="w-4 h-4" />
          <span className="font-medium">{currentLanguage.label}</span>
          <ChevronDown className={cn("w-3 h-3 transition-transform", isOpen && "rotate-180")} />
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-1 z-50 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg py-1 min-w-[140px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => changeLanguage(lang.code)}
                className={cn(
                  "w-full px-3 py-2 text-left text-sm transition-colors flex items-center justify-between",
                  currentLang === lang.code
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                )}
              >
                <span>{lang.name}</span>
                <span className="text-xs opacity-60">{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
