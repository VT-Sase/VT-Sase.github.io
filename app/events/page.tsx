import Calendar from "@/components/Calendar";
import EventCard from "@/components/EventCard";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";
import { TERM_LABEL, events, upcomingEvents } from "@/content/events";

export default function EventsPage() {
  const upcoming = upcomingEvents();

  return (
    <div className={styles.page}>
      <Reveal className={styles.section}>
        <header className="headRow">
          <div>
            <span className="pageEyebrow">{TERM_LABEL}</span>
            <h1 className="pageTitle">
              Upcoming
              <br />
              events
            </h1>
          </div>
          <p className="pageLede">
            Everything the chapter has on the calendar right now — general body
            meetings, company info sessions, socials, and collaborations with
            the other orgs on campus.
          </p>
        </header>

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
            No upcoming events right now — check back soon!
          </p>
        )}
      </Reveal>

      <Reveal className={styles.section}>
        <header className="headRow">
          <div>
            <h2 className="sectionTitle">Calendar</h2>
          </div>
          <p className="pageBody">
            Every event, month by month. Dates here stay in step with the cards
            above.
          </p>
        </header>
        <div className={styles.calendarWrap}>
          <Calendar siteEvents={events} />
        </div>
      </Reveal>
    </div>
  );
}
