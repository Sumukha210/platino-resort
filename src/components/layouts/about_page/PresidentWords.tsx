import React from "react";
import styled from "styled-components";
import NextImg from "next/image";
import { founders_team_info } from "./utils";

const PresidentWords = () => {
  const { imgSrc, designation, quote, name } = founders_team_info[0];

  return (
    <Wrapper className="margin-top component-inner-gap">
      <div className="custom-container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-10">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-5">
                <div className="left">
                  <NextImg src={imgSrc} objectFit="cover" placeholder="blur" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right">
                  <h6 className="caption-2">{designation}</h6>
                  <h2 className="heading-4 bold">{name}</h2>
                  <p className="sub-title-2">{quote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PresidentWords;

const Wrapper = styled.div`
  background-color: var(--secondary-200);

  .left {
    @media (max-width: 991.98px) {
      margin-bottom: 1rem;
    }
    & > span {
      height: 650px !important;
      width: 100% !important;

      @media (max-width: 575.98px) {
        height: 500px !important;
      }
    }
  }

  .right {
    color: var(--dark-color);
    h6 {
      opacity: 0.4;
    }

    p {
      margin-top: 1.5rem;
    }
  }
`;
