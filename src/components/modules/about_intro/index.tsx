import React from "react";
import Button from "@/element/Button";
import dynamic from "next/dynamic";
import { BsArrowRight } from "react-icons/bs";
import { Wrapper } from "./styles";
import { aboutIntroData, useAboutIntroAnimation } from "./utils";

const DynamicVideoComponent = dynamic(() => import("./VideoContainer"), {
  loading: () => <p>Loading....</p>,
});

const AboutIntro = () => {
  const { caption, title, subtitle, para } = aboutIntroData;
  const { wrapperRef, router } = useAboutIntroAnimation();

  return (
    <Wrapper className="margin-top" ref={wrapperRef}>
      <div className="custom-container">
        <div className="header">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h6 className="caption">{caption}</h6>
              <h1 className="title heading-1">{title}</h1>
              <h5 className="subtitle">{subtitle}</h5>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-10 col-xl-8">
            <p className="para">{para}</p>
          </div>
        </div>

        {router.asPath != "/about" && (
          <Button
            onClickHandler={() => router.push("/about")}
            name="Explore more"
            Icon={BsArrowRight}
          />
        )}
      </div>

      {/* <VideoContainer /> */}

      <DynamicVideoComponent />
    </Wrapper>
  );
};

export default AboutIntro;
