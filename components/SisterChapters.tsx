"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";

import {
  ALL_CHAPTERS_URL,
  sisterChapters,
  VT_MAP_POINT,
} from "@/content/chapters";

import styles from "./SisterChapters.module.css";

/**
 * The SASE Southeast section. Client-side because the map and the chapter
 * cards share one piece of state: hovering or focusing a card walks the pin
 * over to that school, and letting go brings it home to Blacksburg.
 *
 * A centred title, then the map, then the cards in one still row underneath —
 * the pin's travel stays in the same glance as the card being pointed at.
 */
export default function SisterChapters() {
  const [active, setActive] = useState<number | null>(null);

  const chapter = active === null ? null : sisterChapters[active];
  const point = chapter ? chapter.point : VT_MAP_POINT;

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.title}>SASE Southeast</h2>

        <p className={styles.body}>
          Being part of SASE connects us with chapters all across the Southeast!
          Through conferences, leadership events, and collaborations, our
          members get to meet students from other schools and be part of a
          community that goes way beyond Virginia Tech.
        </p>
      </header>

      {/* Wrapped, because the band sizes its own direct children to the full
          content column — the map has to keep its own width. */}
      <div className={styles.mapRow}>
        {/* The artwork is a flat silhouette, so it is painted as a mask over a
            themed colour rather than dropped in as a picture. The gaps between
            states are gaps in the artwork, so the page's own background shows
            through them as the state lines. */}
        <div
          className={styles.map}
          role="img"
          aria-label="Map of the SASE Southeast region, from Virginia down to the Gulf"
        >
          <span className={styles.land} />

          {/* A pin, not a marker: a stem standing on the school with a red ball
              at the top of it. The wrapper is anchored at its bottom edge, so
              the foot of the stem is what lands on the coordinate. */}
          <span
            className={styles.pin}
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
          >
            <span className={styles.pinBall} />
            <span className={styles.pinStem} />
          </span>
        </div>

        {/* Named for a screen reader, which gets no use out of a moving pin. */}
        <p className="srOnly" aria-live="polite">
          {chapter ? `${chapter.name} on the map` : "Virginia Tech on the map"}
        </p>
      </div>

      <div className={styles.chapters}>
        <h3 className={styles.chaptersTitle}>Our sister chapters</h3>

        <ul className={styles.grid}>
          {sisterChapters.map((chapterItem, index) => (
            <li key={chapterItem.name} className={styles.cell}>
              <a
                href={chapterItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                aria-label={chapterItem.name}
                style={
                  {
                    "--chapter-accent": chapterItem.accent,
                    "--chapter-accent-end": chapterItem.accentEnd,
                  } as CSSProperties
                }
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(index)}
                onBlur={() => setActive(null)}
              >
                {/* The tile is what carries the school's two colours: its
                    border is transparent and the gradient shows through it. */}
                <span className={styles.tile}>
                  <Image
                    src={chapterItem.logo}
                    alt=""
                    width={200}
                    height={130}
                    className={styles.logo}
                  />
                </span>

                <span className={styles.visit} aria-hidden="true">
                  <span className={styles.tracked}>visit site</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Wrapped, because the band lays its direct children out full width —
          the anchor needs to stay the size of its own label. */}
      <div className={styles.allChaptersRow}>
        <a
          href={ALL_CHAPTERS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.allChapters}
        >
          <span className={styles.tracked}>View all chapters</span>
        </a>
      </div>
    </>
  );
}
