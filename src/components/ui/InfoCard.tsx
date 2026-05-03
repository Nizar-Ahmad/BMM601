import { ReactNode } from "react";

export default function InfoCard({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon?: ReactNode;
}) {
  return (
    <div className="surface-card surface-card-hover group h-full rounded-2xl p-6">
      {icon ? (
        <div
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-xl shadow-sm transition group-hover:scale-105"
          style={{
            background: "color-mix(in srgb, var(--accent) 13%, transparent)",
            color: "var(--accent)",
          }}
        >
          {icon}
        </div>
      ) : null}
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-sm leading-7 sm:text-base" style={{ color: "var(--muted)" }}>
        {text}
      </p>
    </div>
  );
}
