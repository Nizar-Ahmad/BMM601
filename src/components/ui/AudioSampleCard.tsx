import LabelBadge from "@/components/ui/LabelBadge";

export default function AudioSampleCard({
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
      className="surface-card surface-card-hover rounded-2xl p-6"
    >
      <LabelBadge text={label} />
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-7 sm:text-base" style={{ color: "var(--muted)" }}>
        {text}
      </p>

      <div className="audio-player-panel mt-5 rounded-2xl p-4 sm:p-5">
        <div className="mb-4 flex h-10 items-end gap-1.5 opacity-70" aria-hidden="true">
          {[24, 34, 18, 40, 28, 46, 22, 36, 30, 44, 20, 32].map((height, index) => (
            <span
              key={index}
              className="w-full rounded-full"
              style={{
                height,
                background:
                  "linear-gradient(180deg, var(--accent), var(--accent-3))",
              }}
            />
          ))}
        </div>

        <audio
          controls
          controlsList="nodownload"
          preload="metadata"
          className="w-full"
        >
          <source src={src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}
