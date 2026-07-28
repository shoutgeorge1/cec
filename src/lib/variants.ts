/**
 * Light A/B offer variants for category / landing pages.
 *
 * Manual for now: append `?v=a` or `?v=b` (also accepts `?variant=`).
 * Default is `a`. See website/README.md → “Landing page A/B variants”.
 *
 * Homepage stays a single strong PPC converter for now; offer A/B on `/`
 * comes next — do not overbuild a homepage variant system yet.
 */

export type OfferVariantId = "a" | "b";

export type OfferVariant = {
  id: OfferVariantId;
  label: string;
  ctaPrimary: { href: string; label: string };
  ctaSecondary: { href: string; label: string };
  eyebrowSuffix?: string;
  offerLine: string;
  supportLine: string;
};

export const OFFER_VARIANTS: Record<OfferVariantId, OfferVariant> = {
  a: {
    id: "a",
    label: "Request a quote",
    ctaPrimary: { href: "/request-a-quote", label: "Request a quote" },
    ctaSecondary: { href: "/products", label: "Browse products" },
    offerLine: "Get specs and pricing for the units that fit your fleet.",
    supportLine:
      "Share capacity targets, timeline, and budget range — sales routes you to the right commercial options.",
  },
  b: {
    id: "b",
    label: "Talk to sales / packages",
    ctaPrimary: { href: "/contact", label: "Talk to sales" },
    ctaSecondary: { href: "/packages", label: "See starter packages" },
    eyebrowSuffix: " · Fleet packages",
    offerLine:
      "Ask about commercial starter packages — curated multi-unit builds for operators.",
    supportLine:
      "Package cards are curated from real catalog products. Pricing and configuration go through sales.",
  },
};

export function parseOfferVariant(
  value: string | string[] | undefined,
): OfferVariantId {
  const raw = Array.isArray(value) ? value[0] : value;
  const v = (raw || "a").toLowerCase();
  if (v === "b" || v === "2") return "b";
  return "a";
}

export function getOfferVariant(
  value: string | string[] | undefined,
): OfferVariant {
  return OFFER_VARIANTS[parseOfferVariant(value)];
}
