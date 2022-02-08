import React, { useRef } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import NextImg from "next/image";
import { sliderImagesType } from "../types";
import { Wrapper } from "./styles";

const CarouselSlider: React.FC<sliderImagesType> = ({ images }) => {
  return (
    <Wrapper>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={images.length}
        infinite={false}
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
