export const siteConfig = {
  name: "Cutting Edge Creations",
  shortName: "CEC",
  domain: "cuttingedgecreations.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:4351",
  shopifyUrl: "https://cuttingedgecreations.com",
  description:
    "USA manufacturer of commercial-grade inflatables for rental operators, entertainment venues, and event professionals. Browse the catalog or request a quote.",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "sales@cuttingedgecreations.com",
  tagline: "Commercial inflatables built for operators who book every weekend.",
} as const;

export const navLinks = [
  { href: "/commercial-bounce-houses", label: "Bounce Houses" },
  { href: "/commercial-water-slides", label: "Water Slides" },
  { href: "/inflatable-obstacle-courses", label: "Obstacle Courses" },
  { href: "/packages", label: "Packages" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const categoryPages = [
  {
    href: "/commercial-bounce-houses",
    title: "Commercial Bounce Houses",
    blurb: "Fleet-ready jumpers sized and built for rental volume.",
    image: "/media/categories/monster-truck.png",
    keywordsHint: "commercial bounce house · bounce house for sale",
  },
  {
    href: "/commercial-water-slides",
    title: "Commercial Water Slides",
    blurb: "Wet/dry slides that drive summer bookings and high ticket rentals.",
    image: "/media/hero/barnyard-breakout-slide.jpg",
    keywordsHint: "commercial water slide · inflatable water slide for sale",
  },
  {
    href: "/inflatable-obstacle-courses",
    title: "Inflatable Obstacle Courses",
    blurb: "Race courses and interactives for festivals, FECs, and corporate events.",
    image: "/media/categories/obstacle.png",
    keywordsHint: "inflatable obstacle course · commercial obstacle course",
  },
  {
    href: "/wholesale",
    title: "Wholesale & Fleet Packages",
    blurb: "Talk to sales about multi-unit buys, starter fleets, and custom builds.",
    image: "/media/categories/custom.png",
    keywordsHint: "wholesale inflatables · commercial inflatables for sale",
  },
] as const;
