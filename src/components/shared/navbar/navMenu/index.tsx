import React, { useRef, useState } from "react";
import { CloseMenu, Grid, NavWrapper, PersonalInfoBlock } from "./styles";
import { gsap } from "gsap";
import PersonalInfo from "@/layout/contact_page/address/PersonalInfo";
import RightSideSection from "./RightSideSection";
import LeftSideSection from "./LeftSideSection";
import { AiOutlineClose } from "react-icons/ai";

interface navMenuType {
  closeMenu: () => void;
}

const NavMenu: React.FC<navMenuType> = ({ closeMenu }) => {
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

        <RightSideSection
          rightSideRef={rightSideRef}
          currentEleNum={currentEleNum}
        />
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
