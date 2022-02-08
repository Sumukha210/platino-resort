import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 5rem;

  .parentSlidecustom-container {
    @media (max-width: 991.98px) {
      width: 350% !important;
    }

    @media (max-width: 575.98px) {
      width: 500% !important;
    }
  }

  figure {
    height: 100%;

    img {
      transition: transform 1s ease-in-out;
    }

    &:hover {
      img {
        transform: scale(1.2);
      }
    }

    & > span {
      height: 100% !important;
    }
  }
`;
