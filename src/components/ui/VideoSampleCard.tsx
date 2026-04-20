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
    <div
      className="rounded-3xl border p-6"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
      }}
    >
      <LabelBadge text={label} />
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-7 opacity-80 sm:text-base">{text}</p>

      <video controls className="mt-5 w-full rounded-2xl" poster="/images/video-poster.webp">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}