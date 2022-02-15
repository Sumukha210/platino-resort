import { useEffect, useState } from "react";
import InputField from "@/element/inputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { inputFieldData, submitLoginData, submitRegisterData } from "./util";
import ResponseText from "@/element/ResponseText";
import { useRouter } from "next/router";
import { Inputs, registerLoginProps, responseType } from "./types";
import Button from "@/element/button";

const Form: React.FC<registerLoginProps> = ({ showLoginPage }) => {
  const { register, handleSubmit, formState, reset } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [response, setResponse] = useState<responseType | null>(null);

  useEffect(() => {
    if (response) {
      setTimeout(() => {
        setResponse(null);
      }, 3000);
    }
  }, [response]);

  useEffect(() => {
    reset();
    setLoading(false);
    setResponse(null);
  }, [showLoginPage]);

  const onSubmit: SubmitHandler<Inputs> = async data => {
    if (loading === false) {
      if (showLoginPage) {
        submitLoginData();
      } else {
        submitRegisterData({ data, setResponse, setLoading, router });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputFieldData({ register, formState }).map((options, index) => (
          <InputField {...options} key={index} />
        ))}

        {response && (
          <ResponseText status={response?.status} message={response?.message} />
        )}

        <Button disabled={loading} name="Submit" submitType={true} />
      </form>
    </>
  );
};

export default Form;
