import styled from "styled-components";
import { CustomBtnProps } from "./types";

const Button = styled.button<CustomBtnProps>`
  padding: 1rem 2rem;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  background: transparent;
  position: relative;
  cursor: pointer;
  z-index: 2;

  span {
    &:not(:first-child) {
      margin-left: ${({ textBtn }) => (textBtn ? "12px" : "16px")};
    }

    &:last-child {
      svg {
        vertical-align: middle;
        height: ${({ textBtn }) => (textBtn ? "18px" : "24px")};
        width: ${({ textBtn }) => (textBtn ? "18px" : "24px")};
      }
    }
  }
`;

export const BtnContainer = styled.div``;

export const StandardBtn = styled(Button)`
  border: 1px solid
    var(${props => (props.isDarkBtn ? "--dark-color" : "--light-color")});
  color: var(${props => (props.isDarkBtn ? "--dark-color" : "--light-color")});
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
`;

export const TextBtn = styled(Button)`
  border: none;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 4px;
  font-weight: 600;

  &::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 0%;
    background-color: var(--dark-color);
    height: 3px;
    transition: width 0.3s ease-in;
  }

  &:hover::after {
    width: 100%;
  }
`;
