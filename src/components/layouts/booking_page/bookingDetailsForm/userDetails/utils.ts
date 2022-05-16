import { formGroupInfoTypes } from "@/layout/contact_page/contactForm/types";
import { IUserDetails } from "@/models/BookingDetails";
import {
  nameProps,
  emailProps,
  phoneNumberProps,
  cityProps,
  postCodeProps,
  streetProps,
} from "@/utils/inputFieldProps";
import { UseFormRegister } from "react-hook-form";

export const formFieldsFun = (
  register: UseFormRegister<IUserDetails>
): formGroupInfoTypes[] => {
  return [
    {
      title: "name",
      placeholder: "Name*",
      options: register("name", { ...nameProps }),
    },
    {
      title: "email",
      placeholder: "Email Id*",
      options: register("email", { ...emailProps }),
    },
    {
      title: "telephone",
      placeholder: "Telephone number*",
      options: register("telephone", { ...phoneNumberProps }),
    },

    {
      title: "city",
      placeholder: "City*",
      options: register("city", { ...cityProps }),
    },

    {
      title: "street",
      placeholder: "Street*",
      options: register("street", { ...streetProps }),
    },

    {
      title: "country",
      placeholder: "Country*",
      options: register("country", { ...cityProps }),
    },

    {
      title: "postcode",
      placeholder: "Postcode*",
      options: register("postcode", { ...postCodeProps }),
    },

    { title: "message", placeholder: "Message", options: register("message") },
  ];
};
