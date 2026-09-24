"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SocialIcons, { Icon } from "@/components/SocialIcons";
import { site } from "@/lib/site";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: "Listings",
    href: "/listings",
    children: [
      { label: "Exclusive Listings", href: "/listings" },
      { label: "South of Fifth Condos", href: "/south-of-fifth-condos" },
    ],
  },
  {
    label: "Neighborhoods",
    href: "/#communities",
    children: [
      { label: "South of Fifth", href: "/neighborhoods/south-of-fifth" },
      { label: "Sunset Harbor", href: "/neighborhoods/sunset-harbor" },
      { label: "Fisher Island", href: "/neighborhoods/fisher-island" },
      { label: "Brickell", href: "/neighborhoods/brickell" },
      { label: "Coconut Grove", href: "/neighborhoods/coconut-grove" },
      { label: "Coral Gables", href: "/neighborhoods/coral-gables" },
    ],
  },
  { label: "About", href: "/#about" },
  { label: "Marketing", href: "/#marketing" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const solid = scrolled || mobileMenuOpen || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-[var(--ink)] border-b border-[var(--navy)] shadow-lg"
          : "bg-gradient-to-b from-black/85 via-black/60 to-black/40 border-b border-white/10"
      }`}
    >
      <nav className="max-w-[1600px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Wordmark + brokerage lockup */}
          <Link href="/" className="flex items-center gap-4 lg:gap-5 min-w-0">
            <span
              className="text-white text-[1.7rem] sm:text-[2.1rem] leading-none whitespace-nowrap"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              Matt Edwards
            </span>
            <span className="hidden sm:block w-px h-12 bg-white/80" aria-hidden="true" />
            <Image
              src="/images/Luxe Living.png"
              alt={site.brokerage}
              width={150}
              height={32}
              className="hidden sm:block h-7 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            <Link href="/" aria-label="Home" className="text-white hover:text-[var(--navy-light)] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3 2 12h3v8h5v-6h4v6h5v-8h3L12 3z" />
              </svg>
            </Link>
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-white hover:text-[var(--navy-light)] transition-colors py-8"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <ul className="min-w-[240px] bg-[var(--ink)] border-t-2 border-[var(--navy)] py-3 shadow-2xl">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-6 py-2.5 text-[0.66rem] tracking-[0.2em] uppercase text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <span className="w-px h-6 bg-white/20" aria-hidden="true" />
            <SocialIcons iconClassName="w-3.5 h-3.5" className="gap-4" />
            <a
              href={site.phoneHref}
              className="text-[0.7rem] tracking-[0.15em] text-white hover:text-[var(--navy-light)] transition-colors whitespace-nowrap"
            >
              {site.phone}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center gap-4">
            <a href={site.phoneHref} aria-label="Call Matt" className="text-white p-2">
              <Icon name="phone" className="w-5 h-5" />
            </a>
            <button
              className="p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden pb-8 pt-2 border-t border-white/10 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-white/10">
                  <Link
                    href={item.href}
                    className="block py-4 text-xs tracking-[0.25em] uppercase text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="pb-3 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2 text-[0.68rem] tracking-[0.2em] uppercase text-gray-400 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <SocialIcons className="mt-6" iconClassName="w-4 h-4" />
          </div>
        )}
      </nav>
    </header>
  );
}
