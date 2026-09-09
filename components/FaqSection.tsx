"use client";

import { useState } from "react";
import { faqs } from "@/content/faqs";
import { toggleFaqIndex } from "./faq-state";
import Reveal from "./Reveal";
import styles from "./FaqSection.module.css";

export default function FaqSection() {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(() => new Set([0]));

  return (
    <Reveal
      id="faqs"
      className={styles.section}
      aria-labelledby="faq-heading"
      stagger
    >
      <header className={styles.header}>
        <h2 id="faq-heading" className={styles.title}>
          Frequently asked questions
        </h2>

        <p className={styles.tagline}>
          New to SASE? Here are a few things people usually ask before joining
          us!
        </p>
      </header>

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

                  <span className={styles.icon} aria-hidden="true" />
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
    </Reveal>
  );
}
