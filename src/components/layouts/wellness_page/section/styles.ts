import styled from "styled-components";
import { wrapperProps } from "./types";
import "pure-react-carousel/dist/react-carousel.es.css";

export const Wrapper = styled.div<wrapperProps>`
  background-color: var(${props => props.bgColor || "--light-color"});
  color: var(${props => props.textColor || "--dark-color"});
  padding: 7rem 0;
  width: 100%;
  transition: all 1.1s;

  .header {
    text-align: center;

    .heading {
      margin-bottom: 1.5rem;
    }
  }
`;

export const Carousel = styled.div`
  margin-left: 4rem;
  margin-top: 3rem;
  max-height: 85vh;
  overflow: hidden;

  @media (max-width: 991.98px) {
    margin-left: 1rem;
  }

  @media (max-width: 575.98px) {
    margin-top: 2rem;
    max-height: 355px;
  }

  .carouselSlide {
    height: 100%;
    width: 100%;
    padding-right: 6rem;
    margin-top: 3rem;

    @media (max-width: 991.98px) {
      padding-right: 3rem;
    }

    @media (max-width: 575.98px) {
      padding-right: 1rem;
      margin-top: 1rem;
    }
  }

  figure {
    height: 85vh;
    width: 100%;
    clip-path: polygon(0 0, 100% 1%, 100% 1%, 0 0);
    @media (max-width: 575.98px) {
      height: 355px;
    }

    & > span {
      height: 100% !important;
      width: 100% !important;

      img {
        clip-path: polygon(0 0, 100% 1%, 100% 1%, 0 0);
        height: 100% !important;
        width: 100% !important;
      }
    }
  }
`;
