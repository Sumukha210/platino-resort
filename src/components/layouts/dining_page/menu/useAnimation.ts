import React, { useRef } from "react";
import useIsomorphicLayoutEffect from "@/customHook/useLayoutEffect";
import { gsap } from "gsap";

const useAnimation = () => {
  const WrapperRef = useRef(null);
  const children = gsap.utils.selector(WrapperRef);

  useIsomorphicLayoutEffect(() => {
    gsap.utils.toArray(children(".card")).forEach((item: any) => {
      gsap.fromTo(
        item,
        {
          y: 0,
        },
        {
          repeat: -1,
          duration: gsap.utils.random(10, 15),
          ease: "Power4.easeInOut",
          y: gsap.utils.random(-40, -65),
          yoyo: true,
          yoyoEase: "none",
        }
      );
    });
  }, []);

  return [WrapperRef];
};

export default useAnimation;
