import React from "react";
import { registerLoginProps } from "./types";

const Header: React.FC<registerLoginProps> = ({ showLoginPage }) => {
  return (
    <>
      <div className="header">
        <h2 className="heading-4">{`${
          showLoginPage ? "Welcome back" : "Create a new one"
        }`}</h2>
      </div>
    </>
  );
};

export default Header;
