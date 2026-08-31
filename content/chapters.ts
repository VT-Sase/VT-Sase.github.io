/**
 * The other SASE chapters in the Southeast region, shown on the home page's
 * About section. Logos live in public/images/about/chapters/.
 */

export type Chapter = {
  name: string;
  logo: string;
  url: string;
};

export const sisterChapters: Chapter[] = [
  {
    name: "University of Virginia",
    logo: "/images/about/chapters/uva.png",
    url: "https://uvasase.org/",
  },
  {
    name: "UNC Charlotte",
    logo: "/images/about/chapters/unc-charlotte.png",
    url: "https://ninerengage.charlotte.edu/organization/sase",
  },
  {
    name: "NC State",
    logo: "/images/about/chapters/nc-state.png",
    url: "https://www.instagram.com/sase_ncsu/?hl=en",
  },
  {
    name: "George Mason University",
    logo: "/images/about/chapters/gmu.png",
    url: "https://sasegmu.netlify.app/",
  },
  {
    name: "University of Tennessee Knoxville",
    logo: "/images/about/chapters/tennessee.png",
    url: "https://saseutk.weebly.com/",
  },
  {
    name: "Georgia Tech",
    logo: "/images/about/chapters/georgia-tech.png",
    url: "https://sites.gatech.edu/gtsase/",
  },
  {
    name: "University of Florida",
    logo: "/images/about/chapters/florida.png",
    url: "https://ufsase.com/",
  },
];
