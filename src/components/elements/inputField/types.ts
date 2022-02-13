import { DeepMap, FieldError, FieldValues } from "react-hook-form";

export interface inputFieldProps {
  inputName: string;
  errors: DeepMap<FieldValues, FieldError>;
  options: {};
  label: string;
  showLabal?: boolean;
  inputType?: "text" | "textArea" | "password";
}
