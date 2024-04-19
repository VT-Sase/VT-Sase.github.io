import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  imageNames: string[];
  options?: EmblaOptionsType;
};
const baseImagePath = "src/assets/img/slideshow-compressed-smaller";
const EmblaCarousel: React.FC<PropType> = (props) => {
  const { imageNames } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ number: 5000 })]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {imageNames.map((name, index) => (
            <div className="embla__slide" key={index}>
              <img src={`${baseImagePath}/${name}`} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
