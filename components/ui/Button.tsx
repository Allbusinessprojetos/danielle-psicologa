import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = { href: string; children: ReactNode; variant?: "primary" | "outline" | "ghost"; className?: string; external?: boolean };

export function Button({ href, children, variant = "primary", className, external = false }: ButtonProps) {
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={clsx(
      "group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs font-medium uppercase tracking-[0.12em] transition-all duration-300",
      variant === "primary" && "bg-rose-deep text-white shadow-[0_12px_30px_rgba(176,61,99,.16)] hover:-translate-y-0.5 hover:bg-[#9f3659]",
      variant === "outline" && "border border-rose-deep/55 text-rose-deep hover:bg-blush",
      variant === "ghost" && "border border-current/25 bg-transparent text-current hover:border-current/50 hover:bg-white/[0.08]",
      className,
    )}>{children}</a>
  );
}
