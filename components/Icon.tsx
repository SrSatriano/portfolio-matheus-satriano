const PATHS: Record<string, string[]> = {
  chart: ["M3 17l5-5 4 4 8-8", "M14 8h6v6", "M3 21h18"],
  chip: ["M9 7h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z", "M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"],
  play: ["M6 5h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z", "M10 9l5 3-5 3z"],
  briefcase: ["M5 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z", "M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2", "M3 13h18"],
  cube: ["M12 2l9 5v10l-9 5-9-5V7z", "M12 12l9-5M12 12v10M12 12L3 7"],
  server: ["M5.5 3h13A1.5 1.5 0 0 1 20 4.5v4A1.5 1.5 0 0 1 18.5 10h-13A1.5 1.5 0 0 1 4 8.5v-4A1.5 1.5 0 0 1 5.5 3z", "M5.5 14h13a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19.5v-4A1.5 1.5 0 0 1 5.5 14z", "M8 6.5h.01M8 17.5h.01M12 6.5h4M12 17.5h4"],
  sprout: ["M12 21v-9", "M12 12c0-4 3-7 8-7 0 4-3 7-8 7z", "M12 14c0-3-2-6-7-6 0 3 2 6 7 6z"],
  film: ["M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", "M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"],
  wave: ["M3 12h1.5M7 8v8M11 4v16M15 9v6M19 11v2"],
  captions: ["M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z", "M7 13h4M13 13h4M7 16h10"],
  spark: ["M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z", "M19 16.5l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6z"],
  phone: ["M9.5 2h5A2.5 2.5 0 0 1 17 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7 19.5v-15A2.5 2.5 0 0 1 9.5 2z", "M11 18h2"],
  scissors: ["M6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM6 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6z", "M8.1 8.1L20 20M8.1 15.9L20 4"],
  search: ["M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14z", "M20 20l-3.5-3.5"],
  github: ["M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"],
  download: ["M12 3v12", "M7 10l5 5 5-5", "M4 21h16"],
  globe: ["M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z", "M3 12h18", "M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"],
  book: ["M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z", "M4 21V5", "M8 7h7"],
  check: ["M5 12l5 5 9-10"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  star: ["M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"],
  close: ["M6 6l12 12M18 6L6 18"],
};

export type IconKey = keyof typeof PATHS;

export function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.8,
}: {
  name: IconKey | string;
  className?: string;
  strokeWidth?: number;
}) {
  const paths = PATHS[name] ?? PATHS.star;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
