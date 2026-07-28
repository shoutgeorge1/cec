/**
 * Curated commercial starter packages.
 * Shopify has no native “bundles” collection yet — these are honest Package /
 * Talk-to-sales cards built from real live catalog products.
 */

export type PackageCard = {
  id: string;
  name: string;
  blurb: string;
  label: "Package" | "Talk to sales";
  href: string;
  image: string;
  includes: { title: string; shopifyUrl: string }[];
};

export const commercialPackages: PackageCard[] = [
  {
    id: "starter-bounce-fleet",
    name: "Starter Bounce Fleet",
    blurb:
      "Two proven bounce units operators book every weekend — a clean entry package before you scale wet inventory.",
    label: "Package",
    href: "/request-a-quote?package=starter-bounce-fleet",
    image: "/media/products/wacky-15-large-bouncer.jpg",
    includes: [
      {
        title: "Wacky Bouncer™ (Large)",
        shopifyUrl:
          "https://cuttingedgecreations.com/products/wacky-15-large-bouncer",
      },
      {
        title: "HOMEPRO Tiger Belly Bouncer® Combo",
        shopifyUrl:
          "https://cuttingedgecreations.com/products/homepro-tiger-belly-bouncera-r-combo",
      },
    ],
  },
  {
    id: "wet-dry-summer",
    name: "Wet/Dry Summer Package",
    blurb:
      "KidZone combo + commercial slide for peak summer bookings. Talk to sales for blower and tether add-ons.",
    label: "Talk to sales",
    href: "/contact?package=wet-dry-summer",
    image: "/media/products/wacky-kidzonea-c-wet-dry-combo.jpg",
    includes: [
      {
        title: "Wacky KidZone™ Wet/Dry Combo",
        shopifyUrl:
          "https://cuttingedgecreations.com/products/wacky-kidzonea-c-wet-dry-combo",
      },
      {
        title: "Wacky (18’) Slide™ Wet/Dry",
        shopifyUrl:
          "https://cuttingedgecreations.com/products/wacky-mini-deluxea-c-18aeur-tm-slide-wet-dry",
      },
    ],
  },
  {
    id: "obstacle-attraction",
    name: "Obstacle Attraction Package",
    blurb:
      "180° obstacle + high-draw combo for festivals and FECs. Curated from live catalog — not a Shopify bundle SKU.",
    label: "Package",
    href: "/request-a-quote?package=obstacle-attraction",
    image: "/media/products/barnyard-breakout-180-obstacle-single.png",
    includes: [
      {
        title: "Barnyard Breakout 180º Obstacle™",
        shopifyUrl:
          "https://cuttingedgecreations.com/products/barnyard-breakout-180-obstacle-single",
      },
      {
        title: "Fire Station Combo™",
        shopifyUrl:
          "https://cuttingedgecreations.com/products/fire-station-combo-wet-dry",
      },
    ],
  },
];
