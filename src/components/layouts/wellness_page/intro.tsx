import React, { useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "@/utils/useLayoutEffect";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { scrollingTextAnimation } from "@/utils/scrollingTextAnimation";

const Intro = () => {
  const wrapperRef = useRef(null);
  const childrenEle = gsap.utils.selector(wrapperRef);
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    scrollingTextAnimation({
      trigger: wrapperRef.current,
      targets: childrenEle(".title"),
    });
  }, []);

  return (
    <Wrapper className="margin-top" ref={wrapperRef}>
      <div className="custom-container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <h2 className="heading-4 title">
              Nestled in the middle of natural beauty, Platino allows you to
              find peace from the hustle and bustle of everyday life and relax
              in a breathtaking ambience.
            </h2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Intro;

const Wrapper = styled.div`
  color: var(--dark-color);

  .title {
    text-align: center;
    font-family: var(--primary-font);
    font-weight: 300 !important;
    color: var(--primary-200);
  }
`;
