import React from "react";
import bannerImg from "@/assets/images/about-md.jpg";
import Hero from "@/module/hero";
import AboutIntro from "@/module/about_intro";
import Founders_And_Team from "@/layout/about_page/founders";
import PresidentWords from "@/layout/about_page/PresidentWords";
import OurPromises from "@/layout/about_page/OurPromises";

const About = () => {
  return (
    <>
      <Hero
        bannerImg={bannerImg}
        title="<span>Learn more</span> <span>About us</span>"
      />
      <AboutIntro />
      <Founders_And_Team />
      <PresidentWords />
      <OurPromises />
    </>
  );
};

export default About;
