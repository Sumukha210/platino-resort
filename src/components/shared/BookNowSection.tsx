import React from "react";
import BookNow from "@/module/bookNow";
import styled from "styled-components";

import aboutImg from "@/assets/images/about-md.jpg";
import contactImg from "@/assets/images/contact-sm.jpg";
import diningImg from "@/assets/images/dining-md.jpg";
import fitnessImg from "@/assets/images/pool.jpg";
import gymImg from "@/assets/images/gym.jpg";
import interiorImg from "@/assets/images/interior-sm-1.jpg";
import dining2Img from "@/assets/images/dining-2-md.jpg";

const BookNowSection = () => {
  const images = [
    aboutImg,
    contactImg,
    diningImg,
    fitnessImg,
    gymImg,
    interiorImg,
    dining2Img,
  ];

  return (
    <Wrapper>
      <BookNow images={images} />
    </Wrapper>
  );
};

export default BookNowSection;

const Wrapper = styled.div`
  background-color: var(--secondary-300);
  padding-top: 5rem;

  .heading,
  .subtitle {
    color: var(--light-color);
  }
`;
