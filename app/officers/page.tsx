/**
 * Officers — route: /officers
 *
 * The officer cards, their flip, and the grids that arrange them are the
 * original design, kept as they were. The hero, the section headings and the
 * supporting copy use the shared page system from globals.css, so this route's
 * type reads the same as the home page.
 *
 * Headshots go in public/images/officers (compress them first — see README).
 */
import Image from "next/image";
import styles from "./officers.module.css";
import { officersByCommittee, type Officer } from "@/content/officers";

/** Web Dev is the only committee whose display name differs from its key. */
function committeeTitle(committee: string): string {
  return committee === "Web Dev" ? "Web Development Team" : committee;
}

function OfficerCard({ officer }: { officer: Officer }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          {officer.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={officer.photo}
              alt={officer.name}
              className={styles.photo}
            />
          ) : (
            <div className={styles.photoPlaceholder}>
              <span className={styles.photoSoon}>Photo coming soon</span>
            </div>
          )}

          <div className={styles.cardInfo}>
            <span className={styles.role}>{officer.role}</span>
            <p className={styles.name}>{officer.name}</p>
          </div>
        </div>

        <div className={styles.cardBack}>
          <div className={styles.backSpark}>✦</div>

          <h3>{officer.name}</h3>

          <p className={styles.backRole}>{officer.role}</p>

          <p className={styles.backText}>More info coming soon!</p>
        </div>
      </div>
    </div>
  );
}

export default function OfficersPage() {
  const groups = officersByCommittee();

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="officers-page-heading">
        <div className={styles.heroCopy}>
          <span className="pageEyebrow">Virginia Tech SASE</span>
          <h1 id="officers-page-heading" className="pageTitle">
            Officers
          </h1>
          <p className="pageLede">
            Meet the students leading SASE at Virginia Tech this year — the
            board, every committee on it, and the people who keep the chapter
            running.
          </p>
        </div>

        <figure className={styles.heroVisual}>
          <div className={styles.heroPhoto}>
            <Image
              src="/images/officers/full_officers.JPG"
              alt="The Virginia Tech SASE officer board together"
              fill
              priority
              sizes="(max-width: 900px) 95vw, 560px"
            />
          </div>
          <figcaption className={styles.photoCaption}>
            <span className={styles.liveDot} /> This year&rsquo;s board
            <span>Blacksburg, VA</span>
          </figcaption>
        </figure>
      </section>

      <div className={styles.board}>
        <p className={styles.flipHint}>Hover over any card to see more.</p>

        {groups.map(({ committee, members }) => {
          const isWebDev = committee === "Web Dev";

          return (
            <section className={styles.committee} key={committee}>
              <h2 className={`sectionTitle ${styles.committeeHeading}`}>
                {committeeTitle(committee)}
              </h2>

              {isWebDev ? (
                <div className={styles.webGrid}>
                  {members.map((officer) => (
                    <div key={officer.name} className={styles.webCard}>
                      <span className={styles.webCode}>{"<>"}</span>

                      <span>{officer.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className={`${styles.grid} ${
                    committee === "Leads" ? styles.leadsGrid : ""
                  }`}
                >
                  {members.map((officer) => (
                    <OfficerCard key={officer.name} officer={officer} />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
