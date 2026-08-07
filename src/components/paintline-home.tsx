import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";
import {
  brand,
  processSteps,
  projects,
  services,
  stats,
  testimonials,
} from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[calc(var(--grok-banner-h,0px)+4.5rem)]">
      <div className="container-wide section-pad pb-10 md:pb-14">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="eyebrow">Greenville, SC · Premium painting company</p>
            <h1 className="display-xl mt-5 text-balance text-ink">
              The finish line
              <span className="block text-accent">done right.</span>
            </h1>
            <p className="lead mt-6 max-w-xl">
              {brand.tagline} From color strategy to the last cut-in, PaintLine Pro delivers
              architectural-grade painting for homes and businesses across the Upstate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-bg transition-transform active:scale-[0.98] hover:bg-ink-soft"
              >
                Book a walkthrough
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border-strong bg-surface-elevated px-6 text-sm font-medium text-ink transition-colors hover:bg-bg-deep"
              >
                View selected work
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-surface-elevated/80 p-4 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:p-5"
                >
                  <p className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-lift)] md:mt-14 md:rounded-[2rem]">
          <div className="aspect-[16/10] md:aspect-[21/9]">
            <img
              src="/images/paintline/hero-living.jpg"
              alt="Luxury open-plan living room with flawless warm white paint finish"
              className="img-cover"
              width={1600}
              height={900}
              fetchPriority="high"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-bg/75">
                  Featured · Ashton Residence
                </p>
                <p className="mt-1 font-display text-2xl text-bg sm:text-3xl">
                  Soft whites. Architectural calm.
                </p>
              </div>
              <p className="text-sm text-bg/70">North Main · Interior system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="border-t border-border bg-surface py-20 md:py-28">
      <div className="container-wide section-pad">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Selected work</p>
              <h2 className="display-lg mt-3 text-ink">Projects that set the standard</h2>
              <p className="lead mt-4 max-w-xl">
                A curated showcase of recent residential and commercial finishes — chosen for
                craft, light, and lasting quality.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
            >
              Start your project
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              delay={i * 60}
              className={cn(project.span === "wide" && "md:col-span-2")}
            >
              <article className="group overflow-hidden rounded-[1.5rem] border border-border bg-surface-elevated shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]">
                <div
                  className={cn(
                    "relative overflow-hidden",
                    project.span === "wide" ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]",
                  )}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category} painting project in ${project.location}`}
                    className="img-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-surface-elevated/95 px-3 py-1 text-xs font-medium text-ink backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-bg backdrop-blur-sm">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-tight text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{project.blurb}</p>
                  </div>
                  <p className="shrink-0 text-sm text-subtle">{project.location}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border bg-bg py-20 md:py-28">
      <div className="container-wide section-pad">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Capabilities</p>
            <h2 className="display-lg mt-3 text-ink">Services built around the finish</h2>
            <p className="lead mt-4">
              Every engagement is scoped for clarity, protected for your home, and executed with
              coatings that earn their keep.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 50}>
              <div className="flex h-full flex-col rounded-[1.25rem] border border-border bg-surface-elevated p-6 shadow-[var(--shadow-soft)]">
                <div className="mb-5 flex size-10 items-center justify-center rounded-full bg-bg-deep text-accent">
                  {i === 0 && <Paintbrush className="size-4" />}
                  {i === 1 && <ShieldCheck className="size-4" />}
                  {i === 2 && <Timer className="size-4" />}
                  {i === 3 && <Sparkles className="size-4" />}
                </div>
                <h3 className="font-display text-xl font-medium tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-border pt-4">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink-soft">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-sage" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="border-t border-border bg-bg-deep py-20 md:py-28">
      <div className="container-wide section-pad">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">How we work</p>
            <h2 className="display-lg mt-3 text-ink">A process as precise as the paint line</h2>
            <p className="lead mt-4">
              No surprises. No half-prepped walls. Just a calm sequence from first walkthrough to
              final walk.
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-border shadow-[var(--shadow-soft)]">
              <img
                src="/images/paintline/craft-detail.jpg"
                alt="Painter cutting in a perfect edge along crown molding"
                className="aspect-[4/3] img-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 60}>
                <div className="h-full rounded-[1.25rem] border border-border bg-surface-elevated p-6 md:p-7">
                  <p className="font-display text-3xl font-medium text-clay/80">{step.step}</p>
                  <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border bg-surface py-20 md:py-28">
      <div className="container-wide section-pad">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="overflow-hidden rounded-[1.25rem] border border-border shadow-[var(--shadow-soft)]">
                <img
                  src="/images/paintline/team-crew.jpg"
                  alt="PaintLine Pro crew applying a ceiling finish"
                  className="aspect-[3/4] img-cover"
                  loading="lazy"
                  width={600}
                  height={800}
                />
              </div>
              <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-border shadow-[var(--shadow-soft)] sm:mt-12">
                <img
                  src="/images/paintline/color-palette.jpg"
                  alt="Curated warm paint color sample board"
                  className="aspect-[3/4] img-cover"
                  loading="lazy"
                  width={600}
                  height={800}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="eyebrow">The company</p>
            <h2 className="display-lg mt-3 text-ink">Craftspeople, not just painters</h2>
            <p className="lead mt-4">
              PaintLine Pro is a Greenville-based painting company. We hire for eye and discipline,
              train to a single house standard, and treat every project like it will be photographed
              under harsh light — because good work should hold up to it.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Licensed & fully insured crews",
                "Premium low-VOC coating systems",
                "Written scope, schedule, and warranty",
                "Respect for occupied homes and active workplaces",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-soft sm:text-base">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <CheckCircle2 className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-t border-border bg-ink py-20 text-bg md:py-28">
      <div className="container-wide section-pad">
        <Reveal>
          <p className="eyebrow text-bg/45">Client voices</p>
          <h2 className="display-lg mt-3 text-bg">What neighbors say after the drop cloths leave</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <blockquote className="flex h-full flex-col rounded-[1.25rem] border border-bg/10 bg-bg/5 p-6 md:p-7">
                <p className="flex-1 font-display text-xl leading-snug tracking-tight text-bg">
                  “{t.quote}”
                </p>
                <footer className="mt-6 border-t border-bg/10 pt-4">
                  <p className="text-sm font-medium text-bg">{t.name}</p>
                  <p className="mt-0.5 text-sm text-bg/55">{t.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="border-t border-border bg-bg py-20 md:py-28">
      <div className="container-wide section-pad">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Start a project</p>
            <h2 className="display-lg mt-3 text-ink">Tell us about the space</h2>
            <p className="lead mt-4">
              Share a few details and we’ll follow up with next steps for a walkthrough across{" "}
              {brand.serviceArea}.
            </p>
            <div className="mt-8 space-y-4 text-sm text-ink-soft">
              <p>
                <span className="block text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Call
                </span>
                <a href={brand.phoneHref} className="mt-1 inline-block text-base font-medium text-ink hover:text-accent">
                  {brand.phone}
                </a>
              </p>
              <p>
                <span className="block text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Email
                </span>
                <a href={brand.emailHref} className="mt-1 inline-block text-base font-medium text-ink hover:text-accent">
                  {brand.email}
                </a>
              </p>
              <p>
                <span className="block text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Service area
                </span>
                <span className="mt-1 block text-base text-ink">{brand.location}</span>
                <span className="block text-sm text-muted">{brand.serviceArea}</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={60} className="lg:col-span-7">
            <div className="rounded-[1.5rem] border border-border bg-surface-elevated p-6 shadow-[var(--shadow-soft)] sm:p-8">
              {sent ? (
                <div className="flex min-h-[280px] flex-col items-start justify-center">
                  <CheckCircle2 className="size-8 text-sage" />
                  <h3 className="mt-4 font-display text-2xl font-medium text-ink">
                    Request received
                  </h3>
                  <p className="mt-2 max-w-md text-muted">
                    Thanks — we’ll review your project details and follow up shortly.
                  </p>
                  <button
                    type="button"
                    className="mt-6 text-sm font-medium text-accent hover:text-accent-hover"
                    onClick={() => setSent(false)}
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form className="grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
                  <label className="block sm:col-span-1">
                    <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
                      Name
                    </span>
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      className="h-11 w-full rounded-xl border border-border bg-bg px-3 text-sm text-ink outline-none ring-accent/30 transition focus:ring-2"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="h-11 w-full rounded-xl border border-border bg-bg px-3 text-sm text-ink outline-none ring-accent/30 transition focus:ring-2"
                      placeholder="you@example.com"
                    />
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
                      Phone
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="h-11 w-full rounded-xl border border-border bg-bg px-3 text-sm text-ink outline-none ring-accent/30 transition focus:ring-2"
                      placeholder="(864) 000-0000"
                    />
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
                      Project type
                    </span>
                    <select
                      name="type"
                      className="h-11 w-full rounded-xl border border-border bg-bg px-3 text-sm text-ink outline-none ring-accent/30 transition focus:ring-2"
                      defaultValue="interior"
                    >
                      <option value="interior">Interior</option>
                      <option value="exterior">Exterior</option>
                      <option value="cabinetry">Cabinetry</option>
                      <option value="commercial">Commercial</option>
                      <option value="consultation">Color consultation</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
                      Project details
                    </span>
                    <textarea
                      required
                      name="details"
                      rows={4}
                      className="w-full resize-y rounded-xl border border-border bg-bg px-3 py-2.5 text-sm text-ink outline-none ring-accent/30 transition focus:ring-2"
                      placeholder="Neighborhood, timeline, rooms or exterior scope…"
                    />
                  </label>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-hover sm:w-auto"
                    >
                      Request a quote
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function PaintlineHome() {
  return (
    <div className="min-h-dvh bg-bg text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <Work />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
