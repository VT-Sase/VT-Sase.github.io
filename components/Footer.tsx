import styles from "./Footer.module.css";

/**
 * Site-wide footer. Appears on every page via app/layout.tsx.
 *
 * TODO: socials (Instagram, LinkedIn, Discord, email) + Linktree link.
 * Solved once here, appears everywhere.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} VT SASE</p>
      <p className={styles.todo}>TODO — socials + Linktree links</p>
    </footer>
  );
}
