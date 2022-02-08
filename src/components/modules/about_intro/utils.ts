import { scrollingTextAnimation } from "@/utils/scrollingTextAnimation";
import useIsomorphicLayoutEffect from "@/utils/useLayoutEffect";
import { useRouter } from "next/router";
import { useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface aboutIntroDataType {
  caption: string;
  title: string;
  subtitle: string;
  para: string;
}

export const aboutIntroData: aboutIntroDataType = {
  caption: "All forms of hospitality",
  title: "A widespread Resort",
  subtitle: "In the heart of malnad",
  para: ` Welcome to the legendary Platino Restarant & Hotel. Surrounded by
  the pristine beauty of mother nature, the Platino offers unique
  accommodations with laid-back luxury, gracious hospitality,
  superior dining, and one of the most iconic bars in Malnad. Since
  1927, our hotel has created memories for generations of travelers,
  create one for yourself with an unforgettable stay at the Platino!`,
};

export const useAboutIntroAnimation = () => {
  const router = useRouter();
  const wrapperRef = useRef(null);
  const childrenEle = gsap.utils.selector(wrapperRef);

  gsap.registerPlugin(ScrollTrigger);
  useIsomorphicLayoutEffect(() => {
    scrollingTextAnimation({
      targets: [
        childrenEle(".caption"),
        childrenEle(".title"),
        childrenEle(".subtitle"),
        childrenEle(".para"),
        router.pathname === "/" && childrenEle(".btnContainer"),
      ],
      trigger: childrenEle(".header"),
    });
  }, []);

  return { router, wrapperRef };
};
