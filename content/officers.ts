/**
 * Officer data for the Officers page.
 *
 * Keep the data here and the layout in the component. That way one person can
 * type in officers while someone else builds the card, without touching the
 * same file.
 *
 * Headshots: put the original in public/images/original/, compress it to under
 * 200 KB, save the compressed one in public/images/, and reference it below as
 * "/images/filename.jpg".
 */

/** Committees, in the order they should appear on the page. */
export const COMMITTEES = [
  "Leads",
  "External",
  "Internal",
  "Media",
  "Logistics",
  "Web Dev",
] as const;

export type Committee = (typeof COMMITTEES)[number];

export type Officer = {
  name: string;
  role: string;
  committee: Committee;
  major: string;
  year: string;
  /** Path under public/, e.g. "/images/jane-doe.jpg" */
  photo: string;
  email?: string;
  linkedin?: string;
};

/** TODO: replace this example with the real board. */
export const officers: Officer[] = [
  {
    name: "Example Officer",
    role: "President",
    committee: "Leads",
    major: "Computer Science",
    year: "Senior",
    photo: "/images/placeholder.jpg",
    email: "example@vt.edu",
    linkedin: "https://www.linkedin.com/in/example",
  },
];

/** Officers grouped by committee, in COMMITTEES order, skipping empty ones. */
export function officersByCommittee(): {
  committee: Committee;
  members: Officer[];
}[] {
  return COMMITTEES.map((committee) => ({
    committee,
    members: officers.filter((o) => o.committee === committee),
  })).filter((group) => group.members.length > 0);
}
