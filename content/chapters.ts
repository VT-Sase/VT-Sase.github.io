/**
 * The other SASE chapters in the Southeast region, shown on the home page's
 * SASE Southeast section. Logos live in public/images/about/chapters/.
 *
 * Every school gets both of its brand colors: the card frame is a gradient
 * running `accent` at the top into `accentEnd` at the bottom, which is how the
 * chapter cards are drawn in the design.
 *
 * `point` is where the school sits on public/images/about/southeast-map.png,
 * as a percentage of that image — hovering a card walks the pin there. Each
 * one is its campus's latitude and longitude projected onto the bounding box
 * of that state as it is actually drawn in the artwork, rather than onto the
 * map as a whole: the drawing is not a true projection, so a single fit across
 * the region lands the southern pins a few percent high.
 */

export type MapPoint = { x: number; y: number };

export type Chapter = {
  name: string;
  /** What the map label calls it — a full school name overruns the artwork. */
  short: string;
  logo: string;
  url: string;
  accent: string;
  accentEnd: string;
  point: MapPoint;
};

/** Blacksburg — where the pin rests when nothing is hovered. */
export const VT_MAP_POINT: MapPoint = { x: 69.9, y: 17.9 };

export const sisterChapters: Chapter[] = [
  {
    name: "University of Virginia",
    short: "UVA",
    logo: "/images/about/chapters/uva.png",
    url: "https://uvasase.org/",
    accent: "#232d4b",
    point: { x: 80.4, y: 12.4 },
    accentEnd: "#e57200",
  },
  {
    name: "UNC Charlotte",
    short: "UNC Charlotte",
    logo: "/images/about/chapters/unc-charlotte.png",
    url: "https://ninerengage.charlotte.edu/organization/sase",
    accent: "#005035",
    point: { x: 66.1, y: 31.7 },
    accentEnd: "#a49665",
  },
  {
    name: "NC State",
    short: "NC State",
    logo: "/images/about/chapters/nc-state.png",
    url: "https://getinvolved.ncsu.edu/organization/sasencsu",
    accent: "#cc0000",
    point: { x: 78.2, y: 28.1 },
    accentEnd: "#000000",
  },
  {
    name: "George Mason University",
    short: "George Mason",
    logo: "/images/about/chapters/gmu.png",
    url: "https://sasegmu.netlify.app/",
    accent: "#ffcc33",
    point: { x: 87, y: 7 },
    accentEnd: "#006633",
  },
  {
    name: "University of Tennessee Knoxville",
    short: "Tennessee",
    logo: "/images/about/chapters/tennessee.png",
    url: "https://saseutk.weebly.com/",
    accent: "#ff8200",
    point: { x: 48.7, y: 26.9 },
    accentEnd: "#58595b",
  },
  {
    name: "Georgia Tech",
    short: "Georgia Tech",
    logo: "/images/about/chapters/georgia-tech.png",
    url: "https://sites.gatech.edu/gtsase/",
    accent: "#b3a369",
    point: { x: 46.1, y: 41.6 },
    accentEnd: "#003057",
  },
  {
    name: "University of Florida",
    short: "Florida",
    logo: "/images/about/chapters/florida.png",
    url: "https://ufsase.com/",
    accent: "#0021a5",
    point: { x: 57.8, y: 68.5 },
    accentEnd: "#fa4616",
  },
];

/** The national chapter directory, linked at the bottom of the section. */
export const ALL_CHAPTERS_URL = "https://main.saseconnect.org/chapter-list";
