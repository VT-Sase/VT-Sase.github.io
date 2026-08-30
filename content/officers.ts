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
};

export const officers: Officer[] = [
  // LEADS
  {
    name: "Ritisha Ghimire Kshetri",
    role: "President",
    committee: "Leads",
  },
  {
    name: "Aarya Ghimire",
    role: "Internal VP",
    committee: "Leads",
  },
  {
    name: "Rhea Rajmanna",
    role: "Media VP",
    committee: "Leads",
  },
  {
    name: "Han Nguyen",
    role: "External VP",
    committee: "Leads",
  },

  // EXTERNAL
  {
    name: "Andrew Kee",
    role: "External Task Force",
    committee: "External",
  },
  {
    name: "Zachary Zhu",
    role: "External Task Force",
    committee: "External",
  },
  {
    name: "Andrew Marquez",
    role: "Service Chair",
    committee: "External",
  },
  {
    name: "Evelyn Kim",
    role: "Service Chair",
    committee: "External",
  },

  // INTERNAL
  {
    name: "Tuan Phan",
    role: "Internal Task Force",
    committee: "Internal",
  },
  {
    name: "Vismaya Vinod",
    role: "Internal Task Force",
    committee: "Internal",
  },

  // MEDIA
  {
    name: "Elizabeth Ho",
    role: "Webmaster",
    committee: "Media",
  },
  {
    name: "David Luu",
    role: "Historian",
    committee: "Media",
  },
  {
    name: "Ellen Lee",
    role: "Historian",
    committee: "Media",
  },
  {
    name: "Shruthika Saravanakumar",
    role: "PR Chair",
    committee: "Media",
  },
  {
    name: "Luz Pinto",
    role: "PR Chair",
    committee: "Media",
  },
  {
    name: "Arwen Downum",
    role: "PR Chair",
    committee: "Media",
  },

  // LOGISTICS
  {
    name: "Alvin Zheng",
    role: "Treasurer",
    committee: "Logistics",
  },
  {
    name: "Jilliane Dela Vega",
    role: "Secretary",
    committee: "Logistics",
  },
  {
    name: "Indulekha Sanil",
    role: "Senior Advisor",
    committee: "Logistics",
  },
  {
    name: "Snehitha Ravella",
    role: "Senior Advisor",
    committee: "Logistics",
  },
  {
    name: "Deya Singh",
    role: "Graduate Advisor",
    committee: "Logistics",
  },

  // WEB DEVELOPMENT
  {
    name: "Joseph Trinh",
    role: "Web Dev",
    committee: "Web Dev",
  },
  {
    name: "Vanesha Hari",
    role: "Web Dev",
    committee: "Web Dev",
  },
  {
    name: "Ritvik Navil",
    role: "Web Dev",
    committee: "Web Dev",
  },
  {
    name: "Bhavya Chebattina",
    role: "Web Designer",
    committee: "Web Dev",
  },
  {
    name: "Jocelyn Chu",
    role: "Web Designer",
    committee: "Web Dev",
  },
];

export function officersByCommittee() {
  return COMMITTEES.map((committee) => ({
    committee,
    members: officers.filter(
      (officer) => officer.committee === committee
    ),
  }));
}