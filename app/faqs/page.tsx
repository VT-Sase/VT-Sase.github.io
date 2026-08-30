import { faqs } from "@/content/faqs";
import styles from "./page.module.css";

export default function FaqsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.faqSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Frequently Asked
            <br />
            Questions
          </h1>

          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
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

          <div className={styles.divider} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className={styles.contact}>
            <h2>
              Still Have <span>Questions?</span>
            </h2>

            <a
              href="https://www.instagram.com/saseatvt/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.dmLink}
            >
              DM Us!
            </a>

            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/saseatvt/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="SASE at Virginia Tech on Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={styles.socialIcon}
                >
                  <path
                    fill="currentColor"
                    d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM17 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/sase-at-virginia-tech"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="SASE at Virginia Tech on LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={styles.socialIcon}
                >
                  <path
                    fill="currentColor"
                    d="M5.3 3.8A2.3 2.3 0 1 1 5.3 8.4a2.3 2.3 0 0 1 0-4.6ZM3.3 9.8h4v10.9h-4V9.8Zm6.5 0h3.8v1.5h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v5.3h-4v-4.7c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v4.8h-4V9.8Z"
                  />
                </svg>
              </a>

              <a
                href="https://discord.com/invite/r7mqCEyQT4"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="SASE at Virginia Tech Discord"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={styles.socialIcon}
                >
                  <path
                    fill="currentColor"
                    d="M19.5 5.3A16 16 0 0 0 15.6 4l-.5 1a14.5 14.5 0 0 0-6.2 0l-.5-1a16 16 0 0 0-3.9 1.3C2 9 1.4 12.6 1.7 16.2a15.8 15.8 0 0 0 4.8 2.4l1.2-1.6a10 10 0 0 1-1.9-.9l.5-.4c3.7 1.7 7.7 1.7 11.4 0l.5.4a10 10 0 0 1-1.9.9l1.2 1.6a15.8 15.8 0 0 0 4.8-2.4c.4-4.2-.7-7.8-2.8-10.9ZM8.3 14.2c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Zm7.4 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Z"
                  />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/saseatvt"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="SASE at Virginia Tech on Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={styles.socialIcon}
                >
                  <path
                    fill="currentColor"
                    d="M13.8 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.8-.1-1.6-.2-2.4-.2-2.4 0-4 1.5-4 4.1v2.4H8v3.1h2.6v8h3.2Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}