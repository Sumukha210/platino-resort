import Button from "@/element/button";
import InputField from "@/element/inputField";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { formGroupInfoFun } from "../utils";
import { Inputs } from "./types";
import axios from "axios";

interface responseType {
  message: string;
  status: "success" | "fail";
}

const FormField = () => {
  const [response, setResonponse] = useState<responseType | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      const res = await axios.post("/api/contactus", { data });
      console.log("res", res);
      if (res.data?.status) {
        setResonponse({ message: res.data.message, status: "success" });
        reset();
      } else {
        setResonponse({ message: res.data.message, status: "fail" });
        reset();
      }
    } catch (error: any) {
      console.log("Error .....", error);
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formGroupInfoFun(register).map(
          ({ title, placeholder, options }, num) => (
            <InputField
              key={num}
              errors={errors}
              inputName={title}
              label={placeholder}
              options={options}
              inputType={title === "message" ? "textArea" : "text"}
            />
          )
        )}
        <ResponseMsg
          style={{ color: response?.status === "success" ? "green" : "red" }}>
          {response?.message}
        </ResponseMsg>
        <Button onClickHandler={() => {}} name="Submit" submitType={true} />
      </form>
    </FormWrapper>
  );
};

export default FormField;

const FormWrapper = styled.div`
  margin-top: 2rem;

  button {
    margin-top: 1rem;
  }
`;

const ResponseMsg = styled.h4`
  margin-top: 2rem;
`;
