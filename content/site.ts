export type NavLink = {
  href: string;
  label: string;
  sectionId?: string;
};

const HOME_LINK: NavLink = {
  href: "/",
  label: "Home",
};

const ABOUT_LINK: NavLink = {
  href: "/#about",
  label: "About",
  sectionId: "about",
};
const SPONSORS_LINK: NavLink = {
  href: "/#sponsors",
  label: "Sponsors",
  sectionId: "sponsors",
};

const FAQS_LINK: NavLink = {
  href: "/#faqs",
  label: "FAQs",
  sectionId: "faqs",
};

const EVENTS_LINK: NavLink = { href: "/events", label: "Events" };
const OFFICERS_LINK: NavLink = { href: "/officers", label: "Officers" };

export const NAV_LINKS: NavLink[] = [
  HOME_LINK,
  ABOUT_LINK,
  SPONSORS_LINK,
  FAQS_LINK,
  EVENTS_LINK,
  OFFICERS_LINK,
];

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/sasevt/",
  discord: "https://discord.com/invite/r7mqCEyQT4",
  facebook: "https://www.facebook.com/saseatvt",
  instagram: "https://www.instagram.com/saseatvt/",
  linktree: "https://linktr.ee/saseatvt?lt_utm_source=lt_share_link#101665511",
  remind:
    "https://docs.google.com/document/d/1k5AisFW_AxTSkM8GuMJk6hXfWscg0nJ1tfRwWpbW24w/edit?tab=t.0#heading=h.14m38v9fpa6t",
};

export type HeroSlide = {
  src: string;
  alt: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/outdoors.JPG",
    alt: "SASE at Virginia Tech members spending time together outdoors",
  },
  {
    src: "/images/about/about-hero.JPG",
    alt: "SASE at Virginia Tech members gathered at a chapter event",
  },
  {
    src: "/images/about/what-is-sase.JPG",
    alt: "SASE at Virginia Tech members posing together after a meeting",
  },
];

/**
 * The photographs tiled across the top of the home page.
 *
 * The cover's layout places exactly five, so keep this at five — swap the
 * entries as better photos come in rather than adding to the list.
 */
export const COVER_PHOTOS: HeroSlide[] = [
  {
    src: "/images/about/about-hero.JPG",
    alt: "SASE at Virginia Tech members gathered at a chapter event",
  },
  {
    src: "/images/outdoors.JPG",
    alt: "SASE at Virginia Tech members spending time together outdoors",
  },
  {
    src: "/images/intro.JPG",
    alt: "SASE at Virginia Tech members together at an outdoor event",
  },
  {
    src: "/images/about/what-is-sase.JPG",
    alt: "SASE at Virginia Tech members posing together after a meeting",
  },
  {
    src: "/images/mission.JPG",
    alt: "Students working together at a SASE event",
  },
];

/**
 * The band of photographs under the About copy. Three, sharing one top and
 * bottom edge with unequal widths — swap the entries rather than adding, or
 * the row's proportions stop being deliberate.
 */
export const ABOUT_PHOTOS: HeroSlide[] = [
  {
    src: "/images/intro.JPG",
    alt: "SASE at Virginia Tech members together at an outdoor event",
  },
  {
    src: "/images/about/about-hero.JPG",
    alt: "SASE at Virginia Tech members gathered at a chapter event",
  },
  {
    src: "/images/mission.JPG",
    alt: "Students working together at a SASE event",
  },
];

/** Where the "Join Us" button in the navbar points. */
export const JOIN_URL = SOCIALS.linktree;

/**
 * The hero's typed line. Each phrase types itself out, holds, then rewinds
 * before the next one takes its place — so keep them a similar length and
 * short enough to read in a couple of seconds.
 */
export const HERO_PHRASES = [
  "supporting Asian scientists and engineers",
  "building careers that start before graduation",
  "a community that outlasts Blacksburg",
] as const;

/** Quick facts shown under the hero lead. */
export const HOME_STATS = [
  { value: "200+", label: "members" },
  { value: "Weekly", label: "GBMs" },
  { value: "10+", label: "events a semester" },
] as const;

/**
 * The chapter's mission, verbatim from the national organization — shown as
 * the centered statement that opens the Our Mission band.
 */
export const MISSION_STATEMENT =
  "SASE is built around helping our members grow professionally, stay " +
  "connected to their culture, and give back to the communities around them.";

/**
 * The three cards under the mission statement, one per SASE pillar. Three
 * because that is what the design lays out — keep it at three, or the row
 * stops matching.
 */
export const MISSION_CARDS = [
  {
    title: "Professional Development",
    body:
      "Workshops, company events, mentorship, and plenty of chances to build " +
      "the skills that actually matter when it comes time to apply for " +
      "internships and jobs.",
    photo: "/images/pillar-professional.jpg",
    alt: "SASE members listening at a company info session",
  },
  {
    title: "Cultural Awareness",
    body:
      "We celebrate the cultures and experiences that bring our community " +
      "together through events, conversations, food, traditions, and just " +
      "spending time with one another.",
    photo: "/images/pillar-cultural.jpg",
    alt: "Two SASE members cooking together at a chapter food event",
  },
  {
    title: "Community Service",
    body:
      "We make time to give back too, whether that means supporting the " +
      "Blacksburg community, helping younger students, or creating " +
      "opportunities for the people coming after us.",
    photo: "/images/pillar-service.jpg",
    alt: "SASE members talking with students at an outdoor involvement fair",
  },
] as const;

/** What the chapter runs — shown as a pillar list in the About band. */
export const CHAPTER_PILLARS = [
  "Résumé reviews and mock interviews",
  "Info sessions with sponsor companies",
  "SASE Southeast conferences",
  "Study nights and social events",
] as const;

/** Public feed for the chapter's Google Calendar. */
export const GOOGLE_CALENDAR_ICS_URL =
  "https://calendar.google.com/calendar/ical/vtsase%40gmail.com/public/basic.ics";
