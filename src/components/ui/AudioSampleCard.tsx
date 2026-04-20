import LabelBadge from "@/components/ui/LabelBadge";

export default function AudioSampleCard({
  label,
  title,
  text,
  src,
}: {
  label: string;
  title: string;
  text: string;
  src: string;
}) {
  return (
    <div
      className="rounded-3xl border p-6"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
      }}
    >
      <LabelBadge text={label} />
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-7 opacity-80 sm:text-base">{text}</p>

      <div className="mt-5 h-20 rounded-2xl bg-gradient-to-r from-cyan-500/15 via-violet-500/15 to-emerald-500/15" />

      <audio controls className="mt-5 w-full">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}