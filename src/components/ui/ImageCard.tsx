import Image from "next/image";
import LabelBadge from "@/components/ui/LabelBadge";

export default function ImageCard({
  label,
  title,
  text,
  src,
  alt,
}: {
  label: string;
  title: string;
  text: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="surface-card surface-card-hover overflow-hidden rounded-2xl">
      <div className="relative h-56 w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

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
