export default function HighlightBlock({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      className="rounded-3xl border p-6 sm:p-8"
      style={{
        borderColor: "var(--border)",
        background:
          "linear-gradient(135deg, rgba(34,211,238,0.08), rgba(139,92,246,0.08))",
      }}
    >
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <p className="text-base leading-8 opacity-85">{text}</p>
    </div>
  );
}