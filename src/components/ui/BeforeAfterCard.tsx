import Image from "next/image";
import LabelBadge from "@/components/ui/LabelBadge";

export default function BeforeAfterCard({
  beforeLabel,
  afterLabel,
  title,
  text,
  beforeSrc,
  afterSrc,
}: {
  beforeLabel: string;
  afterLabel: string;
  title: string;
  text: string;
  beforeSrc: string;
  afterSrc: string;
}) {
  return (
    <div className="surface-card overflow-hidden rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="border-b p-6 md:border-e md:border-b-0"
          style={{ borderColor: "var(--border)" }}
        >
          <LabelBadge text={beforeLabel} />
          <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-2xl">
            {" "}
            <Image
              src={beforeSrc}
              alt={beforeLabel}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="p-6">
          <LabelBadge text={afterLabel} />
          <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-2xl">
            {" "}
            <Image
              src={afterSrc}
              alt={afterLabel}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <div className="border-t p-6" style={{ borderColor: "var(--border)" }}>
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="text-sm leading-7 sm:text-base" style={{ color: "var(--muted)" }}>
          {text}
        </p>
      </div>
    </div>
  );
}
