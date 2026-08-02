import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>VT SASE</h1>
      <p>
        Society of Asian Scientists and Engineers — Virginia Tech chapter. The
        new website is under construction. 🚧
      </p>
      <p className={styles.hint}>
        Edit <code>app/page.tsx</code> to start building this page.
      </p>
    </main>
  );
}
