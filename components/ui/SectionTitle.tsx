import clsx from "clsx";
import type { ReactNode } from "react";

export function SectionTitle({
  children,
  id,
  align = "center",
  className,
}: {
  children: ReactNode;
  id?: string;
  /** "left" é usado quando o título divide espaço com outro elemento (ex.: uma foto ao lado). */
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center text-center",
        align === "left" && "lg:items-start lg:text-left",
        className,
      )}
    >
      <h2
        id={id}
        className="font-display text-3xl text-charcoal sm:text-4xl"
      >
        {children}
      </h2>
      {/* ornamento decorativo abaixo do título */}
      <span
        aria-hidden="true"
        className="mt-4 flex items-center gap-2"
      >
        <span className="h-px w-10 bg-rose/40" />
        <span className="h-1.5 w-1.5 rotate-45 bg-rose/60" />
        <span className="h-px w-10 bg-rose/40" />
      </span>
    </div>
  );
}
