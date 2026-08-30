import { faqs } from "@/content/faqs";
import { SOCIALS } from "@/content/site";
import styles from "./FaqSection.module.css";

/**
 * The FAQ accordion, rendered as a section of the home page.
 *
 * Native <details>/<summary> rather than React state — that gives us keyboard
 * and screen reader support for free, with no JavaScript. Questions live in
 * content/faqs.ts.
 *
 * The socials are deliberately not repeated here: the footer sits directly
 * below this section and already lists every channel, so this block only needs
 * the one call to action.
 */
export default function FaqSection() {
  return (
    <section id="faqs" className={styles.section} aria-labelledby="faq-heading">
      <h2 id="faq-heading" className={styles.heading}>
        Frequently Asked Questions
      </h2>

      <div className={styles.list}>
        {faqs.map((faq) => (
          <details key={faq.question} className={styles.item}>
            <summary className={styles.question}>
              <span>{faq.question}</span>

              <span className={styles.icon} aria-hidden="true">
                <span className={styles.arrow} />
              </span>
            </summary>

            <div className={styles.answer}>
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>

      <p className={styles.contact}>
        Still have questions?{" "}
        <a
          href={SOCIALS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          DM us on Instagram
        </a>
      </p>
    </section>
  );
}
