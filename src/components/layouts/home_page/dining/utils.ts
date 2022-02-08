import drinkMenuImg from "@/assets/images/drinks.jpg";
import desertMenuImg from "@/assets/images/dessert.jpg";
import pizzaMenuImg from "@/assets/images/pizza.jpg";
import dinnerMenuImg from "@/assets/images/dinner.jpg";

export interface menuNamesTypes {
  name: string;
  imgSrc: StaticImageData;
}

export const menuNames: menuNamesTypes[] = [
  { name: "Desert Menu", imgSrc: desertMenuImg },
  { name: "Pizza Menu", imgSrc: pizzaMenuImg },
  { name: "Dinner Menu", imgSrc: dinnerMenuImg },
  { name: "Drink Menu", imgSrc: drinkMenuImg },
];
