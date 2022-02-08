import homeImg from "@/assets/images/banner-sm.jpg";
import aboutImg from "@/assets/images/about-md.jpg";
import diningImg from "@/assets/images/dining-2-md.jpg";
import wellnessImg from "@/assets/images/interior-sm-1.jpg";
import pricingImg from "@/assets/images/spa-md.jpg";
import contactImg from "@/assets/images/contact-sm.jpg";

export interface navMenuOptionsType {
  name: string;
  img: StaticImageData;
  path: string;
}

export const navMenuOptions: navMenuOptionsType[] = [
  { name: "Home", img: homeImg, path: "/" },
  { name: "About", img: aboutImg, path: "/about" },
  { name: "Dining", img: diningImg, path: "/dining" },
  { name: "Wellness", img: wellnessImg, path: "/wellness" },
  { name: "Pricing", img: pricingImg, path: "/pricing" },
  { name: "Contact us", img: contactImg, path: "/contact" },
];
