import styled from "styled-components";

export const Banner = styled.div`
  width: 100vw;
  height: calc(80vh + 150px);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
  }
`;

export const BannerImg = styled.figure`
  height: 100%;

  & > span {
    height: 100% !important;
    width: 100vw !important;

    img {
      height: 100% !important;
      width: 100% !important;
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  z-index: 2;

  display: grid;
  align-items: center;

  .title {
    color: var(--light-color);
    font-family: var(--secondary-font);
    margin-bottom: 3rem;
    overflow: hidden;

    span {
      display: block;
      visibility: hidden;
      opacity: 0;
      transform: translateY(220px);
    }
  }

  .btnContainer {
    transform: translateY(40px);
    opacity: 0;
    visibility: hidden;
  }
`;
