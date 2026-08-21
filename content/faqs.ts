/**
 * FAQ content. Rendered as a native <details>/<summary> accordion — that gives
 * us keyboard support and screen reader support for free, with no JavaScript.
 */

export type Faq = {
  question: string;
  answer: string;
};

/** TODO: replace these examples with the real questions. */
export const faqs: Faq[] = [
  {
    question: "Do I have to be Asian to join SASE?",
    answer:
      "No. SASE is open to everyone regardless of background, major, or year.",
  },
  {
    question: "Do I have to be an engineering major?",
    answer: "No. All majors are welcome.",
  },
];
