import React from "react";
import styled from "styled-components";
import Info from "./Info";
import Slider from "./Slider";
import { sliderImagesType } from "./types";

const BookNow: React.FC<sliderImagesType> = ({ images }) => {
  return (
    <Wrapper>
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
