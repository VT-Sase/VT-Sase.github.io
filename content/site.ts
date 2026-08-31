export type NavLink = {
  href: string;
  label: string;
  sectionId?: string;
};

const HOME_LINK: NavLink = { 
  href: "/", 
  label: "Home" 
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

/** Where the "Join Us" button in the navbar points. */
export const JOIN_URL = SOCIALS.linktree;

/** Public feed for the chapter's Google Calendar. */
export const GOOGLE_CALENDAR_ICS_URL =
  "https://calendar.google.com/calendar/ical/vtsase%40gmail.com/public/basic.ics";
