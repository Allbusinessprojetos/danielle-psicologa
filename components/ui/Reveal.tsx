"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  /** Anima os filhos diretos em cascata em vez do bloco inteiro. */
  stagger?: boolean;
  delay?: number;
  className?: string;
};

export function Reveal({
  children,
  stagger = false,
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    // Com reduced motion o conteúdo já está visível — não tocamos em nada.
    if (reduced || !ref.current) return;

    const element = ref.current;
    const targets = stagger ? Array.from(element.children) : [element];

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        delay,
        stagger: stagger ? 0.08 : 0,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          once: true,
        },
      });
    }, element);

    return () => ctx.revert();
  }, [reduced, stagger, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
