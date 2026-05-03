export default function ReferenceList({
  items,
}: {
  items: { title: string; source: string; note: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="surface-card surface-card-hover rounded-2xl p-5"
        >
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="mt-2 text-sm" style={{ color: "var(--accent)" }}>
            {item.source}
          </p>
          <p className="mt-2 text-sm leading-7" style={{ color: "var(--muted)" }}>
            {item.note}
          </p>
        </div>
      ))}
    </div>
  );
}
