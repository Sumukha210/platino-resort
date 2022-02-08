import React, { useRef } from "react";
import styled from "styled-components";
import Info from "./Info";
import Slider from "./slider";
import { sliderImagesType } from "./types";
import useIsomorphicLayoutEffect from "@/utils/useLayoutEffect";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const BookNow: React.FC<sliderImagesType> = ({ images }) => {
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);
  const tl = useRef<gsap.core.Timeline>();
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: { start: "top center", trigger: wrapperRef.current },
    });

    tl.current!.from(
      [children(".heading"), children(".subtitle"), children(".btnContainer")],
      {
        y: 80,
        duration: 0.9,
        ease: "power4.easeIn",
        stagger: 0.3,
        autoAlpha: 0,
      }
    ).from(children("figure"), {
      y: 80,
      duration: 0.9,
      ease: "power4.In",
      stagger: 0.3,
      scale: 1.5,
      transformOrigin: "center",
      autoAlpha: 0,
    });
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Info />
      <Slider images={images} />
    </Wrapper>
  );
};

export default BookNow;

export const Wrapper = styled.div`
  .content {
    text-align: center;

    p {
      margin: 2rem 0;
    }
  }
`;
