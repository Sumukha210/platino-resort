import useLayoutEffect from "@/utils/useLayoutEffect";
import { gsap } from "gsap/dist/gsap";
import { useRouter } from "next/router";

interface navbarMenuAnimationProps {
  firstTime: boolean;
  setFirstTime: React.Dispatch<React.SetStateAction<boolean>>;
  tl: React.MutableRefObject<gsap.core.Timeline | undefined>;
  children: gsap.utils.SelectorFunc;
  menuOpen: boolean;
}

export const useNavbarMenuAnimation = ({
  firstTime,
  setFirstTime,
  tl,
  children,
  menuOpen,
}: navbarMenuAnimationProps) => {
  const { pathname } = useRouter();

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ defaults: { duration: 1.1 }, paused: true });
    if (firstTime) {
      return;
    }

    tl.current!.pause();
    tl.current!.to(
      children(".navbar__menu .menu"),
      {
        autoAlpha: 0,
        ease: "Power1.easeOut",
        duration: 0.1,
      },
      "<"
    )
      .to(
        [
          children(".logo"),
          children(".bookNow"),
          "#hero .title",
          pathname === "/" && "#hero .btnContainer",
          pathname === "/" && "#hero #features",
        ],
        {
          autoAlpha: 0,
          duration: 0.6,
          ease: "power1.In",
        }
      )
      .to(children("#navMenu"), {
        width: "20%",
        duration: 1.1,
        ease: "Power4.easeIn",
      })
      .to(
        children("#navMenu"),
        {
          width: "100%",
          duration: 1.1,
          ease: "Power4.easeIn",
          delay: 0.3,
        },
        "<"
      )
      .from(children(".menuName"), {
        stagger: 0.05,
        autoAlpha: 0,
        y: 30,
        ease: "power1.In",
      })
      .from(
        [children("#navMenu .personalBlock"), children("#navMenu .logoBlock")],
        {
          y: 20,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power1.In",
          stagger: 0.4,
        },
        "-=0.5"
      )
      .to(
        children(".navbar__menu .menu"),
        { autoAlpha: 1, ease: "power1.In" },
        "-=1.6"
      );
  }, [firstTime]);
  useLayoutEffect(() => {
    setFirstTime(false);
    if (menuOpen) {
      tl.current!.play();
    } else {
      tl.current!.reverse(3.8);
    }
  }, [menuOpen]);
};
