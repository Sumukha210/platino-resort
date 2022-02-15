import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh;

  .header {
    h2 {
      font-weight: 600;
      text-align: center;
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
