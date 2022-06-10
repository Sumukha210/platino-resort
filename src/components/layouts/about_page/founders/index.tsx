import React from "react";
import styled from "styled-components";
import { founders_team_info } from "../utils";
import NextImg from "next/image";
import { useFoundersAnimation } from "./animation";

const Founders_And_Team = () => {
  const wrapperRef = useFoundersAnimation();

  return (
    <Wrapper className="margin-top" ref={wrapperRef}>
      <div className="custom-container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-10">
            <div className="content">
              <h2 className="title heading-3">
                <span>Founders &</span> <br /> <span>Team</span>
              </h2>

              <div className="row gx-4">
                {founders_team_info.map(
                  ({ name, designation, imgSrc }, num) => (
                    <div className="col-lg-4" key={num}>
                      <div className="card">
                        <NextImg
                          src={imgSrc}
                          objectFit="cover"
                          placeholder="blur"
                        />
                        <h6 className="card__caption sub-title-4">
                          {designation}
                        </h6>
                        <h3 className="card__title sub-title-1">{name}</h3>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Founders_And_Team;

const Wrapper = styled.div`
  .title {
    margin-bottom: 2rem;

    overflow: hidden;

    span {
      display: inline-block;
    }
  }

  .card {
    @media (max-width: 991.98px) {
      margin-bottom: 4rem;
    }

    @media (max-width: 575.98px) {
      margin-bottom: 2rem;
    }

    & > span {
      min-width: 100%;
    }

    img {
      height: 400px !important;
      min-width: 100% !important;
    }

    &__caption {
      margin-top: 10px;
      font-weight: 600;
    }
  }
`;
