import clsx from "clsx";

export function FloralAccent({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={clsx("pointer-events-none absolute", className)}
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.5">
        <ellipse cx="100" cy="60" rx="18" ry="42" />
        <ellipse cx="100" cy="60" rx="18" ry="42" transform="rotate(60 100 100)" />
        <ellipse cx="100" cy="60" rx="18" ry="42" transform="rotate(120 100 100)" />
        <ellipse cx="100" cy="140" rx="18" ry="42" />
        <ellipse cx="100" cy="60" rx="18" ry="42" transform="rotate(240 100 100)" />
        <ellipse cx="100" cy="60" rx="18" ry="42" transform="rotate(300 100 100)" />
        <circle cx="100" cy="100" r="8" />
      </g>
    </svg>
  );
}
