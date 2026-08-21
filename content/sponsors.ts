/**
 * Sponsor logos for the strip on the Home page.
 *
 * Logos: prefer SVG. If you only have a PNG, compress it to under 200 KB and
 * put it in public/images/sponsors/.
 */

export type Sponsor = {
  name: string;
  /** Path under public/, e.g. "/images/sponsors/example.svg" */
  logo: string;
  url: string;
};

/** TODO: replace this example with the real sponsors. */
export const sponsors: Sponsor[] = [
  {
    name: "Example Sponsor",
    logo: "/images/sponsors/placeholder.svg",
    url: "https://example.com",
  },
];
