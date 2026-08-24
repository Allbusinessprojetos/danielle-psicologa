import clsx from "clsx";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-rose/15 bg-white p-8 shadow-[0_2px_20px_rgba(46,42,43,0.05)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(46,42,43,0.09)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
