import React, { useRef, useState } from "react";
import {
  CloseMenu,
  Grid,
  NavWrapper,
  PersonalInfoBlock,
  RightSide,
} from "./styles";
import { gsap } from "gsap";
import PersonalInfo from "@/layout/contact_page/address/PersonalInfo";
// import RightSideSection from "./RightSideSection";
import LeftSideSection from "./LeftSideSection";
import { AiOutlineClose } from "react-icons/ai";
import dynamic from "next/dynamic";

interface navMenuType {
  closeMenu: () => void;
  isMenuOpen: boolean;
}

const DynamicRightSideSection = dynamic(() => import("./RightSideSection"), {
  loading: () => <p>Loading...</p>,
});

const NavMenu: React.FC<navMenuType> = ({ closeMenu, isMenuOpen }) => {
  const [currentEleNum, setCurrentEleNum] = useState<number>(0);
  const rightSideRef = useRef(null);
  const childrenEle = gsap.utils.selector(rightSideRef);

  return (
    <NavWrapper id="navMenu">
      <CloseMenu id="closeNavMenu">
        <div className="custom-container">
          <div onClick={() => closeMenu()}>
            <span>
              <AiOutlineClose />
            </span>
            <span className="sub-title-2">Close Menu</span>
          </div>
        </div>
      </CloseMenu>

      <Grid>
        <LeftSideSection
          closeMenu={closeMenu}
          childrenEle={childrenEle}
          currentEleNum={currentEleNum}
          setCurrentEleNum={setCurrentEleNum}
        />

        <RightSide ref={rightSideRef}>
          {isMenuOpen && window.innerWidth > 768 && (
            <DynamicRightSideSection currentEleNum={currentEleNum} />
          )}
        </RightSide>
      </Grid>

      <PersonalInfoBlock className="personalBlock">
        <div className="custom-container">
          <div className="content">
            <PersonalInfo />
          </div>
        </div>
      </PersonalInfoBlock>
    </NavWrapper>
  );
};

export default NavMenu;
