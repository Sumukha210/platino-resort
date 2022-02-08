import { gsap } from "gsap";

export const animationFun = (children: gsap.utils.SelectorFunc) => {
  const tl = gsap.timeline();
  tl.from(children("figure"), {
    autoAlpha: 0,
    y: -90,
    duration: 0.8,
    ease: "power1.easeIn",
  }).from(
    children(".slide__content  span"),
    {
      duration: 0.8,
      y: 50,
      ease: "power1.easeInOut",
      autoAlpha: 0,
    },
    "-=0.3"
  );
};
