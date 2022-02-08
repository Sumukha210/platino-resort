import Button from "@/element/Button";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { emailProps, nameProps, subjectProps } from "../utils";
import FormGroup from "./FormGroup";

export type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface formGroupInfoTypes {
  title: string;
  placeholder: string;
  options: {};
}

const FormField = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log("data", data);

  const formGroupInfo: formGroupInfoTypes[] = [
    {
      title: "name",
      placeholder: "Name",
      options: register("name", { ...nameProps }),
    },
    {
      title: "email",
      placeholder: "Email Id",
      options: register("email", { ...emailProps }),
    },
    {
      title: "subject",
      placeholder: "Subject",
      options: register("subject", { ...subjectProps }),
    },
    { title: "message", placeholder: "Message", options: register("message") },
  ];

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formGroupInfo.map(({ title, placeholder, options }, num) => (
          <FormGroup
            key={num}
            errors={errors}
            title={title}
            placeholder={placeholder}
            options={options}
          />
        ))}

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
