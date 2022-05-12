import React from "react";
import bannerImg from "@/assets/images/banner-md.jpg";
import Layout from "@/shared/Layout";
import AboutIntro from "@/module/about_intro";
import Facilities from "@/module/facilities";
import Dining from "@/layout/home_page/dining";
import Wellness from "@/layout/home_page/wellness";
import BookNowSection from "@/shared/BookNowSection";

const Home = () => {
  return (
    <>
      <Layout
        forFrontPage={true}
        title="<span>Your luxury Holiday </span> <span>Home in Malnad</span>"
        bannerImg={bannerImg}>
        <AboutIntro />
        <Facilities />
        <Dining />
        <Wellness />
        <BookNowSection />
      </Layout>
    </>
  );
};

export default Home;
