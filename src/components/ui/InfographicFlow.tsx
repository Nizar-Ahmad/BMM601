export default function InfographicFlow({
  items,
}: {
  items: { number: string; title: string; text: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.number}
          className="surface-card surface-card-hover rounded-2xl p-6"
        >
          <div
            className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl font-bold shadow-sm"
            style={{
              background: "color-mix(in srgb, var(--accent) 13%, transparent)",
              color: "var(--accent)",
            }}
          >
            {item.number}
          </div>
          <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
          <p className="text-sm leading-7 sm:text-base" style={{ color: "var(--muted)" }}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
