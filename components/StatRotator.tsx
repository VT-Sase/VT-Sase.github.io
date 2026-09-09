"use client";

import { useEffect, useState } from "react";
import { HOME_STATS } from "@/content/site";
import styles from "./StatRotator.module.css";

/** How long a stat holds in a column before the row advances. */
const HOLD_MS = 2600;

/**
 * The hero's chapter numbers, rotating between one another: column c shows
 * stat (step + c), so every column holds a different stat and the three trade
 * places on each tick.
 *
 * One shared timer drives all three deliberately. Staggering them is what put
 * two columns on the same number — while one column had advanced and the next
 * had not, the pair collided. Swapping together keeps the row a permutation at
 * every moment, so three different stats are always on screen.
 */
export default function StatRotator() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tick = window.setInterval(
      () => setStep((current) => (current + 1) % HOME_STATS.length),
      HOLD_MS,
    );

    return () => window.clearInterval(tick);
  }, []);

  return (
    <>
      {HOME_STATS.map((_, column) => {
        const stat = HOME_STATS[(step + column) % HOME_STATS.length];

        return (
          <div key={column} className={styles.cell}>
            {/* Keyed on the stat so React remounts it and the enter
                animation replays on every swap. */}
            <span key={stat.label} className={styles.stat}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </span>
          </div>
        );
      })}
    </>
  );
}
