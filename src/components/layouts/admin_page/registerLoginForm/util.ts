import { inputFieldProps } from "@/element/inputField/types";
import { emailProps, passwordProps } from "@/utils/inputFieldProps";
import { FormState, UseFormRegister } from "react-hook-form";
import { Inputs } from "./types";

interface inputFieldDataTypes {
  register: UseFormRegister<Inputs>;
  formState: FormState<Inputs>;
}

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
