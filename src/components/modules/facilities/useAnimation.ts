import { useRef } from "react";
import useIsomorphicLayoutEffect from "@/customHook/useLayoutEffect";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { scrollingTextAnimation } from "@/utils/scrollingTextAnimation";

const useAnimation = () => {
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    scrollingTextAnimation({
      targets: [
        children(".left .caption-2 span"),
        children(".left .title span"),
        children(".left .para span"),
      ],
      trigger: wrapperRef.current,
    });

    scrollingTextAnimation({
      targets: [children(".right")],
      trigger: children(".right .feature"),
    });
  }, []);

  return [wrapperRef];
};

export default useAnimation;
