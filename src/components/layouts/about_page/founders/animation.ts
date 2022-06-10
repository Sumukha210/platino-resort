import { scrollingTextAnimation } from "@/utils/scrollingTextAnimation";
import useIsomorphicLayoutEffect from "@/customHook/useLayoutEffect";
import { useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const useFoundersAnimation = () => {
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);

  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    scrollingTextAnimation({
      trigger: wrapperRef.current,
      targets: [children(".title span"), children(".card")],
    });
  }, []);

  return wrapperRef;
};
