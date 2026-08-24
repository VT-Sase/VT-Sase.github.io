/**
 * Site-wide bits that more than one component needs: the nav links and the
 * chapter's external URLs. Navbar and Footer both read from here, so a link
 * only has to be added in one place.
 */

export type NavLink = {
  href: string;
  label: string;
};

const HOME_LINK: NavLink = { href: "/", label: "Home" };
const ABOUT_LINK: NavLink = { href: "/about", label: "About" };
const FAQS_LINK: NavLink = { href: "/faqs", label: "FAQs" };
const SPONSORS_LINK: NavLink = { href: "/sponsors", label: "Sponsors" };
const EVENTS_LINK: NavLink = { href: "/events", label: "Events" };
const OFFICERS_LINK: NavLink = { href: "/officers", label: "Officers" };

export const NAV_LINKS: NavLink[] = [
  HOME_LINK,
  ABOUT_LINK,
  FAQS_LINK,
  SPONSORS_LINK,
  EVENTS_LINK,
  OFFICERS_LINK,
];

export const FOOTER_LINKS: NavLink[] = [
  ABOUT_LINK,
  EVENTS_LINK,
  OFFICERS_LINK,
  SPONSORS_LINK,
  FAQS_LINK,
];

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/sasevt/",
  discord: "https://discord.com/invite/r7mqCEyQT4",
  facebook: "https://www.facebook.com/saseatvt",
  instagram: "https://www.instagram.com/saseatvt/",
  linktree: "https://linktr.ee/saseatvt?lt_utm_source=lt_share_link#101665511",
  remind: "https://docs.google.com/document/d/1k5AisFW_AxTSkM8GuMJk6hXfWscg0nJ1tfRwWpbW24w/edit?tab=t.0#heading=h.14m38v9fpa6t",
};

/** Where the "Join Us" button in the navbar points. */
export const JOIN_URL = SOCIALS.linktree;

/** Public feed for the chapter's Google Calendar. */
export const GOOGLE_CALENDAR_ICS_URL =
  "https://calendar.google.com/calendar/ical/vtsase%40gmail.com/public/basic.ics";
