import { FormState, UseFormRegister } from "react-hook-form";

export interface inputFieldDataTypes {
  register: UseFormRegister<Inputs>;
  formState: FormState<Inputs>;
}

export interface registerLoginProps {
  showLoginPage: boolean;
}

export type Inputs = {
  email: string;
  password: string;
};

export interface responseType {
  message: string;
  status: "success" | "fail";
}
