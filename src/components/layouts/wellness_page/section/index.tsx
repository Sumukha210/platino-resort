import React from "react";
import NextImg from "next/image";
import { sectionTypes } from "./types";
import { Carousel, Wrapper } from "./styles";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { useSectionAnimation } from "./useSectionAnimaton";

const Section: React.FC<sectionTypes> = ({
  bgColor,
  textColor,
  caption,
  title,
  para,
  images,
  fromRightToLeft = false,
  bgImgColor = "var(--secondary-400)",
}) => {
  const { wrapperRef } = useSectionAnimation(fromRightToLeft);

  return (
    <Wrapper bgColor={bgColor} textColor={textColor} ref={wrapperRef}>
      <div className="custom-container">
        <div className="header">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <h6 className="caption caption-2">{caption}</h6>
              <h2 className="heading heading-3 bold">{title}</h2>
              <p className="para sub-title-2">{para}</p>
            </div>
          </div>
        </div>
      </div>

      <Carousel>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={images.length}
          infinite={false}
          visibleSlides={1.2}>
          <Slider className="parentSlider">
            {images.map((src, num) => (
              <Slide index={num} key={`randomkey${num}`} className="innerSlide">
                <div className="carouselSlide">
                  <figure
                    style={{
                      backgroundColor: bgImgColor,
                    }}>
                    <NextImg src={src} objectFit="cover" placeholder="blur" />
                  </figure>
                </div>
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </Carousel>
    </Wrapper>
  );
};

export default Section;
