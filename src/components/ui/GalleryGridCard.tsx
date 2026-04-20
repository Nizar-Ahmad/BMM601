import Image from "next/image";
import LabelBadge from "@/components/ui/LabelBadge";

export default function GalleryGridCard({
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
    <div
      className="overflow-hidden rounded-3xl border"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
      }}
    >
      <div className="relative h-52 w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <LabelBadge text={label} />
        <h3 className="mt-4 text-xl font-bold">{title}</h3>
        <p className="mt-3 text-sm leading-7 opacity-80 sm:text-base">{text}</p>
      </div>
    </div>
  );
}