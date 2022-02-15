import { inputFieldProps } from "@/element/inputField/types";
import { emailProps, passwordProps } from "@/utils/inputFieldProps";
import { inputFieldDataTypes, Inputs, responseType } from "./types";
import axios from "axios";
import { NextRouter } from "next/router";

export const inputFieldData = ({
  register,
  formState,
}: inputFieldDataTypes) => {
  const inputs: inputFieldProps[] = [
    {
      inputName: "email",
      showLabal: true,
      label: "Email",
      placeholder: "eg:- johnDoe@gmail.com",
      errors: formState.errors,
      options: register("email", { ...emailProps }),
    },
    {
      inputName: "password",
      showLabal: true,
      label: "Password",
      placeholder: "eg:- johnDoe123@hhh",
      errors: formState.errors,
      inputType: "password",
      options: register("password", { ...passwordProps }),
    },
  ];

  return inputs;
};

export interface submitRegisterDataProps {
  data: Inputs;
  setResponse: React.Dispatch<React.SetStateAction<responseType | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  router: NextRouter;
}

export const submitRegisterData = async ({
  data: { email, password },
  setResponse,
  setLoading,
  router,
}: submitRegisterDataProps) => {
  try {
    setLoading(true);
    const res = await axios.post("api/admin/register", { email, password });
    const { status, message } = res.data;
    if (message === "P2002") {
      setResponse({ message: "Email is already exists", status: "fail" });
      setLoading(false);
    } else {
      setResponse({ message, status });
      setTimeout(() => {
        router.replace("/admin/dashboard");
      }, 1500);
    }
  } catch (error) {
    setLoading(false);
    setResponse({
      message: "Internal server error, please try after sometime",
      status: "fail",
    });
  }
};

export const submitLoginData = () => {};
