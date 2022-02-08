import Hero from "@/module/hero";
import React from "react";
import bannerImg from "@/assets/images/dining-md.jpg";
import Intro from "@/layout/dining_page/Intro";
import Menu from "@/layout/dining_page/menu";
import BookNowSection from "@/layout/dining_page/BooknowSection";

const Dining = () => {
  return (
    <>
      <Hero bannerImg={bannerImg} title="<span>Dine with us</span>" />
      <Intro />
      <Menu />
      <BookNowSection />
    </>
  );
};

export default Dining;
