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
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {text ? (
        <p className="mt-4 text-base leading-8 opacity-80 sm:text-lg">{text}</p>
      ) : null}
    </div>
  );
}