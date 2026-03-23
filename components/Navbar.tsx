"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/for-diners", label: "For Diners" },
  { href: "/for-restaurants", label: "For Restaurants" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Determine if the current route has a dark hero background at the top
  // Using startsWith to safely handle optional trailing slashes
  const isDarkBackgroundRoute = pathname?.startsWith('/for-restaurants');
  const useLightText = isDarkBackgroundRoute && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-[color:var(--color-cream)]/80 shadow-sm backdrop-blur-xl border-b border-[#1A2E35]/5 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-primary)] shadow-lg shadow-[color:var(--color-primary)]/20 transition-transform group-hover:scale-105">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.869 15.429 6 11.613 6 8a6 6 0 0 1 12 0z" />
              <line x1="12" y1="13" x2="12" y2="15" />
              <path d="M12 2v2" />
              <path d="M12 18v4" />
              <path d="M4.93 4.93l1.41 1.41" />
              <path d="M17.66 17.66l1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="M6.34 17.66l-1.41 1.41" />
              <path d="M19.07 4.93l-1.41 1.41" />
            </svg>
          </div>
          <span className={`text-2xl font-medium tracking-wide ${useLightText ? "text-white" : "text-[color:var(--color-text)]"}`}>deekup</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname === `${link.href}/`;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-all ${
                  isActive ? "font-bold" : "font-medium"
                } ${
                  useLightText
                    ? isActive ? "text-white" : "text-white/80 hover:text-white"
                    : isActive ? "text-[color:var(--color-primary)]" : "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-primary)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span 
                    className={`absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full ${
                      useLightText ? "bg-white" : "bg-[color:var(--color-primary)]"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA buttons */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/for-restaurants"
            className={`text-sm font-medium transition-colors ${
              useLightText
                ? "text-white hover:text-white/80"
                : "text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-dark)]"
            }`}
          >
            Partner with us
          </Link>
          <Link
            href="/download"
            className={`group relative overflow-hidden rounded-full px-7 py-3 text-sm font-medium transition-all active:scale-95 ${
              useLightText
                ? "bg-white text-[color:var(--color-primary)] hover:bg-white/90 shadow-xl shadow-black/10"
                : "bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary-dark)] hover:shadow-lg hover:shadow-[color:var(--color-primary)]/30"
            }`}
          >
            <span className="relative z-10">Get the app</span>
            <div className={`absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-full ${
              useLightText ? "bg-gradient-to-r from-transparent via-black/5 to-transparent" : "bg-gradient-to-r from-transparent via-white/10 to-transparent"
            }`} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`flex h-10 w-10 items-center justify-center rounded-xl md:hidden ${
            useLightText ? "bg-white/10" : "bg-[color:var(--color-primary)]/5"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""} ${useLightText ? "bg-white" : "bg-[color:var(--color-text)]"}`} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""} ${useLightText ? "bg-white" : "bg-[color:var(--color-text)]"}`} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""} ${useLightText ? "bg-white" : "bg-[color:var(--color-text)]"}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-black/5 bg-[#F1ECDA] px-6 pb-8 shadow-inner">
          <nav className="flex flex-col gap-5 pt-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname === `${link.href}/`;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg flex items-center transition-colors ${
                    isActive 
                      ? "font-bold text-[color:var(--color-primary)]" 
                      : "font-medium text-[color:var(--color-text)] hover:text-[color:var(--color-primary)]"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  {isActive && <span className="ml-3 h-2 w-2 rounded-full bg-[color:var(--color-primary)]" />}
                </Link>
              );
            })}
            <div className="my-2 h-px bg-black/5" />
            <Link
              href="/download"
              className="inline-flex items-center justify-center rounded-full bg-[#1A6B5C] py-4 text-base font-bold text-white shadow-lg shadow-[#1A6B5C]/20"
              onClick={() => setMobileOpen(false)}
            >
              Get the app
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
