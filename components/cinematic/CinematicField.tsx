type CinematicFieldProps = {
  variant?: "hero" | "section" | "quiet";
  className?: string;
};

export function CinematicField({
  variant = "section",
  className = "",
}: CinematicFieldProps) {
  const intensity =
    variant === "hero"
      ? "opacity-100"
      : variant === "quiet"
        ? "opacity-45"
        : "opacity-70";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className={`absolute inset-0 cinematic-plate ${intensity}`} />
      <div className="absolute inset-0 dossier-grid" />
      <svg
        className="absolute inset-x-0 bottom-0 h-[52%] w-full text-accent/35"
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 392 C120 335 180 430 290 352 C415 265 515 318 624 235 C740 147 842 242 950 171 C1110 66 1230 105 1440 34"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="10 14"
        />
        <path
          d="M0 455 C150 418 230 463 355 401 C500 329 575 360 720 292 C900 206 1032 240 1168 182 C1278 135 1352 130 1440 112"
          fill="none"
          stroke="rgba(52,211,153,.28)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {Array.from({ length: 12 }).map((_, index) => {
          const x = 80 + index * 116;
          const height = 60 + ((index * 37) % 150);
          const y = 440 - height;
          const up = index % 3 !== 0;
          return (
            <g key={index} opacity="0.42">
              <line x1={x} x2={x} y1={y - 24} y2={y + height + 24} stroke="currentColor" strokeWidth="1" />
              <rect
                x={x - 9}
                y={up ? y : y + height * 0.35}
                width="18"
                height={Math.max(34, height * 0.5)}
                rx="2"
                fill={up ? "rgba(52,211,153,.34)" : "rgba(248,113,113,.34)"}
                stroke="rgba(255,255,255,.18)"
              />
            </g>
          );
        })}
      </svg>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#060a12_0%,rgba(6,10,18,.78)_42%,rgba(6,10,18,.38)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}
