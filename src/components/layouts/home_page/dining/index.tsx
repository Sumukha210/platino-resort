import React from "react";
import NextImg from "next/image";
import { Wrapper } from "./styles";
import RightSection from "./RightSideSection";
import { menuNames } from "./utils";
import useAnimaton from "./useAnimaton";

const Dining = () => {
  const { wrapperRef, currentMenuNum, setCurrentMenuNum } = useAnimaton();

  return (
    <Wrapper ref={wrapperRef}>
      <div className="custom-container component-inner-gap">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row gx-lg-5">
              <div className="col-lg-6">
                <div className="left">
                  <NextImg
                    src={menuNames[currentMenuNum].imgSrc}
                    placeholder="blur"
                    className="diningImg"
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <RightSection setCurrentMenuNum={setCurrentMenuNum} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Dining;
