import LabelBadge from "@/components/ui/LabelBadge";

export default function ImagePlaceholderCard({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="surface-card surface-card-hover overflow-hidden rounded-2xl">
      <div className="h-56 bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-emerald-500/20" />
      <div className="p-6">
        <LabelBadge text={label} />
        <h3 className="mt-4 text-xl font-bold">{title}</h3>
        <p className="mt-3 text-sm leading-7 sm:text-base" style={{ color: "var(--muted)" }}>
          {text}
        </p>
      </div>
    </div>
  );
}
