import React from "react";
import bannerImg from "@/assets/images/about-md.jpg";
import AboutIntro from "@/module/about_intro";
import Founders_And_Team from "@/layout/about_page/founders";
import PresidentWords from "@/layout/about_page/PresidentWords";
import OurPromises from "@/layout/about_page/OurPromises";
import Layout from "@/shared/Layout";

const About = () => {
  return (
    <Layout
      bannerImg={bannerImg}
      title="<span>Learn more</span> <span>About us</span>">
      <AboutIntro />
      <Founders_And_Team />
      <PresidentWords />
      <OurPromises />
    </Layout>
  );
};

export default About;
