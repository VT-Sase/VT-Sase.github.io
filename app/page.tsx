import Image from "next/image";
import FaqSection from "@/components/FaqSection";
import HeroSlides from "@/components/HeroSlides";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { sisterChapters } from "@/content/chapters";
import { sponsors } from "@/content/sponsors";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <HeroSlides />

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span>SASE</span>
              <span>at Virginia Tech</span>
            </h1>

          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <div id="about" className={styles.infoGrid}>
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

      {/* ABOUT — the regional network and the chapters in it */}
      <Reveal className={styles.aboutSection}>
        <SectionHeading title="SASE Southeast" />

        <div className={styles.southeastGrid}>
          <div className={styles.southeastCopy}>
            <p>
              Virginia Tech SASE is proud to be part of the{" "}
              <strong>SASE Southeast Region</strong>, a network of collegiate
              chapters across the southeastern United States. Through regional
              conferences, leadership summits, and collaborative events, members
              have opportunities to connect with students from other
              universities, develop professionally, and build lasting
              friendships beyond campus.
            </p>
          </div>

          <div className={styles.mapImage}>
            <Image
              src="/images/about/southeast-map.png"
              alt="Map of the SASE Southeast Region"
              fill
              sizes="(max-width: 700px) 80vw, 30vw"
              className={styles.mapImagePhoto}
            />
          </div>
        </div>

        <div className={styles.chaptersSection}>
          <h3>Meet Our Sister Chapters</h3>

          <div className={styles.chapterGrid}>
            {sisterChapters.map((chapter) => (
              <a
                key={chapter.name}
                href={chapter.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.chapterCard}
                aria-label={`Visit ${chapter.name} SASE`}
              >
                <div className={styles.chapterLogo}>
                  <Image
                    src={chapter.logo}
                    alt={`${chapter.name} logo`}
                    width={160}
                    height={100}
                    className={styles.chapterLogoImage}
                  />
                </div>

                <span className={styles.visitButton}>visit site</span>
              </a>
            ))}
          </div>

          <a
            href="https://www.saseconnect.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.allChaptersButton}
          >
            View all chapters
          </a>
        </div>
      </Reveal>

      {/* SPONSORS */}
      <Reveal id="sponsors" className={styles.sponsorsSection}>
        <SectionHeading title="Our Sponsors" />

        {/* The logo list is rendered twice so the track can loop seamlessly:
            the animation slides it exactly half its width, at which point the
            second copy sits where the first began. Only the first copy is read
            aloud. */}
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
      </Reveal>

      {/* FAQS */}
      <FaqSection />
    </div>
  );
}
