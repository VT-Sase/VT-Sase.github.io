/**
 * FAQ content. Rendered as a native <details>/<summary> accordion — that gives
 * us keyboard support and screen reader support for free, with no JavaScript.
 */

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Do I have to be Asian to join SASE?",
    answer:
      "No! SASE is open to everyone regardless of background, identity, " +
      "major, or year. Anyone interested in our community and events is " +
      "welcome to join.",
  },
  {
    question: "Do I have to be an engineering major?",
    answer:
      "No! SASE is open to students across different majors and backgrounds, " +
      "especially anyone interested in STEM, professional development, or " +
      "our community.",
  },
  {
    question: "Do I have to pay the membership fee every year?",
    answer:
      "Membership details can change from year to year, so check our current " +
      "membership information or reach out to us if you have questions.",
  },
  {
    question: "How do I join SASE at Virginia Tech?",
    answer:
      "Come to one of our events, join our Discord, or check out our " +
      "Linktree to stay updated and get involved!",
  },
  {
    question: "What kinds of events does SASE host?",
    answer:
      "We host professional development workshops, company info sessions, " +
      "socials, cultural events, community service opportunities, " +
      "conferences, and more throughout the year.",
  },
  {
    question: "Can I join if I have never attended a SASE event before?",
    answer:
      "Of course! You can come to your first event at any point in the year. " +
      "You do not need to know anyone beforehand.",
  },
];
