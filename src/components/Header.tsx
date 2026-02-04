"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-semibold tracking-wide text-[var(--charcoal)]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Matt Edwards
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)]">
              Luxury Real Estate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#listings"
              className="text-sm tracking-wide text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors"
            >
              Listings
            </Link>
            <Link
              href="/#about"
              className="text-sm tracking-wide text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-sm tracking-wide text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/#contact"
              className="btn-primary"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[var(--charcoal)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#listings"
                className="text-sm tracking-wide text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Listings
              </Link>
              <Link
                href="/#about"
                className="text-sm tracking-wide text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="text-sm tracking-wide text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/#contact"
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
