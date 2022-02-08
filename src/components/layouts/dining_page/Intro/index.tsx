import React from "react";
import NextImg from "next/image";
import menuImg1 from "@/assets/images/menu-5.png";
import menuImg2 from "@/assets/images/menu-7.png";
import menuImg3 from "@/assets/images/menu-8.png";
import { useIntroAnimation } from "./useIntroAnimation";
import { IntroWrapper } from "./styles";

const Intro = () => {
  const wrapperRef = useIntroAnimation();

  return (
    <IntroWrapper className="component-inner-gap" ref={wrapperRef}>
      <div className="custom-container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h6 className="caption-2 caption">Eat & Drink</h6>
              <h2 className="heading-4 para">
                Home to a warm and welcoming vibe where life’s simplicities are
                delighted in, Platino affords the perfect setting for
                experiences to be had and memories to be made.
              </h2>

              <div className="imgContainer ">
                <div className="row gap-3">
                  <div className="col-sm-6 col-md-4">
                    <NextImg src={menuImg2} />
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <NextImg src={menuImg1} />
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <NextImg src={menuImg3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IntroWrapper>
  );
};

export default Intro;
