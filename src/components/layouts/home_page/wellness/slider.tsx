import React, { useRef, useState } from "react";
import NextImg from "next/image";
import swimmingPoolImg from "@/assets/images/outdoor-pool.jpg";
import spaImg from "@/assets/images/spaImg.jpg";
import fitnessImg from "@/assets/images/yoga.jpg";
import indoorPoolImg from "@/assets/images/indoor-pool.jpg";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "@/utils/useLayoutEffect";
import { Wrapper } from "./sliderStyles";
import { animationFun } from "./utils";

interface slidesTypes {
  title: string;
  imgSrc: StaticImageData;
}

const CarouselSlider = () => {
  const slides: slidesTypes[] = [
    { title: "Indoor  pool", imgSrc: indoorPoolImg },
    { title: "Spa", imgSrc: spaImg },
    { title: "Fitness", imgSrc: fitnessImg },
    { title: "Outdoor pool", imgSrc: swimmingPoolImg },
  ];
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);

  const [currentSlideNum, setCurrentSlideNum] = useState(0);

  useIsomorphicLayoutEffect(() => {
    animationFun(children);
  }, [currentSlideNum]);

  return (
    <Wrapper ref={wrapperRef}>
      <div className="slide">
        <figure>
          <NextImg
            src={slides[currentSlideNum].imgSrc}
            placeholder="blur"
            objectFit="cover"
          />
        </figure>

        <div className="slide__content">
          <h2 className="heading-3">
            <span>{slides[currentSlideNum].title}</span>
          </h2>
        </div>

        <div className="slide__dots">
          {slides.map((item, num) => (
            <div
              key={num}
              className={`${num === currentSlideNum && "active"}`}
              onClick={() => {
                currentSlideNum != num && setCurrentSlideNum(num);
              }}></div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default CarouselSlider;
