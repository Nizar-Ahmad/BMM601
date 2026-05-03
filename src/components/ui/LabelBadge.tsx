export default function LabelBadge({ text }: { text: string }) {
  return (
    <span
      className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
      style={{
        background: "color-mix(in srgb, var(--accent) 14%, transparent)",
        color: "var(--accent)",
      }}
    >
      {text}
    </span>
  );
}
