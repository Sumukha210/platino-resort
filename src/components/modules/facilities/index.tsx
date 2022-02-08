import React from "react";
import { Wrapper } from "./styles";
import useAnimation from "./useAnimation";
import LeftSideSection from "./LeftSideSection";
import RightSideSection from "./RightSideSection";

const Facilities = () => {
  const [wrapperRef] = useAnimation();

  return (
    <Wrapper ref={wrapperRef}>
      <div className="custom-container component-inner-gap">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col-lg-5">
                <LeftSideSection />
              </div>

              <div className="col-lg-6 ml-auto">
                <RightSideSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Facilities;
