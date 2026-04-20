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
    <div
      className="rounded-3xl border p-6 shadow-lg transition duration-300 hover:-translate-y-1"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
      }}
    >
      {icon ? <div className="mb-4 text-3xl text-cyan-400">{icon}</div> : null}
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-sm leading-7 opacity-80 sm:text-base">{text}</p>
    </div>
  );
}