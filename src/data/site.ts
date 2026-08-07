export const brand = {
  name: "PaintLine Pro",
  shortName: "PaintLine",
  tagline: "Precision finishes for spaces that deserve better.",
  phone: "(704) 555-0148",
  phoneHref: "tel:+17045550148",
  email: "hello@paintline.pro",
  emailHref: "mailto:hello@paintline.pro",
  location: "Charlotte, North Carolina",
  serviceArea: "Charlotte metro & surrounding communities",
};

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "Studio" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  { value: "18+", label: "Years refining finishes" },
  { value: "2,400+", label: "Homes & spaces completed" },
  { value: "98%", label: "Referral & repeat clients" },
  { value: "A+", label: "Craftsmanship standard" },
] as const;

export const services = [
  {
    title: "Interior finishes",
    description:
      "Walls, ceilings, trim, and cabinetry with museum-clean lines and color-true coverage that holds up to daily life.",
    points: ["Cabinet refinishing", "Accent walls & murals prep", "Trim & millwork"],
  },
  {
    title: "Exterior protection",
    description:
      "Weather-ready systems, crisp architectural detailing, and surfaces engineered for Carolina sun and humidity.",
    points: ["Full exterior systems", "Stucco & siding", "Doors, shutters, railings"],
  },
  {
    title: "Commercial spaces",
    description:
      "Low-disruption schedules for offices, hospitality, and retail — finished to a standard that photographs well.",
    points: ["Night & phased work", "Lobby & common areas", "Tenant turnovers"],
  },
  {
    title: "Color consultation",
    description:
      "Palette direction grounded in light, architecture, and how you actually live — not a binder of random swatches.",
    points: ["On-site lighting study", "Sample boards", "Whole-home harmony"],
  },
] as const;

export const projects = [
  {
    id: "ashton-residence",
    title: "Ashton Residence",
    category: "Interior",
    location: "Myers Park",
    year: "2025",
    image: "/images/paintline/hero-living.jpg",
    span: "wide" as const,
    blurb: "Soft architectural whites and charcoal seating zones for a light-forward open plan.",
  },
  {
    id: "gardenia-exterior",
    title: "Gardenia Estate",
    category: "Exterior",
    location: "SouthPark",
    year: "2025",
    image: "/images/paintline/project-exterior.jpg",
    span: "half" as const,
    blurb: "Warm stucco body with charcoal architectural trim — laser-straight porch lines.",
  },
  {
    id: "sage-kitchen",
    title: "Sage Cabinet Studio",
    category: "Cabinetry",
    location: "Dilworth",
    year: "2024",
    image: "/images/paintline/project-kitchen.jpg",
    span: "half" as const,
    blurb: "Factory-level cabinet refinish in muted sage with brass hardware dialogue.",
  },
  {
    id: "commerce-lobby",
    title: "Commerce Lobby",
    category: "Commercial",
    location: "Uptown",
    year: "2025",
    image: "/images/paintline/project-commercial.jpg",
    span: "half" as const,
    blurb: "Gallery-white walls and warm wood reception — hospitality-grade finish.",
  },
  {
    id: "linen-suite",
    title: "Linen Primary Suite",
    category: "Interior",
    location: "Ballantyne",
    year: "2024",
    image: "/images/paintline/project-bedroom.jpg",
    span: "half" as const,
    blurb: "Limewash-adjacent greige for a calm, sun-softened retreat.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Walkthrough & palette",
    text: "We study light, traffic, and materials. You leave with a clear scope, timeline, and a palette that belongs in the space.",
  },
  {
    step: "02",
    title: "Protect & prepare",
    text: "Floors covered, fixtures bagged, edges taped with care. Surface prep is the quiet majority of a lasting finish.",
  },
  {
    step: "03",
    title: "Precision application",
    text: "Premium coatings, measured coats, and cut-in work that holds a straight edge under raking light.",
  },
  {
    step: "04",
    title: "Final walk & care",
    text: "We walk every surface with you, document the finish system, and leave a care guide for years of easy ownership.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "They treat painting like architecture. Every edge, every sheen transition — intentional. Our home finally looks like the renderings.",
    name: "Elena R.",
    role: "Homeowner, Myers Park",
  },
  {
    quote:
      "Night work on our lobby without a single client complaint. The finish photographs like a design studio portfolio.",
    name: "Marcus T.",
    role: "Property Manager, Uptown",
  },
  {
    quote:
      "Color consultation alone was worth the call. They understood our light better than we did.",
    name: "Priya & James K.",
    role: "Homeowners, Dilworth",
  },
] as const;
