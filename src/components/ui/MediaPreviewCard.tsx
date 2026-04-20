export default function MediaPreviewCard({
  title,
  label,
  description,
}: {
  title: string;
  label: string;
  description: string;
}) {
  return (
    <div
      className="overflow-hidden rounded-3xl border"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
      }}
    >
      <div className="h-48 bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-emerald-500/20" />
      <div className="p-5">
        <span className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-400">
          {label}
        </span>
        <h3 className="mt-4 text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-7 opacity-80">{description}</p>
      </div>
    </div>
  );
}