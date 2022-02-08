import { gsap } from "gsap/dist/gsap";
import useLayoutEffect from "@/utils/useLayoutEffect";

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
      duration: 2.5,
      ease: "power3.inOut",
      stagger: 0.1,
    });

    forFrontPage &&
      tl.current
        .to(children(".btnContainer"), { y: 0, autoAlpha: 1 }, "-=1")
        .from(
          children(".feature span"),
          {
            y: 40,
            autoAlpha: 0,
            duration: 1.2,
            ease: "power4.inOut",
          },
          "-=0.8"
        );
  }, []);
};
