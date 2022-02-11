import { gsap } from "gsap/dist/gsap";
import useLayoutEffect from "@/customHook/useLayoutEffect";

export const useHeroAnimation = (
  tl: React.MutableRefObject<gsap.core.Timeline | undefined>,
  children: gsap.utils.SelectorFunc,
  forFrontPage: boolean
) => {
  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(children(".title span"), {
      autoAlpha: 1,
      y: 0,
      duration: 1.6,
      ease: "power4.easeIn",
      stagger: 0.1,
    });

    forFrontPage &&
      tl.current
        .to(children(".btnContainer"), { y: 0, autoAlpha: 1 }, "-=0.2")
        .from(
          children(".feature span"),
          {
            y: 40,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power4.easeIn",
          },
          "-=0.4"
        );
  }, []);
};
