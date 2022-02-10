import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  z-index: 10000;
  padding: 0px !important;

  &::after {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    background-color: var(--light-color);
    height: 100%;
    z-index: -1;
    transform: translateY(-120%);
    transition: transform 0.8s ease-in-out;
  }

  &.active {
    .menu span,
    .logo span,
    .bookNow > span {
      color: var(--dark-color);
      transition: color 0.8s ease-in-out;
    }

    &::after {
      content: "";
      transform: translateY(0%);
      transition: all 0.8s ease-in-out;
    }
  }

  @media (max-width: 991.98px) {
    padding: 20px 0;
  }

  .navbar__menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--light-color);
    cursor: pointer;
    padding-top: 8px;
    padding-bottom: 1rem;

    svg {
      height: 24px;
      width: 24px;
    }

    .menu span,
    .logo span,
    .bookNow > span {
      cursor: pointer;
      transition: color 0.8s ease-in-out;
    }

    .menu span:last-child,
    .bookNow > span:first-child {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }

    .menu span:first-child,
    .bookNow > span:first-child {
      margin-right: 10px;

      @media (max-width: 575.98px) {
        margin-right: 6px;
      }
    }
  }
`;

export const Menu = styled.div`
  position: relative;
  z-index: 10001;

  @media (max-width: 575.98px) {
    order: 2;
  }

  svg {
    vertical-align: middle;
  }
`;

export const Logo = styled.div`
  text-align: center;
  position: relative;
  z-index: 999;

  @media (max-width: 575.98px) {
    order: 1;
  }

  span {
    display: block;
    font-family: var(--secondary-font);
    font-style: normal;

    &:first-child {
      font-weight: bold;
      font-size: 3rem;
      line-height: 64px;

      @media (max-width: 767.98px) {
        font-size: 1.5rem;
        line-height: 32px;
      }
    }

    &:last-child {
      font-weight: bold;
      font-size: 0.65rem;
      line-height: 13px;
      letter-spacing: 0.075em;
      margin-top: 4px;
    }
  }
`;

export const BookNowBtn = styled.div`
  @media (max-width: 575.98px) {
    display: none;
  }

  & > span:first-child {
    display: inline-block;

    span:first-child {
      margin-right: 6px;
    }
  }

  & > span:last-child {
    svg {
      vertical-align: middle;
    }
  }

  &:hover {
    span:first-child {
      transform: translateX(-10px);
    }
  }

  span {
    transition: transform 0.3s ease-in-out;

    @media (max-width: 767.98px) {
      font-size: 0.9rem;
    }
  }
`;
