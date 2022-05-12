import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper id="footer">
      <div className="custom-container">
        <div className="content">
          <h6 className="sub-title-3">© Copyright 2021</h6>
          <h6 className="sub-title-3">Platino Resort</h6>
          <h6 className="sub-title-3">sumukhakb210@gmail.com</h6>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  padding: 20px 0px;
  background: white;
  color: var(--gray-color);

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 575.98px) {
      flex-direction: column;
    }

    h6 {
      flex: 1;
      text-align: center;
      font-weight: 500;

      &:nth-child(2) {
        font-weight: bold;
        color: var(--dark-color);
      }

      @media (max-width: 575.98px) {
        margin-bottom: 10px;

        &:nth-child(1) {
          order: 1;
        }
      }
    }
  }
`;
