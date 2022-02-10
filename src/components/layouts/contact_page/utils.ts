import { formGroupInfoTypes, Inputs } from "./contactForm/types";
import { emailProps, nameProps, subjectProps } from "@/utils/inputFieldProps";
import { UseFormRegister } from "react-hook-form";

export const formGroupInfoFun = (
  register: UseFormRegister<Inputs>
): formGroupInfoTypes[] => {
  return [
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
};
