import { gsap, Power3 } from "gsap";

interface scrollingTextAnimationTypes {
  trigger: gsap.DOMTarget | undefined;
  targets: gsap.TweenTarget;
  start?: string;
}

export const scrollingTextAnimation = ({
  trigger,
  targets,
  start = "top center",
}: scrollingTextAnimationTypes) => {
  gsap.from(targets, {
    scrollTrigger: {
      trigger,
      start,
    },
    y: 80,
    duration: 1.4,
    ease: Power3.easeOut,
    stagger: 0.15,
    autoAlpha: 0,
  });
};
