import { useState, useRef } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "@/customHook/useLayoutEffect";
import { scrollingTextAnimation } from "@/utils/scrollingTextAnimation";

const useAnimaton = () => {
  const [currentMenuNum, setCurrentMenuNum] = useState(0);
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);

  useIsomorphicLayoutEffect(() => {
    gsap.fromTo(
      children("img"),
      { autoAlpha: 0, scale: 0.9 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 0.9,
        ease: "Power1.easeInOut",
      }
    );
  }, [currentMenuNum]);

  useIsomorphicLayoutEffect(() => {
    scrollingTextAnimation({
      trigger: children(".right"),
      targets: [
        children(".right .caption span"),
        children(".right .title span"),
        children(".right .sub-title span"),
        children(".right .options"),
        children(".right .btnContainer"),
      ],
    });
  }, []);

  return { currentMenuNum, setCurrentMenuNum, wrapperRef };
};

export default useAnimaton;
