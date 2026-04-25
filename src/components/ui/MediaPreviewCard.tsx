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
      className="overflow-hidden rounded-3xl border"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
      }}
    >
      {/* MEDIA AREA */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden">
        {type === "image" && src && (
          <img
            src={src}
            alt={title}
            className="h-full w-full object-cover"
          />
        )}

        {type === "video" && src && (
          <video
            src={src}
            className="h-full w-full object-cover"
            controls
          />
        )}

        {type === "audio" && src && (
          <div className="flex h-full w-full items-center justify-center px-4" style={{ background: "linear-gradient(135deg, rgba(34, 211, 238, 0.14), rgba(139, 92, 246, 0.14))" }}>
            <audio controls className="w-full">
              <source src={src} />
            </audio>
          </div>
        )}

        {!src && (
          <div className="h-full w-full bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-emerald-500/20" />
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <span className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-400">
          {label}
        </span>

        <h3 className="mt-4 text-lg font-bold">{title}</h3>

        <p className="mt-2 text-sm leading-7 opacity-80">
          {description}
        </p>
      </div>
    </div>
  );
}