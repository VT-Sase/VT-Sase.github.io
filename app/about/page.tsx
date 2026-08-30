import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const sisterChapters = [
  {
    name: "University of Virginia",
    logo: "/images/about/chapters/uva.png",
    url: "https://www.saseconnect.org/",
  },
  {
    name: "UNC Charlotte",
    logo: "/images/about/chapters/unc-charlotte.png",
    url: "https://www.saseconnect.org/",
  },
  {
    name: "NC State",
    logo: "/images/about/chapters/nc-state.png",
    url: "https://www.saseconnect.org/",
  },
  {
    name: "George Mason University",
    logo: "/images/about/chapters/gmu.png",
    url: "https://www.saseconnect.org/",
  },
  {
    name: "University of Tennessee",
    logo: "/images/about/chapters/tennessee.png",
    url: "https://www.saseconnect.org/",
  },
  {
    name: "Georgia Tech",
    logo: "/images/about/chapters/georgia-tech.png",
    url: "https://www.saseconnect.org/",
  },
  {
    name: "University of Florida",
    logo: "/images/about/chapters/florida.png",
    url: "https://www.saseconnect.org/",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>About SASE</h1>
          <p>
            Empowering Asian heritage students in STEM to connect, grow, and
            succeed.
          </p>
        </div>
      </section>

      {/* WHAT IS SASE */}
      <section className={styles.aboutSection}>
        <div className={styles.content}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCopy}>
              <h2>What is SASE?</h2>

              <p>
                <strong>Founded in 2007,</strong> the Society of Asian Scientists
                and Engineers (SASE) is an inclusive and diverse community
                dedicated to helping Asian heritage students and professionals
                in STEM reach their goals. SASE provides a space where members
                can connect with others, gain new experiences, and build the
                skills and confidence needed for their future careers.
              </p>

              <p>
                The <strong>Virginia Tech</strong> SASE chapter, established in
                2010, continues this mission by bringing together over 200
                members. Through chapter events and initiatives, SASE creates a
                welcoming environment where students can connect, grow, and make
                an impact within the STEM community.
              </p>
            </div>

            <div className={styles.whatImage}>
              <Image
                src="/images/about/what-is-sase.JPG"
                alt="SASE at Virginia Tech members at a chapter event"
                fill
                sizes="(max-width: 700px) 100vw, 45vw"
                className={styles.whatImagePhoto}
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className={styles.missionSection}>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>

          <p className={styles.missionIntro}>
            Our mission is to prepare Asian heritage scientists and engineers
            for success, celebrate diversity, and encourage members to make a
            positive impact in their communities.
          </p>

          <div className={styles.missionGrid}>
            <article
              className={`${styles.missionCard} ${styles.diversityCard}`}
            >
              <h3>
                CELEBRATING
                <br />
                DIVERSITY
              </h3>

              <p>
                Creating an inclusive community that values different
                backgrounds and perspectives.
              </p>
            </article>

            <article
              className={`${styles.missionCard} ${styles.leadersCard}`}
            >
              <h3>
                PREPARING FUTURE
                <br />
                LEADERS
              </h3>

              <p>
                Supporting members as they develop the skills needed to succeed
                in the global workforce.
              </p>
            </article>

            <article
              className={`${styles.missionCard} ${styles.connectionsCard}`}
            >
              <h3>
                BUILDING
                <br />
                CONNECTIONS
              </h3>

              <p>
                Helping students form meaningful relationships with peers and
                professionals.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SASE SOUTHEAST */}
      <section className={styles.southeastSection}>
        <div className={styles.content}>
          <div className={styles.southeastGrid}>
            <div className={styles.southeastCopy}>
              <h2>SASE Southeast</h2>

              <p>
                Virginia Tech SASE is proud to be part of the{" "}
                <strong>SASE Southeast Region</strong>, a network of collegiate
                chapters across the southeastern United States. Through
                regional conferences, leadership summits, and collaborative
                events, members have opportunities to connect with students
                from other universities, develop professionally, and build
                lasting friendships beyond campus.
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

          {/* SISTER CHAPTERS */}
          <div className={styles.chaptersSection}>
            <h3>Meet Our Sister Chapters:</h3>

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

            <Link
              href="https://www.saseconnect.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.allChaptersButton}
            >
              View all chapters
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}