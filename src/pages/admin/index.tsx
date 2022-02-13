import React, { useState } from "react";
import AuthenticationPage from "@/layout/admin_page/authentication_page";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import Button from "@/element/button";
import { useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();
  const [showLoginPage, setShowLoginPage] = useState(false);

  return (
    <Wrapper className="component-inner-gap">
      <div className="custom-container">
        <Container>
          <Button
            textBtn={true}
            onClickHandler={() => router.replace("/")}
            name="back to home"
            Icon={BsArrowRight}
          />

          <Button
            onClickHandler={() => setShowLoginPage(!showLoginPage)}
            name={showLoginPage ? "Login" : "Register"}
          />
        </Container>

        <AuthenticationPage showLoginPage={showLoginPage} />
      </div>
    </Wrapper>
  );
};

export default Admin;

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
