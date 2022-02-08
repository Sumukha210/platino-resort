import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--secondary-200);
  color: var(--dark-color);

  .left {
    .caption {
      color: #908f8a;
    }

    .title {
      margin-bottom: 1.5rem;
    }
  }

  .right {
    margin-top: 2rem;

    .feature {
      margin-bottom: 2rem;

      @media (min-width: 576px) {
        display: flex;
      }
    }

    span {
      display: block;
    }

    svg {
      height: 32px;
      width: 32px;
      vertical-align: top;
      margin-right: 1rem;
      @media (max-width: 575.98px) {
        margin-bottom: 1rem;
      }
    }
  }
`;
