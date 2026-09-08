import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";
import HeroField from "@/components/HeroField";
import Reveal from "@/components/Reveal";
import SisterChapters from "@/components/SisterChapters";
import { initials, leads } from "@/content/officers";
import { formatEventDate, upcomingEvents } from "@/content/events";
import {
  ABOUT_PHOTOS,
  CHAPTER_PILLARS,
  COVER_PHOTOS,
  HERO_PHRASES,
  HOME_STATS,
  JOIN_URL,
  MISSION_CARDS,
  MISSION_STATEMENT,
} from "@/content/site";
import { sponsors } from "@/content/sponsors";

import styles from "./page.module.css";

/** The ticker under the cover: facts first, then what the chapter is for. */
const TICKER = [
  ...HOME_STATS.map((stat) => `${stat.value} ${stat.label}`),
  ...HERO_PHRASES,
];

export default function Home() {
  const nextEvents = upcomingEvents(2);

  return (
    <div className={styles.page}>
      {/* COVER — a full-bleed opening rather than a centred hero block. The
          copy hangs off the bottom-left corner and the type runs to the edge;
          the field behind it is the only thing that is centred. */}
      <section className={styles.cover}>
        <HeroField />

        {/* Photographs first: this is a club, and a club page should open on
            faces. They are tiled across the top only, so the copy below sits
            on the field rather than on top of a photograph. */}
        <div className={styles.mosaic} aria-hidden="true">
          {COVER_PHOTOS.map((photo, index) => (
            <div
              key={photo.src}
              className={`${styles.tile} ${styles[`tile${index + 1}`]}`}
            >
              <Image
                src={photo.src}
                alt=""
                fill
                sizes="(max-width: 780px) 50vw, 30vw"
                priority={index < 2}
                className={styles.tileImage}
              />
            </div>
          ))}
        </div>

        <div className={styles.coverInner}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowRule} aria-hidden="true" />
            Society of Asian Scientists &amp; Engineers
          </p>

          <h1 className={styles.coverTitle}>
            <span className={styles.coverMark}>SASE</span>
            <span className={styles.coverLine}>at Virginia</span>
            <span className={styles.coverLineIndent}>Tech</span>
          </h1>

          <div className={styles.coverFoot}>
            <p className={styles.coverBlurb}>
              Everyone is welcome at our meetings — whether you came for the
              career workshops or just for the people.
            </p>

            <a
              className={styles.coverAction}
              href={JOIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              Join the chapter
              <span aria-hidden="true">&#8594;</span>
            </a>
          </div>
        </div>

        <span className={styles.scrollCue} aria-hidden="true">
          scroll
        </span>
      </section>

      {/* TICKER — the chapter's numbers, running rather than sitting in a row
          of three with dividers. */}
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {[0, 1].map((copy) => (
            <ul key={copy} className={styles.tickerGroup}>
              {TICKER.map((entry) => (
                <li key={entry} className={styles.tickerItem}>
                  {entry}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <p className="srOnly">
        {TICKER.join(". ")}.
      </p>

      {/* ABOUT — a spread, but a disciplined one. Everything in the text
          block hangs off a single left spine and only the size changes down
          the page; the photographs are one deliberate band underneath rather
          than five tiles scattered through the copy. */}
      <section id="about" className={styles.about}>
        <Reveal className={styles.aboutInner} deep>
          <p className={styles.aboutRail} data-reveal-item>
            <span className={styles.aboutRailIndex}>01</span>
            <span className={styles.aboutRailRule} aria-hidden="true" />
            <span className={styles.aboutRailLabel}>About</span>
          </p>

          <div className={styles.aboutMain}>
            <h2 className={styles.aboutTitle} data-reveal-item>
              What is <em className={styles.aboutTitleEm}>SASE</em>
            </h2>

            <p className={styles.aboutLede} data-reveal-item>
              The Society of Asian Scientists and Engineers is a national
              organization for students and professionals of Asian heritage in
              STEM. Our chapter runs the local side of it.
            </p>

            <div className={styles.aboutColumns} data-reveal-item>
              <p>
                General body meetings, résumé and interview workshops, info
                sessions with the companies that sponsor us, and the regional
                conferences that come with being part of SASE Southeast.
              </p>

              <p>
                We want members to leave Virginia Tech with the skills to get
                hired, a network that outlasts graduation, and a reason to come
                back and help the students behind them.
              </p>
            </div>

            <p className={styles.doing} data-reveal-item>
              <span className={styles.doingLabel}>What we run</span>
              {CHAPTER_PILLARS.join(", ").toLowerCase()}.
            </p>
          </div>
        </Reveal>

        {/* One band, one shared top and bottom edge, unequal widths. */}
        <Reveal className={styles.aboutPhotos} stagger>
          {ABOUT_PHOTOS.map((photo) => (
            <figure key={photo.src} className={styles.plate}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 780px) 80vw, 30vw"
                className={styles.plateImage}
              />
            </figure>
          ))}
        </Reveal>
      </section>

      {/* MISSION — the statement stays pinned while the three pillars pass it,
          each one a full statement rather than a card in a row of three. */}
      <section className={styles.mission}>
        <div className={styles.missionInner}>
          <div className={styles.missionStick}>
            <h2 className={styles.missionTitle}>Our Mission</h2>

            <p className={styles.missionStatement}>{MISSION_STATEMENT}</p>
          </div>

          <ol className={styles.pillars}>
            {MISSION_CARDS.map((card, index) => (
              <li key={card.title} className={styles.pillar}>
                <span className={styles.pillarNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className={styles.pillarTitle}>{card.title}</h3>

                <p className={styles.pillarBody}>{card.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* OFFICERS — centred, and named for what it is. */}
      <Reveal className={styles.officers} stagger>
        <header className={styles.officersHead}>
          <h2 className={styles.officersTitle}>Officers</h2>

          <p className={styles.officersLede}>
            The students who run the chapter this year.
          </p>
        </header>

        <ul className={styles.officersList}>
          {leads().map((lead) => (
            <li key={lead.name} className={styles.officer}>
              <span className={styles.officerPhoto}>
                {lead.photo ? (
                  <Image
                    src={lead.photo}
                    alt=""
                    fill
                    sizes="10rem"
                    className={styles.officerPhotoImage}
                  />
                ) : (
                  <span className={styles.officerInitials}>
                    {initials(lead.name)}
                  </span>
                )}
              </span>

              <span className={styles.officerName}>{lead.name}</span>
              <span className={styles.officerRole}>{lead.role}</span>
            </li>
          ))}
        </ul>

        <div className={styles.officersFoot}>
          <Link className={styles.textLink} href="/officers">
            Meet the team
            <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </Reveal>

      {/* EVENTS — one line across the page, not a panel. */}
      <Reveal className={styles.events} stagger>
        <div className={styles.eventsHead}>
          <h2 className={styles.sectionTitle}>
            Keep up with our latest events
          </h2>

          <Link className={styles.textLink} href="/events">
            See what&rsquo;s coming up
            <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>

        {nextEvents.length > 0 ? (
          <ul className={styles.eventsList}>
            {nextEvents.map((event) => (
              <li key={event.name} className={styles.eventsItem}>
                <span className={styles.eventsDate}>
                  {formatEventDate(event)}
                </span>
                <span className={styles.eventsName}>{event.name}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </Reveal>

      {/* SASE SOUTHEAST */}
      <Reveal className={styles.southeastBand} stagger>
        <SisterChapters />
      </Reveal>

      {/* SPONSORS */}
      <Reveal id="sponsors" className={styles.sponsorBand} stagger>
        <header className={styles.bandHeader}>
          <h2 className={styles.bandTitle}>Our sponsors</h2>

          <p className={styles.bandTagline}>
            These companies fund our events and send engineers to meet our
            members.
          </p>
        </header>

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
      </Reveal>

      {/* FAQS */}
      <FaqSection />
    </div>
  );
}
