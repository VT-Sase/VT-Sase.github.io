"use client";

import { useState } from "react";
import { faqs } from "@/content/faqs";
import { SOCIALS } from "@/content/site";
import { toggleFaqIndex } from "./faq-state";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import styles from "./FaqSection.module.css";

export default function FaqSection() {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(() => new Set());

  return (
    <Reveal id="faqs" className={styles.section} aria-labelledby="faq-heading">
      <SectionHeading
        title="Frequently Asked Questions"
        id="faq-heading"
      />

      <div className={styles.list}>
        {faqs.map((faq, index) => {
          const isOpen = openFaqs.has(index);
          const questionId = `faq-question-${index}`;
          const answerId = `faq-answer-${index}`;

          return (
            <div
              key={faq.question}
              className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
            >
              <h3 className={styles.questionHeading}>
                <button
                  id={questionId}
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setOpenFaqs((current) => toggleFaqIndex(current, index))
                  }
                >
                  <span>{faq.question}</span>

                  <span className={styles.icon} aria-hidden="true">
                    <span className={styles.arrow} />
                  </span>
                </button>
              </h3>

              <div
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                aria-hidden={!isOpen}
                className={`${styles.answerPanel} ${
                  isOpen ? styles.answerPanelOpen : ""
                }`}
              >
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
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
    </Reveal>
  );
}
