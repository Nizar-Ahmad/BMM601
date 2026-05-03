import Image from "next/image";

export default function MediaPreviewCard({
  title,
  label,
  description,
  type = "image",
  src,
}: {
  title: string;
  label: string;
  description: string;
  type?: "image" | "audio" | "video";
  src?: string;
}) {
  return (
    <div
      className="surface-card surface-card-hover overflow-hidden rounded-2xl"
    >
      {/* MEDIA AREA */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden">
        {type === "image" && src && (
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}

        {type === "video" && src && (
          <video
            src={src}
            className="h-full w-full object-cover"
            controls
            controlsList="nodownload"
            preload="metadata"
          />
        )}

        {type === "audio" && src && (
          <div className="flex h-full w-full items-center justify-center px-4" style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 18%, transparent), color-mix(in srgb, var(--accent-2) 16%, transparent), color-mix(in srgb, var(--accent-3) 14%, transparent))" }}>
            <audio controls controlsList="nodownload" preload="metadata" className="w-full">
              <source src={src} type="audio/mpeg" />
            </audio>
          </div>
        )}

        {!src && (
          <div className="h-full w-full bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-emerald-500/20" />
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "color-mix(in srgb, var(--accent) 14%, transparent)", color: "var(--accent)" }}>
          {label}
        </span>

        <h3 className="mt-4 text-lg font-bold">{title}</h3>

        <p className="mt-2 text-sm leading-7" style={{ color: "var(--muted)" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
