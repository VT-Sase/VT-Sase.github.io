"use client";

import { useEffect, useState } from "react";

import {
  backToTopScrollBehavior,
  shouldShowBackToTop,
} from "./back-to-top-behavior";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let animationFrame = 0;

    function updateVisibility() {
      animationFrame = 0;
      const nextVisible = shouldShowBackToTop(
        window.scrollY,
        window.innerHeight
      );

      setVisible((current) =>
        current === nextVisible ? current : nextVisible
      );
    }

    function scheduleUpdate() {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateVisibility);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  function scrollToTop() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: backToTopScrollBehavior(prefersReducedMotion),
    });
  }

  return (
    <button
      type="button"
      className={`${styles.button} ${visible ? styles.buttonVisible : ""}`}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={scrollToTop}
    >
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V5M6.5 10.5 12 5l5.5 5.5" />
      </svg>
    </button>
  );
}
