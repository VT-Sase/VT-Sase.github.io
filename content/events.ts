/**
 * Event data for the Events page and the "upcoming events" preview on Home.
 *
 * Dates are ISO strings ("2026-09-14T18:00:00-04:00") so they sort correctly
 * and can be formatted however the design wants.
 */

export type SaseEvent = {
  name: string;
  /** ISO 8601, including the timezone offset. */
  date: string;
  location: string;
  description: string;
  /** Optional RSVP or info link. */
  link?: string;
};

/** TODO: replace this example with the real schedule. */
export const events: SaseEvent[] = [
  {
    name: "Example General Body Meeting",
    date: "2026-09-14T18:00:00-04:00",
    location: "Goodwin Hall 190",
    description:
      "Our first GBM of the semester. Free food, come meet the board.",
  },
];

/** Future events only, soonest first. Pass a limit for the Home preview. */
export function upcomingEvents(limit?: number): SaseEvent[] {
  const now = Date.now();
  const upcoming = events
    .filter((e) => new Date(e.date).getTime() >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return limit ? upcoming.slice(0, limit) : upcoming;
}
