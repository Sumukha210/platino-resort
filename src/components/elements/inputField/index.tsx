import { Group, TextArea, Input, ErrorText, Label } from "./styles";
import { inputFieldProps } from "./types";

const InputField: React.FC<inputFieldProps> = ({
  inputName,
  errors,
  options,
  label,
  showLabal = false,
  inputType = "textInput",
  placeholder,
}) => {
  return (
    <Group>
      {showLabal && (
        <Label className="sub-title-3" htmlFor={inputName}>
          {label}
        </Label>
      )}
      {inputType === "textArea" ? (
        <TextArea
          placeholder={label}
          {...options}
          cols={30}
          rows={10}></TextArea>
      ) : (
        <Input
          placeholder={placeholder ? placeholder : label}
          {...options}
          type={inputType}
        />
      )}
      <ErrorText className="sub-title-4">
        {errors[inputName] && errors[inputName].message}
      </ErrorText>
    </Group>
  );
};

export default InputField;
