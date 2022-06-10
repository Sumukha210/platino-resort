import { scrollingTextAnimation } from "@/utils/scrollingTextAnimation";
import useIsomorphicLayoutEffect from "@/customHook/useLayoutEffect";
import { useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const usePresidentWordsAnimation = () => {
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);
  const tl = useRef<gsap.core.Timeline>();

  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top center",
      },
    });
    tl.current
      .fromTo(
        children(".left"),
        { clipPath: " polygon(0 0, 0 0, 0 100%, 0% 100%)" },
        {
          duration: 1.1,
          ease: "power4.easeIn",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }
      )
      .fromTo(
        children(".left img"),
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", autoAlpha: 0 },
        {
          duration: 1.1,
          ease: "power4.easeIn",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          autoAlpha: 1,
        },
        "-=0.9"
      );
  }, []);

  useIsomorphicLayoutEffect(() => {
    scrollingTextAnimation({
      trigger: wrapperRef.current,
      targets: [
        children(".caption span"),
        children(".title span"),
        children(".quote span"),
      ],
    });
  }, []);

  return wrapperRef;
};
