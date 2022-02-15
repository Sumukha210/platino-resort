import React from "react";
import { BtnContainer, StandardBtn, TextBtn } from "./styles";
import { btnType } from "./types";

const Button: React.FC<btnType> = ({
  name,
  Icon,
  isDarkBtn = true,
  submitType = false,
  onClickHandler = () => {},
  textBtn = false,
  disabled = false,
}) => {
  const btnChildren = (
    <>
      <span>{name}</span>
      {Icon && (
        <span>
          <Icon />
        </span>
      )}
    </>
  );

  return (
    <BtnContainer className="btnContainer">
      {textBtn ? (
        <TextBtn textBtn={true} onClick={onClickHandler}>
          {btnChildren}
        </TextBtn>
      ) : (
        <StandardBtn
          disabled={disabled}
          isDarkBtn={isDarkBtn}
          type={submitType ? "submit" : "button"}
          onClick={onClickHandler}>
          {btnChildren}
        </StandardBtn>
      )}
    </BtnContainer>
  );
};

export default Button;
