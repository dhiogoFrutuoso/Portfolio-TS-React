// src/hooks/useLenis.ts
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export const lenisInstance = { current: null as Lenis | null };

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis();
    lenisInstance.current = lenis;

    const handleAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!link) return;

      e.preventDefault();

      const href = link.getAttribute("href");
      if (!href) return;

      const target = document.querySelector(href);
      if (!target) return;

      lenis.scrollTo(target as HTMLElement, { duration: 1.5 });
    };

    document.addEventListener("click", handleAnchorClick);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance.current = null;
    };
  }, []);
};