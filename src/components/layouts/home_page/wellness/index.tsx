import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Slider from "./slider";

const Wellness = () => {
  const { push } = useRouter();

  return (
    <Wrapper>
      <div className="header">
        <div className="custom-container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-lg-7">
                  <h2 className="heading-3 bold">Wellness</h2>
                  <p className="sub-title-2">
                    Wellness is very much on the menu. The Resort has both
                    indoor and outdoor swimming pool, on two different levels,
                    plus a spa, a mosaic-tiled hammam with stone seating, and a
                    Jacuzzi.
                  </p>
                  <h5 className="caption-3" onClick={() => push("/wellness")}>
                    Explore Wellness & Spa
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider />
    </Wrapper>
  );
};

export default Wellness;

const Wrapper = styled.div`
  background-color: var(--secondary-400);
  width: 100%;
  padding-top: 3rem;

  .header {
    color: var(--light-color);

    p {
      margin: 1.5rem 0;
    }

    h5 {
      text-transform: initial;
      cursor: pointer;
    }
  }
`;
