import { CategoryPage } from "@/components/CategoryPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Commercial Water Slides for Sale",
  description:
    "Commercial inflatable water slides for rental businesses and venues. Wet/dry options with sales support on sizing and fleet packages.",
  path: "/commercial-water-slides",
});

export default async function CommercialWaterSlidesPage({
  searchParams,
}: {
  searchParams: Promise<{ v?: string; variant?: string }>;
}) {
  const sp = await searchParams;
  return (
    <CategoryPage
      path="/commercial-water-slides"
      eyebrow="Commercial water slides"
      title="Water slides that carry summer revenue"
      intro="Commercial wet and dry slides are high-intent purchase searches—and high-ticket decisions. Use this page to start sizing conversations, then request a quote for configuration and delivery timing."
      bullets={[
        "Confirm wet vs dry, lane count, and footprint against your typical venues.",
        "Ask about blower requirements, anchoring, and setup labor assumptions.",
        "Wholesale and multi-slide packages are best handled through sales.",
        "Seasonality matters—lock inventory before peak booking windows.",
      ]}
      related={[
        {
          href: "/commercial-bounce-houses",
          label: "Commercial bounce houses",
        },
        {
          href: "/inflatable-obstacle-courses",
          label: "Inflatable obstacle courses",
        },
        { href: "/wholesale", label: "Wholesale programs" },
      ]}
      productName="Commercial Water Slides"
      productDescription="Commercial inflatable water slides for sale to rental operators and venues. Request specs and quote."
      category="Commercial Water Slides"
      heroImage="/media/hero/barnyard-breakout-slide.jpg"
      variant={sp.v ?? sp.variant}
    />
  );
}
