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
      "No. SASE is open to everyone regardless of background, identity, major, or year! Anyone interested in our community and events is welcome to join.",
  },
  {
    question: "Do I have to be an engineering major?",
    answer:
      "No. While SASE has a strong STEM focus, students from all majors are welcome to participate in our events and become members.",
  },
  {
    question: "Do I have to pay the membership fee every year?",
    answer:
      "Membership dues are typically paid for each academic year. They help support chapter events, professional development opportunities, and other member activities.",
  },
  {
    question: "How do I join SASE at Virginia Tech?",
    answer:
      "Come to one of our general body meetings or events and connect with the chapter and our members! You can also follow our social media pages to stay updated on meetings and membership information.",
  },
  {
    question: "What kinds of events does SASE host?",
    answer:
      "SASE hosts professional development events, company information sessions, social events, community service opportunities, workshops, and regional or national conference activities.",
  },
  {
    question: "Can I join if I have never attended a SASE event before?",
    answer:
      "Absolutely! New members are welcome throughout the year, and you do not need any previous involvement with SASE to attend an event or get involved.",
  },
];