import React from "react";
import { Wrapper, Container } from "./styles";
import Header from "./Header";
import { registerLoginProps } from "./types";
import Form from "./Form";

const AuthenticationPage: React.FC<registerLoginProps> = ({
  showLoginPage,
}) => {
  return (
    <Wrapper className="row align-items-center justify-content-center">
      <div className="col-md-6 col-xl-5">
        <Header showLoginPage={showLoginPage} />

        <Container>
          <Form showLoginPage={showLoginPage} />
        </Container>
      </div>
    </Wrapper>
  );
};

export default AuthenticationPage;
