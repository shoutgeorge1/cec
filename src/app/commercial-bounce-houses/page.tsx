import { CategoryPage } from "@/components/CategoryPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Commercial Bounce Houses for Sale",
  description:
    "Commercial-grade bounce houses for rental fleets and entertainment venues. Request specs, capacity guidance, and sales-assisted pricing.",
  path: "/commercial-bounce-houses",
});

export default async function CommercialBounceHousesPage({
  searchParams,
}: {
  searchParams: Promise<{ v?: string; variant?: string }>;
}) {
  const sp = await searchParams;
  return (
    <CategoryPage
      path="/commercial-bounce-houses"
      eyebrow="Commercial bounce houses"
      title="Fleet-ready bounce houses for operators who book volume"
      intro="Targeted to commercial and for-sale intent—jumpers built for repeated setup, transport, and weekend demand. Ask sales for dimensions, recommended blower packages, and multi-unit options."
      bullets={[
        "Clarify indoor vs outdoor use, age range, and peak capacity before you buy.",
        "Ask for commercial construction details and what is included with each unit.",
        "Multi-unit fleets often close faster with a quote than cart-only checkout.",
        "Pair bounce houses with slides or obstacles when you are building a seasonal package.",
      ]}
      related={[
        {
          href: "/commercial-water-slides",
          label: "Commercial water slides",
        },
        {
          href: "/inflatable-obstacle-courses",
          label: "Inflatable obstacle courses",
        },
        { href: "/products", label: "Full product index" },
      ]}
      productName="Commercial Bounce Houses"
      productDescription="Commercial-grade bounce houses for rental and venue operators. Request specifications and pricing."
      category="Commercial Bounce Houses"
      heroImage="/media/categories/monster-truck.png"
      variant={sp.v ?? sp.variant}
    />
  );
}
