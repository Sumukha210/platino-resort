import React from "react";
import { Container } from "./styles";

const LoadingSpinner = () => {
  return (
    <>
      <Container className="margin-top component-inner-gap">
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </Container>
    </>
  );
};

export default LoadingSpinner;
