/**
 * HOW TO ADD AN EVENT
 *
 * 1. Copy the template below into the `events` array.
 * 2. Replace the sample values with the event's information.
 * 3. Save this file. Upcoming cards are sorted by date automatically, and the
 *    event also appears in the website calendar.
 *
 * COPY-AND-PASTE TEMPLATE
 *
 * {
 *   name: "Event name",
 *   date: "2026-09-14T18:00:00-04:00",
 *   endDate: "2026-09-14T20:00:00-04:00",
 *   location: "Squires Student Center",
 *   description: "A short description of the event.",
 *   image: "/images/events/event-name.jpg",
 *   signupUrl: "https://example.com/signup",
 *   postUrl: "https://www.instagram.com/p/XXXXXXXXXXX/",
 *   partners: [{ name: "AASU", url: "https://www.instagram.com/aasuvt/" }],
 * },
 *
 * REQUIRED FIELDS
 *
 * - name: The title displayed on the card and calendar.
 * - date: The starting date and time in ISO 8601 format.
 * - location: The room, building, or meeting location.
 * - description: A short explanation shown on the card.
 *
 * OPTIONAL FIELDS
 *
 * - endDate: Adds the ending time to the card. Remove this line if unknown.
 * - image: Put the image in `public/images/events/`, then use a path beginning
 *   with `/images/events/`. Without it, the card shows a gray placeholder.
 * - signupUrl: Use the complete RSVP URL, including `https://`. Without it,
 *   the Sign Up button is disabled. Do not use `#` for a finished event.
 * - postUrl: Link to the event's Instagram post. Adds a "Details on Instagram"
 *   link next to the Sign Up button, which is the place to send people when
 *   there is no RSVP form yet.
 * - partners: The other organizations running the event, listed on the card as
 *   "With ...". Each one needs a `name`; add a `url` — usually their Instagram
 *   — and the name becomes a link. Leave `url` off and it stays plain text.
 *
 * DATE AND TIME NOTES
 *
 * The chapter uses Eastern Time. Include `-04:00` during Eastern Daylight Time
 * or `-05:00` during Eastern Standard Time. Events in the past are hidden from
 * the Upcoming Events cards. Change `TERM_LABEL` below when the semester does.
 *
 * GOOGLE CALENDAR
 *
 * Adding an event here displays it locally on the cards and calendar, but does
 * not add it to Google Calendar. Add it to Google separately if both sources
 * should contain the event.
 */

export type SaseEvent = {
  name: string;
  date: string;
  endDate?: string;
  location: string;
  description: string;
  image?: string;
  signupUrl?: string;
  postUrl?: string;
  partners?: { name: string; url?: string }[];
};

// Current term
export const TERM_LABEL = "Fall 2026";
// Time zone for all events
const TIME_ZONE = "America/New_York";

// Events are sorted by date automatically. Add new events to the array below.
export const events: SaseEvent[] = [
  {
    name: "Altec Info Session",
    date: "2026-09-08T17:30:00-04:00",
    endDate: "2026-09-08T19:00:00-04:00",
    location: "Surge 108A",
    description:
      "Bring questions, build your career. Talk with representatives from Altec about resumes and applications, career paths and industry advice, and internship and job opportunities. Free pizza provided.",
    image: "/images/events/altec-info-session.jpg",
    postUrl: "https://www.instagram.com/p/Dc9DEVUBP4B/",
  },
  {
    name: '"How I Got My Internship" Panel',
    date: "2026-09-11T18:30:00-04:00",
    endDate: "2026-09-11T20:00:00-04:00",
    location: "Goodwin 145",
    description:
      "A panel with NSBE and ColorStack answering your internship questions, so you stand out at Engineering Expo. Have internship experience? Fill out the panelist interest form on the post.",
    image: "/images/events/internship-panel.jpg",
    postUrl: "https://www.instagram.com/p/Dc6Rr01RsNj/",
    partners: [
      { name: "NSBE", url: "https://www.instagram.com/nsbe_vt/" },
      { name: "ColorStack", url: "https://www.instagram.com/colorstackvt/" },
    ],
  },
  {
    name: "Pickleball Tournament",
    date: "2026-09-13T13:00:00-04:00",
    location: "Washington Street Courts",
    description:
      "A genderblind doubles tournament: pool play then playoffs, in competitive and casual divisions. Check in at 1pm, play starts at 1:30pm. Prizes, merch, water, and snacks. Registration is $5 for Asian-org affiliated students and $10 otherwise, and closes Sept 11 at 11:59pm. Open to all.",
    image: "/images/events/pickleball-tournament.jpg",
    signupUrl: "https://linktr.ee/aasuvt",
    postUrl: "https://www.instagram.com/p/Dc87d9vChbw/",
    partners: [
      { name: "AASU", url: "https://www.instagram.com/aasuvt/" },
      { name: "CAS" },
      { name: "FASA", url: "https://www.instagram.com/vt_fasa/" },
      { name: "KASA" },
      { name: "VSA", url: "https://www.instagram.com/vsahokies/" },
    ],
  },
];

export function upcomingEvents(limit?: number): SaseEvent[] {
  const now = Date.now();
  const upcoming = events
    .filter((e) => new Date(e.date).getTime() >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return limit ? upcoming.slice(0, limit) : upcoming;
}

const dayFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  month: "short",
  day: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  hour: "numeric",
  minute: "2-digit",
});

function tidyTime(value: string): string {
  return value.replace(":00", "").replace(" AM", "am").replace(" PM", "pm");
}

export function formatEventDate(event: SaseEvent): string {
  const start = new Date(event.date);
  const day = dayFormatter.format(start);
  const startTime = tidyTime(timeFormatter.format(start));

  if (!event.endDate) return `${day}, ${startTime}`;

  const endTime = tidyTime(timeFormatter.format(new Date(event.endDate)));
  return `${day}, ${startTime}–${endTime}`;
}
