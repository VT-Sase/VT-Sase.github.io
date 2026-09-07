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
import Reveal from "@/components/Reveal";
import styles from "./officers.module.css";
import { officersByCommittee, type Officer } from "../../content/officers";

function OfficerCard({ officer }: { officer: Officer }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          {officer.photo ? (
            <img
              src={officer.photo}
              alt={officer.name}
              className={styles.photo}
            />
          ) : (
            <div className={styles.photoPlaceholder} />
          )}

          <div className={styles.cardInfo}>
            <span className={styles.role}>{officer.role}</span>
            <p className={styles.name}>{officer.name}</p>
          </div>
        </div>

        <div className={styles.cardBack}>
          <div className={styles.backSpark}>✦</div>

          <h3>{officer.name}</h3>

          <p className={styles.backRole}>
            {officer.role}
          </p>

          <p className={styles.backText}>
            More info coming soon!
          </p>
        </div>
      <div className={styles.cardInfo}>
        <span className={styles.role}>{officer.role}</span>

        <p className={styles.name}>{officer.name}</p>
      </div>
    </div>
  );
}

function SectionDecor({ committee }: { committee: string }) {
  const icons: Record<string, string[]> = {
    Leads: ["✦", "⚛", "◌"],
    External: ["◎", "✦", "↗"],
    Internal: ["✧", "◉", "⌁"],
    Media: ["✦", "◈", "✧"],
    Logistics: ["⬡", "✦", "◌"],
    "Web Dev": ["</>", "{ }", "✦"],
  };

  const sectionIcons = icons[committee] ?? ["✦", "◌"];

  return (
    <div className={styles.sectionDecor} aria-hidden="true">
      {sectionIcons.map((icon, index) => (
        <span
          key={`${committee}-${index}`}
          className={`${styles.floatingIcon} ${
            index === 0
              ? styles.iconOne
              : index === 1
                ? styles.iconTwo
                : styles.iconThree
          }`}
        >
          {icon}
        </span>
      ))}
    </div>
  );
}

export default function OfficersPage() {
  const groups = officersByCommittee();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroGlow} />

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            Virginia Tech SASE
          </p>

          <h1>Officers</h1>

          <p className={styles.heroSubtitle}>
            Meet the students leading SASE at Virginia Tech this year.
          </p>
        </div>
      </section>

      <main className={styles.board}>
        <div className={styles.backgroundGlowOne} />
        <div className={styles.backgroundGlowTwo} />
        <div className={styles.backgroundGlowThree} />

        <div className={styles.backgroundSymbols} aria-hidden="true">
          <span className={styles.bgSymbolOne}>⚛</span>
          <span className={styles.bgSymbolTwo}>✦</span>
          <span className={styles.bgSymbolThree}>{"</>"}</span>
          <span className={styles.bgSymbolFour}>⬡</span>
          <span className={styles.bgSymbolFive}>◌</span>
        </div>

        <div className={styles.boardContent}>
          {groups.map(({ committee, members }) => {
            const isWebDev = committee === "Web Dev";

            return (
              <section
                key={committee}
                className={styles.committee}
              >
                <SectionDecor committee={committee} />

                <div className={styles.sectionHeading}>
                  <span className={styles.headingLine} />

                  <h2>
                    {isWebDev
                      ? "Web Development Team"
                      : committee}
                  </h2>

                  <span className={styles.headingLine} />
                </div>

                {!isWebDev && (
                  <p className={styles.flipHint}>
                    Hover over a card to learn more
                  </p>
                )}

                {isWebDev ? (
                  <div className={styles.webGrid}>
                    {members.map((officer) => (
                      <div
                        key={officer.name}
                        className={styles.webCard}
                      >
                        <span className={styles.webCode}>
                          {"<>"}
                        </span>

                        <span>{officer.name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className={`${styles.grid} ${
                      committee === "Leads"
                        ? styles.leadsGrid
                        : ""
                    }`}
                  >
                    {members.map((officer) => (
                      <OfficerCard
                        key={officer.name}
                        officer={officer}
                      />
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </main>
      <Reveal className={styles.intro}>
        <h1>Officers</h1>
        <p>Meet the students leading SASE at Virginia Tech this year.</p>
      </Reveal>

      <div className={styles.board}>
        {groups.map(({ committee, members }) => {
          const isWebDev = committee === "Web Dev";

          return (
            <Reveal key={committee} className={styles.committee}>
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
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
