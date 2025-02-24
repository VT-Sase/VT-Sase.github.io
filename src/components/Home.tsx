import "../App.css"
import EmblaCarousel from "./carousel/EmblaCarousel"
import { EmblaOptionsType } from "embla-carousel"
import "/src/components/carousel/base.css"
import "/src/components/carousel/embla.css"
import "/src/components/carousel/sandbox.css"

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Home: React.FC = () => {

  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
};

export default Home;
