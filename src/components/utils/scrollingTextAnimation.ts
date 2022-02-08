import { gsap } from "gsap";

interface scrollingTextAnimationTypes {
  trigger: gsap.DOMTarget | undefined;
  targets: gsap.TweenTarget;
}

export const scrollingTextAnimation = ({
  trigger,
  targets,
}: scrollingTextAnimationTypes) => {
  gsap.from(targets, {
    scrollTrigger: {
      trigger,
      start: "top center",
    },
    y: 80,
    duration: 1.2,
    ease: "power4.easeIn",
    stagger: 0.3,
    autoAlpha: 0,
  });
};
