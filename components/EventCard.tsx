import Image from "next/image";
import { CalendarIcon, PinIcon } from "./icons";
import styles from "./EventCard.module.css";
import { formatEventDate, type SaseEvent } from "@/content/events";

export default function EventCard({ event }: { event: SaseEvent }) {
  return (
    <article className={styles.card}>
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

        <p className={styles.description}>{event.description}</p>

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
