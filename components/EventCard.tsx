"use client";

import Image from "next/image";
import { useState } from "react";
import { CalendarIcon, PinIcon } from "./icons";
import styles from "./EventCard.module.css";
import { formatEventDate, type SaseEvent } from "@/content/events";

/**
 * Roughly what fits in the four clamped lines of a 343px card. Counting
 * characters keeps this decision on the server, where measuring the rendered
 * text would need an effect; the threshold sits high enough that "Show more"
 * never appears on a description that already fits.
 */
const CLAMP_LIMIT = 170;

export default function EventCard({ event }: { event: SaseEvent }) {
  const [expanded, setExpanded] = useState(false);
  const canExpand = event.description.length > CLAMP_LIMIT;
  const descriptionId = `event-description-${event.name}-${event.date}`;

  return (
    <article
      className={
        expanded ? `${styles.card} ${styles.cardExpanded}` : styles.card
      }
    >
      {event.image ? (
        <Image
          className={styles.image}
          src={event.image}
          alt={event.name}
          width={640}
          height={480}
          sizes="(min-width: 768px) 20rem, 45vw"
        />
      ) : (
        <div className={styles.imagePlaceholder} aria-hidden="true" />
      )}

      <div className={styles.body}>
        <h3 className={styles.name}>{event.name}</h3>

        <p className={styles.meta}>
          <span className={styles.metaItem}>
            <CalendarIcon className={styles.metaIcon} />
            {formatEventDate(event)}
          </span>
          <span className={styles.metaItem}>
            <PinIcon className={styles.metaIcon} />
            {event.location}
          </span>
        </p>

        <p className={styles.description} id={descriptionId}>
          {event.description}
        </p>

        {canExpand ? (
          <button
            type="button"
            className={styles.showMore}
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls={descriptionId}
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        ) : null}

        {event.signupUrl ? (
          <a
            className={styles.signup}
            href={event.signupUrl}
            target="_blank"
            rel="noreferrer"
          >
            Sign Up
          </a>
        ) : (
          <span className={styles.signupDisabled} aria-disabled="true">
            Sign Up
          </span>
        )}
      </div>
    </article>
  );
}
