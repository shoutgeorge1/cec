const signals = [
  {
    title: "Commercial-grade",
    body: "Built for rental fleets, venues, and high-frequency events.",
  },
  {
    title: "For sale — not rental",
    body: "Buy inventory. Specs and packaging through sales when you need them.",
  },
  {
    title: "USA · Sales-assisted",
    body: "Talk to sales or request a quote for multi-unit and custom orders.",
  },
] as const;

export function TrustSignals() {
  return (
    <section className="border-b border-[var(--line)] bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-7 sm:px-6 md:grid-cols-3 md:gap-8 md:py-8">
        {signals.map((item) => (
          <div key={item.title} className="border-l-[3px] border-primary pl-3.5">
            <h3 className="font-nav text-[13px] font-bold uppercase tracking-[0.06em] text-ink">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm leading-snug text-ink-soft">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
