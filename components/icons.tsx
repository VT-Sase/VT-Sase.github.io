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

export function SunIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="4.25"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 2.5v2.25M12 19.25v2.25M4.22 4.22l1.6 1.6M18.18 18.18l1.6 1.6M2.5 12h2.25M19.25 12h2.25M4.22 19.78l1.6-1.6M18.18 5.82l1.6-1.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M20.5 14.4A8.6 8.6 0 0 1 9.6 3.5a8.6 8.6 0 1 0 10.9 10.9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
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

/* Seven-spoke asterisk with a detached stem — proportions measured off
   Linktree's own mark: bars ~1/3 the arm length, diagonals at 45deg. */
export function LinktreeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} viewBox="0 0 24 24" fill="none">
      <g stroke="currentColor" strokeWidth="2.9">
        <path d="M12 2.4V10.4" />
        <path d="M4 10.4H20" />
        <path d="M6.34 4.74L17.66 16.06" />
        <path d="M17.66 4.74L6.34 16.06" />
        <path d="M12 15.6V22" />
      </g>
    </svg>
  );
}

/* The R is the first two subpaths of Remind's own wordmark SVG — outer form
   plus its counter — recolored to currentColor and inset to match the other
   brand glyphs. */
export function PeopleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} viewBox="0 0 16 16" fill="none">
      <circle cx="5.75" cy="4.75" r="2.25" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M1.5 13.25c0-2.35 1.9-3.75 4.25-3.75s4.25 1.4 4.25 3.75"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="11.75" cy="5.25" r="1.75" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M10.25 13.25c.35-1.65 1.45-2.75 3.25-2.75 1.15 0 2.05.45 2.65 1.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LinkIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} viewBox="0 0 16 16" fill="none">
      <path
        d="M6.25 9.25 9.25 6.25M7.1 4.6l1.55-1.55a2.25 2.25 0 0 1 3.18 3.18L9.1 8.05M8.9 7.95l1.63 1.63a2.25 2.25 0 0 1-3.18 3.18L7.9 11.15"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RemindIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} viewBox="0 0 24 24" fill="none">
      <g transform="translate(2.1 2) scale(0.83)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M0.288638 2.34586e-05C3.33044 -0.0551388 5.05561 1.20697 5.40197 3.79078C6.72971 1.26434 8.72353 2.34586e-05 10.6885 2.34586e-05C18.1687 2.34586e-05 16.0882 10.7059 8.4682 12.63C9.90695 16.0478 14.7316 21.5596 20.4267 21.4449L20.1092 24C15.1402 24.0861 8.69911 19.5495 5.67729 12.919L4.72478 12.833L3.48142 18.6029H0.548412L2.83087 8.41337C3.08051 7.42643 3.22562 6.41625 3.26383 5.39931C3.26383 3.44656 2.39792 2.35656 0 2.41392L0.288638 2.34586e-05ZM6.23902 10.6508C11.8719 10.6508 14.8982 2.47129 10.7462 2.47129C8.11739 2.47129 6.03698 6.84015 5.1422 10.536C5.50446 10.6011 5.87107 10.6395 6.23902 10.6508V10.6508Z"
        />
      </g>
    </svg>
  );
}
