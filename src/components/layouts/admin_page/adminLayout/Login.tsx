import React from "react";
import styled from "styled-components";
import { AdminProps } from "./types";
import { Input, Label } from "@/element/inputField/styles";
import Button from "@/element/button";

const Login: React.FC<AdminProps> = ({ csrfToken }) => {
  return (
    <Wrapper className="row align-items-center justify-content-center">
      <div className="col-md-8 col-xl-5">
        <div className="header">
          <h1 className="heading-3 title">Platino</h1>
          <h6 className="subtitle caption-2">
            (Please sign in, in order to continue your booking)
          </h6>
        </div>
        <Container>
          <form method="post" action="/api/auth/signin/email">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <Label>Email address</Label>
            <Input type="email" required id="email" name="email" />
            <Button name="Sign in with Email" submitType={true} />
          </form>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
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

const Container = styled.div`
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
