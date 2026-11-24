import { phoneHref, smsHref, whatsappHref, site } from "@/lib/site";
import { Icon } from "@/components/SocialIcons";

/** Sticky Call · Text · WhatsApp bar, phones only (≤768px). Buttons with no configured value are hidden. */
export default function MobileContactBar() {
  const items = [
    site.phoneE164 && { label: "Call", href: phoneHref, icon: <Icon name="phone" className="w-4 h-4" /> },
    smsHref && {
      label: "Text",
      href: smsHref,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5m-9 6 2.5-3H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14z" />
        </svg>
      ),
    },
    whatsappHref && {
      label: "WhatsApp",
      href: whatsappHref,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.1c-.24.68-1.42 1.3-1.95 1.34-.5.05-.97.23-3.27-.68-2.77-1.09-4.52-3.92-4.66-4.1-.13-.18-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.25-.27.54-.34.72-.34h.52c.17 0 .4-.06.62.47.24.56.8 1.94.87 2.08.07.14.12.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.27.71 1.17 1.52 1.9 1.05.93 1.93 1.22 2.2 1.36.27.14.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.61-.14.25.09 1.59.75 1.86.89.27.14.45.2.52.32.07.11.07.66-.17 1.34z" />
        </svg>
      ),
    },
  ].filter(Boolean) as { label: string; href: string; icon: React.ReactNode }[];

  if (!items.length) return null;

  return (
    <nav
      aria-label="Contact Matt"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 flex bg-[var(--ink)] border-t border-[var(--navy)] text-white pb-[env(safe-area-inset-bottom)]"
    >
      {items.map((i) => (
        <a
          key={i.label}
          href={i.href}
          {...(i.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[0.66rem] font-semibold tracking-[0.2em] uppercase border-r border-white/10 last:border-r-0 active:bg-white/10"
        >
          {i.icon}
          {i.label}
        </a>
      ))}
    </nav>
  );
}
