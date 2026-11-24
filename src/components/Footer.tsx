import Image from "next/image";
import Link from "next/link";
import SocialIcons, { Icon } from "@/components/SocialIcons";
import { site, addressLine1, addressLine2, phoneHref } from "@/lib/site";

const quickLinks = [
  { label: "South of Fifth Condos", href: "/south-of-fifth-condos" },
  { label: "Sell Your Home", href: "/sell" },
  { label: "About Matt", href: "/about" },
  { label: "Real Estate FAQ", href: "/faq" },
  { label: "Contact", href: "/#contact" },
];

// Short list only; the full set lives in the header menu and the homepage communities section.
const footerAreas = [
  { label: "South of Fifth", href: "/neighborhoods/south-of-fifth" },
  { label: "Sunset Harbour", href: "/neighborhoods/sunset-harbor" },
  { label: "Fisher Island", href: "/neighborhoods/fisher-island" },
  { label: "All Neighborhoods", href: "/#communities" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white">
      {/* Navy call-to-action band */}
      <div className="bg-gradient-to-r from-[var(--navy-deep)] via-[var(--navy)] to-[#1a4d94]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-2xl md:text-3xl uppercase tracking-[0.08em]" style={{ fontFamily: "var(--font-heading)" }}>
            Buying or selling in Miami? Let&apos;s talk.
          </p>
          <a href={phoneHref} className="btn-outline-light shrink-0">
            <Icon name="phone" className="w-3.5 h-3.5" /> {site.phone}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Monogram */}
          <div className="lg:col-span-2 flex lg:block justify-center">
            <Image src="/images/logo.png" alt="Matt Edwards monogram" width={96} height={96} className="h-24 w-auto invert" />
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h4 className="text-[0.68rem] font-semibold tracking-[0.3em] uppercase mb-2">{site.name}</h4>
            <p className="inline-block text-[0.6rem] tracking-[0.3em] uppercase text-[var(--navy-light)] border-b border-white/20 pb-3 mb-6">
              {site.tagline}
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href={phoneHref} className="inline-flex items-center gap-3 hover:text-white transition-colors">
                  <Icon name="phone" className="w-3.5 h-3.5 text-gray-500" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 hover:text-white transition-colors">
                  <Icon name="email" className="w-3.5 h-3.5 text-gray-500" /> {site.email}
                </a>
              </li>
              <li className="pt-2 leading-relaxed">
                {addressLine1}
                <br />
                {addressLine2}
              </li>
            </ul>
            <SocialIcons className="mt-6 justify-center lg:justify-start" />
          </div>

          {/* Neighborhoods */}
          <div className="lg:col-span-4">
            <h4 className="inline-block text-[0.68rem] font-semibold tracking-[0.3em] uppercase border-b border-white/30 pb-3 mb-6">
              Neighborhoods
            </h4>
            <ul className="space-y-4">
              {footerAreas.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-[0.66rem] tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="inline-block text-[0.68rem] font-semibold tracking-[0.3em] uppercase border-b border-white/30 pb-3 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[0.66rem] tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Image
              src="/images/one-sothebys.png"
              alt=""
              aria-hidden="true"
              width={150}
              height={32}
              className="h-7 w-auto mt-10 brightness-0 invert opacity-80"
            />
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-white/10 mt-14 pt-10 text-center">
          <p className="text-gray-500 text-xs leading-relaxed max-w-4xl mx-auto">
            &copy; {new Date().getFullYear()} {site.name} · {site.brokerage} · {site.license}{site.about.licenseNumber ? ` · FL License ${site.about.licenseNumber}` : ""}. All material presented
            herein is intended for informational purposes only. Information is compiled from sources deemed reliable but
            is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. All
            measurements and square footages are approximate. Equal Housing Opportunity.
          </p>
          <p className="text-gray-500 text-xs mt-3">
            Designed by{" "}
            <a href="https://ownitsocial.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">
              Own It Social
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
