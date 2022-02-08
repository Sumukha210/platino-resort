import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--dark-color);

  .caption {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 36px;
    letter-spacing: 0.42em;
    opacity: 0.8;

    @media (max-width: 767.98px) {
      font-size: 10px;
    }
  }

  .title {
    color: var(--primary-300);
  }

  .subtitle {
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 36px;
    letter-spacing: 0.335em;
    opacity: 0.4;
    color: var(--primary-300);
    margin-left: 3rem;

    @media (max-width: 991.98px) {
      margin-left: 0px;
    }

    @media (max-width: 767.98px) {
      font-size: 12px;
      opacity: 0.7;
      font-weight: 600;
      margin-top: 1rem;
    }
  }

  .para {
    margin: 64px 0;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 42px;

    @media (max-width: 991.98px) {
      margin: 3rem 0;
    }

    @media (max-width: 767.98px) {
      font-size: 1.1rem;
      line-height: 34px;
      margin: 2rem 0;
    }
  }

  .btnContainer {
    text-align: center;
  }

  .videocustom-container {
    height: 650px;
    width: 100vw;
    margin-top: 80px;

    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
