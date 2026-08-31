"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { HERO_SLIDES } from "@/content/site";

import styles from "./HeroSlides.module.css";

const SLIDE_MS = 7000;

export default function HeroSlides() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (HERO_SLIDES.length < 2) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, SLIDE_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.frame}>
        {HERO_SLIDES.map((slide, slideIndex) => (
          <div
            key={slide.src}
            className={slideIndex === index ? styles.slideActive : styles.slide}
            aria-hidden={slideIndex !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={slideIndex === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {HERO_SLIDES.length > 1 ? (
        <div className={styles.dots}>
          {HERO_SLIDES.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              className={slideIndex === index ? styles.dotActive : styles.dot}
              onClick={() => setIndex(slideIndex)}
              aria-label={`Show photo ${slideIndex + 1} of ${
                HERO_SLIDES.length
              }`}
              aria-current={slideIndex === index}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
