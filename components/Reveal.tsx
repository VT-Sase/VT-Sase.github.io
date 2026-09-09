"use client";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import styles from "./Reveal.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  /**
   * Fade the direct children in one after another rather than the block as a
   * whole. Use it on a section whose children read as a list — a row of cards,
   * a headline above its body copy — where arriving together looks abrupt.
   */
  stagger?: boolean;
  /**
   * Like `stagger`, but for a section whose pieces are nested rather than
   * siblings — a two-column spread, say, where the headings and the photos
   * live in different containers. Mark each piece that should arrive on its
   * own with `data-reveal-item`; they are sequenced in DOM order however deep
   * they sit.
   */
  deep?: boolean;
  "aria-labelledby"?: string;
};

/** Past this the delay stops growing, so a long list never lags behind. */
const MAX_ORDER = 8;

export default function Reveal({
  children,
  className,
  stagger,
  deep,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Numbering the pieces here rather than in CSS is what lets the sequence
    // run across containers: nth-child would restart inside every column.
    if (deep) {
      const items =
        element.querySelectorAll<HTMLElement>("[data-reveal-item]");
      items.forEach((item, index) => {
        item.style.setProperty("--reveal-order", String(Math.min(index, MAX_ORDER)));
      });
    }

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
  }, [deep]);

  return (
    <section
      ref={ref}
      className={`${className ?? ""} ${styles.reveal} ${
        stagger ? styles.stagger : ""
      } ${deep ? styles.deep : ""}`
        .replace(/\s+/g, " ")
        .trim()}
      {...rest}
    >
      {children}
    </section>
  );
}
