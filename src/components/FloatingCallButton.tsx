import { site, phoneHref } from "@/lib/site";
import { Icon } from "@/components/SocialIcons";

/** Always-visible "Call Matt" button on tablets and desktops (phones use the bottom contact bar). */
export default function FloatingCallButton() {
  if (!site.phoneE164) return null;
  return (
    <a
      href={phoneHref}
      aria-label={`Call Matt's cell, ${site.phone}`}
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3 bg-[var(--navy)] text-white pl-4 pr-5 py-3 shadow-2xl border border-white/20 hover:bg-[var(--navy-deep)] transition-colors"
    >
      <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
        <Icon name="phone" className="w-4 h-4" />
      </span>
      <span className="leading-tight">
        <span className="block text-[0.58rem] tracking-[0.25em] uppercase text-white/70">Call Matt&apos;s Cell</span>
        <span className="block text-sm tracking-[0.08em] font-medium">{site.phone}</span>
      </span>
    </a>
  );
}
