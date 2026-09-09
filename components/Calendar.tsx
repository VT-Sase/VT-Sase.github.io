"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import styles from "./Calendar.module.css";
import type { SaseEvent } from "@/content/events";

type Cursor = { year: number; month: number };

type CalendarEvent = {
  id: string;
  name: string;
  day: string;
};

type CalendarCell = {
  key: string;
  day: number;
  inMonth: boolean;
  label: string;
};

const WEEKDAYS = [
  { full: "Sunday", short: "Sun" },
  { full: "Monday", short: "Mon" },
  { full: "Tuesday", short: "Tue" },
  { full: "Wednesday", short: "Wed" },
  { full: "Thursday", short: "Thu" },
  { full: "Friday", short: "Fri" },
  { full: "Saturday", short: "Sat" },
];

const TIME_ZONE = "America/New_York";

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const fullDateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeZone: "UTC",
});

const easternDateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone: TIME_ZONE,
});

function dateKeyFromParts(parts: Intl.DateTimeFormatPart[]): string {
  const value = Object.fromEntries(
    parts.map((part) => [part.type, part.value])
  );
  return `${value.year}-${value.month}-${value.day}`;
}

function dateKeyInEastern(value: Date): string {
  return dateKeyFromParts(easternDateFormatter.formatToParts(value));
}

function currentMonthInEastern(): Cursor {
  const [year, month] = dateKeyInEastern(new Date()).split("-");
  return { year: Number(year), month: Number(month) - 1 };
}

function buildCells({ year, month }: Cursor): CalendarCell[] {
  const firstWeekday = new Date(Date.UTC(year, month, 1)).getUTCDay();

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(Date.UTC(year, month, index - firstWeekday + 1));
    const key = date.toISOString().slice(0, 10);

    return {
      key,
      day: date.getUTCDate(),
      inMonth: date.getUTCMonth() === month,
      label: fullDateFormatter.format(date),
    };
  });
}

function stepMonth({ year, month }: Cursor, delta: number): Cursor {
  const date = new Date(Date.UTC(year, month + delta, 1));
  return { year: date.getUTCFullYear(), month: date.getUTCMonth() };
}

export default function Calendar({ siteEvents }: { siteEvents: SaseEvent[] }) {
  const [cursor, setCursor] = useState<Cursor>(currentMonthInEastern);
  const [remoteRange, setRemoteRange] = useState<{
    key: string;
    events: CalendarEvent[];
  } | null>(null);

  const cells = useMemo(() => buildCells(cursor), [cursor]);
  const rangeStart = cells[0].key;
  const rangeEnd = cells[cells.length - 1].key;
  const rangeKey = `${rangeStart}:${rangeEnd}`;

  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/calendar?from=${rangeStart}&to=${rangeEnd}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Calendar feed unavailable");
        return response.json() as Promise<{ events: CalendarEvent[] }>;
      })
      .then((data) => setRemoteRange({ key: rangeKey, events: data.events }))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError")
          return;
      });

    return () => controller.abort();
  }, [rangeEnd, rangeKey, rangeStart]);

  const siteCalendarEvents = useMemo(
    () =>
      siteEvents.map((event) => ({
        id: `${event.name}-${event.date}`,
        name: event.name,
        day: dateKeyInEastern(new Date(event.date)),
      })),
    [siteEvents]
  );

  const visibleEvents = useMemo(() => {
    const merged = new Map<string, CalendarEvent>();
    const remoteEvents =
      remoteRange?.key === rangeKey ? remoteRange.events : [];

    for (const event of [...remoteEvents, ...siteCalendarEvents]) {
      merged.set(`${event.day}-${event.name.toLowerCase()}`, event);
    }

    return [...merged.values()];
  }, [rangeKey, remoteRange, siteCalendarEvents]);

  const eventsByDay = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();

    for (const event of visibleEvents) {
      const bucket = map.get(event.day);
      if (bucket) bucket.push(event);
      else map.set(event.day, [event]);
    }

    return map;
  }, [visibleEvents]);

  const monthLabel = monthFormatter.format(
    new Date(Date.UTC(cursor.year, cursor.month, 1))
  );
  const todayKey = dateKeyInEastern(new Date());

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div className={styles.monthControls}>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => setCursor((value) => stepMonth(value, -1))}
            aria-label="Previous month"
          >
            <ChevronLeftIcon className={styles.navIcon} />
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => setCursor((value) => stepMonth(value, 1))}
            aria-label="Next month"
          >
            <ChevronRightIcon className={styles.navIcon} />
          </button>
          <h3 className={styles.month} aria-live="polite">
            {monthLabel}
          </h3>
        </div>
      </div>

      <div className={styles.grid} role="grid" aria-label={monthLabel}>
        {WEEKDAYS.map((weekday) => (
          <div
            key={weekday.full}
            className={styles.weekday}
            role="columnheader"
            aria-label={weekday.full}
          >
            {weekday.short}
          </div>
        ))}

        {cells.map((cell) => {
          const dayEvents = eventsByDay.get(cell.key) ?? [];
          const cellClass = [
            styles.cell,
            cell.inMonth ? "" : styles.cellOutside,
            cell.key === todayKey ? styles.cellToday : "",
          ]
            .filter(Boolean)
            .join(" ");
          const ariaLabel = dayEvents.length
            ? `${cell.label}: ${dayEvents.map((event) => event.name).join(", ")}`
            : cell.label;

          return (
            <div
              key={cell.key}
              className={cellClass}
              role="gridcell"
              aria-label={ariaLabel}
            >
              <span className={styles.dayNumber}>{cell.day}</span>
              <div className={styles.events}>
                {dayEvents.slice(0, 2).map((event) => (
                  <span
                    key={event.id}
                    className={styles.eventLabel}
                    title={event.name}
                  >
                    {event.name}
                  </span>
                ))}
                {dayEvents.length > 2 ? (
                  <span className={styles.moreEvents}>
                    +{dayEvents.length - 2} more
                  </span>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
