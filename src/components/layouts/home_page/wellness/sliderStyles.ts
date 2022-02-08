import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  margin-top: 5rem;
  overflow: hidden;

  .slide {
    height: 85vh;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0%;
      left: 0%;
      background: var(--secondary-400);
      height: 20%;
      width: 30%;
      backdrop-filter: blur(9px);
    }

    figure {
      height: 100%;
      & > span {
        height: 100% !important;
        width: 100% !important;

        img {
          height: 100% !important;
          width: 100% !important;
        }
      }
    }

    &__content {
      position: absolute;
      bottom: 2rem;
      left: 4rem;
      z-index: 2;

      color: var(--light-color);

      h2 {
        overflow: hidden;

        span {
          display: block;
        }
      }
    }

    &__dots {
      position: absolute;
      right: 4%;
      top: 50%;
      transform: translateY(-50%);

      div {
        height: 14px;
        width: 14px;
        border-radius: 50%;
        background-color: var(--light-color);

        &:not(:last-child) {
          margin-bottom: 20px;
        }

        &.active {
          background-color: var(--secondary-300);
        }
      }
    }
  }
`;
