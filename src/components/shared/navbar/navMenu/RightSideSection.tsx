import React from "react";
import { Logo, RightSide } from "./styles";
import { navMenuOptions } from "./utils";

interface RightSideSectionProps {
  rightSideRef: React.MutableRefObject<null>;
  currentEleNum: number;
}

const RightSideSection: React.FC<RightSideSectionProps> = ({
  rightSideRef,
  currentEleNum,
}) => {
  return (
    <>
      <RightSide ref={rightSideRef}>
        <div
          className="img"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${navMenuOptions[currentEleNum].img.src})`,
          }}></div>

        <Logo className="logoBlock">
          <h1 className="heading-2 bold">Platino</h1>
        </Logo>
      </RightSide>
    </>
  );
};

export default RightSideSection;
