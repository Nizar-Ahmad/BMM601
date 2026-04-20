export default function LabelBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-400">
      {text}
    </span>
  );
}