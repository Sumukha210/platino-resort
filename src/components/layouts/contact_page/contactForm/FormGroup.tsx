import { DeepMap, FieldError, FieldValues } from "react-hook-form";
import styled from "styled-components";

export interface FormGroupTypes {
  title: string;
  errors: DeepMap<FieldValues, FieldError>;
  options: {};
  placeholder: string;
}

const FormGroup: React.FC<FormGroupTypes> = ({
  title,
  errors,
  options,
  placeholder,
}) => {
  return (
    <Group>
      {title === "message" ? (
        <TextArea
          placeholder={placeholder}
          {...options}
          cols={30}
          rows={10}></TextArea>
      ) : (
        <Input placeholder={placeholder} {...options} />
      )}
      <ErrorText className="sub-title-4">
        {errors[title] && errors[title].message}
      </ErrorText>
    </Group>
  );
};

export default FormGroup;

const Group = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  height: 45px;
  width: 80%;
  color: var(--dark-color);
  padding-left: 16px;
  border: 1px solid var(--secondary-200);
  outline: none;

  &::placeholder {
    opacity: 0.9;
  }

  @media (max-width: 991.98px) {
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  width: 80%;
  color: var(--dark-color);
  padding: 1rem;
  border-color: var(--dark-color);
  border: 1px solid var(--secondary-200);
  outline: none;

  @media (max-width: 991.98px) {
    width: 100%;
  }

  &::placeholder {
    opacity: 0.9;
  }
`;

const ErrorText = styled.h6`
  color: #f57979;
  margin-top: 6px;
  font-weight: 500;
`;
