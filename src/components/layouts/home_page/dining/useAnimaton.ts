import { useState, useRef } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "@/utils/useLayoutEffect";
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
        children(".right .caption"),
        children(".right .title"),
        children(".right .sub-title"),
        children(".right .options .heading-5"),
        children(".right .btnContainer"),
      ],
    });
  }, []);

  return { currentMenuNum, setCurrentMenuNum, wrapperRef };
};

export default useAnimaton;
