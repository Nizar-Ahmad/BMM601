export default function SectionTitle({
  title,
  text,
  center = false,
}: {
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-8 sm:text-lg" style={{ color: "var(--muted)" }}>{text}</p>
      ) : null}
    </div>
  );
}
