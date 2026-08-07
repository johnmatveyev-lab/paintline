import { brand, navLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-bg">
      <div className="container-wide section-pad py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl font-medium tracking-tight">PaintLine Pro</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-bg/65">
              Premium residential and commercial painting for clients who notice the difference —
              and expect it every time.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-bg/45">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-bg/80 transition-colors hover:text-bg">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-bg/45">Studio</p>
            <ul className="mt-4 space-y-2.5 text-sm text-bg/80">
              <li>{brand.location}</li>
              <li>
                <a href={brand.phoneHref} className="hover:text-bg">
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="hover:text-bg">
                  {brand.email}
                </a>
              </li>
              <li className="text-bg/55">{brand.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-bg/10 pt-6 text-xs text-bg/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PaintLine Pro. All rights reserved.</p>
          <p>Licensed · Insured · Craft-first finishes</p>
        </div>
      </div>
    </footer>
  );
}
