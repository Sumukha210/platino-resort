import React, { useRef, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { BsChevronRight } from "react-icons/bs";
import { BookNowBtn, Logo, Menu, Nav } from "./navbarStyles";
import NavMenu from "./navMenu";
import { gsap } from "gsap/dist/gsap";
import { useNavbarMenuAnimation } from "./navMenu/animations";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);
  const router = useRouter();

  const tl = useRef<gsap.core.Timeline>();

  useNavbarMenuAnimation({ firstTime, setFirstTime, children, menuOpen, tl });

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div ref={wrapperRef}>
      <NavMenu closeMenu={closeMenu} />

      <Nav>
        <div className="custom-container">
          <div className="navbar__menu">
            <Menu className="menu" onClick={handleMenu}>
              <span className={`${menuOpen ? "showCloseIcon" : ""}`}>
                {menuOpen ? <AiOutlineClose /> : <RiMenu2Fill />}
              </span>
              <span>Menu</span>
            </Menu>

            <Logo className="logo" onClick={() => router.push("/")}>
              <span>Platino</span>
              <span>Hotel - Restaurant</span>
            </Logo>

            <BookNowBtn
              className="bookNow"
              onClick={() => router.push("/book-now")}>
              <span>
                <span>Book</span>
                <span>Now</span>
              </span>
              <span>
                <BsChevronRight />
              </span>
            </BookNowBtn>
          </div>
        </div>
      </Nav>
    </div>
  );
};

export default Navbar;
