const signals = [
  {
    title: "Built for commercial use",
    body: "Units sized and specified for rental fleets, venues, and high-frequency events—not backyard toy inflatables.",
  },
  {
    title: "Sales-assisted buying",
    body: "Get help matching capacity, layout, and budget. Request specs before you commit capital.",
  },
  {
    title: "Catalog + quote path",
    body: "Browse product families online, then submit a structured quote for multi-unit or custom orders.",
  },
] as const;

export function TrustSignals() {
  return (
    <section className="border-b border-[var(--line)] bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        {signals.map((item) => (
          <div key={item.title} className="border-l-2 border-primary pl-4">
            <h3 className="text-lg font-bold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
