import { useEffect, useState } from "react";
import "../App.css";
import { Footer, NavbarHeader } from ".";
import React from "react";

import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

import "../styles/Home.css";

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
      const imageName = `${item.base}-${i}.jpg`; // Assuming the images are in JPG format
      imageNames.push(imageName);
    }
  });

  return imageNames;
};

//Embla configs
const OPTIONS: EmblaOptionsType = { loop: true };
const images = generateImageNames(baseImageNames);
console.log(images);
//Home component
const Home: React.FC = () => {
  return (
    <>
      <NavbarHeader />
      <EmblaCarousel imageNames={images} options={OPTIONS} />
    </>
  );
};

export default Home;
