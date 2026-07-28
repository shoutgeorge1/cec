import { CategoryPage } from "@/components/CategoryPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Inflatable Obstacle Courses for Sale",
  description:
    "Commercial inflatable obstacle courses for festivals, FECs, and rental fleets. Get help matching length, difficulty, and booking use cases.",
  path: "/inflatable-obstacle-courses",
});

export default async function ObstacleCoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ v?: string; variant?: string }>;
}) {
  const sp = await searchParams;
  return (
    <CategoryPage
      path="/inflatable-obstacle-courses"
      eyebrow="Inflatable obstacle courses"
      title="Obstacle courses for events that need more than a jumper"
      intro="Obstacle and interactive units win corporate, festival, and competitive bookings. Start with length and throughput goals, then request a quote for commercial options."
      bullets={[
        "Match course length and difficulty to your primary customer segments.",
        "Ask about transport weight, setup crew size, and storage footprint.",
        "For-sale intent matters here—avoid positioning as a local rental marketplace.",
        "Bundle with bounce houses or slides when building a diversified fleet.",
      ]}
      related={[
        {
          href: "/commercial-bounce-houses",
          label: "Commercial bounce houses",
        },
        {
          href: "/commercial-water-slides",
          label: "Commercial water slides",
        },
        { href: "/request-a-quote", label: "Request a quote" },
      ]}
      productName="Inflatable Obstacle Courses"
      productDescription="Commercial inflatable obstacle courses for rental and event professionals. Request specifications."
      category="Inflatable Obstacle Courses"
      heroImage="/media/products/wacky-dual-180ao-obstaclea-c.jpg"
      variant={sp.v ?? sp.variant}
    />
  );
}
