import LabelBadge from "@/components/ui/LabelBadge";

export default function VideoSampleCard({
  label,
  title,
  text,
  src,
}: {
  label: string;
  title: string;
  text: string;
  src: string;
}) {
  return (
    <div className="surface-card surface-card-hover rounded-2xl p-6">
      <LabelBadge text={label} />
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-7 sm:text-base" style={{ color: "var(--muted)" }}>
        {text}
      </p>

      <video
        controls
        controlsList="nodownload"
        preload="metadata"
        className="mt-5 w-full rounded-2xl border"
        style={{ borderColor: "var(--border)" }}
        poster="/images/video-poster.webp"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
