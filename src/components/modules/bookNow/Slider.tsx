import React, { useRef } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styled from "styled-components";
import NextImg from "next/image";
import { sliderImagesType } from "./types";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "@/utils/useLayoutEffect";

const CarouselSlider: React.FC<sliderImagesType> = ({ images }) => {
  const WrapperRef = useRef(null);
  const children = gsap.utils.selector(WrapperRef);
  const tl = useRef<gsap.core.Timeline>();

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline();
  }, []);

  return (
    <Wrapper ref={WrapperRef}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={images.length}
        infinite={true}
        visibleSlides={3.9}>
        <Slider classNameTray="parentSlidecustom-container">
          {images.map((src, num) => (
            <Slide index={num} key={`randomkey${num}`}>
              <figure>
                <NextImg src={src} objectFit="cover" />
              </figure>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </Wrapper>
  );
};

export default CarouselSlider;

const Wrapper = styled.div`
  margin-top: 5rem;

  .parentSlidecustom-container {
    @media (max-width: 991.98px) {
      width: 350% !important;
    }

    @media (max-width: 575.98px) {
      width: 500% !important;
    }
  }

  figure {
    height: 100%;

    img {
      transition: transform 1s ease-in-out;
    }

    &:hover {
      img {
        transform: scale(1.2);
      }
    }

    & > span {
      height: 100% !important;
    }
  }
`;
