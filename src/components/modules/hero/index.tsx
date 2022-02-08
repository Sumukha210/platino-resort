import React, { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { useHeroAnimation } from "./animation";
import { Banner, BannerImg } from "./styles";
import NextImg from "next/image";
import HeroContent from "./HeroContent";
import { heroProps } from "./types";

const Hero: React.FC<heroProps> = ({
  forFrontPage = false,
  title,
  bannerImg,
}) => {
  const bannerRef = useRef(null);
  const tl = useRef<gsap.core.Timeline>();
  const children = gsap.utils.selector(bannerRef);
  useHeroAnimation(tl, children, forFrontPage);

  return (
    <>
      <Banner ref={bannerRef} id="hero">
        <BannerImg>
          <NextImg placeholder="blur" src={bannerImg} objectFit="cover" />
        </BannerImg>

        <HeroContent forFrontPage={forFrontPage} title={title} />
      </Banner>
    </>
  );
};

export default Hero;
