import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import Navbar from "./navbar/Navbar";
import { heroProps } from "@/module/hero/types";
import Hero from "@/module/hero";

interface LayoutProps extends heroProps {}

const Layout: React.FC<LayoutProps> = ({
  children,
  bannerImg,
  title,
  forFrontPage,
}) => {
  const HeroProps = {
    bannerImg,
    title,
    forFrontPage,
  };

  return (
    <AppLayout>
      <Navbar />
      <Hero {...HeroProps} />
      <div id="appLayout">
        {children}
        <Footer />
      </div>
    </AppLayout>
  );
};

export default Layout;

const AppLayout = styled.div`
  #appLayout {
    position: absolute;
    left: 0%;
    width: 100%;
    background-color: var(--light-color);
  }
`;
