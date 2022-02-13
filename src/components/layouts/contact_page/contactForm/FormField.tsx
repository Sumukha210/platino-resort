import Button from "@/element/button";
import InputField from "@/element/inputField";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { formGroupInfoFun } from "../utils";
import { Inputs } from "./types";

const FormField = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log("data", data);

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
              inputType={title === "subject" ? "textArea" : "text"}
            />
          )
        )}

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
