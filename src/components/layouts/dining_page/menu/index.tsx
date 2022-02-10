import React, { useRef } from "react";
import NextImg from "next/image";
import { Wrapper } from "./styles";
import drinkMenuImg from "@/assets/images/drinks.jpg";
import desertMenuImg from "@/assets/images/dessert.jpg";
import pizzaMenuImg from "@/assets/images/pizza.jpg";
import dinnerMenuImg from "@/assets/images/dinner.jpg";
import happyHourMenuImg from "@/assets/images/wine.jpg";
import DOMPurify from "isomorphic-dompurify";
import useAnimation from "@/module/facilities/useAnimation";

interface menuNamesTypes {
  name: string;
  imgSrc: StaticImageData;
}

const menuNames: menuNamesTypes[] = [
  { name: "Happy <br/> Hour", imgSrc: happyHourMenuImg },
  { name: "Desert <br/> Menu", imgSrc: desertMenuImg },
  { name: "Pizza <br/> Menu", imgSrc: pizzaMenuImg },
  { name: "Dinner <br/> Menu", imgSrc: dinnerMenuImg },
  { name: "Drink <br/> Menu", imgSrc: drinkMenuImg },
];

const Menu = () => {
  const [wrapperRef] = useAnimation();

  return (
    <Wrapper ref={wrapperRef} className="margin-top">
      <div className="imgcustom-container">
        {menuNames.map(({ name, imgSrc }, num) => (
          <div className="card" key={num}>
            <div className="card__header">
              <NextImg src={imgSrc} objectFit="cover" placeholder="blur" />
            </div>

            <div className="card__body">
              <h4
                className="heading-4"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(name),
                }}></h4>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Menu;
