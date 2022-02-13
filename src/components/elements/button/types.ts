import { IconType } from "react-icons";

export interface CustomBtnProps {
  isDarkBtn?: boolean;
  textBtn?: boolean;
}

export interface btnType extends CustomBtnProps {
  name: string;
  Icon?: IconType;
  submitType?: boolean;
  onClickHandler: () => void;
}
