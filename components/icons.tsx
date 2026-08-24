/**
 * Inline SVG icons.
 *
 * Kept as hand-rolled components so the site doesn't take on an icon library
 * dependency for ten glyphs. Every icon inherits its color from the text
 * color of whatever wraps it, so style them with `color:` and a token —
 * never a hardcoded fill.
 */

type IconProps = {
  className?: string;
};

const base = {
  "aria-hidden": true as const,
  focusable: "false" as const,
  xmlns: "http://www.w3.org/2000/svg",
};

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} viewBox="0 0 16 16" fill="none">
      <rect
        x="2"
        y="3.5"
        width="12"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M2 6.5h12M5.5 2v3M10.5 2v3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} viewBox="0 0 16 16" fill="none">
      <path
        d="M8 14.5s5-4.34 5-8a5 5 0 0 0-10 0c0 3.66 5 8 5 8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6.5" r="1.75" fill="currentColor" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 5l14 14M19 5L5 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M15 5l-7 7 7 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      {...base}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.83v1.5h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.5 4.78 5.76v5.7h-4v-5.05c0-1.2-.02-2.76-1.75-2.76-1.75 0-2.02 1.32-2.02 2.67v5.14h-4v-11Z" />
    </svg>
  );
}

export function DiscordIcon({ className }: IconProps) {
  return (
    <svg
      {...base}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.3 5.36A16.6 16.6 0 0 0 15.2 4.1a11.7 11.7 0 0 0-.53 1.08 15.4 15.4 0 0 0-4.61 0A11.4 11.4 0 0 0 9.52 4.1 16.6 16.6 0 0 0 5.4 5.37C2.79 9.24 2.08 13.01 2.44 16.73a16.7 16.7 0 0 0 5.07 2.56c.41-.56.77-1.15 1.09-1.78-.6-.22-1.17-.49-1.71-.81.14-.11.29-.22.42-.34a11.9 11.9 0 0 0 10.12 0c.14.12.28.23.42.34-.54.32-1.11.6-1.71.81.31.63.68 1.22 1.09 1.78a16.6 16.6 0 0 0 5.07-2.56c.42-4.31-.71-8.05-2.99-11.37ZM8.98 14.47c-1 0-1.81-.91-1.81-2.03s.79-2.04 1.81-2.04c1.02 0 1.83.92 1.81 2.04 0 1.12-.8 2.03-1.81 2.03Zm6.04 0c-1 0-1.81-.91-1.81-2.03s.79-2.04 1.81-2.04c1.02 0 1.83.92 1.81 2.04 0 1.12-.79 2.03-1.81 2.03Z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      {...base}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M15.4 8.2h2.35V5.1a31 31 0 0 0-2.83-.1c-2.8 0-4.72 1.72-4.72 4.88V12H7.25v3.5H10.2V22h3.6v-6.5h2.94l.45-3.5H13.8V10.2c0-1.35.36-2 1.6-2Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
    </svg>
  );
}
