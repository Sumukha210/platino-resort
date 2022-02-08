import styled from "styled-components";

export const Wrapper = styled.div`
  .imgcustom-container {
    display: grid;
    grid-gap: 1.2rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .card {
    height: 500px;
    position: relative;
    cursor: pointer;

    &:nth-of-type(4) {
      img {
        object-position: right !important;
      }
    }

    @media (max-width: 767px) {
      margin-bottom: 2rem;
    }

    @media (min-width: 768px) {
      &:nth-of-type(1) {
        margin-top: 2rem;
      }

      &:nth-of-type(2) {
        margin-top: 8rem;
      }

      &:nth-of-type(3) {
        margin-top: 4rem;
      }

      &:nth-of-type(5) {
        margin-top: 3rem;
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: 0%;
      left: 0%;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.5s ease-in-out;
    }

    &:hover::after {
      background: transparent;
    }

    &__header {
      height: 100%;

      & > span {
        width: 100% !important;
        height: 100% !important;

        img {
          height: 100% !important;
          width: 100%;
        }
      }
    }

    &__body {
      position: absolute;
      bottom: 2rem;
      left: 0%;
      width: 100%;
      text-align: center;
      margin: auto;
      z-index: 2;
      color: var(--light-color);

      h4 {
        @media (min-width: 768px) and (max-width: 1199.98px) {
          font-size: 1.3rem;
        }
      }
    }
  }
`;
