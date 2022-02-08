import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "@/utils/useLayoutEffect";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

export const useSectionAnimation = (fromRightToLeft: boolean = false) => {
  const wrapperRef = useRef(null);
  const childrenEle = gsap.utils.selector(wrapperRef);
  const tl = useRef<gsap.core.Timeline>();
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: {
        ease: "power4.in",
        duration: 1,
      },
      scrollTrigger: { trigger: wrapperRef.current, start: "top center" },
    });

    tl.current!.fromTo(
      wrapperRef.current,
      {
        clipPath: fromRightToLeft
          ? "polygon(100% 0, 100% 1%, 100% 100%, 100% 100%)"
          : "polygon(0 0, 0 0, 0 100%, 0 100%)",
      },
      {
        clipPath: fromRightToLeft
          ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
          : "polygon(100% 0, 0% 0, 0 100%, 100% 100%)",
        duration: 1.1,
      },
      "<"
    )
      .from(
        [
          childrenEle(".caption"),
          childrenEle(".heading"),
          childrenEle(".para"),
        ],
        {
          y: 80,
          duration: 1.2,
          ease: "power4.easeIn",
          stagger: 0.3,
          autoAlpha: 0,
        }
      )
      .to(
        childrenEle("figure"),
        {
          clipPath: "polygon(0 0, 100% 1%, 100% 100%, 0 100%)",
          stagger: 0.06,
        },
        "-=0.9"
      )
      .to(
        childrenEle("img"),
        {
          clipPath: "polygon(0 0, 100% 1%, 100% 100%, 0 100%)",
        },
        "-=0.8"
      );
  }, []);

  return { wrapperRef };
};
