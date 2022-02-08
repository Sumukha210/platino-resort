import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

interface CustomBtnProps {
  isDarkBtn?: boolean;
}

interface btnType extends CustomBtnProps {
  name: string;
  Icon?: IconType;
  submitType?: boolean;
  onClickHandler: () => void;
}

const Button: React.FC<btnType> = ({
  name,
  Icon,
  isDarkBtn = true,
  submitType = false,
  onClickHandler,
}) => {
  return (
    <BtnContainer className="btnContainer">
      <CustomBtn
        isDarkBtn={isDarkBtn}
        type={submitType ? "submit" : "button"}
        onClick={onClickHandler}>
        <span>{name}</span>
        {Icon && (
          <span>
            <Icon />
          </span>
        )}
      </CustomBtn>
    </BtnContainer>
  );
};

export default Button;

const BtnContainer = styled.div``;

const CustomBtn = styled.button<CustomBtnProps>`
  padding: 1rem 2rem;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  background: transparent;
  border: 1px solid
    var(${props => (props.isDarkBtn ? "--dark-color" : "--light-color")});
  color: var(${props => (props.isDarkBtn ? "--dark-color" : "--light-color")});
  position: relative;
  z-index: 2;
  transition: all 0.4s ease-in;
  display: inline-block;

  @media (max-width: 767.98px) {
    padding: 0.8rem 1.6rem;
    font-size: 0.8rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    width: 0%;
    height: 100%;
    background: var(
      ${props => (props.isDarkBtn ? "--dark-color" : "--light-color")}
    );
    z-index: -1;

    transition: width 0.4s ease-in;
  }

  &:hover {
    &::before {
      width: 100%;
    }

    color: var(
      ${props => (props.isDarkBtn ? "--light-color" : "--dark-color")}
    );
    border-color: var(--primary-300);
  }

  span {
    &:not(:first-child) {
      margin-left: 1rem;
    }

    &:last-child {
      svg {
        vertical-align: middle;
        height: 24px;
        width: 24px;
      }
    }
  }
`;
