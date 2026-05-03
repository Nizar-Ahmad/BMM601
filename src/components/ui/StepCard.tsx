export default function StepCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="surface-card surface-card-hover rounded-2xl p-6"
    >
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold shadow-sm"
        style={{
          background: "color-mix(in srgb, var(--accent-3) 14%, transparent)",
          color: "var(--accent-3)",
        }}
      >
        {number}
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-sm leading-7 sm:text-base" style={{ color: "var(--muted)" }}>{text}</p>
    </div>
  );
}
