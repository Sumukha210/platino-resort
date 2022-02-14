import React, { useState } from "react";
import Button from "@/element/button";
import InputField from "@/element/inputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { Wrapper, Container } from "./styles";
import Header from "./Header";
import { Inputs, registerLoginProps } from "./types";
import { inputFieldData } from "./util";
import axios from "axios";
import ResponseText from "@/element/ResponseText";

interface responseType {
  message: string;
  status: "success" | "fail";
}

const AuthenticationPage: React.FC<registerLoginProps> = ({
  showLoginPage,
}) => {
  const [response, setResponse] = useState<responseType | null>(null);
  const { register, handleSubmit, formState } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    try {
      const res = await axios.post("api/admin/register", { email, password });
      console.log("Response", res.data);
      const { status, message } = res.data;
      if (message === "P2002") {
        setResponse({ message: "Email is already exists", status: "fail" });
      } else {
        setResponse({ message, status });
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Wrapper className="row align-items-center justify-content-center">
      <div className="col-md-6 col-lg-5">
        <Header showLoginPage={showLoginPage} />

        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            {inputFieldData({ register, formState }).map((options, index) => (
              <InputField {...options} key={index} />
            ))}

            {response && (
              <ResponseText
                status={response?.status}
                message={response?.message}
              />
            )}

            <Button onClickHandler={() => {}} name="Submit" submitType={true} />
          </form>
        </Container>
      </div>
    </Wrapper>
  );
};

export default AuthenticationPage;
