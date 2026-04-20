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
          className="rounded-2xl border p-5"
          style={{
            borderColor: "var(--border)",
            background: "var(--card)",
          }}
        >
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="mt-2 text-sm opacity-80">{item.source}</p>
          <p className="mt-2 text-sm leading-7 opacity-80">{item.note}</p>
        </div>
      ))}
    </div>
  );
}