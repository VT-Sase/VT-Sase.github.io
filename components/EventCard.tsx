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
  // A card whose flyer has not been added to public/images/events/ yet falls
  // back to the placeholder rather than showing a broken image.
  const [imageBroken, setImageBroken] = useState(false);
  const canExpand = event.description.length > CLAMP_LIMIT;
  const descriptionId = `event-description-${event.name}-${event.date}`;

  return (
    <article
      className={
        expanded ? `${styles.card} ${styles.cardExpanded}` : styles.card
      }
    >
      {event.image && !imageBroken ? (
        <Image
          className={styles.image}
          src={event.image}
          alt={event.name}
          width={640}
          height={480}
          sizes="(min-width: 768px) 21.5rem, 45vw"
          onError={() => setImageBroken(true)}
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

        {event.partners?.length ? (
          <p className={styles.partners}>
            <span className={styles.partnersLabel}>With</span>{" "}
            {event.partners.map((partner, index) => (
              <span key={partner.name}>
                {index > 0 ? <span aria-hidden="true"> · </span> : null}
                {partner.url ? (
                  <a
                    className={styles.partnerLink}
                    href={partner.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {partner.name}
                  </a>
                ) : (
                  partner.name
                )}
              </span>
            ))}
          </p>
        ) : null}

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

        <div className={styles.actions}>
          {event.signupUrl ? (
            <a
              className={styles.signup}
              href={event.signupUrl}
              target="_blank"
              rel="noreferrer"
            >
              Sign Up
            </a>
          ) : null}

          {event.postUrl ? (
            <a
              className={styles.postLink}
              href={event.postUrl}
              target="_blank"
              rel="noreferrer"
            >
              Details on Instagram
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
