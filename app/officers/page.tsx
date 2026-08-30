/**
 * Officers — route: /officers
 *
 * Sections to build:
 *   1. Executive board — grid of cards: photo, name, role, major/year,
 *      email or LinkedIn
 *   2. Web dev team — same card layout
 *
 * Headshots go in public/images (compress them first — see the README).
 */
import styles from "./officers.module.css";
import { officersByCommittee, type Officer } from "../../content/officers";

function OfficerCard({ officer }: { officer: Officer }) {
  return (
    <div className={styles.card}>
      <div className={styles.photoPlaceholder} />

      <div className={styles.cardInfo}>
        <span className={styles.role}>{officer.role}</span>

        <p className={styles.name}>{officer.name}</p>
      </div>
    </div>
  );
}

export default function OfficersPage() {
  const groups = officersByCommittee();

  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <h1>Officers</h1>
        <p>Meet the students leading SASE at Virginia Tech this year.</p>
      </section>

      <div className={styles.board}>
        {groups.map(({ committee, members }) => {
          const isWebDev = committee === "Web Dev";

          return (
            <section key={committee} className={styles.committee}>
              <h2>{isWebDev ? "Web Development Team" : committee}</h2>

              {isWebDev ? (
                <div className={styles.webGrid}>
                  {members.map((officer) => (
                    <div key={officer.name} className={styles.webCard}>
                      {officer.name}
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
