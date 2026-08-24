import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={clsx(
        // min-h-[44px] garante o alvo de toque mínimo
        "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-colors duration-200",
        variant === "primary" &&
          "bg-rose-deep text-white hover:bg-[#9a3456]",
        variant === "outline" &&
          "border border-rose-deep text-rose-deep hover:bg-blush",
        className,
      )}
    >
      {children}
    </a>
  );
}
