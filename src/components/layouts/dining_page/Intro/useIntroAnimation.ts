import { scrollingTextAnimation } from "@/utils/scrollingTextAnimation";
import useIsomorphicLayoutEffect from "@/utils/useLayoutEffect";
import { useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const useIntroAnimation = () => {
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);
  const tl = useRef<gsap.core.Timeline>();

  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.fromTo(
      children("img"),
      { rotation: 0 },
      {
        rotation: 360,
        repeat: -1,
        duration: 80,
        ease: "none",
        transformOrigin: "center",
      }
    );
  }, []);

  useIsomorphicLayoutEffect(() => {
    scrollingTextAnimation({
      trigger: wrapperRef.current,
      targets: [children(".caption"), children(".para"), children("img")],
    });
  }, []);

  return wrapperRef;
};
