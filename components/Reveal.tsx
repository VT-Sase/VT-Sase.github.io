"use client";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import styles from "./Reveal.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
};

export default function Reveal({ children, className, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add(styles.revealIn);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add(styles.revealIn);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${className ?? ""} ${styles.reveal}`.trim()}
      {...rest}
    >
      {children}
    </section>
  );
}
