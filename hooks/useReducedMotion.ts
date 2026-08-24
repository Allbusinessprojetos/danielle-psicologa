"use client";

import { useEffect, useState } from "react";

/**
 * Retorna true quando o usuário pediu menos movimento no sistema.
 * Começa em true para que, no primeiro frame, nada anime — assim
 * quem pediu menos movimento nunca vê um flash de animação.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Reading matchMedia on mount is the correct way to sync from this
    // SSR-unavailable browser API—not a cascading-render pattern.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(query.matches);

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
