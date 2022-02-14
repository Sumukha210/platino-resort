import React from "react";
import Button from "@/element/button";
import InputField from "@/element/inputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { Wrapper, Container } from "./styles";
import Header from "./Header";
import { Inputs, registerLoginProps } from "./types";
import { inputFieldData } from "./util";

const AuthenticationPage: React.FC<registerLoginProps> = ({
  showLoginPage,
}) => {
  const { register, handleSubmit, formState } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log("data", data);

  return (
    <Wrapper className="row align-items-center justify-content-center">
      <div className="col-md-6 col-lg-5">
        <Header showLoginPage={showLoginPage} />

        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            {inputFieldData({ register, formState }).map((options, index) => (
              <InputField {...options} key={index} />
            ))}

            <Button onClickHandler={() => {}} name="Submit" submitType={true} />
          </form>
        </Container>
      </div>
    </Wrapper>
  );
};

export default AuthenticationPage;
