import Image from "next/image";
import Link from "next/link";

import EventCard from "@/components/EventCard";
import FaqSection from "@/components/FaqSection";
import { events } from "@/content/events";
import { JOIN_URL } from "@/content/site";
import { sponsors } from "@/content/sponsors";

import styles from "./page.module.css";

export default function Home() {
  const now = new Date();

  const upcomingEvents = events
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroPhoto}>
            <Image
              src="/images/outdoors.JPG"
              alt="SASE at Virginia Tech members spending time together outdoors"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.heroImage}
            />
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span>SASE</span>
              <span>at Virginia Tech</span>
            </h1>

            <p className={styles.heroText}>
              Welcome to the Society of Asian Scientists and Engineers at
              Virginia Tech.
            </p>

            <div className={styles.heroButtons}>
              <a
                href={JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.joinButton}
              >
                Join Us
              </a>

              <Link href="/about" className={styles.aboutButton}>
                About
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <div className={styles.infoGrid}>
        <section className={`${styles.infoCard} ${styles.missionCard}`}>
          <h2>Our Mission</h2>

          <p>
            To empower Asian heritage students in STEM through leadership
            development, cultural connection, and career readiness, building
            engineers and scientists who lead with confidence and give back to
            their communities.
          </p>

          <div className={styles.cardPhoto}>
            <Image
              src="/images/mission.JPG"
              alt="Students working together at a SASE event"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.cardImage}
            />
          </div>
        </section>

        <section className={`${styles.infoCard} ${styles.aboutCard}`}>
          <h2>What is SASE?</h2>

          <p>
            SASE at VT is a student organization dedicated to preparing
            scientists and engineers of Asian heritage for success in the global
            business world. We connect students with mentorship, professional
            development, and a close-knit community at Virginia Tech.
          </p>

          <Link href="/about" className={styles.textLink}>
            Learn more about us →
          </Link>

          <div className={styles.cardPhoto}>
            <Image
              src="/images/intro.JPG"
              alt="SASE at Virginia Tech members together at an outdoor event"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.cardImage}
            />
          </div>
        </section>
      </div>

      {/* EVENTS */}
      <section className={styles.eventsSection}>
        <div className={styles.sectionHeading}>
          <h2>Upcoming Events</h2>

          <Link href="/events" className={styles.sectionLink}>
            View all events →
          </Link>
        </div>

        {upcomingEvents.length > 0 ? (
          <div className={styles.eventsGrid}>
            {upcomingEvents.map((event) => (
              <EventCard key={`${event.name}-${event.date}`} event={event} />
            ))}
          </div>
        ) : (
          <p className={styles.emptyState}>
            No upcoming events have been posted yet.
          </p>
        )}
      </section>

      {/* FAQS */}
      <FaqSection />

      {/* SPONSORS */}
      <section id="sponsors" className={styles.sponsorsSection}>
        <div className={styles.sponsorsTitle}>
          <h2>Our Sponsors</h2>
        </div>

        <div className={styles.sponsorsPanel}>
          <p className={styles.sponsorsText}>
            We are grateful for and appreciate our sponsors!
          </p>

          <div className={styles.sponsorGrid}>
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sponsorItem}
                aria-label={`Visit ${sponsor.name}`}
              >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={260}
                  height={120}
                  className={styles.sponsorLogo}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
