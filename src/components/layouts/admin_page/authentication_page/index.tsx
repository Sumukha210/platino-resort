import React from "react";
import Button from "@/element/button";
import InputField from "@/element/inputField";
import { emailProps, passwordProps } from "@/utils/inputFieldProps";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

type Inputs = {
  email: string;
  password: string;
};

interface AuthenticationPageProps {
  showLoginPage: boolean;
}

const AuthenticationPage: React.FC<AuthenticationPageProps> = ({
  showLoginPage,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log("data", data);

  return (
    <Wrapper className="row align-items-center justify-content-center">
      <div className="col-md-6 col-lg-5">
        <div className="header">
          <h2 className="heading-4">{`Welcome ${
            showLoginPage ? "back to login" : "to register"
          }`}</h2>
        </div>

        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              inputName="email"
              showLabal={true}
              label="Email"
              errors={errors}
              options={register("email", { ...emailProps })}
              placeholder="Please enter your email"
            />

            <InputField
              inputName="password"
              showLabal={true}
              label="Password"
              errors={errors}
              inputType="password"
              options={register("password", { ...passwordProps })}
              placeholder="Please enter your password"
            />

            <Button onClickHandler={() => {}} name="Submit" submitType={true} />
          </form>
        </Container>
      </div>
    </Wrapper>
  );
};

export default AuthenticationPage;

const Wrapper = styled.div`
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

const Container = styled.div`
  background: #fff;
  box-shadow: 0px 0px 3px silver;
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
