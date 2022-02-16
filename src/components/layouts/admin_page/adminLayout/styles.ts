import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 80vh;

  .header {
    text-align: center;
    color: var(--dark-color);
    .title {
      font-weight: 400;
      letter-spacing: 4px;
      text-transform: uppercase;
    }

    .subtitle {
      letter-spacing: 0px;
      margin-top: 8px;
      font-weight: 600;
      letter-spacing: 1px;
    }
    margin-bottom: 2rem;
  }
`;

export const Container = styled.div`
  background: #fff;
  box-shadow: 0px 0px 2px silver;
  padding: 3rem;

  input {
    width: 100%;
  }

  .btnContainer {
    margin-top: 2rem;
    width: 100%;
    button {
      width: 100%;
    }
  }
`;
