import Calendar from "@/components/Calendar";
import EventCard from "@/components/EventCard";
import styles from "./page.module.css";
import { TERM_LABEL, events, upcomingEvents } from "@/content/events";

export default function EventsPage() {
  const upcoming = upcomingEvents();

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h1 className={styles.heading}>
          Upcoming
          <br />
          Events
        </h1>

        <div className={styles.divider} aria-hidden="true">
          <span className={styles.dividerDot} />
          <span className={styles.dividerRule} />
          <span className={styles.dividerLabel}>{TERM_LABEL}</span>
          <span className={styles.dividerRuleShort} />
          <span className={styles.dividerDot} />
        </div>

        {upcoming.length > 0 ? (
          <ul className={styles.grid}>
            {upcoming.map((event) => (
              <li key={`${event.name}-${event.date}`}>
                <EventCard event={event} />
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>
            No upcoming events right now — check back soon.
          </p>
        )}
      </section>

      <section className={styles.section}>
        <h2 className={styles.calendarHeading}>Calendar</h2>
        <p className={styles.calendarSubtitle}>
          View all upcoming events throughout the months
        </p>
        <div className={styles.calendarWrap}>
          <Calendar siteEvents={events} />
        </div>
      </section>
    </div>
  );
}
