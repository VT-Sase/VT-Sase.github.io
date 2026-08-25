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
};

// Current term
export const TERM_LABEL = "Fall 2026";
// Time zone for all events
const TIME_ZONE = "America/New_York";

// Events are sorted by date automatically. Add new events to the array below.
export const events: SaseEvent[] = [
  {
    name: "Event name",
    date: "2026-09-14T18:00:00-04:00",
    endDate: "2026-09-14T20:00:00-04:00",
    location: "Squires Student Center",
    description: "A short description of the event.",
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
