import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";
import SisterChapters from "@/components/SisterChapters";
import { initials, leads } from "@/content/officers";
import { formatEventDate, upcomingEvents } from "@/content/events";
import { JOIN_URL, MISSION_CARDS, MISSION_STATEMENT } from "@/content/site";
import { sponsors } from "@/content/sponsors";
import StatRotator from "@/components/StatRotator";
import styles from "./page.module.css";

export default function Home() {
  const nextEvents = upcomingEvents(2);
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-heading">
        <div className={styles.heroTop}>
          <div className={styles.heroCopy}>
            <h1 id="home-heading">
              <span>SASE</span>
              <br />
              at Virginia Tech
            </h1>
            <p className={styles.heroLede}>
              Building community, creating opportunities, and empowering
              Asian-heritage students in STEM!
            </p>
            <div className={styles.actions}>
              <a
                className={styles.primary}
                href={JOIN_URL}
                target="_blank"
                rel="noreferrer"
              >
                Join the chapter <span aria-hidden="true">↗</span>
              </a>
              <Link className={styles.secondary} href="/events">
                Explore events <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <figure className={styles.heroVisual}>
            <div className={styles.heroPhoto}>
              <Image
                src="/images/group-lawn.jpg"
                alt="SASE at Virginia Tech members together on the lawn"
                fill
                priority
                sizes="(max-width: 900px) 95vw, 560px"
              />
            </div>
          </figure>
        </div>

        <div className={styles.stats}>
          <p>
            What we run,
            <br />
            <strong>every semester.</strong>
          </p>

          {/* Three columns that trade places: each cycles the whole set from
              a different starting point, so all three stay on screen. */}
          <StatRotator />
        </div>
      </section>

      <section
        id="about"
        className={styles.section}
        aria-labelledby="about-heading"
      >
        <header className={styles.sectionHead}>
          <div>
            <h2 id="about-heading">
              What is
              <br />
              <span>SASE</span>?
            </h2>
          </div>
          <p>
            SASE is where we come to meet people, grow professionally, celebrate
            our culture, and make Virginia Tech feel a little smaller. We want
            members to leave with more than just another club on their resume.
            We want them to leave with real friendships, useful experience, and
            a community they can always come back to.
          </p>
        </header>
        <div className={styles.featureGrid}>
          <article className={`${styles.feature} ${styles.mint}`}>
            <div className={styles.featureCopy}>
              <span className={styles.eyebrow}>01 / Professional Growth</span>
              <h3>
                Get ready for
                <br />
                what&rsquo;s next.
              </h3>
              <p>
                From resume reviews and mock interviews to company info
                sessions, we create opportunities for members to learn,
                practice, and feel more confident going into recruiting.
              </p>
              <Link className={styles.textLink} href="/events">
                See what&rsquo;s coming up <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className={styles.featurePhoto}>
              <Image
                src="/images/altec-session.jpg"
                alt="SASE members at a company info session with Altec"
                fill
                sizes="(max-width: 700px) 90vw, 550px"
              />
            </div>
          </article>
          <article className={`${styles.feature} ${styles.lime}`}>
            <div className={styles.featureCopy}>
              <span className={styles.eyebrow}>02 / Community</span>
              <h3>Find your people.</h3>
              <p>
                Some of the best parts of SASE happen outside the workshops and
                meetings. It&rsquo;s the people you meet, the conversations
                after events, and having a group on campus that you actually
                look forward to seeing.
              </p>
              <a
                className={styles.textLink}
                href={JOIN_URL}
                target="_blank"
                rel="noreferrer"
              >
                Join the chapter <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className={styles.featurePhoto}>
              <Image
                src="/images/find-your-people.jpg"
                alt="SASE members hanging out with pizza at an outdoor social"
                fill
                sizes="(max-width: 700px) 90vw, 550px"
              />
            </div>
          </article>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="mission-heading">
        <header className={styles.sectionHead}>
          <div>
            <h2 id="mission-heading">
              Grow together.
              <br />
              Go further!
            </h2>
          </div>
          <p>{MISSION_STATEMENT}</p>
        </header>
        <div className={styles.pillars}>
          {MISSION_CARDS.map((card, i) => (
            <article className={styles.pillar} key={card.title}>
              <div className={styles.pillarCopy}>
                <span className={styles.pillarNumber}>0{i + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
              <div className={styles.pillarPhoto}>
                <Image
                  src={card.photo}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 900px) 90vw, 380px"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.eventSection} aria-labelledby="events-heading">
        <div>
          <h2 id="events-heading">
            Come see what
            <br />
            we&rsquo;re up to!
          </h2>
          <p>
            From general body meetings and career workshops to socials, company
            events, and conferences, there&rsquo;s always something happening
            with SASE.
          </p>
          <Link className={styles.primary} href="/events">
            See what&rsquo;s coming up <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className={styles.eventPanel}>
          <div className={styles.eventPanelHead}>
            <span>Coming up at SASE</span>
          </div>
          {nextEvents.length ? (
            <div className={styles.eventFlyers}>
              {nextEvents.map((event) => (
                <Link
                  href="/events"
                  className={styles.eventFlyerLink}
                  key={event.name}
                  aria-label={`${event.name} — ${formatEventDate(event)}, ${
                    event.location
                  }`}
                >
                  {event.image ? (
                    <Image
                      className={styles.eventFlyer}
                      src={event.image}
                      alt=""
                      width={480}
                      height={600}
                      sizes="(min-width: 900px) 15rem, 45vw"
                    />
                  ) : (
                    <div
                      className={styles.eventFlyerEmpty}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.eventEmpty}>
              <h3>
                Nothing on the calendar
                <br />
                right now.
              </h3>
              <p>
                Check the events page and our chapter channels for the next
                general body meeting, workshop, or social.
              </p>
              <a
                className={styles.textLink}
                href={JOIN_URL}
                target="_blank"
                rel="noreferrer"
              >
                Stay in the loop <span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="officers-heading">
        <header className={styles.sectionHead}>
          <div>
            <h2 id="officers-heading">The team behind SASE!</h2>
          </div>
          <div>
            <p>
              These are some of the students helping make SASE happen this year,
              from planning events to working with companies and building our
              community.
            </p>
            <Link className={styles.textLink} href="/officers">
              Meet the full board <span aria-hidden="true">→</span>
            </Link>
          </div>
        </header>
        <ul className={styles.officers}>
          {leads().map((lead) => (
            <li className={styles.officer} key={lead.name}>
              <div className={styles.officerPhoto}>
                {lead.photo ? (
                  <Image
                    src={lead.photo}
                    alt={lead.name}
                    fill
                    sizes="(max-width: 600px) 80vw, 350px"
                  />
                ) : (
                  <span>{initials(lead.name)}</span>
                )}
              </div>
              <div className={styles.officerInfo}>
                <h3>{lead.name}</h3>
                <p>{lead.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        className={`${styles.section} ${styles.region}`}
        aria-label="SASE Southeast"
      >
        <SisterChapters />
      </section>

      <section
        className={styles.section}
        aria-labelledby="opportunities-heading"
      >
        <header className={styles.sectionHead}>
          <div>
            <h2 id="opportunities-heading">
              Opportunities beyond
              <br />
              our chapter!
            </h2>
          </div>
          <div className={styles.stackedCopy}>
            <p>
              A big part of SASE is helping members connect with people and
              opportunities they might not find on their own. That includes
              students at other universities, SASE alumni, and professionals
              from companies across STEM.
            </p>
            <p>
              Those connections are possible because of the organizations that
              continue to support our chapter.
            </p>
          </div>
        </header>
      </section>

      <section
        id="sponsors"
        className={`${styles.section} ${styles.sponsors}`}
        aria-labelledby="sponsor-heading"
      >
        <h2 id="sponsor-heading">Our sponsors!</h2>
        <p>
          Our sponsors help make our workshops, events, and professional
          opportunities possible. They also give members the chance to connect
          directly with engineers, recruiters, and professionals throughout the
          year.
        </p>
        {/* The strip scrolls: one group plus an aria-hidden duplicate, so the
            loop has no seam. Hover or focus pauses it. */}
        <div className={styles.marqueeWrap}>
          <div className={styles.marquee}>
            <div className={styles.track}>
              {[false, true].map((isDuplicate) => (
                <ul
                  key={isDuplicate ? "duplicate" : "sponsors"}
                  className={styles.trackGroup}
                  aria-hidden={isDuplicate || undefined}
                >
                  {sponsors.map((sponsor) => (
                    <li key={sponsor.name}>
                      <a
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.sponsorItem}
                        aria-label={`Visit ${sponsor.name}`}
                        tabIndex={isDuplicate ? -1 : undefined}
                      >
                        <Image
                          src={sponsor.logo}
                          alt={isDuplicate ? "" : `${sponsor.name} logo`}
                          width={260}
                          height={120}
                          className={styles.sponsorLogo}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FaqSection />
    </div>
  );
}
