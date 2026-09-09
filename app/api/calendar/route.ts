import ical, { type ParameterValue, type VEvent } from "node-ical";
import { GOOGLE_CALENDAR_ICS_URL } from "@/content/site";

export const runtime = "nodejs";

const DAY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const MAX_RANGE_DAYS = 62;
const TIME_ZONE = "America/New_York";

const easternDateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone: TIME_ZONE,
});

function parseDay(value: string | null): Date | null {
  if (!value || !DAY_PATTERN.test(value)) return null;

  const date = new Date(`${value}T00:00:00.000Z`);
  return Number.isNaN(date.getTime()) ||
    date.toISOString().slice(0, 10) !== value
    ? null
    : date;
}

function dateKeyFromParts(parts: Intl.DateTimeFormatPart[]): string {
  const value = Object.fromEntries(
    parts.map((part) => [part.type, part.value])
  );
  return `${value.year}-${value.month}-${value.day}`;
}

function calendarDay(date: Date, allDay: boolean): string {
  return allDay
    ? date.toISOString().slice(0, 10)
    : dateKeyFromParts(easternDateFormatter.formatToParts(date));
}

function textValue(value: ParameterValue | undefined): string {
  if (!value) return "SASE event";
  return typeof value === "string" ? value : value.val;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const requestedFrom = parseDay(url.searchParams.get("from"));
  const requestedTo = parseDay(url.searchParams.get("to"));

  if (!requestedFrom || !requestedTo) {
    return Response.json({ error: "Invalid calendar range" }, { status: 400 });
  }

  const rangeDays =
    (requestedTo.getTime() - requestedFrom.getTime()) / 86_400_000;
  if (rangeDays < 0 || rangeDays > MAX_RANGE_DAYS) {
    return Response.json(
      { error: "Calendar range is too large" },
      { status: 400 }
    );
  }

  const requestedFromKey = requestedFrom.toISOString().slice(0, 10);
  const requestedToKey = requestedTo.toISOString().slice(0, 10);
  const expansionFrom = new Date(requestedFrom);
  const expansionTo = new Date(requestedTo);
  expansionFrom.setUTCDate(expansionFrom.getUTCDate() - 1);
  expansionTo.setUTCDate(expansionTo.getUTCDate() + 2);

  try {
    const response = await fetch(GOOGLE_CALENDAR_ICS_URL, {
      headers: { Accept: "text/calendar" },
      next: { revalidate: 900 },
    });

    if (!response.ok) throw new Error("Google Calendar feed request failed");

    const parsed = await ical.async.parseICS(await response.text());
    const results: Array<{
      id: string;
      name: string;
      day: string;
    }> = [];
    const seen = new Set<string>();

    function addEvent(
      event: VEvent,
      start: Date,
      summary: ParameterValue | undefined,
      allDay: boolean
    ) {
      if (event.status === "CANCELLED") return;

      const day = calendarDay(start, allDay);
      if (day < requestedFromKey || day > requestedToKey) return;

      const id = `${event.uid}-${start.toISOString()}`;
      if (seen.has(id)) return;

      seen.add(id);
      results.push({ id, name: textValue(summary), day });
    }

    for (const component of Object.values(parsed)) {
      if (!component || component.type !== "VEVENT") continue;

      const event = component as VEvent;
      if (event.recurrenceid) continue;

      if (event.rrule) {
        for (const instance of ical.expandRecurringEvent(event, {
          from: expansionFrom,
          to: expansionTo,
        })) {
          addEvent(
            instance.event,
            instance.start,
            instance.summary,
            instance.isFullDay
          );
        }
      } else {
        addEvent(
          event,
          event.start,
          event.summary,
          event.datetype === "date" || event.start.dateOnly === true
        );
      }
    }

    results.sort((left, right) =>
      left.day === right.day
        ? left.name.localeCompare(right.name)
        : left.day.localeCompare(right.day)
    );

    return Response.json(
      { events: results },
      { headers: { "Cache-Control": "public, max-age=300, s-maxage=900" } }
    );
  } catch {
    return Response.json(
      { error: "Calendar feed unavailable" },
      { status: 502 }
    );
  }
}
