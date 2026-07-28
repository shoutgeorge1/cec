export const siteConfig = {
  name: "Cutting Edge Creations",
  shortName: "CEC",
  domain: "cuttingedgecreations.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:4351",
  shopifyUrl: "https://cuttingedgecreations.com",
  description:
    "Commercial inflatables for sale — bounce houses, water slides, and obstacle courses for rental operators and venues. Request a quote or talk to sales.",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "sales@cuttingedgecreations.com",
  tagline: "Commercial inflatables for sale — request a quote.",
} as const;

/**
 * Primary nav — clean human labels only (not SEO page titles).
 * Same list drives desktop strip and mobile drawer.
 */
export const primaryNavLinks = [
  { href: "/commercial-bounce-houses", label: "Bounce Houses" },
  { href: "/commercial-water-slides", label: "Water Slides" },
  { href: "/inflatable-obstacle-courses", label: "Obstacle Courses" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/products", label: "Products" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** @deprecated Prefer primaryNavLinks — kept for sitemap helpers. */
export const navLinks = primaryNavLinks;

/** @deprecated Prefer primaryNavLinks. */
export const desktopNavLinks = primaryNavLinks;

export const categoryPages = [
  {
    href: "/commercial-bounce-houses",
    title: "Commercial Bounce Houses",
    navLabel: "Bounce Houses",
    blurb: "Fleet-ready jumpers sized and built for rental volume.",
    image: "/media/products/fire-station-combo-wet-dry.jpg",
    keywordsHint: "commercial bounce house · bounce house for sale",
  },
  {
    href: "/commercial-water-slides",
    title: "Commercial Water Slides",
    navLabel: "Water Slides",
    blurb: "Wet/dry slides that drive summer bookings and high ticket rentals.",
    image: "/media/products/atlantis-club-slide-combo-commercial-inflatable-bounce-house.jpg",
    keywordsHint: "commercial water slide · inflatable water slide for sale",
  },
  {
    href: "/inflatable-obstacle-courses",
    title: "Inflatable Obstacle Courses",
    navLabel: "Obstacle Courses",
    blurb: "Race courses and interactives for festivals, FECs, and corporate events.",
    image: "/media/products/wacky-dual-180ao-obstaclea-c.jpg",
    keywordsHint: "inflatable obstacle course · commercial obstacle course",
  },
  {
    href: "/wholesale",
    title: "Wholesale & Fleet Packages",
    navLabel: "Wholesale",
    blurb: "Talk to sales about multi-unit buys, starter fleets, and custom builds.",
    image: "/media/products/wacky-5-in-1-combo.jpg",
    keywordsHint: "wholesale inflatables · commercial inflatables for sale",
  },
] as const;
