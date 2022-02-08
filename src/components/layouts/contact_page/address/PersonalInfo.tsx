import React from "react";
import styled from "styled-components";

const PersonalInfo = () => {
  return (
    <PersonalInfoBlock>
      <div className="group">
        <h4 className="sub-title-3">address</h4>
        <h6 className="sub-title-4">
          <span> Thandige(v)</span>
          <span> Sorab(tq)</span>
          <span> shimoga(dist)</span>
          <span> karnataka(India) - 577201 </span>
        </h6>
      </div>

      <div className="group">
        <h4 className="sub-title-3">contact</h4>
        <h6 className="sub-title-4">
          <span>9449022673 (mobile number)</span>
          <span>sumukhakb210@gmail.com (email)</span>
        </h6>
      </div>
    </PersonalInfoBlock>
  );
};

export default PersonalInfo;

const PersonalInfoBlock = styled.div`
  .group {
    &:first-child {
      margin-bottom: 2rem;
    }

    h4 {
      margin-bottom: 1rem;
      text-transform: uppercase;
    }
    h6 {
      font-weight: 400;
      span {
        display: block;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }
`;
