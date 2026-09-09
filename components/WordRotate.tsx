"use client";

import { useEffect, useState } from "react";

import styles from "./WordRotate.module.css";

type WordRotateProps = {
  words: readonly string[];
  /** How long each word holds before it rotates out. */
  duration?: number;
  className?: string;
};

/** Matches the enter/exit animation length in WordRotate.module.css. */
const SWAP_MS = 250;

/**
 * Magic UI's WordRotate, ported to CSS Modules — one word at a time, the old
 * one dropping away as the new one falls in from above.
 *
 * The upstream component leans on framer-motion's AnimatePresence with
 * `mode="wait"`; the same shape here is two CSS animations and a phase flag,
 * so the exit finishes before the next word enters and the project takes on no
 * animation dependency.
 */
export default function WordRotate({
  words,
  duration = 2500,
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (words.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (leaving) {
      const swap = window.setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setLeaving(false);
      }, SWAP_MS);

      return () => window.clearTimeout(swap);
    }

    const hold = window.setTimeout(() => setLeaving(true), duration);
    return () => window.clearTimeout(hold);
  }, [words, duration, index, leaving]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a));

  return (
    <div className={className}>
      {/* All of the words are real copy, so a screen reader gets them together
          rather than one at a time as the line rotates. */}
      <span className="srOnly">{words.join(". ")}.</span>

      <div className={styles.viewport} aria-hidden="true">
        {/* Never seen — it holds the row open at the longest word, so the copy
            below never shifts as the words swap. */}
        <span className={styles.sizer}>{longest}</span>

        <span
          key={`${index}-${leaving}`}
          className={leaving ? styles.wordOut : styles.wordIn}
        >
          {words[index]}
        </span>
      </div>
    </div>
  );
}
