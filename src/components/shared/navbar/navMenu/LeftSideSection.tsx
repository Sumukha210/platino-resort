import React from "react";
import { useRouter } from "next/router";
import { LeftSide } from "./styles";
import { navMenuOptions } from "./utils";
import { gsap } from "gsap";

interface LeftSideProps {
  closeMenu: () => void;
  childrenEle: gsap.utils.SelectorFunc;
  setCurrentEleNum: React.Dispatch<React.SetStateAction<number>>;
  currentEleNum: number;
}

const LeftSideSection: React.FC<LeftSideProps> = ({
  closeMenu,
  childrenEle,
  currentEleNum,
  setCurrentEleNum,
}) => {
  const router = useRouter();

  const handleMouseEnter = (index: number) => {
    if (currentEleNum != index) {
      setCurrentEleNum(index);

      gsap.from(childrenEle(".img"), {
        autoAlpha: 0,
        duration: 0.9,
        ease: "Power1.easeIn",
      });
    }
  };

  return (
    <>
      <LeftSide>
        {navMenuOptions.map((item, index) => (
          <h4
            key={item.name}
            className="heading-4 menuName"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() =>
              gsap.to(childrenEle(".img"), {
                autoAlpha: 1,
                duration: 0.9,
                ease: "Power1.easeIn",
              })
            }
            onClick={() => {
              router.push(item.path);
              closeMenu();
            }}>
            {item.name}
          </h4>
        ))}
      </LeftSide>
    </>
  );
};

export default LeftSideSection;
