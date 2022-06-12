import React, { useRef, useState } from "react";
import NextImg from "next/image";
import swimmingPoolImg from "@/assets/images/outdoor-pool.jpg";
import spaImg from "@/assets/images/spaImg.jpg";
import fitnessImg from "@/assets/images/yoga.jpg";
import indoorPoolImg from "@/assets/images/indoor-pool.jpg";
import { gsap, Power3, Power1, Power2 } from "gsap";
import styled from "styled-components";

interface slidesTypes {
  title: string;
  imgSrc: StaticImageData;
}

const SliderPage = () => {
  const slides: slidesTypes[] = [
    { title: "Indoor  pool", imgSrc: indoorPoolImg },
    { title: "Spa", imgSrc: spaImg },
    { title: "Fitness", imgSrc: fitnessImg },
    { title: "Outdoor pool", imgSrc: swimmingPoolImg },
  ];

  const sliderRef = useRef(null);
  const children = gsap.utils.selector(sliderRef);
  const [activeSlide, setActiveSlide] = useState(0);
  const [disabledBtn, setDisabled] = useState(false);

  const textToMove = 20;

  const slide = (
    index: number,
    xPercent = -100,
    delay = 0,
    duration = 1,
    forPrev = false
  ) => {
    setDisabled(true);
    gsap.to(children(`.slide${index}`), {
      xPercent,
      duration,
      ease: forPrev ? Power2.easeInOut : Power2.easeOut,
      delay,
      onComplete() {
        setDisabled(false);
      },
    });
  };

  const scale = (index: number, duration = 1.6, scale = 1.4) => {
    setDisabled(true);

    gsap.from(children(`.slide${index} .mainImg`), {
      duration,
      ease: Power3.easeOut,
      scale,
      onComplete() {
        setDisabled(false);
      },
    });
  };

  const removeText = (index: number, xPercent = textToMove - 60) => {
    setDisabled(true);
    gsap.to(children(`.slide${index} .title`), {
      duration: 1.3,
      ease: Power1.easeInOut,
      xPercent,
      // autoAlpha: 0,
      onComplete() {
        setDisabled(false);
      },
    });
  };

  const textAppearFromLeft = (
    index: number,
    xPercent = textToMove,
    delay = 0
  ) => {
    setDisabled(true);
    gsap.fromTo(
      children(`.slide${index} .title`),
      {
        // autoAlpha: 0,
        xPercent,
      },
      {
        duration: 1.5,
        ease: Power3.easeInOut,
        xPercent: 0,
        delay,
        onComplete() {
          setDisabled(false);
        },
      }
    );
  };

  const handleNext = () => {
    if (activeSlide < slides.length - 1) {
      setActiveSlide(activeSlide + 1);

      if (activeSlide === 0) {
        slide(0, -100, 1);
        removeText(0);
        slide(1);
        scale(1);
        textAppearFromLeft(1);
        slide(0, 0, 1);
      } else if (activeSlide === 1) {
        slide(1, -200, 1);
        removeText(1);
        slide(2, -200, 0, 1.3);
        scale(2);
        textAppearFromLeft(2);
        slide(1, -100, 1);
      } else if (activeSlide === 2) {
        slide(2, -300, 1.5);
        removeText(2);
        slide(3, -300, 0, 1.3);
        scale(3);
        textAppearFromLeft(3);
        slide(2, -200, 1.5);
      }
    }
  };

  const handlePrev = () => {
    if (activeSlide >= 1) {
      setActiveSlide(activeSlide - 1);

      if (activeSlide === 1) {
        removeText(1, textToMove);
        slide(1, 0, 0.3, 1, true);
        scale(0, 1.8, 1.4);
        textAppearFromLeft(0, -textToMove, 0.4);
      } else if (activeSlide === 2) {
        removeText(2, textToMove);
        slide(2, -100, 0.3, 1, true);
        scale(1, 1.8, 1.6);
        textAppearFromLeft(1, -textToMove, 0.4);
      } else if (activeSlide === 3) {
        removeText(3, textToMove);
        slide(3, -200, 0.3, 1, true);
        scale(2, 1.8, 1.6);
        textAppearFromLeft(2, -textToMove, 0.4);
      }
    }
  };

  return (
    <Carousel>
      <Slider ref={sliderRef}>
        {slides.map(({ imgSrc, title }, index) => (
          <Slide
            key={index}
            className={`${
              activeSlide === index ? "active" : ""
            } slide${index}`}>
            <figure>
              <NextImg
                className="mainImg"
                src={imgSrc}
                placeholder="blur"
                objectFit="cover"
              />
            </figure>

            <Content>
              <h1 className="heading-2 title">{title}</h1>
            </Content>
          </Slide>
        ))}
      </Slider>

      <Arrows>
        {activeSlide > 0 && (
          <button disabled={disabledBtn} className="prev" onClick={handlePrev}>
            Prev
          </button>
        )}

        {activeSlide < 3 && (
          <button disabled={disabledBtn} className="next" onClick={handleNext}>
            Next
          </button>
        )}
      </Arrows>
    </Carousel>
  );
};

export default SliderPage;

const Carousel = styled.div`
  margin-inline: auto;
  margin-top: 5rem;
`;

const Slider = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Slide = styled.div`
  height: 90vh;
  position: relative;
  width: 100vw;

  figure {
    overflow: hidden;
  }

  figure,
  span {
    height: 100% !important;
    width: 100% !important;
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 0%;
  right: 0%;
  width: 100%;
  text-align: center;

  font-size: 2.5rem;

  .title {
    color: var(--light-color);
    font-weight: 400 !important;
  }
`;

const Arrows = styled.div`
  margin-top: 5rem;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .prev,
  .next {
    border: 1px solid black;
    background-color: #a8c94e;
    padding: 0.6rem;

    &:disabled {
      pointer-events: none;
      opacity: 0.2;
    }
  }

  .next {
    margin-left: 1rem;
  }
`;
