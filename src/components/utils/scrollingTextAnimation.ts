import { gsap } from "gsap";

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
    duration: 1,
    ease: "power4.easeIn",
    stagger: 0.3,
    autoAlpha: 0,
  });
};
