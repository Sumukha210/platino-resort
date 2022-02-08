import styled from "styled-components";

export interface RightSideType {
  background: string | null;
}

export const NavWrapper = styled.div`
  position: fixed;
  right: 0%;
  width: 0%;
  height: 100vh;
  z-index: 10000;
  background-color: var(--secondary-400);
`;

export const Grid = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    max-width: 540px;
    margin: auto;
  }
`;

export const PersonalInfoBlock = styled.div`
  @media (max-width: 1199.98px) {
    display: none;
  }

  position: relative;

  .content {
    position: absolute;
    bottom: 2rem;
    color: var(--light-color);
  }
`;

export const LeftSide = styled.div`
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 4rem;

  @media (min-width: 768px) {
    margin-left: auto;
  }

  @media (max-width: 767.98px) {
    padding: 9rem 0;
  }

  @media (max-width: 575.98px) {
    padding: 9rem 32px;
  }

  .menuName {
    position: relative;
    margin-bottom: 2rem;
    cursor: pointer;
    font-weight: 600;
    color: var(--light-color);
    transition: color 0.5s ease-in-out;

    @media (min-width: 768px) {
      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        width: 0%;
        left: 0%;
        height: 3px;
        background-color: var(--secondary-200);
        transition: width 0.5s ease-in-out;
      }
    }

    &:hover {
      color: var(--secondary-200);

      @media (min-width: 768px) {
        &::after {
          width: 100%;
        }
      }
    }
  }
`;

export const RightSide = styled.div`
  position: relative;
  height: 100vh;

  @media (min-width: 768px) {
    .img {
      background-size: cover !important;
      background-repeat: no-repeat !important;
      background-position: center !important;
      height: 100vh !important;
      width: 100% !important;
    }
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--light-color);
  z-index: 3;
`;
