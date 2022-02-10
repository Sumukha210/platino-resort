import Button from "@/element/Button";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log("data", data);

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Button onClickHandler={() => {}} name="Submit" submitType={true} />
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div``;

const Container = styled.div``;

const Form = styled.form``;
