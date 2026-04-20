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
          className="rounded-3xl border p-6"
          style={{
            borderColor: "var(--border)",
            background: "var(--card)",
          }}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 font-bold text-white">
            {item.number}
          </div>
          <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
          <p className="text-sm leading-7 opacity-80 sm:text-base">{item.text}</p>
        </div>
      ))}
    </div>
  );
}