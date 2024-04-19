import { useNavigate } from "react-router-dom";
import { NavbarHeader } from "..";
import React from "react";

import EmblaCarousel from "./EmblaCarousel";

import "../../styles/Home.css";
import "../../styles/Embla.css";
import saseLogo from "/src/assets/img/logos/sase_logo.png";

interface BaseImageName {
  base: string;
  count: number;
}

//Setup image names
const baseImageNames: BaseImageName[] = [
  { base: "2022-23-SASE-End-of-Year-GBM", count: 24 },
  { base: "2021-22-SASE-Mentor-Mentee-Reveal", count: 6 },
  { base: "2021-22-Halloween-GBM", count: 1 },
  { base: "2021-22-Lunar-New-Year-GBM", count: 3 },
  { base: "2021-22-SASE-Gala", count: 5 },
  { base: "2021-22-End-of-Year-GBM", count: 10 },
  { base: "2022-23-Back-to-School-GBM", count: 4 },
  { base: "2022-23-Fall-2022-SASE-Mentor-Mentee-Week-Picnic-Group-Image", count: 1 },
  { base: "2022-23-Halloween-GBM", count: 1 },
  { base: "2022-23-SASE-Mentor-Mentee-Reveal", count: 3 },
  { base: "2022-23-Lunar-New-Year-GBM", count: 1 },
  { base: "2022-23-SASE-Coffeehouse-Night", count: 1 },
  { base: "2022-23-SASE-Gala", count: 5 },
  { base: "2022-23-SASE-End-of-Year-GBM", count: 23 }
];

const generateImageNames = (baseImageNames: BaseImageName[]): string[] => {
  const imageNames: string[] = [];

  baseImageNames.forEach((item) => {
    for (let i = 1; i <= item.count; i++) {
      // Check if i is greater than 1 to decide whether to append the number
      const imageName = i > 1 ? `${item.base}-${i}.jpg` : `${item.base}.jpg`;
      imageNames.push(imageName);
    }
  });

  return imageNames;
};

const images = generateImageNames(baseImageNames);

//Home component
const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavbarHeader />
      <main id="home_page">
        <section>
          <div id="home_page_bio">
            <img src={saseLogo} alt="SASE Logo" className="responsive-img" />
            <div id="home_page_bio_text">
              <h1>Welcome to SASE at Virginia Tech!</h1>
              <p>
                SASE is dedicated to advancing Asian heritage scientists and engineers in education and employment so
                that they can achieve their full career potential.
              </p>
              <button className="button" onClick={() => navigate("/events")}>
                <i className="fas fa-calendar-alt"></i>&nbsp;&nbsp; Upcoming Events
              </button>
              <button className="button" onClick={() => navigate("/about")}>
                <i className="fas fa-plus"></i>&nbsp;&nbsp; Learn More
              </button>
              <button className="button" onClick={() => navigate("/sponsors")}>
                <i className="fas fa-user-tie"></i>&nbsp;&nbsp; Be A Sponsor
              </button>
              <button className="button" onClick={() => navigate("/officers")}>
                <i className="fas fa-users"></i>&nbsp;&nbsp; Meet the Current Officers
              </button>
            </div>
          </div>
        </section>
        <section>
          <EmblaCarousel imageNames={images} />
        </section>
      </main>
    </>
  );
};

export default Home;
