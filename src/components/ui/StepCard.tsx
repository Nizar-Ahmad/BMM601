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
      className="rounded-3xl border p-6"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
      }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-lg font-bold text-white">
        {number}
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-sm leading-7 opacity-80 sm:text-base">{text}</p>
    </div>
  );
}