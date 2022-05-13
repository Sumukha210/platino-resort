import InputField from "@/element/inputField";
import { IUserDetails } from "@/models/BookingDetails";
import React from "react";
import { FormState, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { formFieldsFun } from "./utils";

interface userDetailsProps {
  register: UseFormRegister<IUserDetails>;
  formState: FormState<IUserDetails>;
}

const UserDetails: React.FC<userDetailsProps> = ({
  register,
  formState: { errors },
}) => {
  return (
    <Container>
      <div className="header">
        <h2 className="sub-title-1">Your Details</h2>
      </div>

      <div className="formContainer">
        <div className="row">
          {formFieldsFun(register).map(
            ({ title, placeholder, options }, num) => (
              <div
                className={`col-lg-${title === "message" ? 12 : 6}`}
                key={num}>
                <InputField
                  errors={errors}
                  inputName={title}
                  label={placeholder}
                  options={options}
                  inputType={title === "message" ? "textArea" : "text"}
                />
              </div>
            )
          )}
        </div>
      </div>
    </Container>
  );
};

export default UserDetails;

export const Container = styled.div`
  .header {
    margin-bottom: 2rem;
  }

  .formContainer {
    input {
      height: 54px;
    }

    textarea {
      height: 230px;
    }

    input,
    textarea {
      width: 100%;

      &::placeholder {
        opacity: 0.8;
        color: black;
        font-size: 0.8rem;
        font-family: var(--primary-font);
        font-weight: 500;
        letter-spacing: 0.6px;
      }
    }
  }
`;

const ResponseMsg = styled.h4`
  margin-top: 2rem;
`;
