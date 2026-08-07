import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300",
        "pt-[var(--grok-banner-h,0px)]",
        scrolled || open
          ? "bg-surface/90 shadow-[0_1px_0_var(--color-border)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container-wide section-pad flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <a href="#top" className="group flex items-center gap-2.5" aria-label={brand.name}>
          <span className="flex size-9 items-center justify-center rounded-md bg-ink text-bg">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
              <path
                d="M5 18V6h3.4c2.3 0 3.7 1.1 3.7 2.9 0 1.1-.6 2-1.6 2.5 1.3.4 2.1 1.5 2.1 2.9 0 2-1.5 3.3-4 3.3H5zm2.2-6.8h1.1c1 0 1.6-.5 1.6-1.3S9.3 8.6 8.3 8.6H7.2v2.6zm0 5h1.3c1.1 0 1.8-.5 1.8-1.4s-.7-1.4-1.8-1.4H7.2v2.8zM14.2 18V6H16.4v10.6H19.8V18h-5.6z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.35rem] font-medium tracking-tight text-ink">
              PaintLine
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted">
              Pro Studio
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft/80 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={brand.phoneHref}
            className="text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            {brand.phone}
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-hover"
          >
            Request a quote
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface-elevated text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-surface/95 backdrop-blur-md md:hidden"
        >
          <nav className="section-pad flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-bg-deep"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-accent-fg"
              onClick={() => setOpen(false)}
            >
              Request a quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
