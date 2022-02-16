import React, { useState } from "react";
import { Input, Label } from "@/element/inputField/styles";
import Button from "@/element/button";
import { getCsrfToken } from "next-auth/react";
import LoadingSpinner from "@/element/loadingSpinner";
import { Container, Wrapper } from "./styles";

const Login: React.FC = () => {
  const [token, setToken] = useState<string | undefined>();
  const getToken = async () => await getCsrfToken();
  getToken().then(res => {
    setToken(res);
  });

  return (
    <Wrapper className="row align-items-center justify-content-center">
      <div className="col-md-8 col-xl-5">
        <div className="header">
          <h1 className="heading-3 title">Platino</h1>
        </div>
        <Container>
          {token ? (
            <form method="post" action="/api/auth/signin/email">
              <input name="csrfToken" type="hidden" defaultValue={token} />
              <Label>Email address</Label>
              <Input type="email" required id="email" name="email" />
              <Button name="Sign in with Email" submitType={true} />
            </form>
          ) : (
            <LoadingSpinner />
          )}
        </Container>
      </div>
    </Wrapper>
  );
};

export default Login;
