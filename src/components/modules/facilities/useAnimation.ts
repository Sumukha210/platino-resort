import { useRef } from "react";
import useIsomorphicLayoutEffect from "@/utils/useLayoutEffect";
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
        children(".left .caption-2"),
        children(".left .title"),
        children(".left .para"),
      ],
      trigger: children(".left"),
    });

    scrollingTextAnimation({
      targets: [children(".right")],
      trigger: children(".right .feature"),
    });
  }, []);

  return [wrapperRef];
};

export default useAnimation;
