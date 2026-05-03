import Container from "@/components/layout/Container";

export default function PageHero({
  title,
  text,
  label = "GenMedia AI",
}: {
  title: string;
  text: string;
  label?: string;
}) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="surface-card rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="w-full space-y-5">
            <span
              className="inline-flex rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]"
              style={{
                borderColor: "var(--border)",
                background: "var(--card)",
                color: "var(--accent)",
              }}
            >
              {label}
            </span>

            <h1 className="w-full text-4xl font-extrabold leading-tight sm:text-5xl">
              {title}
            </h1>

            <p
              className="w-full text-base leading-8 sm:text-lg"
              style={{ color: "var(--muted)" }}
            >
              {text}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}