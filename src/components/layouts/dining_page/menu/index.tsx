import React, { useRef } from "react";
import NextImg from "next/image";
import { gsap } from "gsap";
import useLayoutEffect from "@/utils/useLayoutEffect";
import { Wrapper } from "./styles";
import drinkMenuImg from "@/assets/images/drinks.jpg";
import desertMenuImg from "@/assets/images/dessert.jpg";
import pizzaMenuImg from "@/assets/images/pizza.jpg";
import dinnerMenuImg from "@/assets/images/dinner.jpg";
import happyHourMenuImg from "@/assets/images/wine.jpg";

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
  const WrapperRef = useRef(null);
  const children = gsap.utils.selector(WrapperRef);

  useLayoutEffect(() => {
    gsap.utils.toArray(children(".card")).forEach((item: any) => {
      gsap.fromTo(
        item,
        {
          y: 0,
        },
        {
          repeat: -1,
          duration: gsap.utils.random(10, 15),
          ease: "Power4.easeInOut",
          y: gsap.utils.random(-40, -65),
          yoyo: true,
          yoyoEase: "none",
        }
      );
    });
  }, []);

  return (
    <Wrapper ref={WrapperRef} className="margin-top">
      <div className="imgcustom-container">
        {menuNames.map(({ name, imgSrc }, num) => (
          <div className="card" key={num}>
            <div className="card__header">
              <NextImg src={imgSrc} objectFit="cover" placeholder="blur" />
            </div>

            <div className="card__body">
              <h4
                className="heading-4"
                dangerouslySetInnerHTML={{ __html: name }}></h4>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Menu;
