import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

type Props = {
  title: string;
  /** Set when a nav link or aria-labelledby needs to point at the heading. */
  id?: string;
  /** Optional link or button pinned to the right of the title. */
  action?: ReactNode;
};

export default function SectionHeading({title, id, action }: Props) {
  return (
    <header className={styles.heading}>

      <div className={styles.titleRow}>
        <h2 id={id} className={styles.title}>
          {title}
        </h2>

        {action ? <div className={styles.action}>{action}</div> : null}
      </div>

      <span className={styles.rule} aria-hidden="true" />
    </header>
  );
}
