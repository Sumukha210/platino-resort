import React from "react";
import BookNow from "@/module/bookNow";
import styled from "styled-components";

import drinkMenuImg from "@/assets/images/drinks.jpg";
import desertMenuImg from "@/assets/images/dessert.jpg";
import pizzaMenuImg from "@/assets/images/pizza.jpg";
import dinnerMenuImg from "@/assets/images/dinner.jpg";
import food1Img from "@/assets/images/wine.jpg";
import food2Img from "@/assets/images/food-1-sm.jpg";
import food3Img from "@/assets/images/food-2-sm.jpg";
import food4Img from "@/assets/images/food-3-sm.jpg";
import food5Img from "@/assets/images/food-4-sm.jpg";
import food6Img from "@/assets/images/food-5-sm.jpg";

const images = [
  food6Img,
  food2Img,
  desertMenuImg,
  food3Img,
  pizzaMenuImg,
  food4Img,
  food1Img,
  dinnerMenuImg,
  food5Img,
  drinkMenuImg,
];

const BookNowSection = () => {
  return (
    <Wrapper>
      <BookNow images={images} />
    </Wrapper>
  );
};

export default BookNowSection;

const Wrapper = styled.div`
  background: var(--secondary-400);
  margin-top: -300px;
  padding-top: 380px;

  .content {
    color: var(--light-color);
  }
`;
