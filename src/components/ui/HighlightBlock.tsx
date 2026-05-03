export default function HighlightBlock({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="surface-card rounded-2xl p-6 sm:p-8">
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <p className="text-base leading-8" style={{ color: "var(--muted)" }}>{text}</p>
    </div>
  );
}
